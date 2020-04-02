<template>
	<div id="app">
		<div class="outer-wrapper">
			<div class="inner-wrapper">
				<nav>
					<a href="">rileyhemp@gmail.com</a>
					<ul>
						<li>
							<a :class="projectsPage ? 'current' : null" @click="projectsPage = true" href="/">Projects</a>
						</li>
						<li>
							<a :class="projectsPage ? null : 'current'" @click="projectsPage = false" href="/about">About</a>
						</li>
					</ul>
				</nav>
				<header>
					<h1>Hello World</h1>
					<h2>I'm a frontend developer for-hire</h2>
					<p>
						I love writing web apps that provide practical solutions to real&#8209;world problems with an emphasis on stability and
						usability.
					</p>
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
						"Run BPM leverages Spotify’s internal audio analysis tools to create custom playlists at specific tempos. This lets runners like myself choose music that's in sync with our desired steps-per-minute. You can also filter tracks by energy level, accousticness, danceability and more. ",
					tech: ["vue", "node", "sql"],
					timeline: "8 weeks",
					link: "http://runbpm.app",
					github: "https://github.com/rileyhemp/run-bpm"
				},
				{
					name: "Seasonal.cooking",
					description: "A lightweight PWA for finding what's in season and what to cook it with",
					image: "../img/project-images/seasonal-cooking.png",
					about:
						"Even the best cooks forget what’s in season, and there aren't any good mobile sites to quickly reference while shopping. Seasonal.cooking presents this data and more as a progressive web app for quick reference and easy offline viewing.",
					tech: ["react", "styled", "sass"],
					collaborators: {
						name: "Leah Hale",
						role: "Illustrations",
						portfolio: ""
					},
					timeline: "4 weeks",
					link: "http://seasonal-cooking-268018.web.app",
					github: "https://github.com/rileyhemp/seasonal-cooking"
				},
				{
					name: "Snoogle",
					description: "It's Google for Reddit",
					image: "../img/project-images/snoogle.png",
					about:
						"Snoogle uses a custom Google search engine to discover self posts on Reddit and get answers fast. Built in React Native and runs on Android. Don't plan on releasing this one, but feel free to download the APK.",
					tech: ["react-native", "node", "redux", "styled"],
					link: "",
					download: "https://elasticbeanstalk-us-east-2-652389813077.s3.us-east-2.amazonaws.com/snoogle.apk",
					demo: "403154292",
					github: "https://github.com/rileyhemp/snoogle"
				},
				{
					name: "South Park Pinball",
					description: "Playable Javascript pinball simulator in HTML5 Canvas",
					image: "../img/project-images/southpark-pinball.png",
					about:
						"Built using Phaser 3 and Matter.js, this project forced me to really understand how OOP works and how to write it. I cried a lot while building this.",
					tech: ["phaser", "js", "html"],
					link: "http://southpark-pinball.web.app",
					github: "https://github.com/rileyhemp/Southpark-Pinball"
				},
				{
					name: "Cyberpunk 2077",
					description: "Adventures in CSS grid",
					image: "../img/project-images/cyberpunk.png",
					about:
						"Found this site on Behance and just had to make it real. This project relies heavily on CSS grid to handle the responsivness, and incorporates a number of fun GSAP animations. ",
					collaborators: {
						name: "Jesus Lebarca",
						role: "Designer",
						portfolio: "https://www.behance.net/jesuslabarca"
					},
					role: "Developer",
					timeline: "1 week",
					tech: ["html", "sass", "js"],
					link: "http://cyberpunk.web.app",
					github: "https://github.com/rileyhemp/Cyberpunk_2077"
				},
				{
					name: "Animated Poster",
					description: "Vaporwave inspired animations with HTML and CSS.",
					image: "../img/project-images/animated-poster.png",
					about:
						"Great Gatsby goes back to the future animated poster. Designed and built with only CSS, HTML and Javascript. May or may not chug on a retina display. ",
					tech: ["html", "sass", "js"],
					role: "Solo project",
					timeline: "1 week",
					link: "http://animated-poster.web.app",
					github: "https://github.com/rileyhemp/Animated_Poster"
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
