<template>
  <div class="logo-wrapper">
    <div class="logo-img">
      <img src="favicon.ico" />
    </div>
    <div v-if="!isCollapse" class="logo-name">{{systemName}}</div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { appState } from '@/store/app'
import { menuState } from '@/store/menu'

@Component({ name: 'Logo' })
export default class Logo extends Vue {
  get systemName (): string {
    return appState.systemName
  }

  get isCollapse (): boolean {
    return menuState.isCollapse
  }
}
</script>

<style lang="scss">
.logo-wrapper {
  width: 100%;
  height: 50px;
  color: #fff;
  .logo-img {
    height: 100%;
    width: 64px;
    display: inline-block;
    img {
      height: 40px;
      width: 40px;
      padding: 5px 12px;
    }
  }
  .logo-name {
    display: inline-block;
    width: calc(100% - 70px);
    height: 40px;
    padding: 5px 0px;
    vertical-align: top;
    font-size: 18px;
    text-align: center;
    line-height: 2.2;
  }
}
</style>
