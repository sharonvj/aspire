<template>
   <div class="debitcard">
      <div class="show-card-no">
         <i class="icon-eye"></i>
         <span>Show card number</span>
      </div>
      <div class="debitcard-box">
         <div class="card-logo">
            <i class="icon-logo-debit"></i>
         </div>
         <div class="card-holder">Mark Henry</div>
         <div class="card-number">
            <span class="no">••••</span> 
            <span class="no">••••</span> 
            <span class="no">••••</span>
            <span class="yr">2020</span>
         </div>
         <div class="card-info">
            <span class="expiry">Thru:12/20</span>
            <div class="cvv">
            <span class="lbl">CVV: </span>
            <span class="cvv-pin">***</span>
            </div>
         </div>
         <div class="card-name">
            <i class="icon-visa"></i>
         </div>
      </div>
   </div>
</template>
<script>
export default {
  name: 'debitcard',
  components: {
    
  }
}
</script>
<style lang="scss">
.debitcard {
  width: 358px;
  height: 220px;
  .show-card-no {
    position: relative;
    width: 151px;
    height: 40px;
    background: #ffffff;
    border-radius: 6px;
    float: right;
    display: flex;
    padding: 5px 10px 18px;
    justify-content: center;
    span {
      font-size: 12px;
      padding-left: 4px;
      color: #01d167;
    }
  }
  .debitcard-box {
    position: relative;
    top: 24px;
    z-index: 1000;
    width: inherit;
    height: 212px;
    background: #01d167;
    opacity: 100%;
    border-radius: 12px;
    padding: 24px;
    .card-logo {
      height: 30px;
      .icon-logo-debit {
        position: absolute;
        right: 24px;
        top: 24px;
      }
    }
    .card-number {
      width: 264px;
      display: flex;
      justify-content: space-between;
      color: #ffffff;
      align-items: center;
      letter-spacing: 2px;
      font-size: 24px;
      .yr {
        font-size: 14px;
        font-weight: bold;
      }
    }
    .card-info {
      width: 180px;
      font-size: 13px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      color: #ffffff;
      .expiry{
        font-weight: bold;
      }
      .cvv {
        display: flex;
        align-items: center;
        font-weight: bold;
        .cvv-pin {
          font-size: 24px;
          font-weight: bold;
        }
      }
    }
    .card-holder {
      height: 30px;
      color: #ffffff;
      font-size: 22px;
      margin-bottom: 20px;
      font-weight: bold;
    }
    .card-name {
      height: 20px;
      .icon-visa {
        position: absolute;
        right: 24px;
      }
    }
  }
  @media (min-width: 1281px),
    (min-width: 768px) and (max-width: 1024px),
    (min-width: 481px) and (max-width: 767px),
    (min-width: 768px) and (max-width: 1024px) and (orientation: landscape),
    (min-width: 768px) and (max-width: 1024px),
    (min-width: 1025px) and (max-width: 1280px) {
    width: 414px;
  }
}

</style>