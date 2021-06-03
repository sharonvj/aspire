<script>
import Header from './../components/Home/header.vue'
import Terms from './../components/Home/termscondition.vue'
import LoanStatus from './../components/Home/loanstatus.vue'
import axios from 'axios'
import moment from 'moment'
export default {
  name: 'Home',
  data(){
   return{
    refresh:1,
    loans:[]
   }
  },
  components: {
    Header,
    Terms,
    LoanStatus
  },
  created(){
    this.getAll();
  },
  methods:{
    loanapplied(){
      this.getAll();
    },
    paymentdatecalculator(approved){
      var currntdate = moment().unix();
      var firstpayment = moment(approved).add(7, 'days').unix();
      return currntdate > firstpayment ? moment().weekday(0).add(7, 'days').unix()*1000 : firstpayment*1000;
    },
    getAll(){
        axios({
          url:'https://60b651d217d1dc0017b878d8.mockapi.io/api/v1/loans',
          method: 'GET'
        })
        .then((response)=>{
          this.loans = response.data.map(c=>{
            if(c.status == 'APROVED'){
              c.payment_date = this.paymentdatecalculator(c.approved_date)
            }
            return c;
          });
        })
        .catch( (error)=> {
          console.log(error);
        });
    }
  }

}
</script>
<template>
  <div class="home">
    <Header :loans="loans" @loanapplied="loanapplied" />
    <Terms/>
    <LoanStatus  :loans="loans"/>
  </div>
</template>
<style lang="scss"></style>