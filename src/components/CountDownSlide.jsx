import { motion } from 'framer-motion'
import { useCountDown } from '../hooks/useCountDown'

export default function CountDownSlide({ targetDate = '2026-08-20' }) {
    const { days, hours, minutes, seconds } = useCountDown(targetDate)

    const boxes = [
        { label: 'Days', value: days ?? '--' },
        { label: 'Hours', value: hours ?? '--' },
        { label: 'Minutes', value: minutes ?? '--' },
        { label: 'Seconds', value: seconds ?? '--' },
    ]

    return (
        <section style={{ padding: '44px 20px', textAlign: 'center', background: 'linear-gradient(180deg, #fffaf2 0%, #f2e2c7 100%)' }}>
            <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: 0.7 }} style={{ maxWidth: 420, margin: '0 auto', padding: '24px 18px 28px', borderRadius: 28, background: 'rgba(255,255,255,0.78)', boxShadow: '0 16px 40px rgba(90, 57, 15, 0.12)', border: '1px solid rgba(201,148,42,0.22)' }}>
                <div style={{ fontSize: 12, letterSpacing: '0.34em', textTransform: 'uppercase', color: '#8b5e18' }}>Counting down</div>
                <h2 style={{ margin: '10px 0 12px', color: '#7a4e00', fontSize: '1.7rem' }}>The celebration is almost here</h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, minmax(0, 1fr))', gap: 10, marginTop: 18 }}>
                    {boxes.map((item, index) => (
                        <motion.div key={item.label} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ delay: index * 0.08, duration: 0.5 }} style={{ padding: '12px 8px', borderRadius: 16, background: 'linear-gradient(135deg, #fff7e7, #ebd1a6)', boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.65)' }}>
                            <div style={{ fontSize: 'clamp(1.4rem, 5vw, 1.8rem)', fontWeight: 700, color: '#8a4b09' }}>{item.value}</div>
                            <div style={{ fontSize: 11, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#8a6d3f', marginTop: 4 }}>{item.label}</div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    )
}