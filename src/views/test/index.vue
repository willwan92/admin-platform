<template>
  <div class="app-container">
    测试
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  name: 'Test'
})
export default class extends Vue {
  private listLoading = true

  created() {
    this.getList()
  }

  private async getList() {
    this.listLoading = true
    // Just to simulate the time of the request
    setTimeout(() => {
      this.listLoading = false
    }, 0.5 * 1000)
  }
}
</script>
