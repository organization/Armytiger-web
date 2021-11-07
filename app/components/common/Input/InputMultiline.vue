<template>
	<label class="Input InputMultiline">
		<textarea
			class="Input__input"
			:placeholder="placeholder"
			:autocomplete="assitable ? 'on' : 'off'"
			:autocorrect="assitable ? 'on' : 'off'"
			:autocapitalize="assitable ? 'on' : 'off'"
			:spellcheck="assitable ? 'true' : 'false'"
			:value="value"
			@input="$emit('update:value', $event)"
		/>

		<span class="Input__label">{{ placeholder }}</span>
	</label>
</template>

<style lang="less" scoped>
	@import './Input.styles.less';

	.InputMultiline {
		align-self: stretch;
	}
</style>

<script lang="ts" setup>
	withDefaults(defineProps<{
		assitable?: boolean,
		placeholder: string,
		value: string
	}>(), {
		type: 'text',
		assitable: false
	});

	defineEmits(['update:value']);
</script>
