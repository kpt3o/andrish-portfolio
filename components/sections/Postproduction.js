import SectionShell from "@/components/ui/SectionShell";
import Reveal from "@/components/ui/Reveal";
import { Video, Mic, Workflow, Eye, Users, TrendingUp } from "lucide-react";

const REELS = [
  {
    id: "DOg4_pGj1Uj", 
    platform: "instagram",
    title: "Ciberseguridad en el día a día",
    breakdown: "Ritmo acelerado con cortes precisos en los primeros 3 segundos. Se eliminaron silencios y se aplicó corrección de color para dar un tono más 'hacker'. La retención se mantuvo por encima de la media al usar subtítulos dinámicos.",
    statValue: "8,000,000",
    statLabel: "Vistas orgánicas",
    Icon: Eye
  },
  {
    id: "DbtUZM4h8-4",
    platform: "instagram",
    title: "Edicion para Influencers (Winnie Suku)",
    breakdown: "Agilización de contenido, mediante el uso de motion graphics, subtitulos fluidos, cortes especificos y buena velocidad de progresión",
    statValue: "179,500", // Cambia esto por la cantidad real de seguidores de Winnie
    statLabel: "Seguidores en la cuenta",
    Icon: Users
  },
  {
    id: "1CszNgf54LlVMnSiRzuKNCori3Omiw3MP",
    platform: "gdrive",
    title: "Proyecto Destacado",
    breakdown: "Transiciones fluidas con enmascaramiento y tracking de movimiento. Se integraron gráficos en pantalla (B-roll) para ilustrar los componentes técnicos sin perder el hilo narrativo del presentador.",
    statValue: "Top 1%", 
    statLabel: "En retención visual",
    Icon: TrendingUp
  }
];

export default function Postproduction() {
  return (
    <SectionShell
      id="edicion"
      index="03"
      eyebrow="Edición y Postproducción"
      title="Cada corte defiende una idea."
      tone="edit"
    >
      <div className="space-y-20">
        
        <div className="grid gap-12 lg:grid-cols-3">
          {REELS.map((reel, i) => {
            const StatIcon = reel.Icon;
            return (
              <Reveal key={reel.id} delay={i * 0.1}>
                <div className="flex flex-col gap-6">
                  
                  <div className="flex justify-center w-full overflow-hidden rounded-2xl border border-line bg-surface">
                    {reel.platform === "instagram" ? (
                      <iframe
                        src={`https://www.instagram.com/p/${reel.id}/embed`}
                        width="100%"
                        height="540"
                        frameBorder="0"
                        scrolling="no"
                        allowFullScreen
                        className="w-full max-w-[320px]"
                      ></iframe>
                    ) : (
                      <iframe
                        src={`https://drive.google.com/file/d/${reel.id}/preview`}
                        width="100%"
                        height="540"
                        frameBorder="0"
                        allow="autoplay"
                        allowFullScreen
                        className="w-full max-w-[320px]"
                      ></iframe>
                    )}
                  </div>
                  
                  <div className="space-y-4 px-2">
                    <h3 className="font-display text-xl font-medium text-ink">
                      {reel.title}
                    </h3>
                    <p className="text-sm text-ink-dim leading-relaxed">
                      {reel.breakdown}
                    </p>
                    
                    <div className="pt-4 border-t border-line/50 flex flex-col gap-1">
                      <div className="flex items-center gap-2 text-edit">
                        <StatIcon size={20} />
                        <p className="font-display text-2xl font-semibold">
                          {reel.statValue}
                        </p>
                      </div>
                      <p className="text-xs text-ink-faint uppercase tracking-wider pl-7">
                        {reel.statLabel}
                      </p>
                    </div>

                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

      </div>
    </SectionShell>
  );
}