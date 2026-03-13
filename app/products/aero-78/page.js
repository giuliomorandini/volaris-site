import SuitcaseArt from '../../../components/SuitcaseArt';

export default function Page() {
  return (
    <main className="product-hero">
      <div className="container" style={{ paddingTop: 96, paddingBottom: 96 }}>
        <div className="product-grid">
          <div className="product-stage"><div className="suitcase-stage" style={{ padding: 0 }}><SuitcaseArt size="product78" /></div></div>
          <div>
            <div className="section-kicker">AERO Series</div>
            <div className="section-title" style={{ marginTop: 12 }}>AERO 78</div>
            <div className="price" style={{ marginTop: 16 }}>Long Distance · €3,000</div>
            <div className="section-copy" style={{ marginTop: 28 }}>
              AERO 78 is the long-haul model of the collection. Larger in scale, but still disciplined in appearance, it is designed for extended international travel with a premium visual presence.
            </div>
            <div className="feature-grid">
              <div className="feature-box"><div className="feature-k">Large Format</div><p>Expanded volume for longer stays and complex itineraries.</p></div>
              <div className="feature-box"><div className="feature-k">Structure</div><p>Black carbon shell engineered to stay light while feeling substantial.</p></div>
              <div className="feature-box"><div className="feature-k">Signature</div><p>Curved front shell, restrained monogram, and green zipper line.</p></div>
              <div className="feature-box"><div className="feature-k">Travel Use</div><p>Created for long-distance premium mobility.</p></div>
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
