<script setup>
import ParentLayout from '@vuepress/theme-default/layouts/Layout.vue'
import CardList from '../components/CardList.vue';
import Hero from '../components/Hero.vue';
import GradientLine from '../components/GradientLine.vue';

</script>

<template>
  <ParentLayout>

    <!-- hack to remove sidebar. There is surely a better way /!\ -->
    <template #sidebar><div></div></template> 
    
    <template #page>
      <main class="HomeLayout">
        <Hero/>
        <GradientLine />
        <CardList />
        <GradientLine />
      </main>
    </template>
  </ParentLayout>
</template>

<style lang="scss">
@use '@vuepress/theme-default/styles/mixins';

.HomeLayout {}

</style>
