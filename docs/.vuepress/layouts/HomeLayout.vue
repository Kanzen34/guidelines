<script setup>
import ParentLayout from '@vuepress/theme-default/layouts/Layout.vue'
import CardList from '../components/CardList.vue';
import Hero from '../components/Hero.vue';

</script>

<template>
  <ParentLayout>
    <template #page>
      <main class="HomeLayout">
        <Hero/>
        <CardList 
        />
      </main>
    </template>
  </ParentLayout>
</template>

<style lang="scss">
@use '@vuepress/theme-default/styles/mixins';

.HomeLayout {

}
</style>
