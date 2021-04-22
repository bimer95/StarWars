const initialState = () => ({
  results: []
})


export default {

  namespaced: true,

  state: initialState,
 
  mutations: {
    results: (state, results = []) => (state.results = results)
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
  }
}
