import handlebars from 'vite-plugin-handlebars';
import data from './data.json';

export default {
  base: './',
  plugins: [handlebars({
    context: data,
  })],
};
