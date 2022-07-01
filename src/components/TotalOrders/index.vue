<template>
  <common-card
    title="累计订单量"
    value="2,157,420">
    <template>
      <v-chart :option="getOptions()" />
    </template>
    <template v-slot:footer>
      <span>昨日订单量 </span>
      <span class="emphasis">2,000,000</span>
    </template>
  </common-card>
</template>

<script>
import commonCardMixin from '@/mixins/commonCardMixin'
export default {
  name: 'TotalOrders',
  mixins: [commonCardMixin],
  mounted () {
    /*
      * 绘制图列步骤
      * 1、引入 echart
      * 2、编写渲染容器 DOM，添加 width 和 height
      * 3、获取渲染 DOM 对象
      * 4、初始化 echart 对象
      * 5、编写 option 对象
      * 6、调用 setOption 完成渲染
    */
    // const chartDom = document.getElementById('total-orders-chart')
    // const chart = this.$echarts.init(chartDom)
    // chart.setOption({
    //
    // })
  },
  methods: {
    getOptions () {
      return {
        // x轴数据
        xAxis: {
          type: 'category',
          show: false,
          boundaryGap: false
        },
        // y轴数据
        yAxis: {
          show: false
        },
        // 系列 一个系列代表一组数据
        series: [{
          type: 'line',
          // 数据
          data: [620, 432, 220, 534, 790, 430, 220, 320, 532, 320, 834, 690, 530, 220, 620],
          areaStyle: {
            color: 'purple'
          },
          smooth: true,
          lineStyle: {
            width: 0
          },
          itemStyle: {
            opacity: 0
          }
        }],
        grid: {
          top: 0,
          left: 0,
          bottom: 0,
          right: 0
        }
      }
    }
  }

}
</script>

<style scoped>

</style>
