<template>
    <button class="button"
        :class="buttonClass">
        <span class="button__text">
            {{ text }}
        </span>
    </button>
</template>

<script setup lang="ts">
import type { PropType } from 'vue';

type TButtonTheme = 'primary' | 'transparent';
type TButtonSize = 'medium';

const props = defineProps({
    text: {
        type: String,
        required: false,
        default: null
    },
    theme: {
        type: String as PropType<TButtonTheme>,
        required: false,
        default: 'primary'
    },
    size: {
        type: String as PropType<TButtonSize>,
        required: false,
        default: 'medium'
    }
});

const buttonClass = computed(() => {
    return [props.theme, props.size]
})

</script>

<style scoped lang="scss">
.button {
    border-radius: rem($border-radius-medium);

    // theme
    &.primary {
        color: $txt-col-primary-invert;
        background-color: $button-col-primary;
    }

    &.transparent {
        color: $txt-col-secondary;
        border: 2px solid $border-col-primary;
        background-color: transparent;
    }

    &.transparent & {
        &__text {
            @include font-main;
            @include text-average($font-weight-semibold);
        }
    }


    // size
    &.medium {
        $height-desktop: 50px;

        height: rem($height-desktop);
        padding-left: rem(34px);
        padding-right: rem(34px);
    }

    &__text {
        @include text-average;
        @include font-title;
    }
}
</style>