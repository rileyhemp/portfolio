<template>
	<div>
		<!-- <header>
			<h1>Hello World</h1>
			<h2>I'm a frontend developer for hire</h2>
			<p>
				I love writing web apps that provide practical solutions to real&#8209;world problems.
			</p>
		</header> -->
		<div class="spacer" />
		<main>
			<h2>Recent projects:</h2>
			<dev-project v-for="project in projects" :key="project.index" :project="project" />
		</main>
	</div>
</template>

<script>
import Project from "./Project.vue";

export default {
	name: "Home",
	components: {
		"dev-project": Project,
	},
	data: function() {
		return {
			projects: [
				{
					name: "Run BPM",
					description: "The best playlist creation tool for runners",
					image: "../img/project-images/run-bpm.png",
					about:
						"A progressive web app that leverages Spotify’s internal audio analysis tools to create custom playlists at specific tempos. This lets runners like myself choose music that's in sync with our desired steps-per-minute. You can also filter tracks by energy level, accousticness, danceability and more. ",
					tech: ["vue", "node", "sql"],
					timeline: "8 weeks",
					link: "http://runbpm.app",
					github: "https://github.com/rileyhemp/run-bpm",
				},
				{
					name: "Cyberpunk 2077",
					description: "Landing page redesign for CD Projekt Red's latest release",
					image: "../img/project-images/cyberpunk.png",
					about: "This project relies heavily on CSS grid to handle the responsiveness, and incorporates a number of fun GSAP animations.",
					collaborators: {
						name: "Jesus Lebarca",
						role: "Designer",
						portfolio: "https://www.behance.net/jesuslabarca",
					},
					role: "Developer",
					timeline: "1 week",
					tech: ["html", "sass", "js"],
					link: "http://cyberpunk.web.app",
					github: "https://github.com/rileyhemp/Cyberpunk_2077",
				},
				{
					name: "South Park Pinball",
					description: "Realistic Javascript pinball simulator with Matter.js and Phaser 3",
					image: "../img/project-images/southpark-pinball.png",
					about:
						"With over 200 hours invested, this project features hyper-realistic physics, realistic graphics, and a level of complexity that really forced me to learn and adopt JavaScript classes and inheritance. I hope you'll take a look at the source code, it's some of the dryest i've ever written.",
					tech: ["phaser", "js", "html"],
					link: "http://southpark-pinball.web.app",
					github: "https://github.com/rileyhemp/Southpark-Pinball",
				},
				{
					name: "Uncharted Garden",
					description: "A lightweight PWA for finding what's in season",
					image: "../img/project-images/uncharted-garden.png",
					about:
						"Even the best cooks forget what’s in season, and there aren't any good mobile sites to quickly reference while shopping. Uncharted Garen presents this data and more as a progressive web app for quick reference.",
					tech: ["react", "styled", "sass"],
					collaborators: {
						name: "Leah Hale",
						role: "Designer",
						portfolio: "",
					},
					timeline: "4 weeks",
					link: "https://uncharted-garden.web.app/",
					github: "https://github.com/rileyhemp/uncharted-garden",
				},
				{
					name: "Animated Poster",
					description: "Vaporwave inspired poster, build entirely with code",
					image: "../img/project-images/animated-poster.png",
					about:
						"Great Gatsby goes back to the future in this animated poster. Open it up and click around, it does things! Click the ground a couple times and watch the car speed up, turn off the headlights, or try clicking on the sun.",
					tech: ["html", "sass", "js"],
					role: "Solo project",
					timeline: "1 week",
					link: "http://animated-poster.web.app",
					github: "https://github.com/rileyhemp/Animated_Poster",
				},
				{
					name: "Gifted",
					description: "Concept app for buying and scheduling gifts for family and friends",
					image: "../img/project-images/gifted.png",
					about:
						"This project was a great exercise in not hard-coding data. All the information is fed from a central JSON object and pulled into each component.",
					tech: ["react", "sass", "js"],
					collaborators: {
						name: "Laura Finelli",
						role: "Designer",
					},
					role: "Developer",
					timeline: "1 week",
					link: "http://gift-scheduler.web.app",
					github: "https://github.com/rileyhemp/gift-scheduler",
				},
				{
					name: "Snoogle",
					description: "It's Google for Reddit",
					image: "../img/project-images/snoogle.png",
					about:
						"Snoogle uses a custom Google search engine to search Reddit and get answers fast. Built in React Native, it sorts the top 100 google results by comments, returning the most active posts first, something Google does not currently do.",
					tech: ["react-native", "node", "redux", "styled"],
					link: "",
					download: "https://elasticbeanstalk-us-east-2-652389813077.s3.us-east-2.amazonaws.com/snoogle.apk",
					demo: "https://vimeo.com/403154292",
					github: "https://github.com/rileyhemp/snoogle",
				},
				{
					name: "Katzen Jammer",
					description: "Interactive Experience",
					image: "../img/project-images/katzen-jammer.png",
					about:
						"Katzen Jammer is a conversational dive bar. Users visit the website and fill out a quick questionnaire that creates a button which lets others know which subjects you are interested in.",
					tech: ["html", "sass", "js"],
					collaborators: {
						name: "Alaina Bock",
						role: "Designer",
					},
					role: "Developer",
					timeline: "1 week",
					link: "http://circuslabs.net/~riley.hemphill/Katzen%20Jammer/",
					github: "https://github.com/rileyhemp/katzen_jammer",
				},
			],
		};
	},
};
</script>
