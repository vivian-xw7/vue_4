<script setup>
import { ref, onMounted } from 'vue'
import EventCard from '../components/EventCard.vue'
import EventService from '../services/EventService.js'

const events = ref(null)

onMounted(() => {
  EventService.getEvents() // multiple events
    .then((response) => {
      events.value = response.data
    })
    .catch((error) => {
      console.log(error)
    })
})
</script>

<template>
  <h1>Events for good</h1>
  <div class="events">
    <EventCard v-for="event in events" :key="event.id" :event="event" />
  </div>
</template>

data() {}

<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
