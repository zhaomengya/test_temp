<template>
  <div>
    <City-Header></City-Header>
    <City-Search></City-Search>
    <City-List></City-List>
  </div>
</template>

<script>
import CityHeader from "./compnents/Header.vue";
import CitySearch from "./compnents/Search.vue";
// eslint-disable-next-line no-unused-vars
import CityList from "./compnents/List.vue";
export default {
  name: "City",
  components: {
    CityHeader,
    CitySearch,
    CityList
  }
};
</script>
<style lang="stylus" scope></style>
