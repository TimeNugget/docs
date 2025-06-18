// .vitepress/theme/index.js
import DefaultTheme from "vitepress/theme";
import "./style.css";
import Waline from "./Waline.vue";
import 'viewerjs/dist/viewer.min.css';
import imageViewer from 'vitepress-plugin-image-viewer'
//注册组件时需要 import vImageViewer from 'vitepress-plugin-image-viewer/lib/vImageViewer.vue'
import Layout from "./Layout.vue";
import { useRoute } from 'vitepress';

export default {
  extends: DefaultTheme,
  Layout,
  enhanceApp({ app, router, siteData }) {
    app.component("Waline", Waline);
  },
  setup() {
    const route = useRoute();
    imageViewer(route);
  }
};
