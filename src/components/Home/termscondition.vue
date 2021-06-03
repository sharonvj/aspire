<template>
<div class="terms-conditions">
 <h4>Terms And Conditions</h4>
 <ul>
  <li>The Loan shall carry fixed rate of interest specified at the time of applying Loan.</li>
  <li>The Loan amount shall be disbursed, after debiting processing fees, in Borrower’s digiSavings account only with the Bank on accepting the Personal Loan Terms of Agreement.</li>
  <li>During the Free Look Period of two (2) days from date of Loan disbursement, the Borrower can cancel the Loan. Processing fees will not be refunded in case of cancellation.</li>
  <li>EMI shall consist of principal and interest component. The Borrower authorises the Bank to debit EMI from Borrower’s digiSavings account on the specified EMI date.</li>
 </ul>
</div>
</template>
<script>

export default {
  name: 'header',
  components: {
  }
}
</script>
<style lang="scss" scoped>
.terms-conditions{
  color: #fff;
  .checkbox{
    margin: 10px;
  }
@media (min-width: 1281px),
(min-width: 768px) and (max-width: 1024px),
(min-width: 481px) and (max-width: 767px),
(min-width: 768px) and (max-width: 1024px) and (orientation: landscape),
(min-width: 768px) and (max-width: 1024px),
(min-width: 1025px) and (max-width: 1280px) {
  color: #000;
}
}
</style>