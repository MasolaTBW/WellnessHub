// Import Vuetify core
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

// Import Material Design Icons (make sure @mdi/font is installed)
import '@mdi/font/css/materialdesignicons.css'

// Define your custom theme
const wellnessTheme = {
  dark: false,
  colors: {
    background: '#FAFAFA',
    surface: '#FFFFFF',
    primary: '#1565C0', // Deep blue
    secondary: '#4CAF50', // Green
    accent: '#DC3545', // Red
    error: '#DC3545',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FB8C00',
  },
}

export default createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: 'wellnessTheme',
    themes: {
      wellnessTheme,
    },
  },
  icons: {
    defaultSet: 'mdi',
  },
})
