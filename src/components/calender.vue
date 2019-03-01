<template>
  <div>
    <asd></asd>
    <div id="cal" style="margin-left: 260px; margin-top: 20px" >
      <calendar
        :first-day="1"
        :all-events="events"
        :canAddEvent="true"
        :canDeleteEvent="true"
        :dateLocale="'ar'"
        :displayWeekNumber="false"
        @eventAdded="eventAdded"
        @eventDeleted="eventDeleted"
      ></calendar>
    </div>
  </div>
</template>

<script>
  import calendar from '../Calendar.vue';
  import asd from './asd.vue'
  export default {
    name: 'cal',
    data() {
      return {
        events: []
      }
    },
    components: {
      calendar,asd
    },
    methods: {
      eventAdded(event) {
        this.events.push(event);
      },
      eventDeleted(event) {
        this.events.splice(this.events.indexOf(event), 1);
      },
    },
    mounted() {
      let me = this;
      setTimeout(function () {
        me.events = [ // you can make ajax call here
          {
            id:1,
            title:'미팅',
            color: 'card-danger card-inverse',
            description: 'Some fancy details for the event',
            date: new Date()
          },
          {
            id:2,
            title:'미팅',
            color: 'card-default',
            description: 'Please bring some donouts',
            date: new Date()
          },
          {
            id:3,
            title:'회의',
            color: 'card-primary card-inverse',
            description: 'Don\'t forget about this!',
            date: new Date(new Date().setHours(new Date().getHours() + 2*24)) // add 2 days
          },
          {
            id:4,
            title:'성과 검사날',
            color: 'card-success card-inverse',
            description: 'Feel free to bring anyone with you',
            date: new Date(new Date().setHours(new Date().getHours() + 5*24)) // add 5 days
          },
          {
            id:5,
            title:'팀원 소집일',
            color: 'card-warning card-inverse',
            description: 'Laptop required',
            date: new Date(new Date().setHours(new Date().getHours() + 14*24)) // add 2 weeks
          },
          {
            id:6,
            title:'회의',
            color: 'card-danger card-inverse',
            date: new Date(new Date().setHours(new Date().getHours() + 30*24)) // add 1 month
          },
          {
            id:7,
            title:'회의',
            color: 'card-success card-inverse',
            date: new Date(new Date().setHours(new Date().getHours() + 30*30)) // add 1 month
          },
          {
            id:8,
            title:'미팅',
            color: 'card-primary card-inverse',
            date: new Date(new Date().setHours(new Date().getHours() + 40*24)) // add 1 month
          },
          {
            id:9,
            title:'성과 발표',
            color: 'card-defalut card-inverse',
            date: new Date(new Date().setHours(new Date().getHours() + 35*20)) // add 1 month
          },
          {
            id:10,
            title:'미팅',
            color: 'card-danger card-inverse',
            date: new Date(new Date().setHours(new Date().getHours() + 29*40)) // add 1 month
          },
          {
            id:11,
            title:'회의',
            color: 'card-success card-inverse',
            date: new Date(new Date().setHours(new Date().getHours() + 40*40)) // add 1 month
          },
          {
            id:12,
            title:'회의',
            color: 'card-warning card-inverse',
            date: new Date(new Date().setHours(new Date().getHours() + 24*26)) // add 1 month
          },
        ];
      }, 1000);
    }
  }
</script>

<style>
  @import "../style.css";
</style>
