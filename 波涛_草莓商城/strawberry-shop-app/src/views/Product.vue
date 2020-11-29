<template>
  <div class="product">
    <van-icon class="product-return" name="arrow-left" @click="returnHome" />
    <van-image width="100%" :src="product.coverImg |dalImg" />
    <div class="product-show">
      <p>{{product.descriptions}}</p>
      <span>￥{{product.price}}</span>
    </div>
    <van-goods-action>
      <van-goods-action-icon icon="chat-o" text="客服" />
      <van-goods-action-icon icon="shop-o" text="店铺" />
      <van-goods-action-button
        @click="addCarts(product._id)"
        color="#4a488e"
        type="warning"
        text="加入购物车"
      />
      <van-goods-action-button color="#7232dd" type="danger" text="立即购买" />
    </van-goods-action>
  </div>
</template>

<script>
import { Toast } from "vant";
import { getDataById, addCar } from "../services/product";
export default {
  data() {
    return {
      product: {},
    };
  },
  created() {
    getDataById(this.$route.query.id).then((res) => {
      this.product = res;
    });
  },
  methods: {
    returnHome() {
      this.$router.push({
        name: "Home",
      });
    },
    addCarts(id) {
      addCar({ product: id, quantity: 1 }).then((res) => {
        console.log(res);
        if (res.code == "success") {
          Toast("已加入购物车，请稍后去购物车查看");
        }
      });
    },
  },
};
</script>

<style>
.product {
  background: #f8f8f8;
}
.product .product-return {
  position: fixed;
  left: 5px;
  top: 15px;
  z-index: 1;
  font-size: 24px;
}

.product .product-show {
  width: 100%;
  background: #ffffff;
}
.product .product-show span {
  font-size: 22px;
}
</style>