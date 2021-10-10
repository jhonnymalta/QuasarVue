<template>
  <q-page class="constrain q-pa-md">
    <div class="row q-col-gutter-lg">
      <div class="col-8">
        <q-card class="my-card q-mb-lg">
          <q-item>
            <q-item-section avatar>
              <q-avatar>
                <img src="https://cdn.quasar.dev/img/avatar2.jpg" />
              </q-avatar>
            </q-item-section>

            <q-item-section>
              <q-item-label>Title</q-item-label>
              <q-item-label caption>Subhead</q-item-label>
            </q-item-section>
          </q-item>
          <img src="https://cdn.quasar.dev/img/parallax2.jpg" />
        </q-card>
        <q-card class="my-card">
          <q-item>
            <q-item-section avatar>
              <q-avatar>
                <img src="https://cdn.quasar.dev/img/avatar2.jpg" />
              </q-avatar>
            </q-item-section>

            <q-item-section>
              <q-item-label>Title</q-item-label>
              <q-item-label caption>Subhead</q-item-label>
            </q-item-section>
          </q-item>
          <img src="https://cdn.quasar.dev/img/parallax2.jpg" />
        </q-card>
      </div>
      <div class="col-4">
        <q-card class="my-card">
          <q-item class="fixed">
            <q-item-section avatar>
              <q-avatar size="48px">
                <img src="https://cdn.quasar.dev/img/avatar2.jpg" />
              </q-avatar>
            </q-item-section>

            <q-item-section>
              <q-item-label>Juliedity</q-item-label>
              <q-item-label caption>Brasil </q-item-label>
            </q-item-section>
          </q-item>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "Pagehome",
});
</script>
