<script lang="ts">
  let { item, onClose } = $props<{
    item: {
      name: string;
      description: string;
      price: number;
      image: string;
      tags: string[];
    } | null;
    onClose: () => void;
  }>();
</script>

{#if item}
  <!-- svelte-ignore a11y_click_events_have_key_events -->
  <!-- svelte-ignore a11y_no_static_element_interactions -->
  <div class="modal-backdrop" onclick={onClose}>
    <div class="modal-content glass-panel" onclick={(e) => e.stopPropagation()}>
      <button class="close-btn" onclick={onClose}>&times;</button>
      
      <div class="modal-image-container">
        <img src={item.image} alt={item.name} class="modal-image" />
      </div>
      
      <div class="modal-details">
        <div class="modal-header">
          <h2 class="modal-title">{item.name}</h2>
          <span class="modal-price">₹{item.price.toFixed(2)}</span>
        </div>
        
        {#if item.tags && item.tags.length > 0}
          <div class="modal-tags">
            {#each item.tags as tag (tag)}
              <span class="tag">{tag}</span>
            {/each}
          </div>
        {/if}
        
        <div class="divider"></div>
        
        <p class="modal-desc">{item.description}</p>
        
        <!-- Future: Add to Cart button could go here -->
      </div>
    </div>
  </div>
{/if}

<style>
  .modal-backdrop {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.8);
    backdrop-filter: blur(5px);
    z-index: 1000;
    display: flex;
    align-items: flex-end; /* Bottom sheet on mobile */
    justify-content: center;
    animation: fadeIn 0.3s ease;
  }

  .modal-content {
    width: 100%;
    max-width: 600px;
    background: var(--bg-secondary);
    border-radius: var(--radius-lg) var(--radius-lg) 0 0;
    overflow: hidden;
    position: relative;
    max-height: 90vh;
    display: flex;
    flex-direction: column;
    animation: slideUp 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  }

  .close-btn {
    position: absolute;
    top: 16px;
    right: 16px;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background: rgba(0, 0, 0, 0.5);
    color: white;
    border: none;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    z-index: 10;
    transition: var(--transition);
  }

  .close-btn:hover {
    background: rgba(0, 0, 0, 0.8);
    transform: scale(1.05);
  }

  .modal-image-container {
    width: 100%;
    height: 30vh;
    min-height: 250px;
  }

  .modal-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .modal-details {
    padding: 24px;
    overflow-y: auto;
  }

  .modal-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 12px;
  }

  .modal-title {
    font-size: 1.5rem;
    color: var(--text-primary);
    padding-right: 16px;
  }

  .modal-price {
    font-size: 1.25rem;
    font-weight: 700;
    color: var(--accent);
  }

  .modal-tags {
    display: flex;
    gap: 8px;
    flex-wrap: wrap;
    margin-bottom: 20px;
  }

  .tag {
    font-size: 0.8rem;
    padding: 4px 12px;
    border-radius: 16px;
    background: rgba(255, 255, 255, 0.1);
    color: var(--text-primary);
    border: 1px solid rgba(255, 255, 255, 0.2);
  }

  .divider {
    height: 1px;
    background: rgba(255, 255, 255, 0.1);
    margin: 20px 0;
  }

  .modal-desc {
    font-size: 1rem;
    line-height: 1.6;
    color: var(--text-secondary);
  }

  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }

  @keyframes slideUp {
    from { transform: translateY(100%); }
    to { transform: translateY(0); }
  }

  /* Desktop layout tweaks */
  @media (min-width: 600px) {
    .modal-backdrop {
      align-items: center;
      padding: 20px;
    }
    .modal-content {
      border-radius: var(--radius-lg);
    }
  }
</style>
