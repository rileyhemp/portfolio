<template>
	<div id="app">
		<div class="outer-wrapper">
			<div class="inner-wrapper">
				<nav>
					<a href="">rileyhemp@gmail.com</a>
					<ul>
						<li>
							<a :class="projectsPage ? 'current' : null" @click="projectsPage = true" href="#">Projects</a>
						</li>
						<li>
							<a :class="projectsPage ? null : 'current'" @click="projectsPage = false" href="#">About</a>
						</li>
					</ul>
				</nav>
				<header>
					<h1>Hello World</h1>
					<h2>I'm a frontend developer for-hire</h2>
					<p>I love writing web apps that provide practical solutions to real&#8209;world problems.</p>
				</header>
				<div class="spacer" />
				<main>
					<h2>Show me the work</h2>
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
			projectsPage: true,
			projects: [
				{
					name: "Run BPM",
					description: "Spotify playlists on steroids",
					image: "../img/project-images/run-bpm.png",
					about:
						"When I run, I take about 160 steps a minute. And I always wanted a tool that let me pick music around that tempo. So this year, I made one. Import hundreds of songs, and filter down by energy level, tempo, positivity, and more. Vue, Express and Sqlite",
					tech: ["vue", "node", "sql"],
					link: "http://run-bpm.web.app",
					github: "https://github.com/rileyhemp/run-bpm"
				},
				{
					name: "Seasonal.cooking",
					description: "A lightweight PWA for finding what's in season and what to eat with it",
					image: "../img/project-images/seasonal-cooking.png",
					about:
						"Ever walk into a store and not know what’s in season? Seasonal.cooking can run offline and tells you exactly what’s fresh. Plus, it pairs with data from the Flavor Bible so you’ll never wonder what goes with what. Also a good excuse to learn about progressive web apps.",
					tech: ["react", "styled", "sass"],
					link: "http://seasonal-cooking-268018.web.app",
					github: "https://github.com/rileyhemp/seasonal-cooking"
				},
				{
					name: "Snoogle",
					description: "It's Google for Reddit",
					image: "../img/project-images/snoogle.png",
					about:
						"I built this app in react native to simplify my lifelong habbit of appending “site:reddit.com” to my google searches. You really can’t trust blogs these days. What makes Snoogle special is that it searches through over 100 results and displays the posts with the most comments first, right in the app.",
					tech: ["react-native", "node", "redux", "styled"],
					link: "",
					github: "https://github.com/rileyhemp/snoogle"
				},
				{
					name: "South Park Pinball",
					description: "Playable Javascript pinball simulator in HTML5 Canvas",
					image: "../img/project-images/southpark-pinball.png",
					about:
						"Hands down the most frusterating and educational project i’ve ever worked on. Fully playable and pretty darn realistic pinball sim built with Phaser 3 and Matter.js. Several hundred hours over 8 weeks and it’s still buggy. Never again.",
					tech: ["phaser", "js", "html"],
					link: "http://southpark-pinball.web.app",
					github: "https://github.com/rileyhemp/Southpark-Pinball"
				},
				{
					name: "Cyberpunk 2077",
					description: "Adventures in CSS grid",
					image: "../img/project-images/cyberpunk.png",
					about:
						"Recreated an amazing design from Jesus Lebarca with vanilla everything. Relied heavily on CSS grid to handle the responsivness.",
					tech: ["html", "sass", "js"],
					link: "http://cyberpunk.web.app",
					github: null
				},
				{
					name: "Animated Poster",
					description: "Vaporwave inspired animations with HTML and CSS.",
					image: "../img/project-images/animated-poster.png",
					about:
						"Great Gatsby goes back to the future. Designed and created this whole thing in only CSS, HTML and Javascript. Goes well with synthwave. Goes terrible on retina displays.",
					tech: ["html", "sass", "js"],
					link: "http://animated-poster.web.app",
					github: null
				}
				// {
				// 	name: "Gifted",
				// 	description: "Schedule, track, and order gifts for friends' birthdays",
				// 	image: "../img/project-images/gifted.png",
				// 	about:
				// 		"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi",
				// 	tech: ["react", "styled"],
				// 	link: "gift-scheduler.web.app",
				// 	github: "https://github.com/rileyhemp/gift-scheduler"
				// }
			]
		};
	}
};
</script>

<style>
@import "./css/main.scss";
</style>
