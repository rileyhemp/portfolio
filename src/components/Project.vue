<template>
	<article>
		<img :src="project.image" alt="" />
		<div class="project-description">
			<h3>{{ project.name }}</h3>
			<p class="body-1">{{ project.description }}</p>
			<p class="body-1">
				{{ project.about }}
			</p>
		</div>
	</article>
</template>

<script>
export default {
	name: "Project",
	data: function() {
		return {
			project: this.$attrs.project
		};
	},
	methods: {}
};
</script>

<style scoped>
article {
	overflow: hidden;
	display: flex;
	flex-direction: row-reverse;
	transition: all 0.4s cubic-bezier(0.075, 0.82, 0.165, 1);
	padding: 2.5rem 0 1.75rem 0;
	border-top: 5px solid rgba(0, 0, 0, 0.2);
}
img {
	max-width: 20rem;
	object-fit: cover;
	padding-bottom: 0.75rem;
}
.project-description {
	padding-right: 1rem;
	display: flex;
	flex-direction: column;
}
</style>
