<template>
  <div class="col-span-6 bg-gray-100 rounded-xl p-4">
    <div class="flex">
      <div class="flex h-full flex-col">
        <h4 class="text-xl">آدرس های شما</h4>
        <p class="mt-3 h-full grow">
          برای ارسال کالا به آدرس انتخابی شما میتوانید آدرس های خود را اینجا ثبت
          کنید
        </p>
        <div class="mt-3">
          <hx-button @click="active = true">افزودن آدرس جدید</hx-button>
        </div>
      </div>
      <div>
        <hx-icon icon="address" class="w-full h-full"></hx-icon>
      </div>
    </div>
  </div>
  <hx-modal :show="active" title="اطلاعات آدرس" @close="active = !active">
    <Form
      ref="formRef"
      class="h-full space-y-6 grid grid-cols-12 gap-2"
      @submit="create"
    >
      <hx-form-group label=" نشانی پستی" class="col-span-12">
        <Field
          mode="passive"
          name="address"
          v-slot="{ field }"
          rules="required"
          label=" نشانی پستی"
        >
          <hx-textarea
            v-bind="field"
            v-model="form.address"
            placeholder=" نشانی پستی را وارد کنید"
          ></hx-textarea>
        </Field>
        <div class="invalid-feedback d-block">
          <ErrorMessage name="address" />
        </div>
      </hx-form-group>
      <hx-form-group label="  استان" class="col-span-6">
        <Field
          mode="passive"
          name="state"
          v-slot="{ field }"
          rules="required"
          label="  استان"
        >
          <hx-select
            v-bind="field"
            v-model="form.state"
            filterable
            placeholder=" استان"
            value-key="id"
            label="name"
            :options="states"
            @change="handleChangeState"
          >
          </hx-select>
        </Field>
        <div class="invalid-feedback d-block">
          <ErrorMessage name="state" />
        </div>
      </hx-form-group>
      <hx-form-group label="  شهر" class="col-span-6">
        <Field
          mode="passive"
          name="state"
          v-slot="{ field }"
          rules="required"
          label="  شهر"
        >
          <hx-select
            v-bind="field"
            v-model="form.city"
            filterable
            placeholder=" شهر"
            value-key="id"
            label="name"
            :options="cities"
          >
          </hx-select>
        </Field>
        <div class="invalid-feedback d-block">
          <ErrorMessage name="state" />
        </div>
      </hx-form-group>
      <hx-form-group label="پلاک" class="col-span-3">
        <Field
          mode="passive"
          name="building_number"
          v-slot="{ field }"
          rules="required"
          label="پلاک"
        >
          <hx-input v-bind="field" v-model="form.building_number"></hx-input>
        </Field>
        <div class="invalid-feedback d-block">
          <ErrorMessage name="building_number" />
        </div>
      </hx-form-group>
      <hx-form-group label="واحد" class="col-span-3">
        <Field
          mode="passive"
          name="unit"
          v-slot="{ field }"
          rules="required"
          label="واحد"
        >
          <hx-input v-bind="field" v-model="form.unit"></hx-input>
        </Field>
        <div class="invalid-feedback d-block">
          <ErrorMessage name="unit" />
        </div>
      </hx-form-group>
      <hx-form-group label="کد پستی" class="col-span-6">
        <Field
          mode="passive"
          name="postal_code"
          v-slot="{ field }"
          rules="required"
          label="کد پستی"
        >
          <hx-input v-bind="field" v-model="form.postal_code"></hx-input>
        </Field>
        <div class="invalid-feedback d-block">
          <ErrorMessage name="postal_code" />
        </div>
      </hx-form-group>

      <div>
        <hx-button type="submit" :loading="loader">ثبت آدرس</hx-button>
      </div>
    </Form>
  </hx-modal>
</template>

<script setup lang="ts">
// @ts-nocheck
import { onMounted, ref, inject, watch, nextTick } from "vue";
import { ErrorMessage, Field, Form } from "vee-validate";
import ApiService from "@/core/services/ApiService";

const props = defineProps({
  show: {
    type: Boolean,
  },
});

const loader = ref<boolean>(false);
const active = ref<boolean>(false);
const formRef = ref(null);
const states = ref([]);
const cities = ref([]);
const form = ref({
  address: "",
  state: null,
  city: null,
  postal_code: "",
  unit: "",
  building_number: "",
  is_default: 0,
});

const emit = defineEmits(["create"]);

const create = async () => {
  loader.value = true;
  const formData = {
    state_id: form.value.state,
    city_id: form.value.city,
    address: form.value.address,
    postal_code: form.value.postal_code,
    is_default: form.value.is_default,
    building_number: form.value.building_number,
    unit: form.value.unit,
  };
  const { data } = await ApiService.post("user/profile/addresses", formData);

  if (data.success) {
    emit("create");
  }
  await nextTick();
  active.value = false;
  loader.value = false;
};

const handleChangeState = (query) => {
  ApiService.get(`states/${form.value.state}/cities`).then(({ data }) => {
    cities.value = data.data;
  });
};
onMounted(async () => {
  const { data } = await ApiService.get("states");
  states.value = data.data;
});
</script>

<style scoped></style>
