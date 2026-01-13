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

  const message = `🚜 *Novo Lead Agro - Codeinx*

📱 *WhatsApp do Cliente:* ${whatsapp.value}

📋 *Tipo de Solução:* ${projectType.value}

💬 *Descrição da Necessidade:*
${projectDescription.value}

💰 *Investimento Estimado:* ${budget.value}`

  const encodedMessage = encodeURIComponent(message)
  const whatsappUrl = `https://wa.me/${myWhatsappNumber}?text=${encodedMessage}`
  
  window.open(whatsappUrl, '_blank')
}
</script>

<template>
  <section class="py-24 bg-green-950 relative overflow-hidden" id="contact" aria-label="Formulário de Contato Agro">
    <!-- Background Pattern -->
    <div class="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
    
    <!-- Gradient Orbs -->
    <div class="absolute top-0 right-0 w-64 h-64 bg-green-600 rounded-full blur-[100px] opacity-30"></div>
    <div class="absolute bottom-0 left-0 w-64 h-64 bg-yellow-500 rounded-full blur-[100px] opacity-20"></div>
    
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
      <h2 class="text-4xl md:text-5xl font-display font-bold text-white mb-6">Pronto para modernizar seu agronegócio?</h2>
      <p class="text-slate-300 text-lg mb-10 max-w-2xl mx-auto">
        Vamos conversar sobre como nossas soluções de logística e comercialização podem escalar seus resultados no campo.
      </p>
      
      <form class="max-w-md mx-auto space-y-4 text-left bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10" @submit.prevent="sendToWhatsApp">
        <div>
          <label class="block text-sm font-medium text-slate-300 mb-1" for="whatsapp">Seu WhatsApp</label>
          <input 
            v-model="whatsapp"
            class="w-full rounded-lg bg-slate-900/50 border-slate-700 text-white placeholder-slate-500 focus:ring-green-500 focus:border-green-500" 
            id="whatsapp" 
            placeholder="(11) 99999-9999" 
            type="tel"
            required
          />
        </div>
        <div>
          <label class="block text-sm font-medium text-slate-300 mb-1" for="projectType">Qual sua necessidade principal?</label>
          <select 
            v-model="projectType"
            class="w-full rounded-lg bg-slate-900/50 border-slate-700 text-white focus:ring-green-500 focus:border-green-500" 
            id="projectType"
            required
          >
            <option value="" disabled>Selecione uma opção</option>
            <option value="Sistema de Logística/Frota">Sistema de Logística/Frota</option>
            <option value="Plataforma de Exportação">Plataforma de Exportação</option>
            <option value="Marketplace / E-commerce">Marketplace / E-commerce</option>
            <option value="Gestão de Cooperativa">Gestão de Cooperativa</option>
            <option value="Consultoria Tecnológica">Consultoria Tecnológica</option>
            <option value="Outro">Outro</option>
          </select>
        </div>
        <div>
          <label class="block text-sm font-medium text-slate-300 mb-1" for="projectDescription">Como podemos ajudar?</label>
          <textarea 
            v-model="projectDescription"
            class="w-full rounded-lg bg-slate-900/50 border-slate-700 text-white placeholder-slate-500 focus:ring-green-500 focus:border-green-500 resize-none" 
            id="projectDescription" 
            placeholder="Descreva seu desafio operacional ou comercial..."
            rows="3"
            required
          ></textarea>
        </div>
        <div>
          <label class="block text-sm font-medium text-slate-300 mb-1" for="budget">Faixa de Investimento</label>
          <select 
            v-model="budget"
            class="w-full rounded-lg bg-slate-900/50 border-slate-700 text-white focus:ring-green-500 focus:border-green-500" 
            id="budget"
            required
          >
            <option value="" disabled>Selecione uma faixa</option>
            <option value="Até R$ 5.000">Até R$ 5.000</option>
            <option value="R$ 5.000 - R$ 15.000">R$ 5.000 - R$ 15.000</option>
            <option value="R$ 15.000 - R$ 50.000">R$ 15.000 - R$ 50.000</option>
            <option value="Acima de R$ 50.000">Acima de R$ 50.000</option>
          </select>
        </div>
        
        <button 
          class="w-full py-4 px-6 rounded-lg bg-green-600 hover:bg-green-700 text-white font-bold text-lg transition-all shadow-lg shadow-green-600/20 flex items-center justify-center gap-2" 
          type="submit"
        >
          Solicitar Consultoria
          <span class="material-icons-outlined">send</span>
        </button>
      </form>
    </div>
  </section>
</template>
