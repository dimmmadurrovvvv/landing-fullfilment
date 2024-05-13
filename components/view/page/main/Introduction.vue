<template>
	<section class="main-page-introduction">
		<div class="main-page-introduction__inner">
			<div class="main-page-introduction__info">
				<h1 class="main-page-introduction__info-title">
					{{ title }}
				</h1>
				<p class="main-page-introduction__info-subtitle">
					Доставим ваши товары от Китая до маркетплейса
				</p>
				<div class="main-page-introduction__row">
					<UiButton
            @click="setShow"
						text="Стать клиентом"
						class="main-page-introduction__info-submit"
					/>
					<div class="main-page-introduction__image _tablet">
						<img
							alt="Иллюстрация грузовика"
							class="main-page-introduction__image-pic"
							src="/images/static/marketplaces-with-truck.png"
						/>
					</div>
				</div>
			</div>

			<div class="main-page-introduction__image _mobile">
				<img
					class="main-page-introduction__image-pic"
					src="/images/static/marketplaces-with-truck.png"
					alt="Иллюстрация грузовика"
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

const title = 'Order care - Ваш фулфилмент полного цикла в Москве'
</script>

<style scoped lang="scss">
.main-page-introduction {
	padding-bottom: 80px;
	@media (max-width: $container-width-tablet) {
		padding-bottom: 0;
	}
	background-color: $fill-col-secondary;

	&__inner {
		@include container;

		display: flex;

		@media (max-width: $container-width-mobile-big) {
			flex-direction: column;
		}
	}

	&__row {
		display: flex;
		justify-content: space-between;
		align-items: flex-start;
	}
	&__info {
		margin-top: rem(100px);
		@media (max-width: $container-width-tablet) {
			margin-top: rem(60px);
		}
		&-title {
			@include text-huge($font-weight-regular, $line-height-medium);
			@include font-title;

			white-space: pre-line;
		}

		&-subtitle {
			@include text-big($font-weight-medium);

			margin-top: rem(16px);
		}

		&-submit {
			margin-top: rem(86px);
		}
	}

	&__image {
		&._tablet {
			display: none;
			@media (max-width: $container-width-tablet) and (min-width: $container-width-mobile-big) {
				display: block;
			}
		}

		&._mobile {
			display: block;
			@media (max-width: $container-width-tablet) and (min-width: $container-width-mobile-big) {
				display: none;
			}
		}

		margin-top: rem(58px);
		margin-left: auto;

		width: 590px;

		@media (max-width: $container-width-tablet) {
			width: 100%;
			object-fit: cover;
		}
		&-pic {
			@include object-contain-full;
		}
	}
}
</style>
