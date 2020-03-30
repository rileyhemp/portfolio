<template>
	<div id="app">
		<div class="outer-wrapper">
			<div class="inner-wrapper">
				<nav>
					<ul>
						<a href="#"></a
						>Projects
					</ul>
					<ul>
						<a href="#"></a
						>About
					</ul>
				</nav>
				<header>
					<h1>Hi, I'm Riley</h1>
					<h2>I'm a frontend engineer for-hire</h2>
					<p>I love writing web apps that provide practical solutions to real&#8209;world problems.</p>
				</header>
				<div class="spacer" />
				<main>
					<h2>Latest Projects</h2>
					<dev-project v-for="project in projects" :key="project.index" :name="project.name" :description="project.description" />
				</main>
			</div>
		</div>
	</div>
</template>

<script>
import Project from "./components/Project.vue";
export default {
	name: "App",
	components: {
		"dev-project": Project
	},
	data: function() {
		return {
			projects: [
				{
					name: "Run BPM",
					description: "Unlocking Spotify's hidden power"
				}
			]
		};
	}
};
</script>

<style>
@import "./css/main.scss";
</style>
