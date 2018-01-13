<template>
  <div id="log">
    <ul v-for="line in logs" :key="logs.indexOf(line)">
      <li>{{ line }}</li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Log',
  computed: { ...mapGetters(['logs']) }
}
</script>

<style>

</style>