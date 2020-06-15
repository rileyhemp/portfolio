<template>
	<div id="app" class="outer-wrapper">
		<div class="inner-wrapper">
			<main class="main-container">
				<nav>
					<ul>
						<!-- <li><a @click="() => this.scrollWork()">work</a></li> -->
						<li><a @click="() => this.scrollAbout()">about</a></li>
						<li>
							<a target="_blank" :href="'https://drive.google.com/file/d/1qT-4eipWMavR3LVrgwmbeJsgX9p9TqJc/view?usp=sharing'">Resume</a>
						</li>
						<li><a target="_blank" :href="'https://github.com/rileyhemp'">Github</a></li>
						<li><a target="_blank" :href="'https://www.linkedin.com/in/riley-hemphill-650924103/'">Linked In</a></li>
					</ul>
					<h4>Riley Hemphill – Developer</h4>
				</nav>
				<home-page />
				<about-page />
				<footer>
					<a @click="() => this.scrollHome()">Back to top</a>
				</footer>
			</main>
		</div>
	</div>
</template>

<script>
import Home from "./components/Home";
import About from "./components/About";
export default {
	name: "App",
	components: {
		"home-page": Home,
		"about-page": About,
	},
	methods: {
		scrollWork() {
			window.scrollTo({
				top: 427,
				left: 0,
				behavior: "smooth",
			});
		},
		scrollAbout() {
			window.scrollTo({
				top: 3000,
				left: 0,
				behavior: "smooth",
			});
		},
		scrollHome() {
			window.scrollTo({
				top: 0,
				left: 0,
				behavior: "smooth",
			});
		},
	},
};
</script>

<style>
@import "./css/main.scss";
</style>
