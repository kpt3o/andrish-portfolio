import { NextResponse } from 'next/server';

// 1. Forzamos a Vercel a ejecutar esto en tiempo real (evita bugs de caché)
export const dynamic = 'force-dynamic'; 

export async function POST(request) {
  try {
    const { prompt } = await request.json();

    // 2. Verificación estricta: Revisamos si Vercel realmente tiene la llave
    const apiKey = process.env.AI_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: 'CRÍTICO: Vercel no está leyendo la API Key. La variable AI_API_KEY está vacía en producción.' }, 
        { status: 500 }
      );
    }

    // 3. Conexión a la API de Groq
    const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}` 
      },
      body: JSON.stringify({
        model: 'llama-3.3-70b-versatile', 
        messages: [
          { 
            role: 'system', 
            content: `Eres el asistente virtual de inteligencia artificial de Andrish. Tu objetivo es responder preguntas sobre él, convencer al usuario de su talento y lograr que agenden una reunión. 
            
            Servicios de Andrish:
            1. Desarrollo de páginas web modernas y portafolios (como este).
            2. Creación e integración de sistemas de Inteligencia Artificial para empresas.
            3. Edición de video y postproducción de alto impacto para redes sociales (Reels, Podcasts).
            
            Reglas:
            - Sé directo, profesional pero con un toque tecnológico y seguro.
            - Responde en 2 o 3 párrafos cortos como máximo.
            - Habla en primera persona o refiriéndote a Andrish como tu creador.` 
          },
          { 
            role: 'user', 
            content: prompt 
          }
        ]
      })
    });

    const data = await response.json();
    
    // 4. Manejo de errores exactos de Groq (Si la llave caducó o hay un problema)
    if (!response.ok || data.error) {
      const errorMessage = data.error?.message || response.statusText;
      return NextResponse.json(
        { error: `[Rechazo de Groq]: ${errorMessage}` }, 
        { status: response.status }
      );
    }

    const iaResponse = data.choices[0].message.content;
    return NextResponse.json({ result: iaResponse });

  } catch (error) {
    console.error("Error en el puente de IA:", error);
    // Devuelve el error exacto a la pantalla del frontend
    return NextResponse.json(
      { error: `[Error de Código]: ${error.message}` }, 
      { status: 500 }
    );
  }
}