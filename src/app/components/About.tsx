import { Rocket, Star, Zap, TrendingUp, BrainCircuit } from "lucide-react";

const highlights = [
  {
    icon: BrainCircuit,
    title: "Especialistas em IA",
    description: "Dominamos as mais recentes tecnologias de inteligência artificial para seu negócio.",
  },
  {
    icon: Rocket,
    title: "Inovação Constante",
    description: "Sempre atualizados com as últimas tendências em IA e tecnologias do mercado digital.",
  },
  {
    icon: Star,
    title: "Qualidade Premium",
    description: "Cada projeto é desenvolvido com IA de ponta e atenção aos mínimos detalhes.",
  },
  {
    icon: Zap,
    title: "Resultados Rápidos",
    description: "IA acelera processos e entrega projetos dentro do prazo com qualidade superior.",
  },
  {
    icon: TrendingUp,
    title: "Foco em Conversão",
    description: "IA analisa e otimiza cada elemento estrategicamente para maximizar resultados.",
  },
];

export function About() {
  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-teal-50 to-lime-50 px-4 py-2 border border-teal-200 mb-6">
              <BrainCircuit className="h-4 w-4 text-teal-600" />
              <span className="text-sm text-slate-700">Liderando a Revolução da IA</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl text-slate-900 mb-6">
              Seu parceiro estratégico em{" "}
              <span className="bg-gradient-to-r from-teal-600 to-lime-600 bg-clip-text text-transparent">
                transformação digital com IA
              </span>
            </h2>
            
            <div className="space-y-4 text-lg text-slate-600">
              <p>
                Somos especialistas na criação de sites, landing pages e lojas 
                virtuais <strong className="text-slate-900">potencializados por Inteligência Artificial</strong> que 
                transformam sua presença online e impulsionam suas vendas.
              </p>
              
              <p>
                Combinamos design inovador, <strong className="text-slate-900">tecnologia de IA de ponta</strong>, 
                funcionalidade impecável e estratégias de marketing digital para oferecer 
                soluções completas que atendem às necessidades específicas do seu negócio.
              </p>
              
              <p>
                Nossa expertise em IA permite implementar chatbots inteligentes, 
                personalização em tempo real, análise preditiva e automação que 
                revolucionam a forma como você se conecta com seus clientes.
              </p>
              
              <p>
                Além do desenvolvimento, oferecemos suporte contínuo e atualizações 
                para garantir que sua presença digital esteja sempre alinhada com 
                as últimas inovações em IA e tecnologias do mercado.
              </p>
            </div>
          </div>
          
          <div className="grid gap-6 sm:grid-cols-2">
            {highlights.map((highlight, index) => (
              <div
                key={highlight.title}
                className="group relative p-6 rounded-2xl bg-gradient-to-br from-stone-50 to-stone-100 border border-slate-200 transition-all hover:shadow-lg hover:scale-105 hover:border-teal-400 overflow-hidden"
              >
                {/* Animated gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-teal-500/0 to-lime-500/0 group-hover:from-teal-500/5 group-hover:to-lime-500/5 transition-all"></div>
                
                <div className="relative">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-slate-900 to-slate-700 text-lime-400 mb-4 group-hover:scale-110 transition-transform shadow-lg shadow-slate-900/20">
                    <highlight.icon className="h-6 w-6" />
                  </div>
                  
                  <h3 className="text-xl text-slate-900 mb-2">
                    {highlight.title}
                  </h3>
                  
                  <p className="text-slate-600">
                    {highlight.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}