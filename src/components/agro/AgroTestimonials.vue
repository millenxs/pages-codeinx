<script setup lang="ts">
</script>

<template>
  <section class="py-24 bg-background-light dark:bg-background-dark border-t border-slate-200 dark:border-slate-800" id="testimonials" aria-label="Depoimentos de Parceiros">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid md:grid-cols-2 gap-12 items-center">
        <!-- Left - Testimonial -->
        <div>
          <h2 class="text-3xl md:text-4xl font-display font-bold text-navy dark:text-white mb-6">O que dizem os produtores</h2>
          <p class="text-slate-600 dark:text-slate-400 mb-8 text-lg">
            "A plataforma de gestão de vendas transformou nossa cooperativa. Conseguimos conectar nossos produtores diretamente com as indústrias, aumentando a margem de lucro em 25% na última safra."
          </p>
          <div class="flex items-center gap-4">
            <img 
              alt="Retrato do Cliente" 
              loading="lazy"
              width="48"
              height="48"
              class="w-12 h-12 rounded-full object-cover border-2 border-green-600" 
              src="https://images.unsplash.com/photo-1595240294196-880949cb4a52?q=80&w=2071&auto=format&fit=crop"
            />
            <div>
              <p class="font-bold text-navy dark:text-white">Roberto Mendes</p>
              <p class="text-sm text-slate-500">Diretor Comercial, Cooperativa Ouro Verde</p>
            </div>
          </div>
        </div>
        
        <!-- Right - Stats -->
        <div class="grid grid-cols-2 gap-4">
          <div class="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700">
            <p class="text-4xl font-bold text-green-600 mb-2">500k+</p>
            <p class="text-sm text-slate-600 dark:text-slate-400">Toneladas Movimentadas</p>
          </div>
          <div class="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700">
            <p class="text-4xl font-bold text-yellow-500 mb-2">30%</p>
            <p class="text-sm text-slate-600 dark:text-slate-400">Redução em Custos Logísticos</p>
          </div>
          <div class="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 col-span-2">
            <p class="text-4xl font-bold text-navy dark:text-white mb-2">100%</p>
            <p class="text-sm text-slate-600 dark:text-slate-400">Rastreabilidade da Cadeia</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
