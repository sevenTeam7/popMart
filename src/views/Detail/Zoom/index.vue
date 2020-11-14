<template>
  <div class="spec-preview">
    <img src="../images/01.png" />
    <div class="event" ref="event" @mousemove="handleMove"></div>
    <div class="big">
      <img src="../images/01.png" ref="bigImg" />
    </div>
    <div class="mask" ref="mask"></div>
  </div>
</template>
<script>
export default {
  name: "Zoom",
  //获取mask的宽度-->只需获取一次
  mounted() {
    this.maskWidth = this.$refs.event.clientWidth / 2;
  },
  methods: {
    //鼠标在小图中移动事件
    handleMove(e) {
      //获取鼠标坐标
      const { offsetX, offsetY } = e;
      //获取mask的宽高
      const maskWidth = this.maskWidth;
      //获取mask对象
      const maskDiv = this.$refs.mask;
      let left = 0;
      let top = 0;
      left = offsetX - maskWidth / 2;
      top = offsetY - maskWidth / 2;
      //限定范围
      left = left < 0 ? 0 : left > maskWidth ? maskWidth : left;
      top = top < 0 ? 0 : top > maskWidth ? maskWidth : top;
      maskDiv.style.left = left + "px";
      maskDiv.style.top = top + "px";
      //获取大图对象
      const bigImg = this.$refs.bigImg;
      bigImg.style.left = -left * 2 + "px";
      bigImg.style.top = -top * 2 + "px";
    },
  },
};
</script>
<style lang="less" rel="stylesheet/less" scoped>
.spec-preview {
  position: relative;

  img {
    width: 100%;
    height: 100%;
  }

  .event {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 999;
  }

  .mask {
    width: 50%;
    height: 50%;
    background-color: rgba(255, 255, 255, 0.5);
    position: absolute;
    left: 0;
    top: 0;
    display: none;
  }

  .big {
    width: 100%;
    height: 100%;
    position: absolute;
    top: -1px;
    left: 100%;
    border: 1px solid #ccc;
    overflow: hidden;
    z-index: 998;
    display: none;
    background-color: white;

    img {
      width: 200%;
      max-width: 200%;
      height: 200%;
      position: absolute;
      left: 0;
      top: 0;
    }
  }

  .event:hover ~ .mask,
  .event:hover ~ .big {
    display: block;
  }
}
</style>
