<script>
    import { css } from '../../stitches.config'

    const styles = css({
      $$padding: 'clamp(0.5rem, 3vw, 3rem)',
      padding: '$$padding',
      height: '100vh',
      display: 'grid',
      gap: '$$padding',
      // gridTemplateColumns: '1fr minmax(10rem, auto)',
      gridTemplateColumns: 'auto minmax(15rem, 1fr)',
      justifyContent: 'center',
      alignItems: 'center',
    });
</script>

<div class={styles()}>
  <slot></slot>
</div>