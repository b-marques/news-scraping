import React from 'react'
import { storiesOf } from '@storybook/react'

import NewsHeroImage from '.'

storiesOf('NewsHeroImage', module).add('default', () => (
  <div style={{ width: `500px`, height: `250px` }}>
    <NewsHeroImage />
  </div>
))
