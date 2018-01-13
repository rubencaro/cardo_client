<template>
  <div>
    <ul>
      <li v-for="card in cards_cards" :key="cards_cards.indexOf(card)">
        <card :card="card"/>
      </li>
    </ul>
  </div>
</template>

<script>
import Card from "./Card";
import { mapGetters } from "vuex";

export default {
  name: "Cards",
  components: {
    card: Card
  },
  computed: { ...mapGetters(["cards_cards"]) },
};
</script>

<style>

</style>