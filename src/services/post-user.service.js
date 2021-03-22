import config from '../common/config';

export default {
  name: 'postUsersService',
  factory: ['$http', 'localStorageService', ($http, localStorageService) => {
    function postUsers(data) {
        var users = localStorageService.get('users'); 
        if(users != null){
            users.push(data);
        localStorageService.set('users');
        }
        
        return $http.post(config.api.base + config.api.resources.add, data, config.headers)
          .catch(error => {
            return error;
          });
      }
    return {
      postUsers
    };
  }]
}