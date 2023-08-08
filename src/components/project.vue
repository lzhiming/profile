<template>
    <div class="info-card">
        {{msg}}
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const props = withDefaults(defineProps<{
    msg: string;
    title: string
}>(), {})

const count = ref(0);

</script>

<style scoped lang="scss">
$border-grey: #efeff0;
.info-card{
    border-radius: 5px;
    border-top: 1px solid $border-grey;
    width: 240px;
    height: 300px;
    box-shadow: 0px 3px 5px -2px rgb(5 0 10 / 40%);
    background-image: url('../assets/svg/vue.svg');
    background-size: 100% 100%;
}
</style>
