<template>
  <div class="sift-num">
            <div class="sift-now-div">
                <span>当前筛选：</span>
                <div class="sift-now">
                    <span>价格：</span>
                    <span class="sift-now-text">30-50万</span>
                    <a href="/c0/ershouche/default/e21" class="sift-now-del"></a>
                </div>
                <div class="sift-now">
                    <span>燃油类型：</span>
                    <span class="sift-now-text">柴油</span>
                    <a href="/c0/ershouche/default/d12" class="sift-now-del"></a>
                </div>

<!--                <div class="sift-now">-->
<!--                    <span>价格：</span>-->
<!--                    <span class="sift-now-text">20万以下</span>-->
<!--                    <i class="sift-now-del"></i>-->
<!--                </div>-->
                <a href="/c0/ershouche" class="sift-reset">
                    <i></i>
                    <span>重置条件</span>
                </a>
            </div>
<!--            <span class="sift-num-text">您找到 2 辆好车</span>-->
        </div>
</template>

<script setup> 
</script>

<style scoped>
.sift-num {
    display: flex;
    align-items: center;
    margin-bottom: 30px;
    font-size: 14px;
}
.sift-now-div {
    display: flex;
    align-items: center;
}
.sift-now {
    width: auto;
    padding: 0 10px;
    background-color: #FFFFFF;
    height: 34px;
    display: flex;
    align-items: center;
    margin-right: 10px;
}
.sift-now-text {
    color: #5685FE;
    margin-right: 10px;
}
.sift-now a {
    width: 14px;
    height: 14px;
    background-image: url('../../../assets/img/guanbi.png');
    background-size: 14px 14px;
}
.sift-reset {
    display: flex;
    align-items: center;
    cursor: pointer;
    color: #666666;
    margin-left: 20px;
    margin-right: 30px;
}
.sift-reset i {
    width: 14px;
    height: 14px;
    background-image: url('../../../assets/img/shanchu.png');
    background-size: 14px 14px;
    display: inline-block;
    margin-right: 6px;
}
</style>