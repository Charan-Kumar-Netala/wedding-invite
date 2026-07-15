import { motion } from 'framer-motion'

export default function FinalSlide() {
	return (
		<section style={{ padding: '44px 20px 56px', textAlign: 'center', background: 'linear-gradient(180deg, #fcf5ea 0%, #f0dfc0 100%)' }}>
			<motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: 0.75 }} style={{ maxWidth: 430, margin: '0 auto', padding: '28px 22px', borderRadius: 28, background: 'rgba(255,255,255,0.82)', boxShadow: '0 20px 50px rgba(90, 57, 15, 0.14)', border: '1px solid rgba(201,148,42,0.2)' }}>
				<div style={{ fontSize: 12, letterSpacing: '0.34em', textTransform: 'uppercase', color: '#8b5e18' }}>With love</div>
				<h2 style={{ margin: '10px 0 8px', color: '#7a4e00', fontSize: '1.9rem', fontFamily: 'Great Vibes, serif' }}>Charan & Sindhuja</h2>
				<p style={{ marginTop: 6, color: '#7d5b34', lineHeight: 1.7 }}>We are delighted to celebrate this joyous day with you and your loved ones.</p>
				<div style={{ marginTop: 18, display: 'flex', justifyContent: 'center', gap: 10, flexWrap: 'wrap' }}>
					<a href="/" style={{ textDecoration: 'none', color: '#fff', background: 'linear-gradient(135deg, #a56d12 0%, #c9942a 100%)', padding: '10px 16px', borderRadius: 999, fontWeight: 600 }}>Share this invite</a>
					<a href="mailto:celebrate@charanandsindhuja.com" style={{ textDecoration: 'none', color: '#8b5e18', border: '1px solid rgba(139,94,24,0.2)', padding: '10px 16px', borderRadius: 999, fontWeight: 600 }}>RSVP</a>
				</div>
			</motion.div>
		</section>
	)
}
