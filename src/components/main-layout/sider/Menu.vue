<template>
  <div class="menu-wrapper">
    <el-menu
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#fff"
      :collapse="isCollapse"
      :collapse-transition="false"
    >
      <MenuItem v-for="menu in menuList" :menu="menu" :key="menu.url"></MenuItem>
    </el-menu>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { menuState } from '@/store/menu'
import { MenuData } from '@/model'
import MenuItem from '@/components/main-layout/sider/MenuItem.vue'

@Component({
  name: 'Menu',
  components: { MenuItem }
})
export default class Menu extends Vue {
  get menuList (): MenuData[] {
    return menuState.menuList
  }

  get isCollapse (): boolean {
    return menuState.isCollapse
  }
}
</script>

<style lang="scss">
.menu-wrapper {
  height: 100%;
  .el-menu {
    border: 0;
    .el-menu-item,
    .el-submenu__title {
      height: 50px;
      line-height: 50px;
    }
  }
}
</style>
