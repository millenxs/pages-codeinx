<script setup lang="ts">
const features = [
  {
    icon: 'bolt',
    iconBg: 'bg-secondary/20',
    iconColor: 'text-green-700 dark:text-green-400',
    title: '2x Faster Deployment',
    description: 'Our AI-assisted coding workflows reduce development time without sacrificing quality, getting your product to market sooner.'
  },
  {
    icon: 'psychology',
    iconBg: 'bg-primary/20',
    iconColor: 'text-primary',
    title: 'Predictive UX Design',
    description: 'We use data-driven models to predict user behavior paths, creating intuitive interfaces that naturally guide visitors to convert.'
  },
  {
    icon: 'trending_up',
    iconBg: 'bg-blue-100 dark:bg-blue-900/30',
    iconColor: 'text-blue-600 dark:text-blue-400',
    title: 'Automated SEO',
    description: 'Built-in semantic structure and AI-optimized meta tags ensure your site ranks higher on Google from day one.'
  }
]
</script>

<template>
  <section class="py-24 bg-surface-light dark:bg-surface-dark relative" id="ai-approach">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center max-w-3xl mx-auto mb-16">
        <h2 class="text-3xl md:text-4xl font-display font-bold text-navy dark:text-white mb-4">
          Why Codeinx? <span class="text-primary">The AI Advantage.</span>
        </h2>
        <p class="text-slate-600 dark:text-slate-400">
          Traditional development is slow. We leverage proprietary AI models to accelerate coding, optimize UX, and generate copy that sells.
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
