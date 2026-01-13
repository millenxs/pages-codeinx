<script setup lang="ts">
</script>

<template>
  <section class="py-24 bg-background-light dark:bg-background-dark" id="services" aria-label="Nossos Serviços Agro">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex flex-col md:flex-row justify-between items-end mb-12">
        <div class="max-w-2xl">
          <p class="text-sm font-bold text-green-600 uppercase tracking-wider mb-2">Soluções Especializadas</p>
          <h2 class="text-3xl md:text-5xl font-display font-bold text-navy dark:text-white">Tecnologia para o Campo e Mercado</h2>
        </div>
        <a class="hidden md:inline-flex items-center text-green-600 font-bold hover:text-green-700 dark:hover:text-green-400 transition-colors mt-4 md:mt-0" href="#contact">
          Fale Conosco <span class="material-icons-outlined ml-1">arrow_forward</span>
        </a>
      </div>
      
      <div class="grid lg:grid-cols-3 gap-6">
        <!-- Service 1 - Logistics -->
        <div class="group relative overflow-hidden rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-8 hover:shadow-2xl hover:shadow-green-900/10 transition-all duration-300">
          <div class="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
            <span class="material-icons-outlined text-9xl text-navy dark:text-white transform rotate-12">local_shipping</span>
          </div>
          <div class="relative z-10 h-full flex flex-col justify-between">
            <div>
              <div class="w-12 h-12 bg-navy dark:bg-white rounded-full flex items-center justify-center mb-6 text-white dark:text-navy font-bold text-xl">1</div>
              <h3 class="text-2xl font-bold text-navy dark:text-white mb-4">Logística e Distribuição</h3>
              <p class="text-slate-600 dark:text-slate-400 mb-6">
                Criamos sistemas digitais para substituir suas planilhas e papeladas de entregas. Acompanhe caminhões no mapa em tempo real, organize rotas automaticamente e gerencie todo o transporte de insumos e colheitas - tudo online, sem depender de anotações em papel ou WhatsApp.
              </p>
            </div>
            <ul class="space-y-2 text-sm text-slate-500 dark:text-slate-400">
              <li class="flex items-center"><span class="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></span>Acompanhamento de Cargas no Mapa</li>
              <li class="flex items-center"><span class="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></span>Rotas Otimizadas Automaticamente</li>
              <li class="flex items-center"><span class="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></span>Sem Planilhas: Tudo Digital e Organizado</li>
            </ul>
          </div>
        </div>
        
        <!-- Service 2 - Export/Import -->
        <div class="group relative overflow-hidden rounded-3xl bg-green-900 dark:bg-green-950 border border-green-800 dark:border-green-800 p-8 hover:shadow-2xl transition-all duration-300 transform md:-translate-y-4">
          <div class="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
            <span class="material-icons-outlined text-9xl text-white transform rotate-12">public</span>
          </div>
          <div class="relative z-10 h-full flex flex-col justify-between">
            <div>
              <div class="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-6 text-green-900 font-bold text-xl">2</div>
              <h3 class="text-2xl font-bold text-white mb-4">Exportação e Comércio Exterior</h3>
              <p class="text-slate-100 mb-6">
                Desenvolvemos plataformas digitais para organizar toda documentação de exportação que hoje você faz em papel ou pasta de arquivos. Sistema centralizado para certificados, licenças, conexão com compradores internacionais e acompanhamento completo dos seus embarques - tudo em um só lugar.
              </p>
            </div>
            <ul class="space-y-2 text-sm text-slate-100">
              <li class="flex items-center"><span class="w-1.5 h-1.5 bg-yellow-400 rounded-full mr-2"></span>Gestão Documental</li>
              <li class="flex items-center"><span class="w-1.5 h-1.5 bg-yellow-400 rounded-full mr-2"></span>Conexão com Compradores no Exterior</li>
              <li class="flex items-center"><span class="w-1.5 h-1.5 bg-yellow-400 rounded-full mr-2"></span>Cotações em Tempo Real</li>
            </ul>
          </div>
        </div>
        
        <!-- Service 3 - Marketplace/Sales -->
        <div class="group relative overflow-hidden rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-8 hover:shadow-2xl hover:shadow-green-900/10 transition-all duration-300">
          <div class="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
            <span class="material-icons-outlined text-9xl text-navy dark:text-white transform rotate-12">storefront</span>
          </div>
          <div class="relative z-10 h-full flex flex-col justify-between">
            <div>
              <div class="w-12 h-12 bg-navy dark:bg-white rounded-full flex items-center justify-center mb-6 text-white dark:text-navy font-bold text-xl">3</div>
              <h3 class="text-2xl font-bold text-navy dark:text-white mb-4">Marketplaces e Compras</h3>
              <p class="text-slate-600 dark:text-slate-400 mb-6">
                Transformamos seu negócio em uma loja online profissional. Chega de vender por WhatsApp, catálogo em PDF ou anotar pedidos no caderno. Criamos sistemas completos para vender produtos agrícolas na internet e plataformas para cooperativas gerenciarem compras em grupo de forma automatizada.
              </p>
            </div>
            <ul class="space-y-2 text-sm text-slate-500 dark:text-slate-400">
              <li class="flex items-center"><span class="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></span>Marketplaces B2B</li>
              <li class="flex items-center"><span class="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></span>Gestão de Pedidos</li>
              <li class="flex items-center"><span class="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></span>Adeus Catálogo em PDF e Pedidos no Caderno</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
