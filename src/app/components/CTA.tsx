import { ArrowRight, Mail, Phone, BrainCircuit } from "lucide-react";

export function CTA() {
  return (
    <section id="contato" className="relative py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-teal-500 to-lime-400 rounded-full blur-3xl animate-pulse"></div>
      </div>
      
      <div className="relative mx-auto max-w-4xl px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-teal-500/20 to-lime-400/20 px-6 py-2 backdrop-blur-sm border border-teal-500/30 mb-8">
          <BrainCircuit className="h-5 w-5 text-lime-400" />
          <span className="text-sm">Transformação Digital com IA</span>
        </div>
        
        <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-6">
          Pronto para transformar seu negócio com{" "}
          <span className="bg-gradient-to-r from-teal-400 to-lime-400 bg-clip-text text-transparent">
            Inteligência Artificial
          </span>?
        </h2>
        
        <p className="text-lg sm:text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
          Entre em contato conosco e descubra como a IA pode revolucionar seu negócio 
          e alcançar resultados extraordinários online.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <a
            href="mailto:contato@agencia.com"
            className="group inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-teal-400 to-lime-400 px-8 py-4 text-slate-900 transition-all hover:shadow-lg hover:shadow-teal-400/50 hover:scale-105"
          >
            <Mail className="h-5 w-5" />
            Envie um E-mail
            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </a>
          
          <a
            href="tel:+5511999999999"
            className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-teal-400 px-8 py-4 text-white transition-all hover:bg-teal-500/10"
          >
            <Phone className="h-5 w-5" />
            Ligue Agora
          </a>
        </div>
        
        <div className="grid gap-8 sm:grid-cols-3 max-w-3xl mx-auto">
          <div className="flex flex-col items-center gap-2 p-4 rounded-xl bg-slate-800/50 backdrop-blur-sm border border-slate-700/50">
            <div className="text-2xl">⚡</div>
            <div className="text-gray-300">Resposta em 24h</div>
          </div>
          
          <div className="flex flex-col items-center gap-2 p-4 rounded-xl bg-slate-800/50 backdrop-blur-sm border border-slate-700/50">
            <div className="text-2xl">🤖</div>
            <div className="text-gray-300">Consultoria em IA Gratuita</div>
          </div>
          
          <div className="flex flex-col items-center gap-2 p-4 rounded-xl bg-slate-800/50 backdrop-blur-sm border border-slate-700/50">
            <div className="text-2xl">🎯</div>
            <div className="text-gray-300">Orçamento Personalizado</div>
          </div>
        </div>
      </div>
    </section>
  );
}