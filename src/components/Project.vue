<template>
	<div
		class="project-wrapper"
		:class="collapsed ? null : 'expanded'"
		@click="
			() => {
				collapsed = !collapsed;
			}
		"
	>
		<section>
			<h3>{{ project.name }}</h3>
			<p class="body-1">{{ project.description }}</p>
		</section>
		<article :class="collapsed ? null : 'expanded'">
			<img :src="project.image" alt="" />
			<div class="project-description">
				<p class="body-1">
					{{ project.about }}
				</p>
			</div>
		</article>
	</div>
</template>

<script>
export default {
	name: "Project",
	data: function() {
		return {
			project: this.$attrs.project,
			collapsed: true
		};
	},
	methods: {}
};
</script>

<style scoped>
article {
	height: 0rem;
	overflow: hidden;
	display: flex;
	flex-direction: row-reverse;
	transition: all 0.4s cubic-bezier(0.075, 0.82, 0.165, 1);
}
article.expanded {
	height: 18rem;
}
img {
	max-width: 300px;
	object-fit: cover;
	padding-bottom: 0.75rem;
}
</style>
