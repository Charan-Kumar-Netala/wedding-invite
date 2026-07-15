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

function LaurelSprig({ color }) {
    return (
        <g stroke={color} strokeWidth="1" fill="none" strokeLinecap="round" opacity="0.85">
            <path d="M0,0 C6,-2 12,-4 17,-9" />
            <path d="M3,-1 C4,-4 3,-6 1,-8" />
            <path d="M7,-3 C8,-6 7,-8 5,-10" />
            <path d="M11,-5 C12,-8 11,-10 9,-12" />
        </g>
    )
}

export default function WaxSeal({ size = 92, crack = false }) {
    const outer = scallopPath(60, 60, 46, 4.5, 15)
    const stroke = '#7a5c25'

    return (
        <svg width={size} height={size} viewBox="0 0 120 120">
            <defs>
                <radialGradient id="waxGrad" cx="35%" cy="30%" r="75%">
                    <stop offset="0%" stopColor="#e8cf94" />
                    <stop offset="55%" stopColor="#c9a24b" />
                    <stop offset="100%" stopColor="#8f6d2e" />
                </radialGradient>
            </defs>

            <path d={outer} fill="url(#waxGrad)" stroke={stroke} strokeWidth="0.75" />
            <circle cx="60" cy="60" r="38" fill="none" stroke={stroke} strokeWidth="0.6" opacity="0.55" />

            <g transform="translate(43,38)">
                <LaurelSprig color={stroke} />
            </g>
            <g transform="translate(77,38) scale(-1,1)">
                <LaurelSprig color={stroke} />
            </g>
            <g transform="translate(43,82) scale(1,-1)">
                <LaurelSprig color={stroke} />
            </g>
            <g transform="translate(77,82) scale(-1,1) scale(1,-1)">
                <LaurelSprig color={stroke} />
            </g>

            <text x="50" y="75" textAnchor="middle" fontFamily="'Pinyon Script', cursive" fontSize="45" fill="#5c4419">CS</text>
            <text x="50" y="73" textAnchor="middle" fontFamily="'Pinyon Script', cursive" fontSize="45" fill="#f3dfa0" opacity="0.5">CS</text>

            {crack && (
                <motion.path
                    d="M27,50 L45,59 L39,74 L58,65 L65,87 L75,57 L93,66"
                    fill="none"
                    stroke="#4a3512"
                    strokeWidth="1.1"
                    strokeLinecap="round"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: [0, 1, 1] }}
                    transition={{ duration: 0.28, ease: 'easeOut' }}
                />
            )}
        </svg>
    )
}
