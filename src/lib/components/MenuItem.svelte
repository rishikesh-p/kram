<script lang="ts">
  let { item } = $props<{
    item: {
      id: string;
      name: string;
      description: string;
      price: number;
      image: string;
      tags: string[];
    };
  }>();
</script>

<div class="menu-item glass-panel">
  <div class="item-image-container">
    <img src={item.image} alt={item.name} class="item-image" loading="lazy" />
    {#if item.tags && item.tags.length > 0}
      <span class="badge">{item.tags[0]}</span>
    {/if}
  </div>
  
  <div class="item-content">
    <h3 class="item-name">{item.name}</h3>
    <p class="item-desc">{item.description}</p>
    <div class="item-footer">
      <span class="item-price">₹{item.price}</span>
      {#if item.tags && item.tags.length > 1}
        <div class="tags-row">
          {#each item.tags.slice(1, 3) as tag}
            <span class="item-tag-secondary">{tag}</span>
          {/each}
        </div>
      {/if}
    </div>
  </div>
</div>

<style>
  .menu-item {
    display: flex;
    flex-direction: column;
    width: 220px;
    min-width: 220px;
    border-radius: var(--radius-md);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    overflow: hidden;
    scroll-snap-align: start;
    flex-shrink: 0;
  }

  @media (hover: hover) {
    .menu-item:hover {
      transform: translateY(-6px);
      box-shadow: 0 16px 32px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(var(--accent-rgb), 0.3);
    }
  }

  /* ── Image ─────────────────────────────────────── */
  .item-image-container {
    width: 100%;
    height: 150px;
    position: relative;
    overflow: hidden;
    background: var(--bg-tertiary);
    flex-shrink: 0;
  }

  .item-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
    will-change: transform;
    touch-action: pan-x pan-y;
  }

  @media (hover: hover) {
    .menu-item:hover .item-image {
      transform: scale(1.08);
    }
  }

  .badge {
    position: absolute;
    top: 10px;
    left: 10px;
    font-size: 0.6rem;
    font-weight: 700;
    letter-spacing: 0.5px;
    text-transform: uppercase;
    padding: 3px 8px;
    border-radius: 20px;
    background: rgba(var(--accent-rgb), 0.85);
    color: #fff;
    backdrop-filter: blur(4px);
    z-index: 2;
  }

  /* ── Text Content ──────────────────────────────── */
  .item-content {
    padding: 14px;
    display: flex;
    flex-direction: column;
    flex: 1;
    gap: 6px;
  }

  .item-name {
    font-size: 0.95rem;
    font-weight: 600;
    color: var(--text-primary);
    line-height: 1.3;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  .item-desc {
    font-size: 0.72rem;
    color: var(--text-secondary);
    line-height: 1.5;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    flex: 1;
    margin: 0;
  }

  /* ── Footer ────────────────────────────────────── */
  .item-footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 8px;
    border-top: 1px solid rgba(255,255,255,0.06);
    margin-top: auto;
  }

  .item-price {
    font-weight: 700;
    color: var(--accent);
    font-size: 1.05rem;
  }

  .tags-row {
    display: flex;
    gap: 4px;
    flex-wrap: wrap;
  }

  .item-tag-secondary {
    font-size: 0.6rem;
    font-weight: 600;
    text-transform: uppercase;
    color: var(--text-secondary);
    background: rgba(255,255,255,0.06);
    border: 1px solid rgba(255,255,255,0.1);
    padding: 2px 7px;
    border-radius: 10px;
  }

  /* ── Desktop ───────────────────────────────────── */
  @media (min-width: 768px) {
    .menu-item {
      width: auto;
      min-width: auto;
      scroll-snap-align: none;
    }

    .item-image-container {
      height: 200px;
    }

    .item-name {
      font-size: 1.05rem;
      -webkit-line-clamp: 2;
      line-clamp: 2;
    }

    .item-desc {
      font-size: 0.8rem;
      -webkit-line-clamp: 3;
      line-clamp: 3;
    }
  }
</style>
