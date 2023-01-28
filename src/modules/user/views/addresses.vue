<template>
  <div class="container">
    <hx-skeleton animated :loading="loading">
      <template #template>
        <div class="grid grid-cols-12 gap-4">
          <div class="col-span-6">
            <hx-skeleton-item variant="card"></hx-skeleton-item>
          </div>
          <div class="col-span-6">
            <hx-skeleton-item variant="card"></hx-skeleton-item>
          </div>
        </div>
      </template>
      <template #default>
        <div class="grid grid-cols-12 gap-2">
          <div
            class="col-span-12 md:col-span-4 border-2 rounded-xl p-4"
            v-for="(address, index) in addresses"
            :key="index"
          >
            <h4 class="text-gray-700 text-sm min-h-[2.5rem] ellipsis-2">
              {{ address.address }}
            </h4>
            <div class="grid grid-cols-12 mt-3">
              <div class="col-span-6 flex items-center mb-3">
                <div>
                  <hx-icon
                    icon="user-circle"
                    class="w-6 h-6 text-gray-500"
                  ></hx-icon>
                </div>
                <div class="text-gray-700 mr-2">{{ address.username }}</div>
              </div>
              <div class="col-span-12 md:col-span-6 flex items-center mb-3">
                <div>
                  <hx-icon icon="phone" class="w-6 h-6 text-gray-500"></hx-icon>
                </div>
                <div class="text-gray-700 mr-2">{{ address.mobile }}</div>
              </div>
              <div class="col-span-6 flex items-center mb-3">
                <div>
                  <hx-icon
                    icon="envelope"
                    class="w-6 h-6 text-gray-500"
                  ></hx-icon>
                </div>
                <div class="text-gray-700 mr-2">{{ address.postal_code }}</div>
              </div>
            </div>
          </div>
          <Create @create="fetch()" />
        </div>
      </template>
    </hx-skeleton>
  </div>
</template>

<script setup lang="ts">
import ApiService from "@/core/services/ApiService";
import { onMounted, ref } from "vue";
import { HxNotification } from "@/components/base/notification";
import Create from "@/modules/user/components/profile/address/create.vue";

interface Address {
  mobile: string;
  address: string;
  username: string;
  postal_code: string;
}

const loading = ref<boolean>(true);
const addresses = ref<Address[]>([]);

const fetch = () => {
  loading.value = true;
  ApiService.get("user/profile/addresses").then(({ data }) => {
    addresses.value = data.data;
    loading.value = false;
  });
};

onMounted(() => {
  fetch();
});
</script>

<style scoped></style>
