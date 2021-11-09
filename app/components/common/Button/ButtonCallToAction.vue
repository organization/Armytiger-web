<template>
	<button class="ButtonCallToAction" @click="$emit('click')" type="button">
		<slot></slot>
	</button>
</template>

<style lang="less" scoped>
	.ButtonCallToAction {
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 16px 20px;
		position: relative;

		background: var(--color-grey900);
		border: @border_width-400 solid var(--color-theme400);
		border-radius: @border_radius-400;
		box-shadow: var(--shadow-outer400);
		cursor: pointer;
		transition: all var(--transition);

		.font-ui();
		color: var(--color-grey100);

		&::before {
			content: '';
			display: block;

			position: absolute;
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;

			background: linear-gradient(97deg, #3B58ED 13.55%, #3BBEF5 82.22%);
			border-radius: @border_radius-400;
			filter: blur(20px);
			z-index: -1;

			transform: scale(0.875);
			transition: transform var(--transition);
		}

		&:hover {
			background: var(--color-theme400);
			color: white;
			border-color: white;

			&::before {
				transform: scale(1);
			}
		}
	}
</style>

<script lang="ts" setup>
	defineEmits([ 'click' ]);
</script>
