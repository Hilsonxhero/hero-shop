// @ts-nocheck
import ApiService from "@/core/services/ApiService";

import { defineStore } from "pinia";
export const useProductStore = defineStore("product", {
  state: () => ({ config: {}, banners: {} }),
  getters: {
    doubleCount: (state: any) => state.count,
  },
  actions: {
    async fetchConfig() {
      try {
        const { data } = await ApiService.get(`init`);
        this.config = data.data.config;
        this.banners = data.data.banners;
      } catch (error) {
        return error;
      }
    },
  },
});
