<template>
  <div class="login-wrapper">
    <el-button @click="login">Login</el-button>
  </div>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator'
import authApi from '@/api/auth'

@Component({ name: 'Login' })
export default class Login extends Vue {
  login () {
    authApi.login()
  }
}
</script>

<style lang="scss">
.login-wrapper {
  display: grid;
  justify-items: center;
}
</style>
