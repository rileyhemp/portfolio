<template>
	<div>
		<header>
			<h1>Hi, I'm Riley</h1>
		</header>
		<div class="spacer" />
		<main class="about">
			<div>
				<p>I've been called a workaholic but it's not true. I just like to do things properly.</p>
				<p>
					I've been a copywriter, a professional fiddle player, a line cook, and a door-to-door salesman. I bake sourdough when I'm
					stressed, my favorite beer is all of them, and I'm a champion of the oxford comma.
				</p>
				<p>Currently living in Atlanta with my fiancée and dog, Rocco.</p>
			</div>
			<div class="image-container">
				<img src="../../public/img/kat-and-riley.png" class="about-image" alt="Riley and Kat" />
			</div>
		</main>
	</div>
</template>

<script>
export default {
	name: "About"
};
</script>

<style scoped>
.about {
	display: flex;
	flex-direction: row;
	width: 100%;
	box-sizing: border-box;
	align-items: center;
}
.image-container {
	display: flex;
	margin-left: 2rem;
}
.about-image {
	width: 30vw;
	height: 30vw;
	object-fit: cover;
	object-position: right;
	border-radius: 50%;
}
</style>
