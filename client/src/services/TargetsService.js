import Api from '@/services/Api'

export default {
  fetchTargets () {
    return Api().get('targets')
  },

  addTarget (params) {
    return Api().post('targets', params)
  },
  getTarget (params) {
    return Api().get('targets/' + params.id, params)
  },
  updateTarget (params) {
    return Api().put('targets/' + params.id, params)
  },
  deleteTarget (id) {
    return Api().delete('targets/' + id)
  }

}
