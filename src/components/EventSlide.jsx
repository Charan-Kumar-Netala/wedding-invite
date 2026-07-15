import { motion } from 'framer-motion'

export default function EventSlide({ label, heading, headingColor, description, date, time, venue, dressCode, mapsUrl }) {
	return (
		<section style={{ padding: '36px 18px', minHeight: '100svh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'linear-gradient(180deg, #faf4e8 0%, #fff 100%)' }}>
			<motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: 0.7 }} style={{ width: '100%', maxWidth: 420, borderRadius: 30, padding: '24px 20px', background: 'rgba(255,255,255,0.86)', backdropFilter: 'blur(18px)', boxShadow: '0 20px 60px rgba(90, 57, 15, 0.12)', border: '1px solid rgba(201,148,42,0.18)' }}>
				<div style={{ color: headingColor || '#8f5d17', fontSize: 12, letterSpacing: '0.34em', textTransform: 'uppercase', fontWeight: 700 }}>{label}</div>
				<h2 style={{ margin: '10px 0 8px', color: headingColor || '#5a3200', fontSize: '1.9rem' }}>{heading}</h2>
				<p style={{ margin: '0 0 16px', color: '#7d5b34', lineHeight: 1.7 }}>{description}</p>
				<div style={{ display: 'grid', gap: 10, textAlign: 'left' }}>
					<div style={{ padding: '12px 14px', borderRadius: 16, background: 'linear-gradient(135deg, #fff8ea, #f1e2c7)' }}>
						<div style={{ fontSize: 11, letterSpacing: '0.24em', textTransform: 'uppercase', color: '#8b5e18' }}>Date</div>
						<div style={{ marginTop: 4, fontSize: 15, color: '#4e2f0a' }}>{date}</div>
					</div>
					<div style={{ padding: '12px 14px', borderRadius: 16, background: 'linear-gradient(135deg, #fff8ea, #f1e2c7)' }}>
						<div style={{ fontSize: 11, letterSpacing: '0.24em', textTransform: 'uppercase', color: '#8b5e18' }}>Time</div>
						<div style={{ marginTop: 4, fontSize: 15, color: '#4e2f0a' }}>{time}</div>
					</div>
					<div style={{ padding: '12px 14px', borderRadius: 16, background: 'linear-gradient(135deg, #fff8ea, #f1e2c7)' }}>
						<div style={{ fontSize: 11, letterSpacing: '0.24em', textTransform: 'uppercase', color: '#8b5e18' }}>Venue</div>
						<div style={{ marginTop: 4, fontSize: 15, color: '#4e2f0a' }}>{venue}</div>
					</div>
					<div style={{ padding: '12px 14px', borderRadius: 16, background: 'linear-gradient(135deg, #fff8ea, #f1e2c7)' }}>
						<div style={{ fontSize: 11, letterSpacing: '0.24em', textTransform: 'uppercase', color: '#8b5e18' }}>Dress Code</div>
						<div style={{ marginTop: 4, fontSize: 15, color: '#4e2f0a' }}>{dressCode}</div>
					</div>
				</div>
				{mapsUrl && <a href={mapsUrl} target="_blank" rel="noreferrer" style={{ display: 'inline-block', marginTop: 14, color: '#a26d0e', fontWeight: 600, textDecoration: 'none' }}>Open map</a>}
			</motion.div>
		</section>
	)
}
