<script setup lang="ts">
import { ref, onMounted } from 'vue'

const isDark = ref(false)

onMounted(() => {
  // Check system preference
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    isDark.value = true
    document.documentElement.classList.add('dark')
  }
})

const toggleTheme = () => {
  isDark.value = !isDark.value
  if (isDark.value) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
}
</script>

<template>
  <nav class="fixed w-full z-50 bg-background-light/90 dark:bg-background-dark/90 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-20 items-center">
        <!-- Logo -->
        <div class="flex-shrink-0 flex items-center gap-2 cursor-pointer">
          <div class="relative w-8 h-8">
            <div class="absolute inset-0 rounded-full border-4 border-navy dark:border-white"></div>
            <div class="absolute top-1 right-1 w-3 h-3 bg-secondary rounded-full"></div>
          </div>
          <span class="font-display font-bold text-2xl tracking-tight text-navy dark:text-white">codeinx</span>
        </div>
        
        <!-- Navigation Links -->
        <div class="hidden md:flex space-x-8 items-center">
          <a class="text-sm font-medium hover:text-primary transition-colors" href="#services">Serviços</a>
          <a class="text-sm font-medium hover:text-primary transition-colors" href="#ai-approach">Abordagem com IA</a>
          <a class="text-sm font-medium hover:text-primary transition-colors" href="#portfolio">Trabalhos</a>
          <a class="text-sm font-medium hover:text-primary transition-colors" href="#testimonials">Depoimentos</a>
        </div>
        
        <!-- Actions -->
        <div class="flex items-center gap-4">
          <button 
            class="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors" 
            @click="toggleTheme"
          >
            <span class="material-icons-outlined text-slate-600 dark:text-slate-300 text-xl">
              {{ isDark ? 'light_mode' : 'dark_mode' }}
            </span>
          </button>
          <a 
            class="hidden md:inline-flex items-center justify-center px-6 py-2.5 border border-transparent text-sm font-medium rounded-full text-white bg-primary hover:bg-teal-700 shadow-lg shadow-teal-500/30 transition-all transform hover:-translate-y-0.5" 
            href="#contact"
          >
            Iniciar Projeto
          </a>
        </div>
      </div>
    </div>
  </nav>
</template>
