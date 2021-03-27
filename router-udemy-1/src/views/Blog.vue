<template>
  <div>
      <Titulo texto="Titulo de mi Blog"/>
  <!-- <button @click="consumirApi">Consumir API</button> -->

  <div v-for="item in arrayBlog" :key="item.id">
      {{ item.title }}
  </div>
  </div>
</template>

<script>
import Titulo from '../components/Titulo'
export default {
    components:{
        Titulo
    },
    data() {
        return {
            arrayBlog: []
        }
    },
    methods: {
        async consumirApi(){
            try {
                const data = await fetch('https://jsonplaceholder.typicode.com/posts')
                const array = await data.json()

                this.arrayBlog = array

                console.log(array)
            } catch (error) {
                console.log(error)
            }
        }
    },
    created() {
        this.consumirApi()
    },
}
</script>

<style>

</style>