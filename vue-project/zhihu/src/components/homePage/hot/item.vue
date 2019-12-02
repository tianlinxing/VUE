<template>
  <div class="itemBox">
    <div class="iconBox">{{index+1}}</div>
    <div class="contentBox">
      <h3>{{data.title}}</h3>
      <p>{{data.author}}</p>
    </div>
    <div class="imgBox">
      <img :src="data.image_field ? data.image_field.url : data.image_field" />
    </div>
  </div>
</template>
<script>
// @ is an alias to /src
export default {
  name: "item",
  props: ["data", "index"], // data是从父组件拿到的那条数据
  data() {
    return {};
  },
  components: {}
};
</script>
<style lang="less">
.itemBox {
  display: flex;
  border-bottom: 1px solid #eee;
  padding: 2vw 0vw;
  margin: auto;
  width: 90vw;
  .iconBox {
    width: 8vw;
  }
  .contentBox {
    width: 60vw;
    overflow-wrap: break-word;
    > h3 {
        font-size: 18px;
    }
  }
  .imgBox {
    width: 22vw;
    height: 18vw;
    border-radius: 10px;
    overflow: hidden;
    img {
      width: 100%;
    }
  }
}
</style>