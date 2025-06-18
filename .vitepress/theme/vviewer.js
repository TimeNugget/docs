import { defineClientConfig } from 'vitepress'

export default defineClientConfig({
  async enhance({ app }) {
    //SSR兼容
    if (typeof window !== 'undefined') {
      const { default: Viewer } = await import('v-viewer')
      await import('viewerjs/dist/viewer.css')
      
      app.use(Viewer, {
        defaultOptions: {
          inline: false,
          toolbar: true,
          rotatable: true
        }
      })
      
      //为SSR提供空指令实现
      app.directive('viewer', {
        getSSRProps() {
          return {}
        }
      })
    }
  }
})