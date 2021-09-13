<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/vue/2.6.11/vue.min.js"></script>
    <script src="https://unpkg.co/gsap@3/dist/gsap.min.js"></script>
    <title>Document</title>
</head>
<style>
    @import url("https://fonts.googleapis.com/css2?family=Rubik:wght@400;600&display=swap");

* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}

body {
	font-family: "Rubik", sans-serif;
	min-height: 100vh;
	display: grid;
	place-items: center;

	--black: #010101;
	--white: #ebebeb;
	--dark-grey: #2e2e2e;
	--grey: #5b5b5b;

	background-color: var(--black);
}

ul {
	list-style: none;
}

a {
	text-decoration: none;
	color: inherit;
}

.container {
	width: 960px;
	height: 70vh;
	position: relative;
	color: var(--white);
	overflow: hidden;
}

header {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	padding: 3em;
	pointer-events: all;
}
header .navbar {
	display: grid;
	grid-template-columns: 30px 30px 1fr;
	justify-items: flex-start;
}
header .navbar li {
	font-size: 0.9em;
}
header .navbar li:last-child {
	justify-self: flex-end;
}

section.page-2 {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: var(--white);
	z-index: 1;
	mix-blend-mode: difference;
	pointer-events: none;
}

section.page-1 {
	padding: 3em;
	position: relative;
	height: 100%;
	z-index: -1;
	display: grid;
	grid-template-columns: 1fr 1fr;
}

.logo {
	position: absolute;
	top: 40%;
	left: 0;
	transform: translateY(-60%);
}
.logo h1 {
	font-size: 8em;
	font-weight: 400;
}

.desc {
	width: 40%;
	align-self: flex-end;
	margin-left: 30%;
	margin-bottom: 30%;
}
.desc p {
	font-size: 0.9em;
	line-height: 1.5em;
}

.photo {
	width: 400px;
	height: 500px;
	justify-self: center;
	align-self: center;
	position: relative;
	object-fit: cover;
	overflow: hidden;
	z-index: -1;
}
.photo::before {
	content: "";
	width: 100%;
	height: 100%;
	position: absolute;
	top: 0;
	left: 0;
	background: radial-gradient(ellipse at center, transparent, var(--black) 90%);
}
.photo img {
	width: 100%;
}

.page-2 {
	padding: 3em;
	display: grid;
	grid-template-columns: 1fr 1fr;
	color: var(--dark-grey);
	align-items: flex-end;
}
.page-2 small {
	font-size: 0.8em;
	color: var(--grey);
}

.reel-text {
	width: 30%;
}
.reel-text p {
	margin-bottom: 30px;
}
.subtitle {
	font-size: 2em;
	line-height: 1em;
}
.subtitle:last-of-type {
	font-weight: 600;
}

.foreword {
	width: 40%;
	justify-self: flex-end;
}
.foreword p {
	text-align: right;
}
.foreword section {
	text-align: right;
	margin-bottom: 30px;
}
.foreword section svg {
	width: 14px;
	height: 14px;
	fill: none;
	stroke: var(--dark-grey);
	stroke-width: 2;
	margin-right: 10px;
}

footer {
	position: fixed;
	left: 50%;
	bottom: 5%;
	transform: translateX(-50%);
}
footer p {
	color: var(--grey);
}
footer a {
	color: #ea4c89;
}

.active {
	padding-top: 2px;
	border-bottom: 2px solid var(--white);
	pointer-events: none;
}

</style>
<body>
    <div class="container" id="app">
        <header>
            <ul class="navbar">
                <li><a @click.prevent="active = false,isActive = 0" :class="[{ active: !isActive }, '']" href="">Bio</a></li>
                <li><a @click.prevent="active = true, isActive = 1" :class="[{ active: isActive }, '']" href="">Work</a></li>
                <li>Contact</li>
            </ul>
        </header>
        <section class="page-1">
            <div class="logo">
                <h1>clypso</h1>
            </div>
            <div class="desc">
                <p>Highly acclaimed music video director from London, UK and the co-founder of Cosmatin Media Group</p>
            </div>
            <div class="photo">
                <img src="https://images.unsplash.com/photo-1576800774081-68c65e87becc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2154&q=80" alt="unsplash photo">
            </div>
        </section>
        <section class="page-2">
            <div class="reel-text">
                <p id="rt1"><small>clypso@gmail.com</small></p>
                <div id="rt2" class="subtitle">Directors</div>
                <div id="rt3" class="subtitle">Showreel</div>
                <div id="rt4" class="subtitle">2020</div>
            </div>
            <div class="foreword">
                <section>
                    <svg viewBox="0 0 24 24">
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                    </svg>
                    <svg viewBox="0 0 24 24">
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37zM17.5 6.5h.01" />
                    </svg>
                    <svg viewBox="0 0 24 24">
                        <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                    </svg>
                </section>
                <p><small>Highly acclaimed music video director from London, UK and the co-founder of Cosmatin Media Group</small></p>
            </div>
        </section>
    </div>
    
    <footer>
        <p><small>Based on this <a href="https://dribbble.com/shots/13966270-Ali-Ali-Transition" target="blank">Dribbble</a>. NOT RESPONSIVE</small></p>
    </footer>
</body>
<script>
    new Vue({
	el: "#app",

	data() {
		return {
			active: false,
			isActive: 0,
			tl: null
		};
	},

	watch: {
		active: function (ov, nv) {
			if (ov) {
				gsap.to(".page-2", 1.5, {
					xPercent: 0,
					ease: "circ.inOut",
					onStart: () => {
						setTimeout(this.reelTextAni, 1200);
					}
				});
				gsap.to(".logo", 1.5, { xPercent: 140, ease: "circ.inOut" });
				gsap.to(".desc", 1.5, { x: -400, opacity: 0, ease: "circ.inOut" });
				gsap.to(".photo", 1.5, { x: -400, opacity: 0, ease: "circ.inOut" });
			} else {
				this.reelTextReverseAni();
			}
		}
	},

	methods: {
		reelTextAni: function () {
			this.tl = gsap.timeline();

			this.tl.to(["#rt1", "#rt2", "#rt3", "#rt4", ".foreword"], 0.3, {
				opacity: 1,
				y: 0,
				stagger: 0.1
			});
		},
		reelTextReverseAni: function () {
			this.tl = gsap.timeline();

			this.tl
				.to([".foreword", "#rt4", "#rt3", "#rt2", "#rt1"], 0.3, {
					opacity: 0,
					y: 20,
					stagger: 0.1
				})
				.to(
					".page-2",
					1.5,
					{
						xPercent: 100,
						ease: "circ.inOut"
					},
					"-=0.5"
				)
				.to(".logo", 1.5, { xPercent: 40, ease: "circ.inOut" }, "-=1.4")
				.to(".desc", 1.5, { x: 0, opacity: 1, ease: "circ.inOut" }, "-=1.4")
				.to(".photo", 1.5, { x: 0, opacity: 1, ease: "circ.inOut" }, "-=1.4");
		}
	},

	mounted() {
		gsap.set(".page-2", { xPercent: 100 });
		gsap.set(".logo", { xPercent: 40 });
		gsap.set(".photo", { x: 0 });
		gsap.set(["#rt1", "#rt2", "#rt3", "#rt4", ".foreword"], {
			opacity: 0,
			y: 20
		});
	}
});

</script>
</html>
