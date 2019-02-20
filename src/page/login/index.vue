<template>
  <div id="Login">
    <div class="formCenter">
      <!-- <router-link to="/home">跳到首页</router-link> -->

      <h3 style="text-align: center;">登录</h3>
      <br>

      <el-form
        :rules="rules"
        ref="form"
        :model="form"
        label-width="80px"
        style="width: 380px; margin: 0 auto;"
      >
        <el-form-item label="用户名" prop="name">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="pwd">
          <el-input v-model="form.pwd"></el-input>
        </el-form-item>
        <el-form-item label>
          <el-checkbox-group v-model="form.type">
            <el-checkbox label="记住密码" name="type"></el-checkbox>
            <el-checkbox label="不知道什么" name="type"></el-checkbox>
          </el-checkbox-group>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit('form')">登录</el-button>
          <el-button @click="resetForm('form')">取消</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      counter1: 0,
      form: {
        name: "",
        pwd: "",
        type: []
      },
      rules: {
        name: [
          { required: true, message: "请输入用户名", trigger: "blur" }
          // { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        pwd: [
          { required: true, message: "请输入密码", trigger: "blur" }
          // { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ]
        // type: [
        //   { type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change' }
        // ]
      }
    };
  },
  methods: {
    onSubmit(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          // alert("submit!");
          this.$router.push('/index')
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
  }
};
</script>

<style lang="less" scoped>
#Login {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  // background-color: #efedee;
  background: url(../../assets/images/1.jpg) no-repeat center;
  background-size: cover;

  .formCenter {
    width: 520px;
    padding: 50px 0;
    border-radius: 15px;
    background-color: rgba(255, 255, 255, 0.6);
    box-shadow: 0 0 10px rgba(255, 255, 255, 0.6);
  }
}
</style>