<template>
	<footer class="footer">
		<div class="footer__row">
			<div class="footer__logo">
				<LayoutLogo />
			</div>
		</div>

		<div class="footer__row">
			<ul class="footer__links">
				<li class="footer__links-item" v-for="link in links" :key="link.text">
					<NuxtLink class="footer__link" to="/">
						{{ link.text }}
					</NuxtLink>
				</li>
			</ul>

			<div class="footer__socials">
				<button class="footer__socials-button">
					<UiIcon name="vk" />
				</button>
				<button class="footer__socials-button">
					<UiIcon name="youtube" />
				</button>
			</div>

			<p class="footer__copyright">© Order Care 2024</p>
		</div>
	</footer>
</template>

<script setup lang="ts">
const links = [
	{ text: 'О нас', path: '#' },
	{ text: 'Наш склад', path: '#' },
	{ text: 'Наши услуги', path: '#' },
	{ text: 'Наши цены', path: '#' },
	{ text: 'FAQ', path: '#' },
	{ text: 'Связь с нами', path: '#' }
]
</script>

<style scoped lang="scss">
.footer {
	@include flex-col-center;

	padding-top: rem(50px);
	padding-bottom: rem(70px);

	&__logo {
		width: rem(155px);
		height: rem(155px);

		@media (max-width: $container-width-tablet) {
			width: rem(118px);
			height: rem(118px);
		}

		@media (max-width: $container-width-mobile) {
			width: rem(110px);
			height: rem(110px);
		}
	}

	&__row {
		@include y-margin-items(90px);

		@media (max-width: $container-width-mobile) {
			@include y-margin-items(50px);
		}
	}

	&__links {
		display: flex;
		align-items: center;

		@media (max-width: $container-width-tablet) {
			flex-direction: column;
			text-align: center;
			gap: 26px;
		}
		&-item {
			@include x-margin-items(26px);
			@media (max-width: $container-width-tablet) {
				margin: 0;
			}
		}
	}

	&__link {
		@include text-normal;
	}

	&__socials {
		@include flex-all-center;

		margin-top: rem(30px);

		&-button {
			@include x-margin-items(24px);
		}
	}

	&__copyright {
		font-size: rem(12px);
		font-weight: $font-weight-regular;

		width: fit-content;
		margin: rem(20px) auto 0;
	}
}
</style>
