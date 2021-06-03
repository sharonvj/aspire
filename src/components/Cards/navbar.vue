<template>
   <div class="card-navbar">
      <nav>
		<ul v-for="d in navs" :key="d.key" :class="{'active':d.isSelected}">
			<li>{{d.label}}</li>
		</ul>
      </nav>
   </div>
</template>
<script>

export default {
  name: 'navbar',
  data(){
	return{
		navs:[{key:'0',label:'My debit cards',isSelected:true},{key:'1',label:'All company cards',isSelected:false}]
	}
  },
  components: {
    
  }
}
</script>
<style lang="scss">
.card-navbar {
  nav {
    display: flex;
    font-size: 13px;
    color: #fff;
    ul {
      padding-left: 0px;
      padding-right: 33px;
      li {
        list-style-type: none;
        opacity: 50%;
        padding: 0px 2.5px;
      }
      &.active {
        li {
          border-bottom: 2px solid #23cefd;
          opacity: 100%;
        }
      }
    }
  }
  @media (min-width: 1281px),
    (min-width: 768px) and (max-width: 1024px),
    (min-width: 481px) and (max-width: 767px),
    (min-width: 768px) and (max-width: 1024px) and (orientation: landscape),
    (min-width: 768px) and (max-width: 1024px),
    (min-width: 1025px) and (max-width: 1280px) {
    nav {
      color: #222222;
      font-size: 14px;
      ul {
        &.active {
          li {
            font-weight: bold;
          }
        }
        li {
          font-family: "Avenir Next", Demi;
        }
      }
    }
  }
}


</style>