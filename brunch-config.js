module.exports = {
  files: {
    javascripts: {
      joinTo: 'app.js'
    },
    stylesheets: {
      joinTo: 'app.css'
    },
    templates: {
      joinTo: 'app.js'
    }
  },
  paths: {
    public: 'public'
  },
  plugins: {
    babel: {
      presets: ['latest', 'stage-3']
    },
    vue: {
      extractCSS: true,
      out: 'public/components.css'
    }
  },
  modules: {
    autoRequire: {
      'app.js': ['index']
    }
  }
}