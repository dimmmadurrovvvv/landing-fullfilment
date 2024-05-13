<template>
	<section class="main-page-about">
		<div class="main-page-about__inner">
			<div class="main-page-about__info">
				<h2 class="main-page-about__info-title">О нас</h2>
				<p class="main-page-about__info-paragraph">
					Фулфилмент для маркетплейсов Order Care создан специалистами в сфере
					логистики и онлайн торговли с опытом работы в индустрии маркетплейсов
					с 2019 года.
				</p>
				<p class="main-page-about__info-paragraph">
					Наша команда возьмет работу с торговыми площадками на себя под ключ:
					от подбора товара и доставки на склады маркетплейсов до полноценного
					маркетинга и продвижения товара в ТОП.
				</p>
				<p class="main-page-about__info-paragraph">
					Нашими клиентами являются и могут стать как начинающие
					предприниматели, так и крупные производственные компании или
					дистрибьютеры, заинтересованные в новых каналах продаж своей
					продукции.
				</p>

				<div class="main-page-about__row">
					<UiButton
            @click="setShow"
						class="main-page-about__info-detail-button"
						text="Подробнее"
					/>
					<div class="main-page-about__image _tablet">
						<img
							alt="Документ в руках"
							class="main-page-about__image-pic"
							src="/images/static/cv-with-hands.png"
						/>
					</div>
				</div>
			</div>

			<div class="main-page-about__image _mobile">
				<img
					class="main-page-about__image-pic"
					src="/images/static/cv-with-hands.png"
					alt="Документ в руках"
				/>
			</div>
		</div>
    <LazyViewPopupFeedback v-model="showPopup"/>
	</section>
</template>

<script setup lang="ts">
import { ref } from "vue";

const showPopup = ref(false);

const setShow = () => {
  showPopup.value = !showPopup.value
}
</script>

<style scoped lang="scss">
.main-page-about {
	position: relative;

	&__inner {
		@include container;

		display: flex;

		@media (max-width: $container-width-mobile-big) {
			flex-direction: column;
		}

		@media (max-width: 1350px) and (min-width: $container-width-mobile-big) {
			display: block;
		}
	}

	&__row {
		margin-top: rem(40px);
		display: flex;
		justify-content: space-between;
		align-items: flex-start;
	}
	&__info {
		position: relative;
		z-index: 1;

		&-title {
			@include font-title;
			@include text-huge;

			@media (max-width: $container-width-tablet) {
				@include text-great;
			}
			@media (max-width: $container-width-mobile-big) {
				@include text-big;
				text-align: center;
			}
		}

		&-paragraph {
			@include text-big($font-weight-medium, $line-height-big);
			max-width: rem(700px);
			margin-top: rem(20px);
		}
	}

	&__image {
		&._tablet {
			display: none;
			@media (max-width: 1350px) and (min-width: $container-width-mobile-big) {
				display: block;
			}
		}

		&._mobile {
			display: block;
			@media (max-width: 1350px) and (min-width: $container-width-mobile-big) {
				display: none;
			}
		}

		@media (max-width: 1350px) {
			position: relative;
		}

		@media (max-width: $container-width-mobile-big) {
			margin-top: 60px;
			width: 100%;
		}
		position: absolute;
		z-index: 0;
		right: 0;

		width: 50%;
		height: 100%;

		&-pic {
			@include absolute-all-null;
			@include object-contain-full;

			@media (max-width: 1350px) {
				position: relative;
			}
		}
	}
}
</style>
