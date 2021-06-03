<template>
  <div class="carddetails">
	<div class="left-icon"><i class="icon-card-det"></i><span class="text">Card details</span></div>
	<i class="icon-down-arrow"></i>
  </div>
</template>

<script>

export default {
  name: 'carddetails',
  components: {
    
  }
}
</script>
<style lang="scss">
	.carddetails {
  width: 366px;
  height: 72px;
  padding: 24px;
  margin: 24px auto;
  background: #fafcff;
  border: 1px solid #f5f5f5;
  border-radius: 8px;
  box-shadow: 0px 0px 8px #0000000a;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .left-icon {
    display: flex;
    align-items: center;
    .text {
      font-size: 14px;
      padding-left: 12px;
      height: 19px;
      width: 90px;
    }
  }
}

</style>
