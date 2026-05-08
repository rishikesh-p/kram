<script lang="ts">
  import { restaurant, categories, items } from '$lib/data.js';
  import Hero from '$lib/components/Hero.svelte';
  import CategoryNav from '$lib/components/CategoryNav.svelte';
  import MenuItem from '$lib/components/MenuItem.svelte';
  import { onMount } from 'svelte';

  let activeCategory = $state(categories[0].id);

  // Group items by category
  let itemsByCategory = $derived(
    categories.map(category => ({
      ...category,
      items: items.filter(item => item.categoryId === category.id)
    }))
  );

  function handleCategorySelect(categoryId: string) {
    activeCategory = categoryId;
    const element = document.getElementById(`category-${categoryId}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  // Scroll Spy to update active category on manual scroll
  onMount(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const id = entry.target.id.replace('category-', '');
            activeCategory = id;
          }
        }
      },
      {
        rootMargin: '-20% 0px -75% 0px',
        threshold: 0
      }
    );

    document.querySelectorAll('.category-section').forEach((section) => {
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
</style>
