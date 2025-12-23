import { Monitor, TrendingUp, ShoppingCart, Check } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const services = [
  {
    icon: Monitor,
    title: "Criação de Sites",
    description: "Desenvolvemos sites responsivos e otimizados para SEO, com recursos de IA integrados para personalização e análise de comportamento do usuário.",
    features: [
      "Design responsivo e moderno",
      "Otimização para SEO com IA",
      "Chatbots inteligentes integrados",
      "Performance otimizada",
    ],
    image: "https://images.unsplash.com/photo-1637502877428-27e6553a8817?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXNpZ24lMjBsYXB0b3B8ZW58MXx8fHwxNzY2MzQ2MDY3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    icon: TrendingUp,
    title: "Landing Pages",
    description: "Landing pages com IA para teste A/B automático, copywriting otimizado e personalização em tempo real baseada no comportamento do visitante.",
    features: [
      "Copywriting otimizado por IA",
      "Personalização inteligente",
      "CTAs estratégicos adaptativos",
      "Alta taxa de conversão",
    ],
    image: "https://images.unsplash.com/photo-1533750349088-cd871a92f312?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwbWFya2V0aW5nJTIwc3RyYXRlZ3l8ZW58MXx8fHwxNzY2Mzg1NjI1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    icon: ShoppingCart,
    title: "Lojas Virtuais",
    description: "E-commerce com IA para recomendações personalizadas, análise preditiva de estoque e chatbots de atendimento 24/7 que aumentam suas vendas.",
    features: [
      "Recomendações com IA",
      "Atendimento inteligente 24/7",
      "Análise preditiva de vendas",
      "Gestão automática de estoque",
    ],
    image: "https://images.unsplash.com/photo-1727407209320-1fa6ae60ee05?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjBzaG9wcGluZ3xlbnwxfHx8fDE3NjY0Mzk5NjN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
];

export function Services() {
  return (
    <section id="servicos" className="py-24 bg-stone-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl text-slate-900 mb-4">
            Nossos Serviços{" "}
            <span className="bg-gradient-to-r from-teal-600 to-lime-600 bg-clip-text text-transparent">
              Potencializados por IA
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto">
            Soluções completas com inteligência artificial para transformar sua presença online e 
            impulsionar seus resultados
          </p>
        </div>
        
        <div className="space-y-24">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`grid gap-8 lg:grid-cols-2 items-center ${
                index % 2 === 1 ? "lg:grid-flow-dense" : ""
              }`}
            >
              <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-700 text-lime-400 mb-6 shadow-lg shadow-slate-900/20">
                  <service.icon className="h-8 w-8" />
                </div>
                
                <h3 className="text-2xl sm:text-3xl text-slate-900 mb-4">
                  {service.title}
                </h3>
                
                <p className="text-lg text-slate-600 mb-6">
                  {service.description}
                </p>
                
                <ul className="space-y-3">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-teal-100 to-lime-100 flex items-center justify-center mt-0.5">
                        <Check className="h-4 w-4 text-teal-600" />
                      </div>
                      <span className="text-slate-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className={index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}>
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-teal-500 to-lime-500 rounded-2xl opacity-25 group-hover:opacity-40 blur transition-opacity"></div>
                  <div className="relative overflow-hidden rounded-2xl shadow-xl border border-slate-200">
                    <ImageWithFallback
                      src={service.image}
                      alt={service.title}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}