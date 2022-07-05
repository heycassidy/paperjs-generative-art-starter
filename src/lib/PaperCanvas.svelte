<script>
  export let props = {}

  import paper from 'paper'
  import alea from 'seedrandom'
  import { css } from '../../stitches.config'

  // override default props and deconstruct
  let { sketch, width, height, seed } = {
    ...{
      sketch: undefined,
      width: 1024,
      height: 1024,
      seed: Math.random()
    },
    ...props
  }

  const setupPaper = (node, props) => {
    // return false if no sketch function
    if (typeof sketch !== 'function') { return false }

    // attach node to paper
    paper.setup(node)
    
    // log the seed (useful if seed isn't manually specified)
    console.log(`seed used: ${seed}`)
    
    // draw sketch with specified seed source
    sketch = new sketch(paper, {
      width, height,
      seedSource: alea(seed)
    })

    sketch.draw()

    return {
      update(props) {
        sketch.clear()
        sketch.draw()
      }
    }
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
  <canvas use:setupPaper={props} />
</div>