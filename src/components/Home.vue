<template>
  <div id="Home">
    <p>this is home page, {{ home1 }}</p>

    <el-button type="primary" round :title="title">{{name}}</el-button>

    <el-input placeholder="请输入内容" prefix-icon="el-icon-search" v-model="name" style="width: 200px;"></el-input>

    <span v-if="nicai">你看见我了</span>

    <ol>
      <li v-for="todo in todos" :key="todo.text">{{todo.text}}</li>
    </ol>

    <p>ask:
      <input type="text" v-model="ask">
    </p>
    <p>{{ answer }}</p>
  </div>
</template>

<script>
export default {
  name: "home",
  props: {
    home1: String
  },
  data() {
    return {
      name: "null",
      title: "这个是title",
      nicai: true,
      todos: [
        {
          text: "你好"
        },
        {
          text: "你猜"
        },
        {
          text: "who？"
        }
      ],
      ask: "",
      answer: "I cannot give you an answer until you ask a question!"
    };
  },
  watch: {
    ask: function() {
      this.answer = "Waiting for you to stop typing...";
    }
  }
};
</script>

<style scoped>
</style>