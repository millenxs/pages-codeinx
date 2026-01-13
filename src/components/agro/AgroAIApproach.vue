<script setup lang="ts">
const features = [
  {
    icon: 'analytics',
    iconBg: 'bg-green-100 dark:bg-green-900/30',
    iconColor: 'text-green-700 dark:text-green-400',
    title: 'Previsão de Demanda e Safra',
    description: 'Criamos sistemas inteligentes que analisam seu histórico de vendas e dados climáticos para prever a demanda dos seus produtos e o desempenho da próxima safra. Ajudamos você a decidir o que plantar, quanto estocar e quando vender - tudo baseado em dados reais, não no achismo.'
  },
  {
    icon: 'share_location',
    iconBg: 'bg-yellow-100 dark:bg-yellow-900/30',
    iconColor: 'text-yellow-700 dark:text-yellow-500',
    title: 'Logística Otimizada por IA',
    description: 'Desenvolvemos sistemas que reduzem seus custos de frete em até 30%. A plataforma calcula automaticamente as melhores rotas, organiza as cargas de forma mais eficiente e conecta caminhoneiros disponíveis com suas entregas - acabou o desperdício de viagens vazias e rotas longas'
  },
  {
    icon: 'sync_alt',
    iconBg: 'bg-blue-100 dark:bg-blue-900/30',
    iconColor: 'text-blue-600 dark:text-blue-400',
    title: 'Conexão Direta ao Mercado',
    description: 'Criamos plataformas que conectam você diretamente com quem quer comprar seus produtos. Elimine atravessadores e aumente sua margem de lucro. O sistema facilita negociações com cooperativas, traders, varejistas e compradores finais - tudo digital, rápido e transparente.'
  }
]
</script>

<template>
  <section class="py-24 bg-surface-light dark:bg-surface-dark relative" id="ai-approach" aria-label="Nossa Abordagem Agro">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center max-w-3xl mx-auto mb-16">
        <h2 class="text-3xl md:text-4xl font-display font-bold text-navy dark:text-white mb-4">
          Por que a nossa tecnologia? <span class="text-green-600">Smart Farming na Prática.</span>
        </h2>
        <p class="text-slate-600 dark:text-slate-400">
          Não criamos sistemas genéricos. Desenvolvemos soluções feitas sob medida para os desafios reais do agronegócio e varejo alimentar. Entendemos suas dores, conhecemos o mercado e criamos ferramentas que realmente funcionam no dia a dia do campo e da loja.
          <br>
          Resultado: você trabalha melhor, gasta menos tempo com burocracia e lucra mais.
        </p>
      </div>
      
      <div class="grid md:grid-cols-3 gap-8">
        <div 
          v-for="feature in features" 
          :key="feature.title"
          class="p-8 rounded-2xl bg-background-light dark:bg-background-dark border border-slate-100 dark:border-slate-800 hover:border-green-500/50 dark:hover:border-green-500/50 transition-colors group"
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
