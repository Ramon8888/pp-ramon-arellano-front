import config from '../common/config';

export default {
  name: 'deleteUsersService',
  factory: ['$http', ($http) => {
    function deleteUsers(data) {
        return $http.post(config.api.base + config.api.resources.delete + '/' + data, config.headers)
          .catch(error => {
            return error;
          });
      }
    return {
      deleteUsers
    };
  }]
}