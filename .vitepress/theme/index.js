// .vitepress/theme/index.js
import DefaultTheme from "vitepress/theme";
import "./style.css";
import Waline from "./Waline.vue";
import Layout from "./Layout.vue";

export default {
  extends: DefaultTheme,
  Layout,
  enhanceApp({ app, router, siteData }) {
    app.component("Waline", Waline);
  },
};
