<template>
	<div>
		<Header />
		<div id="wrapper">
			<Sidebar />
			<div id="content-wrapper">
                <slot></slot>
				<Footer />
			</div>
		</div>
	</div>
</template>

<script>
import Header from "../../Header.vue";
import Sidebar from "../../Sidebar.vue";
import Footer from "../../Footer.vue";

export default {
    name: "UserLayout",
	components: {
		Header,
		Sidebar,
		Footer
	},
	created() {
		document.querySelector("body").style.backgroundColor = "#fff";
	}
};
</script>