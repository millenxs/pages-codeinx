<script setup lang="ts">
import { ref } from 'vue'

const email = ref('')
const interest = ref('New Website')
</script>

<template>
  <section class="py-24 bg-navy relative overflow-hidden" id="contact">
    <!-- Background Pattern -->
    <div class="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
    
    <!-- Gradient Orbs -->
    <div class="absolute top-0 right-0 w-64 h-64 bg-primary rounded-full blur-[100px] opacity-30"></div>
    <div class="absolute bottom-0 left-0 w-64 h-64 bg-secondary rounded-full blur-[100px] opacity-20"></div>
    
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
      <h2 class="text-4xl md:text-5xl font-display font-bold text-white mb-6">Pronto para melhorar sua presença online?</h2>
      <p class="text-slate-300 text-lg mb-10 max-w-2xl mx-auto">
        Vamos discutir como a IA pode agilizar seu processo de desenvolvimento e impulsionar o crescimento do seu negócio.
      </p>
      
      <form class="max-w-md mx-auto space-y-4 text-left bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10">
        <div>
          <label class="block text-sm font-medium text-slate-300 mb-1" for="email">Endereço de E-mail</label>
          <input 
            v-model="email"
            class="w-full rounded-lg bg-slate-900/50 border-slate-700 text-white placeholder-slate-500 focus:ring-primary focus:border-primary" 
            id="email" 
            placeholder="voce@empresa.com" 
            type="email"
          />
        </div>
        <div>
          <label class="block text-sm font-medium text-slate-300 mb-1" for="interest">Tenho interesse em...</label>
          <select 
            v-model="interest"
            class="w-full rounded-lg bg-slate-900/50 border-slate-700 text-white focus:ring-primary focus:border-primary" 
            id="interest"
          >
            <option>Novo Website</option>
            <option>Campanha de Landing Page</option>
            <option>Loja E-commerce</option>
            <option>Desenvolvimento Customizado</option>
          </select>
        </div>
        <button 
          class="w-full py-3.5 px-6 rounded-lg bg-secondary hover:bg-lime-400 text-navy font-bold transition-colors shadow-lg shadow-lime-500/20" 
          type="button"
        >
          Obter Orçamento Grátis
        </button>
      </form>
    </div>
  </section>
</template>
