import autoprefixer from 'autoprefixer';
import postcss from 'rollup-plugin-postcss';

export default {
  input: './styles/less/index.less',
  output: {
    file: './styles/output.css',
    format: 'es',
  },
  plugins: [
    postcss({
      extract: true,
      sourceMap: false,
      plugins: [autoprefixer],
      use: {
        less: {
          javascriptEnabled: true,
        },
      },
    }),
  ],
};
