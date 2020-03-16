import React from 'react'
import { storiesOf } from '@storybook/react'

import Title, { TitleSize } from './'

storiesOf('Title', module)
  .add('default', () => <Title>Title</Title>)
  .add('default - medium', () => <Title size={TitleSize.MEDIUM}>Title</Title>)
  .add('default - large', () => <Title size={TitleSize.LARGE}>Title</Title>)
