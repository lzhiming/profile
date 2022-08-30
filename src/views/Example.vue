<template>
    <div>
        <el-button type="primary" round @click="changeLanguage">
            {{ $t('buttons.changeLanguage') }}
        </el-button>
    </div>
</template>

<style scoped>

</style>

<script setup lang="ts">
import { useStore } from '@/store';
import { i18n, setLanguage } from '@/i18n';

function changeLanguage() {
    setLanguage(i18n.global.locale === "zh-cn" ? 'en' : 'zh-cn')
}

const st = useStore();

</script>
