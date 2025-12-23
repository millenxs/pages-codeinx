<script setup lang="ts">
import { ArrowRight, BrainCircuit } from 'lucide-vue-next'
import ImageWithFallback from './ui/ImageWithFallback.vue'
</script>

<template>
  <section class="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
    <!-- Grid pattern background -->
    <div class="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjEiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-40"></div>
    
    <!-- Animated gradient orbs -->
    <div class="absolute top-1/4 left-1/4 w-96 h-96 bg-teal-500/30 rounded-full blur-3xl animate-pulse"></div>
    <div class="absolute bottom-1/4 right-1/4 w-96 h-96 bg-lime-400/20 rounded-full blur-3xl animate-pulse" style="animation-delay: 1s"></div>
    
    <div class="relative mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
      <div class="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
        <div class="space-y-8">
          <div class="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-teal-500/20 to-lime-400/20 px-4 py-2 backdrop-blur-sm border border-teal-500/30">
            <BrainCircuit class="h-4 w-4 text-lime-400" />
            <span class="text-sm">Impulsionado por Inteligência Artificial</span>
          </div>
          
          <h1 class="text-4xl sm:text-5xl lg:text-6xl tracking-tight">
            Criamos sites com 
            <span class="bg-gradient-to-r from-teal-400 to-lime-400 bg-clip-text text-transparent">IA</span> que 
            <span class="text-lime-400">impulsionam vendas</span> e 
            <span class="text-lime-400">conversões</span>
          </h1>
          
          <p class="text-lg sm:text-xl text-gray-300">
            Especialistas em desenvolvimento web com inteligência artificial, landing pages e e-commerce. 
            Combinamos design inovador com IA e estratégias de marketing digital 
            para levar seu negócio ao próximo nível.
          </p>
          
          <div class="flex flex-col sm:flex-row gap-4">
            <a 
              href="#contato" 
              class="group inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-teal-400 to-lime-400 px-8 py-4 text-slate-900 transition-all hover:shadow-lg hover:shadow-teal-400/50 hover:scale-105"
            >
              Solicite um Orçamento
              <ArrowRight class="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>
            
            <a 
              href="#servicos" 
              class="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-teal-400 px-8 py-4 text-white transition-all hover:bg-teal-500/10"
            >
              Nossos Serviços
            </a>
          </div>
          
          <div class="flex items-center gap-8 pt-4">
            <div>
              <div class="text-3xl bg-gradient-to-r from-teal-400 to-lime-400 bg-clip-text text-transparent">500+</div>
              <div class="text-sm text-gray-400">Projetos Entregues</div>
            </div>
            <div class="h-12 w-px bg-gradient-to-b from-transparent via-teal-400 to-transparent"></div>
            <div>
              <div class="text-3xl bg-gradient-to-r from-teal-400 to-lime-400 bg-clip-text text-transparent">98%</div>
              <div class="text-sm text-gray-400">Satisfação</div>
            </div>
            <div class="h-12 w-px bg-gradient-to-b from-transparent via-teal-400 to-transparent"></div>
            <div>
              <div class="text-3xl bg-gradient-to-r from-teal-400 to-lime-400 bg-clip-text text-transparent">24/7</div>
              <div class="text-sm text-gray-400">Suporte com IA</div>
            </div>
          </div>
        </div>
        
        <div class="relative">
          <div class="absolute -inset-4 rounded-2xl bg-gradient-to-r from-lime-400 via-teal-500 to-lime-400 opacity-30 blur-3xl animate-pulse"></div>
          <div class="relative overflow-hidden rounded-2xl shadow-2xl border border-teal-500/30 bg-slate-800/50 backdrop-blur-sm">
            <ImageWithFallback 
              src="https://images.unsplash.com/photo-1637502877428-27e6553a8817?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXNpZ24lMjBsYXB0b3B8ZW58MXx8fHwxNzY2MzQ2MDY3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
              alt="Web Design"
              class="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
