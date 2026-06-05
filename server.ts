import express from 'express';
import path from 'path';
import { createServer as createViteServer } from 'vite';
import { GoogleGenAI } from '@google/genai';

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Server-side Gemini helper (lazy initialized to prevent startup crashes when key is missing)
  let aiClient: GoogleGenAI | null = null;
  function getAIClient() {
    if (!aiClient) {
      const apiKey = process.env.GEMINI_API_KEY || '';
      if (!apiKey) {
        throw new Error('GEMINI_API_KEY is not defined in the environment. Please add it via the Settings menu in AI Studio.');
      }
      aiClient = new GoogleGenAI({
        apiKey,
        httpOptions: {
          headers: {
            'User-Agent': 'aistudio-build',
          }
        }
      });
    }
    return aiClient;
  }

  // 1. Core API Route: AI-powered translator and syntax analyser
  app.post('/api/analyze-arabic', async (req, res) => {
    try {
      const { text } = req.body;
      if (!text) {
        return res.status(400).json({ error: 'Text parameter is required' });
      }

      const client = getAIClient();
      console.log('Sending request to Gemini for Arabic analysis of:', text);
      const response = await client.models.generateContent({
        model: 'gemini-3.5-flash',
        contents: `You are an expert Classical Arabic Scholar and Grammarian.
Please analyze the following Arabic text: "${text}".
Identify:
1. Meaning (literal translation to English).
2. Word Classification (Ism, Fi'l, or Harf).
3. Grammar details:
   - If it's a verb (Fi'l): Identify tense (Madi/Past or Mudari/Present-Future), root letters, and pronoun subject.
   - If it's a noun (Ism): Identify case (Nominative, Accusative, or Genitive) based on ending vowels, and gender (Muzakkar/Muannas).
   - If it's a particle (Harf): Define its function (e.g. preposition / Harf Jarr).
Keep the explanation clear, friendly, extremely structured (Darul Uloom classical academy style), and easy to understand for beginners. Use JSON format strictly like this:
{
  "translation": "English translation",
  "classification": "Ism / Fi'l / Harf",
  "root": "Root letters if any",
  "gender": "Muzakkar / Muannas / Not Applicable",
  "caseEnding": "Nominative / Accusative / Genitive / Not Applicable",
  "explanation": "Detailed step-by-step beginner friendly explanation"
}`,
      });

      const responseText = response.text || '';
      // Find JSON block
      const jsonStart = responseText.indexOf('{');
      const jsonEnd = responseText.lastIndexOf('}');
      if (jsonStart !== -1 && jsonEnd !== -1) {
        const cleanedJson = responseText.substring(jsonStart, jsonEnd + 1);
        try {
          const parsed = JSON.parse(cleanedJson);
          return res.json(parsed);
        } catch (e) {
          // fallback
          return res.json({ explanation: responseText });
        }
      }

      res.json({ explanation: responseText });
    } catch (error: any) {
      console.error('Gemini error:', error);
      res.status(500).json({
        error: 'AI analysis failed',
        details: error.message || 'Make sure a valid GEMINI_API_KEY is supplied in the Settings menu.'
      });
    }
  });

  // Serve static assets and Vite middleware
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Classical Arabic Server booted successfully on http://0.0.0.0:${PORT}`);
  });
}

startServer().catch((e) => {
  console.error('Fatal startup crash:', e);
});
