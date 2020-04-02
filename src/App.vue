<template>
	<div id="app">
		<div class="outer-wrapper">
			<div class="inner-wrapper">
				<nav>
					<a href="">rileyhemp@gmail.com</a>
					<ul>
						<li>
							<a :class="$route.path === '/' ? 'current' : null" href="/">Projects</a>
						</li>
						<li>
							<a :class="$route.path === '/about' ? 'current' : null" href="/about">About</a>
						</li>
					</ul>
				</nav>
				<home-page v-if="$route.path === '/'" />
				<about-page v-if="$route.path === '/about'" />
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
