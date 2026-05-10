<script lang="ts">
  import { Star, Heart, Award, Users, Sparkles, ArrowLeft } from 'lucide-svelte';
</script>

<svelte:head>
  <title>About Ms. Jho Celine — Jhola's Brows & Wellness</title>
  <meta name="description" content="Meet Ms. Jho Celine, the passionate artist behind Jhola's Brows & Wellness Studio." />
</svelte:head>

<!-- HERO -->
<section
  class="relative pt-32 pb-20 px-6 overflow-hidden"
  style="background: linear-gradient(135deg, var(--purple-deep) 0%, #1A0D35 60%, #0D0720 100%);"
>
  <!-- Decorative bg elements -->
  <div class="absolute top-10 right-0 w-80 h-80 rounded-full opacity-15 blur-3xl"
    style="background: radial-gradient(circle, var(--gold-bright), transparent 70%);"></div>
  <div class="absolute bottom-0 left-0 w-64 h-64 rounded-full opacity-10 blur-3xl"
    style="background: radial-gradient(circle, var(--purple-soft), transparent 70%);"></div>

  <div class="relative max-w-4xl mx-auto text-center">
    <a href="/"
      class="inline-flex items-center gap-2 text-xs tracking-widest uppercase font-light mb-10 transition-opacity hover:opacity-70"
      style="color: var(--gold-bright);">
      <ArrowLeft size={12} /> Back to Home
    </a>
    <div class="text-xs tracking-[0.5em] uppercase mb-4 font-light block" style="color: var(--gold-bright);">
      ✦ &nbsp; The Artist Behind the Studio
    </div>
    <h1 class="font-display text-6xl md:text-7xl font-light text-white mb-3 leading-none">
      Ms. Jho Celine
    </h1>
    <div class="ornament max-w-xs mx-auto mb-6">
      <span style="color: var(--gold-bright);">✦</span>
    </div>
    <p class="text-white/60 text-lg font-light leading-relaxed max-w-xl mx-auto">
      Founder & Lead Artist · Jhola's Brows & Wellness Studio
    </p>
  </div>
</section>

<!-- PORTRAIT + STORY -->
<section class="py-24 px-6" style="background-color: var(--cream);">
  <div class="max-w-6xl mx-auto">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

      <!-- Portrait placeholder / artistic frame -->
      <div class="relative flex justify-center">
        <div class="relative">
          <!-- Decorative outer ring -->
          <div
            class="absolute -inset-4 rounded-3xl"
            style="background: linear-gradient(135deg, var(--gold-bright), var(--purple-soft), var(--gold-warm)); opacity: 0.3; filter: blur(8px);"
          ></div>
          <!-- Photo frame -->
          <div
            class="relative rounded-3xl overflow-hidden w-72 md:w-96"
            style="border: 2px solid rgba(212,168,67,0.4); aspect-ratio: 3/4; background: linear-gradient(160deg, var(--purple-deep) 0%, #1A0A30 100%);"
          >
            <!-- Elegant placeholder with initials -->
            <div class="absolute inset-0 flex flex-col items-center justify-center">
              <div
                class="w-32 h-32 rounded-full flex items-center justify-center mb-4"
                style="background: rgba(212,168,67,0.12); border: 2px solid rgba(212,168,67,0.4);"
              >
                <span class="font-display text-5xl font-light" style="color: var(--gold-bright);">JC</span>
              </div>
              <div class="text-xs tracking-widest uppercase font-light text-center" style="color: var(--gold-bright);">
                Ms. Jho Celine
              </div>
              <div class="text-white/30 text-xs mt-1 font-light">Lead Artist & Founder</div>
            </div>

            <!-- Corner ornaments -->
            <div class="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2" style="border-color: var(--gold-bright);"></div>
            <div class="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2" style="border-color: var(--gold-bright);"></div>
            <div class="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2" style="border-color: var(--gold-bright);"></div>
            <div class="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2" style="border-color: var(--gold-bright);"></div>
          </div>
        </div>
      </div>

      <!-- Story text -->
      <div>
        <div class="text-xs tracking-[0.4em] uppercase mb-3 font-light" style="color: var(--gold-bright);">
          ✦ &nbsp; Her Story
        </div>
        <h2 class="font-display text-4xl md:text-5xl font-light mb-6" style="color: var(--purple-deep);">
          Passion Meets<br/>Precision
        </h2>

        <div class="space-y-5 text-gray-600 font-light leading-relaxed text-[15px]">
          <p>
            Ms. Jho Celine is the heart and hands behind Jhola's Brows & Wellness Studio — a sanctuary she built from her genuine love for beauty artistry and her deep desire to help every client feel confident and beautiful.
          </p>
          <p>
            Her journey began with a fascination for the transformative power of beauty — how a perfectly shaped brow or a set of lashes can change the way someone sees themselves. She trained rigorously, mastering brow artistry, lash techniques, skin aesthetics, and beauty services to offer truly holistic care.
          </p>
          <p>
            Today, Ms. Jho Celine leads a studio known not just for exceptional results, but for the warmth and personal attention she gives every single client. She believes beauty treatments should be an experience — relaxing, empowering, and tailored to each person's unique features.
          </p>
          <p>
            Whether it's a first-time brow session or a full glam transformation, Ms. Jho Celine approaches every appointment with the same dedication: to help you look and feel your absolute best.
          </p>
        </div>

        <div class="mt-8">
          <a
            href="/#contact"
            class="inline-block px-8 py-3.5 text-sm tracking-widest uppercase font-medium transition-all duration-300 hover:scale-105"
            style="background: linear-gradient(135deg, var(--gold-warm), var(--gold-bright)); color: var(--purple-deep);"
          >
            Book with Ms. Jho
          </a>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- VALUES / PILLARS -->
<section
  class="py-24 px-6"
  style="background: linear-gradient(135deg, var(--purple-deep) 0%, #1E0F38 100%);"
>
  <div class="max-w-5xl mx-auto">
    <div class="text-center mb-14">
      <div class="text-xs tracking-[0.5em] uppercase mb-3 font-light" style="color: var(--gold-bright);">✦ &nbsp; Her Philosophy</div>
      <h2 class="font-display text-4xl md:text-5xl font-light text-white">What She Stands For</h2>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {#each [
        { icon: Heart, title: 'Genuine Care', desc: 'Every client is treated like family. Your comfort and confidence always come first.' },
        { icon: Award, title: 'Mastery', desc: 'Continuously upskilling and perfecting techniques to deliver world-class results.' },
        { icon: Star, title: 'Precision', desc: 'Every stroke, every detail crafted with the care and precision it deserves.' },
        { icon: Users, title: 'Community', desc: 'Building a studio where clients feel welcome, seen, and celebrated.' },
      ] as item}
        <div
          class="p-7 rounded-2xl text-center"
          style="background: rgba(255,255,255,0.04); border: 1px solid rgba(212,168,67,0.2);"
        >
          <div
            class="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-5"
            style="background: rgba(212,168,67,0.1); border: 1px solid rgba(212,168,67,0.3);"
          >
            <svelte:component this={item.icon} size={20} style="color: var(--gold-bright);" />
          </div>
          <h3 class="font-display text-xl font-light text-white mb-3">{item.title}</h3>
          <p class="text-white/50 text-sm font-light leading-relaxed">{item.desc}</p>
        </div>
      {/each}
    </div>
  </div>
</section>

<!-- SPECIALIZATIONS -->
<section class="py-24 px-6" style="background-color: var(--cream);">
  <div class="max-w-4xl mx-auto">
    <div class="text-center mb-14">
      <div class="text-xs tracking-[0.5em] uppercase mb-3 font-light" style="color: var(--gold-bright);">✦ &nbsp; Expertise</div>
      <h2 class="font-display text-4xl md:text-5xl font-light" style="color: var(--purple-deep);">Specializations</h2>
    </div>

    <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
      {#each [
        'Microblading & Ombre Brows',
        'Brow Lamination',
        'Lash Extensions',
        'Lash Lifting & Perming',
        'Facial Treatments',
        'Skin Aesthetics',
        'Manicure & Nail Art',
        'Spa Pedicure',
        'Bridal Make Up',
      ] as skill}
        <div
          class="flex items-center gap-3 px-4 py-3 rounded-xl"
          style="background: linear-gradient(135deg, var(--purple-pale), white); border: 1px solid var(--purple-pale);"
        >
          <Sparkles size={14} style="color: var(--gold-bright); flex-shrink: 0;" />
          <span class="text-sm font-light" style="color: var(--purple-deep);">{skill}</span>
        </div>
      {/each}
    </div>
  </div>
</section>

<!-- CTA -->
<section
  class="py-20 px-6 text-center"
  style="background: linear-gradient(135deg, var(--gold-warm) 0%, var(--gold-bright) 100%);"
>
  <div class="max-w-2xl mx-auto">
    <h2 class="font-display text-4xl md:text-5xl font-semibold mb-4" style="color: var(--purple-deep);">
      Experience the Jhola's Difference
    </h2>
    <p class="text-lg font-light mb-8" style="color: var(--purple-rich);">
      Book your session with Ms. Jho Celine and discover what true artistry looks like.
    </p>
    <a
      href="/#contact"
      class="inline-block px-10 py-4 text-sm tracking-widest uppercase font-medium transition-all duration-300 hover:scale-105"
      style="background-color: var(--purple-deep); color: var(--gold-bright);"
    >
      Book Appointment
    </a>
  </div>
</section>
