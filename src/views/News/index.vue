<template>
  <div>
    <div class="containernews">
      <!-- 导航条 -->
      <NavList />
      <div class="big_picture">
        <!-- NEWS -->
        <div class="tltle_news">
          <img src="./images/news_banner2.jpg" alt="" />
        </div>
      </div>
      <!-- 媒体新闻 -->
      <div class="news_tltie">
        <p class="news_en">NEWS</p>
        <p class="news_media">媒体新闻</p>
      </div>
      <!-- 做公仔 -->
      <div class="news_con">
        <div class="news_box">
          <a
            href="http://life.ynet.com/2020/10/12/2914725t978.html"
            class="news_box_A"
          >
          </a>
          <div
            class="news_item"
            v-for="(paginationVal, index) in pagination"
            :key="paginationVal.id"
          >
            <img v-lazy="paginationVal.pic" alt="" />
            <div class="news_item_con">
              <div class="news_item_tltle">
                {{ paginationVal.title }}
              </div>
              <p class="content_desc">
                {{ paginationVal.description }}
              </p>
              <div class="news_site">
                <div class="site">{{ paginationVal.source }}</div>
                <div class="time">{{ paginationVal.created_at }}</div>
                <div class="more">MORE<i class="el-icon-arrow-right"></i></div>
              </div>
            </div>
          </div>

          <!-- 分页器 -->
          <div class="pagination">
            <el-pagination
              layout="prev, pager, next"
              @current-change="handleCurrent"
              :total="1000"
              :page-size="options.pagesize"
              :current-page="options.page"
            >
            </el-pagination>
          </div>
          <Floot />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
//引入vuex
import { mapState } from "vuex";
import NavList from "@/components/NavList";
export default {
  name: "news",
  components: {
    NavList,
  },
  data() {
    return {
      options: {
        pageSize: 10, //页数条数
        page: 1, //当前页码
      },
    };
  },
  components: {
    NavList,
  },
  methods: {
    //currentPage 改变时会触发 给一下默认的页码page
    handleCurrent(page) {
      //打印你点击的时候的页码
      console.log(page);
      //把默认的options中的页码改变成点击的
      this.options.page = page;
      // console.log(22);
      //重新发请求
      this.$store.dispatch("getPagination", this.options);
      //  console.log(pagination);
    },
  },
  async mounted() {
    // this.$store.dispatch("getPagination", { page: 2, pageSize: 2 });
    await this.$store.dispatch("getPagination", this.options);
  },
  computed: {
    ...mapState({
      pagination: (state) => state.news.pagination,
    }),
  },
};
</script>
<style scoped>
.containernews {
  width: 100%;
  height: 3000px;
}
.big_picture {
  width: 100%;
  height: 357px;
}
.big_picture img {
  width: 100%;
  height: 396px;
}
.containernews .news_tltie {
  margin-top: 94px;
  text-align: center;
}
.containernews .news_tltie .news_en {
  color: #1a1a1a;
  font-size: 30px;
  line-height: 23px;
  font-weight: 900;
  font-family: DINCond-Black;
  margin-bottom: 18px;
}
.containernews .news_tltie .news_media {
  color: #1a1a1a;
  font-size: 23px;
  font-weight: 100;
  font-family: DINCond-Black;
  margin-bottom: 63px;
}
.containernews .news_con {
  width: 100%;
  opacity: 1;
  transform: translateZ(0);
}
.containernews .news_con .news_box {
  height: 214px;
  margin: 0 auto;
  /* background-color: pink; */
}
.containernews .news_con .news_box .news_box_A {
  text-decoration: none;
  color: #1a1a1a;
}
.containernews .news_con .news_box .news_item {
  width: 772px;
  height: 132px;
  margin: 0 auto;
  padding: 41px;
  /* background: red; */
  border-bottom: 1px solid #ccc;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  cursor: pointer;
}
.containernews .news_con .news_box .news_item > img {
  width: 221px;
  height: 129px;
  margin: 0 56px 0 0;
}
.containernews .news_con .news_box .news_item .news_item_con {
  width: 491px;
  height: 129px;
  /* background: yellow; */
}
.containernews .news_con .news_box .news_item .news_item_con .news_item_tltle {
  font-size: 16px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}
.containernews .news_con .news_box .news_item .news_item_con .content_desc {
  color: #c1c1c1;
  margin: 12px 0px 20px 0;
}
.containernews .news_con .news_box .news_item .news_item_con .news_site {
  overflow: hidden;
  display: flex;
  justify-content: space-between;
}
.containernews .pagination {
  text-align: center;
  margin-top: 5px;
}
</style>
