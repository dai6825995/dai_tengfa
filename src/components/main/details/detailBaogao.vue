<template>
  <div class="detail-div" id="ershou2">
    <div class="option-title">
      <div class="option-line"></div>
      检测报告
    </div>
    <div class="report-img"></div>
    <div class="report-detail">
      <div class="report-item">
        <span>基本信息核查</span>
        <div class="report-item-ok">
          <img src="@/assets/img/tongguo.png">
          <span>已检测</span>
        </div>
      </div>
      <div class="report-item">
        <span>动力系统检测</span>
        <div class="report-item-ok">
          <img src="@/assets/img/tongguo.png">
          <span>已检测</span>
        </div>
      </div>
      <div class="report-item">
        <span>车身外观检测</span>
        <div class="report-item-ok">
          <img src="@/assets/img/tongguo.png">
          <span>已检测</span>
        </div>
      </div>
      <div class="report-item">
        <span>功能部件检测</span>
        <div class="report-item-ok">
          <img src="@/assets/img/tongguo.png">
          <span>已检测</span>
        </div>
      </div>
      <div class="report-item">
        <span>重大事故排查</span>
        <div class="report-item-ok">
          <img src="@/assets/img/tongguo.png">
          <span>已检测</span>
        </div>
      </div>
      <div class="report-mode"></div>
    </div>
    <div class="report-code">
      <img src="@/assets/img/aa.jpg" class="report-wx">
      <div class="report-code-text">
        <div class="code1">微信扫码 查看<span>完整</span>检测报告</div>
        <div class="code2">
          <img src="@/assets/img/wxsm.png">
          <div class="code2-text">
            <div style="margin-bottom: 24px;">打开微信</div>
            <div>点击页面右上角“+”，打开扫一扫</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.option-title {
    display: flex;
    align-items: center;
    font-size: 24px;
    font-weight: 600;
    line-height: 32px;
    margin-bottom: 20px;
}
.option-line {
    width: 10px;
    height: 30px;
    background: #5685FE;
    margin-right: 20px;
}
.report-img {
    width: 1001px;
    height: 210px;
    background-image: url('../../../assets/img/tongguo.png');
    background-repeat: no-repeat;
    background-size: 1001px 210px;
    margin: 0 auto;
}
.report-detail {
    margin: 30px 140px 0 140px;
    display: flex;
    flex-wrap: wrap;
    font-size: 16px;
    position: relative;
}
.report-item:nth-child(2n-1) {
    margin-right: 176px;
}
.report-item {
    display: flex;
    width: 372px;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 14px;
}
.report-item-ok {
    display: flex;
    align-items: center;
}
.report-item-ok>img {
    width: 20px;
    height: 20px;
    margin-right: 6px;
}
.report-mode {
    width: 100%;
    height: 47px;
    background: linear-gradient(180deg, rgba(255, 255, 255, 0.02) 0%, #FFFFFF 100%);
    position: absolute;
    top: 47px;
    left: 0;
    z-index: 1;
}
.report-code {
    padding: 50px 0 50px 350px;
    display: flex;
    align-items: center;
}
.report-wx {
    width: 190px;
    height: 190px;
    border-radius: 8px;
    border: 1px solid #979797;
}
.report-code-text {
    margin-left: 20px;
}
.code1 {
    font-size: 24px;
    font-weight: 600;
    color: #222222;
    line-height: 32px;
}
.code2 {
    margin-top: 30px;
    display: flex;
    align-items: center;
}
.code1>span {
    color: #5685FE;
}
.code2-text {
    margin-left: 16px;
    line-height: 32px;
    font-size: 16px;
}
.report-img {
    width: 1001px;
    height: 210px;
    background-image: url('../../../assets/img/baogao.png');
    background-repeat: no-repeat;
    background-size: 1001px 210px;
    margin: 0 auto;
}
</style>