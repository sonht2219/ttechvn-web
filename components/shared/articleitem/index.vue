<template>
  <div class="item">
    <div
      class="blog-post blog-post-custom blog latest-blog-1 date-style-3 skew-date"
    >
      <div class="dlab-post-media dlab-img-effect zoom-slow">
        <a href="javascript:;"
          ><img :src="getProp(article, 'image')" alt=""
        /></a>
      </div>
      <div class="dlab-post-info p-t20">
        <div class="dlab-post-title">
          <h3 class="post-title">
            <a href="javascript:;">{{ getProp(article, 'title') }}</a>
          </h3>
        </div>
        <div class="dlab-post-meta">
          <ul>
            <li class="post-date">
              <i class="ti-calendar"></i
              ><strong>{{ getProp(article, 'createdAt') }}</strong>
            </li>
            <li class="post-author">
              <i class="fa fa-user"></i>By
              <a href="javascript:;">{{ getProp(article, 'createdBy') }}</a>
            </li>
            <li class="post-comment">
              <i class="fa fa-comments-o"></i>
            </li>
          </ul>
        </div>
        <div class="dlab-post-text">
          <p>
            {{ getProp(article, 'description') }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { CommonMixin } from '@/shared/mixins/CommonMixin'

export default {
  name: 'ArticleItem',
  mixins: [CommonMixin],
  props: {
    article: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style scoped></style>
