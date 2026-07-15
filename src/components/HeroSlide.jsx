import { motion } from 'framer-motion'
import BotanicalOrnament from './BotanicalOrnament'

export default function HeroSlide() {
    return (
        <section style={{ position: 'relative', minHeight: '100svh', overflow: 'hidden', background: 'var(--ink)' }}>
            <img
                src="/couple.jpg"
                style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 12%', filter: 'saturate(0.92) contrast(1.02)' }}
                alt="Couple"
            />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(23,23,15,0.35) 0%, rgba(23,23,15,0.25) 35%, rgba(23,23,15,0.78) 78%, rgba(23,23,15,0.97) 100%)' }} />
            <div style={{ position: 'absolute', inset: 0, boxShadow: 'inset 0 0 140px rgba(0,0,0,0.55)' }} />

            <div style={{ position: 'relative', zIndex: 2, display: 'flex', flexDirection: 'column', height: '100%', minHeight: '100svh', justifyContent: 'space-between', padding: '40px 24px 44px' }}>
                <motion.div initial={{ opacity: 0, y: -14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }} className="eyebrow" style={{ textAlign: 'center', color: 'var(--gold-light)', fontSize: 11 }}>
                    Together With Their Families
                </motion.div>

                <div style={{ textAlign: 'center', color: 'var(--text-on-dark)' }}>
                    <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.9, ease: [0.22, 1, 0.36, 1] }} className="eyebrow" style={{ fontSize: 12, color: 'var(--gold)', marginBottom: 14 }}>
                        Request The Honour Of Your Presence
                    </motion.div>

                    <motion.h1 initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35, duration: 1, ease: [0.22, 1, 0.36, 1] }} style={{ margin: 0, fontFamily: 'Great Vibes, serif', fontSize: 'clamp(2.8rem, 9vw, 4rem)', color: 'var(--gold-light)', lineHeight: 1.05, textShadow: '0 2px 20px rgba(0,0,0,0.4)' }}>
                        Charan &amp; Sindhuja
                    </motion.h1>

                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.55, duration: 0.8 }} style={{ display: 'flex', justifyContent: 'center', margin: '18px 0' }}>
                        <BotanicalOrnament color="#c9a24b" width={150} />
                    </motion.div>

                    <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7, duration: 0.8 }} style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 15, letterSpacing: '0.08em', color: 'var(--text-muted-dark)' }}>
                        are getting married
                    </motion.div>

                    <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.85, duration: 0.8 }} className="eyebrow" style={{ marginTop: 22, display: 'flex', justifyContent: 'center', gap: 18, flexWrap: 'wrap', fontSize: 11, color: 'var(--gold-light)' }}>
                        <span>20 AUGUST 2026</span>
                        <span style={{ color: 'var(--gold-dim)' }}>&bull;</span>
                        <span>BENGALURU</span>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
