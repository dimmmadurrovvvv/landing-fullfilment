<template>
	<section class="main-page-advantages">
		<div class="main-page-advantages__inner">
			<ul class="main-page-advantages__list">
				<li
					class="main-page-advantages__list-item"
					v-for="(card, idx) in cards"
					:key="card.text"
				>
					<div class="main-page-advantages__card">
						<span class="main-page-advantages__card-step">
							{{ idx + 1 }}
						</span>
						<p class="main-page-advantages__card-text">
							{{ card.text }}
						</p>
					</div>
				</li>
			</ul>

			<div class="main-page-advantages__image">
				<img
					class="main-page-advantages__image-pic"
					src="/images/static/steps-in-circle.png"
					alt="Иллюстрация ступеней"
				/>
			</div>
		</div>
	</section>
</template>

<script setup lang="ts">
const cards = [
	{ text: 'Забор товара день в день' },
	{ text: 'График работы - 24/7' },
	{ text: 'Полное сопровеждение ' }
]
</script>

<style scoped lang="scss">
.main-page-advantages {
	border-radius: rem($border-radius-xl);
	background-color: $fill-tetriary;

	&__inner {
		@include container;
		@include flex-space-between;

		padding-top: rem(90px);
		padding-bottom: rem(90px);
		@media (max-width: $container-width-tablet) {
			gap: 40px;
			flex-direction: column;
			padding-top: rem(60px);
			padding-bottom: rem(60px);
		}

		@media (max-width: 1350px) {
			justify-content: center;
		}
		position: relative;
	}

	&__list {
		display: flex;
		gap: 20px;
		@media (max-width: 1350px) {
			justify-content: center;
			flex-wrap: wrap;
		}
	}

	&__card {
		position: relative;
		z-index: 1;

		display: flex;
		align-items: center;

		width: auto;
		min-width: rem(300px);
		padding: rem(22px) rem(28px);
		@media (max-width: $container-width-mobile-big) {
			padding: rem(22px);
		}
		border-radius: rem($border-radius-big);
		background-color: $fill-col-primary;

		&-step {
			@include font-title;
			@include flex-all-center;

			flex-shrink: 0;

			font-size: rem(14px);
			font-weight: $font-weight-bold;

			width: rem(24px);
			height: rem(24px);

			color: $txt-col-primary-invert;
			border-radius: 50%;
			background-color: $fill-col-primary-invert;
		}

		&-text {
			@include text-big;

			margin-left: rem(14px);

			@media (max-width: $container-width-mobile-big) {
				@include text-average;
			}
			white-space: nowrap;
		}
	}

	&__image {
		@media (max-width: 1350px) and (min-width: $container-width-mobile-big) {
			display: none;
		}

		@media (max-width: $container-width-mobile-big) {
			position: relative;
			transform: translateX(0);
		}
		position: absolute;
		z-index: 0;
		right: 0;
		bottom: 0;
		max-width: 500px;

		transform: translateX(-100px);

		&-pic {
			@include object-contain-full;
		}
	}
}
</style>
