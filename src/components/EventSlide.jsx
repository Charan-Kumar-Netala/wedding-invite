import { motion } from 'framer-motion'
import BotanicalOrnament from './BotanicalOrnament'

export default function EventSlide({ label, heading, description, date, time, venue, dressCode, mapsUrl, dark = false }) {
	const bg = dark ? 'var(--ink)' : 'var(--ivory)'
	const textHeading = dark ? 'var(--gold-light)' : 'var(--text-on-light)'
	const textBody = dark ? 'var(--text-muted-dark)' : 'var(--text-muted-light)'
	const lineColor = dark ? 'rgba(201,162,75,0.35)' : 'rgba(163,133,76,0.35)'
	const labelColor = dark ? 'var(--gold)' : 'var(--gold-dim)'
	const ornamentColor = '#a3854c'

	return (
		<section style={{ padding: 'clamp(48px, 8vw, 90px) clamp(20px, 5vw, 40px)', minHeight: '100svh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: bg }}>
			<motion.div initial={{ opacity: 0, y: 26 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }} style={{ width: '100%', maxWidth: 'clamp(340px, 92%, 520px)', textAlign: 'center' }}>
				<div className="eyebrow" style={{ color: labelColor, fontSize: 'clamp(10px, 1.4vw, 12px)' }}>{label}</div>
				<h2 style={{ margin: '14px 0 6px', color: textHeading, fontFamily: 'Great Vibes, serif', fontWeight: 400, fontSize: 'clamp(2rem, 5vw, 2.6rem)' }}>{heading}</h2>

				<div style={{ display: 'flex', justifyContent: 'center', margin: '10px 0 16px' }}>
					<BotanicalOrnament color={ornamentColor} width={110} />
				</div>

				<p style={{ margin: '0 0 22px', color: textBody, lineHeight: 1.8, fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(15px, 1.8vw, 17px)' }}>{description}</p>

				<div className="detail-table" style={{ '--line-color': lineColor, textAlign: 'left' }}>
					{[
						{ label: 'Date', value: date },
						{ label: 'Time', value: time },
						{ label: 'Venue', value: venue },
						{ label: 'Dress Code', value: dressCode },
					].map((row) => (
						<div key={row.label} className="detail-row">
							<span className="eyebrow" style={{ fontSize: 10, color: labelColor }}>{row.label}</span>
							<span style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 15, color: textHeading, textAlign: 'right' }}>{row.value}</span>
						</div>
					))}
				</div>

				{mapsUrl && (
					<motion.a href={mapsUrl} target="_blank" rel="noreferrer" className="eyebrow" style={{ display: 'inline-block', marginTop: 22, color: 'var(--ink)', fontSize: 11, textDecoration: 'none', paddingBottom: 3,  background: 'linear-gradient(135deg, #c9a24b, #e8cf94)', boxShadow: '0 18px 40px rgba(0,0,0,0.2)', fontFamily: 'Cormorant Garamond, serif', fontSize: 15, fontWeight: 600, padding: '12px 22px', borderRadius: 999, }} whileHover={{ y: -2, scale: 1.01 }}
					>
						Open Map
					</motion.a>

				)}
			</motion.div>
		</section>
	)
}
