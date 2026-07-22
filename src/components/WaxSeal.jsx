import { motion } from 'framer-motion'

// Generates a smooth scalloped/wavy circle path — gives the wax seal its
// irregular hand-pressed edge instead of a perfect circle.
function scallopPath(cx, cy, baseR, amp, bumps) {
    const N = bumps * 2
    const pts = []
    for (let i = 0; i <= N; i++) {
        const a = (i / N) * Math.PI * 2
        const r = baseR + amp * Math.sin(a * bumps)
        pts.push([cx + r * Math.cos(a), cy + r * Math.sin(a)])
    }
    let d = `M ${pts[0][0].toFixed(2)},${pts[0][1].toFixed(2)} `
    for (let i = 1; i < pts.length; i++) {
        const [x0, y0] = pts[i - 1]
        const [x1, y1] = pts[i]
        const mx = ((x0 + x1) / 2).toFixed(2)
        const my = ((y0 + y1) / 2).toFixed(2)
        d += `Q ${x0.toFixed(2)},${y0.toFixed(2)} ${mx},${my} `
    }
    return d + 'Z'
}

// Small radiating tick-mark flourish (fan of short rays), echoing the
// minimal accent above/below the monogram on a classic coin-style seal.
function RayFlourish({ color }) {
    const rays = [-28, -18, -9, 0, 9, 18, 28]
    return (
        <g stroke={color} strokeWidth="1" strokeLinecap="round" opacity="0.8">
            {rays.map((deg) => {
                const rad = (deg * Math.PI) / 180
                const x1 = Math.sin(rad) * 3
                const y1 = -Math.cos(rad) * 3
                const len = deg === 0 ? 8 : 6.5
                const x2 = Math.sin(rad) * len
                const y2 = -Math.cos(rad) * len
                return <line key={deg} x1={x1} y1={y1} x2={x2} y2={y2} />
            })}
        </g>
    )
}

export default function WaxSeal({ size = 96, crack = false }) {
    const outer = scallopPath(60, 60, 45, 3, 40)
    const stroke = '#7a5c25'
    const uid = 'ws'

    return (
        <svg width={size} height={size} viewBox="0 0 120 120" style={{ overflow: 'visible' }}>
            <defs>
                <radialGradient id={`${uid}-grad`} cx="32%" cy="26%" r="82%">
                    <stop offset="0%" stopColor="#fcf1c8" />
                    <stop offset="28%" stopColor="#eed69a" />
                    <stop offset="58%" stopColor="#c9a24b" />
                    <stop offset="85%" stopColor="#9c7a32" />
                    <stop offset="100%" stopColor="#7a5c25" />
                </radialGradient>

                <radialGradient id={`${uid}-inner`} cx="35%" cy="30%" r="75%">
                    <stop offset="0%" stopColor="#f6e3a8" />
                    <stop offset="65%" stopColor="#c9a24b" />
                    <stop offset="100%" stopColor="#8a6a28" />
                </radialGradient>

                {/* raised, glossy bevel along the scalloped rim */}
                <filter id={`${uid}-bevel`} x="-40%" y="-40%" width="180%" height="180%">
                    <feGaussianBlur in="SourceAlpha" stdDeviation="2" result="blur" />
                    <feSpecularLighting in="blur" surfaceScale="3.5" specularConstant="0.85" specularExponent="16" lightingColor="#fff8e2" result="spec">
                        <fePointLight x="-55" y="-75" z="130" />
                    </feSpecularLighting>
                    <feComposite in="spec" in2="SourceAlpha" operator="in" result="specClip" />
                    <feMerge>
                        <feMergeNode in="SourceGraphic" />
                        <feMergeNode in="specClip" />
                    </feMerge>
                </filter>

                {/* soft shadow so the seal reads as pressed onto the paper */}
                <filter id={`${uid}-shadow`} x="-60%" y="-60%" width="220%" height="220%">
                    <feDropShadow dx="0" dy="4" stdDeviation="4.5" floodColor="#3a2a05" floodOpacity="0.4" />
                </filter>
            </defs>

            <g filter={`url(#${uid}-shadow)`}>
                <path d={outer} fill={`url(#${uid}-grad)`} filter={`url(#${uid}-bevel)`} />

                {/* inner recessed field, gives a coin-like two-tier depth */}
                <circle cx="60" cy="60" r="36" fill={`url(#${uid}-inner)`} stroke="#6b501f" strokeWidth="0.5" opacity="0.95" />
                <circle cx="60" cy="60" r="36" fill="none" stroke="#fce9b0" strokeWidth="0.6" opacity="0.4" />
                <circle cx="60" cy="60" r="30.5" fill="none" stroke="#6b501f" strokeWidth="0.5" opacity="0.5" />
            </g>

            <g transform="translate(60,32)"><RayFlourish color="#836124" /></g>
            <g transform="translate(60,88) scale(1,-1)"><RayFlourish color="#5c4419" /></g>
            <g transform="translate(36,45) rotate(-55)"><RayFlourish color="#836124" /></g>
            <g transform="translate(84,45) rotate(55)"><RayFlourish color="#836124" /></g>
            <g transform="translate(36,75) rotate(-145)"><RayFlourish color="#5c4419" /></g>
            <g transform="translate(84,75) rotate(145)"><RayFlourish color="#5c4419" /></g>

            {/* engraved monogram: dark recessed base + light offset for legibility */}
            <text x="60" y="69" textAnchor="middle" fontFamily="'Cinzel', serif" fontWeight="600" fontSize="30" letterSpacing="1.5" fill="#4a3512">CS</text>
            <text x="62" y="68.2" textAnchor="middle" fontFamily="'Cinzel', serif" fontWeight="600" fontSize="30" letterSpacing="0.5" fill="#f6e3a8" opacity="0.65">CS</text>
            <line x1="46" y1="76" x2="74" y2="76" stroke="#836124" strokeWidth="0.6" opacity="0.8" />

            {crack && (
                <motion.path
                    d="M27,50 L45,59 L39,74 L58,65 L65,87 L75,57 L93,66"
                    fill="none"
                    stroke="#3a2708"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: [0, 1, 1] }}
                    transition={{ duration: 0.28, ease: 'easeOut' }}
                />
            )}
        </svg>
    )
}
