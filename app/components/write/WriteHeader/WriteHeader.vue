<template>
	<header class="Header">
		<Armytiger class="Header__logo" />
		<h1 class="Header__title font-Heading1">
			인편 작성
		</h1>
	</header>
</template>

<style scoped>
	@import "@/styles/media.css";

	.Header {
		display: flex;
		align-items: center;

		&__logo {
			width: 64px;
			height: 64px;
			margin-right: 10px;
		}

		@media (--media-over-desktop) {
			margin-left: -74px;
		}
	}
</style>

<script setup lang="ts">
	import Armytiger from '@/images/Armytiger.svg?component';
	import { toRefs } from 'vue';
	import { useRecipientStore } from '@/stores/recipient';

	const recipientStore = useRecipientStore();
	const { loadingState, data: recipient } = toRefs(recipientStore);
</script>
