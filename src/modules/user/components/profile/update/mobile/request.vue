<template>
  <div>
    <Form ref="formRef" class="h-full space-y-6" @submit="request">
      <hx-form-group label="شماره موبایل">
        <Field
          mode="passive"
          name="phone"
          v-slot="{ field }"
          rules="required"
          label="شماره موبایل"
        >
          <hx-input
            v-bind="field"
            v-model="form.phone"
            placeholder="شماره موبایل را وارد کنید"
          ></hx-input>
        </Field>
        <div class="invalid-feedback d-block">
          <ErrorMessage name="phone" />
        </div>
      </hx-form-group>
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
import { UPDATE_MODEL_EVENT } from "@/core/constants";
const emit = defineEmits(["update", "close", UPDATE_MODEL_EVENT]);
const store = useUserStore();
const { user } = storeToRefs(store);
// const phone = ref<any>(store?.user?.phone);
const loader = ref<boolean>(false);
const formRef = ref(null);
// const ttl_time = ref<any>(0);
const error = ref<any>(null);
const show = inject<any>("show", false);
const form = ref({
  phone: store?.user?.phone,
  ttl_time: 0,
});

const request = async () => {
  const formData = {
    phone: form.value.phone,
  };
  loader.value = true;
  try {
    const { data } = await ApiService.post(
      "user/profile/update/mobile/request",
      formData
    );
    // resend.value = false;
    loader.value = false;
    if (data.success) {
      show.value = true;
      form.value.ttl_time = data.data.ttl * 1000;
      emit(UPDATE_MODEL_EVENT, form.value);
    }
  } catch ({ response }) {
    loader.value = false;
    error.value = response.data.data;
    formRef.value.setErrors(error.value);
  }
};

watchEffect(() => {
  if (formRef.value) {
    formRef.value.setValues({
      phone: form.value.phone,
    });
  }
});

const cancel = () => {
  emit("close", true);
};
</script>

<style scoped></style>
