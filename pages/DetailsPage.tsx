
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { MOCK_STATIONS } from '../constants';

const DetailsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const station = MOCK_STATIONS.find(s => s.id === id) || MOCK_STATIONS[0];
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="flex flex-col flex-1 px-4 md:px-6 lg:px-40 py-10">
      <div className="max-w-[1200px] w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Left Column: Player Stickiness */}
        <div className="lg:col-span-4 flex flex-col gap-6 lg:sticky lg:top-24">
          <div className="rounded-2xl bg-surface-dark p-6 shadow-2xl border border-border-dark relative overflow-hidden group">
            <div className="relative aspect-square w-full rounded-xl overflow-hidden shadow-2xl mb-6">
              <img 
                src={station.imageUrl} 
                alt={station.name} 
                className={`w-full h-full object-cover transition-transform duration-[20s] linear ${isPlaying ? 'scale-125 rotate-6' : ''}`}
              />
              <div className="absolute top-4 left-4 bg-red-600 text-white text-[10px] font-black px-2.5 py-1 rounded-md flex items-center gap-1.5 shadow-lg animate-pulse">
                <span className="size-2 bg-white rounded-full"></span> LIVE
              </div>
            </div>
            
            <div className="flex flex-col gap-6">
              <div className="text-center">
                <h1 className="text-2xl font-black text-white">{station.name}</h1>
                <p className="text-primary text-sm font-bold mt-2 uppercase tracking-widest">
                  {isPlaying ? 'Now Playing: Midnight City' : 'Ready to Stream'}
                </p>
              </div>

              {/* Pseudo Visualizer */}
              <div className="flex items-end justify-center gap-1.5 h-10">
                {[...Array(12)].map((_, i) => (
                  <div 
                    key={i} 
                    className={`w-1.5 bg-primary/40 rounded-full transition-all duration-300 ${isPlaying ? 'animate-bounce' : 'h-2'}`}
                    style={{ animationDelay: `${i * 0.1}s`, height: isPlaying ? '100%' : '8px' }}
                  />
                ))}
              </div>

              <div className="flex items-center justify-center gap-8">
                <button className="text-[#92a4c9] hover:text-primary transition-all">
                  <span className="material-symbols-outlined !text-[32px]">volume_up</span>
                </button>
                <button 
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="size-20 flex items-center justify-center rounded-full bg-primary hover:bg-primary/90 text-white shadow-2xl shadow-primary/40 hover:scale-105 active:scale-95 transition-all"
                >
                  <span className="material-symbols-outlined !text-[48px] filled">{isPlaying ? 'pause' : 'play_arrow'}</span>
                </button>
                <button className="text-[#92a4c9] hover:text-red-500 transition-all">
                  <span className="material-symbols-outlined !text-[32px]">favorite</span>
                </button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-surface-dark border border-border-dark rounded-2xl p-4 text-center">
              <p className="text-[10px] font-black text-[#92a4c9] uppercase tracking-widest">Listeners</p>
              <p className="text-2xl font-black text-white mt-1">{station.listeners}</p>
            </div>
            <div className="bg-surface-dark border border-border-dark rounded-2xl p-4 text-center">
              <p className="text-[10px] font-black text-[#92a4c9] uppercase tracking-widest">Bitrate</p>
              <p className="text-2xl font-black text-white mt-1">{station.bitrate}</p>
            </div>
          </div>
        </div>

        {/* Right Column: Station Info */}
        <div className="lg:col-span-8 flex flex-col gap-10">
          <div className="flex flex-col gap-6">
            <div className="flex flex-wrap justify-between items-start gap-6">
              <div>
                <nav className="flex items-center gap-2 text-sm font-medium text-[#92a4c9] mb-4">
                  <Link to="/" className="hover:text-white">Home</Link>
                  <span>/</span>
                  <span className="text-white">{station.genre}</span>
                </nav>
                <h2 className="text-5xl font-black text-white mb-3">{station.name}</h2>
                <div className="flex items-center gap-2 text-[#92a4c9]">
                  <span className="material-symbols-outlined">location_on</span>
                  <span className="text-lg">{station.location}</span>
                </div>
              </div>
              <div className="flex gap-3">
                <button className="h-11 px-5 rounded-xl bg-surface-lighter hover:bg-border-dark text-white font-bold flex items-center gap-2 transition-all">
                  <span className="material-symbols-outlined">share</span> Share
                </button>
                <button className="h-11 px-5 rounded-xl bg-surface-lighter hover:bg-border-dark text-white font-bold flex items-center gap-2 transition-all">
                  <span className="material-symbols-outlined">flag</span> Report
                </button>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {station.tags.map(tag => (
                <span key={tag} className="px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-black uppercase tracking-widest">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <hr className="border-border-dark" />

          <section>
            <h3 className="text-2xl font-black text-white mb-6">About the Station</h3>
            <p className="text-[#92a4c9] text-lg leading-relaxed">{station.description}</p>
          </section>

          <section>
            <h3 className="text-2xl font-black text-white mb-6">Connect</h3>
            <div className="flex flex-wrap gap-4">
              <a href="#" className="flex items-center gap-4 px-6 py-4 rounded-2xl bg-surface-lighter border border-transparent hover:border-primary/50 transition-all group">
                <span className="material-symbols-outlined text-primary">language</span>
                <span className="font-bold text-white">Visit Website</span>
                <span className="material-symbols-outlined !text-[18px] text-[#92a4c9] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">arrow_outward</span>
              </a>
              {Object.entries(station.socials || {}).map(([key, value]) => (
                <a key={key} href="#" className="flex items-center gap-4 px-6 py-4 rounded-2xl bg-surface-lighter border border-transparent hover:border-primary/50 transition-all capitalize font-bold text-white">
                  <span className="material-symbols-outlined text-[#92a4c9]">{key}</span>
                  {key}
                </a>
              ))}
            </div>
          </section>

          <section>
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-2xl font-black text-white">Similar Stations</h3>
              <Link to="/" className="text-sm font-bold text-primary hover:underline flex items-center gap-1">
                View all <span className="material-symbols-outlined !text-[18px]">arrow_forward</span>
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {MOCK_STATIONS.slice(0, 4).map(s => (
                <Link 
                  key={s.id} 
                  to={`/station/${s.id}`} 
                  className="flex items-center gap-4 p-4 rounded-2xl bg-surface-dark border border-border-dark hover:border-primary transition-all group"
                >
                  <img src={s.imageUrl} className="size-16 rounded-xl object-cover shrink-0" />
                  <div className="flex-1 min-w-0">
                    <p className="text-white font-bold truncate group-hover:text-primary transition-colors">{s.name}</p>
                    <p className="text-xs text-[#92a4c9] truncate">{s.genre} • {s.location}</p>
                  </div>
                  <div className="size-10 rounded-full bg-surface-lighter flex items-center justify-center text-[#92a4c9] group-hover:bg-primary group-hover:text-white transition-all">
                    <span className="material-symbols-outlined">play_arrow</span>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
