<template>
  <div id="app">
    <header class="header">
      <el-row>
        <el-col :span="24">
          <el-menu default-active="1" class="el-menu-demo" mode="horizontal" @select="">
            <el-menu-item index="1">江苏大学附属医院科级干部考核测评系统</el-menu-item>
          </el-menu>
        </el-col>
      </el-row>
    </header>

    <!--<div style="position: relative;height: 60px;width: 100%;;"></div>-->

    <main>
      <div class="main-left">
        <el-menu default-active="/activePublic" class="el-menu-vertical-demo" :router="true">
          <el-menu-item index="/activePublic" :class="{'isActive': active}">系统管理员</el-menu-item>
          <el-menu-item index="/activeManage" :class="{'isActive': !active}">干部考核</el-menu-item>
        </el-menu>
      </div>

      <div class="main-right">
        <!--<router-view class="view"></router-view>-->
      </div>
    </main>
  </div>
</template>

<script>
  import Vue from 'vue'
  import Element from 'element-ui'
  import 'element-ui/lib/theme-default/index.css'

  Vue.use(Element)

  export default {
    name: 'app',
    data: function () {
      return {
          active:true
      }
    }
}
</script>

<style>
  body{margin: 0;}
  #app {
    min-width: 1200px;
    margin: 0 auto;
    font-family: "Helvetica Neue","PingFang SC",Arial,sans-serif;
  }
  /* 头部导航 */
  header{z-index: 1000;min-width: 1200px;transition: all 0.5s ease;  border-top: solid 1px #3091F2;  background-color: #fff;  box-shadow: 0 2px 4px 0 rgba(0,0,0,.12),0 0 6px 0 rgba(0,0,0,.04);  }
  header.header-fixed{position: fixed;top: 0;left: 0;right: 0;}
  header .el-menu-demo{padding-left: 300px!important;}

  /* 主内容区 */
  main{    display: -webkit-box;  display: -ms-flexbox;  display: flex;  min-height: 800px;  border: solid 40px #E9ECF1;  background-color: #FCFCFC;  }
  main .main-left{text-align: center;width: 200px;float: left;}
  main .main-right{-webkit-box-flex: 1;  -ms-flex: 1;  flex: 1;  background-color: #fff; padding: 50px 70px; }
  main .el-menu{background-color: transparent!important;}
</style>
