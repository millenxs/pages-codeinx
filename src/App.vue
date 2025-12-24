<script setup lang="ts">
import Navbar from './components/Navbar.vue'
import Hero from './components/Hero.vue'
import LogoCloud from './components/LogoCloud.vue'
import AIApproach from './components/AIApproach.vue'
import Services from './components/Services.vue'
import Portfolio from './components/Portfolio.vue'
import Testimonials from './components/Testimonials.vue'
import Contact from './components/Contact.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <div class="bg-background-light dark:bg-background-dark text-slate-800 dark:text-slate-200 font-body transition-colors duration-300">
    <Navbar />
    <Hero />
    <LogoCloud />
    <AIApproach />
    <Services />
    <Portfolio />
    <Testimonials />
    <Contact />
    <Footer />
  </div>
</template>
