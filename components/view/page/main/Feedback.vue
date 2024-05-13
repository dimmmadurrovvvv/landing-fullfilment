<template>
    <section class="main-page-consultation">

        <div class="main-page-consultation__inner">

            <form class="main-page-consultation__form" ref="form">
                <h4 class="main-page-consultation__form-title">
                    Остались еще вопросы?
                </h4>

                <input class="main-page-consultation__form-control"
                    type="text"
                       name="name"
                       v-model="name"
                    placeholder="Ваше имя">
                <input class="main-page-consultation__form-control"
                    type="text"
                       name="number"
                       v-model="number"
                    placeholder="Ваш номер">
              <input class="main-page-consultation__form-control"
                    type="email"
                     name="email"
                     v-model="email"
                    placeholder="Ваша почта">
                <input class="main-page-consultation__form-control"
                    type="text"
                       name="message"
                       v-model="message"
                    placeholder="Ваш вопрос">

                <UiButton class="main-page-consultation__form-submit"
                    text="Отправить"
                @click="sendEmail"/>

            </form>

            <div class="main-page-consultation__image">
                <img class="main-page-consultation__image-pic"
                    src="/images/static/truck-with-checkpoints.png"
                    alt="Картинка чатов">
            </div>
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
.main-page-consultation {

    background-color: $fill-col-secondary;
  padding-bottom: 80px;

  @media (max-width: $container-width-laptop) {
    padding-top: 45px;
    padding-bottom: 20px;
  }

    &__inner {
        @include container;

        display: flex;
        justify-content: space-between;
      @media (max-width: $container-width-laptop) {
        flex-direction: column;
      }
    }

    &__image {
        width:55%;
        min-height: 100%;
        margin-left: rem(52px);
      @media (max-width: $container-width-laptop) {
        width: 100%;
        margin-left: 0;
      }
      @media (max-width: $container-width-mobile-big) {
        display: none;
      }
        &-pic {
            @include object-contain-full;
        }
    }

    &__form {
        display: flex;
        flex-direction: column;

        flex-shrink: 0;

        width: 45%;
        margin-top: rem(80px);
      @media (max-width: $container-width-laptop) {
        width: 80%;
        margin: 0 auto;
      }
      @media (max-width: $container-width-mobile-big) {
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
            width: fit-content;
            margin-top: rem(82px);
          @media (max-width: $container-width-laptop) {
            margin: 0 auto;
            margin-top: rem(82px);
          }
        }
    }
}
</style>
