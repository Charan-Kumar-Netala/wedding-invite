import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
import EnvelopeIntro from './components/EnvelopeIntro'
import HeroSlide from './components/HeroSlide'
import CountDownSlide from './components/CountDownSlide'
import EventSlide from './components/EventSlide'
import FinalSlide from './components/FinalSlide'
import './App.css'

export default function App() {
  const [inviteOpen, setInviteOpen] = useState(false)
  const [musicStarted, setMusicStarted] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const audioRef = useRef(null)

  useEffect(() => {
    if (sessionStorage.getItem('invited') === 'true') setInviteOpen(true)
  }, [])

  useEffect(() => {
    if (inviteOpen && !musicStarted) {
      try {
        audioRef.current = new Audio('/music.mp3')
        audioRef.current.loop = true
        audioRef.current.volume = 0.3
        audioRef.current.play().catch(() => { })
        setMusicStarted(true)
      } catch (e) {
        // ignore if file missing
      }
    }
  }, [inviteOpen, musicStarted])

  useEffect(() => {
    return () => {
      if (audioRef.current) audioRef.current.pause()
    }
  }, [])

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted
      setIsMuted(!isMuted)
    }
  }

  const { scrollYProgress } = useScroll()
  const scaleY = useSpring(scrollYProgress, { stiffness: 120, damping: 30 })

  const events = [
    { label: 'THE FIRST HUES OF LOVE', heading: 'Mehendi', headingColor: '#1e5c2a', description: 'Begin with henna, music and memories under the warm glow of sunset.', date: '20 August 2026', time: '05:00 PM onwards', venue: 'Garden Lawn, Bengaluru', dressCode: 'Boho Chic' },
    { label: 'THE BRIGHT DAY', heading: 'Haldi', headingColor: '#7a4e00', description: 'A joyful turmeric ceremony filled with laughter, blooms and blessings.', date: '21 August 2026', time: '09:00 AM onwards', venue: 'Royal Patio, Bengaluru', dressCode: 'Bright Yellow' },
    { label: 'THE EVENING MEAL', heading: 'Haldi Dinner', headingColor: '#6b1e48', description: 'Gather for a candlelit dinner with family and close friends.', date: '21 August 2026', time: '07:30 PM onwards', venue: 'The Grand Hall, Bengaluru', dressCode: 'Semi-formal' },
    { label: 'THE WEDDING', heading: 'Wedding', headingColor: '#5a3200', description: 'Join us as we tie the knot and celebrate this beautiful beginning.', date: '22 August 2026', time: '06:00 PM onwards', venue: 'Mahalakshmi Palace, Bengaluru', dressCode: 'Traditional' },
  ]

  return (
    <div style={{ background: '#fcf7ee' }}>
      {!inviteOpen && <EnvelopeIntro onComplete={() => { sessionStorage.setItem('invited', 'true'); setInviteOpen(true) }} />}

      {inviteOpen && (
        <main style={{ overflowX: 'hidden' }}>
          <motion.div style={{ position: 'fixed', right: 0, top: 0, width: '3px', height: '100vh', background: 'linear-gradient(180deg, #c9942a, #f0d080)', transformOrigin: 'top', scaleY, zIndex: 9999 }} />

          <button onClick={toggleMute} style={{ position: 'fixed', top: 16, right: 16, zIndex: 99999, width: 42, height: 42, borderRadius: 21, background: 'rgba(0,0,0,0.34)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.25)', color: 'white', fontSize: 18, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{isMuted ? '🔈' : '🔊'}</button>

          <HeroSlide />
          <CountDownSlide targetDate={'2026-08-20'} />

          {events.map((e, i) => (
            <EventSlide key={i} {...e} />
          ))}

          <FinalSlide />
        </main>
      )}
    </div>
  )
}
