<template>
  <div class="options-container">
    <div class="options">
     <div class="option" v-for="each in options" :key="each.key">
      <i :class="each.icon"></i>
      <div class="text" :style="{width:each.width}">{{each.text}}</div>
     </div>
    </div>
    <div>
  </div>
  </div>
</template>

<script>

export default {
  name: 'options',
  data(){
	return{
      options:[{key:1,icon:'icon-freezecard',text:'Freeze card',width:'40px'},
               {key:2,icon:'icon-setspend',text:'Set spend limit',width:'60px'},
               {key:3,icon:'icon-gpay',text:'Add to GPay',width:'40px'},
               {key:4,icon:'icon-replacecard',text:'Replace card',width:'48px'},
               {key:5,icon:'icon-deactivecard',text:'Cancel card',width:'40px'}]
	}
  },
  components: {
    
  }
}
</script>
<style lang="scss">
.options-container {
  width: 414px;
  height: 236px;
  margin: 0% -4.4%;
  position: relative;
  z-index: 10000;
  top: 108px;
  .options {
    background: #edf3ff;
    border-radius: 25px 25px 0px 0px;
    height: 116px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    .option {
      width: 82.8px;
      text-align: center;
      .text {
        font-size: 13px;
        color: #0c365a;
        margin: auto;
        padding-top: 7px;
      }
    }
  }
  .card-details {
    background: #ffffff;
  }
  @media (min-width: 1281px),
    (min-width: 768px) and (max-width: 1024px),
    (min-width: 481px) and (max-width: 767px),
    (min-width: 768px) and (max-width: 1024px) and (orientation: landscape),
    (min-width: 768px) and (max-width: 1024px),
    (min-width: 1025px) and (max-width: 1280px) {
    margin: 0;
    .options {
      border-radius: 25px;
    }
  }
}

</style>