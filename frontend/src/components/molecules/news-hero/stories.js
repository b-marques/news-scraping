import React from 'react'
import { storiesOf } from '@storybook/react'

import NewsHero, { NewsHeroTheme } from './'

storiesOf('NewsHero', module)
  .add('default', () => <NewsHero theme={NewsHeroTheme.DEFAULT} button="Read More" />)
  .add('featured', () => <NewsHero theme={NewsHeroTheme.FEATURED} button="Read More" />)
