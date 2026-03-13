import SuitcaseArt from '../../../components/SuitcaseArt';

export default function Page() {
  return (
    <main className="product-hero">
      <div className="container" style={{ paddingTop: 96, paddingBottom: 96 }}>
        <div className="product-grid">
          <div className="product-stage"><div className="suitcase-stage" style={{ padding: 0 }}><SuitcaseArt size="product68" /></div></div>
          <div>
            <div className="section-kicker">AERO Series</div>
            <div className="section-title" style={{ marginTop: 12 }}>AERO 68</div>
            <div className="price" style={{ marginTop: 16 }}>Executive Travel · €2,400</div>
            <div className="section-copy" style={{ marginTop: 28 }}>
              AERO 68 extends the VOLARIS design language into a larger executive format. It keeps the same restraint while offering more volume for longer business itineraries.
            </div>
            <div className="feature-grid">
              <div className="feature-box"><div className="feature-k">Executive Size</div><p>Balanced proportions built for frequent international travel.</p></div>
              <div className="feature-box"><div className="feature-k">Interior</div><p>Premium organization for documents, tailoring, and extended packing.</p></div>
              <div className="feature-box"><div className="feature-k">Mobility</div><p>Stable geometry and silent wheels for seamless airport movement.</p></div>
              <div className="feature-box"><div className="feature-k">Presence</div><p>Calm, discreet, and technical in appearance.</p></div>
            </div>
            <div className="actions" style={{ marginTop: 28 }}>
              <a className="btn" href="mailto:hello@volaris.com">Request Availability</a>
              <a className="btn-alt" href="/">Back Home</a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
