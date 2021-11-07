<template>
	<label class="InputSingleline" :class="{ 'InputSingleline--empty': !modelValue }">
		<input
			class="InputSingleline__input"
			:type="type"
			:placeholder="placeholder"
			:autocomplete="assitable ? 'on' : 'off'"
			:autocorrect="assitable ? 'on' : 'off'"
			:autocapitalize="assitable ? 'on' : 'off'"
			:spellcheck="assitable ? 'true' : 'false'"
			:maxlength="maxlength"
			:value="modelValue"
			@input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
		>

		<span class="InputSingleline__label">{{ placeholder }}</span>
	</label>
</template>

<style lang="less" scoped>
	@import './Input.styles.less';

	.InputSingleline {
		.Input();
	}
</style>

<script lang="ts" setup>
	withDefaults(defineProps<{
		type?: string,
		maxlength?: number,
		assitable?: boolean,
		placeholder: string,
		modelValue: string
	}>(), {
		type: 'text',
		assitable: false
	});

	defineEmits(['update:modelValue']);
</script>
