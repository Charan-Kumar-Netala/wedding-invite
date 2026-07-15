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
        <div onClick={handleTap} style={{ position: 'fixed', inset: 0, background: 'linear-gradient(135deg, #fef8ec 0%, #ead7b4 100%)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', zIndex: 9999, padding: '24px' }}>
            <motion.div animate={opened ? { y: 90, opacity: 0, scale: 0.95 } : { y: [0, -10, 0], rotate: [0, 0.2, -0.2, 0] }} transition={opened ? { duration: 0.75, ease: 'easeInOut' } : { duration: 2.4, repeat: Infinity, ease: 'easeInOut' }} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <img
                    src={envelopeImg || '/envelope.png'}
                    alt="Invitation envelope"
                    style={{ width: 'min(360px, 86vw)', borderRadius: '24px', boxShadow: '0 28px 70px rgba(88, 54, 20, 0.22)', border: '1px solid rgba(117, 68, 23, 0.14)' }}
                />
                <motion.div initial={{ opacity: 0.7 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }} style={{ marginTop: 18, padding: '10px 18px', borderRadius: 999, background: 'rgba(255,255,255,0.55)', letterSpacing: '0.32em', fontFamily: 'EB Garamond, serif', color: '#775223', fontSize: 13, boxShadow: '0 8px 22px rgba(88, 54, 20, 0.12)' }}>
                    TAP TO OPEN
                </motion.div>
            </motion.div>
        </div>
    )
}