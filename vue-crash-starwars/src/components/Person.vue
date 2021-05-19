<template>
  <div>
    Person {{ $route.params.id }}
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

import store from '@/store'

export default {
  
  name: "v-catalog",
   
    props: {},
    data() {
      return {
        
        
        sortedPerson: []
        
      }
    }, 
      
  async beforeRouteEnter (to, from, next) {
    await store.dispatch('people/get', to.params.id)
    next()
  },
  async beforeRouteUpdate (to, from, next) {
    await store.dispatch('people/get', to.params.id)
    next()
  },
  
  computed: {
    ...mapGetters('people', ['person','SEARCH_VALUE']),
     filteredProducts() {
        if (this.sortedProducts.length) {
          return this.sortedPerson
        } else {
          return this.person
        }
      }, 
    },
}
      /*  methods: {
      ...mapActions([
        'GET_PRODUCTS_FROM_API'
        
      ]),
    
  
    
      sortProductsBySearchValue(value) {
        this.sortedProducts = [...this.person]
        if (value) {
          this.sortedProducts = this.sortedProducts.filter(function (item) {
            return item.name.toLowerCase().includes(value.toLowerCase())
          })
        } else {
          this.sortedProducts = this.person;
        }
      }
    },
    watch: {
      SEARCH_VALUE() {
        this.sortProductsBySearchValue(this.SEARCH_VALUE);
      }
    },
    mounted() {
      this.GET_PRODUCTS_FROM_API()
        .then((response) => {
          if (response.data) {
            
            this.sortProductsBySearchValue(this.SEARCH_VALUE)
          }
        })
    }
  } */

</script>
