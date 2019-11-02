<template>
  <v-app>
     <v-content>
      <v-container
        class="fill-height"
        fluid
      >
        <v-row
          align="center"
          justify="center"
        >
            <router-view/>
        </v-row>
      </v-container>
    </v-content>
    <v-snackbar
      v-model="alert"
      :timeout="5000"
    >
      {{ alertMessage }}
      <v-btn
        color="blue"
        text
        @click="dismissAlert"
      >
        Close
      </v-btn>
    </v-snackbar>
  </v-app>
</template>

<script>
import {
  mapGetters,
  mapState,
  mapActions,
  mapMutations} from 'vuex'
export default {
  name: 'App',
  data: () => ({
    
  }),
  computed: {
    ...mapState([
      'alert',
      'alertMessage'
    ]),
  },
  methods:{
    ...mapMutations([
      'dismissAlert',
    ]),
  }
};
</script>
