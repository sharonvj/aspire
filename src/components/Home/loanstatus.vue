<template>
<div class="loans-status">
  <h4>Loan Status</h4>
  <table class="table">
  <thead>
    <tr>
      <th scope="col">Requested Date</th>
      <th scope="col">Loan Amount</th>
      <th scope="col">Loan Status</th>
      <th scope="col" v-if="isApproved">Next Repayment</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="(each,index) in loans" :key="index">
      <td>{{each.date|formatDateTime}}</td>
      <td>{{each.amount}}</td>
      <td>{{each.status}}</td>
      <td v-if="isApproved">
         <span v-if="each.status == 'APROVED'">
          {{each.payment_date|formatDateTime}}
         </span>
      </td>
      <td>
        <button @click="cancel(each.id)">Cancel Loan</button>
        <button v-if="each.status == 'APROVED'" @click="repay(each.id)">RePay</button>
      </td>
    </tr>
    <tr v-if="!loans.length">
      <td colspan="5">No Loan Requests</td>
    </tr>
  </tbody>
</table>
</div>
</template>
<script>
  import axios from 'axios'
export default {
  name: 'header',
  props:['loans'],
  components: {
  },
  data(){
    return{
    }
  },
  computed:{
   isApproved(){
     let approved = this.loans.filter(c=>c.status=='APROVED')
     return (approved && approved.length)?true:false
   }
  },
  methods:{
    cancel(id){
      axios({
          url:'https://60b651d217d1dc0017b878d8.mockapi.io/api/v1/loans/'+id,
          method: 'DELETE',
        })
        .then(()=>{
          this.loans.splice(0,1)
        })
        .catch( (error)=> {
          console.log(error);
        });
    },
    repay(){

    }
  }
}
</script>
<style lang="scss">
.loans-status{

}
</style>