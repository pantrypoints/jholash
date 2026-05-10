<script lang="ts">
  import '../app.css';
  import { page } from '$app/stores';
  // import { Menu, X, Facebook } from 'lucide-svelte';
  import { onMount } from 'svelte';

  let { children } = $props();

  let mobileOpen = $state(false);
  let scrolled = $state(false);

  onMount(() => {
    const handler = () => { scrolled = window.scrollY > 40; };
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  });

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/#services', label: 'Services' },
    { href: '/about', label: 'About' },
    { href: '/#contact', label: 'Contact' },
  ];
</script>

<!-- NAVBAR -->
<header
  class="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
  class:bg-purple-deep={scrolled}
  class:shadow-2xl={scrolled}
  style={scrolled ? 'background-color: var(--purple-deep);' : 'background: transparent;'}
>
  <nav class="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
    <!-- Logo -->
    <a href="/" class="flex flex-col leading-none">
      <span class="font-display text-2xl font-light tracking-widest text-white">Jhola's</span>
      <span class="text-xs tracking-[0.35em] font-light" style="color: var(--gold-bright);">BROWS & WELLNESS</span>
    </a>

    <!-- Desktop Nav -->
    <ul class="hidden md:flex items-center gap-8">
      {#each navLinks as link}
        <li>
          <a
            href={link.href}
            class="text-sm tracking-widest font-light uppercase transition-all duration-300 hover:opacity-100 relative group"
            style="color: rgba(255,255,255,0.85);"
          >
            {link.label}
            <span
              class="absolute -bottom-1 left-0 w-0 h-px transition-all duration-300 group-hover:w-full"
              style="background-color: var(--gold-bright);"
            ></span>
          </a>
        </li>
      {/each}
    </ul>

    <!-- Social + Mobile Toggle -->
    <div class="flex items-center gap-4">
      <a
        href="https://www.facebook.com/profile.php?id=100089261297970"
        target="_blank"
        rel="noopener"
        class="hidden md:flex items-center justify-center w-9 h-9 rounded-full border transition-all duration-300 hover:scale-110"
        style="border-color: var(--gold-bright); color: var(--gold-bright);"
        aria-label="Facebook"
      >
        <!-- <Facebook size={15} /> -->
      </a>
      <a
        href="https://www.tiktok.com/@jholashabrows1980"
        target="_blank"
        rel="noopener"
        class="hidden md:flex items-center justify-center w-9 h-9 rounded-full border transition-all duration-300 hover:scale-110"
        style="border-color: var(--gold-bright); color: var(--gold-bright);"
        aria-label="TikTok"
      >
        <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.76a4.85 4.85 0 01-1.01-.07z"/>
        </svg>
      </a>
      <button
        class="md:hidden text-white"
        onclick={() => mobileOpen = !mobileOpen}
        aria-label="Toggle menu"
      >
<!--         {#if mobileOpen}
          <X size={22} />
        {:else}
          <Menu size={22} />
        {/if} -->
      </button>
    </div>
  </nav>

  <!-- Mobile Menu -->
  {#if mobileOpen}
    <div class="md:hidden px-6 pb-6 pt-2" style="background-color: var(--purple-deep);">
      <ul class="flex flex-col gap-4">
        {#each navLinks as link}
          <li>
            <a
              href={link.href}
              onclick={() => mobileOpen = false}
              class="block text-sm tracking-widest uppercase font-light text-white/85 hover:text-white transition-colors py-1 border-b border-white/10"
            >
              {link.label}
            </a>
          </li>
        {/each}
        <li class="flex gap-4 pt-2">
          <a href="https://www.facebook.com/profile.php?id=100089261297970" target="_blank" rel="noopener" style="color: var(--gold-bright);">
            <!-- <Facebook size={18} /> -->
          </a>
          <a href="https://www.tiktok.com/@jholashabrows1980" target="_blank" rel="noopener" style="color: var(--gold-bright);">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.76a4.85 4.85 0 01-1.01-.07z"/>
            </svg>
          </a>
        </li>
      </ul>
    </div>
  {/if}
</header>

<!-- PAGE CONTENT -->
<main>
  {@render children()}
</main>

<!-- FOOTER -->
<footer style="background-color: var(--purple-deep);" class="relative overflow-hidden">
  <div class="absolute inset-0 opacity-10"
    style="background: radial-gradient(ellipse at 20% 50%, var(--gold-bright) 0%, transparent 60%);">
  </div>
  <div class="relative max-w-7xl mx-auto px-6 py-16">
    <div class="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
      <!-- Brand -->
      <div>
        <div class="font-display text-3xl font-light text-white tracking-widest mb-1">Jhola's</div>
        <div class="text-xs tracking-[0.35em] mb-4" style="color: var(--gold-bright);">BROWS & WELLNESS STUDIO</div>
        <p class="text-white/60 text-sm font-light leading-relaxed">
          Where beauty meets precision. Expert brow artistry, lash services, and wellness treatments curated for you.
        </p>
      </div>

      <!-- Quick Links -->
      <div>
        <h4 class="text-white text-sm tracking-widest uppercase mb-5" style="color: var(--gold-bright);">Navigate</h4>
        <ul class="space-y-2">
          {#each navLinks as link}
            <li>
              <a href={link.href} class="text-white/60 hover:text-white text-sm font-light transition-colors tracking-wide">
                {link.label}
              </a>
            </li>
          {/each}
        </ul>
      </div>

      <!-- Connect -->
      <div>
        <h4 class="text-sm tracking-widest uppercase mb-5" style="color: var(--gold-bright);">Connect</h4>
        <div class="flex gap-3">
          <a
            href="https://www.facebook.com/profile.php?id=100089261297970"
            target="_blank"
            rel="noopener"
            class="flex items-center gap-2 text-white/60 hover:text-white text-sm font-light transition-colors"
          >
            <!-- <Facebook size={16} /> Facebook -->
          </a>
        </div>
        <div class="flex gap-3 mt-3">
          <a
            href="https://www.tiktok.com/@jholashabrows1980"
            target="_blank"
            rel="noopener"
            class="flex items-center gap-2 text-white/60 hover:text-white text-sm font-light transition-colors"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.76a4.85 4.85 0 01-1.01-.07z"/>
            </svg>
            TikTok
          </a>
        </div>
        <p class="text-white/40 text-xs mt-6 font-light">Makati City, Philippines</p>
      </div>
    </div>

    <!-- Bottom bar -->
    <div class="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-3">
      <p class="text-white/30 text-xs font-light tracking-wide">
        © {new Date().getFullYear()} Jhola's Brows & Wellness Studio. All rights reserved.
      </p>
      <div class="ornament w-32">
        <span class="text-xs" style="color: var(--gold-bright);">✦</span>
      </div>
    </div>
  </div>
</footer>
