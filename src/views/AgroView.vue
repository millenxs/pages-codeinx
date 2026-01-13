<script setup lang="ts">
import AgroHero from '../components/agro/AgroHero.vue'
import AgroServices from '../components/agro/AgroServices.vue'
import AgroAIApproach from '../components/agro/AgroAIApproach.vue'
import AgroPortfolio from '../components/agro/AgroPortfolio.vue'
import AgroTestimonials from '../components/agro/AgroTestimonials.vue'
import AgroContact from '../components/agro/AgroContact.vue'
import LogoCloud from '../components/LogoCloud.vue' // Reusing LogoCloud for now, maybe custom logos later?
</script>

<template>
  <main>
    <AgroHero />
    <LogoCloud />
    <AgroAIApproach />
    <AgroServices />
    <AgroPortfolio />
    <AgroTestimonials />
    <AgroContact />
  </main>
</template>
