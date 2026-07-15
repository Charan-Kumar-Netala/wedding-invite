import { motion } from 'framer-motion'
import BotanicalOrnament from './BotanicalOrnament'

export default function EventSlide({ label, heading, description, date, time, venue, dressCode, mapsUrl, dark = false }) {
	const bg = dark ? 'var(--ink)' : 'var(--ivory)'
	const textHeading = dark ? 'var(--gold-light)' : 'var(--text-on-light)'
	const textBody = dark ? 'var(--text-muted-dark)' : 'var(--text-muted-light)'
	const lineColor = dark ? 'rgba(201,162,75,0.35)' : 'rgba(163,133,76,0.35)'
	const rowBg = dark ? 'rgba(201,162,75,0.04)' : 'rgba(163,133,76,0.06)'
	const labelColor = dark ? 'var(--gold)' : 'var(--gold-dim)'
	const ornamentColor = dark ? '#a3854c' : '#a3854c'

	return (
		<section style={{ padding: '60px 24px', minHeight: '100svh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: bg }}>
			<motion.div initial={{ opacity: 0, y: 26 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }} style={{ width: '100%', maxWidth: 420, textAlign: 'center' }}>
				<div className="eyebrow" style={{ color: labelColor, fontSize: 11 }}>{label}</div>
				<h2 style={{ margin: '14px 0 6px', color: textHeading, fontFamily: 'Great Vibes, serif', fontWeight: 400, fontSize: '2.3rem' }}>{heading}</h2>

				<div style={{ display: 'flex', justifyContent: 'center', margin: '10px 0 16px' }}>
					<BotanicalOrnament color={ornamentColor} width={110} />
				</div>

				<p style={{ margin: '0 0 22px', color: textBody, lineHeight: 1.8, fontFamily: 'Cormorant Garamond, serif', fontSize: 16 }}>{description}</p>

				<div style={{ display: 'grid', gap: 0, textAlign: 'left', border: `1px solid ${lineColor}` }}>
					{[
						{ label: 'Date', value: date },
						{ label: 'Time', value: time },
						{ label: 'Venue', value: venue },
						{ label: 'Dress Code', value: dressCode },
					].map((row, i) => (
						<div key={row.label} style={{ padding: '14px 16px', background: i % 2 === 0 ? rowBg : 'transparent', borderTop: i === 0 ? 'none' : `1px solid ${lineColor}`, display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 10 }}>
							<span className="eyebrow" style={{ fontSize: 10, color: labelColor }}>{row.label}</span>
							<span style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 15, color: textHeading, textAlign: 'right' }}>{row.value}</span>
						</div>
					))}
				</div>

				{mapsUrl && (
					<a href={mapsUrl} target="_blank" rel="noreferrer" className="eyebrow" style={{ display: 'inline-block', marginTop: 22, color: labelColor, fontSize: 11, textDecoration: 'none', borderBottom: `1px solid ${lineColor}`, paddingBottom: 3 }}>
						Open Map
					</a>
				)}
			</motion.div>
		</section>
	)
}
