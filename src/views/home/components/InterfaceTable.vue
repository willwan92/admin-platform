<template>
  <el-table :data="list" style="width: 100%;" :show-header="false">
    <el-table-column label="" min-width="200">
      <template slot-scope="scope">
        {{ `【${scope.row.usename}】${scope.row.msg}` }}
      </template>
    </el-table-column>
    <el-table-column label="" width="100" align="center">
      <template slot-scope="{row}">
        <el-tag :type="row.level">
          {{ row.level }}
        </el-tag>
      </template>
    </el-table-column>
    <el-table-column label="" width="100" align="center" prop="time">
    </el-table-column>
  </el-table>
</template>

<script>
// import { transactionList } from '@/api/remote-search'
export default {
data() {
    return {
      list: [
        {
          time: '2020-12-21 12:12:23',
          level: 'danger',
          msg: '特斯拉去年研发支出接近15亿美元 占营收比例已不到5%',
          usename: 'admin'
        },
        {
          time: '2020-12-21 12:12:23',
          level: 'danger',
          msg: '特斯拉去年研发支出接近15亿美元 占营收比例已不到5%',
          usename: 'admin'
        },
        {
          time: '2020-12-21 12:12:23',
          level: 'danger',
          msg: '特斯拉去年研发支出接近15亿美元 占营收比例已不到5%',
          usename: 'admin'
        },
        {
          time: '2020-12-21 12:12:23',
          level: 'success',
          msg: '特斯拉去年研发支出接近15亿美元 占营收比例已不到5%',
          usename: 'admin'
        }
      ]
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      // transactionList().then(response => {
      //   this.list = response.data.items.slice(0, 8)
      // })
    }
  }
}
</script>

<style>

</style>