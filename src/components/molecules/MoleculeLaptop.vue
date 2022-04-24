<template>
    <div class="laptopOuter mx-0">
      <div class="laptopImage" :style="laptopImage"></div>
    </div>
</template>

<script>
  export default {
    props:{
      imageURL: {
        type: String,
        default: ''
      }
    },
    computed: {
      laptopImage (){
        return {
          "width": "255px",
          "height": "156.1px",
          "margin-top": "12px",
          "margin-left": "46px",
          "background-size": "cover",
          "opacity": "0.6",
          "background-image": `url(${this.imageURL})`
          
        }
      }
      
    }
  }
</script>
<style scoped>
.laptopOuter {
  width: 350px;
  border: 1px solid transparent;
  height: 216px;
  background-image: url('../../assets/laptop.png');
  background-size: cover; 
}
.laptopImage{
  width: 255px;
  height: 156.1px;
  margin-top: 12px;
  margin-left: 46px;
  background-size: cover; 
  opacity: 0.6;
}
.laptopImage:hover{
  opacity: 0.7;
}
</style>