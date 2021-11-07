<template>
	<div class="SkeletonText" :class="`SkeletonText--${textStyle}`" :style="{ width: `${width}px` }" />
</template>

<style lang="less" scoped>
	@import './Skeleton.styles.less';

	@text-styles: heading1 heading2 ui content figure;
	@text-styles-length: length(@text-styles);

	.SkeletonTextStyle(@text-style-index) when (@text-style-index > 0) {
		.SkeletonTextStyle((@text-style-index - 1));

		@text-style-name: extract(@text-styles, @text-style-index);
		.SkeletonText--@{text-style-name} {
			@text-style-size-name: "font-@{text-style-name}-size";
			@text-style-size: @@text-style-size-name;

			@text-style-lineheight-name: "font-@{text-style-name}-lineheight";
			@text-style-lineheight: @@text-style-lineheight-name;

			height: @text-style-size;
			margin: ((@text-style-lineheight - @text-style-size) / 2) 0;
		}
	}

	.SkeletonTextStyle(@text-styles-length);
	.SkeletonText {
		.Skeleton();
	}
</style>

<script lang="ts" setup>
	const props = defineProps<{
		width: number,
		textStyle:
			| 'heading1'
			| 'heading2'
			| 'ui'
			| 'content'
			| 'figure',
	}>();
</script>
