
import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { MOCK_STATIONS } from '../constants';

const DashboardPage: React.FC = () => {
  const chartData = [
    { time: '00:00', listeners: 1200 },
    { time: '04:00', listeners: 800 },
    { time: '08:00', listeners: 2400 },
    { time: '12:00', listeners: 4200 },
    { time: '16:00', listeners: 3800 },
    { time: '20:00', listeners: 2900 },
    { time: '23:59', listeners: 1800 },
  ];

  return (
    <div className="flex-1 flex flex-col h-full bg-[#101622] px-6 lg:px-20 py-10">
      <div className="max-w-[1400px] mx-auto w-full flex flex-col gap-10">
        <div className="flex flex-wrap justify-between items-end gap-6">
          <div className="flex flex-col gap-2">
            <h1 className="text-white text-4xl font-black tracking-tight">Welcome back, Alex</h1>
            <p className="text-[#92a4c9] text-lg">Your stations are performing excellently this week.</p>
          </div>
          <button className="h-12 px-8 rounded-xl bg-primary hover:bg-primary/90 text-white font-black flex items-center gap-2 shadow-2xl shadow-primary/30">
            <span className="material-symbols-outlined !text-[20px]">add</span>
            Add New Station
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-surface-dark border border-border-dark">
            <div className="flex justify-between items-start mb-4">
              <div className="size-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-500">
                <span className="material-symbols-outlined !text-[28px]">headphones</span>
              </div>
              <span className="bg-emerald-500/10 text-emerald-500 text-xs font-black px-2 py-1 rounded-full">+12%</span>
            </div>
            <p className="text-[#92a4c9] text-sm font-bold uppercase tracking-widest">Total Listeners</p>
            <h3 className="text-4xl font-black text-white mt-1">12,450</h3>
          </div>
          <div className="p-6 rounded-2xl bg-surface-dark border border-border-dark">
            <div className="flex justify-between items-start mb-4">
              <div className="size-12 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-500">
                <span className="material-symbols-outlined !text-[28px]">radio_button_checked</span>
              </div>
              <span className="bg-[#92a4c9]/10 text-[#92a4c9] text-xs font-bold px-2 py-1 rounded-full tracking-wider">ACTIVE</span>
            </div>
            <p className="text-[#92a4c9] text-sm font-bold uppercase tracking-widest">Active Stations</p>
            <h3 className="text-4xl font-black text-white mt-1">4</h3>
          </div>
          <div className="p-6 rounded-2xl bg-surface-dark border border-border-dark">
            <div className="flex justify-between items-start mb-4">
              <div className="size-12 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-500">
                <span className="material-symbols-outlined !text-[28px]">favorite</span>
              </div>
              <span className="bg-emerald-500/10 text-emerald-500 text-xs font-black px-2 py-1 rounded-full">+5%</span>
            </div>
            <p className="text-[#92a4c9] text-sm font-bold uppercase tracking-widest">Total Favorites</p>
            <h3 className="text-4xl font-black text-white mt-1">890</h3>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Station List */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-black text-white">My Stations</h2>
              <div className="flex gap-2">
                <button className="size-10 rounded-lg bg-surface-dark border border-border-dark flex items-center justify-center text-[#92a4c9] hover:text-white transition-all">
                  <span className="material-symbols-outlined">filter_list</span>
                </button>
                <button className="size-10 rounded-lg bg-surface-dark border border-border-dark flex items-center justify-center text-[#92a4c9] hover:text-white transition-all">
                  <span className="material-symbols-outlined">sort</span>
                </button>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              {MOCK_STATIONS.map((s, i) => (
                <div key={s.id} className="group p-5 bg-surface-dark border border-border-dark rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-6 hover:border-primary transition-all">
                  <div className="flex items-center gap-5 w-full">
                    <div className="relative size-16 shrink-0 rounded-xl overflow-hidden">
                      <img src={s.imageUrl} className="w-full h-full object-cover" />
                      <div className={`absolute bottom-1 right-1 size-3 border-2 border-surface-dark rounded-full ${i === 2 ? 'bg-slate-500' : 'bg-emerald-500'}`} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-white font-black text-xl truncate group-hover:text-primary transition-colors cursor-pointer">{s.name}</h4>
                      <p className="text-[#92a4c9] text-sm font-medium">Genre: {s.genre} / {s.subGenre}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-8 w-full sm:w-auto justify-between sm:justify-end">
                    <div className="text-right">
                      <p className={`text-xl font-black ${i === 2 ? 'text-slate-500' : 'text-white'}`}>{i === 2 ? 'OFFLINE' : s.listeners}</p>
                      <p className="text-[10px] font-black text-[#92a4c9] uppercase tracking-widest">Listeners</p>
                    </div>
                    <div className="flex gap-2">
                      <button className="size-10 rounded-xl bg-surface-lighter flex items-center justify-center text-[#92a4c9] hover:bg-primary hover:text-white transition-all shadow-lg">
                        <span className="material-symbols-outlined !text-[20px]">edit</span>
                      </button>
                      <button className="size-10 rounded-xl bg-surface-lighter flex items-center justify-center text-[#92a4c9] hover:bg-red-500 hover:text-white transition-all shadow-lg">
                        <span className="material-symbols-outlined !text-[20px]">delete</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Side Analytics */}
          <div className="flex flex-col gap-8">
            <div className="p-6 rounded-2xl bg-surface-dark border border-border-dark">
              <div className="flex flex-col gap-1 mb-8">
                <p className="text-white text-lg font-black">Listener Trends</p>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-black text-white">2.4k Peak</span>
                  <span className="text-emerald-500 text-xs font-black">+8%</span>
                </div>
                <p className="text-[#92a4c9] text-xs font-bold uppercase tracking-widest">Last 24 Hours</p>
              </div>
              <div className="h-48 w-full -ml-4">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={chartData}>
                    <defs>
                      <linearGradient id="colorListeners" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#135bec" stopOpacity={0.4}/>
                        <stop offset="95%" stopColor="#135bec" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <Area 
                      type="monotone" 
                      dataKey="listeners" 
                      stroke="#135bec" 
                      strokeWidth={3} 
                      fillOpacity={1} 
                      fill="url(#colorListeners)" 
                    />
                    <Tooltip 
                      contentStyle={{ backgroundColor: '#1e2736', border: '1px solid #232f48', borderRadius: '12px' }}
                      itemStyle={{ color: '#fff', fontWeight: 'bold' }}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
              <div className="flex justify-between mt-4 border-t border-border-dark pt-4 text-[10px] font-black text-slate-500 uppercase tracking-widest">
                <span>00:00</span>
                <span>08:00</span>
                <span>16:00</span>
                <span>23:59</span>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-indigo-900 to-primary relative overflow-hidden group">
              <div className="relative z-10">
                <div className="size-12 rounded-full bg-white/10 flex items-center justify-center mb-6 shadow-xl">
                  <span className="material-symbols-outlined text-white">tips_and_updates</span>
                </div>
                <h4 className="text-white text-xl font-black mb-2">Grow Your Audience</h4>
                <p className="text-indigo-100 text-sm leading-relaxed mb-6">
                  Updating your station tags and descriptions using our AI helper can increase discoverability by up to 25%.
                </p>
                <button className="bg-white text-primary font-black px-6 py-2.5 rounded-xl shadow-2xl hover:bg-indigo-50 transition-all text-xs">
                  EDIT METADATA
                </button>
              </div>
              <div className="absolute -right-10 -bottom-10 size-48 bg-white/5 blur-[40px] rounded-full group-hover:scale-150 transition-transform duration-1000" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
