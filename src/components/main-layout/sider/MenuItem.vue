<template>
  <div class="menu-item-wrapper">
    <el-submenu v-if="menu.children !== undefined" :index="menu.url">
      <template slot="title">
        <i :class="menu.icon"></i>
        <span>{{menu.title}}</span>
      </template>
      <MenuItem v-for="submenu in menu.children" :key="submenu.url"></MenuItem>
    </el-submenu>
    <el-menu-item v-else :index="menu.url">
      <i :class="menu.icon"></i>
      <span slot="title">{{menu.title}}</span>
    </el-menu-item>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import { MenuData } from '@/model'

@Component({ name: 'MenuItem' })
export default class MenuItem extends Vue {
  @Prop() menu!: MenuData
}

</script>

<style lang="scss">
.menu-item-wrapper {
  .el-menu-item.is-active {
    background-color: rgb(67, 74, 85) !important;
  }
}
</style>
