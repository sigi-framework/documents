export default {
  typescript: true,
  files: './**/*.mdx',
  title: 'Sigi framework document',
  dest: 'public',
  themeConfig: {
    colors: {
      header: {
        bg: '#ffd54f'
      }
    },
    styles: {
      inlineCode: {
        color: 'hotpink'
      }
    }
  },
  menu: [
    'Introduction',
    {
      name: 'Basic',
      menu: [
        'Concept',
        {
          name: 'Action',
          route: '/en/basic/action'
        },
        {
          name: 'Effects',
          route: '/en/basic/effects'
        },
        {
          name: 'Dependencies Injection',
          route: '/en/basic/dependencies-injection'
        }
      ]
    },
    {
      name: 'React recipes',
      menu: [
        {
          name: 'Cancellation',
          route: '/en/recipes/react/cancellation'
        },
        {
          name: 'Loading/Error states handling',
          route: '/en/recipes/react/loading-error-states-handling'
        },
        {
          name: 'StateSelector',
          route: '/en/recipes/react/state-selector'
        },
        {
          name: 'Dependencies Replacement',
          route: '/en/recipes/react/dependencies-replacement'
        },
        {
          name: 'Adding new EffectModule asynchronously',
          route: '/en/recipes/react/adding-new-effect-module-asynchronously'
        },
      ]
    },
    {
      name: 'VueJS recipes',
      menu: [
        {
          name: 'Cancellation',
          route: '/en/recipes/vue/cancellation'
        },
        {
          name: 'Loading/Error states handling',
          route: '/en/recipes/vue/loading-error-states-handling'
        },
        {
          name: 'Dependencies Replacement',
          route: '/en/recipes/vue/dependencies-replacement'
        },
        {
          name: 'Adding new EffectModule asynchronously',
          route: '/en/recipes/vue/adding-new-effect-module-asynchronously'
        },
      ]
    },
    {
      name: 'Writting tests',
      route: '/en/recipes/writting-tests'
    },
    {
      name: 'FAQ',
      route: '/en/faq'
    },
    {
      name: '基本概念',
      menu: [
        '概念',
        {
          name: 'Action',
          route: '/zh/basic/action'
        },
        {
          name: 'Effects',
          route: '/zh/basic/effects'
        },
        {
          name: '依赖注入',
          route: '/zh/basic/dependencies-injection'
        }
      ]
    },
    {
      name: 'React 接入指南',
      menu: [
        {
          name: '取消',
          route: '/zh/recipes/react/cancellation'
        },
        {
          name: '处理 Loading/Error 状态',
          route: '/zh/recipes/react/loading-error-states-handling'
        },
        {
          name: 'StateSelector',
          route: '/zh/recipes/react/state-selector'
        },
        {
          name: '依赖替换',
          route: '/zh/recipes/react/dependencies-replacement'
        },
        {
          name: 'Module 异步加载',
          route: '/zh/recipes/react/adding-new-effect-module-asynchronously'
        },
      ]
    },
    {
      name: 'VueJS 接入指南',
      menu: [
        {
          name: '取消',
          route: '/zh/recipes/vue/cancellation'
        },
        {
          name: '处理 Loading/Error 状态',
          route: '/zh/recipes/vue/loading-error-states-handling'
        },
        {
          name: '依赖替换',
          route: '/zh/recipes/vue/dependencies-replacement'
        },
        {
          name: 'Module 异步加载',
          route: '/zh/recipes/vue/adding-new-effect-module-asynchronously'
        },
      ]
    },
    {
      name: '常见问题',
      route: '/zh/faq'
    }
  ]
}
