<script setup>
import Card from "./Card.vue"
import { useBlogType } from '@vuepress/plugin-blog/client'

const articles = useBlogType('article')

</script>

<template>
    <div class="CardList">
        <!-- 
        <Card title="HTML5" icon="html" description="Good practices and tips for better html coding and templating" @click="$router.push(htmlArticle.path)"/>
        <Card title="Sass/Scss/css" icon="sass" description="Good practices and tips for better css/sass/scss coding" />
        <Card title="Javascript" icon="js" description="Good practices and tips for better javascript coding" />
        <Card title="VueJs" icon="vue" description="Good practices and tips for better VueJs coding" />
        <Card title="VuePress" icon="vue" description="Good practices and tips for better VuePress coding" />
        <Card title="Angular" icon="angular" description="Good practices and tips for better angular coding" /> 
        -->

        <div
            v-for="{ info, path } in articles.items"
            @click="$router.push(path)"
            :key="path"
        >
            <Card
                v-if="info.excerpt === 'html'"
                @click="$router.push(info.path)"
                :icon="info.excerpt"
                description="Good practices and tips for better html coding and templating"
                title="HTML5"
            />
            <Card
                v-if="info.excerpt === 'sass'"
                @click="$router.push(info.path)"
                :icon="info.excerpt"
                description="Good practices and tips for better sass/scss/css coding and templating"
                title="Sass/Scss/Css"
            />
            <Card
                v-if="info.excerpt === 'js'"
                @click="$router.push(info.path)"
                :icon="info.excerpt"
                description="Good practices and tips for better javascript coding and templating"
                title="Javascript"
            />
            <Card
                v-if="info.excerpt === 'general'"
                @click="$router.push(info.path)"
                :icon="info.excerpt"
                description="General rules for an harmonized coding team"
                title="General rules"
            />
        </div>
    </div>
</template>

<style lang="scss">
.CardList {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    width: 100%;
    max-width: 1000px;
    margin: 100px auto;
}
</style>