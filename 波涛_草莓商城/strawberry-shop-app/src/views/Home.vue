<template>
  <div class="home">
    <van-search shape="round" placeholder="请输入搜索关键词" />

    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="item in list" :key="item._Id">
        <img :src="item.coverImg | dalImg" />
      </van-swipe-item>
    </van-swipe>

    <van-grid square>
      <van-grid-item icon="label" text="特卖专区" />
      <van-grid-item icon="fire" text="爆款专区" />
      <van-grid-item icon="card" text="低价专区" />
      <van-grid-item icon="bag" text="抢购专区" />
    </van-grid>

    <van-notice-bar
      left-icon="volume"
      :scrollable="false"
      background="#ffffff"
      color="#000000"
    >
      <van-swipe
        vertical
        class="notice-swipe"
        :autoplay="3000"
        :show-indicators="false"
      >
        <van-swipe-item class="van-ellipsis"
          >xxx以超低价格买到了物生物
          彩贝真空保温杯380ml,真是太划算了</van-swipe-item
        >
        <van-swipe-item class="van-ellipsis"
          >xxx以超低价格买到了iphone 11</van-swipe-item
        >
        <van-swipe-item class="van-ellipsis"
          >xxx以超低价格买到了airpods pro</van-swipe-item
        >
      </van-swipe>
    </van-notice-bar>

    <div class="title">
      <div class="title-left">
        <i></i>
        <span>秒杀专场</span>
      </div>

      <a href="#">查看更多></a>
    </div>

    <van-tabs>
      <van-tab :title="'8:00 ' + buy">
        <van-card
          price="258/瓶"
          origin-price="499/瓶"
          title="CHANEL香水"
          thumb="https://s1.ax1x.com/2020/08/25/d6Jyr9.jpg"
        >
          <template #tags>
            <van-progress color="#ee0a24" :percentage="40" />
          </template>
          <template #footer>
            <van-tag plain type="danger">543人购买</van-tag>
            <van-button size="small" color="#ee0a24">马上抢</van-button>
          </template>
        </van-card>
      </van-tab>
      <van-tab :title="'10:00 ' + buy">
        <van-card
          price="198/根"
          origin-price="249/根"
          title="Dior口红"
          thumb="https://s1.ax1x.com/2020/08/26/dRHZXq.jpg"
        >
          <template #tags>
            <van-progress color="#ee0a24" :percentage="80" />
          </template>
          <template #footer>
            <van-tag plain type="danger">1314人购买</van-tag>
            <van-button size="small" color="#ee0a24">马上抢</van-button>
          </template>
        </van-card>
      </van-tab>
      <van-tab :title="'12:00 ' + start"></van-tab>
      <van-tab :title="'14:00 ' + start"></van-tab>
      <van-tab :title="'16:00 ' + start"></van-tab>
      <van-tab :title="'18:00 ' + start"></van-tab>
      <van-tab :title="'20:00 ' + start"></van-tab>
      <van-tab :title="'22:00 ' + start"></van-tab>
      <van-tab :title="'24:00 ' + start"></van-tab>
    </van-tabs>

    <div class="title-hot">
      <div class="title-left">
        <i></i>
        <span>推荐商品</span>
        <i></i>
      </div>

      <a href="#">查看更多></a>
    </div>

    <div class="show">
      <van-card
        v-for="item in list"
        :key="item._id"
        :price="item.price"
        :desc="item.descriptions"
        :title="item.name"
        :thumb="item.coverImg | dalImg"
      >
        <template #footer>
          <van-tag plain type="danger">8348人购买</van-tag>
          <van-button
            size="small"
            color="#4a488e"
            :to="{ name: 'Product', query: { id: item._id } }"
            >购买</van-button
          >
        </template>
      </van-card>
    </div>
  </div>
</template>

<script>
import { getData } from "../services/product";
export default {
  data() {
    return {
      list: [],
      buy: "抢购中",
      start: "即将开始",
    };
  },
  async created() {
    this.loadData(1);
  },
  methods: {
    async loadData(page) {
      const res = await getData(page);
      this.list = res.products;
    },
  },
};
</script>

<style>
.my-swipe .van-swipe-item img {
  width: 100%;
}
.van-grid {
  border: none;
}
.van-grid .van-icon {
  color: #4a488e;
}
.van-grid .van-hairline::after {
  border: none;
}
.van-notice-bar .van-icon {
  color: red;
}
.van-notice-bar .notice-swipe {
  height: 40px;
  line-height: 40px;
}

.home .title {
  width: 100%;
  height: 35px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
}
.home .title .title-left {
  display: flex;
  align-items: center;
  margin-left: 16px;
}
.home .title .title-left i {
  display: block;
  width: 5px;
  height: 20px;
  background: red;
}
.home .title .title-left span {
  margin-left: 5px;
}
.home .title a {
  display: block;
  margin-right: 5px;
  color: #000000;
  font-size: 12px;
}
.van-progress {
  margin-top: 25px;
}
.van-tag--danger.van-tag--plain {
  margin-right: 118px;
}
.home .title-hot {
  width: 100%;
  height: 35px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
}
.home .title-hot .title-left {
  display: flex;
  align-items: center;
  margin-left: 94px;
}
.home .title-hot .title-left i {
  display: block;
  width: 50px;
  height: 3px;
  background: #4a488e;
}
.home .title-hot .title-left span {
  margin: 0 15px;
  font-size: 16px;
}
.home .title-hot a {
  display: block;
  margin-right: 5px;
  color: #000000;
  font-size: 12px;
}
.home .show .van-tag--danger.van-tag--plain {
  margin-right: 130px;
  color: #4a488e;
}
</style>