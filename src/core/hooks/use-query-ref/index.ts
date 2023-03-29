
import { ref, onMounted, watch } from 'vue'
import { useRouter, useRoute } from 'vue-router'

export default function useQueryFilters() {
    const router = useRouter()
    const filters = ref({})
    function setFilters(newFilters: any) {
        const newQuery = Object.assign({}, filters.value);


        router.replace({ query: newQuery });
        filters.value = {}
    }
    return {
        queryFilters: filters,
        setFilters,
    };
}
