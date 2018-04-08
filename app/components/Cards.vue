<template>
  <div>
    <b-btn @click="addCard">Add Card</b-btn>
    <ul>
      <li v-for="(card, key) in cards_list" :key="key">
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
  computed: { ...mapGetters(['cards_list']) },
  methods: {
    addCard() {
      this.$store.dispatch('cards_addCard', {})
    }
  }
};
</script>

<style>

</style>