import React from 'react'
import { storiesOf } from '@storybook/react'

import styles from './styles.css'
import newsStyles from '../news/styles.css'

const defaultStyle = {
  outline: '1px solid #eee',
  backgroundColor: 'rgba(220, 220, 220, .6)',
  minHeight: '1310px',
}

const defaultStyle2 = {
  outline: '1px solid #eee',
  backgroundColor: 'rgba(220, 220, 220, .6)',
}

storiesOf('HomepageTemplate', module).add('default', () => (
  <div className={styles.default} style={defaultStyle}>
    <div className={styles.navbar} style={defaultStyle2} />
    <div className={styles.featured} style={defaultStyle2}></div>
    <div className={styles.headlines} style={defaultStyle2}></div>
    <div className={styles.defaults} style={defaultStyle2}></div>
    <div className={styles.divider} style={defaultStyle2}></div>
  </div>
))
