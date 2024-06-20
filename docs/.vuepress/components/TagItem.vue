<script setup>
import { defineProps, computed } from "vue";
import { RouteLink, useRouter } from 'vuepress/client'

const props = defineProps({
    title: {
        type: String
    },
    colorName: {
        type: String,
        default: ''
    },
    path: {
        type: String,
        default: ''
    },
    size: {
        type: String,
        default: 'small'
    }
})

const router = useRouter()

const TagCssClass = computed(() => {
    let cssClass = []

    cssClass.push(`TagItem--${props.colorName}`)
    cssClass.push(`TagItem--${props.size}`)
    if(props.path) cssClass.push(`TagItem--link`)

    return cssClass
} )

function goTo() {
    if(!props.path) return
    router.push(props.path)
}

</script>

<template>
    <div @click="goTo" class="TagItem" :class="TagCssClass">{{ title }}</div>
</template>

<style lang="scss">

.TagItem {
    display: inline-block;
    position: relative;
    font-size: 9px;
    font-weight: 700;
    letter-spacing: .05rem;
    padding: 5px 8px 5px 15px;
    line-height: 1;
    border-radius: 20px;
    // background-color: white;
    transition: background-color .3s;

    html.dark & {
        // background-color: rgba(white, .1);
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

.TagItem--big {
    font-size: 20px;
    font-weight: 400;
    padding: 5px 15px 8px 30px;

    &::before {
        width: 8px;
        height: 8px;
        left: 15px;
    }
}

.TagItem--link {
    cursor: pointer;

    &:hover {
        background-color: white;
        
        html.dark & {
            background-color: rgba(white, .2);
        }
    }
}

.TagItem--Backend {
    &::before {
        background-color: rgb(0, 107, 228);
    }
}

.TagItem--Frontend {
    &::before {
        background-color: rgb(237, 142, 0);
    }
}

.TagItem--Guidelines {
    &::before {
        background-color: var(--pink-peaks);
    }
}

</style>