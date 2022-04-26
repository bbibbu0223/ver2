const container = document.body, itemsWrapper = document.querySelector(".grid"), preloadImages = () => new Promise((e, t) => { imagesLoaded(document.querySelectorAll("img"), e) }); preloadImages().then(() => { new StretchEffect(container, itemsWrapper) }), Number.prototype.map = function (e, t, i, o) { return (this - e) * (o - i) / (t - e) + i }, document.body.classList.remove("preload"), document.body.classList.add("is-loading", "no-touch"), setTimeout(function () { document.body.classList.remove("is-loading"), document.body.classList.add("is-loaded"); const e = new LocomotiveScroll({ el: document.querySelector("[data-scroll-container]"), smooth: !0, smartphone: { smooth: !0 }, tablet: { smooth: !0, touchMultiplier: 2 }, multiplier: 1, firefoxMultiplier: 50, lerp: .1 }); var t = document.querySelector(".legals-btn"); document.querySelector(".legals-btn").addEventListener("click", i => { document.body.classList.add("is-legals"), document.body.classList.remove("is-up", "is-reset"), t.classList.add("no-click"), e.stop() }), document.querySelector(".close").addEventListener("click", i => { document.body.classList.remove("is-legals"), document.body.classList.add("is-up"), e.start(), setTimeout(function () { document.body.classList.remove("is-up"), document.body.classList.add("is-reset") }, 1750), setTimeout(function () { t.classList.remove("no-click") }, 2500) }), e.on("scroll", e => { document.getElementById("sun-moon").style.transform = "rotate(" + e.scroll.y / 14 + "deg)" }) }, 4e3), document.title = "Olivier Guillard - Freelance Designer &amp; Developer", window.onblur = function () { document.title = "Come back soon! 👋" }, window.onfocus = function () { document.title = "Welcome back! 😊" }; const spreadbubble = document.querySelector(".spreadbubble"); document.querySelector(".day-night").addEventListener("click", e => { DarkMode.toggleMode() }); const math = { lerp: (e, t, i) => (1 - i) * e + i * t }; class Cursor { constructor(e) { this.bindAll(), this.el = e || document.querySelector(".js-cursor"), this.links = [...document.querySelectorAll("[data-sticky]")], this.outer = this.el.getBoundingClientRect(), this.el && (this.client = { x: 0, y: 0 }, this.data = { ease: .2, fx: { diff: 0, acc: 0, velo: 0, scale: 0 } }, this.mousePos = { x: this.client.x, y: this.client.y }, this.state = { stuck: !1 }, this.rAF = void 0, this.init()) } bindAll() { ["run", "mouseEnter", "mouseLeave"].forEach(e => this[e] = this[e].bind(this)) } getMousePos(e) { this.client.x = e.clientX - this.outer.width / 2, this.client.y = e.clientY - this.outer.height / 2 } mouseEnter(e) { this.state.stuck = !0, this.span = e.target.querySelector(".js-num"), this.item = this.span.getBoundingClientRect(), this.y = this.item.width / 4, this.x = this.item.height / 4, this.s = 1.25 * ("1." + this.item.width), TweenLite.to(this.el, .25, { x: this.item.left + this.y, y: this.item.top + this.x, scale: this.s }) } mouseLeave() { this.state.stuck = !1, TweenLite.to(this.el, .25, { width: this.outer.width, height: this.outer.height }) } run() { this.mousePos.y = math.lerp(this.mousePos.y, this.client.y, this.data.ease), this.mousePos.x = math.lerp(this.mousePos.x, this.client.x, this.data.ease), this.data.fx.diff = this.client.x - this.mousePos.x, this.data.fx.acc = this.data.fx.diff / window.innerWidth, this.data.fx.velo = +this.data.fx.acc, this.data.fx.scale = 1 - Math.abs(5 * this.data.fx.velo), this.state.stuck || TweenLite.to(this.el, .25, { x: this.client.x, y: this.client.y, scale: this.data.fx.scale }), this.requestAnimationFrame() } on(e = !0) { this.addEvents(), e && this.requestAnimationFrame() } requestAnimationFrame() { this.rAF = requestAnimationFrame(this.run) } addEvents() { window.addEventListener("mousemove", e => this.getMousePos(e), { passive: !0 }), this.links.forEach(e => { e.addEventListener("mouseenter", e => this.mouseEnter(e)), e.addEventListener("mouseleave", this.mouseLeave) }) } init() { this.on() } } const cursor = new Cursor; -1 !== navigator.userAgent.toLowerCase().indexOf("firefox") && document.body.addEventListener("mousemove", e => { const t = e.clientX, i = e.clientY; TweenLite.to(".clipped-text", .75, { css: { backgroundPositionX: t - 200 + "px", backgroundPositionY: i - 200 + "px" } }) }); let width = window.innerWidth, height = window.innerHeight; const body = document.body, elButton = document.querySelector(".emoji-button"), elWrapper = document.querySelector(".emoji-wrapper"); function getRandomArbitrary(e, t) { return Math.random() * (t - e) + e } function getRandomInt(e, t) { return Math.floor(Math.random() * (t - e + 1)) + e } const emojimojis = ["😊", "😀", "😷", "😎", "🥳", "🤩", "😇"], emojis = [], radius = 15, Cd = .47, rho = 1.22, A = 15 * Math.PI * 15 / 1e4, ag = 9.81, frameRate = 1 / 60; function createemoji() { const e = getRandomArbitrary(-10, 10), t = getRandomArbitrary(-10, 1), i = document.createElement("div"); i.className = "emoji"; const o = document.createElement("span"); o.className = "inner", o.innerText = emojimojis[getRandomInt(0, emojimojis.length - 1)], i.appendChild(o), elWrapper.appendChild(i); const s = i.getBoundingClientRect(), n = getRandomArbitrary(2e3, 3e3); i.style.setProperty("--lifetime", n); const r = { el: i, absolutePosition: { x: s.left, y: s.top }, position: { x: s.left, y: s.top }, velocity: { x: e, y: t }, mass: .1, radius: i.offsetWidth, restitution: -.7, lifetime: n, direction: e > 0 ? 1 : -1, animating: !0, remove() { this.animating = !1, this.el.parentNode.removeChild(this.el) }, animate() { let e = -.5 * Cd * A * rho * this.velocity.x * this.velocity.x * this.velocity.x / Math.abs(this.velocity.x), t = -.5 * Cd * A * rho * this.velocity.y * this.velocity.y * this.velocity.y / Math.abs(this.velocity.y); e = isNaN(e) ? 0 : e, t = isNaN(t) ? 0 : t; var i = e / this.mass, o = ag + t / this.mass; this.velocity.x += i * frameRate, this.velocity.y += o * frameRate, this.position.x += this.velocity.x * frameRate * 100, this.position.y += this.velocity.y * frameRate * 100, this.checkBounds(), this.update() }, checkBounds() { r.position.y > height - r.radius / 2 && (r.velocity.y *= r.restitution, r.position.y = height - r.radius / 2), r.position.x > width - r.radius / 2 && (r.velocity.x *= r.restitution, r.position.x = width - r.radius / 2, r.direction = -1), r.position.x < r.radius / 2 && (r.velocity.x *= r.restitution, r.position.x = r.radius / 2, r.direction = 1) }, update() { const e = this.position.x - this.absolutePosition.x, t = this.position.y - this.absolutePosition.y; this.el.style.setProperty("--x", e), this.el.style.setProperty("--y", t), this.el.style.setProperty("--direction", this.direction) } }; return setTimeout(() => { r.remove() }, n), r } function animationLoop() { for (var e = emojis.length; e--;)emojis[e].animate(), emojis[e].animating || emojis.splice(e, 1); requestAnimationFrame(animationLoop) } function addemojis() { if (!(emojis.length > 40)) for (let e = 0; e < 10; e++)emojis.push(createemoji()) } animationLoop(), elButton.addEventListener("mouseover", addemojis), window.addEventListener("resize", () => { width = window.innerWidth, height = window.innerHeight }); const imprint = document.querySelector(".imprint"), images = document.querySelectorAll("img"), imagesOver = document.querySelectorAll(".img-over"), svgs = document.querySelectorAll(".svg"), button = document.getElementById("asterisk"), colors = ["#efebe8", "#faf9f9", "#eaeae9", "#e5f2ed", "#efdfdf", "#e6e2db", "#faf9f9", "#fceede", "#f4f4f6", "#fcece0"], colors1 = ["#635f59", "#bf4c17", "#b04133", "#a64b19", "#434c38", "#283d34", "#0e4144", "#324441", "#dd9221", "#f1865b", "#f8ab28", "#e7a84e", "#383860", "#2f2d3f", "#233946", "#0e4150", "#704d68", "#42273e", "#d85b52", "#b53329", "#873734", "#e53b3f", "#9c2c1d", "#9e1922", "#e61d40"]; function changeBackground() { const e = parseInt(Math.random() * colors.length), t = parseInt(Math.random() * colors1.length); body.style.backgroundColor = colors[e], body.style.color = colors1[t], imprint.classList.add("has-color"), imprint.style.backgroundColor = colors1[t], imprint.style.color = colors[e], svgs.forEach(function (e) { e.style.fill = colors1[t], e.style.transition = ".2s", e.classList.add("has-color") }), images.forEach(function (e) { e.style.filter = "grayscale(100%) brightness(1.5) contrast(1)" }), imagesOver.forEach(function (e) { e.style.backgroundColor = colors1[t] }), body.style.transition = ".2s" } function worldClockZone() { var e = ""; (i = (new Date).getHours()) > 0 && (e = "Hi, Early bird!"), i > 6 && (e = "Good Morning!"), i > 11 && (e = "Good Afternoon!"), i > 17 && (e = "Good Evening!"), document.getElementById("first-word").innerHTML = e; var t = new Date; t.setTime(t.getTime() + 60 * t.getTimezoneOffset() * 1e3 + 36e5); var i = t.getHours(), o = t.getDay(), s = t.toLocaleString("en-US", { timeZone: "Europe/Berlin", hour: "numeric", minute: "numeric" }); if (7 <= i && i < 9) var n = "drinking coffee!"; if (9 <= i && i < 10) n = "bringing ideas to life"; if (10 <= i && i < 11) n = "working hard!"; if (11 <= i && i < 12) n = "solving problems"; if (12 <= i && i < 13) n = "enjoying lunch!"; if (13 <= i && i < 14) n = "conceptualizing and prototyping"; if (14 <= i && i < 15) n = "busy, busy!"; if (15 <= i && i < 16) n = "designing Things"; if (16 <= i && i < 17) n = "building digital products"; if (6 == o && 9 <= i && i < 11 || 0 == o && 9 <= i && i < 11) n = "enjoying the weekend!"; if (6 == o && 11 <= i && i < 13 || 0 == o && 11 <= i && i < 13) n = "cooking some nice <a href='/classic-carrot-cake.txt' target='_blank' rel='noopener'>food</a>"; if (6 == o && 13 <= i && i < 15 || 0 == o && 13 <= i && i < 15) n = "reading <a href='#' target='_blank' rel='noopener'>books</a>"; if (6 == o && 15 <= i && i < 17 || 0 == o && 15 <= i && i < 17) n = "taking <a href='https://unsplash.com/@olivier_twwli?grid=multi' target='_blank' rel='noopener'>pictures</a>"; if (17 <= i && i < 18) n = "listening to nice <a href='https://open.spotify.com/playlist/7a3z8LDZG4bCdBtkzDV8k5?si=_6_EFj_HQXur2NBQLHbN4w' target='_blank' rel='noopener'>music</a>"; if (18 <= i && i < 20) n = "relaxing with my family"; if (6 == o && 17 <= i && i < 20 || 0 == o && 17 <= i && i < 20) n = "cooking my favourite <a href='#' target='_blank' rel='noopener'>curry</a>"; if (20 <= i && i < 24) n = "resting up"; if (6 == o && 20 <= i && i < 22 || 0 == o && 20 <= i && i < 22) n = "playing my trumpet"; if (6 == o && 22 <= i && i < 24 || 0 == o && 22 <= i && i < 24) n = "party time!"; if (0 <= i && i < 7) n = "resting up "; document.getElementById("now").innerHTML = `${s}: ${n} ` } button.addEventListener("click", changeBackground), setInterval("worldClockZone()", 1e3);