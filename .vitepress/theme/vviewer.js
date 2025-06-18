import { defineClientConfig } from 'vitepress'

export default defineClientConfig({
  async enhance({ app }) {
    if (typeof window !== 'undefined') {
      const { default: Viewer } = await import('v-viewer')
      await import('viewerjs/dist/viewer.css')
      
      app.use(Viewer, {
        defaultOptions: {
          title: false,
          toolbar: {
            zoomIn: 1,
            zoomOut: 1,
            oneToOne: 1,
            reset: 1,
            rotateLeft: 1,
            rotateRight: 1,
          }
        }
      })
    }
  }
})