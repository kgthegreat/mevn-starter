<template>
  <div class="targets">
    <h1>Targets</h1>
    <div v-if="targets.length > 0" class="table-wrap">
      <div>
        <router-link v-bind:to="{ name: 'NewTarget' }" class="">Add Target</router-link>
      </div>
      <table>
        <tr>
          <td>Title</td>
          <td width="550">Description</td>
          <td width="100" align="center">Action</td>
        </tr>
        <tr v-for="target in targets">
          <td>{{ target.title }}</td>
          <td>{{ target.description }}</td>
          <td align="center">
            <router-link v-bind:to="{ name: 'EditTarget', params: { id: target._id }}">Edit</router-link> |
            <a href="#" @click="deleteTarget(target._id)">Delete</a>
          </td>
        </tr>
      </table>
    </div>
    <div v-else>
      There are no targets.. Let's add one <br/><br/>
      <router-link v-bind:to="{ name: 'NewTarget'}" class="add_target_link">Add Target</router-link>
    </div>
  </div>
</template>

<script>
  import TargetsService from '@/services/TargetsService'

  export default {
    name: 'targets',
    data () {
      return {
        targets: []
      }
    },
    mounted () {
      this.getTargets()
    },
    methods: {
      async getTargets () {
        const response = await TargetsService.fetchTargets()
        this.targets = response.data.targets
      },
      async deleteTarget (id) {
        await TargetsService.deleteTarget(id)
        this.getTargets()
        this.$router.push({ name: 'Targets' })
      }

    }
  }
</script>
<style type="text/css">
  .table-wrap {
    width: 60%;
    margin: 0 auto;
    text-align: center;

  }
  table th, table tr {
    text-align: left;

  }
  table thead {
    background: #f2f2f2;

  }
  table tr td {
    padding: 10px;

  }
  table tr:nth-child(odd) {
    background: #f2f2f2;

  }
  table tr:nth-child(1) {
    background: #4d7ef7;
    color: #fff;

  }
  a {
    color: #4d7ef7;
    text-decoration: none;

  }
  a.add_target_link {
    background: #4d7ef7;
    color: #fff;
    padding: 10px 80px;
    text-transform: uppercase;
    font-size: 12px;
    font-weight: bold;

  }
</style>
