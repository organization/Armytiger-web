<template>
	<div class="Header">
		<header class="Header__header">
			<Armytiger class="Header__logo" />
			<h1 class="Header__title">인편 작성</h1>
		</header>

		<p class="Header__description" v-if="isFinished">
			{{ recipient.name }} 훈련병에게 인편을 작성해주세요!<br />
			아무런 말이라도, 단 한줄만이라도 좋으니 보내주시면 소중히 읽겠습니다!
		</p>
		<template v-else>
			<SkeletonText :width="360" textStyle="content" />
			<SkeletonText :width="500" textStyle="content" />
		</template>
	</div>
</template>

<style lang="less" scoped>
	.Header {
		&__header {
			display: flex;
			align-items: center;
			margin-bottom: 2px;

			@media @media-over-desktop {
				margin-left: -74px;
			}
		}

		&__logo {
			width: 64px;
			height: 64px;
			margin-right: 10px;
		}

		&__title {
			.font-heading1();
			color: var(--color-grey100);
		}

		&__description {
			.font-content();
			color: var(--color-grey100);
		}
	}
</style>

<script lang="ts" setup>
	import Armytiger from '@/images/Armytiger.svg?component';
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
