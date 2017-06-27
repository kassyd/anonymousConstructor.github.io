import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/page.home.vue'
import form from '@/components/form.vue'
import institutionPerformance from '@/components/institutionPerformance.vue'
import AMPerformance from '@/components/AMPerformance.vue'
import institutionProfit from '@/components/institutionProfit.vue'
import branchScore from '@/components/branchScore.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: home,
      children: [
        {
          path: '/home/institutionPerformance',
          component: institutionPerformance,
          name: '机构业绩统计'
        },
        {
          path: '/home/AMPerformance',
          component: AMPerformance,
          name: '客户经理业绩统计'
        },
        {
          path: '/home/form',
          component: form,
          name: '客户经理定级统计'
        },
        {
          path: '/home/branchScore',
          component: branchScore,
          name: '分行得分统计'
        },
        {
          path: '/home/form5',
          component: form,
          name: '分行部门得分统计'
        },
        {
          path: '/home/form6',
          component: form,
          name: '总行客户经理得分统计'
        },
        {
          path: '/home/institutionProfit',
          component: institutionProfit,
          name: '机构收益'
        }
      ]}
  ]
})
