import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    events: null,
    images: null
  },
  mutations: {
    setEvents(state, e) {
      state.events = e;
    },
    setImages(state, i){
      state.images = i;
    }
  },
  getters: {
    getAllEvents: state => state.events,
    getAllImages: state => state.images,
    getEventById: state => id => state.events[id],
    getEventByName: state => name => state.events[name]
  },
  actions: {
    fetchEvents: ({ commit }) => {
      axios
      .get(
        "https://app.ticketmaster.com/discovery/v2/events.json?countryCode=BE&apikey=wuCndb95veCDmDchOoorgsazH2KMDzrc",
        {
          // headers: {
          //   "Access-Control-Allow-Origin": "*"
          // }
        }
      )
      .then(response => {
        commit('setEvents', response.data._embedded.events.slice(0,8))
      });
      
    },
  }
});
