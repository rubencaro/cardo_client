<template>
  <div>
    <b-alert v-for="alert in alerts_list"
             :key="alerts_list.indexOf(alert)"
             show dismissible @dismissed="remove(alert)"
             :variant="alert.level">
      {{ alert.msg }}
    </b-alert>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Alerts",
  computed: { ...mapGetters(["alerts_list"]) },
  methods: {
    remove(alert) {
      this.$store.dispatch("alerts_removeAlert", alert);
    }
  }
};
</script>

<style>

</style>