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
					image: "../img/project-images/run-bpm.png",
					about:
						"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi",
					tech: ["vue", "node", "sql"],
					link: "http://run-bpm.web.app",
					github: "https://github.com/rileyhemp/run-bpm"
				},
				{
					name: "South Park Pinball",
					description: "Playable Javascript pinball simulator in HTML5 Canvas",
					image: "../img/project-images/southpark-pinball.png",
					about:
						"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi",
					tech: ["phaser", "matter", "js", "html"],
					link: "http://southpark-pinball.web.app",
					github: "https://github.com/rileyhemp/Southpark-Pinball"
				},
				{
					name: "Seasonal.cooking",
					description: "A lightweight PWA for finding what's in season and what to eat with it",
					image: "../img/project-images/seasonal-cooking.png",
					about:
						"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi",
					tech: ["react", "styled", "scss"],
					link: "http://seasonal-cooking-268018.web.app",
					github: "https://github.com/rileyhemp/seasonal-cooking"
				},
				{
					name: "Snoogle",
					description: "It's Google for Reddit",
					image: "../img/project-images/snoogle.png",
					about:
						"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi",
					tech: ["react-native", "node", "redux", "styled"],
					link: "#",
					github: "https://github.com/rileyhemp/snoogle"
				},
				{
					name: "Cyberpunk 2077",
					description: "Adventures in CSS Grid",
					image: "../img/project-images/cyberpunk.png",
					about:
						"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi",
					tech: ["html", "scss", "js", "gsap"],
					link: "http://cyberpunk.web.app",
					github: null
				},
				{
					name: "Animated Poster",
					description: "Vaporwave inspired animations with HTML and CSS.",
					image: "../img/project-images/animated-poster.png",
					about:
						"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi",
					tech: ["html", "css", "js"],
					link: "http://animated-poster.web.app",
					github: null
				},
				{
					name: "Gifted",
					description: "Schedule, track, and order gifts for friends' birthdays",
					image: "../img/project-images/gifted.png",
					about:
						"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi",
					tech: ["react", "styled"],
					link: "gift-scheduler.web.app",
					github: "https://github.com/rileyhemp/gift-scheduler"
				}
			]
		};
	}
};
</script>

<style>
@import "./css/main.scss";
</style>
