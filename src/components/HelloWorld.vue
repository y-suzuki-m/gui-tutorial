<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <v-img
          :src="require('../assets/logo.svg')"
          class="my-3"
          contain
          height="200"
        />
      </v-col>

      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">
          Qmonus GUI開発チュートリアル
        </h1>

        <p class="subheading font-weight-regular">
          チュートリアルの内容は下記を参照ください。
          <br>
          <a
            href="https://developer.qmonus.net/document/casval/tutorial"
          >Tutorial page</a>
        </p>
      </v-col>
    </v-row>
    <v-row class="text-center">
      <v-col>
        <v-btn @click=getHealthCheck()>GET HealthCheck</v-btn>
        <p class="subheading font-weight-regular" v-show="Object.keys(res_data).length">
          {{res_data}}
        </p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

export default {
  name: 'TOP',

  data: () => ({
    res_data : {}
  }),
  methods: {
    getHealthCheck: function () {
      this.$api.get("https://geoapi.heartrails.com/api/json", {
        params: {
          method: "getPrefectures",
          area: "関東"
        }
      })
        .then(response => {
          this.res_data = response.data
        })
        .catch(err => {
          console.error(err)
        })
    }
  }
}
</script>
