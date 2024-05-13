<template>
	<main class="main-page">
		<ViewPageMainIntroduction class="main-page__section" />
		<ViewPageMainAdvantages
			class="main-page__section main-page__section--advantages"
		/>
		<ViewPageMainAbout class="main-page__section" />
		<ViewPageMainStocks class="main-page__section" />
		<ViewPageMainServices class="main-page__section" />
		<ViewPageMainSlogan class="main-page__section" />
		<ViewPageMainPricing class="main-page__section" />
		<ViewPageMainConcultation class="main-page__section" />
		<ViewPageMainFaq class="main-page__section" />
		<ViewPageMainFeedback class="main-page__section" />
	</main>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.main-page {
	&__section {
		@include y-margin-items(180px);

		@media (max-width: $container-width-tablet) {
			margin-top: rem(90px);
		}

		@media (max-width: $container-width-mobile-big) {
			margin-top: rem(60px);
		}

		&--advantages {
			margin-top: rem(126px);
			@media (max-width: $container-width-tablet) {
				margin-top: rem(60px);
			}
		}
	}
}
</style>
