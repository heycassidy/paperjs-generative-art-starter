<script lang="ts">
  import PaperCanvas from './lib/PaperCanvas.svelte'

  import WavyCircle from './sketches/WavyCircle.js'
</script>

<PaperCanvas props={{
  sketch: WavyCircle,
  seed: 0.09182038
}} />

