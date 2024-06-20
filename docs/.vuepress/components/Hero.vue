<script setup>
import IconLogotypePeaks from '../components/Icons/IconLogotypePeaks.vue';
import { useBlogCategory } from '@vuepress/plugin-blog/client'
import TagItem from './TagItem.vue';
import GradientLine from './GradientLine.vue';

const categoryMap = useBlogCategory('category')

</script>
<template>
    <div class="Hero">
        <GradientLine />
        <div class="Hero-container">

            <div class="Hero-logoContainer">
                <IconLogotypePeaks class="Hero-icon"/>
                <div>PEAKS</div>
            </div>

            <div class="Hero-header">
                <h1 class="title">GUIDELINES & GOOD PRACTISES</h1>
                <p class="text">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Magni eligendi non quaerat nam, magnam officiis doloribus nobis corporis beatae explicabo aliquam officia laborum eius facilis debitis ipsam eaque quo laudantium.
                    Fuga soluta neque suscipit illum a sit quos, doloribus molestiae.
                </p>
            </div>

            <div class="Hero-separator"></div>

            <h2 class="title title--small">Look directly for a category</h2>
            <p class="text">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

            <div class="Hero-categoryList">
                <TagItem
                v-for="({ items, path }, name) in categoryMap.map"
                :key="name"
                :to="path"
                :title="name"
                :colorName="name"
                :path="path"
                size="big"
                />
            </div>
        </div>
    </div>
</template>

<style lang="scss">
.Hero {
    padding-top: var(--navbar-height);
    text-align: center;
}

.Hero-header {
    margin-bottom: 30px;
}

.Hero-separator {
    height: 1px;
    max-width: 100px;
    width: 100%;
    margin: 40px auto;
    background: rgba(black, .2);

    html.dark &{
        background-color: rgba(white, .2);
    }
}

.Hero-container {
    width: 100%;
    max-width: 1040px;
    padding-top: 100px;
    padding-bottom: 100px;
    padding-left:20px;
    padding-right:20px;
    margin: 0 auto;
}

.Hero-logoContainer {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height:200px;
    margin-bottom: 30px;

    > div {
        position: relative;
        z-index:2;
        font-size: 90px;
        font-weight:700;
        background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
        -webkit-background-clip: text;
        background-clip: text;
        -webkit-text-fill-color: transparent;
        background-size: 400% 400%;
        animation: gradient 25s ease infinite;
    }

    html.dark {
        background-color: rgba(black, .1);
    }
}

.Hero-logo {
    width: 170px;
    height: auto;
}

.Hero-icon {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 200px;
    height: 200px;
    transform: translate(-50%, -50%);
    opacity: .1;
    
    html.dark & {
        opacity: .05;
    }
}

.Hero-categoryList {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    margin-top:20px;
    margin-bottom:20px;
    gap: 10px;
}


@keyframes gradient {
	0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
}
</style>