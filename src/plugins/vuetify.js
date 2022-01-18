import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    dark: false,
      options: {
        customProperties: true,
      },
    themes: {
      light: {
        primary: '#fc5000',
        secondary: '#394151',
        accent: '#82B1FF',
        error: '#BA1200',
        info: '#2196F3',
        success: '#6da34d',
        warning: '#e4c555'
      },
      dark: {
        primary: '#394151',
        secondary: '#ffffff'
      },
    },
  },
});
