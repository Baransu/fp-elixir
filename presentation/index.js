import React, { Component } from 'react';

import { Deck } from 'spectacle';

// Import image preloader util
import preloader from 'spectacle/lib/utils/preloader';

// Import theme
import createTheme from 'spectacle/lib/themes/default';

// Require CSS
import 'normalize.css';
import 'spectacle/lib/themes/default/index.css';

import * as s from './slides';
const slides = Object.keys(s).reduce((acc, key) => acc.concat(s[key]), []);

const images = {
  city: require('../assets/city.jpg'),
  kat: require('../assets/kat.png'),
  logo: require('../assets/formidable-logo.svg'),
  markdown: require('../assets/markdown.png')
};

preloader(images);

const theme = createTheme(
  {
    primary: 'rgb(45, 45, 45)',
    secondary: 'white',
    tertiary: 'hotpink'
  },
  {
    primary: 'Montserrat',
    secondary: 'Helvetica'
  }
);

export default class Presentation extends Component {
  render() {
    return (
      <Deck transition={['zoom']} transitionDuration={500} theme={theme}>
        {slides.map((slide, index) => {
          return React.cloneElement(slide, { key: index });
        })}
      </Deck>
    );
  }
}
