<template>
  <header>

    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">

      <div class="container">

        <div class="navbar-brand">
          Star Wars
        </div>

        <div class="collapse navbar-collapse navbar-nav">
          
 <div class="search-field">
      <input
          type="text"
          v-model="searchValue"
      >
      <button class="search_btn">
        <i class="material-icons " @click="search(searchValue)">search</i>
      </button>
    </div>
          
        </div>

      </div>

    </nav>

  </header>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'

  export default {
    name: "v-header",
    props: {},
    data() {
      return {
        searchValue: ''
      }
    },
    computed: {
      ...mapGetters([
        'SEARCH_VALUE'
      ])
    },
    methods: {
      ...mapActions([
        'GET_SEARCH_VALUE_TO_VUEX'
      ]),
      search(value) {
        this.GET_SEARCH_VALUE_TO_VUEX(value);
        if (this.$route.path !== '/people') {
          this.$router.push('/people')
        }
      },
      clearSearchField() {
        this.searchValue = ''
        this.GET_SEARCH_VALUE_TO_VUEX();
        if (this.$route.path !== '/people') {
          this.$router.push('people/')
        }
      }
    }
  }
 </script>