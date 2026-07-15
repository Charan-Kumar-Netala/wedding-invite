import { motion } from 'framer-motion'

export default function BotanicalOrnament({ color = '#c9a24b', width = 140, flip = false, style = {} }) {
    return (
        <motion.svg
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            width={width}
            viewBox="0 0 220 60"
            fill="none"
            style={{ transform: flip ? 'scaleX(-1)' : 'none', ...style }}
        >
            <path d="M10 30 H90" stroke={color} strokeWidth="1" opacity="0.8" />
            <path d="M130 30 H210" stroke={color} strokeWidth="1" opacity="0.8" />
            <circle cx="110" cy="30" r="3.5" fill="none" stroke={color} strokeWidth="1" />
            <path d="M90 30c6-10 16-14 24-8" stroke={color} strokeWidth="1" fill="none" />
            <path d="M90 30c6 10 16 14 24 8" stroke={color} strokeWidth="1" fill="none" />
            <path d="M96 22c-4-6-2-13 4-16" stroke={color} strokeWidth="0.8" fill="none" />
            <path d="M96 38c-4 6-2 13 4 16" stroke={color} strokeWidth="0.8" fill="none" />
            <path d="M75 30c-8-4-12-2-16 3" stroke={color} strokeWidth="0.8" fill="none" />
            <path d="M75 30c-8 4-12 2-16-3" stroke={color} strokeWidth="0.8" fill="none" />
        </motion.svg>
    )
}
