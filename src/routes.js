import Trello from './components/applications/Trello.vue';
import Jira from './components/applications/Jira.vue';
import Wrike from './components/applications/Wrike.vue';
import Asana from './components/applications/Asana.vue';


export const routes = [
  {
    path: '/',
    component: Trello,
    name: 'trello'
  },
  {
    path: '/jira',
    component: Jira,
    name: 'jira'
  },
  {
    path: '/wrike',
    component: Wrike,
    name: 'wrike'
  },
  {
    path: '/asana',
    component: Asana,
    name: 'asana'
  },
];
