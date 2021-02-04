<template>
  <div>
    <!-- inner page banner -->
    <div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3720.36888875089!2d105.80578351493511!3d21.177499985917944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjHCsDEwJzM5LjAiTiAxMDXCsDQ4JzI4LjciRQ!5e0!3m2!1svi!2s!4v1610994878188!5m2!1svi!2s"
        style="border: 0; width: 100%; margin-bottom: -6px; height: 300px"
        allowfullscreen
      ></iframe>
    </div>
    <!-- inner page banner END -->
    <div class="section-full content-inner bg-white contact-style-1">
      <div class="container">
        <div class="row">
          <!-- right part start -->
          <div class="col-lg-4 col-md-6 d-md-flex d-lg-flex">
            <div class="p-a30 m-b30 border contact-area border-1">
              <h2 class="m-b10">Liên hệ</h2>
              <p>Hãy liên hệ với chúng tôi theo thông tin dưới đây</p>
              <ul class="no-margin">
                <li class="icon-bx-wraper left m-b30">
                  <div class="icon-bx-xs border-1">
                    <a href="#" class="icon-cell"
                      ><i class="ti-location-pin"></i
                    ></a>
                  </div>
                  <div class="icon-content">
                    <h6 class="text-uppercase m-tb0 dlab-tilte">Địa chỉ:</h6>
                    <p>{{ getProp(contact, 'address') }}</p>
                  </div>
                </li>
                <li class="icon-bx-wraper left m-b30">
                  <div class="icon-bx-xs border-1">
                    <a href="#" class="icon-cell"><i class="ti-email"></i></a>
                  </div>
                  <div class="icon-content">
                    <h6 class="text-uppercase m-tb0 dlab-tilte">Email:</h6>
                    <p>{{ getProp(contact, 'email') }}</p>
                  </div>
                </li>
                <li class="icon-bx-wraper left">
                  <div class="icon-bx-xs border-1">
                    <a href="#" class="icon-cell"><i class="ti-mobile"></i></a>
                  </div>
                  <div class="icon-content">
                    <h6 class="text-uppercase m-tb0 dlab-tilte">Điện thoại</h6>
                    <p>{{ getProp(contact, 'phone_number') }}</p>
                  </div>
                </li>
              </ul>
              <div class="m-t20">
                <socials :icon="'iconRRR'" />
              </div>
            </div>
          </div>
          <!-- right part END -->
          <!-- Left part start -->
          <div class="col-lg-8 col-md-6">
            <div class="p-a30 bg-gray clearfix m-b30">
              <template v-if="responsed">
                <div v-show="!errorMessage" class="alert alert-success">
                  Gửi liên hệ thành công
                </div>
                <div v-show="errorMessage" class="alert alert-danger">
                  {{ errorMessage }}
                </div>
              </template>
              <h2>Gửi thư tới chúng tôi</h2>
              <div class="dzFormMsg"></div>
              <form class="dzForm">
                <input type="hidden" value="Contact" name="dzToDo" />
                <div class="row">
                  <div class="col-lg-6">
                    <div class="form-group">
                      <div class="input-group">
                        <input
                          v-model="contactForm.name"
                          name="dzOther[Name]"
                          type="text"
                          required
                          class="form-control"
                          placeholder="Họ tên"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div class="form-group">
                      <div class="input-group">
                        <input
                          v-model="contactForm.email"
                          name="dzOther[Email]"
                          type="email"
                          required
                          class="form-control"
                          placeholder="Email"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div class="form-group">
                      <div class="input-group">
                        <input
                          v-model="contactForm.phone_number"
                          name="dzOther[Phone]"
                          type="text"
                          required
                          class="form-control"
                          placeholder="Số điện thoại"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div class="form-group">
                      <div class="input-group">
                        <input
                          v-model="contactForm.subject"
                          name="dzOther[Subject]"
                          type="text"
                          required
                          class="form-control"
                          placeholder="Tiêu đề"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-12">
                    <div class="form-group">
                      <div class="input-group">
                        <textarea
                          v-model="contactForm.message"
                          name="dzMessage"
                          rows="4"
                          class="form-control"
                          required
                          placeholder="Nội dung..."
                        ></textarea>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-12">
                    <div class="form-group">
                      <div class="input-group">
                        <div
                          class="g-recaptcha"
                          data-sitekey="<!-- Put reCaptcha Site Key -->"
                          data-callback="verifyRecaptchaCallback"
                          data-expired-callback="expiredRecaptchaCallback"
                        ></div>
                        <input
                          class="form-control d-none"
                          style="display: none"
                          data-recaptcha="true"
                          required
                          data-error="Please complete the Captcha"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-12">
                    <button
                      name="submit"
                      class="site-button"
                      :disabled="submitting"
                      @click="submit"
                    >
                      <span v-show="!submitting">GỬI</span>
                      <span v-show="submitting" class="loader"></span>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <!-- Left part END -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { CONTACT } from '@/store'
import { CommonMixin } from '@/shared/mixins/CommonMixin'
import Socials from '@/components/shared/socials/index'
import { SeoMixin } from '@/shared/mixins/SeoMixin'
const contactForm = {
  name: '',
  email: '',
  phone_number: '',
  subject: '',
  message: '',
}

export default {
  name: 'Contact',
  components: { Socials },
  mixins: [CommonMixin, SeoMixin],
  data: () => ({
    contactForm: { ...contactForm },
    submitting: false,
    responsed: false,
    errorMessage: '',
  }),
  computed: {
    ...mapGetters({
      contact: CONTACT,
    }),
  },
  methods: {
    async submit() {
      if (!this.isValidForm()) return
      this.submitting = true
      try {
        await this.$repositories.contactMessages.create(this.contactForm)
        this.contactForm = { ...contactForm }
        this.errorMessage = ''
      } catch (e) {
        this.errorMessage = e?.response?.data?.message
      } finally {
        this.submitting = false
        this.responsed = true
      }
    },
    isValidForm() {
      if (
        !this.contactForm.phone_number ||
        !this.contactForm.subject ||
        !this.contactForm.message
      )
        return false
      return true
    },
  },
}
</script>

<style scoped></style>
