<template>
  <div class="carts">
    <div class="carts-title">购物车</div>
    <div class="carts-list">
      <van-checkbox-group v-model="result" ref="checkboxGroup">
        <van-swipe-cell v-for="item in carts" :key="item.product._id">
          <van-card
            :price="item.product.price"
            :title="item.product.name"
            :thumb="item.product.coverImg|dalImg"
          >
            <template #tags>
              <van-checkbox :name="item.product._id" @click="checkOne"></van-checkbox>
            </template>
            <template #footer>
              <van-stepper
                v-model.number="item.quantity"
                :name="item.product._id"
                @change="onChange"
                theme="round"
                button-size="22"
              />
            </template>
          </van-card>
          <template #right>
            <van-button
              square
              text="删除"
              type="danger"
              class="delete-button"
              @click="delCarts(item._id)"
            />
          </template>
        </van-swipe-cell>
      </van-checkbox-group>
    </div>
    <van-submit-bar :price="price" button-text="提交订单" @submit="onSubmit">
      <van-checkbox v-model="checked" @click="checkAll">全选</van-checkbox>
    </van-submit-bar>
  </div>
</template>

<script>
import { Toast } from "vant";
import { addCar, carList, delCar } from "../services/product";
export default {
  data() {
    return {
      carts: [],
      value: "",
      changeValue: [],
      result: [], // 所有选中的id
      checked: false,
    };
  },
  created() {
    carList().then((res) => {
      this.carts = res;
    });
  },
  computed: {
    price() {
      return (
        this.carts
          .filter((item) => this.result.indexOf(item.product._id) > -1) // 选中所有打勾的信息
          .reduce((pre, cur) => {
            return pre + cur.quantity * cur.product.price;
          }, 0) * 100
      );
    },
  },
  methods: {
    async onChange(d, v) {
      await carList().then((res) => {
        this.changeValue = res;
      });

      this.changeValue.forEach((item) => {
        if (item.product._id == v.name) {
          if (d > item.quantity || d < item.quantity) {
            addCar({
              product: v.name,
              quantity: d - item.quantity,
            }).then((res) => {
              console.log(res);
            });
          }
        }
      });
    },
    delCarts(id) {
      delCar(id).then((res) => {
        console.log(res);
        Toast("删除成功");
        window.location.reload();
      });
    },
    checkAll() {
      if (this.checked == true) {
        this.$refs.checkboxGroup.toggleAll(true);
      } else {
        this.$refs.checkboxGroup.toggleAll(false);
      }
    },
    checkOne() {
      if (this.result.length < this.carts.length) {
        this.checked = false;
      } else {
        this.checked = true;
      }
    },
    onSubmit() {},
  },
};
</script>

<style>
.carts {
  background: #f8f8f8;
  padding-bottom: 50px;
}
.carts .carts-title {
  width: 100%;
  height: 59px;
  text-align: center;
  line-height: 59px;
  font-weight: 600;
  background: #ffffff;
}

.goods-card {
  margin: 0;
  background-color: white;
}

.delete-button {
  height: 100%;
}
.carts .carts-list .van-swipe-cell .van-checkbox {
  margin-left: 226px;
}
.carts .van-submit-bar {
  bottom: 50px;
}
.carts .van-submit-bar__button--danger {
  background: #4a488e;
}
.carts .van-checkbox__icon--checked .van-icon {
  background-color: #4a488e;
  border-color: #4a488e;
}
.carts .van-stepper--round .van-stepper__minus {
  color: #4a488e;
  border-color: #4a488e;
}
.carts .van-stepper--round .van-stepper__plus {
  background-color: #4a488e;
}
</style>