<template>
  <div id="Header">
    <i class="fa fa-bars" @click="change" :class="{ active: isCollapse }"></i>
    &nbsp;
    <img
      alt="Vue logo"
      src="../assets/logo.png"
      height="30"
      style="vertical-align: middle;"
    >

    <div style="float: right;">
      <el-button type="primary" icon="el-icon-message" circle></el-button>&nbsp;&nbsp;
      <el-dropdown size="medium" split-button @click="loginOut" @command="handleCommand">退出
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="a">基本信息</el-dropdown-item>
          <el-dropdown-item command="b">切换用户</el-dropdown-item>
          <el-dropdown-item disabled>权限设置</el-dropdown-item>
          <el-dropdown-item command="系统设置" divided>系统设置</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      activeIndex: "1",
      activeIndex2: "1",
      isCollapse: ""
    };
  },
  methods: {
    // handleSelect(key, keyPath) {
    //   console.log(key, keyPath);
    // },
    loginOut: function() {
      this.$router.push('/')
    },
    handleCommand(command) {
      this.$message("click on item " + command);
    },
    change: function() {
      this.isCollapse = !this.isCollapse;

      this.$emit("changeLeftbar", this.isCollapse);
    }
  }
};
</script>

<style lang="less" scoped>
.fa-bars {
  color: #bba0db;
  &:hover {
    cursor: pointer;
  }
}
</style>