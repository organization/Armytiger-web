<template>
	<section class="Form">
		<h2 class="Form__title">편지 쓰기</h2>
		<div class="Form__description">써서 버튼만 눌러주시면 보내는 건 저희가 알아서 보낼게요</div>

		<form class="Form__form">
			<InputSingleline v-model="sender" name="sender" placeholder="보내는 이" :assitable="false" />
			<InputMultiline v-model="content" name="content" placeholder="내용" />
			<InputSingleline v-model="replyAddress" name="replyAddress" placeholder="답장 받을 주소 (선택사항)" />
			<ButtonCallToAction class="FormButton">
				이대로 보낼게요 <ArrowRight class="FormButton__icon" />
			</ButtonCallToAction>
		</form>
	</section>
</template>

<style lang="less" scoped>
	.Form {
		&__title {
			.font-heading2();
			color: var(--color-grey100);
			margin-bottom: 2px;
		}

		&__description {
			.font-content();
			color: var(--color-grey100);
		}

		&__form {
			margin-top: 32px;

			display: flex;
			flex-direction: column;
			align-items: flex-start;

			& > * {
				margin: 10px 0;
			}

			& > [name="replyAddress"] {
				align-self: stretch;
			}
		}
	}

	.FormButton {
		align-self: flex-end;
		margin-top: 22px;

		&__icon {
			margin-left: 8px;
			transition: transform var(--transition);
		}

		&:hover & {
			&__icon {
				transform: translate(2px);
			}
		}
	}
</style>

<script lang="ts" setup>
	import ArrowRight from '@/images/ArrowRight.svg?component';
	import { ref } from 'vue';
	import { ButtonCallToAction } from '@/components/common/Button';
	import { InputMultiline, InputSingleline } from '@/components/common/Input';

	const sender = ref('');
	const content = ref('');
	const replyAddress = ref('');

	defineExpose({
		sender,
		content,
		replyAddress
	});

</script>
