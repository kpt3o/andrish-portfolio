import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const { prompt } = await request.json();

    // Reemplaza esta URL con el endpoint del proveedor gratuito que elijas de tu lista de GitHub
    const response = await fetch('https://api.deepinfra.com/v1/openai/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.AI_API_KEY}` // <-- Aquí se inyecta tu clave de forma segura
      },
      body: JSON.stringify({
        model: 'meta-llama/Meta-Llama-3-70B-Instruct', 
        messages: [{ role: 'user', content: prompt }]
      })
    });

    const data = await response.json();
    
    // Extraemos la respuesta del texto generado
    const iaResponse = data.choices[0].message.content;

    return NextResponse.json({ result: iaResponse });

  } catch (error) {
    console.error("Error en la conexión con la IA:", error);
    return NextResponse.json(
      { error: 'Error procesando la solicitud de IA' }, 
      { status: 500 }
    );
  }
}