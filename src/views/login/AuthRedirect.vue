<template>
  <div></div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import authApi from '@/api/auth'
import { userState } from '@/store/user'

@Component({ name: 'AuthRedict' })
export default class AuthRedict extends Vue {
  async mounted () {
    try {
      const code = this.$route.query.code as string
      const authInfo = await authApi.getAuthInfo(code)
      userState.updateAuthInfo(authInfo)
      const userInfo = await authApi.getUserInfo(authInfo.accessToken)
      userState.updateUserInfo(userInfo)
      this.$router.replace('/')
    } catch (err) { }
  }

  render () { }
}
</script>

<style lang="scss">
</style>
