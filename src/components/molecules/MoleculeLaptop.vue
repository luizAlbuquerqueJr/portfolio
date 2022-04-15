<template>
    <div class="laptopOuter mx-0">
      <div class='laptopImage'></div>
    </div>
</template>

<script>
  export default {
    props:{
      number: {
        type: String,
        default: ''
      },
      text: {
        type: String,
        default: ''
      }
    },
  }
</script>
<style scoped>
.laptopOuter {
  width: 350px;
  border: 1px solid transparent;
  height: 216px;
  background-image: url('../../assets/laptop2.png');
  background-size: cover; 
}
.laptopImage{
  width: 255px;
  height: 156.1px;
  margin-top: 12px;
  margin-left: 46px;
  background-color: rgba(255,0,0,0.5);  
  background-image: url('../../assets/me.jpeg');
  background-size: cover; 
  opacity: 0.6;
}
.laptopImage:hover{
  opacity: 0.7;
}
</style>