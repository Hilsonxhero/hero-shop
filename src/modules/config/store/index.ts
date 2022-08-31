// @ts-nocheck
import ApiService from "@/core/services/ApiService";

import { defineStore } from "pinia";
export const useConfigStore = defineStore("counter", {
  state: () => ({ config: {} }),
  getters: {
    doubleCount: (state: any) => state.count,
  },
  actions: {
    async fetchConfig() {
      try {
        const { data } = await ApiService.get(`init`);
        console.log("wwwww", data.data);
        this.config = data.data;
      } catch (error) {
        return error;
      }
    },
  },
});
