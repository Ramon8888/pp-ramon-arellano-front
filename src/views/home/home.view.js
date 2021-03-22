import angular from 'angular';
import template from './home.tpl.html';
import postUsersService from '../../services/post-user.service';
import customTable from '../../components/custom-table/custom-table.component';
import usersService from '../../services/users.service';
export default angular
  .module('home.view', [
    customTable,
  ])
  .factory(
    postUsersService.name,
    postUsersService.factory,
    usersService.name,
    usersService.factory)
  .component('home', {
    template,
    controller: [postUsersService.name, usersService.name, function (users) {
      var ctrl = this;
      ctrl.formData = {};
      ctrl.sendData = function(){
        users.postUsers(ctrl.formData)
        .then(result => {
          ctrl.users = 'User saved ok!!';
          ctrl.res = result;
          ctrl.formData.name = '';
          ctrl.formData.email = '';
          ctrl.formData.phone = '';
          ctrl.formData.password = '';
          ctrl.formData.age = '';
          ctrl.formData.gender = '';
          ctrl.formData.hobbie = '';
          users = localStorage.clear();
        })
        .catch(error => {
          ctrl.users = error;     
        });
      }
    }],
  })
  .name;
 