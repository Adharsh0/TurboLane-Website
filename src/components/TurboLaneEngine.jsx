import React, { useState } from 'react';
import {
  FaTerminal, FaCopy, FaCheck, FaRocket, FaBrain, FaCode,
  FaNetworkWired, FaSave, FaServer, FaDownload, FaLinux, FaApple, FaWindows,
} from 'react-icons/fa';
import './TurboLaneEngine.css';

// ── CodeBlock ─────────────────────────────────────────────────────────────────
function CodeBlock({ code, language = 'bash' }) {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="code-block">
      <div className="code-header">
        <span className="code-lang">{language}</span>
        <button className="copy-btn" onClick={handleCopy}>
          {copied ? <><FaCheck /> Copied!</> : <><FaCopy /> Copy</>}
        </button>
      </div>
      <pre className={`code-content${language === 'bash' ? ' bash-terminal' : ''}`}>
        <code>{code}</code>
      </pre>
    </div>
  );
}

// ── Helpers ───────────────────────────────────────────────────────────────────
function IC({ children }) {
  return (
    <code style={{
      fontFamily: "'JetBrains Mono','Fira Code',monospace",
      fontSize: '0.82rem',
      background: '#f0f9ff',
      color: '#0078d4',
      padding: '1px 6px',
      borderRadius: 4,
      border: '1px solid #bae6fd',
    }}>
      {children}
    </code>
  );
}

function Prose({ children, style }) {
  return (
    <p className="panel-desc" style={{ marginBottom: 16, ...style }}>
      {children}
    </p>
  );
}

function Divider() {
  return <div style={{ height: 1, background: '#e2e8f0', margin: '24px 0' }} />;
}

function StepLabel({ n, children }) {
  return (
    <div style={{
      display: 'flex', alignItems: 'center', gap: 10,
      marginBottom: 10, marginTop: n > 1 ? 24 : 0,
    }}>
      <span style={{
        width: 24, height: 24, borderRadius: '50%',
        background: 'linear-gradient(135deg,#0078d4,#16c79a)',
        color: '#fff', fontWeight: 700, fontSize: '0.78rem',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        flexShrink: 0,
      }}>{n}</span>
      <span style={{ fontWeight: 600, color: '#1e293b', fontSize: '0.9rem' }}>{children}</span>
    </div>
  );
}

function SubTabs({ tabs, active, onChange }) {
  return (
    <div className="lang-switcher">
      {tabs.map((t, i) => (
        <button
          key={i}
          className={`lang-btn${active === i ? ' active' : ''}`}
          onClick={() => onChange(i)}
        >
          {t.icon}
          <span>{t.label}</span>
        </button>
      ))}
    </div>
  );
}

function SimpleTable({ head, rows }) {
  return (
    <div style={{ overflowX: 'auto', borderRadius: 10, border: '1px solid #e2e8f0', marginTop: 16 }}>
      <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.875rem' }}>
        <thead>
          <tr>
            {head.map((h, i) => (
              <th key={i} style={{
                background: '#f8fafc', color: '#64748b',
                textTransform: 'uppercase', fontSize: '0.72rem',
                letterSpacing: '0.08em', padding: '11px 16px',
                textAlign: 'left', borderBottom: '1px solid #e2e8f0',
                fontFamily: 'inherit', fontWeight: 600,
              }}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, ri) => (
            <tr key={ri} style={{ background: ri % 2 === 0 ? '#fff' : '#f8fafc' }}>
              {row.map((cell, ci) => (
                <td key={ci} style={{
                  padding: '12px 16px',
                  borderBottom: ri < rows.length - 1 ? '1px solid #f1f5f9' : 'none',
                  color: ci === 0 ? '#0078d4' : '#475569',
                  fontFamily: ci === 0 ? "'JetBrains Mono','Fira Code',monospace" : 'inherit',
                  fontSize: ci === 0 ? '0.82rem' : '0.875rem',
                  verticalAlign: 'top',
                }}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// ══════════════════════════════════════════════════════════════════════════════
// TAB BODIES
// ══════════════════════════════════════════════════════════════════════════════

function OverviewTab() {
  return (
    <>
      <Prose>
        A single TCP connection rarely saturates available bandwidth. Using N parallel streams
        multiplies throughput — but too many causes congestion. TurboLane uses a Q-Learning
        agent to find the right N dynamically, reading all network signals directly from your
        active sockets via the OS TCP stack.
      </Prose>
      <CodeBlock language="python" code={`from turbolane import TurboLaneEngine

engine = TurboLaneEngine(mode="edge")`} />
      <Divider />
      <p style={{ fontWeight: 700, color: '#1e293b', fontSize: '1rem', marginBottom: 16 }}>Modes</p>
      <div className="mode-grid">
        {[
          { name: '"edge"',      alias: null,               desc: 'Public internet — uploads, downloads, cloud transfers.' },
          { name: '"federated"', alias: null,               desc: 'Data centre interconnects — low latency, high bandwidth.' },
          { name: '"client"',    alias: 'alias for "edge"', desc: 'Convenience alias — same behaviour as edge mode.' },
        ].map(m => (
          <div className="mode-card" key={m.name}>
            <span className="mode-name">{m.name}</span>
            {m.alias && (
              <span style={{
                display: 'block', fontSize: '0.78rem', color: '#94a3b8',
                marginBottom: 6, fontFamily: "'JetBrains Mono',monospace",
              }}>{m.alias}</span>
            )}
            <span className="mode-desc">{m.desc}</span>
          </div>
        ))}
      </div>
    </>
  );
}

function InstallTab() {
  return (
    <>
      <Prose>Install the TurboLane Engine and optional CLI tools via pip.</Prose>
      <StepLabel n={1}>Engine</StepLabel>
      <CodeBlock language="bash" code={`pip install turbolane-engine`} />
      <StepLabel n={2}>CLI (optional — required for file transfer commands)</StepLabel>
      <CodeBlock language="bash" code={`pip install turbolane-cli`} />
    </>
  );
}

function IntegrationTab() {
  const [sub, setSub] = useState(0);

  const subtabs = [
    {
      label: 'Attach Sockets', icon: <FaNetworkWired />,
      desc: 'After opening your parallel transfer sockets, pass them to the engine once. TurboLane reads RTT and packet loss from the OS TCP stack automatically.',
      lang: 'python',
      code: `engine.attach_sockets([sock1, sock2, sock3, sock4])`,
    },
    {
      label: 'Transfer Loop', icon: <FaCode />,
      desc: 'Run the engine inside your transfer loop. Call report_bytes(), decide(), and learn() on each iteration.',
      lang: 'python',
      code: `while transferring:
    bytes_sent = send_batch()             # your transfer logic

    engine.report_bytes(bytes_sent)       # bytes transferred since last call
    streams = engine.decide()             # engine returns recommended stream count
    engine.learn()                        # engine updates from what it observed

    adjust_parallel_streams(streams)      # open/close sockets to match

engine.save()                             # persist learned state to disk`,
    },
    {
      label: 'Update Sockets', icon: <FaServer />,
      desc: 'After opening or closing sockets to match the new stream count, hand the updated list back to the engine.',
      lang: 'python',
      code: `# After opening or closing sockets to match the new stream count:
engine.update_sockets(new_socket_list)`,
    },
    {
      label: 'Full Example', icon: <FaRocket />,
      desc: 'A complete end-to-end integration showing socket management, parallel sending with threads, and engine lifecycle.',
      lang: 'python',
      code: `import socket
import threading
from turbolane import TurboLaneEngine

engine = TurboLaneEngine(mode="edge")

def open_sockets(host, port, n):
    sockets = []
    for _ in range(n):
        s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
        s.connect((host, port))
        sockets.append(s)
    return sockets

def transfer(host, port, data):
    streams = engine.current_connections
    sockets = open_sockets(host, port, streams)
    engine.attach_sockets(sockets)

    chunk_size = len(data) // streams
    offset = 0

    while offset < len(data):
        streams = engine.decide()

        chunks = []
        for i in range(streams):
            chunk = data[offset : offset + chunk_size]
            if not chunk:
                break
            chunks.append((sockets[i % len(sockets)], chunk))
            offset += chunk_size

        total_bytes, lock = 0, threading.Lock()

        def send(sock, chunk):
            nonlocal total_bytes
            sock.sendall(chunk)
            with lock:
                total_bytes += len(chunk)

        threads = [threading.Thread(target=send, args=(s, c)) for s, c in chunks]
        for t in threads: t.start()
        for t in threads: t.join()

        engine.report_bytes(total_bytes)
        engine.learn()

    engine.save()
    for s in sockets:
        s.close()`,
    },
  ];

  const cur = subtabs[sub];

  return (
    <>
      <Prose>
        Embed TurboLane Engine into your Python transfer code in three steps:
        attach sockets → run loop → update on change.
      </Prose>
      <SubTabs tabs={subtabs} active={sub} onChange={setSub} />
      <Prose style={{ marginBottom: 16 }}>{cur.desc}</Prose>
      <CodeBlock language={cur.lang} code={cur.code} />

      {sub === 1 && (
        <>
          <Divider />
          <p style={{ fontWeight: 700, color: '#1e293b', fontSize: '0.95rem', marginBottom: 8 }}>
            What the Engine Collects Automatically
          </p>
          <Prose>
            Once sockets are attached, TurboLane reads everything from the OS — no extra work needed from you.
          </Prose>
          <SimpleTable
            head={['Metric', 'Source']}
            rows={[
              ['Throughput',   <span>Computed from <IC>report_bytes()</IC> ÷ elapsed time</span>],
              ['RTT',          <span><IC>TCP_INFO.tcpi_rtt</IC> (Linux / macOS) · <IC>SIO_TCP_INFO.RttUs</IC> (Windows)</span>],
              ['Packet Loss',  <span><IC>TCP_INFO.tcpi_total_retrans</IC> (Linux / macOS) · <IC>SIO_TCP_INFO.RetransmittedPackets</IC> (Windows)</span>],
            ]}
          />
        </>
      )}
    </>
  );
}

function FileTransferTab() {
  const [sub, setSub] = useState(0);

  const subtabs = [
    {
      label: '1. Install CLI', icon: <FaTerminal />,
      desc: 'Install turbolane-cli on both the sending and receiving machines.',
      lang: 'bash',
      code: `# Run on both sender and receiver
pip install turbolane-cli`,
    },
    {
      label: '2. Start Server', icon: <FaServer />,
      desc: 'On the receiving machine, start the server. It will listen on the specified port and write received files to --output-dir.',
      lang: 'bash',
      code: `# On the receiving machine
turbolane-server start --port 9000 --output-dir ./received`,
    },
    {
      label: '3. Send File', icon: <FaDownload />,
      desc: "On the sending machine, use turbolane-server send with the receiver's IP address.",
      lang: 'bash',
      code: `# On the sending machine
turbolane-server send /path/to/your/file \\
    --host RECEIVER_IP_ADDRESS \\
    --port 9000 \\
    --streams 4 \\
    --min-streams 1 \\
    --max-streams 8 \\
    --model-dir ./models \\
    --interval 2.0

# Example with actual values:
turbolane-server send /data/large_dataset.tar \\
    --host 192.168.1.50 \\
    --port 9000 \\
    --streams 4 \\
    --min-streams 1 \\
    --max-streams 8 \\
    --model-dir ./models \\
    --interval 2.0`,
    },
    {
      label: 'Quick Example', icon: <FaRocket />,
      desc: 'A minimal two-machine example — receiver at 192.168.1.50, sending data.txt.',
      lang: 'bash',
      code: `# Receiver (IP: 192.168.1.50):
turbolane-server start --port 9000 --output-dir ./received

# Sender:
turbolane-server send data.txt \\
    --host 192.168.1.50 \\
    --port 9000 \\
    --streams 4 \\
    --min-streams 4 \\
    --max-streams 8`,
    },
  ];

  const cur = subtabs[sub];

  return (
    <>
      <Prose>
        Transfer files over the network using the TurboLane CLI.
        Install <IC>turbolane-cli</IC> on both machines first.
      </Prose>
      <SubTabs tabs={subtabs} active={sub} onChange={setSub} />
      <Prose style={{ marginBottom: 16 }}>{cur.desc}</Prose>
      <CodeBlock language={cur.lang} code={cur.code} />
    </>
  );
}

function StorageTab() {
  return (
    <>
      <Prose>
        TurboLane saves its learned Q-table to the OS user data directory after each{' '}
        <IC>engine.save()</IC> call. The path is chosen automatically based on your OS.
      </Prose>
      <SimpleTable
        head={['OS', 'Path']}
        rows={[
          [<span><FaLinux style={{ marginRight: 6, verticalAlign: 'middle' }} />Linux</span>,
            '~/.local/share/TurboLane/models/<profile>'],
          [<span><FaApple style={{ marginRight: 6, verticalAlign: 'middle' }} />macOS</span>,
            '~/Library/Application Support/TurboLane/models/<profile>'],
          [<span><FaWindows style={{ marginRight: 6, verticalAlign: 'middle' }} />Windows</span>,
            String.raw`%LOCALAPPDATA%\TurboLane\models\<profile>`],
          ['Fallback', './.turbolane/models/<profile>'],
        ]}
      />
      <Divider />
      <p style={{ fontWeight: 700, color: '#1e293b', fontSize: '0.95rem', marginBottom: 10 }}>
        Custom Path
      </p>
      <CodeBlock language="python" code={`engine = TurboLaneEngine(mode="edge", model_dir="/your/path/models/edge")`} />
    </>
  );
}

// ══════════════════════════════════════════════════════════════════════════════
// MAIN COMPONENT
// ══════════════════════════════════════════════════════════════════════════════

const TABS = [
  { id: 'overview',     label: 'Overview',      icon: <FaBrain /> },
  { id: 'install',      label: 'Install',       icon: <FaTerminal /> },
  { id: 'integration',  label: 'Integration',   icon: <FaCode /> },
  { id: 'filetransfer', label: 'File Transfer',  icon: <FaServer /> },
  { id: 'storage',      label: 'Model Storage', icon: <FaSave /> },
];

const TAB_META = {
  overview:     { title: 'RL-based Engine for Optimal Parallel TCP Streams',  desc: 'TurboLane uses a Q-Learning agent to dynamically find the optimal number of parallel TCP streams for any network transfer.' },
  install:      { title: 'Install TurboLane',                                 desc: 'Get up and running with pip. Python 3.10 or higher required on Linux, macOS, and Windows.' },
  integration:  { title: 'Integration Guide',                                 desc: 'Embed TurboLane Engine into your Python application in three steps.' },
  filetransfer: { title: 'File Transfer via CLI',                             desc: 'Transfer files between machines over the network using the turbolane-cli tool.' },
  storage:      { title: 'Model Storage',                                     desc: 'Where TurboLane persists its learned Q-table between sessions.' },
};

const TAB_BODY = {
  overview:     <OverviewTab />,
  install:      <InstallTab />,
  integration:  <IntegrationTab />,
  filetransfer: <FileTransferTab />,
  storage:      <StorageTab />,
};

export default function TurboLaneEngine() {
  const [activeTab, setActiveTab] = useState('overview');
  const meta = TAB_META[activeTab];

  return (
    <section id="turbolane-engine" className="engine-section">
      <div className="engine-bg-glow" />

      <div className="engine-container">

        {/* Header */}
        <div className="engine-header">
          <div className="engine-badge">
            <FaBrain className="badge-icon" />
            <span>turbolane-engine</span>
          </div>
          <h2 className="engine-title">
            <span className="gradient-text">TurboLane Engine</span>
          </h2>
          <p className="engine-subtitle">
            RL-based engine that finds the optimal number of parallel TCP streams for any network transfer.
          </p>
          <div className="engine-requirements">
            <code className="install-cmd">pip install turbolane-engine</code>
            <div className="req-badges">
              <span className="req-badge">Python ≥ 3.10</span>
              <span className="req-badge">Linux</span>
              <span className="req-badge">macOS</span>
              <span className="req-badge">Windows</span>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="engine-tabs">
          {TABS.map(t => (
            <button
              key={t.id}
              className={`engine-tab${activeTab === t.id ? ' active' : ''}`}
              onClick={() => setActiveTab(t.id)}
            >
              {t.icon}
              <span>{t.label}</span>
            </button>
          ))}
        </div>

        {/* Panel */}
        <div className="engine-panel">
          <div className="panel-intro">
            <h3 className="panel-title">{meta.title}</h3>
            <p className="panel-desc">{meta.desc}</p>
          </div>
          {TAB_BODY[activeTab]}
        </div>

        {/* License */}
        <div className="license-notice">
          <span className="license-text">Proprietary — TurboLane Team</span>
        </div>

        {/* CTA */}
        <div className="engine-cta">
          <a
            href="https://github.com/Sijosaju/TurboLane-File-Transfer.git"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            <FaCode /> View on GitHub
          </a>
        </div>

      </div>
    </section>
  );
}