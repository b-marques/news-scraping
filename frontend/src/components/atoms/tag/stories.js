import React from 'react'
import { storiesOf } from '@storybook/react'

import Tag, { TagTheme } from '.'

storiesOf('Tag', module)
  .add('default', () => <Tag theme={TagTheme.DEFAULT}>Tag</Tag>)
  .add('politics', () => <Tag theme={TagTheme.POLITICS}>Tag</Tag>)
  .add('business', () => <Tag theme={TagTheme.BUSINESS}>Tag</Tag>)
  .add('tech', () => <Tag theme={TagTheme.TECH}>Tag</Tag>)
  .add('science', () => <Tag theme={TagTheme.SCIENCE}>Tag</Tag>)
  .add('sports', () => <Tag theme={TagTheme.SPORTS}>Tag</Tag>)
