<template>
  <div id="app">
    <el-container>
      <el-aside width="201px">
        <LeftBar/>
      </el-aside>
      <el-container>
        <el-header>
          <Header/>
        </el-header>
        <el-main>
          <Breadcrumb url="https://www.baidu.com" name="测试面包屑" name2="测试面包屑2"/>
          <CardCarousel/>
          <Home home1="home1 success"/>
        </el-main>
        <el-footer>
          <Footer/>
        </el-footer>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Home from "./components/Home";
import CardCarousel from "./components/CardCarousel";
import Footer from "./components/Footer";
import LeftBar from "./components/LeftBar";
import Header from "./components/Header";
import Breadcrumb from "./components/Breadcrumb";

export default {
  name: "app",
  components: {
    Home,
    CardCarousel,
    Footer,
    Header,
    Breadcrumb,
    LeftBar
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
  line-height: 60px;
}

.el-aside {
  margin-bottom: -99999999px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
}
</style>
