<script>
    import axios from 'axios'
export default {
  name: 'Settings',
  data(){
    return{
      loans:[]
    }
  },
  components: {
  },
  created(){
    this.getAll()
  },
  methods:{
    getAll(){
        axios({
          url:'https://60b651d217d1dc0017b878d8.mockapi.io/api/v1/loans',
          method: 'GET'
        })
        .then((response)=>{
          this.loans = response.data;
        })
        .catch( (error)=> {
          console.log(error);
        });
    },
    changeStatus(id,status){

      axios({
          url:'https://60b651d217d1dc0017b878d8.mockapi.io/api/v1/loans/'+id,
          method: 'PUT',
          data: {
            status:status,
            approved_date:status=='APROVED'?Date.parse(new Date()):''
          }
        })
        .then((response)=>{
          this.loans = [response.data];
        })
        .catch( (error)=> {
          console.log(error);
        });
    }
  }
}
</script>
<template>
  <div class="settings">
  <h3>Admin Page</h3>
  <table class="table">
  <thead>
    <tr>
      <th scope="col">Requested Date</th>
      <th>Customer Name</th>
      <th scope="col">Loan Amount</th>
      <th scope="col">Loan Status</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="(each,index) in loans" :key="index">
      <td>{{each.date|formatDateTime}}</td>
      <td>Xxxx</td>
      <td>{{each.amount}}</td>
      <td>{{each.status}}</td>
      <td>
        <button @click="changeStatus(each.id,'APROVED')">Approve</button>
        <button @click="changeStatus(each.id,'REJECTED')">Reject</button>
      </td>
    </tr>
    <tr v-if="!loans.length">
      <td colspan="5">No Loan Requests</td>
    </tr>
  </tbody>
</table>
  </div>
</template>
<style lang="scss"></style>