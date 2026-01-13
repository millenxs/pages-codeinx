<script setup lang="ts">
</script>

<template>
  <section class="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden" aria-label="Introdução Agro">
    <!-- Background Blurs -->
    <div class="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-green-500/20 dark:bg-green-500/10 rounded-full blur-3xl"></div>
    <div class="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-yellow-500/20 dark:bg-yellow-500/10 rounded-full blur-3xl"></div>
    
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
      <div class="grid lg:grid-cols-2 gap-12 items-center">
        <!-- Left Content -->
        <div class="space-y-8">
          <div class="inline-flex items-center px-3 py-1 rounded-full bg-green-100 dark:bg-green-900 border border-green-200 dark:border-green-800">
            <span class="w-2 h-2 rounded-full bg-green-600 mr-2 animate-pulse"></span>
            <span class="text-xs font-semibold uppercase tracking-wider text-green-800 dark:text-green-300">Agro & Varejo Tech</span>
          </div>
          
          <h1 class="text-4xl lg:text-6xl font-display font-bold leading-tight text-navy dark:text-white">
            Tecnologia Avançada para o
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-yellow-500">Agronegócio.</span>
          </h1>
          
          <p class="text-lg text-slate-600 dark:text-slate-400 max-w-lg leading-relaxed">
            Logística | Exportação | Compras e Vendas | Inteligência Artificial
            <br><br>
            A tecnologia que o Vale do São Francisco precisa. Impulsione sua produção e exportação com soluções digitais feitas sob medida para o agronegócio regional.
          </p>
          
          <div class="flex flex-col sm:flex-row gap-4">
            <a 
              class="inline-flex items-center justify-center px-8 py-3.5 text-base font-bold rounded-full text-white bg-green-600 hover:bg-green-700 transition-all shadow-xl shadow-green-500/20" 
              href="#contact"
            >
              Solicitar Orçamento
              <span class="material-icons-outlined ml-2 text-sm">arrow_forward</span>
            </a>
            <a 
              class="inline-flex items-center justify-center px-8 py-3.5 text-base font-medium rounded-full text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 transition-all" 
              href="#portfolio"
            >
              Nossas Soluções
            </a>
          </div>
        </div>
        
        <!-- Right Content - Image -->
        <div class="relative lg:h-[500px] w-full flex items-center justify-center">
          <div class="relative z-10 w-full h-full rounded-3xl overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-700 group">
            <img 
              alt="Plantação inteligente com tecnologia" 
              class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
              fetchpriority="high"
              width="600"
              height="500"
              src="https://images.unsplash.com/photo-1625246333195-bfda2f630571?q=80&w=2069&auto=format&fit=crop"
            />
            
            <!-- Performance Badge -->
            <div class="absolute bottom-8 left-8 bg-white/90 dark:bg-slate-900/90 backdrop-blur p-4 rounded-xl shadow-lg border border-slate-100 dark:border-slate-700 animate-bounce" style="animation-duration: 3s;">
              <div class="flex items-center gap-3">
                <div class="bg-yellow-100 dark:bg-yellow-900 p-2 rounded-lg">
                  <span class="material-icons-outlined text-yellow-600 dark:text-yellow-400">local_shipping</span>
                </div>
                <div>
                  <p class="text-xs text-slate-500 dark:text-slate-400">Eficiência Logística</p>
                  <p class="font-bold text-navy dark:text-white">Otimizada</p>
                </div>
              </div>
            </div>
            
            <!-- AI Badge -->
            <div class="absolute top-8 right-8 bg-white/90 dark:bg-slate-900/90 backdrop-blur p-4 rounded-xl shadow-lg border border-slate-100 dark:border-slate-700">
              <div class="flex items-center gap-3">
                <div class="bg-green-100 dark:bg-green-900 p-2 rounded-lg">
                  <span class="material-icons-outlined text-green-600 dark:text-green-400">agriculture</span>
                </div>
                <div>
                  <p class="text-xs text-slate-500 dark:text-slate-400">Monitoramento Agro</p>
                  <p class="font-bold text-navy dark:text-white">Tempo Real</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
