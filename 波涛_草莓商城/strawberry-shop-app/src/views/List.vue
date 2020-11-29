<template>
  <div class="list">
    <van-search v-model="value" shape="round" placeholder="请输入搜索关键词" />

    <div class="border-top"></div>

    <van-tree-select height="543px" :items="items" :main-active-index.sync="active">
      <template #content>
        <div class="list-one" v-if="active === 0">
          <div class="list-title">
            <span>生活日用</span>
            <a href="#">查看更多></a>
          </div>
          <van-card
            v-for="item in list"
            :key="item._id"
            :price="item.price"
            :desc="item.descriptions"
            :title="item.name"
            :thumb="item.coverImg|dalImg"
          >
            <template #footer>
              <van-tag plain type="danger">8348人购买</van-tag>
              <van-button size="small" color="#4a488e">购买</van-button>
            </template>
          </van-card>
        </div>
        <div class="list-two" v-if="active === 1">
          <div class="list-title">
            <span>美妆个护</span>
            <a href="#">查看更多></a>
          </div>
          <van-card
            v-for="item in list"
            :key="item._id"
            :price="item.price"
            :desc="item.descriptions"
            :title="item.name"
            :thumb="item.coverImg|dalImg"
          >
            <template #footer>
              <van-tag plain type="danger">8348人购买</van-tag>
              <van-button size="small" color="#4a488e">购买</van-button>
            </template>
          </van-card>
        </div>
        <div class="list-three" v-if="active === 2">
          <div class="list-title">
            <span>精品服装</span>
            <a href="#">查看更多></a>
          </div>
          <van-card
            v-for="item in list"
            :key="item._id"
            :price="item.price"
            :desc="item.descriptions"
            :title="item.name"
            :thumb="item.coverImg|dalImg"
          >
            <template #footer>
              <van-tag plain type="danger">8348人购买</van-tag>
              <van-button size="small" color="#4a488e">购买</van-button>
            </template>
          </van-card>
        </div>
        <div class="list-six" v-if="active === 5">
          <div class="list-title">
            <span>热销手机</span>
            <a href="#">查看更多></a>
          </div>
          <van-card
            v-for="item in list"
            :key="item._id"
            :price="item.price"
            :desc="item.descriptions"
            :title="item.name"
            :thumb="item.coverImg|dalImg"
          >
            <template #footer>
              <van-tag plain type="danger">8348人购买</van-tag>
              <van-button size="small" color="#4a488e">购买</van-button>
            </template>
          </van-card>
        </div>
      </template>
    </van-tree-select>
  </div>
</template>

<script>
import { getData } from "../services/product";
export default {
  data() {
    return {
      value: "",
      active: 0,
      list: [],
      items: [
        { text: "居家日用" },
        { text: "美妆个护" },
        { text: "服装箱包" },
        { text: "食品饮料" },
        { text: "鞋包配饰" },
        { text: "手机数码" },
        { text: "家用电器" },
        { text: "生鲜水果" },
      ],
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

<style scoped>
.list .border-top {
  width: 100%;
  height: 10px;
  background: #f8f8f8;
}

.list .van-tree-select .van-sidebar .van-sidebar-item--select::before {
  background-color: #4a488e;
}
.list .van-tree-select__content .list-title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
  height: 40px;
  font-size: 14px;
}
.list .van-tree-select__content .list-title a {
  color: #000000;
  font-size: 12px;
}
.list .van-tree-select__content .van-tag--danger.van-tag--plain {
  margin-right: 0;
  color: #4a488e;
}
</style>

