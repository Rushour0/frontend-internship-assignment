const { createGlobPatternsForDependencies } = require('@nrwl/angular/tailwind');
const { join } = require('path');

const customColors = {
  'dark-border': '#161528',
  'light-border': '#d6d6d6',
  'table-header-bg': '#f5f5f5',
  'white': '#ffffff',
  'black': '#000000',
  'blue': '#007bff',
  'red': '#dc3545',
  'green': '#28a745',
  'yellow': '#ffc107',
  'orange': '#fd7e14',
  'purple': '#800080',
  'pink': '#e83e8c',
  'cyan': '#17a2b8',
  'gray': '#6c757d',
  'gray-dark': '#343a40',
  'violet': '#8F00FF'

}

module.exports = {
  prefix: 'tw-',
  corePlugins: {
    preflight: false
  },
  content: [join(__dirname, 'src/**/!(*.stories|*.spec).{ts,html}'), ...createGlobPatternsForDependencies(__dirname)],
  theme: {
    textColor: {
      ...customColors
    },
    fontSize: {
      '14-px': '14px',
      '16-px': '16px',
      '24-px': '24px',
    },
    extend: {
      colors: {
        'dark-border': '#161528',
        'light-border': '#d6d6d6',
        'table-header-bg': '#f5f5f5',
       
      },
      borderRadius: {
        '4-px': '4px',
        '8-px': '8px',
      },
      margin: {
        '16-px': '16px',
        '24-px': '24px'
      },
      padding: {
        '12-px': '12px',
        '24-px': '24px'
      },
      fontFamily: {
        'activ-grotisk': '"aktiv-grotesk", sans-serif'
      },
      fontWeight: {
        '600': '600'
      },
      height: {
        '40-px': '40px',
        '60-px': '60px'
      },
      width: {
        '200-px': '200px',
        '1/2': '50%',
        '1/3': '33.333333%',
        '1/4': '25%',
        '1/5': '20%',
        '1/6': '16.666667%',
        '1/7': '14.285714%',
        '1/8': '12.5%',
        '1/9': '11.111111%',
        '1/10': '10%',
        '1/11': '9.090909%',
        '1/12': '8.333333%',
        '2/3': '66.666667%',
        '2/5': '40%',
        '3/5': '60%',
        '3/4': '75%',
        '4/5': '80%',
        '5/6': '83.333333%',
        '5/7': '71.428571%',
        '5/12': '41.666667%',
        '7/12': '58.333333%',
        '11/12': '91.666667%',
        
      
      }
    },
  },
  plugins: [],
}
