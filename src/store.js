import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const state = {
  items: [
    {img: require('./components/jw-content/images/jwgl_kbgl@2x.png'), text: "课表管理"},
    {img: require('./components/jw-content/images/jwgl_kcgl@2x.png'), text: "课程管理"},
    {img: require('./components/jw-content/images/jwgl_jsgl@2x.png'), text: "教师管理"},
    {img: require('./components/jw-content/images/jwgl_xsgl@2x.png'), text: "学生管理"},
    {img: require('./components/jw-content/images/jwgl_pfxt@2x.png'), text: "评分系统"},
    {img: require('./components/jw-content/images/jwgl_lsgl@2x.png'), text: "教室管理"},
    {img: require('./components/jw-content/images/jwgl_nrgl@2x.png'), text: "内容管理"}
  ]


}
export  default  new Vuex.Store({
  state

})
