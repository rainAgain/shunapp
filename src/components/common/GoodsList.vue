<style src="../../style/goodsList.scss"></style>

<template lang="html">
    <div class="goods-list">
      <ul>
        <li v-for="item in dataList">
          <div class="goods-item">
            <div>
              <img :src="item.src" :alt="item.title">
            </div>
            <div class="pd-t-15 ">
              <div class="clamp" v-text="item.title"></div>
              <div class="text-left">
                <span class="red">¥{{item.afterPrice}}</span>
                <span class="fz-12">¥{{item.beforePrice}}</span>
              </div>
              <div>
                <span class="fz-12 float-right">售{{item.num}}笔</span>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
</template>

<script>
    export default{
      //props:["dataList"],//接收数据
      data() {
        return {
          bgimg: '',
          dataList: [
            {
              id: 0,
              src: '../src/imgs/timg.jpg',
              title: "标题名字太多就转到第二行",
              afterPrice: "200",
              beforePrice: "250",
              num: 23
            }, {
              id: 1,
              src: '../src/imgs/timg.jpg',
              title: "心动不如行动",
              afterPrice: "220",
              beforePrice: "250",
              num: 13
            }, {
              id: 2,
              src: '../src/imgs/timg.jpg',
              title: "买买买买买买买买买买买买买买买",
              afterPrice: "210",
              beforePrice: "250",
              num: 250
            }
          ]
        };
      },
      methods: {
        initData() {

        }
      }
    };
</script>
