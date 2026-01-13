<script setup lang="ts">
import { onMounted, onUnmounted, watch } from 'vue'

const props = defineProps<{
  schema: Record<string, any>
}>()

let scriptElement: HTMLScriptElement | null = null

const injectSchema = () => {
  // Remove existing if any (cleanup)
  if (scriptElement && document.head.contains(scriptElement)) {
    document.head.removeChild(scriptElement)
  }

  // Create new script tag
  scriptElement = document.createElement('script')
  scriptElement.type = 'application/ld+json'
  scriptElement.text = JSON.stringify(props.schema)
  document.head.appendChild(scriptElement)
}

onMounted(() => {
  injectSchema()
})

onUnmounted(() => {
  if (scriptElement && document.head.contains(scriptElement)) {
    document.head.removeChild(scriptElement)
  }
})

// Update if props change
watch(() => props.schema, () => {
  injectSchema()
}, { deep: true })
</script>

<template>
  <!-- This component renders nothing visually, it only injects Head data -->
</template>
