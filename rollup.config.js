const node = require('rollup-plugin-node-resolve');
const ractive = require('rollup-plugin-ractive-bin');

export default {
  input: 'src/panel.ractive.html',
  output: {
    file: 'scripts/panel.js',
    format: 'iife',
    name: 'ractiveDevTool'
  },
  plugins: [
    node(),
    ractive({ escapeUnicode: true })
  ]
};

