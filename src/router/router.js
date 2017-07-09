
import test from '../views/test.vue';
import list from '../views/list.vue';
import detail from '../views/detail.vue';
export default [
    {
      path: '/',
      component: list
    },
     {
        path: '/test',
        name: "test",
        component: test
      },
     {
        path: '/list',
        name: "list",
        component: list
      },
     {
        path: '/detail/:songId',
        name: "detail",
        component: detail
      }
];
