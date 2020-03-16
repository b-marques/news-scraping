import React from 'react'
import { storiesOf } from '@storybook/react'

import NewsHeroImage, { NewsHeroImageSize } from './'

storiesOf('NewsHeroImage', module)
  .add('default', () => <NewsHeroImage />)
  .add('default - medium', () => <NewsHeroImage size={NewsHeroImageSize.MEDIUM} />)
  .add('default - large', () => <NewsHeroImage size={NewsHeroImageSize.LARGE} />)
