<template>
  <div>
    <Form ref="form" class="h-full space-y-6" @submit="update">
      <div class="flex items-center">
        <hx-otp :length="5" v-model="code"></hx-otp>
        <div mode="out-in" class="flex flex-col justify-center mr-6 w-56">
          <Countdown v-if="!resend" :date="ttl_time" @finish="resend = true" />
          <div
            @click="handleresendCode"
            v-else
            class="inline-block text-xs cursor-pointer text-typo-light font-medium"
          >
            ارسال مجدد
          </div>
        </div>
      </div>
      <div class="text-right mt-4">
        <hx-button type="submit" :loading="loader">ثبت</hx-button>
        <hx-button variant="light" class="mr-1" @click="cancel">لغو</hx-button>
      </div>
    </Form>
  </div>
</template>

<script setup lang="ts">
// @ts-nocheck
import { ref, watchEffect, inject } from "vue";
import ApiService from "@/core/services/ApiService";
import { useUserStore } from "@/modules/user";
import { storeToRefs } from "pinia";
import { ErrorMessage, Field, Form } from "vee-validate";
import Countdown from "@/components/common/countdown.vue";

const props = defineProps({
  data: {
    type: Object,
  },
});

const emit = defineEmits(["update", "close"]);
const store = useUserStore();
const { user } = storeToRefs(store);
const phone = ref<any>(props.data.phone);
const loader = ref<boolean>(false);
const requestForm = ref(null);
const show = inject<any>("show", false);
const code = ref<any>("");
const resend = ref<boolean>(false);
const ttl_time = ref<any>(props.data.ttl_time);
const error = ref<any>(null);

const update = async () => {
  const form = {
    phone: phone.value,
    code: code.value,
  };
  try {
    loader.value = true;
    const { data } = await ApiService.post(
      "user/profile/update/mobile/verify",
      form
    );
    loader.value = false;
    if (data.success) {
      show.value = false;
      emit("update", phone.value);
    } else {
      // formRef.value.setErrors(data.data);
    }
  } catch (error) {
    loader.value = false;
    console.error;
  }
};

const handleresendCode = async () => {
  loader.value = true;
  const form = {
    phone: phone.value,
  };
  try {
    const { data } = await store.authenticate(form);
    ttl_time.value - data.ttl * 1000;
    resend.value = false;
    loader.value = false;
  } catch (error) {
    loader.value = false;
  }
};

watchEffect(() => {
  if (requestForm.value) {
    requestForm.value.setValues({
      phone: phone.value,
    });
  }
});

const cancel = () => {
  emit("close", true);
};
</script>

<style scoped></style>
