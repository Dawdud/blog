// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from "~/layouts/Default.vue";
import "~/assets/style/main.scss";
import "prismjs/themes/prism.css";
import 'prismjs/themes/prism-okaidia.css';
import VueDisqus from 'vue-disqus';



export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component("Layout", DefaultLayout);
  Vue.use(VueDisqus);

  head.link.push({
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css?family=Encode+Sans:700&display=swap"
  });
  head.script.push({
    src: "https://kit.fontawesome.com/153e830555.js",
    body: true
  });
  head.link.push({
    rel: "stylesheet",
    href:
      "https://fonts.googleapis.com/css?family=Hind+Madurai:400,:500&display=swap"
  });
  head.link.push({
    rel: "stylesheet",
    href:
      "https://fonts.googleapis.com/css?family=Thasadith:700&display=swap&subset=latin-ex"
  });
  head.meta.push({
    name: "google-site-verification",
    content: "qVCsJdukxGzeBaEnyBItlMpHM4oINE9GhznID4iD-ZM"
  });

}
