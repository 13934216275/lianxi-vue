<template>
       <div id="app">
          <div>
              <router-view ></router-view>
              <div style="display:flex;justify-content:space-between;position: fixed;bottom: 0">
                  <li class="zi">
                      <i class="iconfont iconxiaolian"></i>
                      <router-link to="/picture">图片</router-link>
                  </li>
                  <li class="zi">
                      <i class="iconfont iconicon"></i>
                      <router-link to="/joke">笑话</router-link>
                  </li>
                  <li class="zi">
                      <i class="iconfont icontupian"></i>
                      <router-link to="/dt">动图</router-link>
                  </li>

              </div>
          </div>

   </div>
</template>

<script>


    export default {
        name: "index",

    }
</script>

<style scoped>
    *{
        margin: 0;
        padding:0;
        list-style: none;
    }
    .zi{
        font-size: 0.3rem;
        width: 2.53rem;
        height: 1rem;
        background:yellow;
        text-align: center;
        z-index: 999;
    }
      .zi i{
          font-size: 0.5rem;
          display: block;
      }

</style>
