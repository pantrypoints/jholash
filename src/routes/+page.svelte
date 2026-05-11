<script lang="ts">
  import {
    Sparkles, Eye, Hand, Footprints, Smile, Star,
    Palette, Send, MapPin, Phone, ChevronDown, CheckCircle, AlertCircle, X
  } from 'lucide-svelte';
  import { onMount } from 'svelte';

  let formData = $state({ name: '', email: '', phone: '', service: '', message: '' });
  let submitted = $state(false);
  let sending = $state(false);
  let toast = $state<{ type: 'success' | 'error'; message: string } | null>(null);

  const services = [
    {
      iconKey: 'Eye',
      title: 'SPMU / Eyebrows',
      subtitle: 'Semi-Permanent Make Up',
      desc: 'Enhance your natural features with precision brow artistry.',
      treatments: ['Microblading', 'Ombre Brows', 'Brow Lamination', 'Threading & Shaping', 'Tinting'],
    },
    {
      iconKey: 'Star',
      title: 'Eyelash Extensions',
      subtitle: 'Longer. Fuller. Flawless.',
      desc: 'Stunning lash sets customized to your eye shape and style.',
      treatments: ['Classic Extensions', 'Volume Extensions', 'Mega Volume', 'Lash Perming', 'Lash Lifting & Tinting'],
    },
    {
      iconKey: 'Hand',
      title: 'Nails',
      subtitle: 'Beautiful Nails',
      desc: 'Beautiful nails that complete your look.',
      treatments: ['Classic Manicure', 'Gel Polish', 'Nail Art', 'Nail Extensions', 'French Tips'],
    },
    {
      iconKey: 'Footprints',
      title: 'Pedicure',
      subtitle: 'Foot Care',
      desc: 'Relaxing pedicure treatments for soft, beautiful feet.',
      treatments: ['Classic Pedicure', 'Spa Pedicure', 'Gel Pedicure', 'Callus Removal', 'Foot Scrub'],
    },
    {
      iconKey: 'Sparkles',
      title: 'Facials',
      subtitle: 'Revitalize. Refresh. Radiate.',
      desc: 'Revitalizing facial treatments for glowing, healthy skin.',
      treatments: ['Deep Cleansing Facial', 'Hydrating Facial', 'Anti-Aging Facial', 'Brightening Facial', 'Acne Facial'],
    },
    {
      iconKey: 'Smile',
      title: 'Aesthetics',
      subtitle: 'Skin Treatments',
      desc: 'Advanced aesthetic procedures for skin perfection.',
      treatments: ['Pimple Removal', 'Skin Whitening', 'Glutathione Drip', 'Chemical Peel', 'Mole Removal'],
    },
    {
      iconKey: 'Palette',
      title: 'Make Up',
      subtitle: 'Beauty Artistry',
      desc: 'Professional makeup for every occasion and celebration.',
      treatments: ['Bridal Make Up', 'Party & Events', 'Airbrush', 'Photoshoot Ready', 'Everyday Glam'],
    },
  ];

  const serviceOptions = [
    'SPMU / Eyebrows', 'Eyelash Extensions', 'Nails', 'Pedicure',
    'Facials', 'Aesthetics', 'Make Up', 'Other'
  ];

  async function handleSubmit(e: Event) {
    e.preventDefault();
    sending = true;
    toast = null;

    try {
      const res = await fetch('https://pantrypoints.com/api/external', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          source: 'jholashbrow-website',
          ...formData,
        }),
      });

      if (!res.ok) throw new Error(`Server error: ${res.status}`);

      submitted = true;
      toast = { type: 'success', message: '✓ Message sent! We\'ll reach out within 24 hours.' };
      formData = { name: '', email: '', phone: '', service: '', message: '' };

      // Auto-dismiss toast after 5 seconds
      setTimeout(() => { toast = null; }, 5000);
    } catch (err: any) {
      toast = { type: 'error', message: 'Failed to send. Please call us: 0997 572 6866' };
      console.error(err);
    } finally {
      sending = false;
    }
  }

  let visible = $state(false);
  onMount(() => { setTimeout(() => visible = true, 100); });
</script>

<svelte:head>
  <title>JhoLashBrow — Beauty & Wellness Hub | Bacoor, Cavite</title>
  <meta name="description" content="JhoLashBrow Beauty & Wellness Hub — SPMU, Eyelash Extensions, Nails, Facials, Aesthetics & Make Up. 50% off for 1st time clients! Bacoor, Cavite." />
</svelte:head>

<!-- TOAST NOTIFICATION -->
{#if toast}
  <div class="fixed top-4 right-4 z-[9999] animate-in slide-in-from-top-2 fade-in"
    style={`
      background: ${toast.type === 'success' ? 'linear-gradient(135deg, #10b981 0%, #059669 100%)' : 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)'};
      box-shadow: 0 10px 40px rgba(0,0,0,0.2);
    `}>
    <div class="flex items-center gap-3 px-5 py-4 text-white font-light">
      <div>
        {#if toast.type === 'success'}
          <CheckCircle size={20} />
        {:else}
          <AlertCircle size={20} />
        {/if}
      </div>
      <span class="text-sm tracking-wide">{toast.message}</span>
      <button onclick={() => toast = null} class="ml-2 p-1 hover:bg-white/20 rounded transition-colors">
        <X size={16} />
      </button>
    </div>
  </div>
{/if}

<!-- ============================================================
     HERO
============================================================ -->
<section
  class="relative min-h-screen flex items-center justify-center overflow-hidden"
  style="background: linear-gradient(135deg, var(--purple-deep) 0%, #1A0D35 40%, #0D0720 100%);"
>
  <div class="absolute top-20 -left-32 w-96 h-96 rounded-full opacity-20 blur-3xl"
    style="background: radial-gradient(circle, var(--gold-bright) 0%, transparent 70%);"></div>
  <div class="absolute bottom-20 -right-32 w-80 h-80 rounded-full opacity-15 blur-3xl"
    style="background: radial-gradient(circle, var(--purple-soft) 0%, transparent 70%);"></div>

  <div class="relative text-center px-6 max-w-5xl mx-auto">
    <!-- Logo -->
    <div class={`flex justify-center mb-8 ${visible ? 'fade-in-up fade-in-up-delay-1' : 'opacity-0'}`}>
      <img src="/logo.jpg" alt="JhoLashBrow Logo"
        class="w-28 h-28 md:w-36 md:h-36 rounded-full object-cover border-4 shadow-2xl"
        style="border-color: var(--gold-bright); box-shadow: 0 0 40px rgba(212,168,67,0.4);" />
    </div>

    <div class={`text-xs tracking-[0.5em] uppercase mb-4 font-light ${visible ? 'fade-in-up fade-in-up-delay-1' : 'opacity-0'}`}
      style="color: var(--gold-bright);">✦ &nbsp; Beauty & Wellness Hub &nbsp; ✦</div>

    <h1 class={`font-display text-5xl md:text-7xl lg:text-8xl font-light text-white leading-none mb-2 ${visible ? 'fade-in-up fade-in-up-delay-2' : 'opacity-0'}`}>
      JhoLashBrow
    </h1>
    <div class={`font-display text-xl md:text-2xl font-light mb-6 italic ${visible ? 'fade-in-up fade-in-up-delay-2' : 'opacity-0'}`}
      style="color: var(--gold-bright);">
      "Enhancing your natural beauty. Boosting your confidence."
    </div>

    <div class={`ornament max-w-xs mx-auto mb-8 ${visible ? 'fade-in-up fade-in-up-delay-3' : 'opacity-0'}`}>
      <span style="color: var(--gold-bright);" class="text-lg">✦</span>
    </div>

    <!-- 50% Discount badge -->
    <div class={`inline-flex flex-col items-center justify-center mb-10 ${visible ? 'fade-in-up fade-in-up-delay-3' : 'opacity-0'}`}>
      <div class="relative px-10 py-5 rounded-full border-4 shadow-2xl"
        style="background: linear-gradient(135deg, var(--purple-deep), #2D0A5A); border-color: var(--gold-bright); box-shadow: 0 0 30px rgba(212,168,67,0.35);">
        <div class="absolute -top-4 left-1/2 -translate-x-1/2 text-2xl">👑</div>
        <div class="text-center">
          <span class="font-display text-4xl md:text-5xl font-bold" style="color: var(--gold-bright);">50% OFF</span>
          <div class="text-white font-light tracking-widest text-xs mt-1">FOR 1ST TIME CLIENTS</div>
          <div class="italic text-sm mt-1 font-light" style="color: var(--gold-light);">Your Beauty, Our Passion. ♡</div>
        </div>
      </div>
    </div>

    <div class={`flex flex-col sm:flex-row gap-4 justify-center ${visible ? 'fade-in-up fade-in-up-delay-4' : 'opacity-0'}`}>
      <a href="#services"
        class="px-10 py-4 text-sm tracking-widest uppercase font-medium transition-all duration-300 hover:scale-105"
        style="background: linear-gradient(135deg, var(--gold-warm), var(--gold-bright)); color: var(--purple-deep);">
        Our Services
      </a>
      <a href="#contact"
        class="px-10 py-4 text-sm tracking-widest uppercase font-light border text-white transition-all duration-300 hover:bg-white/10"
        style="border-color: rgba(255,255,255,0.3);">
        Book Appointment
      </a>
    </div>

    <!-- Phone -->
    <div class={`mt-8 flex items-center justify-center gap-2 text-white/50 text-sm font-light ${visible ? 'fade-in-up fade-in-up-delay-4' : 'opacity-0'}`}>
      <Phone size={14} style="color: var(--gold-bright);" />
      <a href="tel:09975726866" class="hover:text-white transition-colors tracking-widest">0997 572 6866</a>
    </div>
  </div>

  <div class="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
    <ChevronDown size={20} class="text-white/30" />
  </div>
</section>

<!-- ============================================================
     VALUE PROPS BAND
============================================================ -->
<section class="py-10 px-6" style="background-color: var(--gold-bright);">
  <div class="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
    {#each [['✓ Premium Quality', ''], ['✓ Hygienic & Safe', ''], ['✓ Professional Care', ''], ['✓ Customized For You', '']] as [label]}
      <div>
        <div class="font-semibold text-sm tracking-wide" style="color: var(--purple-deep);">{label}</div>
      </div>
    {/each}
  </div>
</section>

<!-- ============================================================
     SERVICES
============================================================ -->
<section id="services" class="py-24 px-6" style="background-color: var(--cream);">
  <div class="max-w-7xl mx-auto">
    <div class="text-center mb-16">
      <div class="text-xs tracking-[0.5em] uppercase mb-3 font-light" style="color: var(--gold-bright);">✦ &nbsp; What We Offer</div>
      <h2 class="font-display text-5xl md:text-6xl font-light mb-4" style="color: var(--purple-deep);">Our Services</h2>
      <div class="ornament max-w-xs mx-auto mb-6"><span style="color: var(--gold-bright);">✦</span></div>
      <p class="text-gray-500 font-light max-w-xl mx-auto text-lg leading-relaxed">
        Premium quality treatments — hygienic, safe, and customized just for you.
      </p>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {#each services as service}
        <div class="service-card rounded-2xl overflow-hidden shadow-lg"
          style="background: linear-gradient(160deg, var(--purple-deep), #1A0A30); border: 1px solid rgba(212,168,67,0.2);">
          <div class="h-1" style="background: linear-gradient(90deg, var(--gold-warm), var(--gold-light), var(--gold-warm));"></div>
          <div class="p-7">
            <div class="w-14 h-14 rounded-xl flex items-center justify-center mb-5"
              style="background: rgba(212,168,67,0.12); border: 1px solid rgba(212,168,67,0.3);">
              {#if service.iconKey === 'Eye'}
                <Eye size={24} style="color: var(--gold-bright);" />
              {:else if service.iconKey === 'Star'}
                <Star size={24} style="color: var(--gold-bright);" />
              {:else if service.iconKey === 'Hand'}
                <Hand size={24} style="color: var(--gold-bright);" />
              {:else if service.iconKey === 'Footprints'}
                <Footprints size={24} style="color: var(--gold-bright);" />
              {:else if service.iconKey === 'Sparkles'}
                <Sparkles size={24} style="color: var(--gold-bright);" />
              {:else if service.iconKey === 'Smile'}
                <Smile size={24} style="color: var(--gold-bright);" />
              {:else if service.iconKey === 'Palette'}
                <Palette size={24} style="color: var(--gold-bright);" />
              {/if}
            </div>
            <div class="text-xs tracking-widest uppercase font-light mb-1" style="color: var(--purple-soft);">{service.subtitle}</div>
            <h3 class="font-display text-xl font-light text-white mb-2">{service.title}</h3>
            <p class="text-white/40 text-xs font-light mb-4 leading-relaxed">{service.desc}</p>
            <ul class="space-y-1.5">
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

      <!-- CTA Card -->
      <div class="service-card rounded-2xl overflow-hidden flex flex-col items-center justify-center p-8 text-center cursor-pointer"
        style="background: linear-gradient(160deg, var(--gold-warm) 0%, var(--gold-bright) 100%); border: 1px solid var(--gold-light);">
        <div class="text-4xl mb-3">👑</div>
        <div class="font-display text-2xl font-semibold mb-2" style="color: var(--purple-deep);">50% Off!</div>
        <p class="text-sm font-light mb-2" style="color: var(--purple-rich);">First-time clients get half off their first service!</p>
        <p class="italic text-xs mb-6" style="color: var(--purple-deep);">"Because you deserve to feel beautiful."</p>
        <a href="#contact"
          class="px-6 py-3 text-xs tracking-widest uppercase font-medium transition-all duration-300 hover:scale-105"
          style="background-color: var(--purple-deep); color: var(--gold-bright);">
          Book Now
        </a>
      </div>
    </div>
  </div>
</section>

<!-- ============================================================
     MEET THE ARTIST — with video BG
============================================================ -->
<section class="relative py-24 px-6 overflow-hidden min-h-[60vh] flex items-center">
  <video
    class="absolute inset-0 w-full h-full object-cover"
    src="/jho.mp4"
    autoplay
    muted
    loop
    playsinline
  ></video>
  <div class="absolute inset-0" style="background: linear-gradient(135deg, rgba(45,27,78,0.88) 0%, rgba(13,7,32,0.82) 100%);"></div>

  <div class="relative max-w-4xl mx-auto text-center w-full">
    <div class="text-xs tracking-[0.5em] uppercase mb-3 font-light" style="color: var(--gold-bright);">✦ &nbsp; Meet the Artist</div>
    <h2 class="font-display text-5xl md:text-6xl font-light text-white mb-6">Ms. Jho Celine</h2>
    <div class="ornament max-w-xs mx-auto mb-6"><span style="color: var(--gold-bright);">✦</span></div>
    <p class="text-white/70 text-lg font-light leading-relaxed max-w-2xl mx-auto mb-10">
      The passionate artist and founder behind JhoLashBrow Beauty & Wellness Hub — dedicated to enhancing your natural beauty and boosting your confidence through expert, personalized care.
    </p>
    <a href="/about"
      class="inline-block px-10 py-4 text-sm tracking-widest uppercase font-medium border transition-all duration-300 hover:scale-105 hover:bg-white/10"
      style="border-color: var(--gold-bright); color: var(--gold-bright);">
      Read Her Story
    </a>
  </div>
</section>

<!-- ============================================================
     CONTACT
============================================================ -->
<section id="contact" class="py-24 px-6" style="background-color: var(--cream);">
  <div class="max-w-3xl mx-auto">
    <div class="text-center mb-14">
      <div class="text-xs tracking-[0.5em] uppercase mb-3 font-light" style="color: var(--gold-bright);">✦ &nbsp; Get In Touch</div>
      <h2 class="font-display text-5xl md:text-6xl font-light mb-4" style="color: var(--purple-deep);">Book Appointment</h2>
      <div class="ornament max-w-xs mx-auto mb-6"><span style="color: var(--gold-bright);">✦</span></div>
      <p class="text-gray-500 font-light text-lg">Fill out the form or contact us directly — we'd love to see you!</p>
    </div>

    <!-- Contact pills -->
    <div class="flex flex-wrap justify-center gap-4 mb-12">
      <a href="tel:09975726866"
        class="flex items-center gap-2 px-5 py-2 rounded-full text-sm font-light border transition-all hover:border-purple-300"
        style="border-color: var(--purple-pale); color: var(--purple-rich);">
        <Phone size={14} style="color: var(--gold-bright);" /> 0997 572 6866
      </a>
      <div class="flex items-center gap-2 px-5 py-2 rounded-full text-sm font-light border"
        style="border-color: var(--purple-pale); color: var(--purple-rich);">
        <MapPin size={14} style="color: var(--gold-bright);" /> 095 Andrea2 Panapaan V, Bacoor Cavite
      </div>
    </div>

    <!-- Form -->
    {#if submitted}
      <div class="text-center py-16 rounded-2xl border"
        style="background: linear-gradient(160deg, var(--purple-deep), #1A0A30); border-color: rgba(212,168,67,0.3);">
        <CheckCircle size={48} style="color: var(--gold-bright); margin: 0 auto 1rem;" />
        <div class="font-display text-3xl text-white mb-3">Thank You!</div>
        <p class="text-white/60 font-light">We've received your message and will reach out within 24 hours.</p>
        <p class="text-white/40 text-sm mt-2 font-light">Or call us directly: <a href="tel:09975726866" class="underline" style="color: var(--gold-bright);">0997 572 6866</a></p>
        <button
          onclick={() => { submitted = false; }}
          class="mt-6 text-sm tracking-widest uppercase font-light border px-8 py-3 transition-all hover:bg-white/10"
          style="border-color: var(--gold-bright); color: var(--gold-bright);">
          Send Another
        </button>
      </div>
    {:else}
<form action="https://pantrypoints.com/api/external" method="POST" class="space-y-5">
  <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
    <div>
      <label class="block text-xs tracking-widest uppercase font-light mb-2" style="color: var(--purple-mid);">Full Name *</label>
      <input type="text" name="name" required placeholder="Your name"
        class="w-full px-5 py-3.5 text-sm font-light border-0 border-b-2 bg-white focus:outline-none transition-colors"
        style="border-color: var(--purple-pale); color: var(--charcoal);"
        onfocus={(e) => (e.target as HTMLInputElement).style.borderColor = 'var(--gold-bright)'}
        onblur={(e) => (e.target as HTMLInputElement).style.borderColor = 'var(--purple-pale)'} />
    </div>
    <div>
      <label class="block text-xs tracking-widest uppercase font-light mb-2" style="color: var(--purple-mid);">Phone Number *</label>
      <input type="tel" name="phone" required placeholder="09XX XXX XXXX"
        class="w-full px-5 py-3.5 text-sm font-light border-0 border-b-2 bg-white focus:outline-none transition-colors"
        style="border-color: var(--purple-pale); color: var(--charcoal);"
        onfocus={(e) => (e.target as HTMLInputElement).style.borderColor = 'var(--gold-bright)'}
        onblur={(e) => (e.target as HTMLInputElement).style.borderColor = 'var(--purple-pale)'} />
    </div>
  </div>

  <div>
    <label class="block text-xs tracking-widest uppercase font-light mb-2" style="color: var(--purple-mid);">Email Address</label>
    <input type="email" name="email" placeholder="your@email.com"
      class="w-full px-5 py-3.5 text-sm font-light border-0 border-b-2 bg-white focus:outline-none transition-colors"
      style="border-color: var(--purple-pale); color: var(--charcoal);"
      onfocus={(e) => (e.target as HTMLInputElement).style.borderColor = 'var(--gold-bright)'}
      onblur={(e) => (e.target as HTMLInputElement).style.borderColor = 'var(--purple-pale)'} />
  </div>

  <div>
    <label class="block text-xs tracking-widest uppercase font-light mb-2" style="color: var(--purple-mid);">Service Interested In</label>
    <select name="subj"
      class="w-full px-5 py-3.5 text-sm font-light border-0 border-b-2 bg-white focus:outline-none transition-colors appearance-none"
      style="border-color: var(--purple-pale); color: var(--charcoal);"
      onfocus={(e) => (e.target as HTMLSelectElement).style.borderColor = 'var(--gold-bright)'}
      onblur={(e) => (e.target as HTMLSelectElement).style.borderColor = 'var(--purple-pale)'}>
      <option value="">Select a service...</option>
      {#each serviceOptions as opt}
        <option value={opt}>{opt}</option>
      {/each}
    </select>
  </div>

  <div>
    <label class="block text-xs tracking-widest uppercase font-light mb-2" style="color: var(--purple-mid);">Message</label>
    <textarea name="msg" rows="4"
      placeholder="Preferred schedule, questions, or anything you'd like us to know..."
      class="w-full px-5 py-3.5 text-sm font-light border-0 border-b-2 bg-white focus:outline-none transition-colors resize-none"
      style="border-color: var(--purple-pale); color: var(--charcoal);"
      onfocus={(e) => (e.target as HTMLTextAreaElement).style.borderColor = 'var(--gold-bright)'}
      onblur={(e) => (e.target as HTMLTextAreaElement).style.borderColor = 'var(--purple-pale)'}></textarea>
  </div>

  <input type="hidden" name="source" value="jholashbrow-website" />

  <div class="pt-2">
    <button type="submit"
      class="w-full flex items-center justify-center gap-3 py-4 text-sm tracking-widest uppercase font-medium transition-all duration-300 hover:scale-[1.01]"
      style="background: linear-gradient(135deg, var(--purple-deep), var(--purple-rich)); color: var(--gold-bright);">
      <Send size={16} />
      Book Appointment
    </button>
  </div>
</form>
    {/if}
  </div>
</section>

<!-- 
    {#if submitted}
      <div class="text-center py-16 rounded-2xl border"
        style="background: linear-gradient(160deg, var(--purple-deep), #1A0A30); border-color: rgba(212,168,67,0.3);">
        <CheckCircle size={48} style="color: var(--gold-bright); margin: 0 auto 1rem;" />
        <div class="font-display text-3xl text-white mb-3">Thank You!</div>
        <p class="text-white/60 font-light">We've received your message and will reach out soon.</p>
        <p class="text-white/40 text-sm mt-2 font-light">Or call us directly: <a href="tel:09975726866" class="underline" style="color: var(--gold-bright);">0997 572 6866</a></p>
        <button
          onclick={() => { submitted = false; formData = { name: '', email: '', phone: '', service: '', message: '' }; }}
          class="mt-6 text-sm tracking-widest uppercase font-light border px-8 py-3 transition-all hover:bg-white/10"
          style="border-color: var(--gold-bright); color: var(--gold-bright);">
          Send Another
        </button>
      </div>
    {:else}
      <form onsubmit={handleSubmit} class="space-y-5">
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label class="block text-xs tracking-widest uppercase font-light mb-2" style="color: var(--purple-mid);">Full Name *</label>
            <input name="name" type="text" bind:value={formData.name} required placeholder="Your name"
              class="w-full px-5 py-3.5 text-sm font-light border-0 border-b-2 bg-white focus:outline-none transition-colors"
              style="border-color: var(--purple-pale); color: var(--charcoal);"
              onfocus={(e) => (e.target as HTMLInputElement).style.borderColor = 'var(--gold-bright)'}
              onblur={(e) => (e.target as HTMLInputElement).style.borderColor = 'var(--purple-pale)'} />
          </div>
          <div>
            <label class="block text-xs tracking-widest uppercase font-light mb-2" style="color: var(--purple-mid);">Phone Number *</label>
            <input name="phone"  type="tel" bind:value={formData.phone} required placeholder="09XX XXX XXXX"
              class="w-full px-5 py-3.5 text-sm font-light border-0 border-b-2 bg-white focus:outline-none transition-colors"
              style="border-color: var(--purple-pale); color: var(--charcoal);"
              onfocus={(e) => (e.target as HTMLInputElement).style.borderColor = 'var(--gold-bright)'}
              onblur={(e) => (e.target as HTMLInputElement).style.borderColor = 'var(--purple-pale)'} />
          </div>
        </div>

        <div>
          <label class="block text-xs tracking-widest uppercase font-light mb-2" style="color: var(--purple-mid);">Email Address</label>
          <input name="email"  type="email" bind:value={formData.email} placeholder="your@email.com"
            class="w-full px-5 py-3.5 text-sm font-light border-0 border-b-2 bg-white focus:outline-none transition-colors"
            style="border-color: var(--purple-pale); color: var(--charcoal);"
            onfocus={(e) => (e.target as HTMLInputElement).style.borderColor = 'var(--gold-bright)'}
            onblur={(e) => (e.target as HTMLInputElement).style.borderColor = 'var(--purple-pale)'} />
        </div>

        <div>
          <label class="block text-xs tracking-widest uppercase font-light mb-2" style="color: var(--purple-mid);">Service Interested In</label>
          <select bind:value={formData.service}
            name="subj" 
            class="w-full px-5 py-3.5 text-sm font-light border-0 border-b-2 bg-white focus:outline-none transition-colors appearance-none"
            style="border-color: var(--purple-pale); color: var(--charcoal);"
            onfocus={(e) => (e.target as HTMLSelectElement).style.borderColor = 'var(--gold-bright)'}
            onblur={(e) => (e.target as HTMLSelectElement).style.borderColor = 'var(--purple-pale)'}>
            <option value="">Select a service...</option>
            {#each serviceOptions as opt}
              <option value={opt}>{opt}</option>
            {/each}
          </select>
        </div>

        <div>
          <label class="block text-xs tracking-widest uppercase font-light mb-2" style="color: var(--purple-mid);">Message</label>
          <textarea bind:value={formData.message} rows="4"
            name="msg" 
            placeholder="Preferred schedule, questions, or anything you'd like us to know..."
            class="w-full px-5 py-3.5 text-sm font-light border-0 border-b-2 bg-white focus:outline-none transition-colors resize-none"
            style="border-color: var(--purple-pale); color: var(--charcoal);"
            onfocus={(e) => (e.target as HTMLTextAreaElement).style.borderColor = 'var(--gold-bright)'}
            onblur={(e) => (e.target as HTMLTextAreaElement).style.borderColor = 'var(--purple-pale)'}></textarea>
        </div>

        {#if error}
          <div class="px-4 py-3 rounded text-sm font-light" style="background: rgba(220,38,38,0.1); color: #dc2626; border: 1px solid rgba(220,38,38,0.2);">
            {error}
          </div>
        {/if}

        <div class="pt-2">
          <button type="submit" disabled={sending}
            class="w-full flex items-center justify-center gap-3 py-4 text-sm tracking-widest uppercase font-medium transition-all duration-300 hover:scale-[1.01] disabled:opacity-70"
            style="background: linear-gradient(135deg, var(--purple-deep), var(--purple-rich)); color: var(--gold-bright);">
            {#if sending}
              <div class="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin"></div>
              Sending...
            {:else}
              <Send size={16} />
              Book Appointment
            {/if}
          </button>
        </div>
      </form>
    {/if}
  </div>
</section>
 -->


<!-- ============================================================
     PARTNERS TICKER
============================================================ -->
<section class="py-16 px-0 overflow-hidden" style="background-color: var(--purple-deep);">
  <div class="max-w-7xl mx-auto px-6 mb-10">
    <div class="text-center">
      <div class="text-xs tracking-[0.5em] uppercase mb-3 font-light" style="color: var(--gold-bright);">✦ &nbsp; Our Ecosystem</div>
      <h2 class="font-display text-5xl md:text-6xl font-light text-white mb-4">Partners</h2>
      <div class="ornament max-w-xs mx-auto mb-6"><span style="color: var(--gold-bright);">✦</span></div>
    </div>
  </div>

  <!-- Ticker Container -->
 </section>

<style>
  @keyframes ticker {
    0% { transform: translateX(0); }
    100% { transform: translateX(-100%); }
  }
  @keyframes ticker2 {
    0% { transform: translateX(0); }
    100% { transform: translateX(-100%); }
  }
</style>