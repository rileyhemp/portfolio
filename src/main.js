import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App.vue";

Vue.use(VueRouter);

Vue.config.productionTip = false;

const routes = [
	{
		path: "/",
		component: App
	},
	{
		path: "/about",
		component: App
	}
];

const router = new VueRouter({
	mode: "history",
	routes // short for `routes: routes`
});

new Vue({
	router,
	render: h => h(App)
}).$mount("#app");
