const projectStats = [
  { label: "Durasi sumber", value: "00:24", detail: "24 detik" },
  { label: "Frame rate", value: "30 FPS", detail: "720 frame" },
  { label: "Sumber", value: "1280 × 720", detail: "Landscape 16:9" },
];

const sequence = [
  { time: "00:00", title: "Opening", subtitle: "Identitas dan hook", width: "17%" },
  { time: "00:04", title: "Who is Armuzz?", subtitle: "Pengenalan karakter", width: "25%" },
  { time: "00:10", title: "Creative journey", subtitle: "Teknologi, karya, eksplorasi", width: "33%" },
  { time: "00:18", title: "Closing", subtitle: "Think. Create. Explore.", width: "25%" },
];

function App() {
  return (
    <main className="app-shell">
      <aside className="sidebar">
        <div className="brand-mark">A<span>.</span></div>
        <div className="side-divider" />
        <button className="nav-icon active" aria-label="Workspace" title="Workspace">▦</button>
        <button className="nav-icon" aria-label="Media" title="Media">▧</button>
        <button className="nav-icon" aria-label="Timeline" title="Timeline">◷</button>
        <button className="nav-icon" aria-label="Export" title="Export">⇧</button>
        <div className="sidebar-spacer" />
        <div className="avatar">A</div>
      </aside>

      <section className="main-area">
        <header className="topbar">
          <div className="breadcrumb"><span>ARMUZZ STUDIO</span><i>/</i> PROJECT WORKSPACE</div>
          <div className="topbar-right">
            <span className="connection"><span className="status-dot" /> LOCAL PREVIEW</span>
            <span className="version">FOUNDATION 0.1</span>
          </div>
        </header>

        <div className="content">
          <section className="page-heading">
            <div>
              <div className="eyebrow">PROJECT WORKSPACE <span>01 / 01</span></div>
              <h1>Who Is <em>Armuzz?</em></h1>
              <p className="page-subtitle">Ruang kerja untuk merapikan cerita, menyusun visual, dan membangun hasil akhir.</p>
            </div>
            <div className="project-state"><span className="state-dot" /> PROJECT FOUNDATION</div>
          </section>

          <section className="workspace-grid">
            <div className="preview-column">
              <div className="section-line">
                <span className="section-label">01 — CANVAS PREVIEW</span>
                <span className="muted-label">SOURCE PROFILE · V6.2</span>
              </div>
              <div className="preview-frame">
                <div className="preview-topline"><span>ARMUZZ / INTRO</span><span>16:9 · 1280 × 720</span></div>
                <div className="preview-center">
                  <div className="preview-kicker">A PERSONAL INTRODUCTION</div>
                  <div className="preview-title">WHO IS<br /><strong>ARMUZZ<span>?</span></strong></div>
                  <div className="preview-rule" />
                  <div className="preview-caption">THINK. CREATE. EXPLORE.</div>
                </div>
                <div className="preview-bottomline"><span>PREVIEW PLACEHOLDER</span><span>00:00 / 00:24</span></div>
              </div>
              <div className="preview-note"><span className="note-icon">i</span> Tampilan ini adalah kanvas awal. File video sumber belum dimuat ke workspace.</div>

              <div className="section-line timeline-heading">
                <span className="section-label">02 — SEQUENCE MAP</span>
                <span className="muted-label">STRUCTURE REFERENCE · NOT EDITABLE YET</span>
              </div>
              <div className="sequence-panel">
                <div className="sequence-ruler"><span>00:00</span><span>00:06</span><span>00:12</span><span>00:18</span><span>00:24</span></div>
                <div className="sequence-track">
                  <div className="track-label">VISUAL</div>
                  <div className="track-content">
                    {sequence.map((item) => (
                      <div className="sequence-block" style={{ width: item.width }} key={item.title}>
                        <b>{item.title}</b><span>{item.subtitle}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="sequence-track audio-track">
                  <div className="track-label">AUDIO</div>
                  <div className="track-content">
                    <div className="audio-placeholder"><span>♫</span> MUSIC BED · COMA X LEGENDARIS <small>00:00 — 00:24</small></div>
                  </div>
                </div>
              </div>
            </div>

            <aside className="inspector">
              <div className="section-line"><span className="section-label">PROJECT INSPECTOR</span><span className="muted-label">DETAILS</span></div>
              <div className="inspector-card">
                <div className="card-kicker">CURRENT PROJECT</div>
                <h2>Armuzz Intro</h2>
                <p>Personal identity film · Social introduction</p>
                <div className="card-divider" />
                <div className="stat-list">
                  {projectStats.map((stat) => (
                    <div className="stat-row" key={stat.label}>
                      <div><span>{stat.label}</span><small>{stat.detail}</small></div>
                      <strong>{stat.value}</strong>
                    </div>
                  ))}
                </div>
              </div>

              <div className="inspector-card output-card">
                <div className="card-kicker">OUTPUT DIRECTION</div>
                <div className="output-row"><span className="format-icon">▰</span><div><b>Landscape master</b><small>16:9 · 1280 × 720</small></div><span className="format-status">SOURCE</span></div>
                <div className="output-row"><span className="format-icon portrait-icon">▯</span><div><b>TikTok / Reels</b><small>9:16 · 1080 × 1920</small></div><span className="format-status pending">ADAPT</span></div>
              </div>

              <div className="next-card">
                <div className="next-icon">↗</div>
                <div className="card-kicker">NEXT WORKFLOW</div>
                <h3>Connect the edit room</h3>
                <p>Langkah berikutnya: hubungkan aset media dan bangun kontrol timeline yang benar-benar bisa dipakai.</p>
                <div className="workflow-status"><span className="status-ring" /> EDITOR ENGINE NOT CONNECTED</div>
              </div>
            </aside>
          </section>

          <footer className="footer-line">
            <span>ARMUZZ STUDIO <b>·</b> BUILT FOR THE STORY</span>
            <span>SAFE BRANCH · <strong>ronda/armuzz-studio</strong></span>
          </footer>
        </div>
      </section>
    </main>
  );
}

export default App;
