<script lang="ts">
  let { restaurant } = $props<{
    restaurant: { name: string; description: string; logo: string; heroImage: string }
  }>();
</script>

<svelte:head>
  <link rel="preload" as="image" href={restaurant.heroImage} />
  <link rel="preload" as="image" href={restaurant.logo} />
</svelte:head>

<div class="hero">
  <div class="hero-bg" style="background-image: url('{restaurant.heroImage}')"></div>
  <div class="hero-overlay"></div>
  <div class="hero-content">
    <div class="logo-container">
      <img src={restaurant.logo} alt="{restaurant.name} Logo" class="logo" />
    </div>
    <h1 class="restaurant-name">{restaurant.name}</h1>
    <p class="restaurant-desc">{restaurant.description}</p>
  </div>
</div>

<style>
  .hero {
    position: relative;
    height: 40vh;
    min-height: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    border-radius: 0 0 var(--radius-lg) var(--radius-lg);
    box-shadow: var(--shadow-md);
    /* Full-bleed on mobile: cancel the container's side padding */
    margin: 0 -16px;
  }

  .hero-bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
    z-index: 1;
    transition: transform 10s ease;
  }

  @media (hover: hover) {
    .hero:hover .hero-bg {
      transform: scale(1.05);
    }
  }

  .hero-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to bottom, rgba(10, 10, 10, 0.2), rgba(10, 10, 10, 0.9));
    z-index: 2;
  }

  .hero-content {
    position: relative;
    z-index: 3;
    text-align: center;
    padding: 24px;
    transform: translateY(20px);
    animation: fadeUp 0.8s ease forwards;
  }

  .logo-container {
    width: 80px;
    height: 80px;
    margin: 0 auto 16px;
    border-radius: 50%;
    overflow: hidden;
    border: 2px solid var(--accent);
    box-shadow: 0 0 20px rgba(var(--accent-rgb), 0.3);
  }

  .logo {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .restaurant-name {
    font-size: 2.5rem;
    font-weight: 700;
    letter-spacing: 2px;
    margin-bottom: 8px;
    color: var(--text-primary);
    text-transform: uppercase;
  }

  .restaurant-desc {
    font-size: 1rem;
    color: var(--accent);
    letter-spacing: 1px;
    font-weight: 300;
  }

  @keyframes fadeUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media (min-width: 768px) {
    .hero {
      margin: 0; /* Reset mobile bleed on tablet+ */
      border-radius: var(--radius-lg);
    }
  }

  @media (min-width: 1024px) {
    .hero {
      height: 50vh;
      min-height: 400px;
      border-radius: var(--radius-lg);
      margin-top: 24px;
    }

    .logo-container {
      width: 120px;
      height: 120px;
      margin-bottom: 24px;
    }

    .restaurant-name {
      font-size: 4rem;
      letter-spacing: 4px;
    }

    .restaurant-desc {
      font-size: 1.5rem;
    }
  }
</style>
