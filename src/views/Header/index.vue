<template>
  <div>
    <div class="header">
      <img src="./images/popMart.png" class="titleImg" alt="titleImg" />
      <div class="title">
        <span>泡泡玛特线上自营店</span>
        <el-button class="button" size="small" icon-thumb type="danger" plain
          ><span>关注我</span></el-button
        >
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
    return {};
  },
  methods: {},
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
.header .title .button {
  height: 23px;
  width: 70px;
}
.header .title .button span {
  font-size: 12px;
}

.nav {
  width: 100%;
  height: 40px;
  line-height: 40px;
  background-color: red;
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
