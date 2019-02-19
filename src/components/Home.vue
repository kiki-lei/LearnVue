<template>
  <div id="Home">
    <div id="todoList">
      <form v-on:submit.prevent="addTodo">
        <el-input placeholder="Add something..." v-model.trim="todoThing" style="width: 200px;"></el-input>
        <el-button type="primary" @click="addTodo">添加</el-button>
      </form>

      <ul>
        <li v-for="(todo, index) in todos" :key="todo.id">
          {{todo.id}}. {{ parentMessage }} - {{ index }} - {{todo.text}}
          <el-button type="text" icon="el-icon-delete" circle v-on:click="todos.splice(index, 1)"></el-button>
        </li>
      </ul>
    </div>

    <br>
    <router-link to="/blank">测试路由</router-link>
    <br>

    <p>this is home page, {{ home1 }}</p>

    <el-button type="primary" round :title="title">{{name}}</el-button>

    <el-input placeholder="请输入内容" prefix-icon="el-icon-search" v-model="name" style="width: 200px;"></el-input>

    <br>
    <br>

    <span v-if="nicai">你看见我了</span>

    <br>
    <br>

    <p>
      ask:
      <input type="text" v-model="ask">
    </p>
    <p>{{ answer }}</p>

    <br>
    <div v-if="type === 'A'">A</div>
    <div v-else-if="type === 'B'">B</div>
    <div v-else-if="type === 'C'">C</div>
    <div v-else>Not A/B/C</div>

    <br>
    <br>

    <form id="formDemo">
      <h3>formDemo</h3>
      <input type="checkbox" id="checkbox" v-model="checked">
      <label for="checkbox">{{ checked }}</label>

      <br>
      <br>

      <div id="example-3">
        <input type="checkbox" id="jack" value="Jack" v-model="checkedNames">
        <label for="jack">Jack</label>
        <input type="checkbox" id="john" value="John" v-model="checkedNames">
        <label for="john">John</label>
        <input type="checkbox" id="mike" value="Mike" v-model="checkedNames">
        <label for="mike">Mike</label>
        <br>
        <span>Checked names: {{ checkedNames }}</span>
      </div>

      <br>
      <br>

      <div id="example-4">
        <input type="radio" id="one" value="One" v-model="picked">
        <label for="one">One</label>
        <br>
        <input type="radio" id="two" value="Two" v-model="picked">
        <label for="two">Two</label>
        <br>
        <span>Picked: {{ picked }}</span>
      </div>

      <br>
      <br>

      <div id="example-5">
        <input type="checkbox" id="one1" value="One" v-model="picked1">
        <label for="one1">One</label>
        <br>
        <input type="checkbox" id="two1" value="Two" v-model="picked1">
        <label for="two1">Two</label>
        <br>
        <span>Picked1: {{ picked1 }}</span>
      </div>

      <br>
      <br>

      <div id="example-6">
        <select v-model="select1">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>
        <p>Choosed: {{ select1 }}</p>
      </div>

      <br>
      <br>

      <div id="example-7">
        <select v-model="select2">
          <option v-for="(option, text, value) in options" :value="option.value" :key="option.id">{{ option.text }}</option>
        </select>
        <p>Choosed: {{ select2 }}</p>
      </div>

    </form>
  </div>
</template>

<script src="https://cdn.jsdelivr.net/npm/axios@0.12.0/dist/axios.min.js"></script>
<script>
import _ from "lodash";

export default {
  name: "home",
  props: {
    home1: String
  },
  data() {
    return {
      select2: "A",
      options: [
        {
          id: 1,
          value: "A",
          text: "你好"
        },
        {
          id: 2,
          value: "B",
          text: "你好2"
        },
        {
          id: 3,
          value: "C",
          text: "你好3"
        }
      ],
      select1: "",
      picked1: [],
      picked: "",
      checkedNames: [],
      checked: false,
      name: "null",
      title: "这个是title",
      nicai: true,
      parentMessage: "[待办事项]",
      todos: [
        {
          id: "1",
          text: "你好"
        },
        {
          id: "2",
          text: "你猜"
        },
        {
          id: "3",
          text: "who？"
        }
      ],
      nextId: 4,
      ask: "",
      answer: "I cannot give you an answer until you ask a question!",
      type: "A",
      todoThing: ""
    };
  },
  watch: {
    ask: function() {
      this.answer = "Waiting for you to stop typing...";
      this.debouncedGetAnswer();
    }
  },
  created: function() {
    // `_.debounce` 是一个通过 Lodash 限制操作频率的函数。
    // 在这个例子中，我们希望限制访问 yesno.wtf/api 的频率
    // AJAX 请求直到用户输入完毕才会发出。想要了解更多关于
    // `_.debounce` 函数 (及其近亲 `_.throttle`) 的知识，
    // 请参考：https://lodash.com/docs#debounce
    this.debouncedGetAnswer = _.debounce(this.getAnswer, 500);
  },
  methods: {
    getAnswer: function() {
      if (this.ask.indexOf("?") === -1) {
        this.answer = "Questions usually contain a question mark. ;-)";
        return;
      }
      this.answer = "Thinking...";
      var vm = this;
      axios
        .get("https://yesno.wtf/api")
        .then(function(response) {
          vm.answer = _.capitalize(response.data.answer);
        })
        .catch(function(error) {
          vm.answer = "Error! Could not reach the API. " + error;
        });
    },
    addTodo: function() {
      this.todos.push({
        id: this.nextId++,
        text: this.todoThing
      });

      this.todoThing = "";
    }
  }
};
</script>

<style scoped>
</style>