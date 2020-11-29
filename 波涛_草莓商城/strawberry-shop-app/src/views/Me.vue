<template>
  <div class="me">
    <div class="headerBg"></div>

    <header>
      <img src="https://s1.ax1x.com/2020/08/26/d2Lcyn.jpg" />
      <span class="userName">
        SurgeBillows
        <van-icon name="edit" />
      </span>
      <span class="phoneNumber">182****7835</span>
      <van-icon class="massage" name="envelop-o" />
    </header>

    <div class="orderForm">
      <div class="orderForm-top">
        <span>我的订单</span>
        <a href="#">查看所有订单></a>
      </div>
      <ul class="orderForm-buttom">
        <li>
          <van-icon name="credit-pay" />
          <span>待付款</span>
        </li>
        <li>
          <van-icon name="send-gift-o" />
          <span>待发货</span>
        </li>
        <li>
          <van-icon name="logistics" />
          <span>待收货</span>
        </li>
        <li>
          <van-icon name="description" />
          <span>待评价</span>
        </li>
        <li>
          <van-icon name="service-o" />
          <span>退款/售后</span>
        </li>
      </ul>
    </div>

    <ul class="meList">
      <li>
        <span>地址管理</span>
        <van-icon name="arrow" />
      </li>
      <li>
        <span>我的收藏</span>
        <van-icon name="arrow" />
      </li>
      <li>
        <span>帮助中心</span>
        <van-icon name="arrow" />
      </li>
      <li>
        <span>意见反馈</span>
        <van-icon name="arrow" />
      </li>
      <li>
        <span>关于我们</span>
        <van-icon name="arrow" />
      </li>
    </ul>

    <footer>
      <a @click="delLogin()">退出登录</a>
    </footer>
  </div>
</template>

<script>
import { removeToken } from "../utils/auth";
export default {
  methods: {
    delLogin() {
      removeToken();
      window.location.href = "/#/login";
    },
  },
};
</script>

<style>
.me {
  background: #f8f8f8;
}
.me .headerBg {
  width: 100%;
  height: 82px;
  background: #4a488e;
}
.me header {
  width: 90%;
  height: 122px;
  background: #ffffff;
  border-radius: 10px;
  margin: -61px auto 0;
  position: relative;
}
.me header img {
  display: block;
  width: 80px;
  height: 80px;
  border-radius: 5px;
  position: absolute;
  top: 21px;
  left: 15px;
}
.me header .userName {
  display: block;
  position: absolute;
  top: 30px;
  left: 120px;
}
.me header .phoneNumber {
  display: block;
  position: absolute;
  top: 80px;
  left: 120px;
}
.me header .massage {
  font-size: 22px;
  position: absolute;
  top: 10px;
  right: 10px;
}

.me .orderForm {
  width: 90%;
  height: 122px;
  background: #ffffff;
  border-radius: 10px;
  margin: 10px auto 30px;
}
.me .orderForm .orderForm-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
  height: 40px;
  border-bottom: 1px solid #cecece;
  font-size: 14px;
}
.me .orderForm .orderForm-top a {
  color: #000000;
  font-size: 12px;
}
.me .orderForm .orderForm-buttom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
  height: 82px;
}
.me .orderForm .orderForm-buttom li {
  width: 55px;
  height: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
}
.me .orderForm .orderForm-buttom li .van-icon {
  font-size: 24px;
}
.me .orderForm .orderForm-buttom li span {
  font-size: 12px;
}
.me .meList {
  width: 90%;
  margin: 30px auto;
}
.me .meList li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 40px;
  background: #ffffff;
  border-radius: 10px;
  padding: 0 15px;
  margin-bottom: 5px;
}
.me .meList li span {
  font-size: 12px;
}
.me footer {
  padding-bottom: 27px;
}
.me footer a {
  display: block;
  width: 70%;
  height: 35px;
  background: #4a488e;
  margin: 0 auto;
  text-align: center;
  line-height: 35px;
  border-radius: 15px;
  color: #ffffff;
  font-size: 14px;
}
</style>