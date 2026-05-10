<script lang="ts">
  import {
    Sparkles, Eye, Hand, Footprints, Smile, Star,
    Palette, Send, MapPin, Phone, Mail, ChevronDown
  } from 'lucide-svelte';
  import { onMount } from 'svelte';

  let formData = $state({ name: '', email: '', phone: '', service: '', message: '' });
  let submitted = $state(false);
  let sending = $state(false);

  const services = [
    {
      icon: Eye,
      title: 'Eyebrows',
      subtitle: 'Brow Artistry',
      color: 'from-purple-900 to-purple-700',
      treatments: ['Microblading', 'Ombre Brows', 'Brow Lamination', 'Threading & Shaping', 'Tinting'],
    },
    {
      icon: Star,
      title: 'Eyelashes',
      subtitle: 'Lash Services',
      color: 'from-purple-800 to-indigo-700',
      treatments: ['Classic Extensions', 'Volume Extensions', 'Mega Volume', 'Lash Perming', 'Lash Lifting & Tinting'],
    },
    {
      icon: Hand,
      title: 'Manicure',
      subtitle: 'Nail Care',
      color: 'from-violet-800 to-purple-700',
      treatments: ['Classic Manicure', 'Gel Polish', 'Nail Art', 'Nail Extensions', 'French Tips'],
    },
    {
      icon: Footprints,
      title: 'Pedicure',
      subtitle: 'Foot Care',
      color: 'from-purple-700 to-violet-800',
      treatments: ['Classic Pedicure', 'Spa Pedicure', 'Gel Pedicure', 'Callus Removal', 'Foot Scrub'],
    },
    {
      icon: Sparkles,
      title: 'Facial',
      subtitle: 'Skin Therapy',
      color: 'from-indigo-700 to-purple-800',
      treatments: ['Deep Cleansing Facial', 'Hydrating Facial', 'Anti-Aging Facial', 'Brightening Facial', 'Acne Facial'],
    },
    {
      icon: Smile,
      title: 'Aesthetics',
      subtitle: 'Skin Treatments',
      color: 'from-purple-600 to-purple-900',
      treatments: ['Pimple Removal', 'Skin Whitening', 'Glutathione Drip', 'Chemical Peel', 'Mole Removal'],
    },
    {
      icon: Palette,
      title: 'Make Up',
      subtitle: 'Beauty Artistry',
      color: 'from-purple-900 to-indigo-800',
      treatments: ['Bridal Make Up', 'Party & Events', 'Airbrush', 'Photoshoot Ready', 'Everyday Glam'],
    },
  ];

  const serviceOptions = [
    'Eyebrows', 'Eyelashes', 'Manicure', 'Pedicure',
    'Facial', 'Aesthetics', 'Make Up', 'Other'
  ];

  async function handleSubmit(e: Event) {
    e.preventDefault();
    sending = true;
    await new Promise(r => setTimeout(r, 1200));
    sending = false;
    submitted = true;
  }

  let visible = $state(false);
  onMount(() => {
    setTimeout(() => visible = true, 100);
  });
</script>

<svelte:head>
  <title>Jhola's Brows & Wellness Studio</title>
  <meta name="description" content="Expert brow artistry, lash services, nails, facials, aesthetics, and makeup — Jhola's Brows & Wellness Studio." />
</svelte:head>

<!-- ============================================================
     HERO
============================================================ -->
<section
  class="relative min-h-screen flex items-center justify-center overflow-hidden noise-bg"
  style="background: linear-gradient(135deg, var(--purple-deep) 0%, #1A0D35 40%, #0D0720 100%);"
>
  <!-- Decorative circles -->
  <div class="absolute top-20 -left-32 w-96 h-96 rounded-full opacity-20 blur-3xl"
    style="background: radial-gradient(circle, var(--gold-bright) 0%, transparent 70%);"></div>
  <div class="absolute bottom-20 -right-32 w-80 h-80 rounded-full opacity-15 blur-3xl"
    style="background: radial-gradient(circle, var(--purple-soft) 0%, transparent 70%);"></div>
  <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-5 blur-3xl"
    style="background: radial-gradient(circle, var(--gold-bright) 0%, transparent 70%);"></div>

  <!-- Ornamental lines -->
  <div class="absolute top-0 left-0 w-full h-px" style="background: linear-gradient(90deg, transparent, var(--gold-bright), transparent); opacity: 0.4;"></div>
  <div class="absolute bottom-0 left-0 w-full h-px" style="background: linear-gradient(90deg, transparent, var(--gold-bright), transparent); opacity: 0.4;"></div>

  <div class="relative text-center px-6 max-w-5xl mx-auto">
    <!-- Tagline -->
    <div class={`text-xs tracking-[0.5em] uppercase mb-6 font-light ${visible ? 'fade-in-up fade-in-up-delay-1' : 'opacity-0'}`}
      style="color: var(--gold-bright);">
      ✦ &nbsp; Beauty · Wellness · Artistry &nbsp; ✦
    </div>

    <!-- Main heading -->
    <h1 class={`font-display text-6xl md:text-8xl lg:text-9xl font-light text-white leading-none mb-4 ${visible ? 'fade-in-up fade-in-up-delay-2' : 'opacity-0'}`}>
      Jhola's
    </h1>
    <div class={`font-display text-2xl md:text-3xl font-light mb-8 ${visible ? 'fade-in-up fade-in-up-delay-2' : 'opacity-0'}`}
      style="color: var(--gold-bright); letter-spacing: 0.4em;">
      BROWS & WELLNESS
    </div>

    <!-- Divider -->
    <div class={`ornament max-w-xs mx-auto mb-8 ${visible ? 'fade-in-up fade-in-up-delay-3' : 'opacity-0'}`}>
      <span style="color: var(--gold-bright);" class="text-lg">✦</span>
    </div>

    <p class={`text-white/70 text-lg md:text-xl font-light leading-relaxed max-w-xl mx-auto mb-12 ${visible ? 'fade-in-up fade-in-up-delay-3' : 'opacity-0'}`}>
      Where every detail is an art form. Premium beauty services crafted with precision, passion, and expertise.
    </p>

    <div class={`flex flex-col sm:flex-row gap-4 justify-center ${visible ? 'fade-in-up fade-in-up-delay-4' : 'opacity-0'}`}>
      <a
        href="#services"
        class="px-10 py-4 text-sm tracking-widest uppercase font-medium transition-all duration-300 hover:scale-105"
        style="background: linear-gradient(135deg, var(--gold-warm), var(--gold-bright)); color: var(--purple-deep);"
      >
        Our Services
      </a>
      <a
        href="#contact"
        class="px-10 py-4 text-sm tracking-widest uppercase font-light border text-white transition-all duration-300 hover:bg-white/10"
        style="border-color: rgba(255,255,255,0.3);"
      >
        Book Appointment
      </a>
    </div>
  </div>

  <!-- Scroll cue -->
  <div class="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
    <ChevronDown size={20} class="text-white/30" />
  </div>
</section>

<!-- ============================================================
     INTRO BAND
============================================================ -->
<section class="py-12 px-6" style="background-color: var(--gold-bright);">
  <div class="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 text-center">
    {#each [['Premium Quality', 'Only the finest products and techniques'], ['Expert Artistry', 'Trained & passionate specialists'], ['Your Comfort', 'Relaxing, welcoming atmosphere']] as [title, desc]}
      <div class="flex-1">
        <div class="font-display text-2xl font-semibold mb-1" style="color: var(--purple-deep);">{title}</div>
        <div class="text-sm font-light" style="color: var(--purple-rich);">{desc}</div>
      </div>
    {/each}
  </div>
</section>

<!-- ============================================================
     SERVICES
============================================================ -->
<section id="services" class="py-24 px-6" style="background-color: var(--cream);">
  <div class="max-w-7xl mx-auto">
    <!-- Section header -->
    <div class="text-center mb-16">
      <div class="text-xs tracking-[0.5em] uppercase mb-3 font-light" style="color: var(--gold-bright);">
        ✦ &nbsp; What We Offer
      </div>
      <h2 class="font-display text-5xl md:text-6xl font-light mb-4" style="color: var(--purple-deep);">
        Our Services
      </h2>
      <div class="ornament max-w-xs mx-auto mb-6">
        <span style="color: var(--gold-bright);">✦</span>
      </div>
      <p class="text-gray-500 font-light max-w-xl mx-auto text-lg leading-relaxed">
        A curated range of beauty and wellness treatments, each delivered with meticulous care.
      </p>
    </div>

    <!-- Service cards grid -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {#each services as service, i}
        <div
          class="service-card rounded-2xl overflow-hidden cursor-default shadow-lg"
          style="background: linear-gradient(160deg, var(--purple-deep), #1A0A30); border: 1px solid rgba(212,168,67,0.2);"
        >
          <!-- Card top accent -->
          <div class="h-1" style="background: linear-gradient(90deg, var(--gold-warm), var(--gold-light), var(--gold-warm));"></div>

          <div class="p-7">
            <!-- Icon -->
            <div
              class="w-14 h-14 rounded-xl flex items-center justify-center mb-5"
              style="background: rgba(212,168,67,0.12); border: 1px solid rgba(212,168,67,0.3);"
            >
              <svelte:component this={service.icon} size={24} style="color: var(--gold-bright);" />
            </div>

            <div class="text-xs tracking-widest uppercase font-light mb-1" style="color: var(--purple-soft);">
              {service.subtitle}
            </div>
            <h3 class="font-display text-2xl font-light text-white mb-4">{service.title}</h3>

            <ul class="space-y-2">
              {#each service.treatments as t}
                <li class="flex items-center gap-2 text-sm font-light text-white/60">
                  <span class="w-1 h-1 rounded-full shrink-0" style="background-color: var(--gold-bright);"></span>
                  {t}
                </li>
              {/each}
            </ul>
          </div>
        </div>
      {/each}

      <!-- CTA card -->
      <div
        class="service-card rounded-2xl overflow-hidden flex flex-col items-center justify-center p-8 text-center cursor-pointer"
        style="background: linear-gradient(160deg, var(--gold-warm) 0%, var(--gold-bright) 100%); border: 1px solid var(--gold-light);"
      >
        <Sparkles size={32} style="color: var(--purple-deep); margin-bottom: 1rem;" />
        <div class="font-display text-2xl font-semibold mb-3" style="color: var(--purple-deep);">Ready to Glow?</div>
        <p class="text-sm font-light mb-6" style="color: var(--purple-rich);">Book your appointment today and experience the Jhola's difference.</p>
        <a
          href="#contact"
          class="px-6 py-3 text-xs tracking-widest uppercase font-medium transition-all duration-300 hover:scale-105"
          style="background-color: var(--purple-deep); color: var(--gold-bright);"
        >
          Book Now
        </a>
      </div>
    </div>
  </div>
</section>

<!-- ============================================================
     ABOUT TEASER
============================================================ -->
<section
  class="py-24 px-6 relative overflow-hidden"
  style="background: linear-gradient(135deg, var(--purple-deep) 0%, #1E0F38 100%);"
>
  <div class="absolute inset-0 opacity-5"
    style="background: repeating-linear-gradient(45deg, var(--gold-bright) 0, var(--gold-bright) 1px, transparent 0, transparent 50%); background-size: 20px 20px;">
  </div>
  <div class="relative max-w-4xl mx-auto text-center">
    <div class="text-xs tracking-[0.5em] uppercase mb-3 font-light" style="color: var(--gold-bright);">✦ &nbsp; Meet the Artist</div>
    <h2 class="font-display text-5xl md:text-6xl font-light text-white mb-6">
      Ms. Jho Celine
    </h2>
    <p class="text-white/60 text-lg font-light leading-relaxed max-w-2xl mx-auto mb-10">
      With years of experience and a genuine love for beauty artistry, Ms. Jho Celine built Jhola's Brows & Wellness Studio on a foundation of trust, skill, and heartfelt care for every client.
    </p>
    <a
      href="/about"
      class="inline-block px-10 py-4 text-sm tracking-widest uppercase font-medium border transition-all duration-300 hover:scale-105 hover:bg-white/10"
      style="border-color: var(--gold-bright); color: var(--gold-bright);"
    >
      Read Her Story
    </a>
  </div>
</section>

<!-- ============================================================
     CONTACT
============================================================ -->
<section id="contact" class="py-24 px-6" style="background-color: var(--cream);">
  <div class="max-w-3xl mx-auto">
    <!-- Header -->
    <div class="text-center mb-14">
      <div class="text-xs tracking-[0.5em] uppercase mb-3 font-light" style="color: var(--gold-bright);">✦ &nbsp; Get In Touch</div>
      <h2 class="font-display text-5xl md:text-6xl font-light mb-4" style="color: var(--purple-deep);">Book Appointment</h2>
      <div class="ornament max-w-xs mx-auto mb-6">
        <span style="color: var(--gold-bright);">✦</span>
      </div>
      <p class="text-gray-500 font-light text-lg">Fill out the form and we'll get back to you shortly.</p>
    </div>

    <!-- Contact info pills -->
    <div class="flex flex-wrap justify-center gap-4 mb-12">
      <div class="flex items-center gap-2 px-5 py-2 rounded-full text-sm font-light border" style="border-color: var(--purple-pale); color: var(--purple-rich);">
        <MapPin size={14} style="color: var(--gold-bright);" /> Makati City, Philippines
      </div>
      <a href="https://www.facebook.com/profile.php?id=100089261297970" target="_blank" rel="noopener"
        class="flex items-center gap-2 px-5 py-2 rounded-full text-sm font-light border transition-all hover:border-purple-300" style="border-color: var(--purple-pale); color: var(--purple-rich);">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" style="color: var(--gold-bright);">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
        Facebook
      </a>
      <a href="https://www.tiktok.com/@jholashabrows1980" target="_blank" rel="noopener"
        class="flex items-center gap-2 px-5 py-2 rounded-full text-sm font-light border transition-all hover:border-purple-300" style="border-color: var(--purple-pale); color: var(--purple-rich);">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" style="color: var(--gold-bright);">
          <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.76a4.85 4.85 0 01-1.01-.07z"/>
        </svg>
        TikTok
      </a>
    </div>

    <!-- Form -->
    {#if submitted}
      <div
        class="text-center py-16 rounded-2xl border"
        style="background: linear-gradient(160deg, var(--purple-deep), #1A0A30); border-color: rgba(212,168,67,0.3);"
      >
        <div class="text-5xl mb-4">✦</div>
        <div class="font-display text-3xl text-white mb-3">Thank You!</div>
        <p class="text-white/60 font-light">We've received your message and will reach out soon.</p>
        <button
          onclick={() => { submitted = false; formData = { name: '', email: '', phone: '', service: '', message: '' }; }}
          class="mt-6 text-sm tracking-widest uppercase font-light border px-8 py-3 transition-all hover:bg-white/10"
          style="border-color: var(--gold-bright); color: var(--gold-bright);"
        >
          Send Another
        </button>
      </div>
    {:else}
      <form onsubmit={handleSubmit} class="space-y-5">
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label class="block text-xs tracking-widest uppercase font-light mb-2" style="color: var(--purple-mid);">
              Full Name *
            </label>
            <input
              type="text"
              bind:value={formData.name}
              required
              placeholder="Your name"
              class="w-full px-5 py-3.5 text-sm font-light border-0 border-b-2 bg-white focus:outline-none transition-colors"
              style="border-color: var(--purple-pale); color: var(--charcoal);"
              onfocus={(e) => (e.target as HTMLInputElement).style.borderColor = 'var(--gold-bright)'}
              onblur={(e) => (e.target as HTMLInputElement).style.borderColor = 'var(--purple-pale)'}
            />
          </div>
          <div>
            <label class="block text-xs tracking-widest uppercase font-light mb-2" style="color: var(--purple-mid);">
              Phone Number
            </label>
            <input
              type="tel"
              bind:value={formData.phone}
              placeholder="+63 9XX XXX XXXX"
              class="w-full px-5 py-3.5 text-sm font-light border-0 border-b-2 bg-white focus:outline-none transition-colors"
              style="border-color: var(--purple-pale); color: var(--charcoal);"
              onfocus={(e) => (e.target as HTMLInputElement).style.borderColor = 'var(--gold-bright)'}
              onblur={(e) => (e.target as HTMLInputElement).style.borderColor = 'var(--purple-pale)'}
            />
          </div>
        </div>

        <div>
          <label class="block text-xs tracking-widest uppercase font-light mb-2" style="color: var(--purple-mid);">
            Email Address *
          </label>
          <input
            type="email"
            bind:value={formData.email}
            required
            placeholder="your@email.com"
            class="w-full px-5 py-3.5 text-sm font-light border-0 border-b-2 bg-white focus:outline-none transition-colors"
            style="border-color: var(--purple-pale); color: var(--charcoal);"
            onfocus={(e) => (e.target as HTMLInputElement).style.borderColor = 'var(--gold-bright)'}
            onblur={(e) => (e.target as HTMLInputElement).style.borderColor = 'var(--purple-pale)'}
          />
        </div>

        <div>
          <label class="block text-xs tracking-widest uppercase font-light mb-2" style="color: var(--purple-mid);">
            Service Interested In
          </label>
          <select
            bind:value={formData.service}
            class="w-full px-5 py-3.5 text-sm font-light border-0 border-b-2 bg-white focus:outline-none transition-colors appearance-none"
            style="border-color: var(--purple-pale); color: var(--charcoal);"
            onfocus={(e) => (e.target as HTMLSelectElement).style.borderColor = 'var(--gold-bright)'}
            onblur={(e) => (e.target as HTMLSelectElement).style.borderColor = 'var(--purple-pale)'}
          >
            <option value="">Select a service...</option>
            {#each serviceOptions as opt}
              <option value={opt}>{opt}</option>
            {/each}
          </select>
        </div>

        <div>
          <label class="block text-xs tracking-widest uppercase font-light mb-2" style="color: var(--purple-mid);">
            Message
          </label>
          <textarea
            bind:value={formData.message}
            rows="4"
            placeholder="Tell us more about what you'd like, preferred schedule, etc."
            class="w-full px-5 py-3.5 text-sm font-light border-0 border-b-2 bg-white focus:outline-none transition-colors resize-none"
            style="border-color: var(--purple-pale); color: var(--charcoal);"
            onfocus={(e) => (e.target as HTMLTextAreaElement).style.borderColor = 'var(--gold-bright)'}
            onblur={(e) => (e.target as HTMLTextAreaElement).style.borderColor = 'var(--purple-pale)'}
          ></textarea>
        </div>

        <div class="pt-2">
          <button
            type="submit"
            disabled={sending}
            class="w-full flex items-center justify-center gap-3 py-4 text-sm tracking-widest uppercase font-medium transition-all duration-300 hover:scale-[1.01] disabled:opacity-70"
            style="background: linear-gradient(135deg, var(--purple-deep), var(--purple-rich)); color: var(--gold-bright);"
          >
            {#if sending}
              <div class="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin"></div>
              Sending...
            {:else}
              <Send size={16} />
              Send Message
            {/if}
          </button>
        </div>
      </form>
    {/if}
  </div>
</section>
