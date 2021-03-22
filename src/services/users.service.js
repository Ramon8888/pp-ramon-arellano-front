import config from '../common/config';

export default {
  name: 'usersService',
  factory: ['$http', 'localStorageService', ($http, localStorageService) => {
    function getUsers() {
      localStorage.clear();
      localStorage.setItem('token', config.headers.headers['x-access-token'])
      var users = localStorageService.get('users');
      if (users) {
        return new Promise(resolve => {
          resolve(users);
        });
      } else {
        return $http.get(config.api.base + config.api.resources.users, config.headers)
          .then(result => {
            users = result.data;
            localStorageService.set('users', users);
            return users;
          })
          .catch(error => {
            return error;
          });
      }
    }
    function deleteUsers(data) {
      return $http.delete(config.api.base + config.api.resources.delete + '/' + data, config.headers)
        .catch(error => {
          return error;
        });
    }
    return {
      getUsers, deleteUsers
    };
    
  }]
}