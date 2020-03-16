import React from 'react'
import { storiesOf } from '@storybook/react'

import Button, { ButtonSize } from './'

storiesOf('Button', module)
  .add('default', () => <Button>Button</Button>)
  .add('default - medium', () => <Button size={ButtonSize.MEDIUM}>Button</Button>)
  .add('default - large', () => <Button size={ButtonSize.LARGE}>Button</Button>)
