<template>
  <div>

    <SiteHeader />

    <main>
      <router-view />
    </main>


  </div>
</template>

<script>
import SiteHeader from '@/components/SiteHeader'


export default {
  components: { SiteHeader }
}
</script>
