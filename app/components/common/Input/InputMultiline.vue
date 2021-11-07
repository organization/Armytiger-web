<template>
	<label
		class="InputMultiline"
		:class="{ 'InputMultiline--empty': !modelValue }"
		:style="{ height, minHeight: `${minHeight}px` }"
	>
		<textarea
			class="InputMultiline__input"
			:placeholder="placeholder"
			:autocomplete="assitable ? 'on' : 'off'"
			:autocorrect="assitable ? 'on' : 'off'"
			:autocapitalize="assitable ? 'on' : 'off'"
			:spellcheck="assitable ? 'true' : 'false'"
			:value="modelValue"
			ref="textArea"
			@input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
		/>

		<span class="InputMultiline__label">{{ placeholder }}</span>
	</label>
</template>

<style lang="less" scoped>
	@import './Input.styles.less';

	.InputMultiline {
		.Input();
		align-self: stretch;

		height: initial;
		overflow: hidden;

		&__input {
			width: 100%;
			resize: none;
			overflow: hidden;
		}
	}
</style>

<script lang="ts" setup>
	import { nextTick, ref, watch } from 'vue';

	const textArea = ref<HTMLTextAreaElement | null>(null);
	const height = ref('auto');
	const props = withDefaults(defineProps<{
		placeholder: string,
		assitable?: boolean,
		minHeight?: number,
		modelValue: string
	}>(), {
		assitable: false,
		minHeight: 300
	});

	watch(
		() => props.modelValue,
		async () => {
			const inputElem = textArea.value;
			if (!inputElem) {
				return;
			}

			height.value = 'auto';

			await nextTick();
			height.value = `${inputElem.scrollHeight}px`;
		}
	);

	defineEmits(['update:modelValue']);
</script>
