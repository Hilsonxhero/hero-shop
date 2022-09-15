// @ts-nocheck
import ApiService from "@/core/services/ApiService";
import { defineStore } from "pinia";
export const useAuthStore = defineStore("auth", {
  state: () => ({
    user: null,
    isLoggedIn: false,
    checked: false,
    errors: null,
  }),
  getters: {
    loggedIn: (state: any) => state.isLoggedIn,
  },
  actions: {
    async init() {
      if (!this.checked)
        try {
          const { data } = await ApiService.get(`user/init`);
          this.user = data.data?.user;
          this.isLoggedIn = data.data?.is_logged_in;
          this.checked = true;
        } catch (error) {
          return error;
        }
    },
    async login(form) {
      try {
        this.checked = false;
        const { data } = await ApiService.post(`user/login/otp`, form);
        this.isLoggedIn = true;
        return data;
      } catch (error) {
        return error;
      }
    },
    async authenticate(form) {
      try {
        const { data } = await ApiService.post(`user/authenticate`, form);
        return data;
      } catch (error) {
        return error;
      }
    },
    async logout() {
      try {
        this.checked = false;
        const { data } = await ApiService.post(`user/logout`);
        this.user = null;
        this.isLoggedIn = false;
      } catch (error) {
        return error;
      }
    },
  },
});
