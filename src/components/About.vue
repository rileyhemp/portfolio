<template>
	<section>
		<h2>About me</h2>
		<article class="about">
			<div>
				<div class="spacer spacer-about" />
				<p class="body-1">I'm a hard worker and enthusiastic learner who likes to do things properly.</p>
				<p class="body-1">
					I've been a copywriter, a door-to-door salesman, and played fiddle in a country band. I bake sourdough when I'm stressed, my
					favorite beer is all of them, and I'm a champion of the oxford comma.
				</p>
				<p class="body-1">Questions, feedback, or looking to fill a position? Send me an email and let's talk: rileyhemp@gmail.com</p>
			</div>
			<img src="../../public/img/kat-and-riley.png" class="about-image" alt="Riley and Kat" />
		</article>
	</section>
</template>

<script>
export default {
	name: "About",
};
</script>

<style scoped>
section {
	margin-top: 2rem;
	margin-bottom: 4rem;
}
.about {
	display: flex;
	flex-direction: column-reverse;
	width: 100%;
	box-sizing: border-box;
	align-items: center;
}
.image-container {
	display: flex;
}
.about-image {
	max-width: 20rem;
	margin-top: 1rem;
	object-fit: cover;
	border-radius: 4px;
	box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
	align-self: flex-start;
}
.spacer-about {
	margin-bottom: 2rem;
}
@media screen and (min-width: 768px) {
	.about {
		flex-direction: row;
	}
	.about-image {
		align-self: unset;
		margin-left: 1rem;
	}
}
</style>
