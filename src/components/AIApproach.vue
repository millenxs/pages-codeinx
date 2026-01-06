<script setup lang="ts">
const features = [
  {
    icon: 'bolt',
    iconBg: 'bg-secondary/20',
    iconColor: 'text-green-700 dark:text-green-400',
    title: 'Desenvolvimento 2x Mais Rápido',
    description: 'Nossos fluxos de trabalho assistidos por IA reduzem o tempo de desenvolvimento sem sacrificar a qualidade, levando seu produto ao mercado mais cedo.'
  },
  {
    icon: 'psychology',
    iconBg: 'bg-primary/20',
    iconColor: 'text-primary',
    title: 'Design UX Preditivo',
    description: 'Usamos modelos baseados em dados para prever caminhos de comportamento do usuário, criando interfaces intuitivas que naturalmente guiam visitantes à conversão.'
  },
  {
    icon: 'trending_up',
    iconBg: 'bg-blue-100 dark:bg-blue-900/30',
    iconColor: 'text-blue-600 dark:text-blue-400',
    title: 'SEO Automatizado',
    description: 'Estrutura semântica integrada e meta tags otimizadas por IA garantem que seu site ranqueie melhor no Google desde o primeiro dia.'
  }
]
</script>

<template>
  <section class="py-24 bg-surface-light dark:bg-surface-dark relative" id="ai-approach">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center max-w-3xl mx-auto mb-16">
        <h2 class="text-3xl md:text-4xl font-display font-bold text-navy dark:text-white mb-4">
          Por que Codeinx? <span class="text-primary">Desenvolvimento 10x Mais Rápido.</span>
        </h2>
        <p class="text-slate-600 dark:text-slate-400">
          Enquanto muitos falam de IA, nós aplicamos. Usamos modelos proprietários avançados para otimizar cada aspecto: velocidade de desenvolvimento, qualidade de UX, estratégia de conteúdo.
          <br>
          Resultado: você chega ao mercado 3-4x mais rápido com produto superior.
        </p>
      </div>
      
      <div class="grid md:grid-cols-3 gap-8">
        <div 
          v-for="feature in features" 
          :key="feature.title"
          class="p-8 rounded-2xl bg-background-light dark:bg-background-dark border border-slate-100 dark:border-slate-800 hover:border-primary/50 dark:hover:border-primary/50 transition-colors group"
        >
          <div :class="[feature.iconBg, 'w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform']">
            <span :class="[feature.iconColor, 'material-icons-outlined text-3xl']">{{ feature.icon }}</span>
          </div>
          <h3 class="text-xl font-bold text-navy dark:text-white mb-3">{{ feature.title }}</h3>
          <p class="text-slate-600 dark:text-slate-400 leading-relaxed">{{ feature.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
