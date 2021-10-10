<template>
  <q-layout view="lHh Lpr lFf">
    <q-header class="bg-white" bordered>
      <q-toolbar class="constrain">
        <q-toolbar-title class="text-grey-10"> Quasagram </q-toolbar-title>

        <div class="text-grey-10">Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>

    <q-footer class="bg-white" bordered>
      <q-tabs v-model="tab" indicator-color="yellow" class="text-grey-10">
        <q-route-tab to="/" icon="eva-home-outline" />
        <q-route-tab to="/camera" icon="eva-camera-outline" />
      </q-tabs>
    </q-footer>

    <q-page-container class="bg-grey-1">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "MainLayout",

  components: {},
});
</script>
<style lang='sass'>
.q-footer
  .q-tab__icon
    font-size: 30px
</style>
