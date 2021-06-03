<script>
import Header from './../components/Cards/header.vue'
import Nav from './../components/Cards/navbar.vue'
import DebitCard from './../components/Cards/debitcard.vue'
import Options from './../components/Cards/options.vue'
import Carddetails from './../components/Cards/carddetails.vue'
import Transactions from './../components/Cards/recenttransactions.vue'
export default {
  name: 'Cards',
  components: {
    Header,
    Nav,
    DebitCard,
    Options,
    Carddetails,
    Transactions
  }
}
</script>


<template>
<div class="cards">
   <Header/>
   <Nav/>
   <div class="card-inner">
      <div class="sub-panel-1">
         <Debit-card/>
         <Options/>
      </div>
      <div class="sub-panel-2">
         <Carddetails slot="carddetails"/>
         <Transactions slot="recenttransactions"/>
      </div>
   </div>
</div>
</template>
<style lang="scss">
.cards {
  .card-inner {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    @media (min-width: 1281px),
      (min-width: 768px) and (max-width: 1024px),
      (min-width: 481px) and (max-width: 767px),
      (min-width: 768px) and (max-width: 1024px) and (orientation: landscape),
      (min-width: 768px) and (max-width: 1024px),
      (min-width: 1025px) and (max-width: 1280px) {
      flex-direction: row;
      background: #FFFFFF;
      border: 1px solid #FCFCFC;
      box-shadow: 0px 2px 12px #00000014;
      border-radius: 8px;
      padding: 31.2px 40px;
      height:767px;
    }
    .sub-panel-2{
      height: 809px;
    }
  }
}
</style>

