<template>
  <div id="Home">
    <el-container>
      <LeftBar :isCollapse="isCollapseState"/>
      <el-container>
        <el-header>
          <Header @changeLeftbar="getLeftbarState"/>
        </el-header>
        <el-main>
          <Breadcrumb url="https://www.baidu.com" name="测试面包屑" name2="测试面包屑2"/>
          <CardCarousel/>
          <Home home1="home1 success"/>
          <router-view></router-view>
        </el-main>
        <el-footer>
          <Footer/>
        </el-footer>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Home from "@/components/Home";
import CardCarousel from "@/components/CardCarousel";
import Footer from "@/components/Footer";
import LeftBar from "@/components/LeftBar";
import Header from "@/components/Header";
import Breadcrumb from "@/components/Breadcrumb";

export default {
  name: "app",
  components: {
    Home,
    CardCarousel,
    Footer,
    Header,
    Breadcrumb,
    LeftBar
  },
  data() {
    return {
      isCollapseState: false
    };
  },
  methods: {
    getLeftbarState: function(getState) {
      this.isCollapseState = getState;
    }
  }
};
</script>

<style lang="less" scoped>
.el-header,
.el-footer {
  background-color: #f7cadb;
  line-height: 60px;
}

.el-aside {
  margin-bottom: -99999999px;
}

.el-main {
  background-color: #efedee;
  color: #333;
}
</style>
