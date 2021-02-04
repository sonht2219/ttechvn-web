<template>
  <ul class="list-inline" :class="bindClazz">
    <slot name="li"></slot>
    <template v-for="(social, i) in socials">
      <li :key="i">
        <a
          :href="getProp(social, 'url')"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img v-if="icon === 'iconFFF'" :src="social.iconFFF" atl="icon" />
          <img v-else :src="social.iconRRR" atl="icon" />
        </a>
      </li>
    </template>
  </ul>
</template>

<script>
import { CommonMixin } from '@/shared/mixins/CommonMixin'
import { mapGetters } from 'vuex'
import { CONTACT } from '@/store'
export default {
  name: 'Socials',
  mixins: [CommonMixin],
  props: {
    clazz: {
      type: Array,
      default: () => [],
    },
    icon: {
      type: String,
      default: () => 'iconFFF',
    },
  },
  computed: {
    ...mapGetters({
      contact: CONTACT,
    }),
    ulClazzBySize() {
      return this.size === 'default' ? '' : 'dlab-social-icon-lg'
    },
    liClazzBySize() {
      return this.size === 'default' ? '' : 'bg-primary'
    },
    socials() {
      return this.contact?.socials
    },
    bindClazz() {
      return this.clazz.join(' ')
    },
  },
}
</script>

<style scoped></style>
