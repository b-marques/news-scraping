import React from 'react'
import { storiesOf } from '@storybook/react'

import Message, { MessageTheme } from './'

storiesOf('Message', module)
  .add('default', () => <Message theme={MessageTheme.DEFAULT}>Message</Message>)
  .add('info', () => <Message theme={MessageTheme.INFO}>Message</Message>)
  .add('error', () => <Message theme={MessageTheme.ERROR}>Message</Message>)
  .add('warning', () => <Message theme={MessageTheme.WARNING}>Message</Message>)
