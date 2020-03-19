import React from 'react'
import { storiesOf } from '@storybook/react'

import Text from '.'

storiesOf('Text', module).add('default', () => (
  <Text>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut malesuada, mauris et laoreet
    consectetur, ex metus rhoncus urna, id tempor tortor tellus eget enim. Integer vel elit cursus,
    vehicula nisl at, lobortis nisi. Nulla arcu eros, volutpat sit amet ante eu, egestas vulputate
    orci. Aliquam blandit nibh id velit pellentesque, sed dapibus quam bibendum. Ut a fermentum dui.
    Cras id porttitor elit. Nunc ac mauris at diam mattis aliquet non in ante. Donec varius posuere
    vehicula. Maecenas tincidunt mi ut felis fermentum, eu convallis sapien posuere. Etiam
    dignissim, est at feugiat varius, arcu ipsum faucibus orci, non fermentum erat libero sit amet
    enim.
  </Text>
))
