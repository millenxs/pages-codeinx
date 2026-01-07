<script setup lang="ts">
import { ref } from 'vue'

const whatsapp = ref('')
const projectType = ref('')
const projectDescription = ref('')
const budget = ref('')

// Substitua pelo seu número de WhatsApp (com código do país, sem + ou espaços)
const myWhatsappNumber = '5587999178060'

const sendToWhatsApp = () => {
  if (!whatsapp.value || !projectType.value || !projectDescription.value || !budget.value) {
    alert('Por favor, preencha todos os campos.')
    return
  }

  const message = `🚀 *Novo Lead - Codeinx*

📱 *WhatsApp do Cliente:* ${whatsapp.value}

📋 *Tipo de Projeto:* ${projectType.value}

💬 *Descrição do Projeto:*
${projectDescription.value}

💰 *Orçamento Estimado:* ${budget.value}`

  const encodedMessage = encodeURIComponent(message)
  const whatsappUrl = `https://wa.me/${myWhatsappNumber}?text=${encodedMessage}`
  
  window.open(whatsappUrl, '_blank')
}
</script>

<template>
  <section class="py-24 bg-navy relative overflow-hidden" id="contact" aria-label="Formulário de Contato">
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
      
      <form class="max-w-md mx-auto space-y-4 text-left bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10" @submit.prevent="sendToWhatsApp">
        <div>
          <label class="block text-sm font-medium text-slate-300 mb-1" for="whatsapp">Seu WhatsApp</label>
          <input 
            v-model="whatsapp"
            class="w-full rounded-lg bg-slate-900/50 border-slate-700 text-white placeholder-slate-500 focus:ring-primary focus:border-primary" 
            id="whatsapp" 
            placeholder="(11) 99999-9999" 
            type="tel"
            required
          />
        </div>
        <div>
          <label class="block text-sm font-medium text-slate-300 mb-1" for="projectType">Que tipo de projeto você precisa?</label>
          <select 
            v-model="projectType"
            class="w-full rounded-lg bg-slate-900/50 border-slate-700 text-white focus:ring-primary focus:border-primary" 
            id="projectType"
            required
          >
            <option value="" disabled>Selecione uma opção</option>
            <option value="Website Institucional">Website Institucional</option>
            <option value="Landing Page">Landing Page</option>
            <option value="E-commerce / Loja Virtual">E-commerce / Loja Virtual</option>
            <option value="Sistema Web / Aplicação">Sistema Web / Aplicação</option>
            <option value="Integração com IA">Integração com IA</option>
            <option value="Outro">Outro</option>
          </select>
        </div>
        <div>
          <label class="block text-sm font-medium text-slate-300 mb-1" for="projectDescription">Conte um pouco sobre seu projeto</label>
          <textarea 
            v-model="projectDescription"
            class="w-full rounded-lg bg-slate-900/50 border-slate-700 text-white placeholder-slate-500 focus:ring-primary focus:border-primary resize-none" 
            id="projectDescription" 
            placeholder="Descreva brevemente o que você precisa desenvolver..."
            rows="3"
            required
          ></textarea>
        </div>
        <div>
          <label class="block text-sm font-medium text-slate-300 mb-1" for="budget">Qual seu orçamento estimado?</label>
          <select 
            v-model="budget"
            class="w-full rounded-lg bg-slate-900/50 border-slate-700 text-white focus:ring-primary focus:border-primary" 
            id="budget"
            required
          >
            <option value="" disabled>Selecione uma faixa</option>
            <option value="Até R$ 3.000">Até R$ 3.000</option>
            <option value="R$ 3.000 - R$ 8.000">R$ 3.000 - R$ 8.000</option>
            <option value="R$ 8.000 - R$ 15.000">R$ 8.000 - R$ 15.000</option>
            <option value="R$ 15.000 - R$ 30.000">R$ 15.000 - R$ 30.000</option>
            <option value="Acima de R$ 30.000">Acima de R$ 30.000</option>
            <option value="A definir">A definir</option>
          </select>
        </div>
        <button 
          class="w-full py-3.5 px-6 rounded-lg bg-secondary hover:bg-lime-400 text-navy font-bold transition-colors shadow-lg shadow-lime-500/20 flex items-center justify-center gap-2" 
          type="submit"
        >
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
          Enviar via WhatsApp
        </button>
      </form>
    </div>
  </section>
</template>
