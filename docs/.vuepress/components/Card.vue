<script setup>
import { defineProps, computed } from "vue";
import IconVue from './Icons/IconVue.vue'
import IconAngular from './Icons/IconAngular.vue'
import IconHtml from './Icons/IconHtml.vue'
import IconSass from './Icons/IconSass.vue'
import IconJs from './Icons/IconJs.vue'
import IconGeneral from './Icons/IconGeneral.vue'

const props = defineProps({
    title: {
        type: String
    },
    icon: {
        type: String,
        default: ''
    },
    description: {
        type: String,
        default: ''
    }
})

const cardIcon = computed(() => {
    let iconComponent

    if(props.icon === 'vue') iconComponent = IconVue
    if(props.icon === 'angular') iconComponent = IconAngular
    if(props.icon === 'html') iconComponent = IconHtml
    if(props.icon === 'sass') iconComponent = IconSass
    if(props.icon === 'js') iconComponent = IconJs
    if(props.icon === 'general') iconComponent = IconGeneral

    return iconComponent
})

const cardCssClass = computed(() => {
    let cssClass = []

    if(props.icon === 'vue') cssClass.push('Card--vue')
    if(props.icon === 'angular') cssClass.push('Card--angular')
    if(props.icon === 'html') cssClass.push('Card--html')
    if(props.icon === 'sass') cssClass.push('Card--sass')
    if(props.icon === 'js') cssClass.push('Card--js')
    if(props.icon === 'general') cssClass.push('Card--general')

    return cssClass
})

</script>

<template>
    <div class="Card" :class="cardCssClass">
        <div><component :is="cardIcon" class="Card-icon"/></div>
        <h3 class="Card-title">{{ $props.title }}</h3>
        <div class="Card-descriptionContainer">
            <div class="Card-separator"></div>
            <p v-if="$props.description" class="Card-description">{{ $props.description }}</p>
        </div>
    </div>
</template>

<style lang="scss">
.Card {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    width: 250px;
    height: 250px;
    padding: 10px;
    padding-top: 65px;
    border: 1px solid rgba(255,255,255, .1);
    border-radius: 10px;
    box-shadow: 0 0 25px rgba(#000, .0);
    background-color: #f7f7f7;
    transition: transform .6s, filter .6s, gap .6s, padding .6s, box-shadow .6s;
    cursor: pointer;
    filter:grayscale(90%);    

    .dark & {
        background-color: rgba(var(--c-bg-rgb-reverse), .05);
    }
}

.Card:hover {
    gap: 5px;
    padding-top: 10px;
    box-shadow: 0 0 20px rgba(#000, .05);
    filter:grayscale(0%);

    .Card-icon {
        width: 40px;
        height: 40px;
    }

    .Card-title {
        font-size: 16px;
    }

    .Card-descriptionContainer {
        opacity: 1;
    }

}

.Card--vue {
    color: var(--text-color);
}

.Card-icon {
    width: 80px;
    height: 80px;
    transition: width .6s, height .6s;
}

.Card-title {
    font-size: 25px;
    font-weight: 700;
    transition: font-size .6s;
}

.Card-separator {
    width: 30px;
    height: 1px;
    background-color: rgba(#222, .2);
}

.Card-description {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical; 
    height: 42px;
    padding: 0 20px;
    font-size: 14px;
    text-align: center;
    color: rgba(var(--text-color-rgb), .4);
    overflow: hidden;
}


.Card-descriptionContainer {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items:  center;
    gap: 10px;
    top: 0;
    opacity: 0;
    transition: opacity .6s;
}

</style>