<template>
  <div>
    <div>
      <b-btn @click="clicked" variant="secondary" size="sm">+</b-btn>
      <p>{{ card.name }}</p>
    </div>

    <p v-if="visible">
      <card-field-list :card="card"/>
      <card-input :card="card"/>
    </p>
  </div>
</template>

<script>
import CardFieldList from "./CardFieldList";
import CardInput from "./CardInput";

export default {
  name: "Card",
  components: {
    "card-field-list": CardFieldList,
    "card-input": CardInput
  },
  props: ["card"],
  data() {
    //local data
    return {
      visible: false
    };
  },
  methods: {
    clicked(e) {
      this.visible = !this.visible;
      if (this.visible) {
        e.target.textContent = "-";
      } else {
        e.target.textContent = "+";
      }
    }
  }
};
</script>

<style>

</style>