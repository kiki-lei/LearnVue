<template>
  <div id="Header">
    <img alt="Vue logo" src="../assets/logo.png" height="30" style="vertical-align: middle;">

    <div style="float: right;">
      <el-button type="primary" icon="el-icon-message" circle></el-button>&nbsp;&nbsp;

      <el-dropdown
        size="medium"
        split-button
        @click="loginOut"
        @command="handleCommand"
      >退出
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
      activeIndex2: "1"
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    loginOut: function() {
      alert("退出登录");
    },
    handleCommand(command) {
      this.$message("click on item " + command);
    }
  }
};
</script>

<style scoped>
</style>