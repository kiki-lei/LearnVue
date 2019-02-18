<template>
  <div id="Header">
    <img alt="Vue logo" src="../assets/logo.png" height="30" style="vertical-align: middle;">

    <el-dropdown
      size="medium"
      split-button
      type="primary"
      @click="loginOut"
      @command="handleCommand"
      style="float: right;"
    >退出
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item command="a">基本信息</el-dropdown-item>
        <el-dropdown-item command="b">切换用户</el-dropdown-item>
        <el-dropdown-item disabled>权限设置</el-dropdown-item>
        <el-dropdown-item command="系统设置" divided>系统设置</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>

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