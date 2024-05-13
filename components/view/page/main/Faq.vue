<template>
	<section class="main-page-faq">
		<ElCollapse class="main-page-faq__collapse">
			<ElCollapseItem
				class="main-page-faq__collapse-item"
				v-for="(item, idx) in items"
				:key="idx"
				:title="item.question"
				:name="item.question"
			>
				<p class="main-page-faq__collapse-item-text">
					{{ item.answer }}
				</p>
			</ElCollapseItem>
		</ElCollapse>
	</section>
</template>

<script lang="ts" setup>
const items = [
	{
		question: 'Как начать с вами сотрудничество?',
		answer:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
	},
	{
		question: 'С каким минимальным количеством товара\n вы работаете?',
		answer:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
	},
	{
		question: 'С каким минимальным количеством товара\n вы работаете?',
		answer:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
	}
]
</script>

<style scoped lang="scss">
.main-page-faq {
	@include container;

	&__collapse {
		&-item {
			@include y-margin-items(20px);
			&-text {
				@include text-big($font-weight-regular);

				@media (max-width: $container-width-tablet) {
					@include text-normal;
					font-weight: 400;
				}
				color: $txt-col-tetriary;
			}
		}
	}
}
</style>
