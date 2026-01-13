<script setup lang="ts">
import { ref, onMounted } from 'vue'

const isDark = ref(false)
const isMenuOpen = ref(false)

onMounted(() => {
  // Light mode is the default - no automatic dark mode detection
  // Users can manually toggle to dark mode if desired
})

const toggleTheme = () => {
  isDark.value = !isDark.value
  if (isDark.value) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
}

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}
</script>

<template>
  <nav class="fixed w-full z-50 bg-background-light/90 dark:bg-background-dark/90 backdrop-blur-md border-b border-slate-200 dark:border-slate-800" aria-label="Navegação Principal">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-20 items-center">
        <!-- Logo -->
        <router-link to="/" class="flex-shrink-0 flex items-center gap-2 cursor-pointer">
          <img src="/logo.png" alt="codeinx" class="h-8 w-auto" />
          <span class="font-display font-bold text-2xl tracking-tight text-navy dark:text-white pb-1">codeinx</span>
        </router-link>

        
        <!-- Navigation Links -->
        <div class="hidden md:flex space-x-8 items-center">
          <router-link class="text-sm font-medium hover:text-primary transition-colors" :to="{ path: '/', hash: '#services' }">Serviços</router-link>
          <router-link class="text-sm font-medium hover:text-primary transition-colors" to="/agro">Agro&Varejo</router-link>
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

          <!-- Mobile Menu Button -->
          <button 
            class="md:hidden p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            @click="toggleMenu"
            aria-label="Menu Principal"
          >
            <span class="material-icons-outlined text-2xl">
              {{ isMenuOpen ? 'close' : 'menu' }}
            </span>
          </button>
        </div>
      </div>

      <!-- Mobile Menu -->
      <div v-show="isMenuOpen" class="md:hidden border-t border-slate-200 dark:border-slate-800">
        <div class="px-2 pt-2 pb-6 space-y-1">
          <router-link 
            class="block px-3 py-2 rounded-md text-base font-medium hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-primary transition-colors" 
            :to="{ path: '/', hash: '#services' }"
            @click="isMenuOpen = false"
          >
            Serviços
          </router-link>
          <router-link 
            class="block px-3 py-2 rounded-md text-base font-medium hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-primary transition-colors" 
            to="/agro"
            @click="isMenuOpen = false"
          >
            Agro&Varejo
          </router-link>
          <a 
            class="block w-full mt-4 text-center px-6 py-3 border border-transparent text-base font-medium rounded-full text-white bg-primary hover:bg-teal-700 shadow-lg shadow-teal-500/30 transition-all" 
            href="#contact"
            @click="isMenuOpen = false"
          >
            Iniciar Projeto
          </a>
        </div>
      </div>
    </div>
  </nav>
</template>
