<template>
  <section class="main-page-services">
    <ul class="main-page-services__list">
      <li
        class="main-page-services__list-item"
        :class="{ big: card?.big }"
        v-for="(card, idx) in cards"
        :key="idx"
      >
        <div class="main-page-services__card">
          <div class="main-page-services__card-inner">
            <h3 v-if="card?.title" class="main-page-services__card-title">
              {{ card.title }}
            </h3>

            <h4 v-if="card?.subtitle" class="main-page-services__card-subtitle">
              {{ card.subtitle }}
            </h4>

            <p
              v-if="card?.description"
              class="main-page-services__card-description"
            >
              {{ card.description }}
            </p>

            <UiButton
              v-if="card.button"
              class="main-page-services__card-details-button"
              :text="card.button.text"
              theme="transparent"
              @click="
                onCardButtonClick(card.button.callback, card.subtitle, idx)
              "
            />
          </div>

          <div v-if="card.image" class="main-page-services__card-image">
            <img
              :src="card.image"
              alt="Иллюстрация карточки"
              class="main-page-services__card-image-pic"
            />
          </div>
        </div>
      </li>
    </ul>
    <LazyViewPopupBase v-model="showPopup" :title="popupTitle">
      <div class="popup-base" v-if="modalContent?.length">
        <div class="popup-base__content">
          <ul class="popup-base__content-list">
            <li
              v-for="item in modalContent"
              :key="item?.text"
              class="popup-base__content-list-item"
            >
              <p class="popup-base__content-list-item-text">
                {{ item?.text }}
              </p>

              <span class="popup-base__content-list-item-price">
                {{ item?.price }}
              </span>
            </li>
          </ul>
        </div>
          <div class="popup-base__footer" style="display: none">
            <UiButton class="popup-base__footer-button" text="Скачать прайс" />
            <UiButton
              class="popup-base__footer-button"
              text="Посмотреть прайс"
              theme="transparent"
            />
          </div>
      </div>
    </LazyViewPopupBase>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";

const showPopup = ref(false);
const modalContent = ref([]);

const popupTitle = ref("Логистические услуги");

const cards = [
  {
    title: "Наши услуги",
    description:
      "Наша компания управляет операционной деятельностью от приёма товара у поставщика и доставки покупателю до клиентской поддержки.",
    image: "/images/static/clipboard-with-checklist.png",
    big: true,
  },
  {
    subtitle: "Доставка товара из Китая",
    button: {
      text: "Узнать больше",
      callback: () => {},
    },
    modalContent: [
      {
        text: "Анализ рынка",
        price: "Договорная",
      },
      { text: "Подбор по категориям и производителям ", price: "Договорная" },
      { text: "Проверка товара на соответствие", price: "Договорная" },
      { text: "Карго до любой точки мира", price: "Договорная" },
    ],
  },
  {
    subtitle: "Забор и доставка товара",
    button: {
      text: "Узнать больше",
      callback: () => {},
    },
    modalContent: [
      {
        text: "Забор товара день в день",
        price: "Договорная",
      },
      { text: "Перевозка товара на наш склад", price: "Договорная" },
      { text: "Обработка товара", price: "Договорная" },
      { text: "Поставка товара на МП или ПВЗ", price: "Договорная" },
    ],
  },
  {
    subtitle: "Обработка товара",
    button: {
      text: "Узнать больше",
      callback: () => {},
    },
    modalContent: [
      {
        text: "Приемка товара ( пересчет и проверка на первичный Брак )",
        price: "Договорная",
      },
      { text: "Отрез ниток, переупаковка, биркование ( при необходимости )", price: "Договорная" },
      { text: "Наклейка штрих кодов", price: "Договорная" },
      { text: "Сбор товара в короба, палетирование", price: "Договорная" },
    ],
  },
  {
    subtitle: "Доп услуги",
    button: {
      text: "Узнать больше",
      callback: () => {},
    },
    modalContent: [
      {
        text: "Предоставление Менеджера ЛК2",
        price: "Договорная",
      },
      { text: "Инфографика, фото-услуги", price: "Договорная" },
      { text: "Честный знак, самовыкуп, статистика", price: "Договорная" },
      { text: "Предоставление видеосъемки обработки вашего товара ", price: "Договорная" },
    ],
  },
  {
    subtitle: "Хранение товара",
    button: {
      text: "Узнать больше",
      callback: () => {},
    },
    modalContent: [
      {
        text: "Первая неделя обработки и хранения",
        price: "Бесплатно",
      },
      { text: "Хранение товара коробки А3", price: "5 рублей в день" },
      { text: "Хранение палет ( до 16 коробок А3 )", price: "от 50 рублей в день" },
    ],
  },
  {
    subtitle: 'Фулфилмент под ключ',
    button: {
      text: "Узнать больше",
      callback: () => {},
    },
    modalContent: [
      {
        text: "При полном цикле доставки товара из китая и его обработке, предусмотрены персональные скидки. Можем организовать ваш бизнес с минимальныс вашим участием.",
        price: "Договорная",
      },
    ],
  },
];

function onCardButtonClick(callback: () => any, title: string, idx: number) {
  modalContent.value = cards[idx].modalContent;
  callback();
  popupTitle.value = title; // Обновляем заголовок модального окна
  showPopup.value = true;
}
</script>

<style scoped lang="scss">
.main-page-services {
  @include container;

  &__list {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    row-gap: rem(20px);

    @media (max-width: $container-width-laptop) {
      flex-direction: column;
    }

    &-item {
      @include flex-item-width(3, 20px);
      @media (max-width: $container-width-laptop) {
        width: 100%;
      }
      &:first-child {
        margin-top: rem(20px);

        .main-page-services__card {
          height: rem(201px);
          @media (max-width: $container-width-laptop) {
            height: 100%;
          }
          &-description {
            width: 63%;
            @media (max-width: $container-width-laptop) {
              width: 100%;
            }
            @media (max-width: $container-width-mobile-big) {
              @include text-average;
            }
          }
        }
      }

      &.big {
        width: 100%;
      }
    }
  }

  &__card {
    position: relative;
    height: 100%;
    display: flex;
    justify-content: space-between;

    padding: rem(24px) 36px;

    border-radius: rem($border-radius-medium);
    background-color: $fill-col-secondary;

    @media (max-width: $container-width-laptop) {
      padding: rem(24px);

      .big & {
        flex-direction: column;
        gap: 40px;
      }
    }

    &-inner {
      @media (max-width: $container-width-laptop) {
        width: 100%;
      }
    }

    &-title {
      @include font-title;
      @include text-huge;

      margin-bottom: rem(20px);

      @media (max-width: $container-width-tablet) {
        @include text-great;
      }
      @media (max-width: $container-width-mobile-big) {
        @include text-big;
        text-align: center;
      }
    }

    &-subtitle {
      font-size: rem(24px);
      font-weight: $font-weight-medium;
      @media (max-width: $container-width-laptop) {
        text-align: center;
      }
      @media (max-width: $container-width-mobile-big) {
        text-align: left;
      }
    }

    &-description {
      @include text-big($font-weight-medium, $line-height-big);
    }

    &-details-button {
      margin-top: rem(52px);
      @media (max-width: $container-width-laptop) {
        width: 100%;
      }
    }

    &-image {
      position: absolute;
      right: 10%;
      top: 0;
      height: 100%;
      @media (max-width: $container-width-laptop) {
        position: relative;
        right: 0;
        margin-left: auto;
      }
      @media (max-width: $container-width-mobile-big) {
        margin: 0 auto;
      }
      &-pic {
        @include object-contain-full;
        @media (max-width: $container-width-laptop) {
          max-height: 195px;
        }
      }
    }
  }
}

.popup-base {
  &__content {
    &-list {
      &-item {
        @include flex-space-between;
        gap: 20px;
        height: rem(95px);
        @media (max-width: $container-width-mobile-big) {
          height: 100%;
        }
        @media (max-width: $container-width-mobile-big) {
          flex-direction: column;
          gap: 10px;
          align-items: flex-start;
        }

        &:not(:first-child) {
          @media (max-width: $container-width-mobile-big) {
            padding-top: 10px;
          }
        }

        &:not(:last-child) {
          @media (max-width: $container-width-mobile-big) {
            padding-bottom: 10px;
          }
          border-bottom: 1px solid #b8b8b8;
        }

        &-text {
          @include text-big;
        }

        &-price {
          white-space: nowrap;
          @include text-big($font-weight-semibold);
        }
      }
    }
  }

  &__footer {
    display: flex;
    align-items: flex-start;

    margin-top: rem(36px);

    @media (max-width: $container-width-tablet) {
      flex-direction: column;
      gap: 20px;
    }

    &-button {
      @media (max-width: $container-width-tablet) {
        width: 100%;
        margin: 0;
      }
      @include x-margin-items(22px);
    }
  }
}
</style>
