<script setup lang="ts">
const currentYear = new Date().getFullYear()

const services = [
  { name: 'Desenvolvimento Web', href: '#' },
  { name: 'Landing Pages', href: '#' },
  { name: 'Lojas E-Commerce', href: '#' },
  { name: 'Integração de IA', href: '#' }
]

const company = [
  { name: 'Sobre Nós', href: '#' },
  { name: 'Nosso Processo', href: '#' },
  { name: 'Carreiras', href: '#' },
  { name: 'Contato', href: '#contact' }
]
</script>

<template>
  <footer class="bg-background-light dark:bg-background-dark border-t border-slate-200 dark:border-slate-800 pt-16 pb-8">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid md:grid-cols-4 gap-8 mb-12">
        <!-- Brand -->
        <div class="col-span-1 md:col-span-2">
          <div class="flex items-center gap-2 mb-4">
            <img src="/logo.png" alt="codeinx" class="h-8 w-auto" />
            <span class="font-display font-bold text-xl text-navy dark:text-white pb-1">codeinx</span>
          </div>
          <p class="text-slate-500 dark:text-slate-400 max-w-sm mb-6">
            Estratégia digital, engenharia de software, inteligência artificial e suporte contínuo. Tudo integrado em uma única parceria que impulsiona seu crescimento.
          </p>
          <div class="flex space-x-4">
            <a class="text-slate-400 hover:text-primary transition-colors" href="#" aria-label="Facebook">
              <span class="material-icons-outlined">facebook</span>
            </a>
            <a class="text-slate-400 hover:text-primary transition-colors" href="#" aria-label="Portfólio">
              <span class="material-icons-outlined">smart_display</span>
            </a>
            <a class="text-slate-400 hover:text-primary transition-colors" href="#" aria-label="Email">
              <span class="material-icons-outlined">alternate_email</span>
            </a>
          </div>
        </div>
        
        <!-- Services -->
        <div>
          <h4 class="font-bold text-navy dark:text-white mb-4">Serviços</h4>
          <ul class="space-y-2 text-sm text-slate-500 dark:text-slate-400">
            <li v-for="service in services" :key="service.name">
              <a class="hover:text-primary" :href="service.href">{{ service.name }}</a>
            </li>
          </ul>
        </div>
        
        <!-- Company -->
        <div>
          <h4 class="font-bold text-navy dark:text-white mb-4">Empresa</h4>
          <ul class="space-y-2 text-sm text-slate-500 dark:text-slate-400">
            <li v-for="item in company" :key="item.name">
              <a class="hover:text-primary" :href="item.href">{{ item.name }}</a>
            </li>
          </ul>
        </div>
      </div>
      
      <!-- Bottom Bar -->
      <div class="border-t border-slate-200 dark:border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500 dark:text-slate-400">
        <p>© {{ currentYear }} codeinx Agency. Todos os direitos reservados.</p>
        <div class="flex space-x-6 mt-4 md:mt-0">
          <a class="hover:text-slate-800 dark:hover:text-white" href="#">Política de Privacidade</a>
          <a class="hover:text-slate-800 dark:hover:text-white" href="#">Termos de Serviço</a>
        </div>
      </div>
    </div>
  </footer>
</template>
