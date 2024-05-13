<template>
  <LazyViewPopupBase v-model="dialogVisible" title="Обратная связь">
        <form class="popup-base__form" ref="form">
          <input class="popup-base__form-control"
                 type="text"
                 name="name"
                 v-model="name"
                 placeholder="Ваше имя">
          <input class="popup-base__form-control"
                 type="text"
                 name="number"
                 v-model="number"
                 placeholder="Ваш номер">
          <input class="popup-base__form-control"
                 type="email"
                 name="email"
                 v-model="email"
                 placeholder="Ваша почта">
          <input class="popup-base__form-control"
                 type="text"
                 name="message"
                 v-model="message"
                 placeholder="Ваш вопрос">

          <UiButton class="popup-base__form-submit"
                    text="Отправить"
                    @click="sendEmail" />

        </form>
  </LazyViewPopupBase>
</template>


<script>
import emailjs from 'emailjs-com';

const dialogVisible = defineModel()

export default {
  name: 'ContactUs',
  data() {
    return {
      name: '',
      email: '',
      number: '',
      message: ''
    }
  },
  methods: {
    sendEmail(e) {
      e.preventDefault()
      if (!this.name.length && !this.email.length && !this.message.length && !this.number.length) return

      try {
        emailjs.sendForm('service_fysxkzp', 'template_67ys5lw', this.$refs.form,
            'gjGvAazUCWBuNWXu0', {
              name: this.name,
              email: this.email,
              message: this.message,
              number: this.number,
            })

      } catch(error) {
        console.log({error})
      }
      // Reset form field
      this.name = ''
      this.email = ''
      this.number = ''
      this.message = ''
    },
  }
}
</script>


<style scoped lang="scss">
.popup-base {
  &__form {
    display: flex;
    flex-direction: column;
    flex-shrink: 0;
    &-title {
      @include font-title;
      @include text-huge;

      margin-bottom: rem(20px);
      @media (max-width: $container-width-laptop) {
        text-align: center;
      }
      @media (max-width: $container-width-tablet) {
        @include text-great;
      }
      @media (max-width: $container-width-mobile-big) {
        @include text-big;
      }
    }

    &-control {
      @include text-normal;

      height: rem(48px);
      margin-top: rem(50px);

      color: $txt-col-primary;
      border-bottom: 1px solid $border-col-tetriary;
      background-color: transparent;

      &:first-of-type {
        margin-top: 0;
      }

      &::placeholder {
        color: $txt-col-primary-muted-high;
      }
    }

    &-submit {
      width: fit-content;
      margin-top: rem(82px);
      @media (max-width: $container-width-laptop) {
        margin: 0 auto;
        margin-top: rem(60px);
      }
    }
  }
}
</style>
