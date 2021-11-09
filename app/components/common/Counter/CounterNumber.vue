<template>
	<div class="CounterNumber">
		<transition name="Number" mode="out-in">
			<span :key="number">
				{{ number }}
			</span>
		</transition>
	</div>
</template>

<style lang="less" scoped>
	.CounterNumber {
		width: 1ch;
		text-align: center;

		span {
			display: inline-block;
		}
	}

	.Number {
		&-enter-active, &-leave-active {
			transition: all var(--transition);
		}

		&-enter-from {
			transform: translateY(-10px);
			opacity: 0;
		}

		&-leave-to {
			transform: translateY(10px);
			opacity: 0;
		}
	}
</style>

<script lang="ts" setup>
	defineProps<{
		number: string
	}>();
</script>
