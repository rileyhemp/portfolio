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
					<dev-project v-for="project in projects" :key="project.index" :project="project" />
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
					description: "Spotify playlists on steroids",
					image: "https://via.placeholder.com/300x300.png/09f/fff",
					about:
						"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi",
					tech: ["vue", "node", "express", "sql"],
					link: "http://run-bpm.web.app",
					github: "https://github.com/rileyhemp/run-bpm"
				},
				{
					name: "South Park Pinball",
					description: "Spotify playlists on steroids",
					image: "https://via.placeholder.com/300x300.png/09f/fff",
					about:
						"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi",
					tech: ["vue", "node", "express", "sql"],
					link: "http://run-bpm.web.app",
					github: "https://github.com/rileyhemp/run-bpm"
				},
				{
					name: "Seasonal.cooking",
					description: "Spotify playlists on steroids",
					image: "https://via.placeholder.com/300x300.png/09f/fff",
					about:
						"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi",
					tech: ["vue", "node", "express", "sql"],
					link: "http://run-bpm.web.app",
					github: "https://github.com/rileyhemp/run-bpm"
				},
				{
					name: "Snoogle",
					description: "Spotify playlists on steroids",
					image: "https://via.placeholder.com/300x300.png/09f/fff",
					about:
						"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi",
					tech: ["vue", "node", "express", "sql"],
					link: "http://run-bpm.web.app",
					github: "https://github.com/rileyhemp/run-bpm"
				},
				{
					name: "Cyberpunk 2077",
					description: "Spotify playlists on steroids",
					image: "https://via.placeholder.com/300x300.png/09f/fff",
					about:
						"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi",
					tech: ["vue", "node", "express", "sql"],
					link: "http://run-bpm.web.app",
					github: "https://github.com/rileyhemp/run-bpm"
				},
				{
					name: "Animated Poster",
					description: "Spotify playlists on steroids",
					image: "https://via.placeholder.com/300x300.png/09f/fff",
					about:
						"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi",
					tech: ["vue", "node", "express", "sql"],
					link: "http://run-bpm.web.app",
					github: "https://github.com/rileyhemp/run-bpm"
				},
				{
					name: "Gifted",
					description: "Spotify playlists on steroids",
					image: "https://via.placeholder.com/300x300.png/09f/fff",
					about:
						"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi",
					tech: ["vue", "node", "express", "sql"],
					link: "http://run-bpm.web.app",
					github: "https://github.com/rileyhemp/run-bpm"
				}
			]
		};
	}
};
</script>

<style>
@import "./css/main.scss";
</style>
