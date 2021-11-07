<template>
	<div class="CardRow">
		<div class="CardRow__header">
			<slot name="title" />
		</div>

		<div class="CardRow__content">
			<slot />
		</div>
	</div>
</template>

<style lang="less" scoped>
	.CardRow {
		background: var(--color-grey900);
		color: var(--color-grey100);
		border-radius: @radius-400;
		padding: 10px;

		display: flex;
		flex-direction: column;

		&__header {
			.font-ui();

			padding: 16px 24px;
			padding-bottom: 6px;
		}

		&__content {
			.font-content();

			overflow-wrap: break-word;
			padding: 16px 24px;
			padding-top: 6px;
		}
	}
</style>
