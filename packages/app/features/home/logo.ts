let logo1

if (process.env.NODE_ENV === 'production') {
  logo1 = require('./placeholder.jpeg')
} else {
  logo1 = require('./prelogo.png')
}

export const logo = logo1
