<template>
    <v-col
            cols="12"
            sm="8"
            md="4"
          >
    <v-card class="elevation-12" color="deep-orange darken-2" shaped dark>
      <v-toolbar color="deep-orange darken-2" dark flat>
        <v-toolbar-title>Welcome</v-toolbar-title>
      </v-toolbar>
      <v-card-text>
        <v-layout row wrap>
        <v-flex lg="2" md="2" sm="4" d-flex pl-4>
        <v-card pa-5 to="/users" color="yellow darken-4">
          <span pl-5>Users</span>
            <v-avatar><v-icon large>person</v-icon></v-avatar>
        </v-card>
        </v-flex>
        </v-layout>
      </v-card-text>
    </v-card>
    </v-col>
</template>
<script>
export default {
  data(){
    return{
    }
  },
  methods:{
  }
};
</script>