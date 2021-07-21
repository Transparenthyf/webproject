<template>
  <div id="slideshow" @mouseover="over" @mouseout="out">
    <div class="li" :class="{slideshowleft:index == 3 || index == 4,slideshowactive:index == 0,slideshowready:index == 1 ||index == 4,slideshowright:index == 1 || index == 2}">1</div>
    <div class="li" :class="{slideshowleft:index == 4 || index == 0,slideshowactive:index == 1,slideshowready:index == 0 ||index == 2,slideshowright:index == 2 || index == 3}">2</div>
    <div class="li" :class="{slideshowleft:index == 0 || index == 1,slideshowactive:index == 2,slideshowready:index == 1 ||index == 3,slideshowright:index == 3 || index == 4}">3</div>
    <div class="li" :class="{slideshowleft:index == 1 || index == 2,slideshowactive:index == 3,slideshowready:index == 2 ||index == 4,slideshowright:index == 4 || index == 0}">4</div>
    <div class="li" :class="{slideshowleft:index == 2 || index == 3,slideshowactive:index == 4,slideshowready:index == 3 ||index == 0,slideshowright:index == 0 || index == 1}">5</div>
    <div id="last" @click="next">&lt;</div>
    <div id="next" @click="last">&gt;</div>
    <ul>
      <li @click="slideclick1" :class="{slideactive:index == 0}">1</li>
      <li @click="slideclick2" :class="{slideactive:index == 1}">2</li>
      <li @click="slideclick3" :class="{slideactive:index == 2}">3</li>
      <li @click="slideclick4" :class="{slideactive:index == 3}">4</li>
      <li @click="slideclick5" :class="{slideactive:index == 4}">5</li>
    </ul> 
  </div>
</template>

<script>
export default {
  name: 'Slideshow',
  data() {
    return {
      // 记录展示图片的下标
    index: 0,
    // 定时器指针
    timer: null
    }
  },
  methods: {
    // 定时器
    setTimer() {
      this.timer = setInterval( () => {
        this.next()
      }, 3000)
    },
    // 上一张
    last() {
      if(this.index == 0){
        this.index = 4
      }
      else{
        this.index--
      }
      // console.log(this.index)
    },
    // 下一张
    next() {
      if(this.index == 4){
        this.index = 0
      }
      else{
        this.index++
      }
      // console.log(this.index)
    },
    // 点击跳转
    linkJumpNext() {
      this.next()
      setTimeout(() => {
        this.next()
      }, 500);
    },
    linkJumpLast() {
      this.last()
      setTimeout(() => {
        this.last()
      }, 500);
    },
    // 监听鼠标
    out() {
      clearInterval(this.timer)
      this.timer = null
      this.setTimer()
      // console.log(777)
    },
    over() {
      clearInterval(this.timer)
      this.timer = null
      // console.log(666)
    },
    // 监听列表点击
    slideclick1() {
      switch(this.index){
        case 1:
          this.last()
          break
        case 2:
          this.linkJumpLast()
          break
        case 3:
          this.linkJumpNext()
          break
        case 4:
          this.next()
          break
        default:
          break
      }
      // console.log(num)
      // if(this.index == 2 || this.index == 3){
      //   this.linkJump()
      // }
      // else if(this.index == 1){
      //   this.last()
      // }
      // else{
      //   this.next
      // }
    },
    slideclick2(){
      switch(this.index){
        case 2:
          this.last()
          break
        case 3:
          this.linkJumpLast()
          break
        case 4:
          this.linkJumpNext()
          break
        case 0:
          this.next()
          break
        default:
          break
      }

      // if(this.index == 3 || this.index == 4){
      //   this.linkJump()
      // }
      // else if(this.index == 1){
      //   this.last()
      // }
      // else{
      //  this.index = 1
      // }
    },
    slideclick3(){
      switch(this.index){
        case 3:
          this.last()
          break
        case 4:
          this.linkJumpLast()
          break
        case 0:
          this.linkJumpNext()
          break
        case 1:
          this.next()
          break
        default:
          break
      }
      // if(this.index == 4 || this.index == 0){
      //   this.linkJump()
      // }
      // else if(this.index == 1){
      //   this.last()
      // }
      // else{
      //  this.index = 2
      // }
    },
    slideclick4(){
      switch(this.index){
        case 4:
          this.last()
          break
        case 0:
          this.linkJumpLast()
          break
        case 1:
          this.linkJumpNext()
          break
        case 2:
          this.next()
          break
        default:
          break
      }
      // if(this.index == 0 || this.index == 1){
      //   this.linkJump()
      // }
      // else if(this.index == 1){
      //   this.last()
      // }
      // else{
      //  this.index = 3
      // }
    },
    slideclick5(){
      switch(this.index){
        case 0:
          this.last()
          break
        case 1:
          this.linkJumpLast()
          break
        case 2:
          this.linkJumpNext()
          break
        case 3:
          this.next()
          break
        default:
          break
      }
      // if(this.index == 1 || this.index == 2){
      //   this.linkJump()
      // }
      // else if(this.index == 1){
      //   this.last()
      // }
      // else{
      //  this.index = 4
      // }
    },
  },
  // 开始计时器
  created: function() {
    this.setTimer()
  }
}
</script>

<style>
#slideshow{
  position: relative;
  width: 300px;
  height: 200px;
  margin: auto;
  overflow: hidden;
}
.li{
  position: absolute;
  top: 0px;
  left: 0px;
  width: 300px;
  height: 200px;
  font-size: 100px;
  line-height: 200px;
  list-style: none;
  transition: 1s;
}
/* 设置颜色 */
#slideshow>:nth-child(1){
  background-color: red;
}
#slideshow>:nth-child(2){
  background-color:blue;
}
#slideshow>:nth-child(3){
  background-color: green;
}
#slideshow>:nth-child(4){
  background-color: yellow;
}
#slideshow>:nth-child(5){
  background-color: aqua;
}
/* 按钮样式 */
#last{
  position: absolute;
  left: 0px;
  top: 75px;
  width: 30px;
  height: 50px;
  z-index: 11;
  background-color: darkcyan;
  font-size: 30px;
  line-height: 50px;
}
#next{
  position: absolute;
  right: 0px;
  top: 75px;
  width: 30px;
  height: 50px;
  z-index: 11;
  background-color: darkcyan;
  font-size: 30px;
  line-height: 50px;
}
/* 过度动画 */
.slideshowleft{
  transform: translateY(0px) translateX(300px);
  transition: 1s;
}
.slideshowactive{
  z-index: 10;
  transform: translateY(0px) translateX(0px);
  transition: 1s;
}
.slideshowright{
  transform: translateY(0px) translateX(-300px);
  transition: 1s;
}
.slideshowready{
  z-index: 9;
}
#slideshow ul{
  position: absolute;
  bottom: 3px;
  z-index: 20;
  width: 100%;
}
#slideshow ul li{
  background-color: azure;
  display: inline-block;
  margin: 2px;
  width: 16px;
  height: 16px;
  border-radius: 8px;
}
#slideshow ul li.slideactive{
  background-color: cadetblue;
}
</style>