import React from 'react'
import { storiesOf } from '@storybook/react'

import Author, { AuthorTheme } from '.'

storiesOf('Author', module)
  .add('default', () => <Author authorName="Author Name" theme={AuthorTheme.DEFAULT} />)
  .add('featured', () => <Author authorName="Author Name" theme={AuthorTheme.FEATURED} />)
