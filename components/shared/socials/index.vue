<template>
  <ul class="dlab-social-icon dez-border" :class="ulClazzBySize">
    <li>
      <a
        :href="getProp(contact, 'facebook')"
        target="_blank"
        rel="noopener noreferrer"
        class="fa fa-facebook"
        :class="liClazzBySize"
      ></a>
    </li>
    <li>
      <a
        :href="getProp(contact, 'twitter')"
        target="_blank"
        rel="noopener noreferrer"
        class="fa fa-twitter"
        :class="liClazzBySize"
      ></a>
    </li>
    <li>
      <a
        :href="getProp(contact, 'linkedin')"
        target="_blank"
        rel="noopener noreferrer"
        class="fa fa-linkedin"
        :class="liClazzBySize"
      ></a>
    </li>
    <li>
      <a
        :href="getProp(contact, 'google')"
        target="_blank"
        rel="noopener noreferrer"
        class="fa fa-google-plus"
        :class="liClazzBySize"
      ></a>
    </li>
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
    size: {
      type: String,
      default: () => 'default',
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
  },
}
</script>

<style scoped></style>
