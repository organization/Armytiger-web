<template>
	<section class="Counter">
		<h2 class="Counter__title">남은 시간</h2>

		<p class="Counter__content">
			<template v-if="isFinished">
				<CounterSet class="Counter__counter" :target="recipient!.dischargeAt" />
				<span class="Counter__after">
					후에 제가 사회로 다시 복귀합니다
				</span>
			</template>
			<template v-else>
				<SkeletonText class="Counter__figure" :width="150" textStyle="figure" />
				<SkeletonText class="Counter__after" :width="250" textStyle="figure" />
			</template>
		</p>
	</section>
</template>

<style lang="less" scoped>
	.Counter {
		&__title {
			.font-heading2();

			color: var(--color-grey100);
			margin-bottom: 16px;
		}

		&__content {
			display: flex;
			align-items: baseline;

			.font-content();
			color: var(--color-grey100);
		}

		&__counter {
			margin-right: 6px;
		}

		&__figure {
			.font-figure();
			margin-right: 6px;
		}

		&__after {
			opacity: .3;
		}
	}
</style>

<script lang="ts" setup>
	import { CounterSet } from '@/components/common/Counter';
	import { SkeletonText } from '@/components/common/Skeleton';
	import { toRefs } from 'vue';
	import { useRecipientStore } from '@/stores/recipient';

	const recipientStore = useRecipientStore();
	const { isFinished, data: recipient } = toRefs(recipientStore);

	defineExpose({
		isFinished,
		recipient
	});
</script>
