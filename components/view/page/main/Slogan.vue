<template>
	<section class="main-page-slogan">
		<div class="main-page-slogan__inner">
			<div class="main-page-slogan__title">
				<h2 class="main-page-slogan__title-text">
					С нами у вас не будет никаких лишних расходов
				</h2>
			</div>

			<div class="main-page-slogan__image">
				<img
					class="main-page-slogan__image-pic"
					src="/images/static/slogan-pic.png"
					alt="Иллюстрация слогана"
				/>
			</div>
		</div>
	</section>
</template>

<style scoped lang="scss">
.main-page-slogan {
	position: relative;
	padding-top: 65px;
	padding-bottom: 65px;

	background-color: $fill-col-primary-muted;

	@media (max-width: $container-width-laptop) {
		padding-top: 25px;
		padding-bottom: 25px;
	}
	@media (max-width: $container-width-mobile-big) {
		display: none;
	}
	&__inner {
		@include container;

		display: flex;
		align-items: center;
		height: 100%;

		@media (max-width: $container-width-laptop) {
			flex-direction: column;
			justify-content: center;
		}
	}

	&__title {
		max-width: 50%;
		@media (max-width: $container-width-laptop) {
			max-width: 100%;
			text-align: center;
		}
		&-text {
			@include font-title;
			@include text-huge;

			line-height: 1.4;

			@media (max-width: $container-width-tablet) {
				@include text-great;
			}
		}
	}

	&__image {
		position: relative;
		height: 415px;

		&-pic {
			@include object-contain-full;
		}
	}
}
</style>
