<script>
  import { createEventDispatcher } from 'svelte';
  import { css } from '../../stitches.config'

  const styles = css({
    alignSelf: 'start',
  });


  const dispatch = createEventDispatcher();

</script>


<div class={styles()}>


  <button on:click="{() => { dispatch('regenerate') }}">Regenerate</button>
  
</div>