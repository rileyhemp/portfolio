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
						"Run BPM leverages Spotify’s internal audio analysis tools to create custom playlists at specific tempos. This lets runners like myself choose music that's in sync with our desired steps-per-minute. You can also filter by other features, like energy level, accousticness, danceability and more. ",
					tech: ["vue", "node", "sql"],
					timeline: "8 weeks",
					link: "http://runbpm.app",
					github: "https://github.com/rileyhemp/run-bpm"
				},
				{
					name: "Seasonal.cooking",
					description: "A lightweight PWA for finding what's in season and what to eat with it",
					image: "../img/project-images/seasonal-cooking.png",
					about:
						"Even the best cooks forget what’s in season, and there aren’t any good, mobile-friendly sites to reference in store. Season.cooking presents data found in The Flavor Bible as a progressive web app for quick reference and offline viewing.",
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
						"I have a habbit of appending “site:reddit.com” to my google searches so I built Snoogle in React Native to do just that, with a few added features. First, it searches through 100 results and displays the most-commented posts first. Second, you can view results right in the app so there’s no need to toggle between your Reddit and Google clients.",
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
						"I learned more from this project then any other. Previously, my Javascript had been very procedural, repetative, and just bad overall. This forced me to learn (and love) Javascript classes, and gain a deeper appreciation and understanding of OOP. ",
					tech: ["phaser", "js", "html"],
					link: "http://southpark-pinball.web.app",
					github: "https://github.com/rileyhemp/Southpark-Pinball"
				},
				{
					name: "Cyberpunk 2077",
					description: "Adventures in CSS grid",
					image: "../img/project-images/cyberpunk.png",
					about:
						"Built out an amazing design from Jesus Lebarca with plain HTML and CSS. This static site relies heavily on CSS grid to handle the responsivness, and incorporates a number of GSAP animations. ",
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
						"Great Gatsby goes back to the future animated poster. Designed and built with only CSS, HTML and Javascript. Chugs pretty hard on a retina display, so be warned. ",
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
