"use client";

import { useState } from "react";
import SectionShell from "@/components/ui/SectionShell";
import Reveal from "@/components/ui/Reveal";
import { Terminal, Send, Loader2, Calendar } from "lucide-react";

export default function AiTools() {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleGenerate = async (e) => {
    e.preventDefault();
    if (!prompt.trim()) return;

    setIsLoading(true);
    setResponse("");

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt })
      });
      
      const data = await res.json();
      
      if (data.error) {
        setResponse(`[Error del sistema]: ${data.error}`);
      } else {
        setResponse(data.result);
      }
    } catch (error) {
      setResponse("[Error crítico]: Conexión rechazada por el servidor.");
    } finally {
      setIsLoading(false);
    }
  };

  // Mantenemos esta función por si la IA sigue lanzando enlaces en el texto
  const renderResponse = (text) => {
    if (!text) return null;
    const linkRegex = /\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/g;
    const parts = [];
    let lastIndex = 0;
    let match;

    while ((match = linkRegex.exec(text)) !== null) {
      if (match.index > lastIndex) {
        parts.push(text.substring(lastIndex, match.index));
      }
      parts.push(
        <span key={match.index} className="inline-block my-2">
          <a
            href={match[2]}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded bg-dev/10 px-3 py-1 font-medium text-dev hover:bg-dev/20 transition-colors"
          >
            <Calendar size={14} />
            {match[1]}
          </a>
        </span>
      );
      lastIndex = linkRegex.lastIndex;
    }

    if (lastIndex < text.length) {
      parts.push(text.substring(lastIndex));
    }
    return parts;
  };

  return (
    <SectionShell
      id="herramientas-ia"
      index="01"
      eyebrow="Laboratorio IA"
      title="Automatización de análisis."
      tone="cyan"
    >
      <div className="space-y-8">
        <Reveal>
          <div className="rounded-2xl border border-line bg-surface/60 p-8">
            
            <form onSubmit={handleGenerate} className="flex flex-col gap-4">
              <label htmlFor="prompt" className="text-sm text-ink-dim flex items-center gap-2">
                <Terminal size={16} className="text-dev" />
                Hazle una pregunta a mi asistente sobre mis servicios:
              </label>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  id="prompt"
                  type="text"
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  placeholder="Ej. ¿Qué incluye tu servicio de desarrollo web?"
                  className="w-full rounded-lg border border-line bg-surface p-4 text-ink placeholder:text-ink-faint focus:border-dev focus:outline-none focus:ring-1 focus:ring-dev transition-all"
                  disabled={isLoading}
                />
                
                <button
                  type="submit"
                  disabled={isLoading || !prompt.trim()}
                  className="flex items-center justify-center gap-2 rounded-lg bg-dev px-8 py-4 font-medium text-[#05070b] hover:bg-dev/90 disabled:opacity-50 disabled:cursor-not-allowed transition-all shrink-0"
                >
                  {isLoading ? (
                    <Loader2 size={20} className="animate-spin" />
                  ) : (
                    <>
                      Ejecutar <Send size={18} />
                    </>
                  )}
                </button>
              </div>
            </form>

            {/* Consola de Respuesta */}
            {response && (
              <div className="mt-8 rounded-xl border border-line/50 bg-[#05070b] p-6 font-mono text-sm animate-in fade-in slide-in-from-top-4 duration-500">
                <div className="flex items-center gap-2 border-b border-line/50 pb-3 mb-4 text-xs uppercase tracking-widest text-ink-faint">
                  <div className="h-2 w-2 rounded-full bg-dev animate-pulse"></div>
                  Output generado
                </div>
                
                <div className="text-ink-dim whitespace-pre-wrap leading-relaxed">
                  {renderResponse(response)}
                </div>

                {/* EL BOTÓN MAGNÉTICO QUE APARECE DESPUÉS */}
                {!isLoading && (
                  <div className="mt-8 flex justify-center border-t border-line/10 pt-8 animate-in fade-in zoom-in duration-700 delay-300 fill-mode-both">
                    <a
                      href="https://calendar.app.google/c7S6HyPr1TqjiX3w9"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative inline-flex items-center gap-3 rounded-xl bg-dev px-8 py-4 font-display text-lg font-medium text-[#05070b] hover:bg-dev/90 hover:shadow-[0_0_30px_rgba(99,217,242,0.4)] transition-all duration-300 transform hover:-translate-y-1"
                    >
                      <Calendar size={22} className="transition-transform group-hover:scale-110" />
                      Agendar videollamada
                      {/* Efecto de anillo expansivo al hacer hover */}
                      <div className="absolute inset-0 rounded-xl ring-2 ring-dev/50 ring-offset-2 ring-offset-[#05070b] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </a>
                  </div>
                )}
              </div>
            )}
            
          </div>
        </Reveal>
      </div>
    </SectionShell>
  );
}