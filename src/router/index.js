import Vue from 'vue'
import Router from 'vue-router'
import jwglPage from '@/pages/jwgl-page.vue'
import jwTOP from '@/components/jw-top/jw-top.vue'
import jwContent from '@/components/jw-content/jw-content.vue'
import video from '@/components/video/video.vue'
Vue.use(Router)

export default new Router({

  routes: [
    {
      path: '/',
      name: 'jwgl',
      component: jwglPage,
      children: [
        {
          path: '/video',
          component: video
        },
        {
          path: '/',
          component: video
        },
        {
          path: '/jw/:dd',
          components: {
            default: jwTOP,
            a: jwContent
          },

        }


      ]
    }]

})
