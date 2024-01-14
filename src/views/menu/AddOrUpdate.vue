<template>
  <!-- 表單 -->
  <form action="">
    <label for="">
      <input v-model="form.name" type="text">資料
    </label>
    <button @click='onSubmit'>立即{{msgText}}}</button>
  </form>
  
</template>

<script setup>
// 方案一 先拆看看
import  { useMenus } from "@/composables/useMenus"
const { allMenus, getAllMenus,form,onSubmit,getMenuInfoById ,msgText } = useMenus()
import { useRoute } from "vue-router"
const route = useRoute()
console.log(route.params.id)

onMounted(()=>{
  getAllMenus()
})

// 方案二 不拆，都寫在views底下
const form = ref({})

const onSubmit = async()=>{
  const { data } = await saveOrUpdate(form)
  console.log(data)
}
onMounted(()=>{
  getForm()
})
</script>

