<template>
  <v-app>
    <v-main>
      <ChatAssistant/>
    </v-main>
  </v-app>
</template>

<script>
import ChatAssistant from './components/ChatAssistant.vue'

export default {
  name: 'App',

  components: {
    ChatAssistant,
  },

  data: () => ({
    //
  }),
}
</script>
