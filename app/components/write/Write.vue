<template>
	<LayoutContainer>
		<WriteHeader />
	</LayoutContainer>
</template>

<style scoped>
</style>

<script setup lang="ts">
	import { LayoutContainer } from '@/components/common/Layout';
	import { WriteHeader } from '@/components/write/WriteHeader';
	import { onMounted } from 'vue';
	import { useRecipientStore } from '@/stores/recipient';

	const recipientStore = useRecipientStore();
	onMounted(async () => {
		await recipientStore.fetch();
	});
</script>
