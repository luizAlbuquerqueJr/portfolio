<template>
  <v-row no-gutters>
    <div v-html="descriptionHTML"/>
  </v-row>
</template>

<script>
  export default {
    props:{
      description: {
        type: Array,
        default: () => []
      }
    },
    computed: {
        descriptionHTML() {
            let temp = ''
            let regex = /#link#((?!link).)*#link#/g
            for (const topic of this.description) {
                let backup = topic
                const linksArrays = topic.match(regex)
                if(linksArrays){
                    for (const link of linksArrays) {   
                        let [text ,url] = link.split('|')
                        text = text.replace(/#link#/g,'')
                        url = url.replace(/#link#/g,'')
                        console.log(text,url)
                        backup = backup.replace(link,`<a class="highlightedColor" href="${url}">${text}</a>`)
                    }
                }
                temp += `<p class="highlightedColor">&loz; ${backup}</p>`
            }
            return temp
        } 
    }
  }

</script>
<style scoped>
.topicFontSize {
  /* width: fit-content; */
  font-size:32px;
}
.topicText{
  font-size:32px;
  width: fit-content;
  height: 100%;
  display: inline;
}
.topicLine{
  width: 100%;
  height: 1px;
  background-color:#233552
}

</style>

<style>
.v-application a{
    color: var(--v-secondary-base) !important;
    text-decoration: none;
}
</style>