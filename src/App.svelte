<script lang="ts">
  import PaperCanvas from './lib/PaperCanvas.svelte'
  import Controls from './lib/Controls.svelte'
  import Layout from './lib/Layout.svelte'
  import Circle from './sketches/Circle.js'
  import globalStyles from './styles/global';

  globalStyles()

  let seed
  
  function updateSeed(event) {
    seed = Math.random()
  }
</script>



<Layout>
  <PaperCanvas props={{
    sketch: Circle,
    width: 4800,
    height: 5600,
    seed
  }} />
  <Controls on:regenerate={updateSeed} />
</Layout>


