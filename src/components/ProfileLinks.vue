<script setup lang="ts">
import { reactive } from 'vue'

interface SocialLink {
  label: string
  name: string
  url: string
}

const socialLinks = reactive<SocialLink[]>([
  { label: 'GitHub', name: 'shinichiro-motoike', url: 'https://github.com/shinichiro-motoike' },
  { label: 'X（Twitter）', name: 'moto_shin_', url: 'https://x.com/moto_shin_' },
  { label: 'Zenn', name: 'motoshin', url: 'https://zenn.dev/motoshin' },
  { label: 'Qiita', name: 'shin_moto', url: 'https://qiita.com/shin_moto' },
])
</script>

<template>
  <div>
    <dl v-for="sociallink in socialLinks" :key="sociallink.name">
      <dt>{{ sociallink.label }}</dt>
      <dd>
        <a :href="sociallink.url" target="_blank" rel="nofollow">{{ sociallink.name }}</a>
      </dd>
    </dl>
  </div>
</template>

<style scoped>
dl {
  font-size: 20px;
}

dt {
  display: block;
  float: left;
  width: 150px;
}
</style>
