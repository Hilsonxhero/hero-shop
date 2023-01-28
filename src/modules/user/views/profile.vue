<template>
  <div class="container">
    <div class="border rounded-xl p-4">
      <h5 class="text-xl">حساب کاربری</h5>

      <div class="grid grid-cols-12 gap-2 mt-4">
        <username></username>
        <mobile></mobile>
        <email></email>
        <password></password>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, computed } from "vue";
import { useUserStore } from "@/modules/user";
import { storeToRefs } from "pinia";
import { useRouter } from "vue-router";
import { HxNotification } from "@/components/base/notification";
import Username from "@/modules/user/components/profile/update/username.vue";
import Mobile from "@/modules/user/components/profile/update/mobile.vue";
import Email from "@/modules/user/components/profile/update/email.vue";
import Password from "@/modules/user/components/profile/update/password.vue";
const store = useUserStore();
const { user } = storeToRefs(store);
const router = useRouter();
const active = ref<boolean>(false);
const selected = ref<any>({});
// const rows = ref([
//   {
//     label: "نام کاربری",
//     key: "username",
//     value: store.user?.username,
//   },

//   {
//     label: "شماره موبایل",
//     key: "phone",
//     value: store.user?.phone,
//   },
//   {
//     label: "ایمیل",
//     key: "email",
//     value: store.user?.email,
//   },
//   {
//     label: "کلمه عبور",
//     key: "password",
//   },
// ]);

const check = (key) => {
  return selected.value.key == key;
};

const openEditUserInfoModal = () => {
  // selected.value = row;
  active.value = true;
};

const closeEditUserInfoModal = (value) => {
  active.value = false;
  HxNotification.success({
    title: "ویرایش مشخصات کاربری",
    message: "عملیات ویرایش با موفقیت انجام شد",
    showClose: true,
    duration: 3000,
    position: "bottom-center",
  });
  store
    .personalInfo()
    .then(() => {})
    .catch((e) => {});
};

const cancelEditUserInfoModal = () => {
  active.value = false;
};

onMounted(() => {});
</script>

<style scoped></style>
