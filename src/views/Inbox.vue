<template>
  <v-calendar
    class="inbox-calendar"
    ref="calendar"
    v-model="value"
    color="primary"
    type="4day"
    :events="events"
    :event-color="getEventColor"
    :event-ripple="false"
  >
    <template v-slot:event="{ event, timed, eventSummary }">
      <div class="v-event-draggable" v-html="eventSummary()"></div>
      <div
        v-if="timed"
        class="v-event-drag-bottom"
        @mousedown.stop="extendBottom(event)"
      ></div>
    </template>
  </v-calendar>
</template>

<script>
export default {
  name: "Inbox",
};
</script>

<style scoped>
.inbox-calendar {
  padding: 20px 5px;
}
</style>
