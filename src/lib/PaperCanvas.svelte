<script>
  export let props = undefined

  import { paper } from 'paper'
  import { alea } from 'seedrandom'
  
  function setupPaper(node) {
    
    // override default props and deconstruct
    let { sketch, seed } = {
      ...{
        sketch: undefined,
        seed: Math.random()
      },
      ...props
    }

    // return false if no sketch function
    if (typeof sketch !== 'function') { return false }
    
    // attach node to paper
    paper.setup(node)
    
    // document seed (useful if seed isn't manually specified)
    console.log(`seed used: ${seed}`)
    
    // draw sketch with specified seed source
    new sketch(paper, { seedSource: new alea(seed)}).draw()
    
    // draw paper
    paper.view.draw()
  }

</script>

<div class="canvas-wrapper">
  <canvas use:setupPaper />
</div>