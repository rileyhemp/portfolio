<template>
	<div id="app">
		<div class="outer-wrapper">
			<div class="inner-wrapper">
				<nav>
					<a href="mailto:rileyhemp@gmail.com">rileyhemp@gmail.com</a>
				</nav>
				<home-page />
				<about-page />
			</div>
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
		"about-page": About
	}
};
</script>

<style>
@import "./css/main.scss";
</style>
