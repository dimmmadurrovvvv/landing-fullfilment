<template>
	<section class="main-page-pricing">
		<header class="main-page-pricing__header">
			<h2 class="main-page-pricing__title">Наши цены</h2>
			<div class="main-page-pricing__buttons">
				<button class="main-page-pricing__button button-prev">
					<svg
						fill="none"
						height="20"
						viewBox="0 0 20 20"
						width="20"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M6.72513 9.5484L13.6914 2.9109C13.8076 2.80009 13.962 2.73828 14.1226 2.73828C14.2832 2.73828 14.4376 2.80009 14.5539 2.9109L14.5614 2.9184C14.6179 2.97212 14.6629 3.03678 14.6937 3.10844C14.7245 3.18011 14.7403 3.25728 14.7403 3.33528C14.7403 3.41327 14.7245 3.49044 14.6937 3.56211C14.6629 3.63378 14.6179 3.69843 14.5614 3.75215L8.00138 10.0022L14.5614 16.2497C14.6179 16.3034 14.6629 16.368 14.6937 16.4397C14.7245 16.5114 14.7403 16.5885 14.7403 16.6665C14.7403 16.7445 14.7245 16.8217 14.6937 16.8934C14.6629 16.965 14.6179 17.0297 14.5614 17.0834L14.5539 17.0909C14.4376 17.2017 14.2832 17.2635 14.1226 17.2635C13.962 17.2635 13.8076 17.2017 13.6914 17.0909L6.72513 10.4534C6.66386 10.395 6.61509 10.3248 6.58176 10.247C6.54843 10.1693 6.53125 10.0855 6.53125 10.0009C6.53125 9.91628 6.54843 9.83254 6.58176 9.75476C6.61509 9.67698 6.66386 9.60677 6.72513 9.5484Z"
							fill="currentColor"
						/>
					</svg>
				</button>
				<button class="main-page-pricing__button button-next">
					<svg
						fill="none"
						height="20"
						viewBox="0 0 20 20"
						width="20"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M13.2749 9.5484L6.30862 2.9109C6.19239 2.80009 6.03796 2.73828 5.87737 2.73828C5.71679 2.73828 5.56236 2.80009 5.44613 2.9109L5.43862 2.9184C5.38208 2.97212 5.33706 3.03678 5.30629 3.10844C5.27552 3.18011 5.25966 3.25728 5.25966 3.33528C5.25966 3.41327 5.27552 3.49044 5.30629 3.56211C5.33706 3.63378 5.38208 3.69843 5.43862 3.75215L11.9986 10.0022L5.43862 16.2497C5.38208 16.3034 5.33706 16.368 5.30629 16.4397C5.27552 16.5114 5.25966 16.5885 5.25966 16.6665C5.25966 16.7445 5.27552 16.8217 5.30629 16.8934C5.33706 16.965 5.38208 17.0297 5.43862 17.0834L5.44613 17.0909C5.56236 17.2017 5.71679 17.2635 5.87737 17.2635C6.03796 17.2635 6.19239 17.2017 6.30862 17.0909L13.2749 10.4534C13.3361 10.395 13.3849 10.3248 13.4182 10.247C13.4516 10.1693 13.4688 10.0855 13.4688 10.0009C13.4688 9.91628 13.4516 9.83254 13.4182 9.75476C13.3849 9.67698 13.3361 9.60677 13.2749 9.5484Z"
							fill="currentColor"
						/>
					</svg>
				</button>
			</div>
		</header>

		<ul class="main-page-pricing__list">
			<swiper
				:breakpoints="{
					'1250': {
						slidesPerView: 4
					},
					'768': {
						slidesPerView: 3
					},
					'520': {
						slidesPerView: 2
					},
					'320': {
						slidesPerView: 1
					}
				}"
				:modules="[Navigation]"
				:navigation="{ nextEl: '.button-next', prevEl: '.button-prev' }"
				:slides-per-view="4"
				:space-between="20"
			>
				<swiper-slide
					class="main-page-pricing__list-item"
					v-for="(card, idx) in cards"
					:key="idx"
				>
					<div class="main-page-pricing__card">
						<h4 class="main-page-pricing__card-title">
							{{ card.title }}
						</h4>

						<ul class="main-page-pricing__card-services">
							<li
								v-for="(service, idx) in card.services"
								:key="idx"
								class="main-page-pricing__card-service"
							>
								<p class="main-page-pricing__card-service-name">
									{{ service.name }}
								</p>

								<span class="main-page-pricing__card-service-separator"></span>

								<p class="main-page-pricing__card-service-price">
									{{ service.price }}
								</p>
							</li>
						</ul>

						<UiButton
							:text="card.button.text"
							class="main-page-pricing__card-button"
							theme="transparent"
							@click="card.button.callback()"
						/>
					</div>
				</swiper-slide>
			</swiper>
		</ul>
	</section>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation } from 'swiper/modules'

import 'swiper/css'

const cards = [
	{
		title: 'Логистические услуги',
		services: [
			{
				name: 'Забор товара с рынков Москвы: Южные ворота, Садовод, ТЯК',
				price: 'от 2 000 р'
			},
			{
				name: 'Забор товара по Москве и МО',
				price: 'от 2 000 р'
			},
		],
		button: {
			text: 'Подробнее',
			callback: () => {}
		}
	},
	{
		title: 'Услуги по работе с товаром',
		services: [
			{
				name: 'Пересчет товара',
				price: 'от 2 000 р'
			},
			{
				name: 'Первичный осмотр на брак ',
				price: 'от 2 000 р'
			},
			{
				name: 'Сортировка товара',
				price: 'от 2 000 р'
			}, 
		],
		button: {
			text: 'Подробнее',
			callback: () => {}
		}
	},
	{
		title: 'Упаковка товара',
		services: [
			{
				name: 'Все виды упаковки',
				price: 'от 4 000 р'
			},
			{
				name: 'Раскладка в коробки',
				price: 'от 50 р'
			},
			{
				name: 'Раскладка в коробки',
				price: 'от 50 р'
			}
		],
		button: {
			text: 'Подробнее',
			callback: () => {}
		}
	},
	{
		title: 'Доп услуги при упаковке',
		services: [
			{
				name: 'Проверка на брак - визуально',
				price: 'от 5 р'
			},
			{
				name: 'Проверка на брак - детально',
				price: 'от 15 р'
			},
			{
				name: 'Полная проверка товара на брак',
				price: 'от 25 р'
			}
		],
		button: {
			text: 'Подробнее',
			callback: () => {}
		}
	}, 
	{
		title: 'Доп услуги',
		services: [
			{
				name: 'Разгрузка / погрузка коробов',
				price: 'от 30 р'
			},
			{
				name: 'Формирование короба для поставки',
				price: 'от 130 р'
			},
			{
				name: 'Короб 60х40х40 см',
				price: 'от 100 р'
			}
		],
		button: {
			text: 'Подробнее',
			callback: () => {}
		}
	}, 
	{
		title: 'Хранение товара',
		services: [
			{
				name: 'Хранение товара во время упаковки',
				price: 'Бесплатно'
			},
			{
				name: 'Хранение короба 60х40х40 см в сутки',
				price: 'от 30 р'
			},
			{
				name: 'Хранение товара от 1 короба до 0,5 м3 в сутки',
				price: 'от 60 р'
			}
		],
		button: {
			text: 'Подробнее',
			callback: () => {}
		}
	},
	{
		title: 'Фуллфилмент под ключ',
		services: [
			{
				name: 'Продвижение товара',
				price: 'По запросу'
			},
			{
				name: 'Настройка рекламных кампаний',
				price: 'По запросу'
			},
			{
				name: 'Самовыкупы и забор товара',
				price: 'По запросу'
			}
		],
		button: {
			text: 'Подробнее',
			callback: () => {}
		}
	},
]
</script>

<style scoped lang="scss">
.main-page-pricing {
	position: relative;
	@include container;

	&__header {
		@include flex-space-between;
	}

	&__buttons {
		display: flex;
		align-items: center;
	}

	&__button {
		@include flex-all-center;
		@include x-margin-items(12px);

		width: rem(60px);
		height: rem(60px);

		color: $txt-col-primary;
		border-radius: 50%;
		background-color: $fill-col-primary-muted;
	}

	&__title {
		@include font-title;
		@include text-huge;

		@media (max-width: $container-width-tablet) {
			@include text-great;
		}
		@media (max-width: $container-width-mobile-big) {
			@include text-big;
		}
	}

	&__list {
		margin-top: rem(20px);

		&-item {
			@include flex-item-width(4, 20px);
		}
	}

	&__card {
		display: flex;
		flex-direction: column;

		min-height: rem(830px);
		padding: rem(50px) rem(30px) rem(54px);

		border-radius: rem(30px);
		background-color: $fill-col-primary-muted;

		&-title {
			@include text-big($font-weight-semibold);
		}

		&-services {
			margin-top: rem(22px);
		}

		&-service {
			@include y-margin-items(40px);

			&-name {
				@include text-big($font-weight-regular, $line-height-big);
			}

			&-separator {
				display: inline-block;

				width: 40%;
				height: 1px;

				margin-top: rem(14px);
				margin-bottom: rem(20px);

				background-color: $border-col-secondary;
			}

			&-price {
				font-size: rem(24px);
				font-weight: $font-weight-semibold;
			}
		}

		&-button {
			width: 100%;
			margin-top: auto;
		}
	}
}
</style>
