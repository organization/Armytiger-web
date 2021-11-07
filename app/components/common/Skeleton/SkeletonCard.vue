<template>
	<div class="SkeletonCard" />
</template>

<style lang="less" scoped>
	@import './Skeleton.styles.less';

	.SkeletonCard {
		.Skeleton();

		height: 150px;
		border-radius: @radius-400;
	}
</style>
