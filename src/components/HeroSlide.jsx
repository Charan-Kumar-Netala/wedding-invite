import { motion } from 'framer-motion'

export default function HeroSlide() {
    return (
        <section style={{ position: 'relative', minHeight: '100svh', overflow: 'hidden', background: '#140d07' }}>
            <img
                src="/couple.jpg"
                style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 12%' }}
                alt="Couple"
            />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(20,13,7,0.15) 0%, rgba(20,13,7,0.55) 70%, rgba(20,13,7,0.9) 100%)' }} />
            <div style={{ position: 'relative', zIndex: 2, display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'space-between', padding: '36px 20px 32px' }}>
                <motion.div initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} style={{ textAlign: 'center', color: '#f8e9cf', letterSpacing: '0.38em', fontSize: 12, textTransform: 'uppercase' }}>
                    A celebration of love
                </motion.div>

                <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15, duration: 0.9 }} style={{ background: 'rgba(255,244,230,0.16)', backdropFilter: 'blur(12px)', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '24px', padding: '22px 20px 26px', textAlign: 'center', color: '#fdf7ee', boxShadow: '0 20px 50px rgba(0,0,0,0.24)' }}>
                    <div style={{ fontFamily: 'Cormorant Garamond, serif', letterSpacing: '0.24em', fontSize: 13, textTransform: 'uppercase', color: '#f3d59a', marginBottom: 8 }}>With heartfelt joy</div>
                    <h1 style={{ margin: 0, fontFamily: 'Great Vibes, serif', fontSize: 'clamp(2.4rem, 7vw, 3.4rem)', color: '#f8d688', lineHeight: 1.05 }}>Charan & Sindhuja</h1>
                    <div style={{ marginTop: 10, fontSize: 15, color: '#f5e5c0', letterSpacing: '0.16em', textTransform: 'uppercase' }}>invite you to share our wedding celebration</div>
                    <div style={{ marginTop: 16, display: 'flex', justifyContent: 'center', gap: 10, flexWrap: 'wrap', fontSize: 13, color: '#f8e8d1' }}>
                        <span style={{ padding: '7px 12px', borderRadius: 999, background: 'rgba(0,0,0,0.18)' }}>20 August 2026</span>
                        <span style={{ padding: '7px 12px', borderRadius: 999, background: 'rgba(0,0,0,0.18)' }}>Bengaluru</span>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}