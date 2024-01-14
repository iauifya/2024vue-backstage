// api導入
import { getAll,saveOrUpdate,getEditMenuInfo } from "@/api/menus"
 
// 獲取所有菜單
// 外面再用一個函式去包起來
function useMenus(){
  const allMenus = ref([])
  const getAllMenus = async()=>{
    const { data } = await getAll()
    console.log(data)
    if (data.code === "000000"){
      allMenus.value = data.dataList
    }
  }
  
  const form = ref({})
  //表單送出事件
  const onSubmit = async()=>{
    const { data } = await saveOrUpdate(form)
    if(data.code === '000000'){
      ElMessage.success(`menu${msgText.value}成功`)
      router.push({name: "menus"})
    } else {
      ElMessage.error(`menu${msgText.value}失敗`)
    }
    return
  }

  //更新功能：根據id獲取菜單信息
  const getMenuInfoById = async(id)=>{
    // 2.根據id獲取menu信息
    if(!Number(id)){
      isCreate.value  = true
      return
    } else{
      isCreate.value = false
    }
    //通過接口獲取信息
    const { data } = await getEditMenuInfo(id)
    console.log(data)
    if(data.code === '000000'){
      form.value = data.data.menuInfo
    } else {
      ElMessage.error('獲取...信息失敗')
    }
  }

  //1.狀態與提示文本
  const isCreate = ref(true)
  const msgText = computed(() => (isCreate.value ? "創建":"更新"))

  return { allMenus,getAllMenus,form,onSubmit,getMenuInfoById }
}
