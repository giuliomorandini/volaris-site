export default function SuitcaseArt({ size = 'hero', accent = 'green' }) {
  const sizes = {
    hero: {
      body: { left: '16%', top: '12%', width: '56%', height: '64%', radius: '44px' },
      zip: { right: '16%', top: '12%', width: '4.3%', height: '65%' },
      rail: { right: '12.7%', top: '12%', width: '1.6%', height: '65%' },
      handle: { right: '8.2%', top: '27%', width: '4%', height: '36%' },
      badge: { left: '34%', top: '38%' },
      wheelLeft: { left: '12%' }, wheelRight: { right: '12%' }
    },
    card55: {
      body: { left: '24%', top: '11%', width: '46%', height: '62%', radius: '32px' },
      zip: { right: '21%', top: '11%', width: '4%', height: '62%' },
      rail: { right: '17%', top: '11%', width: '1.5%', height: '62%' },
      handle: { right: '13%', top: '28%', width: '3.5%', height: '32%' },
      badge: { left: '41%', top: '35%' },
      wheelLeft: { left: '22%' }, wheelRight: { right: '22%' }
    },
    card68: {
      body: { left: '23%', top: '10%', width: '49%', height: '68%', radius: '34px' },
      zip: { right: '19%', top: '10%', width: '4%', height: '68%' },
      rail: { right: '15%', top: '10%', width: '1.5%', height: '68%' },
      handle: { right: '11%', top: '28%', width: '3.7%', height: '34%' },
      badge: { left: '41%', top: '35%' },
      wheelLeft: { left: '21%' }, wheelRight: { right: '21%' }
    },
    card78: {
      body: { left: '22%', top: '9%', width: '52%', height: '73%', radius: '36px' },
      zip: { right: '17%', top: '9%', width: '4%', height: '73%' },
      rail: { right: '13%', top: '9%', width: '1.5%', height: '73%' },
      handle: { right: '9%', top: '28%', width: '3.8%', height: '36%' },
      badge: { left: '42%', top: '34%' },
      wheelLeft: { left: '20%' }, wheelRight: { right: '20%' }
    },
    product55: {
      body: { left: '20%', top: '12%', width: '50%', height: '65%', radius: '46px' },
      zip: { right: '20%', top: '12%', width: '4%', height: '65%' },
      rail: { right: '16%', top: '12%', width: '1.5%', height: '65%' },
      handle: { right: '12%', top: '28%', width: '3.8%', height: '34%' },
      badge: { left: '38%', top: '38%' },
      wheelLeft: { left: '23%' }, wheelRight: { right: '23%' }
    },
    product68: {
      body: { left: '19%', top: '10%', width: '52%', height: '70%', radius: '44px' },
      zip: { right: '18%', top: '10%', width: '4%', height: '70%' },
      rail: { right: '14%', top: '10%', width: '1.5%', height: '70%' },
      handle: { right: '10%', top: '28%', width: '3.8%', height: '34%' },
      badge: { left: '41%', top: '36%' },
      wheelLeft: { left: '21%' }, wheelRight: { right: '21%' }
    },
    product78: {
      body: { left: '18%', top: '8%', width: '54%', height: '75%', radius: '46px' },
      zip: { right: '16%', top: '8%', width: '4%', height: '75%' },
      rail: { right: '12%', top: '8%', width: '1.5%', height: '75%' },
      handle: { right: '8%', top: '28%', width: '3.8%', height: '36%' },
      badge: { left: '42%', top: '34%' },
      wheelLeft: { left: '20%' }, wheelRight: { right: '20%' }
    }
  };
  const s = sizes[size];
  const color = accent === 'red' ? '#8f1d1d' : '#2e8b57';
  return (
    <div className="suitcase-inner">
      <div className="s-body" style={{ left:s.body.left, top:s.body.top, width:s.body.width, height:s.body.height, borderRadius:s.body.radius }} />
      <div className="s-outline" style={{ left:`calc(${s.body.left} + 1.5%)`, top:`calc(${s.body.top} + 1.6%)`, width:`calc(${s.body.width} - 3.5%)`, height:`calc(${s.body.height} - 3.5%)` }} />
      <div className="s-line" style={{ left:`calc(${s.body.left} + 5%)`, top:`calc(${s.body.top} + 10%)`, width:`calc(${s.body.width} - 18%)` }} />
      {size === 'hero' && <div className="s-curve" />}
      <div className="s-zip" style={{ right:s.zip.right, top:s.zip.top, width:s.zip.width, height:s.zip.height, background:color, boxShadow:`0 0 22px ${accent === 'red' ? 'rgba(143,29,29,.3)' : 'rgba(46,139,87,.3)'}` }} />
      <div className="s-rail" style={{ right:s.rail.right, top:s.rail.top, width:s.rail.width, height:s.rail.height }} />
      <div className="s-handle" style={{ right:s.handle.right, top:s.handle.top, width:s.handle.width, height:s.handle.height }} />
      <div className="s-badge" style={{ left:s.badge.left, top:s.badge.top }}>VR</div>
      <div className="s-wheel left" style={{ left:s.wheelLeft.left }} />
      <div className="s-wheel right" style={{ right:s.wheelRight.right }} />
    </div>
  );
}
