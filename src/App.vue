<template>
	<div id="app" class="outer-wrapper">
		<div class="inner-wrapper">
			<main class="main-container">
				<nav>
					<ul>
						<li><a>work</a></li>
						<li><a>about</a></li>
						<li><a href="mailto:rileyhemp@gmail.com">contact</a></li>
					</ul>
				</nav>
				<home-page />
				<about-page />
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
		"about-page": About
	}
};
// 427
// 2225
</script>

<style>
@import "./css/main.scss";
</style>
