import { motion } from 'framer-motion'
import { useState, useEffect, useRef } from 'react'
import WaxSeal from './WaxSeal'

export default function EnvelopeIntro({ onComplete }) {
    // closed -> breaking (seal cracks) -> opening (flap folds back) -> done (fade to reveal the site)
    const [stage, setStage] = useState('closed')
    const timers = useRef([])

    useEffect(() => {
        if (sessionStorage.getItem('invited') === 'true') onComplete()
        return () => timers.current.forEach(clearTimeout)
    }, [])

    const handleTap = () => {
        if (stage !== 'closed') return
        setStage('breaking')
        timers.current.push(setTimeout(() => setStage('opening'), 420))
        timers.current.push(setTimeout(() => setStage('done'), 420 + 700 + 300))
        timers.current.push(setTimeout(() => {
            sessionStorage.setItem('invited', 'true')
            onComplete()
        }, 420 + 700 + 300 + 550))
    }

    const opened = stage === 'opening' || stage === 'done'
    const sealGone = stage !== 'closed'

    return (
        <motion.div
            onClick={handleTap}
            animate={{ opacity: stage === 'done' ? 0 : 1 }}
            transition={{ duration: 0.55 }}
            style={{ position: 'fixed', inset: 0, background: '#efe9db', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', cursor: stage === 'closed' ? 'pointer' : 'default', zIndex: 9999, padding: 24 }}
        >
            <motion.div
                animate={stage === 'closed' ? { y: [0, -10, 0], rotate: [0, 0.2, -0.2, 0] } : { y: 0, rotate: 0 }}
                transition={stage === 'closed' ? { duration: 2.4, repeat: Infinity, ease: 'easeInOut' } : { duration: 0.4 }}
                style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
            >
                <div style={{ position: 'relative', width: 'min(380px, 84vw)', aspectRatio: '3 / 2', perspective: 1400, boxShadow: '0 30px 70px rgba(0,0,0,0.18)' }}>
                    {/* back panel */}
                    {/* fill the image here */}
                    <img
                        src="/floral.jpg"
                        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 12%', filter: 'saturate(0.92) contrast(1.02)' }}
                        alt="Floral"
                    />

                    {/* pocket: static lower front of the envelope, with a soft floral emboss */}
                    {opened && <div style={{ position: 'absolute', inset: 0, zIndex: 2, clipPath: 'polygon(0% 0%, 100% 0%, 50% 67.5%)', background: '#f7f4ee', overflow: 'hidden' }}>
                    </div>}
                    <svg style={{ position: 'absolute', inset: 0, zIndex: 2, pointerEvents: 'none' }} viewBox="0 0 300 200" preserveAspectRatio="none">
                        {!opened && <path d="M-1, 1 L151,137 L300, 1" fill="none" stroke="rgba(205, 192, 162, 0.4)" strokeWidth="3" filter="url(#dropShadow)" />}
                    </svg>

                    {/* flap: folds back and away on open */}
                    <motion.div
                        animate={{ rotateX: opened ? -165 : 0 }}
                        transition={{ duration: 0.7, ease: [0.45, 0, 0.2, 1] }}
                        style={{
                            position: 'absolute', top: 0, left: 0, width: '100%', height: '68%',
                            clipPath: 'polygon(0% 0%, 100% 0%, 50% 100%)',
                            background: 'linear-gradient(160deg, #987724, #dfd7c3)',
                            transformOrigin: 'top center',
                            transformStyle: 'preserve-3d',
                            backfaceVisibility: 'hidden',
                            zIndex: 3,
                        }}
                    >
                        <img
                            src="/floral.jpg"
                            style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 10%', filter: 'saturate(0.92) contrast(1.02)', transform: 'rotate(180deg)' }}
                            alt="Floral"
                        />

                    </motion.div>

                    {/* wax seal: cracks and lifts away on tap */}
                    <div style={{ position: 'absolute', left: '50%', top: '66%', transform: 'translate(-50%, -50%)', zIndex: 4 }}>
                        <motion.div
                            animate={sealGone ? { opacity: 0, scale: 0.7, y: -26, rotate: -22 } : { opacity: 1, scale: 1, y: 0, rotate: 0 }}
                            transition={{ duration: 0.45, ease: [0.5, 0, 0.75, 0] }}
                        >
                            <WaxSeal size={96} crack={stage === 'breaking'} />
                        </motion.div>
                    </div>
                </div>

                <motion.div
                    animate={{ opacity: stage === 'closed' ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="eyebrow"
                    style={{ marginTop: 22, padding: '11px 22px', border: '1px solid rgba(163,133,76,0.4)', color: 'var(--gold-dim)', fontSize: 11 }}
                >
                    Tap To Open
                </motion.div>
            </motion.div>
        </motion.div>
    )
}
