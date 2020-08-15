<template>
  <div class="page404-wrapper">
    <div>500 系统开小差了</div>
    <div>
      <el-button @click="home">返回主页</el-button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({ name: 'Page500' })
export default class Page500 extends Vue {
  home () {
    this.$router.replace('/')
  }
}
</script>

<style lang="scss">
.page500-wrapper {
  width: 100%;
}
</style>
