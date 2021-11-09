<template>
	<section class="Questions">
		<h2 class="Questions__title">자주 묻는 질문</h2>

		<div class="Questions__cards">
			<template v-if="isFinished">
				<CardRow v-for="question in recipient!.commonQuestions">
					<template #title>
						<div class="Questions__question">
							<div class="Questions__content">
								{{ question.question }}
							</div>
						</div>
					</template>

					<div class="Questions__answer">
						<div class="Questions__content">
							{{ question.answer }}
						</div>
					</div>
				</CardRow>
			</template>
			<template v-else>
				<SkeletonCard v-for="_n in 5" />
			</template>
		</div>
	</section>
</template>

<style lang="less" scoped>
	.Questions {
		&__title {
			.font-heading2();
			color: var(--color-grey100);
			margin-bottom: 16px;
		}

		&__cards {
			display: flex;
			flex-direction: column;

			& > * {
				margin: 6px 0;
			}
		}

		&__question, &__answer {
			display: flex;

			&::before {
				.font-figure();

				display: inline-block;
				text-align: center;
				width: 1.2ch;
				line-height: @font-content-lineheight;
				margin-right: 24px;
			}
		}

		&__question::before {
			content: 'Q';
		}

		&__answer::before {
			content: 'A';
		}

		&__content {
			flex: 1;
		}
	}
</style>

<script lang="ts" setup>
	import { CardRow } from '@/components/common/Card';
	import { SkeletonCard } from '@/components/common/Skeleton';
	import { toRefs } from 'vue';
	import { useRecipientStore } from '@/stores/recipient';

	const recipientStore = useRecipientStore();
	const { isFinished, data: recipient } = toRefs(recipientStore);

	defineExpose({
		isFinished,
		recipient
	});
</script>
