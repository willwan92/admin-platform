<template>
  <el-table :data="list" class="event-table" :show-header="false">
    <el-table-column label="接口名称" prop="if_name">
      <template slot-scope="{row}">
        <i class="iconfont iconinterface-using"></i>
        {{ `${row.if_name}（${row.status}）` }}
      </template>
    </el-table-column>
    <el-table-column label="接口速率" min-width="200" align="right">
      <template slot-scope="scope">
        {{ `发送速率：${scope.row.sent}；接收速率：${scope.row.received}` }}
      </template>
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
          status: '已连接',
          received: '15bps',
          sent: '103bps',
          if_name: 'ge1'
        },
        {
          status: '已连接',
          received: '15bps',
          sent: '103bps',
          if_name: 'ge2'
        },
        {
          status: '未连接',
          received: '15bps',
          sent: '103bps',
          if_name: 'ge3'
        },
        {
          status: '未连接',
          received: '15bps',
          sent: '103bps',
          if_name: 'ge4'
        },
        {
          status: '已连接',
          received: '15bps',
          sent: '103bps',
          if_name: 'ge5'
        },
        {
          status: '未连接',
          received: '15bps',
          sent: '103bps',
          if_name: 'ge6'
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

<style lang="scss" scoped>
.event-table {
  width: 100%;
  height: 300px;
  overflow: hidden;
  &:hover {
    overflow: auto;
  }
}
</style>
