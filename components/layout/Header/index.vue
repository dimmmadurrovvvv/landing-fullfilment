<template>
	<header class="header">
		<div class="header__inner">
			<div class="header__col">
				<div class="header__logo">
					<LayoutLogo />
				</div>
			</div>
			<div class="header__col">
				<nav class="header__nav">
					<ul class="header__nav-links">
						<li
							class="header__nav-links-item"
							v-for="(link, idx) in headerLinks"
							:key="idx"
						>
							<NuxtLink class="header__nav-links-item-link" :to="link.path">
								{{ link.text }}
							</NuxtLink>
						</li>
					</ul>
				</nav>
			</div>
			<div class="header__col">
				<div class="header__meta">
					<a class="header__meta-tel" href="tel:+74959999999">
						+7 495 999-99-99
					</a>
				</div>
			</div>
			<ul class="header__row header__nav-links">
				<li
					v-for="(link, idx) in headerLinks"
					:key="idx"
					class="header__nav-links-item"
				>
					<NuxtLink :to="link.path" class="header__nav-links-item-link">
						{{ link.text }}
					</NuxtLink>
				</li>
				<li>
					<a class="header__nav-links-item-link" href="tel:+74959999999">
						+7 495 999-99-99
					</a>
				</li>
			</ul>
			<div class="icon-menu">
				<span></span>
			</div>
		</div>
	</header>
</template>

<script setup lang="ts">
const headerLinks = [
	{ text: 'О нас', path: '#' },
	{ text: 'Наш склад', path: '#' },
	{ text: 'Наши услуги', path: '#' },
	{ text: 'Наши цены', path: '#' },
	{ text: 'FAQ', path: '#' },
	{ text: 'Связь с нами', path: '#' }
]

document?.addEventListener('click', function (e) {
	if (e.target && e.target?.closest('.icon-menu')) {
		document.documentElement.classList.toggle('menu-open')
	}
})
</script>

<style scoped lang="scss">
.header {
	height: rem($header-height-desktop);

	box-shadow: $box-shadow-default;
	background-color: $fill-col-primary;

	&__logo {
		width: rem(36px);
		height: rem(36px);
	}

	&__inner {
		@include flex-space-between;
		@include container;

		height: 100%;
	}

	&__col:not(:first-child) {
		@media (max-width: $container-width-tablet) {
			display: none;
		}
	}

	&__nav {
		&-links {
			display: flex;
			align-items: center;

			&-item {
				@include x-margin-items(0);

				&-link {
					@include text-normal;

					padding: 1px rem(10px);
					font-weight: 600;
				}
			}
		}
	}

	&__meta {
		&-tel {
			@include font-title;
			@include text-normal;
		}
	}
}

.header__row {
	@media (min-width: $container-width-tablet) {
		display: none;
	}

	display: flex;
	flex-direction: column;
	transition: 0.3s all ease;
	gap: 10px;
	position: fixed;
	top: 0;
	right: -100%;
	bottom: 0;
	box-shadow: $box-shadow-default;
	background-color: $fill-col-primary;
	padding: 10px;
	padding-top: calc(rem($header-height-desktop) + rem(10));
	padding-left: 40px;
	align-items: flex-start;

	.menu-open & {
		right: 0;
	}
}

.icon-menu {
	display: none;

	@media (max-width: $container-width-tablet) {
		display: block;
		position: relative;
		width: rem(30);
		height: rem(18);
		cursor: pointer;
		z-index: 5;

		span,
		&::before,
		&::after {
			content: '';
			transition: all 0.3s ease 0s;
			right: 0;
			position: absolute;
			width: 100%;
			height: rem(2);
			background-color: #000;
		}

		&::before {
			top: 0;
		}

		&::after {
			bottom: 0;
		}

		span {
			top: calc(50% - rem(1));
		}

		.menu-open & {
			span {
				width: 0;
			}

			&::before,
			&::after {
			}

			&::before {
				top: calc(50% - rem(1));
				transform: rotate(-45deg);
			}

			&::after {
				bottom: calc(50% - rem(1));
				transform: rotate(45deg);
			}
		}
	}
}
</style>
