<script lang="ts">
import './layout.css';
import favicon from '$lib/assets/favicon.svg';

let { children } = $props();
</script>

<svelte:head>
  <link rel="icon" href={favicon} />
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
  <meta name="theme-color" content="#1E40AF" />
  <meta name="apple-mobile-web-app-capable" content="yes" />
  <meta name="description" content="Accessible and responsive design for all users." /> <!-- Added accessibility meta description -->
</svelte:head>

{@render children()}
