import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const { prompt } = await request.json();

    // Conexión a la API gratuita de Groq
    const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.AI_API_KEY}` 
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
            - Siempre cierra tu respuesta invitando al usuario a agendar una reunión, incluyendo exactamente este enlace en formato Markdown: [Agendar en Google Calendar](https://calendar.app.google/c7S6HyPr1TqjiX3w9)` 
          },
          { 
            role: 'user', 
            content: prompt 
          }
        ]
      })
    });

    const data = await response.json();
    
    // Manejo de errores si Groq rechaza la petición
    if (data.error) {
      throw new Error(data.error.message);
    }

    const iaResponse = data.choices[0].message.content;
    return NextResponse.json({ result: iaResponse });

  } catch (error) {
    console.error("Error en el puente de IA:", error);
    return NextResponse.json(
      { error: 'Error procesando la solicitud. Verifica tu API Key o conexión.' }, 
      { status: 500 }
    );
  }
}