
<section class="solutions-features">
    <div class="tabs">
        <slot />
    </div>
   
    <slot name="panel" />
</section>

<style>
    .solutions-features{
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        align-items: center;
        gap: 60px;
    }
    .tabs {
        display: flex;
        flex-direction: column;
        align-items: start;
    }
</style>