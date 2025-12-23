import { BrainCircuit, Bot, Cpu, CircuitBoard, Sparkles, Network } from "lucide-react";

const aiFeatures = [
  {
    icon: BrainCircuit,
    title: "IA Generativa",
    description: "Criação automática de conteúdo personalizado, imagens e textos otimizados para seu público.",
  },
  {
    icon: Bot,
    title: "Chatbots Inteligentes",
    description: "Atendimento 24/7 com IA que aprende e melhora continuamente a experiência do cliente.",
  },
  {
    icon: Cpu,
    title: "Análise Preditiva",
    description: "IA que analisa comportamento e prevê tendências para otimizar suas estratégias de vendas.",
  },
  {
    icon: CircuitBoard,
    title: "Automação Inteligente",
    description: "Processos automatizados com machine learning para eficiência máxima do seu negócio.",
  },
  {
    icon: Sparkles,
    title: "Personalização",
    description: "Experiências únicas para cada usuário com recomendações baseadas em IA.",
  },
  {
    icon: Network,
    title: "Integração Total",
    description: "IA integrada perfeitamente com suas ferramentas e sistemas existentes.",
  },
];

export function AIFeatures() {
  return (
    <section className="relative py-24 bg-gradient-to-b from-slate-900 to-slate-800 text-white overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-teal-400 to-transparent"></div>
        <div className="absolute top-0 left-2/4 w-px h-full bg-gradient-to-b from-transparent via-lime-400 to-transparent"></div>
        <div className="absolute top-0 left-3/4 w-px h-full bg-gradient-to-b from-transparent via-teal-400 to-transparent"></div>
      </div>
      
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-teal-500/20 to-lime-400/20 px-6 py-2 backdrop-blur-sm border border-teal-500/30 mb-6">
            <BrainCircuit className="h-5 w-5 text-lime-400" />
            <span className="text-sm">Tecnologia de Ponta</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-4">
            Transforme seu negócio com{" "}
            <span className="bg-gradient-to-r from-teal-400 to-lime-400 bg-clip-text text-transparent">
              Inteligência Artificial
            </span>
          </h2>
          
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
            Somos especialistas em implementar soluções de IA que revolucionam a forma 
            como seu negócio opera online. Da automação à personalização, levamos sua 
            empresa para a era digital com tecnologia de ponta.
          </p>
        </div>
        
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {aiFeatures.map((feature, index) => (
            <div
              key={feature.title}
              className="group relative p-8 rounded-2xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700/50 transition-all hover:border-teal-400/50 hover:shadow-lg hover:shadow-teal-400/20 hover:scale-105"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-teal-400/0 to-lime-400/0 group-hover:from-teal-400/5 group-hover:to-lime-400/5 transition-all"></div>
              
              <div className="relative">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-teal-500 to-lime-400 text-slate-900 mb-6 group-hover:scale-110 transition-transform">
                  <feature.icon className="h-7 w-7" />
                </div>
                
                <h3 className="text-xl text-white mb-3">
                  {feature.title}
                </h3>
                
                <p className="text-gray-400">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="inline-block p-8 rounded-2xl bg-gradient-to-r from-teal-500/10 to-lime-400/10 border border-teal-400/30 backdrop-blur-sm">
            <p className="text-lg mb-4">
              <span className="text-2xl">🚀</span> Pronto para adicionar IA ao seu negócio?
            </p>
            <a
              href="#contato"
              className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-teal-400 to-lime-400 px-8 py-3 text-slate-900 transition-all hover:shadow-lg hover:shadow-teal-400/50 hover:scale-105"
            >
              Descubra como a IA pode transformar seu negócio
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
