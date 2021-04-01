<template>
  <div>
    <el-row style="margin-bottom: 10px">
      <el-col span="12">
        <el-button type="primary">添加</el-button>
      </el-col>
      <el-col span="12" style="text-align: right; line-height: 36px;">
        管理主机限制：
        <el-radio-group v-model="hostRestricting">
          <el-radio-button label="1">开启</el-radio-button>
          <el-radio-button label="0">关闭</el-radio-button>
        </el-radio-group>
      </el-col>
    </el-row>
    <el-table :data="tableData" border>
      <el-table-column width="150px" label="可信主机IP" prop="ip">
      </el-table-column>
      <el-table-column label="协议名称" prop="time">
      </el-table-column>
      <el-table-column label="TCP端口" prop="time">
      </el-table-column>
      <el-table-column label="备注" prop="time">
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button
            size="mini"
            @click="handleEdit(scope.$index, scope.row)"
          >编辑</el-button>
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)"
          >删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      hostRestricting: 1,
      tableData: []
    }
  },
  methods: {
    handleEdit() {

    },
    handleDelete() {

    }
  }
}
</script>
