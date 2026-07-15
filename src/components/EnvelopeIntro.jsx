import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import envelopeImg from '/envelope.jpg'

export default function EnvelopeIntro({ onComplete }) {
    const [opened, setOpened] = useState(false)

    useEffect(() => {
        if (sessionStorage.getItem('invited') === 'true') onComplete()
    }, [])

    const handleTap = () => {
        setOpened(true)
        setTimeout(() => {
            sessionStorage.setItem('invited', 'true')
            onComplete()
        }, 900)
    }

    return (
        <div onClick={handleTap} style={{ position: 'fixed', inset: 0, background: 'radial-gradient(circle at 50% 30%, #23241a 0%, #17170f 75%)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', zIndex: 9999, padding: '24px' }}>
            <motion.div animate={opened ? { y: 90, opacity: 0, scale: 0.95 } : { y: [0, -10, 0], rotate: [0, 0.2, -0.2, 0] }} transition={opened ? { duration: 0.75, ease: 'easeInOut' } : { duration: 2.4, repeat: Infinity, ease: 'easeInOut' }} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <img
                    src={envelopeImg || '/envelope.png'}
                    alt="Invitation envelope"
                    style={{ width: 'min(360px, 86vw)', boxShadow: '0 28px 80px rgba(0,0,0,0.55)', border: '1px solid rgba(201,162,75,0.3)' }}
                />
                <motion.div initial={{ opacity: 0.7 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }} className="eyebrow" style={{ marginTop: 22, padding: '11px 22px', border: '1px solid rgba(201,162,75,0.4)', color: 'var(--gold-light)', fontSize: 11 }}>
                    Tap To Open
                </motion.div>
            </motion.div>
        </div>
    )
}
