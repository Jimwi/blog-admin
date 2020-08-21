<template>
  <div class="main-layout-wrapper">
    <el-container style="height:100%">
      <el-aside :width="siderWidth">
        <Sider></Sider>
      </el-aside>
      <el-container>
        <el-header>
          <Header></Header>
        </el-header>
        <el-main>
          <NavTags></NavTags>
          <keep-alive>
            <router-view></router-view>
          </keep-alive>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Sider from '@/components/main-layout/sider/Sider.vue'
import Header from '@/components/main-layout/header/Header.vue'
import NavTags from '@/components/main-layout/nav-tags/NavTags.vue'
import { menuState } from '@/store/menu'
import routeUtils from '@/utils/routeUtils'

@Component({
  name: 'MainLayout',
  components: { Sider, Header, NavTags }
})
export default class MainLayout extends Vue {
  get siderWidth (): string {
    return menuState.isCollapse ? '64px' : '220px'
  }

  mounted () {
    this.$router.addRoutes([{
      path: '/',
      name: 'MainLayout',
      component: MainLayout,
      redirect: '/home',
      children: routeUtils.buildRoutes(menuState.menuList)
    }])
  }
}
</script>

<style lang="scss">
.main-layout-wrapper {
  height: 100vh;
  min-height: 768px;
  .el-aside {
    background-color: #545c64;
    color: #fff;
    transition: width 0.3s;
  }
  .el-header {
    height: 50px !important;
    padding: 0px;
  }
  .el-main {
    padding: 0px;
  }
}
</style>
