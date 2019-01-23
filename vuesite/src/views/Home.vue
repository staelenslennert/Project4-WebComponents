<template>
  <div class="home">
    <div class="header-img">
      <div class="layer">
        <div class="header-content">
          <h1 class="header-title">Event catalog</h1>
          <form action="#selectbar">
            <button class="header-button">Watch the latest events</button>
          </form>
        </div>
      </div>
    </div>

    <div class="selectbar" id="selectbar">
      <div class="selectbar-list">
        <form class="selectbar-form" action="#selectbar">
          <button v-for="(events, e) in this.getAllEvents" :key="e.name" class="selectbar-list__item" v-on:click="activetab=events.name" v-bind:class="[ activetab === events.name ? 'active' : '' ]">{{events.name}}</button>
        </form>
      </div>

      <!-- <div class="content" v-for="(events, e) in this.getAllEvents" :key="e.name"> -->
      <div id="content">
        <div v-for="(events, e) in this.getAllEvents" :key="e.name" v-if="activetab === events.name">
          <div class="festival-description">
            <img :src="events.images[9].url" class="festival-image"/>
            <div class="festival-info">
              <h2 class="festival-info__title">{{events.name}}</h2>
              <p class="festival-info__text">Tickets for sale from {{events.sales.public.startDateTime.slice(0,10)}} to {{events.sales.public.endDateTime.slice(0,10)}}.</p>
              <p class="festival-info__text">A {{events.classifications[0].segment.name}} festival<br/> 
                                            Genre: {{events.classifications[0].genre.name}} <br/>
                                            Subgenre: {{events.classifications[0].subGenre.name}} <br/>
                                            Promoter: {{events.promoter.name}} <br/>
                                            Buy tickets: <a :href="events.url" target="_blank">{{events.url}}</a>  <br/>
                                            </p>
              <form action="#festival-info">
                <button class="festival-info__button">View festival info <span class="festival-info__button-icon"><i class="fas fa-arrow-right"></i></span></button>
              </form>
            </div>
          </div>

          <div id="festival-info" class="info">
            <div class="info-blok price">
              <h3 class="info-blok-title">Ticket price</h3>
              <p class="info-blok-price">
                €
                <span class="info-blok-price__price">{{events.priceRanges[0].min}}</span>
                <span class="info-blok-price__slash"> /</span>
                €
                <span class="info-blok-price__price">{{events.priceRanges[0].max}}</span>
              </p>
              
              <h4 class="info-blok__more">Min price / Max price</h4>
            </div>

            <div class="info-blok blok-venue">
              <h3 class="info-blok-title">Venue info</h3>
              <span class="info-blok-venue__icon">
                <i class="fas fa-map-marker-alt"></i>
              </span>

              <h4 class="info-blok__more">MORE INFO</h4>
            </div>
            
            <div class="info-blok more">
              <h3 class="info-blok-title">Date</h3>
              <p class="info-blok-price">
                <span class="info-blok-price__date">{{events.dates.start.localDate}}</span>
              </p>
              <h4 class="info-blok__more">START DATE</h4>
            </div>
          </div>

          <div class="venue">
            <span class="venue-sortup__icon">
              <i class="fas fa-sort-up"></i>
            </span>
            <div class="venue-map">
              <mgl-map class="c-map"
                :accessToken="accessToken"
                :mapStyle="mapStyle"
                :center="[events._embedded.venues[0].location.longitude, events._embedded.venues[0].location.latitude]"
              >
                <mgl-marker :coordinates="[events._embedded.venues[0].location.longitude, events._embedded.venues[0].location.latitude]" color="red"></mgl-marker>
              </mgl-map>
            </div>
            <div class="venue-info">
              <div class="venue-info__box">
                <p class="venue-info__box-address">{{events._embedded.venues[0].name}}</p>
                <p class="venue-info__box-address">{{events._embedded.venues[0].address.line1}}</p>
                <p class="venue-info__box-address">{{events._embedded.venues[0].city.name}}, {{events._embedded.venues[0].postalCode}}</p>
                <p class="venue-info__box-address">{{events._embedded.venues[0].country.name}}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Hamburger from "@/components/Hamburger.vue";
import { MglMap, MglMarker } from "vue-mapbox";
import "mapbox-gl/dist/mapbox-gl.css";

export default {
  name: "home",
  components: {
    Hamburger,
    MglMap,
    MglMarker
  },
  data() {
    return {
      test: "testje",
      eventnames: null,
      rate: 8,
      events: [],
      activetab: 1,
      image: null,
      coordinates: [null, null],
      accessToken:
        "pk.eyJ1IjoibGVubmVydDAzIiwiYSI6ImNqbmx0OXZhcjAyc3UzcG44bGM3a3NweG4ifQ.OpRCGQ1t6FGXeop4JBqXiw",
      mapStyle: "mapbox://styles/lennert03/cjpyequny3e8d2sqlu72l6y1c", // your map style
      center : [null, null],
      zoom: 9
    };
  },
  computed: {
    getAllEvents() {
      return this.$store.getters.getAllEvents;
    }
  },
  methods: {
    handleClick(newTab) {
      this.currentTab = newTab;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "./src/style/components/components.header";
@import "./src/style/components/components.selectbar";
@import "./src/style/components/components.festivaldescription";
@import "./src/style/components/components.festivalinfo";
@import "./src/style/components/components.venueinfo";
</style>
