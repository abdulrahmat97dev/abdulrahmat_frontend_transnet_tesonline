import Vue from "vue";
import Vuex from "vuex";
import api from "../common/api.services";
// import { Promise } from 'core-js'
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    users: [],
    alert: false,
    alertMessage: ""
  },
  mutations: {
    setUsers: (state, data) => {
      state.users = data;
    },
    setAlert: (state, data) => {
      state.alert = true;
      state.alertMessage = data;
    },
    dismissAlert: state => {
      (state.alertMessage = ""), (state.alert = false);
    }
  },
  getters:{
    getUsers: state => {
            return state.users
        }
  },
  actions: {
    async login(context, payload) {
      try {
        let res = await api.postApi("/login", payload);
        console.log("data res", res);
        if (res.data.meta.status === 200) {
          return Promise.resolve(res.data.data);
        } else {
          throw Error(res.meta.message);
        }
      } catch (error) {
        console.log(error);
        throw error;
      }
    },
    async addUser(context, payload) {
      try {
        let res = await api.postApi("/users", payload);
        if (res.data.meta.status === 200) {
          return Promise.resolve(res.data.data);
        } else if (res.data.meta.status === 401) {
          window.localStorage.clear();
          window.location.reload();
        } else {
          throw Error(res.data.meta);
        }
      } catch (error) {
        console.log(error);
        throw error;
      }
    },
    async getUsers(context) {
      try {
        let res = await api.getApi("/users?page=1&limit=10");
        if (res.data.meta.status === 200) {
          context.commit("setUsers",res.data.data)
          return Promise.resolve(res.data.data);
        } else if (res.data.meta.status === 401) {
          window.localStorage.clear();
          window.location.reload();
        } else {
          throw Error(res.data.meta);
        }
      } catch (error) {
        console.log(error);
        throw error;
      }
    }
  },
  deleteUser(context,payload){
    return new Promise((resolve, reject) => {
      api.deleteApi("/users",payload)
      .then(r => {
        resolve(r)
      })
      .catch(e => {
        reject(e)
      })
    });
  },
  showUser(context,payload){
    return new Promise((resolve, reject) => {
      api.getApi(`/users/payload`)
      .then(r => {
        resolve(r)
      })
      .catch(e=>{
        reject(e)
      })
    });
  },
  updateUser(context,payload){
    return new Promise((resolve, reject) => {
      api.updateApi(`/users/${payload.id}`,payload.data)
      .then(r => {
        resolve(r)
      })
      .catch(e => {
        reject(e)
      })
    });
  }
});
