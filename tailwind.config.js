module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  darkMode: 'class',
  purge: [],
  purgeCSS: {
    whitelist: ['dark-mode']
  },
  theme: {
    darkSelector: '.dark-mode',
    borderColor: theme => ({
      ...theme('colors'),
      'l-l-gray': 'hsl(0, 0%, 98%)',
      'l-d-blue': 'hsl(236, 9%, 61%)',

    }),
    extend: {
      maxWidth: {
        '400': '400px',
        '545': '545px'
      },
      height: {
        '17': '17px',
        '25': '25px',
        '24': '24px',
        '50': '50px',
        '65': '65px',
        '300': '300px',
      },
      width: {
        '17': '17px',
        '25': '25px',
        '24': '24px',
      },
      textColor: {
        'primary': 'hsl(220, 98%, 61%)',
        'l-l-gray': 'hsl(0, 0%, 98%)',
        'l-vl-blue': 'hsl(236, 33%, 92%)',
        'l-l-blue': 'hsl(233, 11%, 84%)',
        'l-d-blue': 'hsl(236, 9%, 61%)',
        'l-vd-blue': 'hsl(235, 19%, 35%)',
        'd-vd-blue': 'hsl(235, 21%, 11%)',
        'd-vdd-blue': 'hsl(235, 24%, 19%)',
        'd-lg-blue': 'hsl(234, 39%, 85%)',
        'd-lg-blue-hover': 'hsl(236, 33%, 92%)',
        'd-dg-blue': 'hsl(234, 11%, 52%)',
        'd-vdg-blue': 'hsl(233, 14%, 35%)',
      },
      gradientColorStops: theme => ({
        ...theme('colors'),
        'tick-bright': 'hsl(192, 100%, 67%)',
        'tick-dark': ' hsl(280, 87%, 65%)',
      }),
      backgroundColor: theme => ({
        'light': "#FAFAFA",
        'dark': '#181824',
        'primary': 'hsl(220, 98%, 61%)',
        'l-l-gray': 'hsl(0, 0%, 98%)',
        'l-vl-blue': 'hsl(236, 33%, 92%)',
        'l-l-blue': 'hsl(233, 11%, 84%)',
        'l-d-blue': 'hsl(236, 9%, 61%)',
        'l-vd-blue': 'hsl(235, 19%, 35%)',
        'd-vd-blue': 'hsl(235, 21%, 11%)',
        'd-vdd-blue': 'hsl(235, 24%, 19%)',
        'd-lg-blue': 'hsl(234, 39%, 85%)',
        'd-lg-blue-hover': 'hsl(236, 33%, 92%)',
        'd-dg-blue': 'hsl(234, 11%, 52%)',
        'd-vdg-blue': 'hsl(233, 14%, 35%)',
      }),
      backgroundImage: theme => ({
        'header': "url('/images/bg-desktop-light.jpg')",
        'header-m': "url('/images/bg-mobile-light.jpg')",
        'header-dark': "url('/images/bg-desktop-dark.jpg')",
        'header-m-dkar': "url('/images/bg-mobile-dark.jpg')",
        'tick': "url('/images/icon-check.svg')",
        'cross': "url('/images/icon-cross.svg')",
        'cross-light': "url('/images/icon-cross-light.svg')",
      }),
      backgroundSize: {
        '60%': '60%'
      }
    },
  },
  variants: {
    backgroundImage: ["dark", "dark-hover", "dark-active", "hover", "responsive"],
    backgroundColor: ["dark", "dark-hover", "dark-group-hover", "dark-even", "dark-odd", "hover", "responsive"],
    borderColor: ["dark", "dark-focus", "dark-focus-within", "hover", "responsive"],
    textColor: ["dark", "dark-hover", "dark-active", "hover", "responsive"]
  },
  plugins: [
    require('tailwindcss-dark-mode')()
  ]
}
