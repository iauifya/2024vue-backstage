import { ref } from 'Vue'
export function useAddCount() {
  const count = ref(0);
  const addCount = ()=>{
    count.value = count++;
  }
  return {
    count,
    addCount
  }
}