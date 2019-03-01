<template>
  <div>
  <asd></asd>
  <div class="container" style="height: 580px; margin-left: 300px">

    <br>
    <h1>간트 차트</h1>
    <hr style="border: solid 2px gray;">
    <gantt class="left-container" :tasks="tasks" @task-updated="logTaskUpdate" @link-updated="logLinkUpdate" @task-selected="selectTask"></gantt>
  </div>
  </div>
</template>

<script>
  import Gantt from './ganttBack.vue'
  import asd from './asd.vue'
  export default {
    name: 'app',
    components: {Gantt, asd},
    data () {
      return {
        tasks: {
          data: [
            {id: 1, text: '계획서 짜기', start_date: '10-09-2018', duration: 7, progress: 0.6},
            {id: 2, text: '사전조사', start_date: '17-09-2018', duration: 4, progress: 0.4},
            {id: 3, text: '업무분담', start_date: '21-09-2018', duration: 5, progress: 0.4},
            {id: 4, text: '프로젝트 개요', start_date: '26-09-2018', duration: 2, progress: 0.4},
            {id: 5, text: '프로젝트 계획', start_date: '28-9-2018', duration: 8, progress: 0.4},
            {id: 6, text: '자료 조사', start_date: '4-10-2018', duration: 5, progress: 0.4},
            {id: 7, text: '제안서 작성', start_date: '10-10-2018', duration: 3, progress: 0.4},
            {id: 8, text: '계획서 작성', start_date: '14-10-2018', duration: 5, progress: 0.4},
            {id: 9, text: '세부 계획서 작성', start_date: '20-10-2018', duration: 5, progress: 0.4},
            {id: 10, text: '팀 구성', start_date: '25-10-2018', duration: 6, progress: 0.4},
            {id: 11, text: '부서 구성', start_date: '30-10-2018', duration: 4, progress: 0.4},
            {id: 12, text: '계획 실행', start_date: '3-11-2018', duration: 4, progress: 0.4},
            {id: 13, text: '개발 시작', start_date: '7-11-2018', duration: 4, progress: 0.4},
            {id: 14, text: '테스트', start_date: '11-11-2018', duration: 2, progress: 0.4},
            {id: 15, text: '프로젝트 발표', start_date: '13-11-2018', duration: 2, progress: 0.4},

          ],
          links: [
            {id: 1, source: 1, target: 2, type: '0'},
            {id: 2, source: 1, target: 5, type: '0'},
            {id: 2, source: 1, target: 6, type: '0'},
            {id: 4, source: 1, target: 8, type: '0'},
            {id: 5, source: 1, target: 9, type: '0'},
            {id: 5, source: 1, target: 10, type: '0'},
            {id: 5, source: 1, target: 13, type: '0'},
            {id: 6, source: 1, target: 14, type: '0'},
            {id: 7, source: 1, target: 14, type: '0'}

          ]
        },
        selectedTask: null,
        messages: []
      }
    },
    filters: {
      toPercent (val) {
        if(!val) return '0'
        return Math.round((+val) * 100)
      },
      niceDate (obj){
        return `${obj.getFullYear()} / ${obj.getMonth() + 1} / ${obj.getDate()}`
      }
    },
    methods: {
      selectTask (task) {
        this.selectedTask = task
      },

      addMessage (message) {
        this.messages.unshift(message)
        if(this.messages.length > 40) {
          this.messages.pop()
        }
      },
      logTaskUpdate (id, mode, task) {
        let text = (task && task.text ? ` (${task.text})`: '')
        let message = `Task ${mode}: ${id} ${text}`
        this.addMessage(message)
      },
      logLinkUpdate (id, mode, link) {
        let message = `Link ${mode}: ${id}`
        if(link){
          message += ` ( source: ${link.source}, target: ${link.target} )`
        }
        this.addMessage(message)
      }
    }
  }
</script>

<style scoped>
  html, body {
    height: 100%;
    margin: 0;
    padding: 0;
  }
  .container {
    height: 100%;
    width: 100%;
  }
  .left-container {
    overflow: hidden;
    position: relative;
    height: 100%;
  }
  .right-container {
    border-right: 1px solid #cecece;
    float: right;
    height: 100%;
    width: 340px;
    box-shadow: 0 0 5px 2px #aaa;
    position: relative;
    z-index:2;
  }
  .gantt-messages {
    list-style-type: none;
    height: 50%;
    margin: 0;
    overflow-x: hidden;
    overflow-y: auto;
    padding-left: 5px;
  }
  .gantt-messages > .gantt-message {
    background-color: #f4f4f4;
    box-shadow:inset 5px 0 #d69000;
    font-family: Geneva, Arial, Helvetica, sans-serif;
    font-size: 14px;
    margin: 5px 0;
    padding: 8px 0 8px 10px;
  }
  .gantt-selected-info {
    border-bottom: 1px solid #cecece;
    box-sizing: border-box;
    font-family: Geneva, Arial, Helvetica, sans-serif;
    height: 50%;
    line-height: 28px;
    padding: 10px;
  }
  .gantt-selected-info h2 {
    border-bottom: 1px solid #cecece;
  }

  .select-task-prompt h2{
    color: #d9d9d9;
  }
  #maincontent{
    margin-left: 200px;
  }
</style>
