<template>
  <Row>
    <Col :span="24" class="top-banner">
      <a href="#" class="logo">logo</a>
      <span class="user">zyq</span>
    </Col>
    <Col :span="24" class="main clearfix">
      <Menu class="aside-nav" @on-select="handleOpen" width="15%">
        <template v-for="item in $router.options.routes[1].children">
          <!--<el-submenu class="nav-item">{{item.name}}</el-submenu>-->
          <Menu-item class="nav-item" :name="item.path" @click="$router.push(item.path)">{{item.name}}</Menu-item>
        </template>
      </Menu>
      <div class="main-content clearfix">
        <router-view></router-view>
      </div>
    </Col>
  </Row>
</template>
<script>
export default {
  data () {
    return {}
  },
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
      this.$router.push(key)
    }
  }
}
</script>
<style scoped>
  .top-banner {
    height: 60px;
    line-height: 60px;
    background-color:aqua;
  }
  .top-banner .logo {
    float: left;
    height: 100%;
    width: 80px;
    background-color: gray;
    margin-left: 10px;
    color:black;
    text-decoration: none;
  }
  .top-banner .user {
    float: right;
    height: 100%;
    width: 80px;
    background-color: gray;
    margin-right: 10px;
    cursor: pointer;
  }
  .main .aside-nav {
    float:left;
  }
  .main .aside-nav .nav-item {
    width: 100%;
    height: 50px;
    text-align: center;
    cursor: pointer;
  }
  .main .main-content{
    float:left;
    width: 85%;
  }
  .clearfix::after {
            content: ".";
            clear: both;
            display: block;
            overflow: hidden;
            font-size: 0;
            height: 0;
        }

  .clearfix {
        zoom: 1;
    }
</style>
