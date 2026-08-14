"use client";

import { useState } from "react";
import SectionShell from "@/components/ui/SectionShell";
import Reveal from "@/components/ui/Reveal";
import { Terminal, Send, Loader2 } from "lucide-react";

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

  return (
    <SectionShell
      id="herramientas-ia"
      index="01" // <-- Cambiado a 01
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
                Introduce un parámetro o consulta técnica:
              </label>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  id="prompt"
                  type="text"
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  placeholder="Ej. Escribe un script en Python para escanear puertos abiertos..."
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

            {response && (
              <div className="mt-8 rounded-xl border border-line/50 bg-[#05070b] p-6 font-mono text-sm">
                <div className="flex items-center gap-2 border-b border-line/50 pb-3 mb-4 text-xs uppercase tracking-widest text-ink-faint">
                  <div className="h-2 w-2 rounded-full bg-dev animate-pulse"></div>
                  Output generado
                </div>
                <div className="text-ink-dim whitespace-pre-wrap leading-relaxed">
                  {response}
                </div>
              </div>
            )}
            
          </div>
        </Reveal>
      </div>
    </SectionShell>
  );
}