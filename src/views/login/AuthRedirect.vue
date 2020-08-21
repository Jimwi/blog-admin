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
    console.log(this.$route)
    try {
      const code = this.$route.query.code as string
      const authInfo = await authApi.getAuthInfo(code)
      console.log(authInfo)
      userState.updateAuthInfo(authInfo)

    } catch (err) { }
  }

  render () {

  }
}
</script>

<style lang="scss">
</style>
