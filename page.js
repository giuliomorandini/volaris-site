import SuitcaseArt from '../components/SuitcaseArt';

const products = [
  {
    name: 'AERO 55',
    subtitle: 'Carry-on Carbon',
    price: '€2,000',
    description:
      'Ultra-light cabin luggage in carbon fiber, designed for global business travelers who move fast and travel often.',
    specs: ['55 cm cabin format', 'Carbon fiber shell', 'Double green zipper detail'],
    link: '/products/aero-55',
    art: 'card55',
  },
  {
    name: 'AERO 68',
    subtitle: 'Executive Travel',
    price: '€2,400',
    description:
      'Balanced proportions, premium interior organization, and refined Italian detailing for frequent international trips.',
    specs: ['Executive size', 'Silent spinner wheels', 'Premium TSA lock'],
    link: '/products/aero-68',
    art: 'card68',
  },
  {
    name: 'AERO 78',
    subtitle: 'Long Distance',
    price: '€3,000',
    description:
      'The largest expression of VOLARIS engineering, created for long-haul travel without compromising elegance or performance.',
    specs: ['Large travel format', 'Expanded packing volume', 'Signature curved front shell'],
    link: '/products/aero-78',
    art: 'card78',
  },
];

const features = [
  ['Carbon Fiber Shell', 'A refined black carbon-fiber surface with a satin technical finish, engineered to combine lightness and structural strength.'],
  ['Signature Green Detail', 'Double green zipper lines and visible stitching create a subtle Italian signature that defines the brand from a distance.'],
  ['Business-Class Functionality', 'Silent wheels, compact geometry, premium lock hardware, and elegant proportions designed for global frequent flyers.'],
  ['Italian Design Language', 'Soft front curvature, minimal branding, and precise detailing inspired by luxury automotive and executive travel culture.'],
];

const rituals = [
  ['01', 'Arrival', 'A presence designed for premium terminals, executive transfers, and understated airport luxury.'],
  ['02', 'Materiality', 'Carbon fiber texture, dark hardware, and green detailing create a tactile and visual signature.'],
  ['03', 'Ownership', 'Packaging, handling, and storage are treated as part of the luxury experience, not an afterthought.'],
];

export default function Page() {
  return (
    <div>
      <header className="header">
        <div className="container header-inner">
          <div>
            <div className="brand-title">VOLARIS</div>
            <div className="brand-sub">Flying Luxury</div>
          </div>
          <nav className="nav">
            <a href="#collection">Collection</a>
            <a href="#materials">Materials</a>
            <a href="#rituals">Rituals</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="container hero-grid">
            <div>
              <div className="kicker">Carbon Fiber Luggage · Designed in Italy</div>
              <h1>
                Designed for
                <em>quiet status.</em>
              </h1>
              <p>
                VOLARIS creates carbon-fiber luggage for business travelers who value presence, precision, and refined mobility. Every surface is restrained. Every detail is intentional.
              </p>
              <div className="actions">
                <a className="btn" href="#collection">Explore Collection</a>
                <a className="btn-alt" href="#materials">View Materials</a>
              </div>
              <div className="stats">
                <div><div className="stat-num">3</div><div className="stat-label">Core Models</div></div>
                <div><div className="stat-num">100%</div><div className="stat-label">Black Carbon Shell</div></div>
                <div><div className="stat-num">VR</div><div className="stat-label">Discreet Monogram</div></div>
              </div>
            </div>
            <div className="card-glow">
              <div className="suitcase-stage"><SuitcaseArt size="hero" /></div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container grid-3">
            {rituals.map(([kicker, title, text]) => (
              <div className="panel" key={kicker}>
                <div className="section-kicker">{kicker}</div>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="materials" className="section alt">
          <div className="container">
            <div className="section-head">
              <div>
                <div className="section-kicker">Materials</div>
                <div className="section-title">Technical surfaces with a luxury finish.</div>
              </div>
              <div className="section-copy">
                The premium feel of VOLARIS comes from restraint: black carbon fiber, dark hardware, a small monogram, and a green zipper signature used sparingly. The interface is cleaner, more cinematic, and more premium when every detail has more breathing room.
              </div>
            </div>
            <div className="grid-4" style={{ marginTop: 48 }}>
              {features.map(([title, text]) => (
                <div className="panel" key={title}>
                  <h3 style={{ fontSize: 28 }}>{title}</h3>
                  <p>{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="collection" className="section">
          <div className="container">
            <div className="section-head">
              <div>
                <div className="section-kicker">Collection</div>
                <div className="section-title">Three formats. One visual discipline.</div>
              </div>
              <div className="section-copy">
                Each AERO model follows the same language: sculpted carbon shell, restrained monogram placement, signature green zipper line, and proportions tailored for specific travel rhythms.
              </div>
            </div>
            <div className="grid-3" style={{ marginTop: 48 }}>
              {products.map((product) => (
                <div key={product.name} className="product-card">
                  <div className="product-top">
                    <div>
                      <div className="product-name">{product.name}</div>
                      <div className="product-sub">{product.subtitle}</div>
                    </div>
                    <div className="price">{product.price}</div>
                  </div>
                  <div className="suitcase-stage" style={{ marginTop: 20, aspectRatio: '4/5', padding: 0 }}>
                    <SuitcaseArt size={product.art} />
                  </div>
                  <div className="product-desc">{product.description}</div>
                  <div className="product-tags">{product.specs.map((s) => <span className="tag" key={s}>{s}</span>)}</div>
                  <div className="actions" style={{ marginTop: 22 }}>
                    <a className="btn" href={product.link}>View Product</a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section alt">
          <div className="container grid-2" style={{ alignItems: 'center' }}>
            <div>
              <div className="section-kicker">Macro Detail</div>
              <div className="section-title">Carbon texture, enlarged.</div>
              <div className="section-copy" style={{ marginTop: 24 }}>
                This section is designed for close-up product photography: woven carbon surface, green stitching, zipper teeth, and premium lock hardware. Replace this visual block with your macro render to make the site feel substantially more luxurious.
              </div>
            </div>
            <div className="macro-box">
              <div className="macro-stage">
                <div className="macro-zip" />
                <div className="macro-rail" />
                <div className="macro-lock" />
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container grid-2" style={{ alignItems: 'center' }}>
            <div className="viewer-box">
              <div className="viewer-stage">
                <div className="rotate-suitcase" />
                <div className="rotate-zip" />
                <div className="rotate-rail" />
                <div className="rotate-wheel l" />
                <div className="rotate-wheel r" />
              </div>
            </div>
            <div>
              <div className="section-kicker">Interactive View</div>
              <div className="section-title">360° product rotation placeholder.</div>
              <div className="section-copy" style={{ marginTop: 24 }}>
                This block is prepared for a future interactive rotation. In the real site, replace it with a draggable 3D viewer, turntable video, or layered image sequence so users can inspect the shell, profile, zipper line, and wheels from every angle.
              </div>
              <div className="product-tags" style={{ marginTop: 26 }}>
                <span className="tag">3D Viewer</span>
                <span className="tag">Turntable Video</span>
                <span className="tag">Motion Detail</span>
              </div>
            </div>
          </div>
        </section>

        <section className="section alt">
          <div className="container grid-2" style={{ alignItems: 'center' }}>
            <div>
              <div className="section-kicker">Configurator</div>
              <div className="section-title">Choose your signature stitching.</div>
              <div className="section-copy" style={{ marginTop: 24 }}>
                This section previews a future color configurator for the zipper and stitching line. The default brand expression remains green, but a red option can be added for customers who want a more assertive finish.
              </div>
              <div className="actions" style={{ marginTop: 28 }}>
                <button className="color-btn green">Green Signature</button>
                <button className="color-btn red">Red Signature</button>
              </div>
            </div>
            <div className="grid-2">
              <div className="config-box">
                <div className="suitcase-stage" style={{ padding: 0 }}><SuitcaseArt size="card55" accent="green" /></div>
                <div className="product-sub" style={{ marginTop: 14 }}>Green</div>
              </div>
              <div className="config-box">
                <div className="suitcase-stage" style={{ padding: 0 }}><SuitcaseArt size="card55" accent="red" /></div>
                <div className="product-sub" style={{ marginTop: 14 }}>Red</div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="section story">
          <div className="container section-head">
            <div>
              <div className="section-kicker">Storytelling</div>
              <div className="section-title">The world of VOLARIS.</div>
            </div>
            <div>
              <div className="section-copy">
                VOLARIS was conceived around a specific kind of traveler: someone who moves often, values design without excess, and expects materials to perform at a high level. Carbon fiber gives the product lightness and strength. Italian design gives it calm, proportion, and elegance.
              </div>
              <div className="section-copy" style={{ marginTop: 24 }}>
                The visual language is intentionally restrained: black shell, small monogram, dark hardware, and one green line that becomes the signature. The result is not loud luxury. It is quiet status.
              </div>
            </div>
          </div>
        </section>

        <section className="product-hero" id="contact">
          <div className="container" style={{ paddingTop: 96, paddingBottom: 96 }}>
            <div className="product-grid">
              <div className="product-stage">
                <div className="suitcase-stage" style={{ padding: 0 }}><SuitcaseArt size="product55" /></div>
              </div>
              <div>
                <div className="section-kicker">Product</div>
                <div className="section-title" style={{ marginTop: 12 }}>AERO 55</div>
                <div className="price" style={{ marginTop: 16 }}>Carry-on Carbon · €2,000</div>
                <div className="section-copy" style={{ marginTop: 28 }}>
                  AERO 55 is the purest expression of VOLARIS design. A sculpted carbon-fiber shell, discreet VR monogram, and signature green zipper line create a carry-on built for executives and global travelers.
                </div>
                <div className="feature-grid">
                  <div className="feature-box"><div className="feature-k">Material</div><p>Black carbon-fiber composite shell engineered for strength, lightness, and a refined satin technical surface.</p></div>
                  <div className="feature-box"><div className="feature-k">Signature Detail</div><p>Double green zipper track and precision stitching create the distinctive VOLARIS identity.</p></div>
                  <div className="feature-box"><div className="feature-k">Mobility</div><p>Silent multi-direction wheels and compact proportions designed for fast airport movement.</p></div>
                  <div className="feature-box"><div className="feature-k">Security</div><p>Integrated TSA lock hardware and reinforced aluminum frame components.</p></div>
                </div>
                <div className="actions" style={{ marginTop: 28 }}>
                  <a className="btn" href="mailto:hello@volaris.com">Request Availability</a>
                  <a className="btn-alt" href="/products/aero-55">Open Product Page</a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">VOLARIS · Flying Luxury</footer>
    </div>
  );
}
