<template>
  <div class="pagination-wrapper">
    <pagination
      v-model="pageSync"
      :per-page="getProp(pagination, 'limit', 0)"
      :records="getProp(pagination, 'total', 0)"
      :options="options"
      @paginate="onPaginate"
    />
  </div>
</template>

<script>
import { CommonMixin } from '@/shared/mixins/CommonMixin'

export default {
  name: 'PaginationCustom',
  mixins: [CommonMixin],
  props: {
    pagination: {
      type: Object,
      default: () => ({
        currentPage: 1,
        limit: 10,
        total: 0,
      }),
    },
  },
  data: () => ({
    options: {
      texts: {
        count: 'Tổng cộng {count}',
      },
    },
  }),
  computed: {
    pageSync: {
      set(val) {
        this.$emit('update:pagination', {
          ...this.pagination,
          currentPage: val,
        })
      },
      get() {
        return this.pagination.currentPage || 1
      },
    },
  },
  methods: {
    onPaginate(current) {
      this.$emit('change', current)
    },
  },
}
</script>

<style scoped></style>
