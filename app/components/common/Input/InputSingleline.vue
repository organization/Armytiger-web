<template>
	<label class="Input InputSingleline">
		<input
			class="Input__input"
			:type="type"
			:placeholder="placeholder"
			:autocomplete="assitable ? 'on' : 'off'"
			:autocorrect="assitable ? 'on' : 'off'"
			:autocapitalize="assitable ? 'on' : 'off'"
			:spellcheck="assitable ? 'true' : 'false'"
			:maxlength="maxlength"
			:value="value"
			@input="$emit('update:value', $event)"
		>

		<span class="Input__label">{{ placeholder }}</span>
	</label>
</template>

<style lang="less" scoped>
	@import './Input.styles.less';
</style>

<script lang="ts" setup>
	withDefaults(defineProps<{
		type?: string,
		maxlength?: number,
		assitable?: boolean,
		placeholder: string,
		value: string
	}>(), {
		type: 'text',
		assitable: false
	});

	defineEmits(['update:value']);
</script>
