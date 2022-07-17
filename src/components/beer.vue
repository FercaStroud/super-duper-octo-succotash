<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';

@Component({
  props: {
    info: Object,
  },
  components: {},
})

export default class Beer extends Vue {
  mounted() {
  }

  data() {
    return {
      dialog: false,
    };
  }
}
</script>

<template lang="pug">
  div
    v-card.mx-auto.my-4(shaped elevation="1")
      v-list-item(three-line)
        v-list-item-content
          .text-overline {{ info.contributed_by }}

          v-list-item-title.text-h5 {{ info.name }}
          v-list-item-subtitle {{info.tagline}}

        v-list-item-avatar
          v-img(:src="info.image_url" :alt="info.name" )

      v-card-text
        strong Description
        p {{ (info.description).slice(0, 80) }} [...]

      v-card-actions
        v-btn(
          color="pink"
          text-color="white"
          text
          @click="dialog = true"
        ) View more
      v-chip(label)
        small Since {{ (info.first_brewed).slice(3, 7) }}
    v-dialog(
      transition="dialog-bottom-transition"
      max-width="600"
      fullscreen
      hide-overlay
      v-model="dialog"
    )
      v-card(color="grey lighten-5" )
        v-toolbar(
          color="amber lighten-5"
          flat
        )
          p.my-4 {{ info.name }}
            br/
            small {{ ' ' + info.tagline }}
          v-spacer
          v-btn(
            dark
            @click="dialog = false"
            color="pink"
          ) Close
        v-card-text
          .my-4
            v-img(
              :src="info.image_url"
              height="200"
              contain
            )
            strong Description
            p {{ info.description }}
          v-simple-table(
            dense
            fixed-header
            height="200"
          )
            template(v-slot:default)
              thead
                tr
                  th.text-center Name
                  th.text-center Value
              tbody
                tr
                  td.text-left ID
                  td.text-right {{info.id}}
                tr
                  td.text-left First brewed
                  td.text-right {{ info.first_brewed }}
                tr
                  td.text-left ABV
                  td.text-right {{ info.abv }}
                tr
                  td.text-left IBU
                  td.text-right {{ info.ibu }}
                tr
                  td.text-left Final Gravity
                  td.text-right {{ info.target_fg }}
                tr
                  td.text-left Original Gravity
                  td.text-right {{ info.target_og }}
                tr
                  td.text-left EBC
                  td.text-right {{ info.ebc }}
                tr
                  td.text-left SRM
                  td.text-right {{ info.srm }}
                tr
                  td.text-left PH
                  td.text-right {{ info.ph }}
                tr
                  td.text-left Attenuation
                  td.text-right {{ info.attenuation_level }}
                tr
                  td.text-left Volume
                  td.text-right {{ info.volume["value"] }} {{ info.volume["unit"] }}
                tr
                  td.text-left Boil Volume
                  td.text-right {{ info.boil_volume["value"] }} {{ info.volume["unit"] }}
                tr
                  td.text-left Mash Temp
                  td.text-right {{ info.method.mash_temp[0].temp.value }} {{ info.method.mash_temp[0].temp.unit }} duration {{ info.method.mash_temp[0].duration }}
                tr
                  td.text-left Fermentation
                  td.text-right {{ info.method.fermentation.temp.value }} {{ info.method.fermentation.temp.unit }}
                tr
                  td.text-left Twist
                  td.text-right {{ info.twist }}
          .my-4
            strong Ingredients
            v-divider
            v-chip-group
              v-chip.text-left.text-capitalize(
                v-for="(ingredient, key) in info.ingredients"
                :key="key"
              ) {{key}}
          .my-4
            strong Pairing
            v-divider
            v-chip-group(column)
              v-chip.text-left.text-capitalize(
                v-for="(pairing, key) in info.food_pairing"
                :key="key"
              ) {{pairing}}
          .my-4
            strong Tips
            v-divider
            v-chip-group(column)
              v-chip.text-left.text-capitalize {{info.brewers_tips}}
          .my-4
            strong Contributed by
            v-divider
            v-chip-group(column)
              v-chip.text-left.text-capitalize {{info.contributed_by}}
</template>

<style scoped>
.v-card__title {
  font-size: 1rem;
}

.v-image__image, .v-image__placeholder {
  top: 20px
}
</style>