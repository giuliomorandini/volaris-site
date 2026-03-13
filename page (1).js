import SuitcaseArt from '../../../components/SuitcaseArt';

export default function Page() {
  return (
    <main className="product-hero">
      <div className="container" style={{ paddingTop: 96, paddingBottom: 96 }}>
        <div className="product-grid">
          <div className="product-stage"><div className="suitcase-stage" style={{ padding: 0 }}><SuitcaseArt size="product55" /></div></div>
          <div>
            <div className="section-kicker">AERO Series</div>
            <div className="section-title" style={{ marginTop: 12 }}>AERO 55</div>
            <div className="price" style={{ marginTop: 16 }}>Carry-on Carbon · €2,000</div>
            <div className="section-copy" style={{ marginTop: 28 }}>
              AERO 55 is the most distilled expression of VOLARIS. Compact, architectural, and engineered around ease of movement, it is built for business-class travel and premium short-haul routines.
            </div>
            <div className="feature-grid">
              <div className="feature-box"><div className="feature-k">Material</div><p>Black carbon-fiber composite shell with a refined satin technical finish.</p></div>
              <div className="feature-box"><div className="feature-k">Signature Detail</div><p>Double green zipper line and precise stitching create the VOLARIS identity.</p></div>
              <div className="feature-box"><div className="feature-k">Mobility</div><p>Silent multi-direction wheels and compact proportions for fast terminals.</p></div>
              <div className="feature-box"><div className="feature-k">Security</div><p>Integrated TSA lock hardware with reinforced structural elements.</p></div>
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
