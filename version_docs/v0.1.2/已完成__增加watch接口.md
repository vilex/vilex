需求：

声明一个 Ref 对象 r，当 r 的值改变时，将 r 的值打印出来

```typecript
const aRef = ref(0)
watch(aRef, val => log(val))
aRef.value = 1
```