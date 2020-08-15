<template>
  <div class="sider-wrapper">
    <Logo></Logo>
    <Menu></Menu>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Menu from '@/components/main-layout/sider/Menu.vue'
import Logo from '@/components/main-layout/sider/Logo.vue'

@Component({ name: 'Sider', components: { Menu, Logo } })
export default class Sider extends Vue {

}
</script>

<style lang="scss">
.sider-wrapper {
  width: 100%;
}
</style>
