<template>
  <div class="header-wrapper">
    <div class="hamburger" @click="toggleCollapse">
      <i :class="hamgurgerClass"></i>
    </div>
    <div class="breadcrumb">
      <el-breadcrumb>
        <el-breadcrumb-item v-for="item in breadcrumbList" :key="item.url">{{item.title}}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="user-center">
      <el-dropdown placement="bottom-start" trigger="click">
        <div class="el-dropdown-link">
          <el-avatar size="small" src="favicon.ico"></el-avatar>
          <span class="username">{{ username }}</span>
        </div>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>
            <span @click="logout">退出登录</span>
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { TagData } from '@/model'
import { menuState } from '@/store/menu'

@Component({ name: 'Header' })
export default class Header extends Vue {
  get hamgurgerClass (): string {
    return menuState.isCollapse ? 'el-icon-s-unfold' : 'el-icon-s-fold'
  }

  toggleCollapse () {
    const isCollapse = menuState.isCollapse
    menuState.updateIsCollapse(!isCollapse)
  }

  get breadcrumbList (): TagData[] {
    return this.$route.meta.breadcrumbList
  }

  get username (): string {
    return 'someone'
  }

  logout () {
    console.log('logout')
  }
}
</script>

<style lang="scss">
.header-wrapper {
  height: 100%;
  display: grid;
  grid-template-columns: 50px 1fr 150px;
  background-color: #545c64;
  color: #ffffff !important;
  .hamburger {
    text-align: center;
    font-size: 24px;
    padding: 8px 0;
    i {
      height: 24px;
    }
    &:hover {
      cursor: pointer;
      background-color: rgb(67, 74, 80);
    }
  }
  .breadcrumb {
    padding: 18px 10px;
    .el-breadcrumb__inner {
      color: #ffffff;
    }
    .el-breadcrumb__item:last-child .el-breadcrumb__inner {
      color: #ffffff;
    }
  }
  .user-center {
    .el-dropdown {
      height: 50px;
      .el-dropdown-link {
        height: 28px;
        padding: 11px 0;
        vertical-align: middle;
        &:hover {
          cursor: pointer;
        }
        .username {
          display: inline-block;
          height: 28px;
          vertical-align: top;
          line-height: 2;
          padding: 0 5px;
          font-size: 14px;
        }
      }
    }
  }
}
</style>
