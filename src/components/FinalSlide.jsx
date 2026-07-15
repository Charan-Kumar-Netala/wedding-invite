import { motion } from 'framer-motion'
import BotanicalOrnament from './BotanicalOrnament'

export default function FinalSlide() {
	const handleShare = async () => {
		const shareTitle = 'Charan & Sindhuja Wedding Invitation'
		const shareText = 'You are invited to celebrate with us.'
		const shareUrl = window.location.href

		if (navigator.share) {
			try {
				await navigator.share({
					title: shareTitle,
					text: shareText,
					url: shareUrl,
				})
				return
			} catch (error) {
				if (error?.name === 'AbortError') return
			}
		}

		if (navigator.clipboard?.writeText) {
			try {
				await navigator.clipboard.writeText(shareUrl)
				window.alert('Invitation link copied to clipboard.')
				return
			} catch {
				// fall through to WhatsApp fallback
			}
		}

		window.open(
			`https://wa.me/?text=${encodeURIComponent(`${shareText} ${shareUrl}`)}`,
			'_blank',
			'noopener,noreferrer'
		)
	}

	return (
		<section style={{ padding: 'clamp(48px, 8vw, 90px) clamp(20px, 5vw, 40px) clamp(56px, 9vw, 100px)', textAlign: 'center', background: 'var(--ink)' }}>
			<motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }} style={{ maxWidth: 460, margin: '0 auto' }}>
				<div className="eyebrow" style={{ fontSize: 'clamp(10px, 1.4vw, 12px)', color: 'var(--gold)' }}>With Love</div>
				<h2 style={{ margin: '14px 0 0', color: 'var(--gold-light)', fontSize: 'clamp(2.1rem, 5vw, 2.8rem)', fontFamily: 'Great Vibes, serif', fontWeight: 400 }}>Charan &amp; Sindhuja</h2>

				<div style={{ display: 'flex', justifyContent: 'center', margin: '18px 0 22px' }}>
					<BotanicalOrnament color="#a3854c" width={130} />
				</div>

				<p style={{ marginTop: 0, color: 'var(--text-muted-dark)', lineHeight: 1.8, fontFamily: 'Cormorant Garamond, serif', fontSize: 16 }}>
					We are delighted to celebrate this joyous day with you and your loved ones.
				</p>

				<div style={{ marginTop: 30, display: 'flex', justifyContent: 'center', gap: 14, flexWrap: 'wrap' }}>
					<motion.button
						type="button"
						className="eyebrow"
						onClick={handleShare}
						style={{
							textDecoration: 'none',
							color: 'var(--ink)',
							background: 'var(--gold)',
							padding: '12px 22px',
							fontSize: 11,
							borderRadius: 999,
							background: 'linear-gradient(135deg, #c9a24b, #e8cf94)',
							boxShadow: '0 18px 40px rgba(0,0,0,0.2)',
							fontFamily: 'Cormorant Garamond, serif',
							fontSize: 15,
							fontWeight: 600,
							border: 'none',
							cursor: 'pointer',
						}}
						whileHover={{ y: -2, scale: 1.01 }}
						whileTap={{ scale: 0.98 }}
					>
						Share This Invite
					</motion.button>
				</div>
			</motion.div>
		</section>
	)
}
