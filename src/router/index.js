import Vue from 'vue'
import Router from 'vue-router'
import jwglPage from '@/pages/jwgl-page.vue'
import sc from '@/components/sc/sc.vue'
import jwTOP from '@/components/jw-top/jw-top.vue'
import jwContent from '@/components/jw-content/jw-content.vue'
import video from '@/components/video/video.vue'
import sign1 from '@/pages/sign1/sign1.vue'
Vue.use(Router)

export default new Router({

  routes: [
    {
      path: '/',
      component: sign1
    },

    {
      path: '/jw',
      name: 'jw',
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

        },
        {
          path: '/jw/:jw',
          components: {
            default: jwTOP,
            a: jwContent
          },

        }


      ]
    },
    {
      path: '/sc',
      component: sc
    },
  ]

})
