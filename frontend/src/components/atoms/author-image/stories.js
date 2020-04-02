import React from 'react'
import { storiesOf } from '@storybook/react'

import AuthorImage, { AuthorImageSize } from '.'

storiesOf('AuthorImage', module)
  .add('default', () => <AuthorImage />)
  .add('default - medium', () => <AuthorImage size={AuthorImageSize.MEDIUM} />)
  .add('default - large', () => <AuthorImage size={AuthorImageSize.LARGE} />)
