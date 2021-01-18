<template>
  <div class="search-bx">
    <div class="input-group">
      <input
        v-model="search"
        name="text"
        class="form-control"
        placeholder="Tìm kiếm ..."
        type="text"
        @keyup.enter="submit"
      />
      <span class="input-group-btn">
        <button type="submit" class="site-button" @click="submit">
          <i class="fa fa-search"></i>
        </button>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SearchBox',
  data: () => ({
    search: '',
  }),
  methods: {
    submit() {
      this.$emit('search', this.search)
    },
  },
}
</script>

<style scoped></style>
