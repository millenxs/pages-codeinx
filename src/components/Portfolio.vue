<script setup lang="ts">
const projects = [
  {
    title: 'Portex',
    category: 'Aplicação para Portarias • Controle de Encomendas • Condomínios',
    image: '/portex-png.png',
    link: 'https://lnkd.in/e5VM6w7V'
  },
  {
    title: 'Nexa -  Gestão Financeira Pessoal',
    category: 'Aplicação para Contabilidade • Dashboard Financeiro • Fintech',
    image: '/nexa-app.png',
    link: 'https://finance-app-one-phi.vercel.app/'
  },
  {
    title: 'ThemisScan - Analise Juridica Inteligente',
    category: 'Aplicação para Escritórios de Advocacia • Análise de Documentos • IA Jurídica',
    image: '/themisScan-app.png',
    link: 'https://themis-scan-analisador-de-contratos.vercel.app'
  }
]
</script>

<template>
  <section class="py-24 bg-surface-light dark:bg-surface-dark" id="portfolio" aria-label="Nosso Portfólio">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-display font-bold text-navy dark:text-white mb-4">Trabalhos Selecionados</h2>
        <p class="text-slate-600 dark:text-slate-400">Veja como ajudamos empresas a crescerem com design web inteligente.</p>
      </div>
      
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <a 
          v-for="project in projects" 
          :key="project.title"
          :href="project.link || '#'"
          target="_blank"
          rel="noopener noreferrer"
          class="group cursor-pointer block"
        >
          <div class="relative overflow-hidden rounded-2xl aspect-video mb-4">
            <div class="absolute inset-0 bg-navy/20 group-hover:bg-transparent transition-colors z-10"></div>
            <img 
              :alt="project.title" 
              loading="lazy"
              width="640"
              height="360"
              class="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" 
              :src="project.image"
            />
          </div>
          <div class="flex justify-between items-start">
            <div>
              <h3 class="text-xl font-bold text-navy dark:text-white group-hover:text-primary transition-colors">{{ project.title }}</h3>
              <p class="text-sm text-slate-500 dark:text-slate-400">{{ project.category }}</p>
            </div>
            <span class="material-icons-outlined text-slate-400 group-hover:text-primary transition-colors">arrow_outward</span>
          </div>
        </a>
      </div>
      
      <div class="hidden text-center mt-12">
        <a class="inline-flex items-center text-sm font-semibold text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary transition-colors" href="#">
          Ver Portfólio Completo <span class="material-icons-outlined ml-1 text-base">chevron_right</span>
        </a>
      </div>
    </div>
  </section>
</template>
