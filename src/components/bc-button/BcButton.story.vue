<script setup>
import BcButton from '@/components/bc-button/BcButton.vue';
</script>

<template>
  <Story title="BcButton">
    <Variant title="default">
      <BcButton label="test"/>
    </Variant>
    <Variant title="Outlined">
      <BcButton type="outlined" label="test"/>️
    </Variant>
    <Variant title="Text">
      <BcButton type="text" label="test"/>
    </Variant>
  </Story>
</template>
