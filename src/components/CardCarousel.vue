<template>
  <div id="CardCarousel">
    <el-carousel :interval="4000" type="card" height="200px" indicator-position="none">
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
          url: "../assets/images/1.jpg",
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