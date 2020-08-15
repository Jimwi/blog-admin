<template>
  <div class="page404-wrapper">
    <div>404 页面不见了</div>
    <div>
      <el-button @click="home">返回主页</el-button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({ name: 'Page404' })
export default class Page404 extends Vue {
  home () {
    this.$router.replace('/')
  }
}
</script>

<style lang="scss">
.page404-wrapper {
  width: 100%;
}
</style>
