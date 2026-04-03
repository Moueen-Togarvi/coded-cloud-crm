<script lang="ts">
	import { onMount } from 'svelte';
	import { fade, fly } from 'svelte/transition';

	let visible = $state(false);
	let typewriterIndex = $state(0);
	const typewriterWords = ['YOUR FUTURE.', 'IDEAS.', 'A LEGACY.', 'THE UNKNOWN.'];
	let currentWord = $state('');
	let isDeleting = $state(false);
	let typeSpeed = $state(150);

	function type() {
		const fullWord = typewriterWords[typewriterIndex];
		
		if (isDeleting) {
			currentWord = fullWord.substring(0, currentWord.length - 1);
			typeSpeed = 100;
		} else {
			currentWord = fullWord.substring(0, currentWord.length + 1);
			typeSpeed = 200;
		}

		if (!isDeleting && currentWord === fullWord) {
			isDeleting = true;
			typeSpeed = 2000; // Pause at end
		} else if (isDeleting && currentWord === '') {
			isDeleting = false;
			typewriterIndex = (typewriterIndex + 1) % typewriterWords.length;
			typeSpeed = 500;
		}

		setTimeout(type, typeSpeed);
	}

	let canvas;
	let ctx;
	let animationFrameId;

	// Particle System for Canvas
	const particles = [];
	const numParticles = 80;
	let mouse = { x: null, y: null, radius: 150 };

	class Particle {
		constructor(width, height) {
			this.x = Math.random() * width;
			this.y = Math.random() * height;
			this.vx = (Math.random() - 0.5) * 0.5;
			this.vy = (Math.random() - 0.5) * 0.5;
			this.size = Math.random() * 2 + 0.5;
		}
		
		update(width, height) {
			this.x += this.vx;
			this.y += this.vy;

			if (this.x < 0 || this.x > width) this.vx = -this.vx;
			if (this.y < 0 || this.y > height) this.vy = -this.vy;
		}

		draw(ctx) {
			ctx.beginPath();
			ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
			ctx.fillStyle = 'rgba(255, 255, 255, 0.4)';
			ctx.fill();
		}
	}

	function initParticles(width, height) {
		particles.length = 0;
		for (let i = 0; i < numParticles; i++) {
			particles.push(new Particle(width, height));
		}
	}

	function animateParticles() {
		if (!canvas) return;
		const width = canvas.width;
		const height = canvas.height;
		
		ctx.clearRect(0, 0, width, height);

		for (let i = 0; i < particles.length; i++) {
			particles[i].update(width, height);
			particles[i].draw(ctx);

			for (let j = i; j < particles.length; j++) {
				const dx = particles[i].x - particles[j].x;
				const dy = particles[i].y - particles[j].y;
				const distance = Math.sqrt(dx * dx + dy * dy);

				// Connect particles to each other
				if (distance < 100) {
					ctx.beginPath();
					ctx.strokeStyle = `rgba(255, 255, 255, ${0.1 - distance / 1000})`;
					ctx.lineWidth = 0.5;
					ctx.moveTo(particles[i].x, particles[i].y);
					ctx.lineTo(particles[j].x, particles[j].y);
					ctx.stroke();
				}
			}

			// Connect to mouse
			if (mouse.x != null && mouse.y != null) {
				const dx = particles[i].x - mouse.x;
				const dy = particles[i].y - mouse.y;
				const distance = Math.sqrt(dx * dx + dy * dy);
				if (distance < mouse.radius) {
					ctx.beginPath();
					ctx.strokeStyle = `rgba(16, 185, 129, ${0.4 - distance / (mouse.radius * 2.5)})`; // tech green/blue color
					ctx.lineWidth = 1;
					ctx.moveTo(particles[i].x, particles[i].y);
					ctx.lineTo(mouse.x, mouse.y);
					ctx.stroke();
				}
			}
		}
		animationFrameId = requestAnimationFrame(animateParticles);
	}

	function handleMouseMove(e) {
		if (canvas) {
			const rect = canvas.getBoundingClientRect();
			mouse.x = e.clientX - rect.left;
			mouse.y = e.clientY - rect.top;
		}
	}
	
	function handleMouseLeave() {
		mouse.x = null;
		mouse.y = null;
	}

	function handleResize() {
		if (canvas) {
			canvas.width = window.innerWidth;
			canvas.height = window.innerHeight;
			initParticles(canvas.width, canvas.height);
		}
	}

	onMount(() => {
		if (canvas) {
			ctx = canvas.getContext('2d');
			handleResize();
			window.addEventListener('resize', handleResize);
			animateParticles();
		}
		
		visible = true;
		type();

		return () => {
			window.removeEventListener('resize', handleResize);
			cancelAnimationFrame(animationFrameId);
		};
	});
</script>

<section class="relative h-screen min-h-[600px] pt-48 pb-12 flex items-center overflow-hidden bg-white">
	<!-- Background Subtle Blur -->
	<div class="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-50/30 rounded-full blur-[100px] -z-10 translate-x-1/2 -translate-y-1/4"></div>
	<div class="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-50/20 rounded-full blur-[80px] -z-10 -translate-x-1/4 translate-y-1/4"></div>

	<canvas 
		bind:this={canvas} 
		class="absolute top-0 left-0 w-full h-full -z-10"
		onmousemove={handleMouseMove}
		onmouseleave={handleMouseLeave}
	></canvas>

	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 w-full">
		<div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
			<!-- Text Content -->
			<div class="text-left">
				{#if visible}
					<!-- Floating Social Proof Badge -->
					<div in:fade={{ duration: 1000, delay: 200 }} class="mb-6 inline-block animate-bobbing">
						<div class="px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md flex items-center gap-2 shadow-xl">
							<span class="text-sm">⭐</span>
							<span class="text-xs font-semibold text-gray-300 uppercase tracking-widest">Trusted by 50+ Global Enterprises</span>
						</div>
					</div>
					<div in:fly={{ x: -20, duration: 800 }}>
						<h2 class="text-blue-800 font-bold uppercase tracking-[0.3em] text-[10px] mb-4 flex items-center gap-3">
							<span class="w-10 h-0.5 bg-blue-800"></span>
							ESTABLISHED 2026
						</h2>
						<h1 class="text-5xl md:text-6xl xl:text-7xl font-black text-black tracking-tighter leading-[1.1] mb-8">
							WE ARCHITECT <br />
							<span class="text-blue-600">{currentWord}<span class="animate-pulse">|</span></span>
						</h1>
					</div>

					<div in:fade={{ duration: 1000, delay: 400 }}>
						<p class="text-lg md:text-xl text-gray-500 max-w-lg font-medium tracking-tight leading-relaxed mb-10">
							We architect premium software ecosystems that scale effortlessly across global markets. From Pakistan to the UAE, we build the elite digital future.
						</p>
					</div>

					<div class="flex flex-col sm:flex-row items-center gap-4" in:fade={{ duration: 1000, delay: 600 }}>
						<a href="/contact" class="btn-primary w-full sm:w-auto px-10 py-4 text-base shadow-2xl shadow-blue-200">
							GET A QUOTE
						</a>
						<button class="btn-outline w-full sm:w-auto px-10 py-4 text-base">
							OUR PORTFOLIO
						</button>
					</div>
				{/if}
			</div>

			<!-- Hero Image Column -->
			<div class="relative hidden lg:block" in:fly={{ x: 30, duration: 1000, delay: 800 }}>
				<div class="relative group">
					<!-- Glow Effects -->
					<div class="absolute inset-0 bg-blue-500/10 rounded-full scale-110 opacity-100 transition-opacity duration-1000"></div>
					<div class="absolute -inset-2 bg-gradient-to-tr from-blue-600/5 to-transparent rounded-[2.5rem]"></div>
					
					<img 
						src="/images/Whisk_bab681451ce2130a0da460fdae48800adr-removebg-preview.png" 
						alt="Coded Clouds Premium Interface" 
						class="relative w-full max-w-lg mx-auto h-auto object-contain transform hover:scale-[1.01] transition-all duration-1000 select-none pointer-events-none drop-shadow-[0_25px_50px_rgba(79,128,240,0.15)]"
					/>
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	@reference "../../routes/layout.css";

	@keyframes bobbing {
		0%, 100% { transform: translateY(0); }
		50% { transform: translateY(-8px); }
	}

	.animate-bobbing {
		animation: bobbing 4s ease-in-out infinite;
	}

	.btn-primary {
		@apply relative overflow-hidden bg-blue-600 text-white rounded-2xl font-bold shadow-xl hover:-translate-y-1 transition-all flex items-center justify-center;
	}

	.btn-primary::after {
		content: '';
		position: absolute;
		top: 0;
		left: -100%;
		width: 50%;
		height: 100%;
		background: linear-gradient(to right, transparent, rgba(255, 255, 255, 0.4), transparent);
		transform: skewX(-25deg);
		transition: none;
	}

	.btn-primary:hover::after {
		animation: shimmer 0.75s ease-out forwards;
	}

	@keyframes shimmer {
		100% {
			left: 200%;
		}
	}

	.btn-outline {
		@apply border-2 border-gray-100 text-gray-900 rounded-2xl font-bold bg-white/50 backdrop-blur-sm shadow-sm hover:border-blue-600 hover:text-blue-600 hover:-translate-y-1 transition-all flex items-center justify-center;
	}
</style>
