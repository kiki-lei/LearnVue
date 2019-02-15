<template>
  <div id="app">
    <el-container>
      <el-aside width="200px">Aside</el-aside>
      <el-container>
        <el-header>
          <img alt="Vue logo" src="./assets/logo.png" height="100%">
        </el-header>
        <el-main>
          <CardCarousel/>
          <HelloWorld msg="Welcome to Your Vue.js App"/>
          <Home home1="home1 success"/>
        </el-main>
        <el-footer>Footer</el-footer>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import Home from "./components/Home";
import CardCarousel from "./components/CardCarousel";

export default {
  name: "app",
  components: {
    HelloWorld,
    Home,
    CardCarousel
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

#app {
  color: #333;
}

.el-header,
.el-footer {
  background-color: #b3c0d1;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
}
</style>
