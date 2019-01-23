<template>
  <div class="hamburger">
    <nav role="navigation">
      <div id="menuToggle">
        <input type="checkbox">
        <span></span>
        <span></span>
        <span></span>
        <ul id="menu">
          <select v-model="selected">
            <option v-for="option in options" v-bind:value="option.code" v-bind:key="option.code">{{ option.name }}</option>
          </select>
          <!-- <span>Selected: {{ selected }}</span> -->
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Hamburger",
  data() {
    return {
      selected: 'A',
    options: [ 
{"name": "Argentina", "code": "AR"}, 
{"name": "Australia", "code": "AU"}, 
{"name": "Belgium", "code": "BE"}, 
{"name": "Brazil", "code": "BR"}, 
{"name": "Bulgaria", "code": "BG"}, 
{"name": "Canada", "code": "CA"}, 
{"name": "Chile", "code": "CL"}, 
{"name": "China", "code": "CN"}, 
{"name": "Colombia", "code": "CO"}, 
{"name": "Croatia", "code": "HR"}, 
{"name": "Czech Republic", "code": "CZ"}, 
{"name": "Denmark", "code": "DK"}, 
{"name": "Finland", "code": "FI"}, 
{"name": "France", "code": "FR"}, 
{"name": "Germany", "code": "DE"}, 
{"name": "Greece", "code": "GR"}, 
{"name": "Greenland", "code": "GL"}, 
{"name": "Hungary", "code": "HU"}, 
{"name": "Iceland", "code": "IS"}, 
{"name": "India", "code": "IN"}, 
{"name": "Ireland", "code": "IE"}, 
{"name": "Israel", "code": "IL"}, 
{"name": "Italy", "code": "IT"}, 
{"name": "Japan", "code": "JP"}, 
{"name": "Luxembourg", "code": "LU"}, 
{"name": "Mexico", "code": "MX"}, 
{"name": "Netherlands", "code": "NL"}, 
{"name": "Norway", "code": "NO"}, 
{"name": "Poland", "code": "PL"}, 
{"name": "Portugal", "code": "PT"}, 
{"name": "Russian Federation", "code": "RU"}, 
{"name": "Serbia", "code": "RS"}, 
{"name": "Slovenia", "code": "SI"}, 
{"name": "South Africa", "code": "ZA"}, 
{"name": "Spain", "code": "ES"}, 
{"name": "Swaziland", "code": "SZ"}, 
{"name": "Sweden", "code": "SE"}, 
{"name": "Switzerland", "code": "CH"}, 
{"name": "Turkey", "code": "TR"}, 
{"name": "Ukraine", "code": "UA"}, 
{"name": "United Kingdom", "code": "GB"}, 
{"name": "United States", "code": "US"}, 
{"name": "Uruguay", "code": "UY"}
]
    };
  }
};
</script>

<style lang="scss" scoped>
@import "./src/style/components/components.hamburger";
</style>

