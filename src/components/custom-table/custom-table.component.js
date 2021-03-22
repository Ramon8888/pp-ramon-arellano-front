import angular from 'angular';
import template from './custom-table.tpl.html';
import './custom-table.scss';
import usersService from '../../services/users.service';
import deleteUsersService from '../../services/delete-user.service';

export default angular
  .module('customTable.component', [])
  .factory(usersService.name, usersService.factory, deleteUsersService.name, deleteUsersService.factory)
  .component('customTable', {
    template,
    controller: [usersService.name, function (users) {
      var ctrl = this;
      ctrl.search = '';
      users.getUsers()
        .then(result => {
          ctrl.users = result;
        })
        .catch(error => {
          ctrl.users = error;     
        });
        ctrl.doKeyUp= function (e) {
          if (e.keyCode === 13) {
            ctrl.name.name = ctrl.search;
            ctrl.hobbie.hobbie = ctrl.hobbie;
          }
        }
        ctrl.delete = function(item, index){
          users.deleteUsers(item);
          console.log(index +1);
          ctrl.users.splice(index,1);
        }
    }]
  })
  .name;
