<template>
  <common-card
    title="累计用户数"
    value="1,087,503">
    <template>
      <v-chart :option="getOptions()" />
    </template>
    <template v-slot:footer>
      <div class="total-users-footer">
        <span>日同比</span>
        <span class="emphasis">8.73%</span>
        <div class="increase"></div>
        <span class="month">月同比</span>
        <span class="emphasis">35.91%</span>
        <div class="decrease"></div>
      </div>
    </template>
  </common-card>
</template>

<script>
import commonCardMixin from '@/mixins/commonCardMixin'
export default {
  name: 'TotalUsers',
  mixins: [commonCardMixin],
  mounted () {},
  methods: {
    getOptions () {
      return {
        grid: {
          top: 0,
          right: 0,
          bottom: 0,
          left: 0
        },
        xAxis: {
          type: 'value',
          show: false
        },
        yAxis: {
          type: 'category',
          show: false
        },
        series: [{
          type: 'bar',
          stack: '总量',
          data: [200],
          barWidth: 10,
          itemStyle: {
            color: '#45c946'
          }
        }, {
          type: 'bar',
          stack: '总量',
          data: [50],
          itemStyle: {
            color: '#eee'
          }
        }, {
          type: 'custom',
          stack: '总量',
          data: [0],
          renderItem: (params, api) => {
            // 设置位置
            const endPoint = api.coord([200, 0])
            return {
              type: 'group',
              position: endPoint,
              children: [{
                type: 'path',
                shape: {
                  d: 'M1024 255.996 511.971 767.909 0 255.996 1024 255.996z',
                  x: -5,
                  y: -20,
                  width: 10,
                  height: 10,
                  layout: 'cover'
                },
                style: {
                  fill: '#45c946'
                }
              }, {
                type: 'path',
                shape: {
                  d: 'M0 767.909l512.029-511.913L1024 767.909 0 767.909z',
                  x: -5,
                  y: 10,
                  width: 10,
                  height: 10,
                  layout: 'cover'
                },
                style: {
                  fill: '#45c946'
                }
              }]
            }
          }
        }]
      }
    }
  }

}
</script>

<style scoped lang="scss">
.total-users-footer {
  display: flex;
  align-items: center;
  .month {
    margin-left: 10px;
  }
}
</style>
