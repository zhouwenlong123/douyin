<template>
    <div class="Recommend-wrap" @click="onxing" ref="onxing">

       <!-- 弹幕 -->
        <div class="Barrage">
          
        </div>

        <!-- 点击爱心 -->
        <aixin :top="top" :left="left"></aixin>

        <!-- 内容 -->
        <div class="RecommendBoxs">
            <div class="Recommend-img">
                <img src="../assets/Img.jpg" alt="">
            </div>
        </div>

        <!-- 标题 -->
        <div class="RecommendTitle">
          <p>@一蝉经典语录</p>
          <p>在合适的时间遇到合适的人是一种幸福。@抖音小助手 #情感语录 #一蝉小和尚</p>
        </div>
        
        <!-- 点赞 -->
        <div class="Recommend-Side">
          <div class="Headimage">
            <img src="../assets/headImg.jpg" alt="">
          </div>
          <div :class="this.num?'daxin':''" @click="Fabulous">
              <p><i class="iconfont icon-love-b"></i></p>
              <span>{{num}}</span>
          </div>
          <div @click="news">
              <p><i class="iconfont icon-message2"></i></p>
              <span>评论</span>
          </div>
          <div>
              <p><i class="iconfont icon-fenxiang"></i></p>
              <span>分享</span>
          </div>
        </div>

        <!-- 遮罩层 -->
        <div class="mask btnImg" ref='btnImg' v-show="flag"
          @touchstart.stop='touchStart' 
          @touchmove.stop='touchMove' 
          @touchend.stop='touchEnd' 
        >
        <div class="mask-header">
          <span></span>
          <span>{{number}}条评论</span>
          <span @click="Close" class="Close">X</span>
        </div>
          <ul class="mask-ul">
              <li v-for="(item,index) in datalist" :key="index">
                  <div><img :src="item.img" alt=""></div>
                  <div>
                    <p>{{item.title}}</p>
                    <p>{{item.content}}</p>
                    <p>{{item.Time}}</p>
                  </div>
                  <div>
                    <p :class="item.iscolor?'zanxin':''" @click="zanxin(index,item.iscolor)"><i class="iconfont icon-love-b"></i></p>
                    <span>{{item.num}}</span>
                  </div>
              </li>
          </ul>
          <!-- 输入框 -->
          <div class="frame">
            <input type="text" placeholder="评论" ref="inpValue"><button class="button" @click="Send">发送</button>
          </div>
        </div>
    </div>
</template>

<script>
import aixin from '../components/aixin'
import { mapState, mapActions } from "vuex";
export default {
  data() {
    return {
      flag: false,
      datalist:[],
      show:false,
      number:0,
      num:0,
      value:[],
      top:20,
      left:20
    };
  },
  components:{
    aixin
  },
  computed: {
    ...mapState({
      updataFabulous: state => state.Fabulous.updataFabulous
    })
  },
  methods: {
    ...mapActions({}),
    //遮罩
    news(e) {
      this.flag = true;
    },
    Close() {
      this.flag = false;
    },
    //点赞加
    Fabulous() {
      if(this.num>0){
        this.num--;
      }else{
        this.num++;
      }
    },
    //上下滑动
    touchStart(e) {
      this.startY = e.touches[0].clientY;
    },
    touchMove(e) {
      e = e || event;
      e.preventDefault();
      let btnheight = this.$refs.btnImg.getBoundingClientRect().height;
      if (e.touches.length == 1) {
        this.moveY = e.touches[0].clientY; //滑动的位置
        // console.log(this.moveY)
      }
      //实时的滑动的距离-起始位置=实时移动的位置
      this.disY = this.moveY - this.startY;
      if (this.disY < 0 || this.disY == 0) {
        this.$refs.btnImg.style.transform = "translateY(0px)";
        // console.log('slideEffect1',this.slideEffect)
      } else if (this.disY > 0) {
        this.$refs.btnImg.style.transform = "translateY(" + this.disY + "px)";
        // console.log('slideEffect2',this.slideEffect)
      }
    },
    touchEnd(e) {
      this.$refs.btnImg.style.transform = "";
      // 判断滑动距离是否到关闭的临界值
      if (this.disY >= window.innerHeight * 0.35) {
        this.flag = false;
      }
    },
    //评论点赞
    zanxin(index,isColor){
      this.datalist[index].iscolor = !isColor;
      if(this.datalist[index].iscolor){
        this.datalist[index].num++;
      }else{
        this.datalist[index].num--;
      }
    },
    //输入框
    Send(){
      let val = this.$refs.inpValue.value;
      this.value.push(val)
    },
    //
    onxing (e) {
       console.log(e)
      console.log(this.$refs.onxing.getBoundingClientRect().left,'left')
      console.log(this.$refs.onxing.getBoundingClientRect().top,'top')
    }
  },
  mounted() {
    fetch(
      "https://www.easy-mock.com/mock/5bd6a1f5739071024c502772/douyinList/douyinList"
    )
    .then(res => res.json())
    .then(res => {
      this.datalist = res;
      this.number = this.datalist.length;
    });
  }
};
</script>

<style>
.daxin p {
  color: red;
}
.zanxin i {
  color: red;
}
.btnImg {
  transform: translate3d(0, 0, 0);
  transition: all 0.1s linear;
}
</style>

