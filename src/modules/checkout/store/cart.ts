// @ts-nocheck
import { ref, computed } from "vue";
import ApiService from "@/core/services/ApiService";
import { defineStore } from "pinia";

export const useCartStore = defineStore("cart", () => {
  const cart = ref({});


  const get = async () => {
    try {
      const { data } = await ApiService.get(`cart`);
      cart.value = data.data;
    } catch (error) {
      return error;
    }
  };

  const add = async (payload) => {
    try {
      const { data } = await ApiService.post(`cart`, payload);
      cart.value = data.data;
    } catch (error) {
      return error;
    }
  };

  const update = async (payload) => {
    try {
      const { data } = await ApiService.put(`cart/${payload.cart_item_id}`, payload);
      cart.value = data.data;
    } catch (error) {
      return error;
    }
  };

  const remove = async (payload) => {
    try {
      const { data } = await ApiService.delete(`cart/${payload}`, payload);
      cart.value = data.data;
    } catch (error) {
      return error;
    }
  };

  const fetch = async (payload) => {
    cart.value = payload;
  };

  return {
    cart,
    get,
    add,
    update,
    remove,
    fetch
  };
});

