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
    { label: 'The Bright Day', heading: 'Haldi', description: 'A joyful turmeric ceremony filled with laughter, blooms and blessings.', date: '17 August 2026', time: '09:00 AM onwards', venue: "At Groom's House, Modukuru", dressCode: 'Bright Yellow', dark: false },
    { label: 'The Bride Ceremony', heading: 'Pradhanam', description: 'Join the pradhanam ceremony.', date: '19 August 2026', time: '09:00 AM onwards', venue: "St. Johns Lutheran Church, Vetlapalem", dressCode: 'Traditional', url: `https://maps.app.goo.gl/y6iHiSxd96vnCGtP7`, dark: true },
    { label: 'The Wedding', heading: 'Wedding', description: 'Join us as we tie the knot and celebrate this beautiful beginning.', date: '20 August 2026', time: '10:00 AM onwards', venue: 'Vijay Function Hall, Mandapeta', url: `https://maps.app.goo.gl/xT9i2dMQcrfJsevW6`,dressCode: 'Traditional', dark: false },
    { label: 'The Wedding Meal', heading: 'Lunch', description: 'Gather for a delightful meal with family and close friends.', date: '20 August 2026', time: '12:00 PM onwards', venue: 'Vijay Function Hall, Mandapeta', dressCode: 'Semi-formal', dark: true },
    { label: 'The Reception', heading: 'Reception', description: 'Celebrate with us as we enjoy music, dancing, and delicious food.', date: '20 August 2026', time: '01:00 PM onwards', venue: 'Vijay Function Hall, Mandapeta', dressCode: 'Semi-formal', dark: false }, 
  ]

  return (
    <div style={{ background: 'var(--ink)' }}>
      {!inviteOpen && <EnvelopeIntro onComplete={() => { sessionStorage.setItem('invited', 'true'); setInviteOpen(true) }} />}

      {inviteOpen && (
        <main style={{ overflowX: 'hidden' }}>
          <motion.div style={{ position: 'fixed', right: 0, top: 0, width: '3px', height: '100vh', background: 'linear-gradient(180deg, #c9a24b, #e8cf94)', transformOrigin: 'top', scaleY, zIndex: 9999 }} />

          <button onClick={toggleMute} style={{ position: 'fixed', top: 16, right: 16, zIndex: 99999, width: 42, height: 42, borderRadius: '50%', background: 'rgba(23,23,15,0.55)', backdropFilter: 'blur(10px)', border: '1px solid rgba(201,162,75,0.4)', color: '#e8cf94', fontSize: 18, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{isMuted ? '🔈' : '🔊'}</button>

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
