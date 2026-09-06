<script setup lang="ts">
defineProps<{
  icon: string;
  name: string;
}>();
</script>

<template>
  <details class="uninstall-details">
    <summary>
      <div class="distro-label">
        <v-icon :icon="icon" width="1.2em" height="1.2em" />
        <span>{{ name }}</span>
      </div>
    </summary>
    <div class="details-content">
      <slot />
    </div>
  </details>
</template>

<style scoped>
.distro-label {
  gap: 0.5rem;
}
</style>
