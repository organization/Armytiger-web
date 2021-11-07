<template>
	<LayoutContainer class="Write__container">
		<WriteHeader />
		<WriteCounter />
		<WriteQuestions />
		<WriteForm />
	</LayoutContainer>
</template>

<style lang="less" scoped>
	.Write {
		&__container {
			display: flex;
			flex-direction: column;

			& > * {
				margin: 45px 0;

				&:first-child {
					margin-top: 0;
				}

				&:last-child {
					margin-bottom: 0;
				}
			}
		}
	}
</style>

<script lang="ts" setup>
	import { LayoutContainer } from '@/components/common/Layout';
	import { WriteCounter } from '@/components/write/WriteCounter';
	import { WriteForm } from '@/components/write/WriteForm';
	import { WriteHeader } from '@/components/write/WriteHeader';
	import { WriteQuestions } from '@/components/write/WriteQuestions';
	import { onMounted } from 'vue';
	import { useRecipientStore } from '@/stores/recipient';

	const recipientStore = useRecipientStore();
	onMounted(async () => {
		// await recipientStore.fetch();
		setTimeout(() => recipientStore.mock(), 1000);
	});
</script>
