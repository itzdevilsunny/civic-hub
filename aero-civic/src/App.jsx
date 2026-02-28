import React, { useState, useEffect } from 'react';
import {
  Plane, Shield, Vote, Scale, Building2, Map, Handshake, Users, FileText,
  Activity, ArrowRight, Satellite, Wind, Zap, Fingerprint, Lock, ChevronRight,
  BarChart, Globe, Radio, Database, Triangle, CloudLightning, ShieldCheck,
  CheckCircle2, Clock
} from 'lucide-react';

// --- MAIN APP COMPONENT --- //
export default function App() {
  const [currentView, setCurrentView] = useState('landing'); // 'landing' or 'dashboard'
  const [activeTab, setActiveTab] = useState('citizens'); // Default dashboard tab

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-cyan-500/30 overflow-hidden relative">
      {/* Background Ambience */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-900/40 rounded-full blur-[120px] mix-blend-screen animate-float-slow"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-cyan-900/40 rounded-full blur-[120px] mix-blend-screen animate-float-medium"></div>
        <div className="absolute top-[40%] left-[60%] w-[30%] h-[30%] bg-indigo-900/30 rounded-full blur-[90px] mix-blend-screen animate-float-fast"></div>

        {/* Subtle grid overlay */}
        <div className="absolute inset-0 bg-[url('https://transparenttextures.com/patterns/cubes.png')] opacity-5 mix-blend-overlay"></div>
      </div>

      <NavBar currentView={currentView} setCurrentView={setCurrentView} />

      <main className="relative z-10 pt-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pb-12 min-h-screen flex flex-col">
        {currentView === 'landing' ? (
          <LandingPage onEnter={() => setCurrentView('dashboard')} />
        ) : (
          <Dashboard activeTab={activeTab} setActiveTab={setActiveTab} />
        )}
      </main>
    </div>
  );
}

// --- NAVIGATION BAR --- //
function NavBar({ currentView, setCurrentView }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'py-2' : 'py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass rounded-full px-6 py-3 flex items-center justify-between border-b border-cyan-900/30">
          <div className="flex items-center gap-3 cursor-pointer group" onClick={() => setCurrentView('landing')}>
            <div className="relative w-8 h-8 flex items-center justify-center bg-cyan-950 border border-cyan-500/50 rounded-lg group-hover:shadow-[0_0_15px_rgba(6,182,212,0.6)] transition-all">
              <Triangle className="w-5 h-5 text-cyan-400 group-hover:rotate-180 transition-transform duration-700" />
            </div>
            <span className="font-bold text-xl tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-500 font-mono">
              AEROCIVIC
            </span>
          </div>

          <div className="flex items-center gap-4">
            {currentView === 'dashboard' ? (
              <button
                onClick={() => setCurrentView('landing')}
                className="text-sm font-medium text-slate-400 hover:text-cyan-300 transition-colors"
              >
                Exit Uplink
              </button>
            ) : (
              <button
                onClick={() => setCurrentView('dashboard')}
                className="group relative px-6 py-2 bg-transparent text-cyan-400 font-medium text-sm tracking-wider uppercase overflow-hidden rounded-full border border-cyan-500/50 hover:bg-cyan-950/50 transition-all duration-300"
              >
                <div className="absolute inset-0 w-full h-full bg-cyan-400/10 group-hover:bg-cyan-400/20 transition-all"></div>
                <span className="relative flex items-center gap-2">
                  <Fingerprint className="w-4 h-4" /> Auth Protocol
                </span>
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

// --- LANDING PAGE --- //
function LandingPage({ onEnter }) {
  return (
    <div className="flex flex-col items-center justify-center flex-grow text-center animate-in fade-in duration-1000 mt-10 md:mt-20">
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-800/60 bg-cyan-950/40 text-cyan-300 text-xs font-mono mb-8 uppercase tracking-widest backdrop-blur-sm">
        <Radio className="w-3 h-3 animate-pulse text-cyan-400" />
        Global Broadcast Active
      </div>

      <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tighter mb-6 relative">
        <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-b from-white via-slate-200 to-slate-500">
          DAWN OF THE
        </span>
        <br />
        <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-400 text-glow">
          ANTI-GRAVITY ERA
        </span>
      </h1>

      <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-300 font-light mb-12 leading-relaxed">
        Humanity has taken to the skies. The <strong className="text-cyan-400 font-semibold">AeroCivic Authority</strong> oversees the safe, equitable, and democratic integration of levitation technology into daily life. Constructing the new pillars of aerial governance.
      </p>

      <button
        onClick={onEnter}
        className="group relative w-64 h-16 flex items-center justify-center gap-3 bg-cyan-600 hover:bg-cyan-500 text-white font-bold text-lg rounded-full overflow-hidden shadow-[0_0_40px_rgba(6,182,212,0.4)] hover:shadow-[0_0_60px_rgba(6,182,212,0.6)] transition-all duration-300 transform hover:-translate-y-1"
      >
        <span className="relative z-10 flex items-center gap-2">
          Enter Citizen Dashboard <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </span>
        {/* Animated background swept */}
        <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-cyan-500 to-blue-600 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-out"></div>
      </button>

      <div className="mt-24 grid grid-cols-1 sm:grid-cols-3 gap-6 w-full max-w-4xl opacity-80">
        <LandingStat icon={<Globe />} value="Sec 7-9" label="Active Airspace" />
        <LandingStat icon={<Users />} value="14.2M" label="Registered Citizens" />
        <LandingStat icon={<Activity />} value="99.9%" label="Lev-Core Stability" />
      </div>
    </div>
  );
}

function LandingStat({ icon, value, label }) {
  return (
    <div className="glass-card flex flex-col items-center justify-center p-6 rounded-2xl">
      <div className="text-cyan-400 mb-3 bg-cyan-950/50 p-3 rounded-full">{icon}</div>
      <div className="text-2xl font-bold text-white font-mono">{value}</div>
      <div className="text-xs text-slate-400 uppercase tracking-widest">{label}</div>
    </div>
  );
}

// --- DASHBOARD (THE CORE) --- //
function Dashboard({ activeTab, setActiveTab }) {
  const tabs = [
    { id: 'citizens', name: 'Digital Citizens', icon: <Satellite className="w-4 h-4" /> },
    { id: 'democracy', name: 'Sky-Democracy', icon: <Vote className="w-4 h-4" /> },
    { id: 'law', name: 'Sky Law Petitions', icon: <Scale className="w-4 h-4" /> },
    { id: 'services', name: 'Aero-Services', icon: <Plane className="w-4 h-4" /> },
    { id: 'collab', name: 'Joint Ventures', icon: <Handshake className="w-4 h-4" /> },
  ];

  return (
    <div className="flex flex-col lg:flex-row gap-8 animate-in slide-in-from-bottom-8 duration-700 mt-4">
      {/* Sidebar Navigation */}
      <aside className="lg:w-1/4 flex flex-col gap-4">
        <div className="glass-card rounded-2xl p-6">
          <div className="flex items-center gap-4 mb-8 pb-6 border-b border-slate-700/50">
            <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-cyan-500 to-blue-600 p-[2px]">
              <div className="w-full h-full bg-slate-900 rounded-full flex items-center justify-center border-2 border-slate-900">
                <img src="https://api.dicebear.com/7.x/bottts/svg?seed=AeroUser&backgroundColor=transparent" alt="Avatar" className="w-full h-full rounded-full" />
              </div>
            </div>
            <div>
              <h2 className="text-lg font-bold text-white">CITIZEN_4920</h2>
              <p className="text-xs text-cyan-400 font-mono tracking-wider">Level 3 Clearance</p>
            </div>
          </div>

          <nav className="flex flex-col gap-2">
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 text-sm font-medium border ${activeTab === tab.id
                    ? 'bg-cyan-900/40 text-cyan-300 border-cyan-500/50 shadow-[0_0_15px_rgba(6,182,212,0.2)]'
                    : 'bg-transparent text-slate-400 border-transparent hover:bg-slate-800/50 hover:text-slate-200'
                  }`}
              >
                {tab.icon}
                {tab.name}
                {activeTab === tab.id && <ChevronRight className="w-4 h-4 ml-auto text-cyan-500" />}
              </button>
            ))}
          </nav>
        </div>

        {/* System Status Mini-Card */}
        <div className="glass-card rounded-2xl p-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Zap className="w-5 h-5 text-amber-400 animate-pulse" />
            <div>
              <p className="text-xs text-slate-400">Grid Status</p>
              <p className="text-sm font-bold text-white">NOMINAL</p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-xs text-slate-400">Atmosphere</p>
            <p className="text-sm font-bold text-cyan-400">STABLE</p>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <section className="lg:w-3/4">
        {activeTab === 'citizens' && <TabCitizens />}
        {activeTab === 'democracy' && <TabDemocracy />}
        {activeTab === 'law' && <TabLaw />}
        {activeTab === 'services' && <TabServices />}
        {activeTab === 'collab' && <TabCollab />}
      </section>
    </div>
  );
}

// --- ACTIVE TAB COMPONENTS --- //

// 1. Digital Citizens & Aerial Rights
function TabCitizens() {
  const [privacyActive, setPrivacyActive] = useState(true);

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div className="mb-8">
        <h2 className="text-3xl font-black text-white mb-2 font-mono tracking-tight flex items-center gap-3">
          <Shield className="text-cyan-500 w-8 h-8" /> DIGITAL CITIZEN DECK
        </h2>
        <p className="text-slate-400">Managing digital footprints and physical rights in 3D urban space.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Spatial Privacy Shield */}
        <div className="glass-card p-6 rounded-2xl relative overflow-hidden group">
          <div className="absolute -right-10 -top-10 w-40 h-40 bg-indigo-500/10 rounded-full blur-[40px] group-hover:bg-indigo-500/20 transition-all"></div>
          <div className="flex justify-between items-start mb-6">
            <div>
              <h3 className="font-bold text-white text-lg flex items-center gap-2"><Lock className="w-4 h-4 text-indigo-400" /> Spatial Privacy Shield</h3>
              <p className="text-xs text-slate-400 mt-1">Blocks unauthorized overhead drone scans.</p>
            </div>
            {/* Toggle Switch */}
            <button
              onClick={() => setPrivacyActive(!privacyActive)}
              className={`w-14 h-7 rounded-full p-1 transition-colors duration-300 ease-in-out flex ${privacyActive ? 'bg-cyan-500 justify-end' : 'bg-slate-700 justify-start'}`}
            >
              <div className="bg-white w-5 h-5 rounded-full shadow-md"></div>
            </button>
          </div>
          <div className={`p-4 rounded-xl border ${privacyActive ? 'bg-indigo-950/40 border-indigo-500/30' : 'bg-slate-900/40 border-slate-700/50'} transition-all`}>
            <div className="flex items-center gap-3">
              <ShieldCheck className={`w-8 h-8 ${privacyActive ? 'text-indigo-400' : 'text-slate-500'}`} />
              <div>
                <p className="text-sm font-bold text-slate-200">Status: {privacyActive ? 'ACTIVE' : 'DISABLED'}</p>
                <p className="text-xs text-slate-400">Shield altitude set to 400ft ceiling.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Anti-Grav Tech Access Quotas */}
        <div className="glass-card p-6 rounded-2xl">
          <h3 className="font-bold text-white text-lg flex items-center gap-2 mb-4"><Zap className="w-4 h-4 text-amber-400" /> Anti-Grav Energy Quota</h3>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between text-xs mb-1">
                <span className="text-slate-400">Monthly Levitation Allowance</span>
                <span className="text-cyan-400 font-mono">145 / 200 kWh</span>
              </div>
              <div className="w-full bg-slate-800 rounded-full h-2">
                <div className="bg-gradient-to-r from-cyan-500 to-blue-500 h-2 rounded-full shadow-[0_0_10px_rgba(6,182,212,0.5)]" style={{ width: '72.5%' }}></div>
              </div>
            </div>
            <p className="text-xs text-slate-500 border-l-2 border-slate-700 pl-3">
              Subsidized by the Equitable Airspace Act to ensure mobility rights for all sectors.
            </p>
          </div>
        </div>

        {/* Aerial ID Clearance */}
        <div className="md:col-span-2 glass-card p-0 rounded-2xl overflow-hidden border-cyan-900/30">
          <div className="p-6 bg-gradient-to-r from-slate-900 to-slate-900/50">
            <h3 className="font-bold text-white text-lg flex items-center gap-2 mb-2"><Fingerprint className="w-4 h-4 text-emerald-400" /> Aerial ID & Flight Clearance</h3>
            <p className="text-sm text-slate-400 mb-6">Biometric clearance valid for personal hover-vehicles up to Class B restricted zones.</p>

            <div className="flex flex-col sm:flex-row gap-4 items-center sm:items-stretch">
              <div className="p-4 bg-slate-950/80 rounded-xl border border-emerald-900/50 flex-1 w-full relative overflow-hidden">
                <div className="absolute top-0 right-0 w-16 h-16 bg-emerald-500/10 rounded-bl-full"></div>
                <p className="text-xs text-slate-500 uppercase">Clearance Level</p>
                <p className="text-2xl font-black text-emerald-400 font-mono mt-1">CLASS B</p>
                <div className="mt-4 flex items-center gap-2 text-xs text-slate-300"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> Retinal Scan Verified</div>
              </div>

              <div className="p-4 bg-slate-950/80 rounded-xl border border-slate-800 flex-1 w-full">
                <p className="text-xs text-slate-500 uppercase">Max Authorized Altitude</p>
                <p className="text-2xl font-black text-white font-mono mt-1">12,500 <span className="text-sm text-slate-500">FT</span></p>
                <div className="w-full h-[1px] bg-slate-800 my-4"></div>
                <div className="flex justify-between text-xs">
                  <span className="text-slate-500">Expiration</span>
                  <span className="text-slate-300 font-mono">2029-11-23</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// 2. Sky-Democracy
function TabDemocracy() {
  const referendums = [
    { id: 'Prop-44', title: 'Expand Commercial Hover-Lanes in Sector 7', desc: 'Permits heavy freighter transit through residential upper-atmosphere corridors to ease supply chain delays.', daysLeft: 2, forVote: 42, against: 58 },
    { id: 'Prop-45', title: 'Maximum Altitude Limits for Private Vehicles', desc: 'Capping non-commercial levitation devices at 5,000 feet to protect migratory drone routes.', daysLeft: 5, forVote: 65, against: 35 }
  ];

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div className="mb-8 flex justify-between items-end">
        <div>
          <h2 className="text-3xl font-black text-white mb-2 font-mono tracking-tight flex items-center gap-3">
            <Vote className="text-emerald-500 w-8 h-8" /> SKY-DEMOCRACY
          </h2>
          <p className="text-slate-400">Continuous civic engagement regarding atmospheric policies.</p>
        </div>
        <div className="hidden sm:flex items-center gap-2 px-3 py-1 bg-red-500/10 border border-red-500/30 rounded-full text-red-400 text-xs font-bold animate-pulse">
          <Radio className="w-3 h-3" /> LIVE VOTING
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6">
        <h3 className="text-sm font-bold text-slate-500 uppercase tracking-widest border-b border-slate-800 pb-2">Active Referendums</h3>

        {referendums.map(ref => (
          <div key={ref.id} className="glass-card p-6 rounded-2xl border-l-4 border-l-emerald-500">
            <div className="flex flex-col md:flex-row justify-between gap-6">
              <div className="md:w-2/3">
                <div className="flex items-center gap-3 mb-2">
                  <span className="px-2 py-1 bg-slate-800 text-slate-300 text-xs font-mono rounded">{ref.id}</span>
                  <span className="text-xs text-amber-400 flex items-center gap-1"><Clock className="w-3 h-3" /> {ref.daysLeft} days remaining</span>
                </div>
                <h4 className="text-xl font-bold text-white mb-2">{ref.title}</h4>
                <p className="text-sm text-slate-400 leading-relaxed">{ref.desc}</p>
              </div>

              <div className="md:w-1/3 flex flex-col justify-center gap-3">
                {/* Live Polling Bar */}
                <div className="w-full flex h-3 bg-slate-800 rounded-full overflow-hidden">
                  <div className="bg-emerald-500" style={{ width: `${ref.forVote}%` }}></div>
                  <div className="bg-rose-500" style={{ width: `${ref.against}%` }}></div>
                </div>
                <div className="flex justify-between text-xs font-mono">
                  <span className="text-emerald-400">{ref.forVote}% YEA</span>
                  <span className="text-rose-400">{ref.against}% NAY</span>
                </div>

                <div className="grid grid-cols-2 gap-2 mt-2">
                  <button className="py-2 bg-slate-800 hover:bg-emerald-900/50 border border-slate-700 hover:border-emerald-500/50 rounded text-sm font-bold text-slate-300 hover:text-emerald-400 transition-colors">VOTE YEA</button>
                  <button className="py-2 bg-slate-800 hover:bg-rose-900/50 border border-slate-700 hover:border-rose-500/50 rounded text-sm font-bold text-slate-300 hover:text-rose-400 transition-colors">VOTE NAY</button>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Holographic Town Hall */}
        <div className="glass-panel p-6 rounded-2xl relative overflow-hidden mt-4 border-dashed">
          <div className="absolute inset-0 bg-blue-900/10 pointer-events-none"></div>
          <div className="flex justify-between items-center relative z-10">
            <div>
              <h3 className="font-bold text-white text-lg flex items-center gap-2"><Users className="w-5 h-5 text-blue-400" /> Holographic Town Hall</h3>
              <p className="text-sm text-slate-400 mt-1">Topic: Zenith Sector Atmospheric Density Zoning</p>
              <p className="text-xs font-mono text-blue-300 mt-2">Starts in: 04:22:10</p>
            </div>
            <button className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white text-sm font-bold rounded-lg shadow-[0_0_15px_rgba(37,99,235,0.4)] transition-colors">
              Reserve Holo-Seat
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// 3. Petition to Sky Law
function TabLaw() {
  const pipelineSteps = ['Issue Articulated', 'Legislative Filter', 'Aero-Senate Debate', 'Enacted Sky Law'];
  const currentStep = 1; // Legislative Filter

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div className="mb-8">
        <h2 className="text-3xl font-black text-white mb-2 font-mono tracking-tight flex items-center gap-3">
          <Scale className="text-amber-500 w-8 h-8" /> PETITION TO SKY LAW
        </h2>
        <p className="text-slate-400">Tracking public grievances from grassroots motions to codified legislation.</p>
      </div>

      <div className="glass-card p-6 md:p-8 rounded-2xl border-t-4 border-t-amber-500">
        <div className="flex justify-between items-start mb-6">
          <div>
            <span className="px-2 py-1 bg-amber-500/20 text-amber-400 text-xs font-mono rounded border border-amber-500/20">PETITION #809-A</span>
            <h3 className="text-xl font-bold text-white mt-3">Ban Heavy Frieghter Levitation Over Residential Zones (10PM - 6AM)</h3>
            <p className="text-sm text-slate-400 mt-2 max-w-2xl">A citizen-led initiative proposing night-time altitude restrictions on Class C transport vessels to mitigate sub-sonic rumble pollution in housing sectors.</p>
          </div>
          <div className="hidden sm:block text-right">
            <div className="text-2xl font-black text-white">1.2M</div>
            <div className="text-xs text-slate-400 uppercase">Signatures</div>
          </div>
        </div>

        {/* Pipeline Tracker */}
        <div className="mt-10 mb-4 bg-slate-900/50 p-6 rounded-xl border border-slate-700/50">
          <h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-6">Legislative Status Pipeline</h4>
          <div className="relative flex justify-between items-center w-full">
            {/* Connecting Line */}
            <div className="absolute top-1/2 left-0 w-full h-1 bg-slate-800 -translate-y-1/2 z-0"></div>
            {/* Dynamic Line */}
            <div className="absolute top-1/2 left-0 h-1 bg-amber-500 -translate-y-1/2 z-0 transition-all duration-1000" style={{ width: `${(currentStep / (pipelineSteps.length - 1)) * 100}%` }}></div>

            {/* Steps */}
            {pipelineSteps.map((step, idx) => (
              <div key={step} className="relative z-10 flex flex-col items-center gap-2 group">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center border-4 transition-colors ${idx < currentStep ? 'bg-amber-500 border-amber-900 text-slate-900' :
                    idx === currentStep ? 'bg-slate-900 border-amber-500 shadow-[0_0_15px_rgba(245,158,11,0.6)] animate-pulse' :
                      'bg-slate-900 border-slate-700'
                  }`}>
                  {idx < currentStep && <CheckCircle2 className="w-4 h-4" />}
                  {idx === currentStep && <div className="w-2 h-2 bg-amber-500 rounded-full"></div>}
                </div>
                <div className={`text-xs font-bold md:w-24 text-center ${idx <= currentStep ? 'text-amber-100' : 'text-slate-500 hidden md:block'}`}>{step}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Action Area */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="glass-card p-6 rounded-2xl flex flex-col items-center justify-center text-center group cursor-pointer border-dashed border-slate-600">
          <div className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center mb-4 group-hover:bg-amber-900/50 transition-colors">
            <FileText className="text-amber-500 w-6 h-6" />
          </div>
          <h4 className="font-bold text-white mb-2">Draft New Motion</h4>
          <p className="text-xs text-slate-400">Submit an official spatial grievance into the legislative queue.</p>
        </div>

        <div className="glass-card p-6 rounded-2xl">
          <h4 className="font-bold text-white mb-4 text-sm uppercase tracking-widest text-slate-300">Recently Enacted</h4>
          <ul className="space-y-4">
            <li className="flex gap-3 items-start">
              <div className="mt-1 w-2 h-2 bg-emerald-500 rounded-full shadow-[0_0_5px_rgba(16,185,129,0.8)]"></div>
              <div>
                <p className="text-sm text-slate-200">Sky Law #772: Public Hologram Limits</p>
                <p className="text-xs text-slate-500">Effective Dec 1</p>
              </div>
            </li>
            <li className="flex gap-3 items-start">
              <div className="mt-1 w-2 h-2 bg-emerald-500 rounded-full shadow-[0_0_5px_rgba(16,185,129,0.8)]"></div>
              <div>
                <p className="text-sm text-slate-200">Sky Law #771: Drone Speed Caps (Inner City)</p>
                <p className="text-xs text-slate-500">Effective Nov 15</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

// 4. Citizen Services
function TabServices() {
  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div className="mb-8 flex justify-between items-start">
        <div>
          <h2 className="text-3xl font-black text-white mb-2 font-mono tracking-tight flex items-center gap-3">
            <Plane className="text-indigo-400 w-8 h-8" /> AERO-SERVICES
          </h2>
          <p className="text-slate-400">Essential day-to-day levitation infrastructure and emergency dispatch.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Transit Pass */}
        <div className="glass-card p-0 rounded-2xl overflow-hidden md:col-span-2 shadow-2xl">
          <div className="h-full flex flex-col md:flex-row">
            <div className="bg-indigo-950 p-6 md:w-1/2 flex flex-col justify-between relative overflow-hidden">
              <div className="absolute -left-10 -bottom-10 opacity-10">
                <Map className="w-48 h-48 text-indigo-100" />
              </div>
              <div className="relative z-10">
                <h3 className="font-bold text-white text-lg flex items-center gap-2 mb-1"><Map className="w-4 h-4 text-indigo-400" /> Sky-Transit Pass</h3>
                <p className="text-xs text-indigo-300 uppercase tracking-widest">Global Sector Access</p>

                <div className="mt-8 space-y-4">
                  <div>
                    <p className="text-xs text-indigo-300">Current Balance</p>
                    <p className="text-3xl font-black text-white font-mono">2,450 <span className="text-sm font-normal text-indigo-300">Cr</span></p>
                  </div>
                  <button className="px-4 py-2 bg-indigo-600/50 hover:bg-indigo-500 border border-indigo-400/30 rounded text-xs text-white font-bold transition-colors">
                    Recharge Account
                  </button>
                </div>
              </div>
            </div>
            <div className="p-6 md:w-1/2 bg-slate-900/60">
              <h4 className="text-sm font-bold text-slate-300 mb-4 border-b border-slate-700 pb-2">Live Route Status</h4>
              <div className="space-y-4">
                <RouteItem name="Hyper-Line Alpha" status="ON TIME" time="2 min" color="text-emerald-400" />
                <RouteItem name="Sector 4 Local Lift" status="DELAYED" time="12 min" color="text-amber-400" />
                <RouteItem name="Orbital Excursion" status="BOARDING" time="Now" color="text-blue-400" />
              </div>
              <button className="w-full mt-6 py-2 bg-slate-800 hover:bg-slate-700 rounded text-xs text-slate-300 transition-colors flex items-center justify-center gap-2">
                View Hologram Map <ChevronRight className="w-3 h-3" />
              </button>
            </div>
          </div>
        </div>

        {/* Emergency Dispatch */}
        <div className="glass-card bg-red-950/20 border-red-900/30 p-6 rounded-2xl flex flex-col items-center justify-center text-center relative overflow-hidden group">
          <div className="absolute inset-0 bg-red-500/5 group-hover:bg-red-500/10 transition-colors"></div>
          <div className="w-20 h-20 bg-red-950/80 rounded-full border-2 border-red-500 flex items-center justify-center mb-4 shadow-[0_0_20px_rgba(239,68,68,0.4)] group-hover:scale-110 transition-transform cursor-pointer">
            <AlertTriangle className="w-10 h-10 text-red-500" />
          </div>
          <h3 className="font-bold text-white text-lg">Aero-Medic SOS</h3>
          <p className="text-xs text-red-300/70 mt-2">Dispatches nearest certified medical drone to your spatial coordinates instantly.</p>
        </div>

        {/* Levitation License */}
        <div className="glass-card p-6 rounded-2xl lg:col-span-3 border-l-4 border-l-slate-400 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center">
              <FileText className="w-6 h-6 text-slate-300" />
            </div>
            <div>
              <h3 className="font-bold text-white">Lev-Mod Inspection Due</h3>
              <p className="text-xs text-slate-400 text-slate-400">Personal vehicle safety inspection required by end of month.</p>
            </div>
          </div>
          <button className="px-5 py-2 glass hover:bg-slate-700 text-white text-sm font-bold rounded-lg transition-colors">
            Book Bay
          </button>
        </div>
      </div>
    </div>
  );
}

function RouteItem({ name, status, time, color }) {
  return (
    <div className="flex justify-between items-center text-sm">
      <span className="text-slate-300 font-medium">{name}</span>
      <div className="text-right">
        <div className={`font-mono text-xs font-bold ${color}`}>{status}</div>
        <div className="text-xs text-slate-500">{time}</div>
      </div>
    </div>
  );
}

// 5. Public / Private Collaboration
function TabCollab() {
  const projects = [
    { name: 'Skyport Alpha Hub', corp: 'AeroCorp Industries', gov: 'Ministry of Transit', investment: '¥4.2B', status: 'In Progress', progress: 68 },
    { name: 'Ozone Scrubber Network', corp: 'AtmosClear Inc.', gov: 'Dept of Environment', investment: '¥1.8B', status: 'Operational', progress: 100 }
  ];

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div className="mb-8">
        <h2 className="text-3xl font-black text-white mb-2 font-mono tracking-tight flex items-center gap-3">
          <Building2 className="text-fuchsia-500 w-8 h-8" /> JOINT VENTURES LEDGER
        </h2>
        <p className="text-slate-400">Transparent oversight of public-private infrastructural synergy.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

        {/* Transparency Metrics */}
        <div className="glass-card p-6 rounded-2xl lg:col-span-2 bg-gradient-to-br from-slate-900/50 to-fuchsia-950/10">
          <h3 className="font-bold text-white mb-4 text-sm uppercase tracking-widest flex items-center gap-2 border-b border-fuchsia-900/30 pb-2">
            <BarChart className="w-4 h-4 text-fuchsia-400" /> Transparency Metrics (Q4)
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="p-4 bg-slate-900/60 rounded-xl text-center border border-slate-700/50 hover:border-fuchsia-500/30 transition-colors">
              <p className="text-2xl font-black text-white font-mono">14</p>
              <p className="text-xs text-slate-400 mt-1">Active PPPs</p>
            </div>
            <div className="p-4 bg-slate-900/60 rounded-xl text-center border border-slate-700/50 hover:border-fuchsia-500/30 transition-colors">
              <p className="text-2xl font-black text-white font-mono">¥6.0B</p>
              <p className="text-xs text-slate-400 mt-1">Private Capital Leveraged</p>
            </div>
            <div className="p-4 bg-slate-900/60 rounded-xl text-center border border-slate-700/50 hover:border-fuchsia-500/30 transition-colors">
              <p className="text-2xl font-black text-emerald-400 font-mono">-12%</p>
              <p className="text-xs text-slate-400 mt-1">Emission Reduction</p>
            </div>
            <div className="p-4 bg-slate-900/60 rounded-xl text-center border border-slate-700/50 hover:border-fuchsia-500/30 transition-colors">
              <p className="text-2xl font-black text-amber-400 font-mono">98.2%</p>
              <p className="text-xs text-slate-400 mt-1">Public Audit Score</p>
            </div>
          </div>
        </div>

        {/* Project Cards */}
        {projects.map((proj, i) => (
          <div key={i} className="glass-card p-6 rounded-2xl border-t-4 border-t-fuchsia-500">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h4 className="font-bold text-white text-lg">{proj.name}</h4>
                <div className="flex items-center gap-2 mt-2 text-xs text-slate-400">
                  <span className="text-fuchsia-300 font-medium">{proj.corp}</span>
                  <Handshake className="w-3 h-3" />
                  <span className="text-blue-300 font-medium">{proj.gov}</span>
                </div>
              </div>
              <span className={`px-2 py-1 rounded text-[10px] font-bold tracking-widest uppercase ${proj.progress === 100 ? 'bg-emerald-500/20 text-emerald-400' : 'bg-amber-500/20 text-amber-400'}`}>
                {proj.status}
              </span>
            </div>

            <div className="space-y-2 mt-6 bg-slate-900/50 p-4 rounded-xl">
              <div className="flex justify-between text-xs">
                <span className="text-slate-400">Total Investment</span>
                <span className="text-white font-mono">{proj.investment}</span>
              </div>
              <div className="flex justify-between text-xs pb-2">
                <span className="text-slate-400">Completion Phase</span>
                <span className="text-fuchsia-400 font-mono">{proj.progress}%</span>
              </div>
              <div className="w-full bg-slate-800 rounded-full h-1.5 overflow-hidden">
                <div className={`h-1.5 rounded-full ${proj.progress === 100 ? 'bg-emerald-500' : 'bg-fuchsia-500 shadow-[0_0_10px_rgba(217,70,239,0.5)]'}`} style={{ width: `${proj.progress}%` }}></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
