<script setup>
import { defineProps, computed } from "vue";
import IconVue from './Icons/IconVue.vue'
import IconAngular from './Icons/IconAngular.vue'
import IconHtml from './Icons/IconHtml.vue'
import IconSass from './Icons/IconSass.vue'
import IconJs from './Icons/IconJs.vue'
import IconGeneral from './Icons/IconGeneral.vue'
import TagItem from "./TagItem.vue";

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
    },
    category: {
        type: Array,
        default: []
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

function setCategoryClass(categoryType) {
    if(!categoryType) return

    return `Card-category--${categoryType}`
}

</script>

<template>
    <div class="Card" :class="cardCssClass">
        <div
            v-if="$props.category.length"
            class="Card-categories"
        >
            <TagItem
                v-for="(cat, index) in $props.category"
                :key="index"
                :title="cat"
                :colorName="cat"
            />
        </div>

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
    transition: transform .6s, filter .6s, gap .6s, padding .6s, box-shadow .6s, background-color .6s;
    cursor: pointer;
    filter:grayscale(90%);    

    .dark & {
    }
}

.Card:hover {
    gap: 5px;
    padding-top: 40px;
    background-color: rgba(white, .4);
    filter:grayscale(0%);

    .dark & {
        background-color: rgba(var(--c-bg-rgb-reverse), .05);
    }

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

    .Card-categories {
        opacity: 1
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

.Card-categories {
    position: absolute;
    display: flex;
    justify-content: center;
    gap: 5px;
    top: 0;
    left: 0;
    width: 100%;
    padding: 15px 10px 0 10px;
    opacity: 0;
    transition: opacity .6s;
}

.Card-category {
    position: relative;
    font-size: 10px;
    font-weight: 700;
    letter-spacing: .05rem;
    padding: 5px 8px 5px 15px;
    line-height: 1;
    border-radius: 20px;
    background-color: white;

    html.dark & {
        background-color: rgba(white, .1);
    }

    &::before {
        content:"";
        position: absolute;
        top: 50%;
        left: 5px;
        width: 5px;
        height: 5px;
        border-radius: 10px;
        background-color: white;
        color: white;
        transform: translateY(-50%);
    }
}

.Card-category--Backend {
    &::before {
        background-color: rgb(0, 107, 228);
    }
}

.Card-category--Frontend {
    &::before {
        background-color: rgb(237, 142, 0);
    }
}

</style>