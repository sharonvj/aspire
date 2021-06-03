<template>
<div class="c-header">
   <div class="sm-logo">
      <i class="icon-logo-sm"></i>
   </div>
   <div class="row">
      <div class="col-12 col-lg-12 col-sm-12 col-xl-12 col-md-12">
         <div class="balance-label">Available balance</div>
      </div>
   </div>
   <div class="row">
      <div class="col-md-6 col-12 col-sm-12 col-lg-6 col-xl-6  balance">
         <div class="balance-det">
            <span class="currency">S$</span>
            <span class="balance-amnt">3,000</span>
         </div>
         <div class="sm-btn-add">
            <span class="icon-add-alt"></span>
            <span class="btn-lbl">New card</span>
         </div>
      </div>
      <div class="col-md-6 col-12 col-sm-12 col-lg-6 col-xl-6  new-card">
         <button class="btn-card">
         <span class="icon-add"></span>
         <span class="btn-lbl">New card</span>
         </button>
      </div>
   </div>
</div>
</template>

<script>

export default {
  name: 'header',
  components: {
  }
}
</script>
<style lang="scss">
.c-header {
  margin-top: 44px;
  margin-bottom: 30px;
  .balance-label {
    float: left;
    font-size: 14px;
    padding-bottom: 9px;
    color: #fff;
    @media (min-width: 1281px),
      (min-width: 768px) and (max-width: 1024px),
      (min-width: 481px) and (max-width: 767px),
      (min-width: 768px) and (max-width: 1024px) and (orientation: landscape),
      (min-width: 768px) and (max-width: 1024px),
      (min-width: 1025px) and (max-width: 1280px) {
      color: #222222;
    }
  }
  .sm-logo {
    position: absolute;
    right: 24.41px;
    top: 27px;
  }
  .balance {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .balance-det {
      display: flex;
      align-items: center;
      .currency {
        background: #01d167;
        color: #fff;
        border-radius: 4px;
        width: 40px;
        height: 18px;
        font-size: 12px;
        @media (min-width: 1281px),
          (min-width: 768px) and (max-width: 1024px),
          (min-width: 481px) and (max-width: 767px),
          (min-width: 768px) and (max-width: 1024px) and (orientation: landscape),
          (min-width: 768px) and (max-width: 1024px),
          (min-width: 1025px) and (max-width: 1280px) {
          height: 24px;
          font-size: 13px;
          padding-top: 3px;
        }
        padding: 0px 13px;
      }
      .balance-amnt {
        padding-left: 10px;
        font-size: 24px;
        font-weight: bold;
        color: #fff;
        @media (min-width: 1281px),
          (min-width: 768px) and (max-width: 1024px),
          (min-width: 481px) and (max-width: 767px),
          (min-width: 768px) and (max-width: 1024px) and (orientation: landscape),
          (min-width: 768px) and (max-width: 1024px),
          (min-width: 1025px) and (max-width: 1280px) {
          font-size: 26px;
          color: #222222;
        }
      }
    }
    .sm-btn-add {
      display: flex;
      align-items: center;
      .icon-add {
        &:before {
          background: #23cefd;
        }
      }
      .btn-lbl {
        color: #23cefd;
        font-size: 13px;
        text-align: right;
        display: flex;
        align-self: center;
        padding-left: 5px;
      }
    }
  }
  @media (min-width: 1281px),
    (min-width: 768px) and (max-width: 1024px),
    (min-width: 481px) and (max-width: 767px),
    (min-width: 768px) and (max-width: 1024px) and (orientation: landscape),
    (min-width: 768px) and (max-width: 1024px),
    (min-width: 1025px) and (max-width: 1280px) {
    .new-card {
      .btn-card {
        color: #fff;
        padding: 8px;
        display: flex;
        background-color: #325baf;
        border-color: #325baf;
        width: 109px;
        height: 35px;
        border-radius: 4px;
        align-items: center;
        float: right;
        .btn-lbl {
          font-size: 13px;
          text-align: right;
          display: flex;
          align-self: center;
          padding-left: 7px;
        }
      }
    }
    .sm-btn-add {
      display: none !important;
    }
    .sm-logo {
      display: none !important;
    }
  }
  @media (min-width: 320px) and (max-width: 480px) {
    .new-card {
      display: none;
    }
  }
}
</style>