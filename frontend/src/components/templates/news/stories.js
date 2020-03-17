import React from 'react'
import { storiesOf } from '@storybook/react'

import styles from './styles.css'

const defaultStyle = {
  outline: '1px solid #eee',
  backgroundColor: 'rgba(220, 220, 220, .6)',
  minHeight: '550',
}

const defaultStyle2 = {
  outline: '1px solid #eee',
  backgroundColor: 'rgba(220, 220, 220, .6)',
}

storiesOf('NewsTemplate', module)
  .add('featured', () => (
    <div className={styles.featured} style={defaultStyle}>
      <div className={styles.tag} style={defaultStyle2} />
      <div className={styles.heroimage} style={defaultStyle2} />
      <div className={styles.title} style={defaultStyle2} />
      <div className={styles.author} style={defaultStyle2} />
      <div className={styles.text} style={defaultStyle2} />
    </div>
  ))
  .add('headline', () => (
    <div className={styles.headline} style={defaultStyle}>
      <div className={styles.tag} style={defaultStyle2} />
      <div className={styles.heroimage} style={defaultStyle2} />
      <div className={styles.title} style={defaultStyle2} />
      <div className={styles.author} style={defaultStyle2} />
      <div className={styles.text} style={defaultStyle2} />
    </div>
  ))
  .add('default', () => (
    <div className={styles.default} style={defaultStyle}>
      <div className={styles.tag} style={defaultStyle2} />
      <div className={styles.heroimage} style={defaultStyle2} />
      <div className={styles.title} style={defaultStyle2} />
      <div className={styles.author} style={defaultStyle2} />
      <div className={styles.text} style={defaultStyle2} />
    </div>
  ))
