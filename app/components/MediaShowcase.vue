<template>
  <section v-if="items.length" style="padding:calc(var(--u)*8) 0">
    <div style="max-width:1078px;margin:0 auto;padding:0 5vw">
      <div class="eyebrow zh" style="display:flex;align-items:center;gap:0.7em;font-size:max(calc(var(--u)*1),11px);font-weight:500;margin-bottom:calc(var(--u)*1.5)">{{ eyebrow }}</div>
      <h2 class="h-sec zh reveal" style="font-size:calc(var(--u)*3.6);line-height:1.2;font-weight:700;margin:0 0 calc(var(--u)*4)" v-html="heading"></h2>
      <div class="ms-grid" :style="{ display: 'grid', gridTemplateColumns: items.length === 1 ? '1fr' : 'repeat(2,1fr)', gap: 'calc(var(--u)*1)' }">
        <figure v-for="(item, i) in items" :key="i" class="fade-up" style="margin:0;position:relative;border-radius:calc(var(--u)*0.75);overflow:hidden;background:#3A342D">
          <!-- 影片:facade 模式,點擊才載入播放器,不拖慢頁面 -->
          <template v-if="item.type === 'video'">
            <div v-if="playing !== i" style="position:relative;cursor:pointer;aspect-ratio:16/9" @click="playing = i">
              <img :src="item.poster" :alt="item.caption" loading="lazy" style="width:100%;height:100%;object-fit:cover;display:block;opacity:.92">
              <span style="position:absolute;inset:0;display:grid;place-items:center"><span style="width:calc(var(--u)*5);height:calc(var(--u)*5);min-width:52px;min-height:52px;border-radius:calc(var(--u)*0.75);background:#3A78FF;display:grid;place-items:center;transition:background-color .2s ease-in-out"><svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M8 5.5 L19 12 L8 18.5 Z" fill="#FFFFFF"/></svg></span></span>
            </div>
            <video v-else :src="item.src" :poster="item.poster" controls autoplay playsinline style="width:100%;aspect-ratio:16/9;display:block;background:#000"></video>
          </template>
          <!-- 圖片 -->
          <img v-else :src="item.src" :alt="item.caption" loading="lazy" style="width:100%;aspect-ratio:16/9;object-fit:cover;display:block">
          <figcaption v-if="item.caption" class="zh" style="position:absolute;left:0;right:0;bottom:0;padding:calc(var(--u)*2.5) calc(var(--u)*1.5) calc(var(--u)*1);background:linear-gradient(transparent,rgba(35,31,26,.82));color:#F6F0E7;font-size:max(calc(var(--u)*1),11px);pointer-events:none">{{ item.caption }}</figcaption>
        </figure>
      </div>
      <p v-if="note" class="zh" style="margin:calc(var(--u)*1.5) 0 0;font-size:max(calc(var(--u)*0.95),11px);color:#857C6F">{{ note }}</p>
    </div>
  </section>
</template>

<script setup lang="ts">
interface MediaItem {
  type: 'video' | 'image'
  src: string
  poster?: string
  caption?: string
}
withDefaults(
  defineProps<{
    items?: MediaItem[]
    eyebrow?: string
    heading?: string
    note?: string
  }>(),
  {
    items: () => [],
    eyebrow: '作品選 Selected Work',
    heading: '',
    note: ''
  }
)
const playing = ref<number | null>(null)
</script>

<style>
@media (max-width: 900px) {
  .ms-grid { grid-template-columns: 1fr !important; }
}
</style>
