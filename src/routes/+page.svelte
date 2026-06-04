<script lang="ts">
  import { restaurant, categories, items } from "$lib/data.js";
  import Hero from "$lib/components/Hero.svelte";
  import CategoryNav from "$lib/components/CategoryNav.svelte";
  import MenuItem from "$lib/components/MenuItem.svelte";
  import { onMount } from "svelte";

  let activeCategory = $state(categories[0].id);

  // Group items by category
  let itemsByCategory = $derived(
    categories.map((category) => ({
      ...category,
      items: items.filter((item) => item.categoryId === category.id),
    })),
  );

  function handleCategorySelect(categoryId: string) {
    activeCategory = categoryId;
    const element = document.getElementById(`category-${categoryId}`);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  // Scroll Spy to update active category on manual scroll
  onMount(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const id = entry.target.id.replace("category-", "");
            activeCategory = id;
          }
        }
      },
      {
        rootMargin: "-20% 0px -75% 0px",
        threshold: 0,
      },
    );

    document.querySelectorAll(".category-section").forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  });
</script>

<svelte:head>
  <title>{restaurant.name} | Virtual Menu</title>
  <meta name="description" content={restaurant.description} />
</svelte:head>

<div class="container">
  <Hero {restaurant} />

  <div class="menu-layout">
    <aside class="sidebar">
      <CategoryNav
        {categories}
        {activeCategory}
        onSelect={handleCategorySelect}
      />
    </aside>

    <main class="menu-content">
      {#each itemsByCategory as category (category.id)}
        <section id="category-{category.id}" class="category-section">
          <h2 class="category-title">{category.name}</h2>

          {#if category.items.length === 0}
            <p class="empty-state">No items available.</p>
          {:else}
            <div class="items-grid">
              {#each category.items as item (item.id)}
                <MenuItem {item} />
              {/each}
            </div>
          {/if}
        </section>
      {/each}
    </main>
  </div>
</div>

<footer class="site-footer">
  <div class="footer-content">
    <p class="footer-brand">{restaurant.name}</p>
    <p class="footer-tagline">{restaurant.description}</p>
    
    <div class="restaurant-links">
      {#if restaurant.phone}
        <a href="tel:{restaurant.phone.replace(/\s+/g, '')}" class="contact-btn">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
          Call
        </a>
      {/if}
      {#if restaurant.location}
        <a href="{restaurant.location}" target="_blank" rel="noopener noreferrer" class="contact-btn">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path><circle cx="12" cy="10" r="3"></circle></svg>
          Map
        </a>
      {/if}
      {#if restaurant.instagram}
        <a href="{restaurant.instagram}" target="_blank" rel="noopener noreferrer" class="contact-btn insta-btn">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="url(#insta-grad)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <defs>
              <linearGradient id="insta-grad" x1="0%" y1="100%" x2="100%" y2="0%">
                <stop offset="0%" stop-color="#fdf497" />
                <stop offset="25%" stop-color="#fd5949" />
                <stop offset="50%" stop-color="#d6249f" />
                <stop offset="100%" stop-color="#285AEB" />
              </linearGradient>
            </defs>
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
          </svg>
          Insta
        </a>
      {/if}
    </div>
    <p class="footer-note disclaimer">
      * Images are for illustration purposes only. Actual presentation may vary.
    </p>
  </div>
  <div class="footer-powered">
    <p class="powered-label">Powered by <span class="powered-brand">ScanDesk</span></p>
    <p class="powered-cta">Get your digital menu ·
      <a href="tel:+916369169287" class="powered-phone">+91 63691 69287</a>
    </p>
  </div>
</footer>

<style>
  .menu-layout {
    display: flex;
    flex-direction: column;
    padding-bottom: 80px;
  }

  .sidebar {
    position: sticky;
    top: 0;
    z-index: 100;
    /* Allow sticky CategoryNav to work — sidebar must not shrink */
    align-self: stretch;
  }

  .items-grid {
    display: flex;
    overflow-x: auto;
    gap: 14px;
    /* Equal padding on both sides so first and last cards aren't touching screen edges */
    padding: 12px 24px 20px 24px;
    margin: 0 -16px;
    scroll-snap-type: x mandatory;
    -webkit-overflow-scrolling: touch;
    align-items: stretch;
  }

  .category-section {
    margin-bottom: 40px;
    scroll-margin-top: 90px;
  }

  .category-title {
    font-size: 1.3rem;
    font-weight: 700;
    color: var(--text-primary);
    margin-bottom: 14px;
    padding-left: 12px;
    border-left: 3px solid var(--accent);
    letter-spacing: 0.3px;
  }

  .empty-state {
    color: var(--text-secondary);
    font-style: italic;
    padding-left: 12px;
  }

  /* ── Tablet: 2-col grid ─────────────────────── */
  @media (min-width: 768px) {
    .items-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 20px;
      overflow-x: visible;
      padding: 0;
      margin: 0;
      scroll-snap-type: none;
      align-items: start;
    }

    .category-section {
      overflow: visible;
    }

    .category-title {
      font-size: 1.4rem;
    }
  }

  /* ── Desktop: sidebar + content ─────────────── */
  @media (min-width: 1024px) {
    .menu-layout {
      flex-direction: row;
      align-items: flex-start;
      gap: 40px;
      margin-top: 40px;
    }

    .sidebar {
      position: static; /* Revert mobile sticky, CategoryNav handles it internally here */
      width: 220px;
      flex-shrink: 0;
      align-self: stretch; /* Must stretch for sticky CategoryNav to work */
    }

    .menu-content {
      flex: 1;
      min-width: 0;
    }

    .items-grid {
      grid-template-columns: repeat(2, 1fr);
    }

    .category-section {
      scroll-margin-top: 32px;
    }
  }

  /* ── Wide Desktop: 3-col grid ───────────────── */
  @media (min-width: 1280px) {
    .items-grid {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  /* ── Footer ────────────────────────────────────── */
  .site-footer {
    text-align: center;
    padding: 48px 24px 32px;
    border-top: 1px solid rgba(255, 255, 255, 0.06);
    margin-top: 40px;
  }

  .footer-brand {
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
    background: linear-gradient(135deg, #fff, rgba(255,255,255,0.7));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .footer-tagline {
    font-size: 0.95rem;
    color: var(--text-secondary);
    margin-bottom: 1.5rem;
  }

  .restaurant-links {
    display: flex;
    justify-content: center;
    gap: 0.75rem;
    margin: 1.5rem 0 2rem 0;
    flex-wrap: wrap;
  }

  .contact-btn {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.6rem 1.2rem;
    background: rgba(255, 255, 255, 0.03);
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 999px;
    color: var(--text-secondary);
    text-decoration: none;
    font-size: 0.9rem;
    font-weight: 500;
    transition: all 0.2s ease;
  }

  .contact-btn:hover {
    background: rgba(255, 255, 255, 0.08);
    transform: translateY(-2px);
    color: var(--text);
    border-color: rgba(255, 255, 255, 0.2);
  }
  
  .contact-btn svg {
    color: var(--accent);
    opacity: 0.9;
  }

  .footer-note {
    font-size: 0.7rem;
    color: rgba(163, 163, 163, 0.5);
  }

  .disclaimer {
    margin-top: 4px;
    font-style: italic;
  }

  .footer-powered {
    margin-top: 24px;
    padding-top: 16px;
    border-top: 1px solid rgba(255, 255, 255, 0.04);
  }

  .powered-label {
    font-size: 0.7rem;
    color: rgba(163, 163, 163, 0.4);
  }

  .powered-brand {
    font-weight: 600;
    color: rgba(163, 163, 163, 0.6);
    text-decoration: none;
    transition: color 0.2s;
  }

  .powered-brand:hover {
    color: var(--accent);
  }

  .powered-cta {
    font-size: 0.65rem;
    color: rgba(163, 163, 163, 0.35);
    margin-top: 4px;
  }

  .powered-phone {
    color: var(--accent);
    text-decoration: none;
    font-weight: 500;
  }
</style>
