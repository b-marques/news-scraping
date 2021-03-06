// Author : danilowoz
// Fonte: https://github.com/danilowoz/react-atomic-design

import React from 'react'
import { storiesOf } from '@storybook/react'

storiesOf('— Templates', module).add('info', () => (
  <p>
    In this state we stop composing components and begin to set their context. Moreover, the
    templates create relationships between the organisms and others components through positions,
    placements and patterns of the pages but it doesn’t have any style, color or component rendered.
    That’s why it looks like a wireframe.
  </p>
))
