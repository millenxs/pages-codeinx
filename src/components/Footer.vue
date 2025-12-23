<script setup lang="ts">
import { Mail, Phone, Globe } from 'lucide-vue-next'

const currentYear = new Date().getFullYear()
</script>

<template>
  <footer class="bg-slate-950 text-gray-400 py-12">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <h3 class="text-xl text-white mb-4">Agência Digital</h3>
          <p class="text-sm">
            Transformando ideias em experiências digitais de sucesso desde 2015.
          </p>
        </div>
        
        <div>
          <h4 class="text-white mb-4">Serviços</h4>
          <ul class="space-y-2 text-sm">
            <li>
              <a href="#servicos" class="hover:text-lime-400 transition-colors">
                Criação de Sites
              </a>
            </li>
            <li>
              <a href="#servicos" class="hover:text-lime-400 transition-colors">
                Landing Pages
              </a>
            </li>
            <li>
              <a href="#servicos" class="hover:text-lime-400 transition-colors">
                Lojas Virtuais
              </a>
            </li>
            <li>
              <a href="#servicos" class="hover:text-lime-400 transition-colors">
                SEO & Marketing
              </a>
            </li>
          </ul>
        </div>
        
        <div>
          <h4 class="text-white mb-4">Empresa</h4>
          <ul class="space-y-2 text-sm">
            <li>
              <a href="#" class="hover:text-teal-400 transition-colors">
                Sobre Nós
              </a>
            </li>
            <li>
              <a href="#" class="hover:text-teal-400 transition-colors">
                Portfolio
              </a>
            </li>
            <li>
              <a href="#" class="hover:text-teal-400 transition-colors">
                Blog
              </a>
            </li>
            <li>
              <a href="#contato" class="hover:text-teal-400 transition-colors">
                Contato
              </a>
            </li>
          </ul>
        </div>
        
        <div>
          <h4 class="text-white mb-4">Contato</h4>
          <ul class="space-y-3 text-sm">
            <li class="flex items-center gap-2">
              <Mail class="h-4 w-4 text-teal-400" />
              <a href="mailto:contato@agencia.com" class="hover:text-lime-400 transition-colors">
                contato@agencia.com
              </a>
            </li>
            <li class="flex items-center gap-2">
              <Phone class="h-4 w-4 text-teal-400" />
              <a href="tel:+5511999999999" class="hover:text-lime-400 transition-colors">
                +55 11 99999-9999
              </a>
            </li>
            <li class="flex items-center gap-2">
              <Globe class="h-4 w-4 text-teal-400" />
              <a href="#" class="hover:text-lime-400 transition-colors">
                www.agencia.com
              </a>
            </li>
          </ul>
        </div>
      </div>
      
      <div class="mt-12 pt-8 border-t border-slate-800 text-center text-sm">
        <p>
          © {{ currentYear }} Agência Digital. Todos os direitos reservados.
        </p>
      </div>
    </div>
  </footer>
</template>
