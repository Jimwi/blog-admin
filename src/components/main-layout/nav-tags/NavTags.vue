<template>
  <div class="nav-tags-wapper"></div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { menuState } from '@/store/menu'
import { TagData } from '@/model'

@Component({ name: 'NavTags' })
export default class NavTags extends Vue {
  get openedTags (): TagData[] {
    return menuState.openedTags
  }
}
</script>

<style lang="scss">
.nav-tags-wapper {
  height: 35px;
  background-color: #dddddd;
}
</style>
