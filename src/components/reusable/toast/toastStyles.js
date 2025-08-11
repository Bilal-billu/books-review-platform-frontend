const toastSuccessProps = {
    style: {},
  className: 'border-theme-primary text-theme-text',

  // Custom Icon
  icon: '✅',

  // Change colors of success/error/loading icon
  iconTheme: {
    primary: '#000',
    secondary: '#fff',
  },

  // Aria
  ariaProps: {
    role: 'status',
    'aria-live': 'polite',
  },

  // Additional Configuration
  removeDelay: 1000,
}



const toastErrorsProps = {
    style: {},
  className: 'bg-theme-primary text-theme-text-secondary',

  // Custom Icon
  icon: '❌',

  // Change colors of success/error/loading icon
  iconTheme: {
    primary: '#000',
    secondary: '#fff',
  },

  // Aria
  ariaProps: {
    role: 'status',
    'aria-live': 'polite',
  },

  // Additional Configuration
  removeDelay: 1000,
}


export {
    toastErrorsProps,
    toastSuccessProps,
}