<template>
  <div id="CardCarousel">
    <el-carousel :interval="4000" type="card" height="320px" indicator-position="none">
      <el-carousel-item v-for="(item, url, id, name) in picLists" :key="item.id">
        <img :src="item.url" height="100%" :alt="item.name">
        <!-- <h3>{{ item }}</h3> -->
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  name: "CardCarousel",
  data() {
    return {
      picLists: [
        {
          id: 1,
          url: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1550666510382&di=bd98a28c01ee998f98f8c1cefc6fb861&imgtype=0&src=http%3A%2F%2Fimg1.ph.126.net%2FDBeLXn1tHXbhSMN0gDQNdg%3D%3D%2F6631297563631732624.jpg",
          name: "图1"
        },
        {
          id: 2,
          url: "../assets/images/2.jpg",
          name: "图2"
        },
        {
          id: 3,
          url: "../assets/images/3.jpg",
          name: "图3"
        }
      ]
    };
  }
};
</script>

<style scoped>
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>