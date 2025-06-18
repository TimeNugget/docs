import { defineClientConfig } from 'vitepress'
import Viewer from 'v-viewer'
import 'viewerjs/dist/viewer.css'

export default defineClientConfig({
  enhance({ app }) {
    app.use(Viewer, {
      defaultOptions: {
        inline: false,
        toolbar: true,
        rotatable: true,
      }
    })
  }
})