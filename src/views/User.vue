<template>
  <v-col cols="12" sm="8" md="8">
    <v-card>
      <v-toolbar color="deep-orange darken-2" dark flat>
        <v-icon>arrow_left</v-icon>
        <v-toolbar-title>Users</v-toolbar-title>
      </v-toolbar>
      <v-card-text>
        <div>
          <form-user
            :user="user"
            :title="'Add User'"
            :type="'add'"
            :action="addUser"
            :isLoading="isLoading"
          />
        </div>
        <div>
          <v-data-table
            :headers="headers"
            :items="getUsers"
            :page.sync="page"
            :items-per-page="itemsPerPage"
            hide-default-footer
            class="elevation-1"
            @page-count="pageCount = $event"
            :loading="loadingTabel"
          >
            <template v-slot:item.action="{ item }">
              <v-icon small class="mr-2" @click="editItem(item)">edit</v-icon>
              <v-icon small @click="deleteItem(item)">delete</v-icon>
            </template>
          </v-data-table>
          <div class="text-center pt-2">
            <v-pagination v-model="page" :length="pageCount"></v-pagination>
          </div>
        </div>
      </v-card-text>
    </v-card>
  </v-col>
</template>
<script>
import { mapGetters, mapState, mapActions, mapMutations } from "vuex";
export default {
  data() {
    return {
      user: {
        name: "",
        email: "",
        phone: "",
        password: "",
        gender: "",
        is_active: 0,
        address: ""
      },
      isLoading: false,
      page: 1,
      pageCount: 0,
      itemsPerPage: 10,
      headers: [
        {
          text: "Name",
          align: "left",
          sortable: false,
          value: "name"
        },
        { text: "Email", value: "email" },
        { text: "Phone", value: "phone" },
        { text: "Active", value: "is_active" },
        { text: "Action", value: "action" }
      ],
      users: [],
      loadingTabel: false
    };
  },
  created() {
    this.loadingTabel = true;
    this.$store
      .dispatch("getUsers")
      .then(r => {
        this.loadingTabel = false;
      })
      .catch(e => {
        this.loadingTabel = false;
        //   if(e.status)
        console.log("res error us", e);
        this.setAlert(`Error : ${e}`);
      });
  },
  computed: {
    ...mapGetters(["getUsers"])
  },
  components: {
    FormUser: () => import("../components/FormUser.vue")
  },
  methods: {
    ...mapMutations(["setAlert"]),
    async addUser() {
      try {
        this.isLoading = true;
        let res = await this.$store.dispatch("addUser", this.user);
        console.log("res add", res);
        this.isLoading = false;
      } catch (error) {
        console.log("res add error", error);
        this.isLoading = false;
        this.setAlert(`Error : ${error}`);
      }
    },
    deleteItem(item) {
      this.$store
        .dispatch("deleteUser", item.id)
        .then(r => {
          this.setAlert("Success Deleted");
        })
        .catch(e => {
          this.setAlert(`Failed : ${e}`);
        });
    }
  }
};
</script>