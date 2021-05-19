const initialState = () => ({
  results: []
})


export default {

  namespaced: true,

  state: initialState,
 
  mutations: {
    results: (state, results = []) => (state.results = results)
  },
  updateSearchString(state, searchString){
    state.searchString = searchString;
},
 
  actions: {
    async list ({ commit }, page = 1) {
     
      const response = await fetch('https://swapi.dev/api/people')
      if (response.ok) {
   
        const { results } = await response.json()
       
        commit('results', results)
      } else {
       
        console.error(response)
      }
    }
  },
  async search ({commit, state, dispatch}){
    commit ('clearStateCharacters');
    commit('clearIsLoaded');
   try{
       const searched = await fetch(`https://swapi.co/api/people/?search=${state.searchString}`);
       if (!searched.ok) {
           commit('updateFetchError', true);
       }
       const result = await searched.json();
       dispatch('getSpecies', result.results);
   }  catch (e) {
      console.log(e)
   }
},
setSearchString({commit}, searchString) {
   commit('updateSearchString', searchString);
},

}
