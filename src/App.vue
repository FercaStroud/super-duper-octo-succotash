<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';

@Component({
  components: {
  },
})

export default class App extends Vue {

  mounted() {
  }

}
</script>


<template lang="pug">
  v-app
    v-navigation-drawer(
      app
      temporary
      v-model="$store.state.drawer"
    )
      v-container.mb-6()
        v-img(
          src="./assets/logo.webp"
        )


    v-app-bar(
      app
      color="amber lighten-3"
      dense
      flat
    )
      v-toolbar-title Beers
      v-spacer
      v-app-bar-nav-icon#nav-icon(@click="$store.state.drawer = !$store.state.drawer")

    v-main
      v-container(fluid)
        router-view

    v-footer(app)

</template>

<style scoped>
#app{
  background-color: #f7f7f8;
}
.v-btn--icon.v-size--default .v-icon{
  font-size: 18px;
}
</style>