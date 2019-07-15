import Vue from 'vue/dist/vue.js'
import VueRouter from 'vue-router'
import App from './App'
import FamilyList from './pages/FamilyList'
import CookingPlan from './pages/CookingPlan'
import CreateCookingPlan from './pages/CreateCookingPlan'
import Home from './pages/Home'
import { createProvider } from 'vue-apollo';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

import VueApollo, { ApolloProvider } from 'vue-apollo';

Vue.config.productionTip = false

const routes = [
  { path: '/', component: Home },
  { path: '/familien', component: FamilyList },
  { path: '/kochplan', component: CookingPlan },
  { path: '/kochplan_erstellen', component: CreateCookingPlan }
]

const router = new VueRouter({
  base: __dirname,
  routes // short for `routes: routes`
})

const httpLink = new HttpLink({
  uri: 'https://graphql-cooking-scheduler-api.herokuapp.com/v1/graphql'
});

const apolloClient = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
  connectToDevTools: true
});

Vue.use(VueApollo);
Vue.use(VueRouter)

const apolloProvider = new VueApollo({
  defaultClient: apolloClient
});

const app = new Vue({
  render: h => h(App),
  apolloProvider,
  router
}).$mount('#app')

window.addEventListener('popstate', () => {
  app.currentRoute = window.location.pathname
})
