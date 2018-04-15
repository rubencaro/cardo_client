<template>
  <div class="container-fluid">
    <h1>Cardo</h1>
    <alerts/>
    <cards/>
    <log/>
  </div>
</template>

<script>
import Log from './components/Log'
import Cards from './components/Cards'
import Alerts from './components/Alerts'

export default {
  name: 'Cardo',
  components: {
    'log': Log,
    'alerts': Alerts,
    'cards': Cards
  }
}
</script>

<style>

</style>
