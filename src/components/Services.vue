<script setup lang="ts">
</script>

<template>
  <section class="py-24 bg-background-light dark:bg-background-dark" id="services">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex flex-col md:flex-row justify-between items-end mb-12">
        <div class="max-w-2xl">
          <h2 class="text-sm font-bold text-primary uppercase tracking-wider mb-2">Nossa Expertise</h2>
          <h3 class="text-3xl md:text-5xl font-display font-bold text-navy dark:text-white">Soluções Digitais para Escalar</h3>
        </div>
        <a class="hidden md:inline-flex items-center text-primary font-bold hover:text-teal-700 dark:hover:text-teal-400 transition-colors mt-4 md:mt-0" href="#contact">
          Ver Todos os Serviços <span class="material-icons-outlined ml-1">arrow_forward</span>
        </a>
      </div>
      
      <div class="grid lg:grid-cols-3 gap-6">
        <!-- Service 1 - Website Creation -->
        <div class="group relative overflow-hidden rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-8 hover:shadow-2xl hover:shadow-teal-900/10 transition-all duration-300">
          <div class="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
            <span class="material-icons-outlined text-9xl text-navy dark:text-white transform rotate-12">web</span>
          </div>
          <div class="relative z-10 h-full flex flex-col justify-between">
            <div>
              <div class="w-12 h-12 bg-navy dark:bg-white rounded-full flex items-center justify-center mb-6 text-white dark:text-navy font-bold text-xl">1</div>
              <h4 class="text-2xl font-bold text-navy dark:text-white mb-4">Criação de Websites</h4>
              <p class="text-slate-600 dark:text-slate-400 mb-6">
                Desenvolvimento full-stack usando frameworks modernos (React, Vue, Tailwind). Criamos sites corporativos responsivos, seguros e extremamente rápidos.
              </p>
            </div>
            <ul class="space-y-2 text-sm text-slate-500 dark:text-slate-400">
              <li class="flex items-center"><span class="w-1.5 h-1.5 bg-secondary rounded-full mr-2"></span>Integração CMS</li>
              <li class="flex items-center"><span class="w-1.5 h-1.5 bg-secondary rounded-full mr-2"></span>Elementos 3D Interativos</li>
              <li class="flex items-center"><span class="w-1.5 h-1.5 bg-secondary rounded-full mr-2"></span>Configuração de Chatbot IA</li>
            </ul>
          </div>
        </div>
        
        <!-- Service 2 - Landing Pages (Featured) -->
        <div class="group relative overflow-hidden rounded-3xl bg-navy dark:bg-slate-800 border border-navy dark:border-slate-700 p-8 hover:shadow-2xl transition-all duration-300 transform md:-translate-y-4">
          <div class="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
            <span class="material-icons-outlined text-9xl text-white transform rotate-12">layers</span>
          </div>
          <div class="relative z-10 h-full flex flex-col justify-between">
            <div>
              <div class="w-12 h-12 bg-primary rounded-full flex items-center justify-center mb-6 text-white font-bold text-xl">2</div>
              <h4 class="text-2xl font-bold text-white mb-4">Landing Pages</h4>
              <p class="text-slate-300 mb-6">
                Páginas de vendas de alto impacto projetadas para converter tráfego frio. Usamos IA para gerar múltiplas variações de copy e testar layouts A/B instantaneamente.
              </p>
            </div>
            <ul class="space-y-2 text-sm text-slate-300">
              <li class="flex items-center"><span class="w-1.5 h-1.5 bg-white rounded-full mr-2"></span>Copywriting de Conversão</li>
              <li class="flex items-center"><span class="w-1.5 h-1.5 bg-white rounded-full mr-2"></span>Arquitetura de Funil</li>
              <li class="flex items-center"><span class="w-1.5 h-1.5 bg-white rounded-full mr-2"></span>Painel de Analytics</li>
            </ul>
          </div>
        </div>
        
        <!-- Service 3 - E-Commerce Stores -->
        <div class="group relative overflow-hidden rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-8 hover:shadow-2xl hover:shadow-teal-900/10 transition-all duration-300">
          <div class="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
            <span class="material-icons-outlined text-9xl text-navy dark:text-white transform rotate-12">shopping_bag</span>
          </div>
          <div class="relative z-10 h-full flex flex-col justify-between">
            <div>
              <div class="w-12 h-12 bg-navy dark:bg-white rounded-full flex items-center justify-center mb-6 text-white dark:text-navy font-bold text-xl">3</div>
              <h4 class="text-2xl font-bold text-navy dark:text-white mb-4">Lojas E-Commerce</h4>
              <p class="text-slate-600 dark:text-slate-400 mb-6">
                Lojas online robustas com desenvolvimento customizado. Implementamos recomendações de produtos com IA e motores de precificação dinâmica.
              </p>
            </div>
            <ul class="space-y-2 text-sm text-slate-500 dark:text-slate-400">
              <li class="flex items-center"><span class="w-1.5 h-1.5 bg-secondary rounded-full mr-2"></span>WooCommerce</li>
              <li class="flex items-center"><span class="w-1.5 h-1.5 bg-secondary rounded-full mr-2"></span>Integração Gateway Pagamento</li>
              <li class="flex items-center"><span class="w-1.5 h-1.5 bg-secondary rounded-full mr-2"></span>Gestão de Estoque com IA</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
