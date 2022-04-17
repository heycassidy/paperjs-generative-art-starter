<script>
  export let props = {}

  import paper from 'paper'
  import alea from 'seedrandom'
import { start_hydrating } from 'svelte/internal';
  import { css } from '../../stitches.config'

  // override default props and deconstruct
  const { sketch, width, height, seed } = {
    ...{
      sketch: undefined,
      width: 1024,
      height: 1024,
      seed: Math.random()
    },
    ...props
  }

  const setupPaper = (node) => {
    // return false if no sketch function
    if (typeof sketch !== 'function') { return false }

    // attach node to paper
    paper.setup(node)
    
    // log the seed (useful if seed isn't manually specified)
    console.log(`seed used: ${seed}`)
    
    // draw sketch with specified seed source
    new sketch(paper, {
      width, height,
      seedSource: alea(seed)
    }).draw()

    return {}
  }

  const styles = css({
    overflow: 'hidden',
    maxHeight: '100%',
    maxWidth: '100%',
    boxShadow: '0 0 0 1px hsla(0, 0%, 0%, 0.05), 5px 10px 60px hsla(0, 0%, 0%, 0.1)',
    aspectRatio: `${width / height}`,
    alignSelf: 'start',

    '> canvas': {
      display: 'block',
      width: '100% !important',
      height: '100% !important',
    }
  })
</script>

<div class={styles()}>
  <canvas use:setupPaper />
</div>