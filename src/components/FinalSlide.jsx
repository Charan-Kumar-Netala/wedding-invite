import { motion } from 'framer-motion'
import BotanicalOrnament from './BotanicalOrnament'

export default function FinalSlide() {
	return (
		<section style={{ padding: '64px 24px 72px', textAlign: 'center', background: 'var(--ink)' }}>
			<motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }} style={{ maxWidth: 420, margin: '0 auto' }}>
				<div className="eyebrow" style={{ fontSize: 11, color: 'var(--gold)' }}>With Love</div>
				<h2 style={{ margin: '14px 0 0', color: 'var(--gold-light)', fontSize: '2.5rem', fontFamily: 'Great Vibes, serif', fontWeight: 400 }}>Charan &amp; Sindhuja</h2>

				<div style={{ display: 'flex', justifyContent: 'center', margin: '18px 0 22px' }}>
					<BotanicalOrnament color="#a3854c" width={130} />
				</div>

				<p style={{ marginTop: 0, color: 'var(--text-muted-dark)', lineHeight: 1.8, fontFamily: 'Cormorant Garamond, serif', fontSize: 16 }}>
					We are delighted to celebrate this joyous day with you and your loved ones.
				</p>

				<div style={{ marginTop: 30, display: 'flex', justifyContent: 'center', gap: 14, flexWrap: 'wrap' }}>
					<a href="/" className="eyebrow" style={{ textDecoration: 'none', color: 'var(--ink)', background: 'var(--gold)', padding: '12px 22px', fontSize: 11 }}>Share This Invite</a>
					<a href="mailto:celebrate@charanandsindhuja.com" className="eyebrow" style={{ textDecoration: 'none', color: 'var(--gold-light)', border: '1px solid rgba(201,162,75,0.45)', padding: '12px 22px', fontSize: 11 }}>RSVP</a>
				</div>
			</motion.div>
		</section>
	)
}
