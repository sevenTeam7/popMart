<template>
  <div class="swiper-container" ref="sw4">
    <div class="swiper-wrapper">
      <div
        class="swiper-slide"
        v-for="(skuImg, index) in skuImageList"
        :key="skuImg.id"
      >
        <img
          :src="skuImg.imgUrl"
          :class="{ active: currentIndex === index }"
          @click="changeCurrentIndex(index)"
        />
      </div>
    </div>

    <div class="swiper-button-next"></div>
    <div class="swiper-button-prev"></div>
  </div>
</template>
<script>
// import { Swiper, SwiperSlide, directive } from "vue-awesome-swiper";
import Swiper from "swiper";
export default {
  name: "ImageList",
  data() {
    return {
      skuImageList: [
        {
          id: 0,
          imgUrl: "./images/01.png",
        },
        {
          id: 1,
          imgUrl: "./images/02.png",
        },
        {
          id: 2,
          imgUrl: "./images/03.png",
        },
        {
          id: 3,
          imgUrl: "./images/04.png",
        },
        {
          id: 4,
          imgUrl: "./images/01.png",
        },
        {
          id: 5,
          imgUrl: "./images/02.png",
        },
        {
          id: 6,
          imgUrl: "./images/03.png",
        },
        {
          id: 7,
          imgUrl: "./images/02.png",
        },
        {
          id: 8,
          imgUrl: "./images/03.png",
        },
        {
          id: 9,
          imgUrl: "./images/02.png",
        },
        {
          id: 10,
          imgUrl: "./images/03.png",
        },
        {
          id: 11,
          imgUrl: "./images/02.png",
        },
        {
          id: 12,
          imgUrl: "./images/03.png",
        },
      ],
      currentIndex: 0, // 存储某个图片的索引的
    };
  },
  methods: {
    changeCurrentIndex(index) {
      this.currentIndex = index;
      //分发事件，获得点击小图的索引
      this.$bus.$emit("getIndex", index);
    },
  },
  watch: {
    skuImageList: {
      handler: function() {
        if (this.skuImageList.length === 0) {
          return;
        }
        this.$nextTick(() => {
          var mySwiper = new Swiper(this.$refs.sw4, {
            slidesPerView: 5, //设置slider容器能够同时显示的slides数量
            slidesPerGroup: 2, //每次移动两张
            // 如果需要分页器
            pagination: {
              el: ".swiper-pagination",
            },
            // 如果需要前进后退按钮
            navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            },
          });
        });
      },
      immediate: true,
    },
  },
};
</script>
<style lang="less" rel="stylesheet/less" scoped>
.swiper-container {
  height: 56px;
  width: 412px;
  box-sizing: border-box;
  padding: 0 12px;

  .swiper-slide {
    width: 56px;
    height: 56px;

    img {
      width: 100%;
      height: 100%;
      border: 1px solid #ccc;
      padding: 2px;
      width: 50px;
      height: 50px;
      display: block;

      &.active {
        border: 2px solid #f60;
        padding: 1px;
      }

      &:hover {
        border: 2px solid #f60;
        padding: 1px;
      }
    }
  }

  .swiper-button-next {
    left: auto;
    right: 0;
  }

  .swiper-button-prev {
    left: 0;
    right: auto;
  }

  .swiper-button-next,
  .swiper-button-prev {
    box-sizing: border-box;
    width: 12px;
    height: 56px;
    background: rgb(235, 235, 235);
    border: 1px solid rgb(204, 204, 204);
    top: 0;
    margin-top: 0;
    &::after {
      font-size: 12px;
    }
  }
}
</style>
