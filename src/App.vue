<script>
  export default {
  name: 'App',
  data(){
  return{
      footerIcons:[
               {key:1,icon:'icon-sm-logo',width:'26px',text:'Home',active:false,path:'/home'},
               {key:2,icon:'icon-sm-pay',width:'26px',text:'Cards',active:true,path:'/cards'},
               {key:3,icon:'icon-sm-payments',width:'42px',text:'Payments',active:false,path:'/payments'},
               {key:4,icon:'icon-sm-credit',width:'26px',text:'Credit',active:false,path:'/credit'},
               {key:5,icon:'icon-sm-account',width:'27px',text:'Profile',active:false,path:'/settings'}]
  }
  },
  components: {
    
  }
}
</script>

<template>
  <div id="app-main" class="row">
    <div  class="leftpanelcontainer">
     <div class="leftpanel">
     <div class="title">
        <div class="logo">
          <i class="icon-logo"></i>
        </div>
        <div class="desc">
          Trusted way of banking for 3,000+ SMEs and startups in Singapore
        </div>
     </div>
     <ul class="navbar-nav">
        <li class="nav-item">
           <i class="icon-home"></i>
          <a class="nav-link" href="/home">Home</a>
        </li>
        <li class="nav-item">
          <i class="icon-card"></i>
          <a class="nav-link active" href="/cards">Cards</a>
        </li>
        <li class="nav-item">
           <i class="icon-payments"></i>
          <a class="nav-link" href="/payments">Payments</a>
        </li>
        <li class="nav-item">
          <i class="icon-credit"></i>
          <a class="nav-link" href="/credit">Credit</a>
        </li>
        <li class="nav-item">
          <i class="icon-account"></i>
          <a class="nav-link" href="/settings">Settings</a>
        </li>
     </ul>
     </div>
    </div>
    <div  class="rightpanelcontainer">
      <div class="rightpanel">
        <router-view/>
      </div>
    </div>
    <div class="hidden-slider"></div>
    <div class="sm-footer">
        <div v-for="each in footerIcons" :key="each.key" class="item">
          <a :href="each.path"><i :class="each.icon"></i>
          <div class="text" :class="{'active':each.active}" :style="{width:each.width}">{{each.text}}</div></a>
        </div>
    </div>
  </div>
</template>
<style lang="scss">
  #app-main{
    display: flex;
  }
</style>

