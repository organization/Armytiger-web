<template>
	<section class="CounterSet">
		<div class="CounterSet__item">
			<CounterNumber v-for="number in clocks.days" :number="number" />
			<span class="CounterSet__divider">
				일
			</span>
		</div>

		<div class="CounterSet__item">
			<CounterNumber v-for="number in clocks.hours" :number="number" />
			<span class="CounterSet__divider">:</span>
			<CounterNumber v-for="number in clocks.minutes" :number="number" />
			<span class="CounterSet__divider">:</span>
			<CounterNumber v-for="number in clocks.seconds" :number="number" />
		</div>
	</section>
</template>

<style lang="less" scoped>
	.CounterSet {
		display: flex;

		&__item {
			.font-figure();

			display: flex;
			margin: 0 5px;

			&:first-child {
				margin-left: 0;
			}

			&:last-child {
				margin-right: 0;
			}
		}
	}
</style>

<script lang="ts" setup>
	import { computed, onMounted, onUnmounted, ref } from 'vue';
	import CounterNumber from './CounterNumber.vue';

	const props = defineProps<{
		target: number
	}>();

	const current = ref(Date.now());

	let intervalId: number | null = null;

	onMounted(() => {
		intervalId = setInterval(() => {
			current.value = Date.now();
		}, 50);
	});

	onUnmounted(() => {
		if (intervalId)
			clearInterval(intervalId)
	});

	const calculate = (unit: number, unitBase: number = Infinity) => {
		const leftTime = Math.max(0, props.target - current.value);
		const countNumber = Math.floor(leftTime / unit) % unitBase;
		const count = countNumber.toString().padStart(2, '0');

		return count.split('');
	};

	const clocks = computed(() => ({
		seconds: calculate(1000, 60),
		minutes: calculate(1000 * 60, 60),
		hours: calculate(1000 * 60 * 60, 24),
		days: calculate(1000 * 60 * 60 * 24)
	}));
</script>
