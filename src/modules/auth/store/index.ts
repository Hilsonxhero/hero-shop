// // @ts-nocheck
// import { ref, computed } from "vue";
// import ApiService from "@/core/services/ApiService";
// import { defineStore } from "pinia";
// import { useCartStore } from "@/modules/checkout";

// export const useUserStore = defineStore("auth", () => {
//   const cart = useCartStore();
//   const user = ref(null);
//   const isLoggedIn = ref(false);
//   const checked = ref(false);
//   const errors = ref(null);
//   const loggedIn = computed(() => isLoggedIn.value);

//   const init = async () => {
//     if (!checked.value)
//       try {
//         const { data } = await ApiService.get(`user/init`);
//         user.value = data.data?.user;
//         isLoggedIn.value = data.data?.is_logged_in;
//         checked.value = true;
//         cart.fetch(data.data?.cart);
//       } catch (error) {
//         return error;
//       }
//   };

//   const login = async (form) => {
//     try {
//       checked.value = false;
//       const { data } = await ApiService.post(`user/login/otp`, form);
//       isLoggedIn.value = true;
//       return data;
//     } catch (error) {
//       return error;
//     }
//   };

//   const authenticate = async (form) => {
//     try {
//       const { data } = await ApiService.post(`user/authenticate`, form);
//       return data;
//     } catch (error) {
//       return error;
//     }
//   };

//   const logout = async () => {
//     try {
//       checked.value = false;
//       const { data } = await ApiService.post(`user/logout`);
//       user.value = null;
//       isLoggedIn.value = false;
//     } catch (error) {
//       return error;
//     }
//   };

//   return {
//     user,
//     isLoggedIn,
//     checked,
//     errors,
//     init,
//     login,
//     authenticate,
//     logout,
//     loggedIn
//   };
// });
