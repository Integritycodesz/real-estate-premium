import React from 'react';
import './PageStyles.css';

const About = () => {
  return (
    <div className="page-wrapper fade-in">
      <header className="page-hero-header" style={{ 
        backgroundImage: "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')",
      }}>
        <div className="container">
          <div style={{ maxWidth: '800px', marginLeft: '0' }}>
            <div style={{ paddingLeft: '40px' }}> {/* Aligning with text inside the box below */}
              <p className="reveal-text delay-1" style={{ textTransform: 'uppercase', letterSpacing: '4px', color: 'var(--accent-gold)', marginBottom: '15px', fontWeight: '700', fontSize: '0.9rem' }}>
                OUR STORY & LEGACY
              </p>
              <h1 className="reveal-text delay-2" style={{ textShadow: '0 4px 15px rgba(0,0,0,0.4)', marginBottom: '20px', fontSize: '5rem', lineHeight: '1', fontWeight: '800', letterSpacing: '-1px' }}>
                Built on Promises.<br />
                <span style={{ color: 'var(--accent-gold)' }}>Lived by Families.</span>
              </h1>
            </div>
            
            <div className="reveal-text delay-3" style={{ 
              fontSize: '1.1rem', 
              lineHeight: '1.8', 
              color: 'rgba(255,255,255,0.95)',
              background: 'rgba(255,255,255,0.02)',
              backdropFilter: 'blur(20px)',
              padding: '40px',
              borderRadius: '0 20px 20px 0', 
              borderLeft: '4px solid var(--accent-gold)',
              boxShadow: '40px 40px 80px rgba(0,0,0,0.3)',
              marginTop: '10px'
            }}>
              <p style={{ marginBottom: '20px', fontSize: '1.3rem', fontWeight: '600', color: '#fff', lineHeight: '1.4' }}>
                In Lucknow's crowded real estate market, promises are cheap. Documents, approvals, and honest handshakes — those are rare.
              </p>
              <p style={{ marginBottom: '30px', opacity: 0.8, fontSize: '1.05rem' }}>
                Since 2019, Pawantanay Builders & Developers has chosen the harder path: transparency over tactics, verified paperwork over verbal assurances, and long-term trust over short-term sales.
              </p>
              <div style={{ display: 'flex', gap: '50px' }}>
                <div className="reveal-text delay-4">
                  <div style={{ fontSize: '2.2rem', fontWeight: '800', color: 'var(--accent-gold)', marginBottom: '2px' }}>02</div>
                  <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '2px', opacity: 0.6, fontWeight: '700' }}>Delivered Projects</div>
                </div>
                <div style={{ width: '1px', background: 'rgba(255,255,255,0.1)' }}></div>
                <div className="reveal-text delay-4" style={{ animationDelay: '1s' }}>
                  <div style={{ fontSize: '2.2rem', fontWeight: '800', color: 'var(--accent-gold)', marginBottom: '2px' }}>04</div>
                  <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '2px', opacity: 0.6, fontWeight: '700' }}>Active Colonies</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="container">

        <div className="content-block" style={{ marginTop: '60px', borderTop: '1px solid var(--border-subtle)', paddingTop: '60px' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '10px' }}>Founder's Story</h2>
          <h3 style={{ color: 'var(--accent-gold)', marginBottom: '30px', fontSize: '1.4rem' }}>From a Simple Belief to a Living Legacy: The Narendra Yadav Story</h3>

          <div style={{ display: 'flex', gap: '50px', flexWrap: 'wrap' }}>
            <div style={{ flex: '1 1 500px' }}>
              <p style={{ marginBottom: '15px' }}>Narendra Yadav didn't set out to build a real estate company. He set out to fix something broken.</p>
              <p style={{ marginBottom: '15px' }}>Growing up in Lucknow, Narendra watched families — hardworking, middle-class families — pour their life savings into land that came with more confusion than clarity. Approvals that were "in process." Documents that were "almost ready." Plots that looked different from what was promised. He saw the stress on their faces, the sleepless nights, the quiet heartbreak of a dream gone sideways.</p>
              <p style={{ marginBottom: '15px' }}>He knew the land market didn't have to work this way.</p>
              <p style={{ marginBottom: '15px' }}>In 2019, with a deep conviction and a first project that had every document in order before a single plot was offered, Narendra founded Pawantanay Builders & Developers. Not to become the biggest name in real estate. But to become the most trusted one in Lucknow.</p>

              <blockquote style={{ borderLeft: '4px solid var(--accent-gold)', paddingLeft: '20px', fontStyle: 'italic', fontSize: '1.25rem', color: 'var(--accent-gold)', margin: '30px 0' }}>
                "If a family is going to trust me with the most important investment of their life, the least I can do is make sure every single document, every boundary, every approval — is exactly as I said it would be."
              </blockquote>

              <p style={{ marginBottom: '15px' }}>What keeps Narendra going today isn't business metrics. It's the families already living in Rajgharana and 2 more projects — the delivered projects where real people have built real lives on land PBD promised them. It's the phone calls from happy buyers who refer their friends. It's the IAS and IPS officers who looked at the documentation and said yes — because the numbers, approvals, and paperwork spoke for themselves.</p>
              <p style={{ marginBottom: '15px' }}>Under Narendra's leadership, PBD has grown from a single project to 2 fully delivered colonies and 4 active, ongoing projects — each developed with the same founding conviction: a buyer's trust is sacred.</p>

              <div style={{ background: 'var(--bg-secondary)', padding: '25px', borderRadius: '12px', marginTop: '40px' }}>
                <p style={{ marginBottom: '10px' }}><strong style={{ color: 'var(--accent-gold)' }}>Role:</strong> Founder & CEO</p>
                <p style={{ marginBottom: '10px' }}><strong style={{ color: 'var(--accent-gold)' }}>Founded:</strong> 2019</p>
                <p style={{ marginBottom: '10px' }}><strong style={{ color: 'var(--accent-gold)' }}>Vision:</strong> Making land ownership in Lucknow simple, secure, and genuinely trustworthy for every middle-class family</p>
                <p><strong style={{ color: 'var(--accent-gold)' }}>Core Belief:</strong> "Our reputation lives in the homes our buyers are living in today — and that's not something we take lightly."</p>
              </div>
            </div>
            <div style={{ flex: '1 1 350px' }}>
              {/* Placeholder for Founder Image */}
              <div style={{ width: '100%', height: '500px', background: 'var(--bg-secondary)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px dashed var(--border-subtle)', position: 'sticky', top: '100px' }}>
                <span style={{ color: 'var(--text-muted)' }}>[Placeholder: Image of Narendra Yadav]</span>
              </div>
            </div>
          </div>
        </div>

        <div className="content-block" style={{ marginTop: '60px', borderTop: '1px solid var(--border-subtle)', paddingTop: '60px' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>Company Details — Who We Are</h2>
          <p style={{ marginBottom: '15px' }}>Pawantanay Builders & Developers Pvt. Ltd. is a Lucknow-based real estate development company with a focused mission: create legally sound, well-located, and genuinely affordable plotted colonies for middle-class families and first-time land buyers.</p>
          <p style={{ marginBottom: '15px' }}>We don't try to do everything. We do one thing — and we do it right.</p>
          <p style={{ marginBottom: '25px' }}>Every project we develop is strategically located along Raebareli Road — one of Lucknow's fastest-growing corridors — with direct access to the city's expanding metro network, Outer Ring Road, Shahid Path, Sultanpur Road, and major upcoming developments like IT City, Awas Vikas, and Link Expressway.</p>

          <div style={{ display: 'flex', gap: '40px', flexWrap: 'wrap' }}>
            <div style={{ flex: '1 1 500px' }}>
              <h3 style={{ marginBottom: '20px', color: 'var(--text-primary)' }}>What you get with every PBD project:</h3>
              <ul style={{ listStyleType: 'none', paddingLeft: '0', marginBottom: '30px' }}>
                <li style={{ marginBottom: '15px', display: 'flex', gap: '10px' }}><span style={{ color: 'var(--accent-gold)' }}>✓</span> <span><strong>Complete legal documentation</strong> — verified, clear, and ready before you are asked to commit</span></li>
                <li style={{ marginBottom: '15px', display: 'flex', gap: '10px' }}><span style={{ color: 'var(--accent-gold)' }}>✓</span> <span><strong>Transparent pricing</strong> — what we quote is exactly what you pay, no hidden charges, no last-minute additions</span></li>
                <li style={{ marginBottom: '15px', display: 'flex', gap: '10px' }}><span style={{ color: 'var(--accent-gold)' }}>✓</span> <span><strong>Flexible payment plans</strong> — structured EMI options designed around a working family's real financial situation</span></li>
                <li style={{ marginBottom: '15px', display: 'flex', gap: '10px' }}><span style={{ color: 'var(--accent-gold)' }}>✓</span> <span><strong>Personal guidance</strong> — from your first call to your final registry, our team walks every step with you</span></li>
                <li style={{ marginBottom: '15px', display: 'flex', gap: '10px' }}><span style={{ color: 'var(--accent-gold)' }}>✓</span> <span><strong>Post-sale support</strong> — because our relationship doesn't end at the signature</span></li>
              </ul>
            </div>

            <div style={{ flex: '1 1 400px', background: 'var(--bg-secondary)', padding: '40px', borderRadius: '16px', border: '2px solid rgba(212, 175, 55, 0.3)', boxShadow: '0 15px 35px rgba(0, 0, 0, 0.05), 0 5px 15px rgba(212, 175, 55, 0.1)', position: 'relative', transform: 'translateY(-5px)' }}>
              <h3 style={{ marginBottom: '20px', color: 'var(--accent-gold)', fontSize: '1.8rem' }}>What makes us genuinely different?</h3>
              <p style={{ marginBottom: '20px', fontSize: '1.1rem', lineHeight: '1.8' }}>We've already delivered. Rajgharana and 2 more Projects are completely delivered — families are living there right now. That's not a marketing claim. That's verifiable proof of what we've promised and what we've done.</p>
              <div style={{ background: 'rgba(212, 175, 55, 0.08)', padding: '20px', borderRadius: '12px', border: '1px solid rgba(212, 175, 55, 0.2)' }}>
                <p style={{ color: 'var(--accent-gold)', fontWeight: '600', fontSize: '1.2rem', margin: 0, lineHeight: '1.6' }}>When you invest with PBD, you're not betting on a future promise. You're trusting a team that has already delivered, to deliver again.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="content-block" style={{ marginTop: '60px', borderTop: '1px solid var(--border-subtle)', paddingTop: '60px' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '30px' }}>Our Journey — Built One Family at a Time</h2>
          <div style={{ marginTop: '30px', borderLeft: '2px solid var(--accent-gold)', paddingLeft: '30px', marginLeft: '10px' }}>
            <div style={{ marginBottom: '35px', position: 'relative' }}>
              <div style={{ position: 'absolute', width: '12px', height: '12px', background: 'var(--accent-gold)', borderRadius: '50%', left: '-37px', top: '6px' }}></div>
              <h4 style={{ color: 'var(--accent-gold)', marginBottom: '10px', fontSize: '1.2rem' }}>2019</h4>
              <p>Narendra Yadav founded Pawantanay Builders & Developers with one belief: Lucknow's middle-class families deserve land they can trust, paperwork that's real, and a developer that actually delivers.</p>
            </div>
            <div style={{ marginBottom: '35px', position: 'relative' }}>
              <div style={{ position: 'absolute', width: '12px', height: '12px', background: 'var(--accent-gold)', borderRadius: '50%', left: '-37px', top: '6px' }}></div>
              <h4 style={{ color: 'var(--accent-gold)', marginBottom: '10px', fontSize: '1.2rem' }}>2020</h4>
              <p>Launched our first project, Rajgharana, on Raebareli Road. Every plot offered only after documentation was complete and clear. The colony sold out — and every buyer who invested there lives there today.</p>
            </div>
            <div style={{ marginBottom: '35px', position: 'relative' }}>
              <div style={{ position: 'absolute', width: '12px', height: '12px', background: 'var(--accent-gold)', borderRadius: '50%', left: '-37px', top: '6px' }}></div>
              <h4 style={{ color: 'var(--accent-gold)', marginBottom: '10px', fontSize: '1.2rem' }}>2022</h4>
              <p>Delivered Gokul Vihar, our second completed colony. Another full delivery. Another community of families who trusted us and were never let down. Gokul Vihar is now a thriving residential neighbourhood, a testament to what PBD stands for.</p>
            </div>
            <div style={{ marginBottom: '35px', position: 'relative' }}>
              <div style={{ position: 'absolute', width: '12px', height: '12px', background: 'var(--accent-gold)', borderRadius: '50%', left: '-37px', top: '6px' }}></div>
              <h4 style={{ color: 'var(--accent-gold)', marginBottom: '10px', fontSize: '1.2rem' }}>2023–2024</h4>
              <p>Launched Shivay Residency, Muralia Garden, Hanumant Dham, and Green Garden — four active colonies on Raebareli Road corridor, each designed for early investors, first-time buyers, and families planning their future. Already 50–60% sold in each project, with early buyers including senior government officers who chose PBD for the security of its documentation.</p>
            </div>
            <div style={{ marginBottom: '35px', position: 'relative' }}>
              <div style={{ position: 'absolute', width: '12px', height: '12px', background: 'var(--accent-gold)', borderRadius: '50%', left: '-37px', top: '6px' }}></div>
              <h4 style={{ color: 'var(--accent-gold)', marginBottom: '10px', fontSize: '1.2rem' }}>Today</h4>
              <p>PBD operates six projects across Lucknow's most promising growth corridor, with two fully delivered and four actively in progress. The mission hasn't changed since 2019: every buyer gets exactly what they were promised.</p>
            </div>
          </div>
        </div>

        <div className="content-block" style={{ marginTop: '60px', borderTop: '1px solid var(--border-subtle)', paddingTop: '60px' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '10px' }}>What We Stand For — Our Values</h2>
          <h3 style={{ color: 'var(--accent-gold)', marginBottom: '20px', fontSize: '1.4rem' }}>Trust Is Not a Tagline. It's Our Track Record.</h3>
          <p style={{ marginBottom: '40px', fontSize: '1.1rem' }}>At PBD, we don't frame trust as a value we aspire to. We point to it. Two delivered projects. Hundreds of families. Zero broken promises.</p>

          <div className="values-marquee-wrapper">
            <div className="values-marquee">
              {[1, 2].map((set) => (
                <React.Fragment key={set}>
                  <div className="value-item">
                    <h3 style={{ color: 'var(--accent-gold)', marginBottom: '15px' }}>Honesty Before Everything</h3>
                    <p>We tell you what the project is, what the documentation looks like, and what the timeline is — in plain language, without fine print. If something isn't ready, we don't sell it. That's the standard we've held since Day 1.</p>
                  </div>
                  <div className="value-item">
                    <h3 style={{ color: 'var(--accent-gold)', marginBottom: '15px' }}>Legal Clarity, Always</h3>
                    <p>Every project comes with complete, verified documentation. We believe a buyer should be able to hand our paperwork to any lawyer in Lucknow and have them nod in confidence. That level of clarity is non-negotiable for us.</p>
                  </div>
                  <div className="value-item">
                    <h3 style={{ color: 'var(--accent-gold)', marginBottom: '15px' }}>Buyer First, Not Sales First</h3>
                    <p>Our team doesn't push. They listen. They understand your budget, your timeline, your concerns — and they guide you to the right decision, even if that means telling you to wait for a better fit. We'd rather lose a sale than create a wrong one.</p>
                  </div>
                  <div className="value-item">
                    <h3 style={{ color: 'var(--accent-gold)', marginBottom: '15px' }}>No Pressure. No Fake Urgency.</h3>
                    <p>Real estate is full of manufactured urgency. We don't do that. If a project is 50% sold, we tell you. If limited plots remain, we tell you honestly — not to pressure you, but because you deserve accurate information to make your decision.</p>
                  </div>
                  <div className="value-item">
                    <h3 style={{ color: 'var(--accent-gold)', marginBottom: '15px' }}>Long-Term Relationship Over One-Time Transaction</h3>
                    <p>The families in Rajgharana and Gokul Vihar are not our past customers. They are our reputation, walking and living every day. We take that seriously — and that's why they refer us to everyone they know.</p>
                  </div>
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>

        <div className="content-block" style={{ marginTop: '60px', borderTop: '1px solid var(--border-subtle)', paddingTop: '60px', marginBottom: '100px' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>Meet the Team — The People Behind Your Trust</h2>
          <p style={{ marginBottom: '50px', fontSize: '1.1rem' }}>We're not a faceless organization. We're a close-knit team that has collectively guided hundreds of families through one of life's most significant financial decisions — with patience, transparency, and genuine care.</p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>

            {/* Team Member 1 */}
            <div style={{ background: 'var(--bg-secondary)', padding: '30px', borderRadius: '16px', display: 'flex', flexDirection: 'column' }}>
              {/* Placeholder for Photo */}
              <div style={{ width: '120px', height: '120px', borderRadius: '50%', background: 'var(--bg-color)', border: '1px dashed var(--border-subtle)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '25px' }}>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>[Photo]</span>
              </div>
              <h3 style={{ color: 'var(--accent-gold)', marginBottom: '5px' }}>Narendra Yadav</h3>
              <p style={{ color: 'var(--text-muted)', marginBottom: '20px', fontWeight: '500' }}>Founder & CEO</p>
              <p style={{ flexGrow: '1' }}>The man who started PBD is the same man who personally oversees every project's legal compliance, approval process, and customer experience. Narendra believes that a developer's reputation is built project by project, family by family — and he leads PBD with that weight felt every day.</p>
              <blockquote style={{ borderLeft: '3px solid var(--accent-gold)', paddingLeft: '15px', fontStyle: 'italic', marginTop: '20px', color: 'var(--accent-gold)' }}>
                "I don't build projects. I build the kind of confidence that lets a family sleep peacefully after signing their documents."
              </blockquote>
            </div>

            {/* Team Member 2 */}
            <div style={{ background: 'var(--bg-secondary)', padding: '30px', borderRadius: '16px', display: 'flex', flexDirection: 'column' }}>
              {/* Placeholder for Photo */}
              <div style={{ width: '120px', height: '120px', borderRadius: '50%', background: 'var(--bg-color)', border: '1px dashed var(--border-subtle)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '25px' }}>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>[Photo]</span>
              </div>
              <h3 style={{ color: 'var(--accent-gold)', marginBottom: '5px' }}>Dhiraj Yadav</h3>
              <p style={{ color: 'var(--text-muted)', marginBottom: '20px', fontWeight: '500' }}>Director</p>
              <p style={{ flexGrow: '1' }}>Dhiraj leads the operational and development side of PBD — from site planning and layout design to infrastructure execution and handover. His sharp attention to detail ensures every road is properly laid, every boundary is accurately demarcated, and every colony is delivered to the standard the buyer was promised.</p>
              <blockquote style={{ borderLeft: '3px solid var(--accent-gold)', paddingLeft: '15px', fontStyle: 'italic', marginTop: '20px', color: 'var(--accent-gold)' }}>
                "Delivery is the only marketing that truly works. When we hand over a plot and the buyer sees exactly what they signed up for, that's when the real trust is built."
              </blockquote>
            </div>

            {/* Team Member 3 */}
            <div style={{ background: 'var(--bg-secondary)', padding: '30px', borderRadius: '16px', display: 'flex', flexDirection: 'column' }}>
              {/* Placeholder for Photo */}
              <div style={{ width: '120px', height: '120px', borderRadius: '50%', background: 'var(--bg-color)', border: '1px dashed var(--border-subtle)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '25px' }}>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>[Photo]</span>
              </div>
              <h3 style={{ color: 'var(--accent-gold)', marginBottom: '5px' }}>Priyanka</h3>
              <p style={{ color: 'var(--text-muted)', marginBottom: '20px', fontWeight: '500' }}>Senior Sales Manager</p>
              <p style={{ flexGrow: '1' }}>Priyanka is often the first voice a potential buyer hears at PBD. With deep experience in understanding buyer needs and matching them to the right project, Priyanka is known for her zero-pressure approach — she doesn't sell plots, she helps families make informed decisions. Her clients often say they felt guided, not sold.</p>
              <blockquote style={{ borderLeft: '3px solid var(--accent-gold)', paddingLeft: '15px', fontStyle: 'italic', marginTop: '20px', color: 'var(--accent-gold)' }}>
                "The best sale I can make is one where the buyer thanks me six months later for helping them make the right choice."
              </blockquote>
            </div>

            {/* Team Member 4 */}
            <div style={{ background: 'var(--bg-secondary)', padding: '30px', borderRadius: '16px', display: 'flex', flexDirection: 'column' }}>
              {/* Placeholder for Photo */}
              <div style={{ width: '120px', height: '120px', borderRadius: '50%', background: 'var(--bg-color)', border: '1px dashed var(--border-subtle)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '25px' }}>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>[Photo]</span>
              </div>
              <h3 style={{ color: 'var(--accent-gold)', marginBottom: '5px' }}>Dipankar</h3>
              <p style={{ color: 'var(--text-muted)', marginBottom: '20px', fontWeight: '500' }}>Sales & Client Relations</p>
              <p style={{ flexGrow: '1' }}>Dipankar is the steady presence that keeps buyers informed, confident, and supported from the moment they show interest through final registration. He manages follow-ups, documentation coordination, and post-sale communication — ensuring every buyer feels like a priority, not a number.</p>
              <blockquote style={{ borderLeft: '3px solid var(--accent-gold)', paddingLeft: '15px', fontStyle: 'italic', marginTop: '20px', color: 'var(--accent-gold)' }}>
                "A buyer who knows exactly what's happening at every step is a buyer who trusts us. That's the only way I like to work."
              </blockquote>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default About;
