import React from 'react'
import { storiesOf } from '@storybook/react'

import styles from './styles.css'

const defaultStyle = {
  outline: '1px solid #eee',
  backgroundColor: 'rgba(220, 220, 220, .6)',
  minHeight: '1310px',
}

const defaultStyle2 = {
  outline: '1px solid #eee',
  backgroundColor: 'rgba(220, 220, 220, .6)',
}

storiesOf('HomeTemplate', module).add('default', () => (
  <div className={styles.default} style={defaultStyle}>
    <div className={styles.navbar} style={defaultStyle2} />
    <div className={styles.featured} style={defaultStyle2} />
    <div className={styles.headlines} style={defaultStyle2} />
    <div className={styles.defaults} style={defaultStyle2} />
    <div className={styles.divider} style={defaultStyle2} />
  </div>
))
