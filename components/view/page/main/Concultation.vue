<template>
  <section class="main-page-feedback">
    <div class="main-page-feedback__inner">
      <div class="main-page-feedback__image">
        <img
          class="main-page-feedback__image-pic"
          src="/images/static/chat-clouds.png"
          alt="Картинка чатов"
        />
      </div>

      <form class="main-page-feedback__form" ref="form">
        <h4 class="main-page-feedback__form-title">
          Получите бесплатную консультацию
        </h4>

        <input
          class="main-page-feedback__form-control"
          type="text"
          name="name"
          v-model="name"
          placeholder="Ваше имя"
        />
        <input
          class="main-page-feedback__form-control"
          type="email"
          name="email"
          v-model="email"
          placeholder="Ваша почта"
        />
        <input
          class="main-page-feedback__form-control"
          type="text"
          name="number"
          v-model="number"
          placeholder="Ваш номер"
        />
        <input
          class="main-page-feedback__form-control"
          type="text"
          name="message"
          v-model="message"
          placeholder="Ваш вопрос"
        />

        <UiButton
          class="main-page-feedback__form-submit"
          text="Отправить"
          @click="sendEmail"
        />
      </form>
    </div>
  </section>
</template>

<script>
import emailjs from 'emailjs-com';

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
.main-page-feedback {
  position: relative;

  &__inner {
    @include container;

    display: flex;
    justify-content: flex-end;

    @media (max-width: $container-width-laptop) {
      flex-direction: column-reverse;
      gap: 20px;
    }
  }

  &__image {
    position: absolute;
    z-index: 0;
    left: 0;
    top: 0;
    height: 500px;
    width: 60%;

    @media (max-width: $container-width-mobile-big) {
      display: none;
    }
    @media (max-width: $container-width-laptop) {
      position: relative;
      height: auto;
      width: 100%;
    }
    &-pic {
      @include absolute-all-null;
      @include object-contain-full;

      @media (max-width: $container-width-laptop) {
        max-height: 370px;
        position: relative;
      }
    }
  }

  &__form {
    position: relative;
    z-index: 1;

    display: flex;
    flex-direction: column;

    flex-shrink: 0;

    width: 40%;
    margin-top: rem(126px);

    @media (max-width: $container-width-laptop) {
      width: 80%;
      justify-content: center;
      margin: 0 auto;
    }
    @media (max-width: $container-width-mobile-big) {
      margin-top: 0;
      width: 100%;
    }
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
      @media (max-width: $container-width-laptop) {
        margin: 0 auto;
        margin-top: rem(82px);
      }
      width: fit-content;
      margin-top: rem(82px);
    }
  }
}
</style>
