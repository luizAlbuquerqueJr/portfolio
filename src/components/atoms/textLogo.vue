<template>
  <div class="patterns">
    <svg width="100%" height="100%">
        <rect x="0" y="0" width="100%" height="100%" fill="url(#polka-dots)"> </rect>   
        <text x="50%" y="50%"  text-anchor="middle" :style="svgText">
            {{text}}
        </text>
    </svg>
 </div>
</template>

<script>
export default {
  name: 'textLogo',
  props: {
      text: {
        type: String,
        default: ''
      }
  },

  data() {
    return {
      drawer: false,
      group: null,
      options : {
          duration: 100
      },
    }
  },
  computed: {
    collapse() {
      return this.$vuetify.breakpoint.smAndDown
    },
    svgText() {
      const width = this.$vuetify.breakpoint.width
      
      let style = {
        "font-family": "Lora",
        "stroke": "#00d3b9",
        "font-size": "clamp(30px,8vw,150px)",
      }
      if(width < 500){
        style["letter-spacing"] = "5px"
        style["stroke-width"] = 2
      }else{
        style["letter-spacing"] = "10px"
        style["stroke-width"] = 5
      }
      return style
    }
  },
  methods:{
    goToTarget(id){
      const options = {
        duration: 1000,
      }
      this.$vuetify.goTo(id, options)
    },

    logout() {
      this.$store.dispatch("setLogged", false);
      this.$store.dispatch("setUser", null);
      this.goToLogin();
    }
  },
  watch: {
    group () {
      this.drawer = false
    },
  },
};
</script>
<style scoped>
 .patterns {
  height: 100%;
}



svg text {
  animation: textAnimate 8s;
}
.textEffect{
    width: 200px;
}

@keyframes textAnimate {
  0% {
    stroke-dasharray: 0 50%;
    stroke-dashoffset:  20%;
    fill: #cad7f5;

  }


  100% {
    stroke-dasharray: 50% 0;
    stroke-dashoffstet: -20%;
    fill: #00d3b9;
  }
  
}
</style>
