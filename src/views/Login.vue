<template>
    <v-col
            cols="12"
            sm="8"
            md="4"
          >
    <v-card class="elevation-12" color="light-blue darken-3" shaped dark :loading="isLoading">
      <v-toolbar color="light-blue darken-3" dark flat>
        <v-toolbar-title>Login</v-toolbar-title>
      </v-toolbar>
      <v-card-text>
        <v-form>
          <v-text-field
          outlined label="Email"  prepend-icon="email" type="text" v-model="email"/>
          <v-text-field
            outlined
            label="Password"
            prepend-icon="lock"
            type="password"
            v-model="password"
          />
        </v-form>
      </v-card-text>
      <v-card-actions>
        <v-btn color="white" block outlined @click="login">Login</v-btn>
      </v-card-actions>
    </v-card>
    </v-col>
</template>
<script>
export default {
  data(){
    return{
      email:'',
      password:'',
      isLoading:false
    }
  },
  methods:{
    async login(){
      try {
        let payload={
        email:this.email,
        password:this.password
      }
        this.isLoading=true
        let res = await this.$store.dispatch("login",payload)
        console.log("login res",res)
        this.$auth.setToken(res.token)
        this.$router.push("/users")
        this.isLoading=false
      } catch (error) {
        console.log("login error",error)        
      }
    }
  }
};
</script>