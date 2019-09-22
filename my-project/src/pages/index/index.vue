<template>
  <div class="bg6">
    <section class="home_top">
      <image class="home_top_bg" src="../../assets/img/home_logo.jpg"></image>
      <div class="home_top_box">
        <!--        <img src="../../assets/img/home_logo.jpg"></img>-->
        <div class="home_top_inner">
          <div class="f-left">
            <img class="home_top_logo" src="../../assets/img/logo.jpg" alt="" mode="widthFix">
          </div>
          <div class="f-left mar_l_01">
            <div>卢鹏华美食连锁</div>
            <div class=" f1">
              <span>起送价&nbsp;&nbsp;</span>
              <span>￥88</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="menu_list bg7">
      <div class="f-left menu_item">
        <div class="bg8 item"></div>
        菜单一个1
      </div>
      <div class="f-left menu_item">
        <div class="bg8 item"></div>
        菜单一个2
      </div>
      <div class="f-left menu_item">
        <div class="bg8 item"></div>
        菜单一个3
      </div>
      <div class="f-left menu_item">
        <div class="bg8 item"></div>
        菜单一个4
      </div>
    </section>
    <section class="border-t1 border-b1 bg6 clearFix">
      <section class="f-left home_list clearFix">
        <div class="list-item bg7">目录一</div>
        <div class="list-item">目录二</div>
        <div class="list-item">目录三</div>
      </section>
      <section class="f-left home_goods bg7 f16 clearFix">
        <h3 class="border-b1">目录一</h3>
        <div class="item1 border-b1 clearFix">
          <div>
            <div class="pad8 f-left">
              <img class="goodsClass " src="https://7969-yinwl888-n5ta6-1300277726.tcb.qcloud.la/image/demo-pic/food_02.jpg?sign=3ce3e0754f00f4f0a5e4cb8e07597908&t=1568969682"  alt="" mode="widthFix">
            </div>
            <div class="pad8 f-left">
              <div>臭小酸辣粉</div>
              <div class="c0 mar_t_10">￥12</div>
            </div>
          </div>
        </div>
        <div class="item1 border-b1 clearFix">
          <div>
            <div class="pad8 f-left">
              <img class="goodsClass " src="https://7969-yinwl888-n5ta6-1300277726.tcb.qcloud.la/image/demo-pic/food_02.jpg?sign=3ce3e0754f00f4f0a5e4cb8e07597908&t=1568969682"  alt="" mode="widthFix">
            </div>
            <div class="pad8 f-left">
              <div>臭小酸辣粉</div>
              <div class="c0 mar_t_10">￥12</div>
            </div>
          </div>
        </div>
      </section>
    </section>

  </div>
</template>

<script>
  import card from '@/components/card'

  export default {
    data() {
      return {
        motto: 'Hello miniprograme',
        userInfo: {
          nickName: 'mpvue',
          avatarUrl: 'http://mpvue.com/assets/logo.png'
        }
      }
    },

    components: {
      card
    },

    methods: {
      bindViewTap() {
        const url = '../logs/main'
        if (mpvuePlatform === 'wx') {
          mpvue.switchTab({url})
        } else {
          mpvue.navigateTo({url})
        }
      },
      clickHandle(ev) {
        console.log('clickHandle:', ev)
        // throw {message: 'custom test'}
      }
    },
    created() {
    }
  }
</script>
