<template>
  <div class="targets">
    <h1>Edit Target</h1>
    <div class="form">
      <div>
        <input type="text" name="title" placeholder="TITLE" v-model="title">
      </div>
      <div>
        <textarea rows="15" cols="15" placeholder="DESCRIPTION" v-model="description"></textarea>
      </div>
      <div>
        <button class="app_target_btn" @click="updateTarget">Update</button>
      </div>
    </div>
  </div>
</template>

<script>
  import TargetsService from '@/services/TargetsService'
  export default {
    name: 'EditTarget',
    data () {
      return {
        title: '',
        description: ''
      }
    },
    mounted () {
      this.getTarget()
    },
    methods: {
      async getTarget () {
        const response = await TargetsService.getTarget({
          id: this.$route.params.id
        })
        this.title = response.data.title
        this.description = response.data.description
      },
      async updateTarget () {
        await TargetsService.updateTarget({
          id: this.$route.params.id,
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
    text-transform: uppercase;
    font-size: 12px;
    font-weight: bold;
    width: 520px;
    border: none;
    cursor: pointer;

  }
</style>
