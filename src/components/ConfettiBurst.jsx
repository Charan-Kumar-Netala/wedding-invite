import { motion } from 'framer-motion'

// Small line-art party popper, matching the botanical/engraved gold linework style
function PopperIcon({ color = '#c9a24b', flip = false, style = {} }) {
    return (
        <svg width="34" height="34" viewBox="0 0 40 40" fill="none" style={{ transform: flip ? 'scaleX(-1)' : 'none', ...style }}>
            <path d="M8 32 L20 20" stroke={color} strokeWidth="1.4" strokeLinecap="round" />
            <path d="M8 32 L14 10 C14 10 24 14 20 20 C20 20 26 16 26 24 Z" stroke={color} strokeWidth="1.2" fill="none" strokeLinejoin="round" />
            <path d="M14 10 L11 4" stroke={color} strokeWidth="1" strokeLinecap="round" />
            <path d="M22 8 L25 3" stroke={color} strokeWidth="1" strokeLinecap="round" />
            <path d="M28 14 L34 12" stroke={color} strokeWidth="1" strokeLinecap="round" />
            <circle cx="11" cy="4" r="1.2" fill={color} />
            <circle cx="25" cy="3" r="1.2" fill={color} />
            <circle cx="34" cy="12" r="1.2" fill={color} />
        </svg>
    )
}

// Deterministic pseudo-random so the burst looks natural without hydration jitter
function seeded(i, salt = 1) {
    const x = Math.sin(i * 999 * salt) * 10000
    return x - Math.floor(x)
}

const PIECE_COLORS = ['#c9a24b', '#e8cf94', '#f3ead9', '#a3854c']

function ConfettiPiece({ index }) {
    const angle = seeded(index, 1) * Math.PI * 2
    const distance = 70 + seeded(index, 2) * 90
    const dx = Math.cos(angle) * distance
    const dy = Math.sin(angle) * distance * 0.7 - 20
    const rotate = seeded(index, 3) * 360
    const size = 4 + seeded(index, 4) * 4
    const color = PIECE_COLORS[index % PIECE_COLORS.length]
    const delay = seeded(index, 5) * 0.15
    const isLine = index % 3 === 0

    return (
        <motion.span
            initial={{ opacity: 0, x: 0, y: 0, rotate: 0, scale: 0.6 }}
            animate={{
                opacity: [0, 1, 1, 0],
                x: dx,
                y: [dy, dy + 46],
                rotate: rotate,
                scale: 1,
            }}
            transition={{ duration: 1.5, delay, ease: [0.16, 1, 0.3, 1] }}
            style={{
                position: 'absolute',
                left: '50%',
                top: '50%',
                width: isLine ? size * 2.4 : size,
                height: isLine ? 1.6 : size,
                background: color,
                borderRadius: isLine ? 1 : 1,
                pointerEvents: 'none',
            }}
        />
    )
}

export default function ConfettiBurst({ active }) {
    const pieces = Array.from({ length: 22 }, (_, i) => i)

    return (
        <div style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ position: 'relative', width: 4, height: 4 }}>
                {active && pieces.map((i) => <ConfettiPiece key={i} index={i} />)}
            </div>
        </div>
    )
}
