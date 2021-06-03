<template>
   <div class="recent-trans">
      <div class="head">
         <div class="text">
            <i class="icon-transaction"></i>
            <span>Recent transactions</span>
         </div>
         <i class="icon-up-arrow"></i>
      </div>
      <div class="body">
       <div v-for="each in tranactions" :key="each.id">
         <div class="item" >
            <div class="circle" :style="{background:each.color}">
               <i :class="each.icon"></i> 
            </div>
            <div class="info">
               <div class="nickname">{{each.nickname}}</div>
               <div class="date">{{each.date}}</div>
               <div class="desc"><span class="desc_icon"><i :class="each.desc_icon"></i></span>{{each.desc}}</div>
            </div>
            <div class="cash" :class="each.type">
               {{each.cash}}
            </div>
            <div class="next">
               <i class="icon-next"></i>
            </div>
         </div>
         <div class="seprator"></div>
     </div>
      </div>
      <div class="footer">
        View all card transactions
      </div>
   </div>
</template>

<script>

export default {
  name: 'recenttransactions',
  data(){
	return{
       tranactions:[{id:1,icon:'icon-file-storage',nickname:'Hamleys',date:'20 May 2020',cash:'+ S$ 150',desc:'Refund on debit card',desc_icon:'icon-business-and-finance',type:'credit',color:'#009DFF1A'},{id:2,icon:'icon-file-storage',nickname:'Hamleys',date:'20 May 2020',cash:'- S$ 150',desc:'Charged to debit card',desc_icon:'icon-business-and-finance',type:'debit',color:'#00D6B51A'},{id:3,icon:'icon-file-storage',nickname:'Hamleys',date:'20 May 2020',cash:'- S$ 150',desc:'Charged to debit card',desc_icon:'icon-business-and-finance',type:'debit',color:'#F251951A'},{id:4,icon:'icon-file-storage',nickname:'Hamleys',date:'20 May 2020',cash:'- S$ 150',desc:'Charged to debit card',desc_icon:'icon-business-and-finance',type:'debit',color:'#009DFF1A'}]
	}
  },
  components: {
    
  }
}
</script>
<style lang="scss">
.recent-trans {
  width: 366px;
  margin: auto;
  border: 1px solid #F0F0F0;
  border-radius: 8px;
  .head {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 72px;
    padding: 24px;
    background: #fafcff;
    border: 1px solid #f5f5f5;
    box-shadow: 0px 0px 8px #0000000a;
    .text {
      display: flex;
      align-items: center;
      span {
        padding-left: 12px;
        font-size: 14px;
      }
    }
  }
  .body {
    .item {
      height: 76px;
      margin: 20px 0px;
      padding: 24px;
      display: flex;
      align-items: center;
      .circle {
        border-radius: 50%;
        height: 48px;
        width: 48px;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .info {
		width: 186px;
		height: 53px;
		padding-left: 12px;
        .nickname {
          font-size: 14px;
          height: 19px;
          color: #222222;
          margin-bottom: 4px;
        }
        .date {
          height: 17px;
          font-size: 13px;
          color: #aaaaaa;
          margin-bottom:14px;
        }
        .desc {
           display: flex;
          .desc_icon {
			background: #325BAF;
			border-radius: 45%;
			width: 24px;
			height:20px;
			display:flex;
			justify-content: center;
			align-items: center;
			margin-right: 8px;
          }
          color: #325baf;
          font-size: 12px;
        }
      }
      .cash {
        font-weight: bold;
        font-size: 14px;
        height: 19px;
        &.credit {
          color: #01d167;
        }
      }
      .next{
		padding-left: 10px;
		display: flex;
		justify-content: flex-end;
		align-items: center;
      }

    }
    .seprator{
        border-bottom: 1px solid #f5f5f5;
		width: 95%;
		margin: auto;
      }
  }
  .footer{
    background: #EDFFF5;
    color: #01D167;
    font-size: 13px;
    text-align: center;
    height: 55px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>