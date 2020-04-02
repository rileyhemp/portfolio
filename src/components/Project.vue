<template>
	<article>
		<div v-if="project.demo && showPlayer" class="vimeo-player-container">
			<button class="close-player" @click="showPlayer = false">X</button>
			<vimeo-player class="vimeo-player" :video-id="project.demo" :player-height="650"></vimeo-player>
		</div>
		<img class="project-image" :src="project.image" alt="" />
		<div class="project-description">
			<h3>{{ project.name }}</h3>
			<p class="body-1 semi-bold">{{ project.description }}</p>
			<div class="tech">
				<img class="tech-logo" v-for="tech in project.tech" :key="tech.index" :src="'../img/tech-logos/' + tech + '.png'" />
			</div>
			<p class="body-1">{{ project.about }}</p>
			<p class="body-1" v-if="project.collaborators">{{ project.collaborators.role + ": " + project.collaborators.name }}</p>

			<div class="link-container">
				<a v-if="project.link" :href="project.link">View Project</a>
				<a v-if="project.demo" style="cursor:pointer" @click="showPlayer = true">View Demo</a>
				<a v-if="project.download" :href="project.download">Download APK</a>
				<a v-if="project.github" :href="project.github">Github</a>
			</div>
		</div>
	</article>
</template>

<script>
import { vueVimeoPlayer } from "vue-vimeo-player";
export default {
	name: "Project",
	components: { "vimeo-player": vueVimeoPlayer },
	data: function() {
		return {
			project: this.$attrs.project,
			showPlayer: false
		};
	},
	methods: {}
};
</script>

<style scoped>
article {
	overflow: visible;
	display: flex;
	justify-content: center;
	flex-direction: row-reverse;
	transition: all 0.4s cubic-bezier(0.075, 0.82, 0.165, 1);
	padding: 2.5rem 0 1.75rem 0;
	border-bottom: 5px solid rgba(0, 0, 0, 0.2);
}
.project-image {
	max-width: 20rem;
	object-fit: cover;
	border-radius: 4px;
	box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
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
}
.link-container {
	display: flex;
	justify-content: flex-start;
	position: absolute;
	bottom: 0;
}
.tech {
	display: flex;
	padding-bottom: 0.5rem;
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
</style>
