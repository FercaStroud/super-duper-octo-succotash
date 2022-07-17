<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import {Action, namespace} from 'vuex-class';
import axios from 'axios';
import Beer from "@/components/beer.vue";

const bStore = namespace('beers');

@Component({
  components: {
    Beer
  },
})
export default class Home extends Vue {
  @bStore.Action loadBeers;
  @bStore.State beers;
  @bStore.State isLoading;

  mounted() {
      this.getBeers();
  }

  async getBeers(): Promise<void> {
    this.loadBeers(this.params);
  }

  setParams(){
    this.getBeers();
  }

  clearParams(){
    this.filter = false;
    this.showFilters = false;
    this.params = {
      page: 1,
      abv_gt: 0,
      abv_lt: 0,
      ibu_gt: 0,
      ibu_lt: 0,
      ebc_gt: 0,
      ebc_lt: 0,
      beer_name: '',
      yeast: '',
      hops: '',
      malt: '',
      food: '',
    };
    this.getBeers();
  }

  data() {
    return {
      filter: false,
      showFilters: false,
      params: {
        page: 1,
        abv_gt: 0,
        abv_lt: 0,
        ibu_gt: 0,
        ibu_lt: 0,
        ebc_gt: 0,
        ebc_lt: 0,
        beer_name: '',
        yeast: '',
        hops: '',
        malt: '',
        food: '',
      }
    };
  }
}
</script>

<template lang="pug">
v-container.mb-6()
    v-row(align='center')
      v-col(
        sm="12"
      )
        v-btn(color="pink" dark @click="showFilters = !showFilters") Show /Hide Filters (PARAMS)
    v-row(align='center' v-if="showFilters")
      v-col(
        sm="12"
        md="3"
      )
        v-text-field(
          label="Beer Name"
          filled
          v-model="params.beer_name"
          type="text"
        )
      v-col(
        sm="12"
        md="3"
      )
        v-text-field(
          label="Yeast"
          filled
          v-model="params.yeast"
          type="text"
        )
      v-col(
        sm="12"
        md="3"
      )
        v-text-field(
          label="Hops"
          filled
          v-model="params.hops"
          type="text"
        )
      v-col(
        sm="12"
        md="3"
      )
        v-text-field(
          label="Malt"
          filled
          v-model="params.malt"
          type="text"
        )
      v-col(
        sm="6"
        md="4"
        lg="2"
      )
        v-text-field(
          label="ABV GT"
          filled
          v-model="params.abv_gt"
          type="number"
        )
      v-col(
        sm="6"
        md="4"
        lg="2"
      )
        v-text-field(
          label="ABV LT"
          filled
          v-model="params.abv_lt"
          type="number"
        )
      v-col(
        sm="6"
        md="4"
        lg="2"
      )
        v-text-field(
          label="IBU GT"
          filled
          v-model="params.ibu_gt"
          type="number"
        )
      v-col(
        sm="6"
        md="4"
        lg="2"
      )
        v-text-field(
          label="IBU LT"
          filled
          v-model="params.ibu_lt"
          type="number"
        )
      v-col(
        sm="6"
        md="4"
        lg="2"
      )
        v-text-field(
          label="EBC GT"
          filled
          v-model="params.ebc_gt"
          type="number"
        )
      v-col(
        sm="6"
        md="4"
        lg="2"
      )
        v-text-field(
          label="EBC LT"
          filled
          v-model="params.ebc_lt"
          type="number"
        )
      v-col(
        sm="12"
        md="6"
        lg="6"
      )
        v-btn(
          color="green"
          block
          dark
          @click="clearParams()"
        ) Clear Filters
      v-col(
        sm="12"
        md="6"
        lg="6"
      )
        v-btn(
          color="green"
          block
          dark
          @click="setParams(); filter = true"
        ) Filter
    v-row(align='center' v-if="!filter" )
      v-col(
        sm="12"
      )
        .text-center
          v-pagination(
            v-model="params.page"
            :length="13"
            :total-visible="7"
            @input="setParams"
          )
    v-row(
      align='center'
      v-if="isLoading"
    )
      v-col(
        sm="12"
        md="3"
        lg="4"
        xl="6"
        v-for="n in 6"
        :key="n"
      )
        template
          v-sheet.pa-3(
            color="grey lighten-5"
          )
            v-skeleton-loader.mx-auto(type="card")
    v-row(v-else align='center')
      v-col(
        sm="12"
        md="3"
        lg="4"
        xl="6"
        v-for="(beer,key) in beers"
        :key="key"
      )
        beer(
          :info="beer"
        )

    v-row(align='center'  v-if="!filter")
      v-col(
        sm="12"
      )
        .text-center
          v-pagination(
            v-model="params.page"
            :length="13"
            :total-visible="7"
            @input="setParams"
          )
</template>