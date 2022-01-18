<template>
  <div class="text-center">
    <v-overlay v-if='isLoading'>
      <v-progress-circular
        indeterminate
        size="64"
      ></v-progress-circular>
    </v-overlay>
  </div>
</template>

<script>
export default {
    name: "Loader",
    computed: {
        isLoading () {
            return this.$store.state.isLoading;
        }
    }
}
</script>

<style>

</style>
