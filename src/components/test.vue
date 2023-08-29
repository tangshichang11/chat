<script setup>
import { onMounted, ref } from 'vue'
import { useSysStore } from '../stores/sys'
import SideBar2 from '../components/SideBar2.vue'
const sysStore = useSysStore()

const size = ref(document.body.clientWidth <= 640 ? document.body.clientWidth - 16 : 350)
onMounted(() => {
  window.onresize = () => {
    return (() => {
      size.value = document.body.clientWidth <= 640 ? document.body.clientWidth - 16 : 350
      if (document.body.clientWidth <= 640) {
        sysStore.sideBar = false
      }
    })()
  }
})
</script>

<template>
<!--  <el-button type="text" @click="sysStore.outerVisible = true">点击打开外层 Dialog</el-button>-->

  <el-dialog title="外层 Dialog" v-model="sysStore.outerVisible">
    <el-dialog
            width="30%"
            title="内层 Dialog"
            v-model="sysStore.innerVisible"
            append-to-body>
    </el-dialog>
    <div slot="footer" class="dialog-footer">
      <el-button @click="sysStore.outerVisible = false">取 消</el-button>
      <el-button type="primary" @click="sysStore.innerVisible = true">打开内层 Dialog</el-button>
    </div>
  </el-dialog>
</template>
