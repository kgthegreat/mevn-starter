<template>
  <div class="targets">
    <h1>Add Target</h1>
    <div class="form">
      <div>
        <input type="text" name="title" placeholder="TITLE" v-model="title" />
      </div>
      <div>
        <textarea rows="15" cols="15" placeholder="DESCRIPTION" v-model="description" />
      </div>
      <div>
        <button class="app_target_btn" @click="addTarget">Add</button>
      </div>
    </div>
  </div>
</template>

<script>
  import TargetsService from '@/services/TargetsService'
  export default {
    name: 'NewTarget',
    data () {
      return {
        title: '',
        description: ''
      }
    },
    methods: {
      async addTarget () {
        await TargetsService.addTarget({
          title: this.title,
          description: this.description
        })
        this.$router.push({ name: 'Targets' })
      }
    }
  }
</script>

<style type="text/css">
  .form input, .form textarea {
    width: 500px;
    padding: 10px;
    border: 1px solid #e0dede;
    outline: none;
    font-size: 12px;
  }
  .form div {
    margin: 20px;
  }
  .app_target_btn {
    background: #4d7ef7;
    color: #fff;
    padding: 10px 80px;
    text-tranform: uppercase;
    font-size: 12 px;
    font-weight: bold;
    width: 520px;
    border: none;
    cursor: pointer;
  }
</style>
