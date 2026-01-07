<script setup lang="ts">
</script>

<template>
  <section class="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden" aria-label="Introdução">
    <!-- Background Blurs -->
    <div class="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-secondary/20 dark:bg-secondary/10 rounded-full blur-3xl"></div>
    <div class="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-primary/20 dark:bg-primary/10 rounded-full blur-3xl"></div>
    
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
      <div class="grid lg:grid-cols-2 gap-12 items-center">
        <!-- Left Content -->
        <div class="space-y-8">
          <div class="inline-flex items-center px-3 py-1 rounded-full bg-slate-200 dark:bg-slate-800 border border-slate-300 dark:border-slate-700">
            <span class="w-2 h-2 rounded-full bg-secondary mr-2 animate-pulse"></span>
            <span class="text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-300">Digital Development</span>
          </div>
          
          <h1 class="text-4xl lg:text-6xl font-display font-bold leading-tight text-navy dark:text-white">
            Desenvolvimento de Plataformas Web 
            <span class="brand-gradient-text">Inteligentes.</span>
          </h1>
          
          <p class="text-lg text-slate-600 dark:text-slate-400 max-w-lg leading-relaxed">
            Desenvolvimento web + IA | Soluções digitais completas | Estratégia, engenharia e inteligência artificial
            <br><br>
            Transformamos desafios tecnológicos em oportunidades de crescimento com expertise em transformação digital, inteligência artificial e desenvolvimento de soluções escaláveis.
          </p>
          
          <div class="flex flex-col sm:flex-row gap-4">
            <a 
              class="inline-flex items-center justify-center px-8 py-3.5 text-base font-bold rounded-full text-white bg-primary hover:bg-teal-700 transition-all shadow-xl shadow-teal-500/20" 
              href="#contact"
            >
              Solicitar Orçamento
              <span class="material-icons-outlined ml-2 text-sm">arrow_forward</span>
            </a>
            <a 
              class="inline-flex items-center justify-center px-8 py-3.5 text-base font-medium rounded-full text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 transition-all" 
              href="#portfolio"
            >
              Ver Portfólio
            </a>
          </div>
        </div>
        
        <!-- Right Content - Image -->
        <div class="relative lg:h-[500px] w-full flex items-center justify-center">
          <div class="relative z-10 w-full h-full rounded-3xl overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-700 group">
            <img 
              alt="Forma 3D abstrata representando rede neural de IA" 
              class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
              fetchpriority="high"
              width="600"
              height="500"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuA7cFgX7kUx7aVP_lEjgzrTWRnJd9UujwNT4SZrI4eJ12pCkwYn-597K9YmfKR1epTb3rizW3gbd_mIc4t55FS_bA2xKrJ3UZJp4Eh3F_d-vCTpCfdfgHAp0n3Vkj0BU2x-Jyllp_sUt2x53a6_2yqB6ACoDp8zfAkaeH87UPXE8UlTLpYFRnE-YjxUbknFVJ6N6SvDg0YmuJ602VOKAS-2o104lF_NV1lABQlqo8a0L-NveCbP03OEnSOhUjTKHBuoPscd3zmNwtYv"
            />
            
            <!-- Performance Badge -->
            <div class="absolute bottom-8 left-8 bg-white/90 dark:bg-slate-900/90 backdrop-blur p-4 rounded-xl shadow-lg border border-slate-100 dark:border-slate-700 animate-bounce" style="animation-duration: 3s;">
              <div class="flex items-center gap-3">
                <div class="bg-green-100 dark:bg-green-900 p-2 rounded-lg">
                  <span class="material-icons-outlined text-green-600 dark:text-green-400">speed</span>
                </div>
                <div>
                  <p class="text-xs text-slate-500 dark:text-slate-400">Pontuação de Performance</p>
                  <p class="font-bold text-navy dark:text-white">99/100</p>
                </div>
              </div>
            </div>
            
            <!-- AI Badge -->
            <div class="absolute top-8 right-8 bg-white/90 dark:bg-slate-900/90 backdrop-blur p-4 rounded-xl shadow-lg border border-slate-100 dark:border-slate-700">
              <div class="flex items-center gap-3">
                <div class="bg-blue-100 dark:bg-blue-900 p-2 rounded-lg">
                  <span class="material-icons-outlined text-blue-600 dark:text-blue-400">auto_fix_high</span>
                </div>
                <div>
                  <p class="text-xs text-slate-500 dark:text-slate-400">Otimização de IA</p>
                  <p class="font-bold text-navy dark:text-white">Ativa</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
