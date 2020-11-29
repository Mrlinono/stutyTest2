<template>
  <div class="container">
    <div class="main">
      <h2>登录</h2>
      <label for>
        账号：
        <input type="text" v-model="value1" />
      </label>
      <label for>
        密码：
        <input type="text" v-model="value2" />
      </label>
      <van-button type="default" class="button-one" @click="login">登录</van-button>
      <van-button class="button-two" :to="{name:'Reg'}">注册</van-button>
    </div>
  </div>
</template>

<script>
import { Toast } from "vant";
import { userLogin } from "../services/user";
export default {
  data() {
    return {
      value1: "",
      value2: "",
    };
  },

  methods: {
    login() {
      userLogin({
        userName: this.value1,
        password: this.value2,
      }).then((res) => {
        if (res.code == "success") {
          Toast("登陆成功");
          localStorage.setItem("token", res.token);
          this.$router.push({
            name: "Me",
          });
        }
      });
    },
  },
};
</script>

<style scoped>
.container {
  width: 100%;
  height: 100%;
}
.title {
  width: calc(100%-20px);
  height: 44px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
  margin-bottom: 20px;
}
.main {
  width: 100%;
  margin: 0 auto;
  margin-top: 67px;
  text-align: center;
}
.main > h2 {
  margin-bottom: 80px;
}
.main > label {
  width: 311px;
  height: 40px;
  line-height: 40px;
  font-size: 16px;
  display: block;
  margin: 0 auto;
  margin-top: 10px;
  border-bottom: 2px solid #a8d8b9;
}
.main > label > input {
  height: 30px;
  line-height: 30px;
  border: none;
}
.van-button {
  width: 364px;
  font-size: 16px;
  color: white;
  background: #4a488e;
}
.button-one {
  margin: 60px 0 30px;
}
</style>