<template>
  <div>
    <div class="header">
      <router-link to="/shop"
        ><img src="./images/popMart.png" class="titleImg" alt="titleImg"
      /></router-link>
      <div class="title">
        <span>泡泡玛特线上自营店</span>
        <!-- <el-button class="button" size="small" icon-thumb type="danger" plain
          ><span>关注我</span></el-button
        > -->
        <div class="like"><a href="#" class="love">关注我</a></div>
      </div>
      <div class="box1"></div>
      <div class="loginRegister">
        <a href=""
          ><router-link to="/login">{{ tag ? tag : "登录" }}</router-link></a
        >
        <a href=""><router-link to="/regist">注册</router-link></a>
      </div>
    </div>
    <div class="nav">
      <ul class="navLeft">
        <li>
          <a class="one" href="#"
            ><button><span>首页</span></button></a
          >
        </li>
        <li>
          <a class="one" href="#"
            ><button><span>全部分类</span></button></a
          >
        </li>
        <li>
          <a class="one" href="#"
            ><button><span>Molly</span></button></a
          >
        </li>
        <li>
          <a class="one" href="#"
            ><button><span>PUCKY</span></button></a
          >
        </li>
        <li>
          <a class="one" href="#"
            ><button><span>LABUBU</span></button></a
          >
        </li>
        <li>
          <a class="one" href="#"
            ><button><span>DIMOO</span></button></a
          >
        </li>
        <li>
          <a class="one" href="#"
            ><button><span>SATYR RORY</span></button></a
          >
        </li>
        <li>
          <a class="one" href="#"
            ><button><span>MORE</span></button></a
          >
        </li>
      </ul>
      <div class="navRight">
        <input type="text" class="search" placeholder="DIM太空" />
        <button></button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Header",
  data() {
    return {
      tag: "",
    };
  },
  methods: {},
  mounted() {
    this.$bus.$on("tag", (Tag) => {
      this.tag = Tag;
    });
  },
};
</script>
<style>
.header {
  display: flex;
  height: 60px;
  align-items: center;
}
.header .titleImg {
  width: 180px;
  margin-left: 190px;
  margin-right: 5px;
}
.header .title {
  display: flex;
  flex-direction: column;
}
.header .title span {
  font-size: 18px;
  color: #333;
}
/* .header .title .button {
  height: 23px;
  width: 70px;
}
.header .title .button span {
  font-size: 12px;
} */

.header .title .like {
  border-radius: 15px;
  background-color: red;
}

.header .title .love {
  color: #fff;
  background-position: 0 -66px;
  display: inline-block;
  padding-left: 24px;
  width: 47px;
  height: 23px;
  line-height: 23px;
  color: #000;
  font-size: 12px;
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEcAAABZCAMAAABbssnGAAAA/1BMVEUAAAD///////+xGRqxGRqxGRr////uub2xGRr////uub2xGRr///+xGRr////////uub3uub3uub3////uub2xGRruub3uub3////uub2xGRr////uub2xGRruub3////uub2xGRqxGRqxGRqxGRqxGRr////uub2xGRr////uub3kOTzlQEOzHx/++/vsoqbsmJzoaWz9+Pj78vL03t7y2Njv0dHtyMjqwcHtq6/jrKzNbG3GV1jEUFHmTE+/QEG8Oju1Jie6MjP57+/25ub25eXou7zgpKTblJTpfYHRdHXnX2LIXV3mWFvmU1bBSEnBR0i3KSrWhofVg4O6NDWxIW+2AAAAKHRSTlMAl9DQlkxEREQGBgbw8JtMTNCb1tbWmJa3t7fx8fHv1dXVm5yZmktLhfBmHAAAAn5JREFUWMPtmMdy2zAQhlfFIq3eZVuWi+IkAIu61SVLcu92kvd/logAMcT4tgBPHn2Xf3n5ZmcxWMwQfBKRaJriSNN0NJIAmdwpVeU0B4L9CNUhu+9rDqgeB1yUpbpkPc0vXl+OL0Xg8WbER/zkEndG6WwbT3hPCSDBigfi8fLC4gEvSgA/qxWRWOE9EYiydGWPi/dEIc1yLXvWeE8aeM5kz4zi8fu5/Qw0n7cq/UR5MQo8I6oyH3G3xmt/OGOqQAQSohyu2JkPqQoJgJKob94Jeb9R0pS83UMFrcWiRZXIhXTfQ9s/XJTV3YeCXEnZUuL7WXov6khDnda992LHju+LUbPwnBRqBsjkzyxVzvIgSFYtHapJX3No6XHIRUVLl6Kn+c3rdqctAo83Iz7irm073W04tr0NLGUAgxWPtsfzM4tHvMiAGsulLbHEe2pQYOnIHgfvKcBJKJ5j4NmVPV0Lj9/PxJHamaj0U+BFJ/B0LJX5iLvVcfxumAZ/XoYo20t25m1LBQOgLOrJm22/TZQ0ZW/3BJ+vr5Ya+ZDue6j7B5JFvW6SIMiXlS3lPMgYKjv6uFA1YMeO74sZj2UIjgzJxOImyOydE1XO90CQuiA6XKR8zRHR44iLfhJdmmw2vL6aX4nA482Ij/i+RXtTQqY92rrHeyoAJiv+UI+7OxZ/8SIT4iwHVGKA98QhxrIne3p4TwwyLPuyp4/3ZIDnVPZMCR6/n811oLn+p9JPjBeLVvDXhajMJ+5X874/nDlRIA6mKD8G7Mw/iAomQEXUmyGlw42SpsLul8AdjVyiBNtBTaLLj1D3D6Saet2kgv1cUbZU9r6+Fw2koUEawXvxHzpC3Z34XwtFAAAAAElFTkSuQmCC)
    0 0 no-repeat;
}

.box1 {
  margin-top: 55px;
  width: 130px;
  height: 130px;
  background: url("./images/bike.png") center 0 no-repeat;
  animation: bike 8s steps(32) infinite;
}
@keyframes bike {
  from {
    background-position: center 0;
    margin-left: 350px;
  }
  to {
    background-position: center -4160px;
    margin-left: 0px;
  }
}

.header .loginRegister {
  border: 1px solid;
  border-radius: 12px;
  flex-direction: column;
  font-size: 16px;
  padding: 10px;
}
.header .loginRegister a {
  padding: 5px;
  color: aqua;
  animation: move 2s infinite;
}
@keyframes move {
  0% {
    color: white;
    font-size: 8px;
  }
  50% {
    transform: rotateX(30deg);
    color: turquoise;
  }
  100% {
    color: #e60021;
    font-size: 16px;
  }
}

.nav {
  width: 100%;
  height: 40px;
  line-height: 40px;
  background-color: #e60021;
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
}
.nav .navLeft {
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-left: 165px;
}
.nav .navLeft li {
  margin: 0 20px;
  font-size: 12px;
}
.nav .navLeft .one:hover {
  background: #333;
  border-radius: 12px;
  border: 1px;
}
.nav .navLeft li button {
  background: transparent;
  outline: none;
  border-radius: 12px;
  border: 0px;
}
.nav .navLeft li button span {
  color: #f9f9f9;
}
.navRight {
  margin-right: 205px;
}
.navRight .search {
  width: 130px;
  height: 22px;
  background-color: #ffffff;
  color: hsl(0, 0%, 79%);
  vertical-align: middle;
  outline: none;
  border: solid 1px #e1e1e1;
  border-top-left-radius: 11px;
  border-bottom-left-radius: 11px;
}
.navRight button {
  margin-left: -5px;
  border: 0;
  height: 24px;
  width: 46px;
  cursor: pointer;
  vertical-align: middle;
  border-top-right-radius: 11px;
  border-bottom-right-radius: 11px;
  background: #333
    url(//img13.360buyimg.com/cms/jfs/t3121/284/4170076300/1201/43e1ad98/583543d4Nc7e0c1a4.png)
    no-repeat center;
}
</style>
