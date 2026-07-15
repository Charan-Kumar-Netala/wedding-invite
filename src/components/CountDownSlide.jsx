import { motion } from 'framer-motion'
import { useState } from 'react'
import { useCountDown } from '../hooks/useCountDown'
import BotanicalOrnament from './BotanicalOrnament'
import ConfettiBurst from './ConfettiBurst'

export default function CountDownSlide({ targetDate = '2026-08-20' }) {
    const { days, hours, minutes, seconds } = useCountDown(targetDate)
    const [celebrate, setCelebrate] = useState(false)

    const boxes = [
        { label: 'Days', value: days ?? '--' },
        { label: 'Hours', value: hours ?? '--' },
        { label: 'Minutes', value: minutes ?? '--' },
        { label: 'Seconds', value: seconds ?? '--' },
    ]

    return (
        <section style={{ padding: 'clamp(48px, 8vw, 90px) clamp(20px, 5vw, 40px)', textAlign: 'center', background: 'var(--ink)' }}>
            <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} onViewportEnter={() => setCelebrate(true)} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }} style={{ maxWidth: 460, margin: '0 auto' }}>
                <div className="eyebrow" style={{ fontSize: 'clamp(10px, 1.4vw, 12px)', color: 'var(--gold)' }}>Counting Down To</div>
                <h2 style={{ margin: '14px 0 0', color: 'var(--gold-light)', fontFamily: 'Great Vibes, serif', fontWeight: 400, fontSize: 'clamp(2.1rem, 5vw, 2.6rem)' }}>Our Wedding Day</h2>

                <div style={{ margin: '10px 0 6px' }}>
                    <ConfettiBurst active={celebrate} />
                </div>

                <div style={{ display: 'flex', justifyContent: 'center', margin: '4px 0 26px' }}>
                    <BotanicalOrnament color="#a3854c" width={120} />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, minmax(0, 1fr))', gap: 'clamp(8px, 2vw, 16px)' }}>
                    {boxes.map((item, index) => (
                        <motion.div key={item.label} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ delay: index * 0.08, duration: 0.6 }} style={{ padding: 'clamp(14px, 3vw, 22px) 6px', border: '1px solid rgba(201,162,75,0.35)', background: 'rgba(201,162,75,0.04)' }}>
                            <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(1.6rem, 4vw, 2.3rem)', fontWeight: 600, color: 'var(--gold-light)' }}>{item.value}</div>
                            <div className="eyebrow" style={{ fontSize: 9.5, color: 'var(--text-muted-dark)', marginTop: 6 }}>{item.label}</div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    )
}
