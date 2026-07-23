import { useCallback, useEffect, useRef, useState } from 'react'
import { DayOneScene, DayLaterScene } from './PlantScenes.jsx'
import { ArrowsLR } from './Icons.jsx'

// Day 1 -> today growth comparison. Drag (or arrow-key) the divider to reveal.
export default function CompareSlider() {
  const stageRef = useRef(null)
  const [pos, setPos] = useState(52) // percent from left
  const dragging = useRef(false)

  const setFromClientX = useCallback((clientX) => {
    const el = stageRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const p = ((clientX - rect.left) / rect.width) * 100
    setPos(Math.max(4, Math.min(96, p)))
  }, [])

  useEffect(() => {
    const move = (e) => {
      if (!dragging.current) return
      const x = e.touches ? e.touches[0].clientX : e.clientX
      setFromClientX(x)
    }
    const up = () => (dragging.current = false)
    window.addEventListener('mousemove', move)
    window.addEventListener('touchmove', move, { passive: true })
    window.addEventListener('mouseup', up)
    window.addEventListener('touchend', up)
    return () => {
      window.removeEventListener('mousemove', move)
      window.removeEventListener('touchmove', move)
      window.removeEventListener('mouseup', up)
      window.removeEventListener('touchend', up)
    }
  }, [setFromClientX])

  const start = (e) => {
    dragging.current = true
    const x = e.touches ? e.touches[0].clientX : e.clientX
    setFromClientX(x)
  }

  const onKey = (e) => {
    if (e.key === 'ArrowLeft') setPos((p) => Math.max(4, p - 4))
    if (e.key === 'ArrowRight') setPos((p) => Math.min(96, p + 4))
  }

  return (
    <div className="compare-card frame">
      <span className="frame-corners" aria-hidden="true" />
      <div
        className="compare-stage"
        ref={stageRef}
        onMouseDown={start}
        onTouchStart={start}
        role="slider"
        aria-label="Reveal plant growth from day one to today"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={Math.round(pos)}
        tabIndex={0}
        onKeyDown={onKey}
        style={{ '--pos': `${pos}%` }}
      >
        <span className="compare-tag left">Day 1</span>
        <span className="compare-tag right">Day 34</span>

        <div className="compare-layer compare-before">
          <DayOneScene />
        </div>
        <div className="compare-layer compare-after">
          <DayLaterScene />
        </div>

        <div className="compare-handle">
          <span className="compare-knob" aria-hidden="true">
            <ArrowsLR />
          </span>
        </div>
      </div>

      <div className="compare-caption">
        <span className="serif-italic">Pothos cutting · kitchen windowsill</span>
        <span className="hint">
          <ArrowsLR style={{ width: 15, height: 15 }} /> drag to compare
        </span>
      </div>
    </div>
  )
}
