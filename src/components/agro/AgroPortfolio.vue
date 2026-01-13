<script setup lang="ts">
const projects = [
  {
    title: 'Plataforma AgroLog Integrada',
    category: 'Logística • Rastreamento • Gestão de Frota',
    image: 'https://images.unsplash.com/photo-1605218456194-52d6a362208e?q=80&w=2070&auto=format&fit=crop'
  },
  {
    title: 'Marketplace Insumos & Grãos',
    category: 'E-commerce B2B • Leilão Online • Cotações',
    image: 'https://images.unsplash.com/photo-1595846519845-68e298c2edd8?q=80&w=2070&auto=format&fit=crop'
  }
]
</script>

<template>
  <section class="py-24 bg-surface-light dark:bg-surface-dark" id="portfolio" aria-label="Nosso Portfólio Agro">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-display font-bold text-navy dark:text-white mb-4">Casos de Sucesso no Campo</h2>
        <p class="text-slate-600 dark:text-slate-400">Veja como estamos transformando a gestão e comercialização no agronegócio.</p>
      </div>
      
      <div class="grid md:grid-cols-2 gap-8">
        <div 
          v-for="project in projects" 
          :key="project.title"
          class="group cursor-pointer"
        >
          <div class="relative overflow-hidden rounded-2xl aspect-video mb-4">
            <div class="absolute inset-0 bg-green-900/20 group-hover:bg-transparent transition-colors z-10"></div>
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
              <h3 class="text-xl font-bold text-navy dark:text-white group-hover:text-green-600 transition-colors">{{ project.title }}</h3>
              <p class="text-sm text-slate-500 dark:text-slate-400">{{ project.category }}</p>
            </div>
            <span class="material-icons-outlined text-slate-400 group-hover:text-green-600 transition-colors">arrow_outward</span>
          </div>
        </div>
      </div>
      
      <div class="text-center mt-12">
        <a class="inline-flex items-center text-sm font-semibold text-slate-600 dark:text-slate-300 hover:text-green-600 dark:hover:text-green-400 transition-colors" href="#">
          Ver Todos os Projetos <span class="material-icons-outlined ml-1 text-base">chevron_right</span>
        </a>
      </div>
    </div>
  </section>
</template>
