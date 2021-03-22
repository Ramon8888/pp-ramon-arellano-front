// token generated since backend pack & pack project, this expire in 14 days, good day!!
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdXRoIjp0cnVlLCJpYXQiOjE2MTYzOTcxNjAsImV4cCI6MTYxNzYwNjc2MH0.NSNTReMVz8eKgh9aKzl_t6MetGOz-HfY4Nb-WHTreO0';

export default {
  appName: 'app',
  headers: {
    headers: {
      'x-access-token': token
    }
  },
  api: {
    base: 'http://localhost:3000/',
    resources: {
      users: 'list',
      add: 'add',
      delete: 'delete'
    }
  },
  stateUrls: {
    // keys should match view component names
    users: '/users',
    home: '/'
  }
};
