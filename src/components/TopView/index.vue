<template>
  <div class="top-view">
    <el-row :gutter="20">
      <el-col :span="6">
        <el-card shadow="hover">
         <total-sales></total-sales>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card shadow="hover">
          <total-orders></total-orders>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card shadow="hover">
          <today-users></today-users>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card shadow="hover">
          <total-users></total-users>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import TotalSales from '@/components/TotalSales'
import TotalOrders from '@/components/TotalOrders'
import TotalUsers from '@/components/TotalUsers'
import TodayUsers from '@/components/TodayUsers'
export default {
  name: 'TopView',
  components: {
    TotalSales,
    TotalOrders,
    TotalUsers,
    TodayUsers
  }
}
</script>

<style scoped>

</style>
