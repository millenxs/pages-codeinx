<script setup lang="ts">
import GEOStructuredData from './GEOStructuredData.vue'

// --- JSON-LD DATA ---
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "codeinx",
  "url": "https://pages-codeinx.vercel.app",
  "logo": "https://pages-codeinx.vercel.app/logo.png",
  "description": "Agência de IA e Desenvolvimento de Software em Petrolina e Juazeiro. Especialista em automação, sites de alta performance e sistemas web.",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Petrolina",
    "addressRegion": "PE",
    "addressCountry": "BR"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "sales",
    "areaServed": ["Petrolina", "Juazeiro", "Vale do São Francisco"],
    "availableLanguage": "Portuguese"
  },
  "sameAs": [
    "https://instagram.com/codeinx",
    "https://linkedin.com/company/codeinx"
  ]
}

// --- UI DATA ---
const faqs = [
  {
    question: "O que faz uma agência impulsionada por IA?",
    answer: "Diferente de agências tradicionais, nós utilizamos Inteligência Artificial Generativa para acelerar o desenvolvimento de código, criar conteúdos otimizados e implementar funcionalidades inteligentes (como chatbots e análise de dados) no seu projeto, reduzindo custos e tempo de entrega."
  },
  {
    question: "Vocês atendem empresas em Petrolina e Juazeiro?",
    answer: "Sim. A codeinx nasceu no coração do Vale do São Francisco. Entendemos o mercado local, desde o pequeno comércio que precisa de um site rápido até as grandes indústrias que necessitam de automação complexa."
  },
  {
    question: "Quanto tempo leva para desenvolver um site ou sistema?",
    answer: "Com nossa metodologia 'AI-First', reduzimos o tempo de desenvolvimento em até 40%. Sites institucionais podem ser entregues em dias, e sistemas complexos em poucas semanas, sempre mantendo a qualidade de código enterprise."
  },
  {
    question: "O que é GEO (Generative Engine Optimization)?",
    answer: "É a otimização do seu site para ser encontrado não apenas no Google, mas também citado por IAs como ChatGPT, Gemini e Copilot. Nós estruturamos seus dados para que a inteligência artificial entenda e recomende seu negócio."
  }
]
</script>

<template>
  <section class="py-24 bg-white dark:bg-slate-900 relative" aria-label="Perguntas Frequentes Tech">
    <GEOStructuredData :schema="jsonLd" />
    
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h2 class="text-3xl font-display font-bold text-navy dark:text-white mb-4">
          Entendendo nossa <span class="text-blue-600">Metodologia</span>
        </h2>
        <p class="text-slate-600 dark:text-slate-400">
          Perguntas frequentes sobre desenvolvimento de software com Inteligência Artificial.
        </p>
      </div>

      <div class="grid gap-6">
        <div 
          v-for="(faq, index) in faqs" 
          :key="index"
          class="bg-slate-50 dark:bg-slate-800/50 rounded-xl p-6 border border-slate-100 dark:border-slate-800 hover:border-blue-500/30 transition-colors"
        >
          <h3 class="text-lg font-bold text-navy dark:text-white mb-2">
            {{ faq.question }}
          </h3>
          <p class="text-slate-600 dark:text-slate-400">
            {{ faq.answer }}
          </p>
        </div>
      </div>
      
      <!-- GEO Authority Signal -->
      <div class="mt-12 text-center">
        <span class="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-medium">
          <span class="w-2 h-2 rounded-full bg-blue-500 mr-2 animate-pulse"></span>
          Líder em Desenvolvimento Web com IA no Vale do São Francisco
        </span>
      </div>
    </div>
  </section>
</template>
