<template>
    <div class="index-right">
        <div class="index-right-div">
            <div class="right-item" id="go-app">
                <div class="item-container">
                    <div class="item-container-bg"></div>
                    <div>APP</div>
                </div>
                <div id="item-abs-app" class="item-hover item-abs-code">
                    <img
                        src="https://tfcar.oss-cn-hangzhou.aliyuncs.com/149815731972734977.jpg"
                        id="abs-app-code"
                    />
                    <div>
                        下载app<br />
                        关注更多信息
                    </div>
                </div>
            </div>
            <div class="right-item" id="go-wx">
                <div class="item-container">
                    <div class="item-container-bg"></div>
                    <div>小程序</div>
                </div>
                <div id="item-abs-wx" class="item-hover item-abs-code">
                    <img
                        src="https://tfcar.oss-cn-hangzhou.aliyuncs.com/149815731972734976.jpg"
                        id="abs-wx-code"
                    />
                    <div>
                        扫码打开小程序<br />
                        关注更多信息
                    </div>
                </div>
            </div>
            <div class="right-item" id="go-tell">
                <div class="item-container">
                    <div class="item-container-bg"></div>
                    <div>电话</div>
                </div>
                <div id="item-abs-tel" class="item-hover">400-0606-777</div>
            </div>
            <div class="right-item" id="go-top">
                <div class="item-container" @click="backup">
                    <div class="item-container-bg"></div>
                    <div>回到顶部</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    let backup = () => {
        let s = document.body.scrollTop || document.documentElement.scrollTop;
        let t = 10;
        let v = s / t;
        let tv = s;
        let timer = setInterval(() => {
            tv -= v;
            if (tv <= 0) {
                tv = 0;
                clearInterval(timer);
            }
            document.body.scrollTop = tv;
            document.documentElement.scrollTop = tv;
        }, 16.7);
    };
</script>

<style scoped>
    @import "../../assets/css/right.css";
</style>