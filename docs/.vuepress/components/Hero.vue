<script setup>
import IconLogotypePeaks from '../components/Icons/IconLogotypePeaks.vue';
import IconLogoPeaks from './Icons/IconLogoPeaks.vue';

</script>
<template>
    <div class="Hero">
        <IconLogotypePeaks class="Hero-icon"/>
        <IconLogoPeaks class="Hero-logo"/>
    </div>
</template>

<style lang="scss">
.Hero {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height:200px;
    padding-top: 200px;
    padding-bottom: 200px;
    background-color: rgba(#000, .1);

    html.dark {
        background-color: rgba(#000, .1);
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
    opacity: .05;
}
</style>