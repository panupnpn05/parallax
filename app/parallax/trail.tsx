"use client"

import React, { useState } from 'react'
import { useTrail, a } from '@react-spring/web'

import styles from './trail.module.css'

const Trail: React.FC<{ open: boolean }> = ({ open, children }) => {
  const items = React.Children.toArray(children)
  const trail = useTrail(items.length, {
    config: { mass: 5, tension: 1500, friction: 200 },
    opacity: open ? 1 : 0,
    x: open ? 0 : 50,
    height: open ? 110 : 0,
    from: { opacity: 0, x: 20, height: 0 },
  })
  return (
    <div>
      {trail.map(({ height, ...style }, index) => (
        <a.div key={index} className={styles.trailsText} style={style}>
          <a.div style={{ height }}>{items[index]}</a.div>
        </a.div>
      ))}
    </div>
  )
}

export default function App() {
  const [open, set] = useState(true)
  return (
    <div className={styles.container} onClick={() => set(state => !state)}>
      <Trail open={open}>
        <span>Hi</span>
        <span>I'm</span>
        <span>Palm</span>
      </Trail>
    </div>
  )
}
