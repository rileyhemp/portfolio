<template>
	<article>
		<img class="project-image" :src="project.image" :alt="project.name" />
		<div class="project-description">
			<h3>{{ project.name }}</h3>
			<p class="body-1 semi-bold">{{ project.description }}</p>
			<div class="tech">
				<img
					class="tech-logo"
					v-for="tech in project.tech"
					:key="tech.index"
					:src="'../img/tech-logos/' + tech + '.png'"
					:alt="tech + ' thumbnail'"
				/>
			</div>
			<p class="body-1">{{ project.about }}</p>
			<p class="body-1" v-if="project.collaborators">{{ project.collaborators.role + ": " + project.collaborators.name }}</p>

			<div class="link-container">
				<a v-if="project.link" :href="project.link" target="_blank">View Project</a>
				<a v-if="project.demo" :href="project.demo" target="_blank">Demo</a>
				<a v-if="project.download" :href="project.download" target="_blank">Download</a>
				<a v-if="project.github" :href="project.github" target="_blank">Source</a>
			</div>
		</div>
	</article>
</template>

<script>
export default {
	name: "Project",
	data: function() {
		return {
			project: this.$attrs.project,
			showPlayer: false,
		};
	},
	methods: {},
};
</script>

<style scoped>
article {
	overflow: visible;
	display: flex;
	justify-content: center;
	flex-direction: column;
	transition: all 0.4s cubic-bezier(0.075, 0.82, 0.165, 1);
	padding: 2.5rem 0 1.75rem 0;
	border-bottom: 5px solid rgba(0, 0, 0, 0.2);
}
.project-image {
	width: 100%;
	max-height: 20rem;
	object-fit: cover;
	object-position: 0 25%;
	border-radius: 4px;
	box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
	margin-bottom: 2rem;
}

.tech-logo {
	height: 3rem;
	padding-right: 2rem;
}

.project-description {
	padding-right: 1rem;
	display: flex;
	flex-direction: column;
	position: relative;
	padding-bottom: 2rem;
}
.link-container {
	display: flex;
	justify-content: flex-start;
	position: absolute;
	bottom: 0;
}
.tech {
	display: flex;
	padding-bottom: 1rem;
}
.vimeo-player-container {
	position: fixed;
	top: 0;
	width: 100%;
	height: 100vh;
	z-index: 1;
	background: rgba(0, 0, 0, 0.9);
	display: flex;
	flex-direction: column;
}
.close-player {
	color: white;
	align-self: flex-end;
	background: transparent;
	border: none;
	outline: none;
	font-size: 24px;
	font-weight: 400;
	cursor: pointer;
	margin: 12px;
	padding: 8px;
}
.vimeo-player {
	z-index: 999;
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
	height: 80%;
}
@media screen and (min-width: 768px) {
	article {
		flex-direction: row-reverse;
	}
	.project-description {
		padding-bottom: 0;
	}
	.project-image {
		margin-bottom: 0;
		max-width: 20rem;
	}
}
</style>
