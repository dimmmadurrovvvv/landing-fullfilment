<template>
	<div class="logo">
		<NuxtLink class="logo__link" to="/">
			<img
				class="logo__image"
				src="/images/static/logo.png"
				alt="Логотип компании"
			/>
		</NuxtLink>
	</div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.logo {
	position: relative;
	border-radius: 50%;

	&__link {
		@include absolute-all-null;
	}

	&__img {
		@include object-contain-full;
	}
}
</style>
