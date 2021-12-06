import Vue from 'vue'
import NavBar from './components/NavBar.vue'

Vue.component('navbar-item', {
  props: {
    url: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    }
  },
  template: `
    <a :href="url">
      {{ name }}
    </a>
  `
})

var navbar = new NavBar({
  el: "#navbar-container",
  data: {
    links: [
      {name: "Google", url: "google.com"},
      {name: "Facebook", url: "facebook.com"}
    ]
  }
})