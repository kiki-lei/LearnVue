<template>
  <div id="Breadcrumb">
    <el-breadcrumb separator="/">
    <!-- <el-breadcrumb separator-class="el-icon-arrow-right"> -->
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>
        <a :href="url">{{ name }}</a>
      </el-breadcrumb-item>
      <el-breadcrumb-item v-if="name2">{{ name2 }}</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script>
export default {
  name: "Breadcrumb",
  props: {
    url: String,
    name: String,
    name2: String
  }
};
</script>

<style scoped>
</style>