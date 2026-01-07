<script setup lang="ts">
</script>

<template>
  <section class="py-24 bg-background-light dark:bg-background-dark" id="services" aria-label="Nossos Serviços">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex flex-col md:flex-row justify-between items-end mb-12">
        <div class="max-w-2xl">
          <p class="text-sm font-bold text-primary uppercase tracking-wider mb-2">Nossa Expertise</p>
          <h2 class="text-3xl md:text-5xl font-display font-bold text-navy dark:text-white">Soluções Digitais para Escalar</h2>
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
              <h3 class="text-2xl font-bold text-navy dark:text-white mb-4">Desenvolvimento Web e Aplicações</h3>
              <p class="text-slate-600 dark:text-slate-400 mb-6">
                Criamos sites, aplicações web e plataformas usando tecnologias modernas (React, Vue, Next.js). Integração seamless com IA, chatbots, APIs e banco de dados. De presença corporativa a sistemas complexos.
              </p>
            </div>
            <ul class="space-y-2 text-sm text-slate-500 dark:text-slate-400">
              <li class="flex items-center"><span class="w-1.5 h-1.5 bg-secondary rounded-full mr-2"></span>Sites Responsivos e SEO-Friendly</li>
              <li class="flex items-center"><span class="w-1.5 h-1.5 bg-secondary rounded-full mr-2"></span>Elementos 3D Interativos</li>
              <li class="flex items-center"><span class="w-1.5 h-1.5 bg-secondary rounded-full mr-2"></span>Chatbots com IA Integrada</li>
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
              <h3 class="text-2xl font-bold text-white mb-4">SaaS & Plataformas Inteligentes</h3>
              <p class="text-slate-300 mb-6">
                Desenvolvemos SaaS escaláveis, plataformas B2B e sistemas proprietários potencializados por IA. Do MVP à produção, com arquitetura cloud-native e automação inteligente.
              </p>
            </div>
            <ul class="space-y-2 text-sm text-slate-300">
              <li class="flex items-center"><span class="w-1.5 h-1.5 bg-white rounded-full mr-2"></span>Automação com Machine Learning</li>
              <li class="flex items-center"><span class="w-1.5 h-1.5 bg-white rounded-full mr-2"></span>Integração de Modelos de IA (GPT, Claude, Gemini)</li>
              <li class="flex items-center"><span class="w-1.5 h-1.5 bg-white rounded-full mr-2"></span>Arquitetura Escalável e Segura</li>
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
              <h3 class="text-2xl font-bold text-navy dark:text-white mb-4">Sistemas Customizados Conforme Sua Realidade</h3>
              <p class="text-slate-600 dark:text-slate-400 mb-6">
                Não usamos soluções prontas. Começamos pelo diagnóstico real das suas dificuldades e necessidades. Desenvolvemos sistemas 100% personalizados que resolvem seus problemas específicos e escalam com seu negócio.
              </p>
            </div>
            <ul class="space-y-2 text-sm text-slate-500 dark:text-slate-400">
              <li class="flex items-center"><span class="w-1.5 h-1.5 bg-secondary rounded-full mr-2"></span>Sistemas Customizados do Zero</li>
              <li class="flex items-center"><span class="w-1.5 h-1.5 bg-secondary rounded-full mr-2"></span>Integração com Processos Existentes</li>
              <li class="flex items-center"><span class="w-1.5 h-1.5 bg-secondary rounded-full mr-2"></span>Escalabilidade Conforme Crescimento</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
