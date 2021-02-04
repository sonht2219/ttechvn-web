<template>
  <div class="item">
    <div class="testimonial-4 testimonial-bg">
      <div class="testimonial-pic">
        <img
          :src="getProp(sayPeople, 'image')"
          style="width: 100%; height: 100%"
          alt=""
        />
      </div>
      <div class="testimonial-text">
        <p>
          {{ getProp(sayPeople, 'content') }}
        </p>
      </div>
      <div class="testimonial-detail">
        <strong class="testimonial-name">{{
          getProp(sayPeople, 'author')
        }}</strong>
        <span class="testimonial-position">{{
          getProp(sayPeople, 'job')
        }}</span>
      </div>
      <div class="quote-right"></div>
    </div>
  </div>
</template>

<script>
import { CommonMixin } from '@/shared/mixins/CommonMixin'

export default {
  name: 'SayPeopleItem',
  mixins: [CommonMixin],
  props: {
    sayPeople: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style scoped></style>
