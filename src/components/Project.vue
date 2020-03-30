<template>
	<article>
		<h3>{{ project.name }}</h3>
		<p class="body-1">{{ project.description }}</p>
	</article>
</template>

<script>
export default {
	name: "Project",
	data: function() {
		return {
			project: this.$attrs
		};
	}
};
</script>
