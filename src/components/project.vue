<template>
    <div class="info-card" :style="position">
        <div class="title">{{title}}</div>
        <div class="point">功德: {{point}}</div>
        <div class="player" style="background-position: 0 0;">
            <div class="tx"></div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const props = withDefaults(defineProps<{
    point: string;
    title: string;
    position: string
}>(), {})

const count = ref(0);

</script>

<style scoped lang="scss">

@keyframes slide-bottom{0%{transform:translateY(40)}100%{transform:translateY(-20px)}}



$border-grey: #efeff0;
.info-card{
    width: 90px;
    height: 160px;
    position: absolute;
    .title{
        width: 400px;text-align: left;
        font-size: 14px;
        color: white;
    }
    .point{
        color: greenyellow;
        font-size: 14px;
    }
    .player{
        width: 90px;
        height: 120px;
        overflow: hidden;
        background-image: url('../assets/character/girl.png');
        background-size: 360px 480px;
        .tx{
            width: 90px;
            height: 120px;
            background-size: 100% 100%;
            animation:slide-bottom .5s cubic-bezier(.25,.46,.45,.94) infinite alternate-reverse both;
            background-image: url('../assets/game/blood1.png');
        }
    }
}
</style>
