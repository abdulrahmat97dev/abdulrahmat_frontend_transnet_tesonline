<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="600px">
      <template v-slot:activator="{ on }">
        <v-btn color="primary" dark v-on="on" v-if="type === 'add'">Add User</v-btn>
        <v-icon small dark v-else>edit</v-icon>
      </template>
      <v-card :loading="isLoading">
        <v-card-title>
          <span class="headline">{{title}}</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12" sm="6" md="4">
                <v-text-field outlined label="Name" required v-model="user.name"></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-text-field outlined
                  label="Phone"
                  required
                  v-model="user.phone"
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field outlined label="Email" required v-model="user.email"></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field outlined label="Password" type="password" required v-model="user.password"></v-text-field>
              </v-col>
              <v-col cols="12" sm="6">
                <v-select
                  :items="[{text:'Male',value:'Male'},{text:'Female',value:'Female'}]"
                  label="Gender"
                  required
                  outlined
                  v-model="user.gender"
                ></v-select>
              </v-col>
              <v-col cols="12" sm="6">
                <v-textarea outlined label="Address" v-model="user.address"></v-textarea>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="dialog = false">Close</v-btn>
          <v-btn color="blue darken-1" text @click="action">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>
<script>
export default {
    data(){
        return{
            dialog:false,
        }
    },
    props:["user","title","type","action","isLoading"]
}
</script>