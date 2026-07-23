// Hand-drawn propagation scenes for the Day 1 -> today comparison slider.
// Both scenes share the same jar + viewBox so the wipe stays registered.

const VIEWBOX = '0 0 500 600'

// A single almond leaf, drawn pointing up from its base at (0,0).
function Leaf({ x, y, rot = 0, scale = 1, fill = '#4f9e64', vein = '#2f7a48' }) {
  return (
    <g transform={`translate(${x} ${y}) rotate(${rot}) scale(${scale})`}>
      <path
        d="M0 0 C -30 -30 -24 -80 0 -100 C 24 -80 30 -30 0 0 Z"
        fill={fill}
      />
      <path
        d="M0 -6 C 2 -40 2 -70 0 -94"
        fill="none"
        stroke={vein}
        strokeWidth="2.4"
        strokeLinecap="round"
        opacity="0.7"
      />
    </g>
  )
}

// The shared glass jar with a water fill, sitting on a soft shadow.
function Jar({ children, waterTop = 372 }) {
  const glass =
    'M172 305 L328 305 L314 521 Q314 545 290 545 L210 545 Q186 545 186 521 Z'
  const water = `M176 ${waterTop} C 210 ${waterTop + 8} 290 ${waterTop + 8} 324 ${waterTop} L313 521 Q313 543 290 543 L210 543 Q187 543 187 521 Z`
  return (
    <g>
      <ellipse cx="250" cy="556" rx="96" ry="16" fill="#1c4a30" opacity="0.12" />
      {/* glass body */}
      <path d={glass} fill="#eaf5ef" opacity="0.55" />
      {/* water */}
      <path d={water} fill="#7fd8d0" opacity="0.42" />
      <ellipse cx="250" cy={waterTop} rx="74" ry="9" fill="#a7e6df" opacity="0.6" />
      {/* things inside the water (roots) render above water, below rim */}
      {children}
      {/* glass outline + rim + highlight */}
      <path d={glass} fill="none" stroke="#bcd6c4" strokeWidth="2.5" />
      <ellipse
        cx="250"
        cy="305"
        rx="78"
        ry="12"
        fill="#f4fbf5"
        stroke="#bcd6c4"
        strokeWidth="2.5"
      />
      <path
        d="M198 320 C 194 380 196 470 204 528"
        fill="none"
        stroke="#ffffff"
        strokeWidth="4"
        strokeLinecap="round"
        opacity="0.55"
      />
    </g>
  )
}

export function DayOneScene() {
  return (
    <svg viewBox={VIEWBOX} role="img" aria-label="A fresh cutting on day one, just a stem and a couple of small leaves in water.">
      <Jar waterTop={372}>
        {/* barely-there first roots */}
        <path d="M250 374 C 246 392 240 402 236 414" fill="none" stroke="#cfe2c1" strokeWidth="3" strokeLinecap="round" />
        <path d="M250 374 C 256 390 262 398 268 408" fill="none" stroke="#cfe2c1" strokeWidth="3" strokeLinecap="round" />
      </Jar>
      {/* short stem */}
      <path
        d="M250 372 C 250 340 249 300 250 262"
        fill="none"
        stroke="#3d8f59"
        strokeWidth="7"
        strokeLinecap="round"
      />
      <Leaf x={250} y={296} rot={-36} scale={0.5} />
      <Leaf x={250} y={272} rot={32} scale={0.44} />
      {/* a small new bud at the tip */}
      <path d="M250 262 C 244 250 246 240 252 236 C 258 242 256 254 250 262 Z" fill="#b7e36a" />
    </svg>
  )
}

export function DayLaterScene() {
  return (
    <svg viewBox={VIEWBOX} role="img" aria-label="The same cutting weeks later: a tall stem, several full leaves, new growth, and a dense network of roots filling the jar.">
      <Jar waterTop={368}>
        {/* lush root network */}
        <g stroke="#cfe2c1" strokeWidth="3" strokeLinecap="round" fill="none">
          <path d="M250 370 C 232 400 224 452 214 512" />
          <path d="M250 370 C 246 404 244 460 240 520" />
          <path d="M250 370 C 256 402 266 456 274 514" />
          <path d="M250 370 C 268 398 282 446 292 500" />
          <path d="M250 370 C 240 396 226 430 210 470" />
        </g>
        <g stroke="#dcebd2" strokeWidth="1.8" strokeLinecap="round" fill="none" opacity="0.9">
          <path d="M224 452 C 216 460 210 466 202 470" />
          <path d="M240 490 C 234 498 232 506 232 516" />
          <path d="M274 470 C 282 476 288 484 292 492" />
          <path d="M266 430 C 276 434 284 438 290 446" />
          <path d="M226 430 C 218 432 212 436 206 442" />
        </g>
        {/* a couple of water bubbles */}
        <circle cx="290" cy="430" r="3.5" fill="#eafbf7" opacity="0.8" />
        <circle cx="212" cy="486" r="2.5" fill="#eafbf7" opacity="0.8" />
      </Jar>
      {/* tall stem */}
      <path
        d="M250 368 C 250 320 244 220 250 132"
        fill="none"
        stroke="#3d8f59"
        strokeWidth="8"
        strokeLinecap="round"
      />
      {/* full canopy */}
      <Leaf x={250} y={306} rot={-46} scale={0.72} fill="#57a86c" />
      <Leaf x={250} y={276} rot={44} scale={0.78} fill="#4f9e64" />
      <Leaf x={249} y={232} rot={-36} scale={0.94} fill="#4a9860" />
      <Leaf x={251} y={198} rot={34} scale={0.98} fill="#57a86c" />
      <Leaf x={250} y={156} rot={-16} scale={0.82} fill="#4f9e64" />
      {/* fresh new growth, curled, at the crown */}
      <g transform="translate(250 140) rotate(16) scale(0.6)">
        <path d="M0 0 C -22 -22 -14 -60 6 -74 C 18 -58 12 -30 0 0 Z" fill="#b7e36a" />
        <path d="M2 -8 C 4 -34 2 -52 4 -66" fill="none" stroke="#8bc24d" strokeWidth="2.6" strokeLinecap="round" opacity="0.75" />
      </g>
    </svg>
  )
}
