import React, { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import {
  Bath,
  BedDouble,
  Car,
  Home,
  MapPin,
  MessageCircle,
  Phone,
  School,
  Search,
  ShieldCheck,
  Trees,
} from 'lucide-react'

const FACEBOOK_PAGE_URL = 'https://www.facebook.com/kruvanda.me'

const properties = [
  {
    id: 1,
    title: 'Family Home near ISB',
    location: 'Nichada Thani, Nonthaburi',
    price: 'Contact for price',
    beds: 4,
    baths: 4,
    type: 'House',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop',
    tags: ['Near ISB', 'Family', 'Garden'],
  },
  {
    id: 2,
    title: 'Spacious Nichada Residence',
    location: 'Nichada Homes / ISB Zone',
    price: 'For rent / sale',
    beds: 5,
    baths: 5,
    type: 'Luxury Home',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1200&auto=format&fit=crop',
    tags: ['Large home', 'Secure community', 'International school'],
  },
  {
    id: 3,
    title: 'Modern Family Villa',
    location: 'Close to ISB International School',
    price: 'Ask Vanda',
    beds: 4,
    baths: 3,
    type: 'Villa',
    image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=1200&auto=format&fit=crop',
    tags: ['Modern', 'Quiet street', 'Move-in ready'],
  },
   {
    id: 4,
    title: 'Modern Family Villa',
    location: 'Close to ISB International School',
    price: '150,000 THB / month',
    beds: 4,
    baths: 3,
    type: 'Pool Villa',
    image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=1200&auto=format&fit=crop',
    tags: ['Modern', 'Quiet street', 'Move-in ready'],
  },
]

function Stat({ value, label }) {
  return (
    <div className="stat">
      <strong>{value}</strong>
      <span>{label}</span>
    </div>
  )
}

function Button({ children, variant = 'primary', onClick }) {
  return (
    <button className={`btn ${variant === 'secondary' ? 'secondary' : ''}`} onClick={onClick}>
      {children}
    </button>
  )
}

function Feature({ icon: Icon, title, text }) {
  return (
    <div className="card">
      <div className="card-icon">
        <Icon size={26} />
      </div>
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  )
}

function PropertyCard({ item }) {
  return (
    <article className="card property">
      <img src={item.image} alt={item.title} />
      <div className="property-body">
        <div className="tags">
          {item.tags.map((tag) => (
            <span className="tag" key={tag}>{tag}</span>
          ))}
        </div>
        <h3>{item.title}</h3>
        <div className="location">
          <MapPin size={16} />
          {item.location}
        </div>
        <div className="property-meta">
          <div className="meta-item"><BedDouble size={16} /> {item.beds} beds</div>
          <div className="meta-item"><Bath size={16} /> {item.baths} baths</div>
          <div className="meta-item"><Home size={16} /> {item.type}</div>
        </div>
        <div className="price-row">
          <div className="price">{item.price}</div>
          <Button>View</Button>
        </div>
      </div>
    </article>
  )
}

export default function App() {
  const [query, setQuery] = useState('')

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return properties

    return properties.filter((property) =>
      `${property.title} ${property.location} ${property.type} ${property.tags.join(' ')}`
        .toLowerCase()
        .includes(q),
    )
  }, [query])

  const encodedFacebookUrl = encodeURIComponent(FACEBOOK_PAGE_URL)

  return (
    <main>
      <header className="header">
        <div className="container header-inner">
          <a className="logo" href="#top">
            <div className="logo-icon"><Home size={24} /></div>
            <div>
              <div className="logo-title">Vanda Nichada Homes ISB</div>
              <div className="logo-subtitle">Homes near ISB • Nichada Thani</div>
            </div>
          </a>

          <nav className="nav">
            <a href="#homes">Homes</a>
            <a href="#area">Area</a>
            <a href="#facebook">Facebook Updates</a>
            <a href="#contact">Contact</a>
          </nav>

          <Button onClick={() => window.open(FACEBOOK_PAGE_URL, '_blank')}>Facebook</Button>
        </div>
      </header>

      <section className="hero" id="top">
        <div className="container hero-grid">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }}>
            <div className="badge">
              <School size={16} /> Specialist homes around ISB & Nichada
            </div>

            <h1>Find your family home near ISB with Vanda</h1>
            <p>
              A property website for Nichada Homes, designed to connect with the Kru Vanda Facebook page
              so new posts and updates remain visible on the website automatically.
            </p>

            <div className="actions">
              <Button onClick={() => document.getElementById('homes')?.scrollIntoView({ behavior: 'smooth' })}>
                Browse Homes
              </Button>
              <Button variant="secondary" onClick={() => window.open(FACEBOOK_PAGE_URL, '_blank')}>
                Message on Facebook
              </Button>
            </div>

            <div className="stats">
              <Stat value="ISB" label="School area" />
              <Stat value="Nichada" label="Family community" />
              <Stat value="Live" label="Facebook feed" />
            </div>
          </motion.div>

          <motion.div className="hero-card" initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.55, delay: 0.1 }}>
            <img
              className="hero-image"
              src="https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?q=80&w=1400&auto=format&fit=crop"
              alt="Nichada family home"
            />
            <div className="floating-card">
              <ShieldCheck size={34} />
              <div>
                <strong>Trusted local guidance</strong>
                <div>Homes, rentals, viewings, and area support around ISB.</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section" id="area">
        <div className="container">
          <div className="section-title">
            <h2>Why Nichada Homes near ISB?</h2>
            <p>
              Position the website around the needs of international-school families:
              location, safety, lifestyle, and fast updates from Facebook.
            </p>
          </div>

          <div className="feature-grid">
            <Feature icon={School} title="Close to ISB" text="Useful for families who want convenient access to International School Bangkok." />
            <Feature icon={ShieldCheck} title="Secure community" text="Highlight gated-community lifestyle and family-friendly surroundings." />
            <Feature icon={Trees} title="Green lifestyle" text="Promote quiet streets, gardens, lakes, and outdoor activities." />
            <Feature icon={Car} title="Easy relocation" text="Support viewings, rental/sale information, and moving guidance." />
          </div>
        </div>
      </section>

      <section className="section" id="homes">
        <div className="container">
          <div className="listing-head">
            <div className="section-title" style={{ marginBottom: 0 }}>
              <h2>Featured Homes</h2>
              <p>Sample listings. These can later be replaced by real Facebook/Page data or a property CMS.</p>
            </div>

            <div className="search">
              <Search size={18} />
              <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search homes..." />
            </div>
          </div>

          <div className="property-grid">
            {filtered.map((property) => (
              <PropertyCard item={property} key={property.id} />
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="facebook">
        <div className="container facebook-section">
          <div>
            <div className="badge">
              <span className="facebook-mark">f</span> Live Facebook Updates
            </div>

            <h2>Updates from Kru Vanda Facebook</h2>
            <p>
              This section embeds the public Facebook page. When posts are updated on Facebook,
              the embedded timeline updates automatically.
            </p>

            <div className="notice">
              <strong>Recommended setup:</strong><br />
              1. Use Facebook Page Plugin for quick live updates.<br />
              2. Use Meta Graph API only if the page admin grants access.<br />
              3. Add a CMS for manual property listings if Facebook content is not structured.
            </div>
          </div>

          <div className="fb-card">
            <div className="fb-frame-wrap">
              <iframe
                title="Kru Vanda Facebook Page"
                src={`https://www.facebook.com/plugins/page.php?href=${encodedFacebookUrl}&tabs=timeline&width=500&height=680&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true`}
                width="100%"
                height="680"
                style={{ border: 'none', overflow: 'hidden' }}
                scrolling="no"
                frameBorder="0"
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="contact" id="contact">
        <div className="container contact-grid">
          <div>
            <h2>Contact Vanda</h2>
            <p>
              For home viewings, rentals, sales, and family relocation around Nichada Thani and ISB.
              Add phone number, Line OA, email, or contact form here.
            </p>
          </div>

          <div className="actions">
            <Button variant="secondary" onClick={() => window.open(FACEBOOK_PAGE_URL, '_blank')}>
              <MessageCircle size={18} /> Message Facebook
            </Button>
            <Button variant="secondary">
              <Phone size={18} /> Add phone / Line
            </Button>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container footer-inner">
          <div>© {new Date().getFullYear()} Vanda Nichada Homes ISB</div>
          <div>Facebook source: {FACEBOOK_PAGE_URL}</div>
        </div>
      </footer>
    </main>
  )
}
