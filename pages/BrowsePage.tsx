
import React, { useState } from 'react';
import { MOCK_STATIONS, GENRES } from '../constants';
import StationCard from '../components/StationCard';

const BrowsePage: React.FC = () => {
  const [selectedGenres, setSelectedGenres] = useState<string[]>([]);

  const toggleGenre = (genre: string) => {
    setSelectedGenres(prev => 
      prev.includes(genre) ? prev.filter(g => g !== genre) : [...prev, genre]
    );
  };

  const filteredStations = selectedGenres.length > 0 
    ? MOCK_STATIONS.filter(s => selectedGenres.includes(s.genre))
    : MOCK_STATIONS;

  return (
    <div className="flex flex-col items-center">
      {/* Hero Section */}
      <section className="w-full px-4 pt-8 pb-12 md:px-10 lg:px-40">
        <div 
          className="mx-auto flex w-full max-w-[1200px] flex-col gap-6 overflow-hidden rounded-2xl bg-cover bg-center p-8 shadow-xl md:min-h-[400px] md:justify-center md:gap-8 relative"
          style={{ backgroundImage: `linear-gradient(rgba(16, 22, 34, 0.8), rgba(16, 22, 34, 0.6)), url('https://picsum.photos/seed/radio/1200/400')` }}
        >
          <div className="flex flex-col gap-4 text-center z-10">
            <h1 className="text-white text-4xl font-black leading-tight tracking-tight md:text-6xl">Find Your Frequency</h1>
            <p className="text-gray-300 text-base md:text-xl font-medium max-w-2xl mx-auto">
              Discover and stream thousands of independent and professional radio stations worldwide.
            </p>
          </div>
          <div className="flex w-full justify-center z-10">
            <div className="flex h-14 w-full max-w-[600px] items-stretch rounded-xl bg-surface-dark border border-border-dark shadow-2xl overflow-hidden focus-within:ring-2 ring-primary transition-all">
              <div className="flex items-center pl-5 text-[#92a4c9]">
                <span className="material-symbols-outlined !text-[24px]">search</span>
              </div>
              <input 
                className="flex-1 bg-transparent border-none text-white px-4 text-base focus:ring-0 placeholder:text-[#92a4c9]"
                placeholder="Search by genre, city, or name..."
              />
              <button className="bg-primary hover:bg-primary/90 text-white font-bold px-8 transition-colors">Search</button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="w-full max-w-[1400px] px-4 pb-20 md:px-10 lg:px-20 grid grid-cols-1 gap-8 lg:grid-cols-12">
        {/* Sidebar Filters */}
        <aside className="lg:col-span-3">
          <div className="rounded-xl border border-border-dark bg-surface-dark p-6 sticky top-24">
            <div className="mb-6 flex items-center justify-between">
              <h3 className="text-base font-bold text-white">Filters</h3>
              <button 
                onClick={() => setSelectedGenres([])}
                className="text-xs font-bold text-primary hover:underline"
              >
                Clear All
              </button>
            </div>
            
            <div className="mb-8">
              <h4 className="mb-4 text-sm font-bold text-white uppercase tracking-wider opacity-60">Genre</h4>
              <div className="flex flex-col gap-3">
                {GENRES.map(genre => (
                  <label key={genre} className="flex items-center gap-3 cursor-pointer group">
                    <div className="relative flex items-center">
                      <input 
                        type="checkbox" 
                        checked={selectedGenres.includes(genre)}
                        onChange={() => toggleGenre(genre)}
                        className="peer size-5 appearance-none rounded border border-border-dark bg-transparent checked:bg-primary checked:border-primary focus:ring-0 transition-all"
                      />
                      <span className="material-symbols-outlined absolute left-0.5 top-0.5 hidden text-white !text-[16px] peer-checked:block pointer-events-none">check</span>
                    </div>
                    <span className={`text-sm font-medium transition-colors ${selectedGenres.includes(genre) ? 'text-white' : 'text-[#92a4c9] group-hover:text-white'}`}>
                      {genre}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <h4 className="mb-4 text-sm font-bold text-white uppercase tracking-wider opacity-60">Location</h4>
              <div className="relative">
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[#92a4c9] !text-[20px]">location_on</span>
                <input 
                  className="w-full rounded-lg border border-border-dark bg-[#111722] py-2.5 pl-10 pr-3 text-sm text-white focus:border-primary focus:ring-0"
                  placeholder="Enter city or country"
                />
              </div>
            </div>
          </div>
        </aside>

        {/* Results Grid */}
        <div className="lg:col-span-9 flex flex-col gap-8">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
            <h2 className="text-2xl font-black text-white">Featured Stations</h2>
            <div className="flex items-center gap-3">
              <span className="text-sm font-medium text-[#92a4c9]">Sort by:</span>
              <select className="bg-surface-dark border-border-dark rounded-lg text-sm font-bold text-white focus:ring-primary focus:border-primary px-4 py-2 appearance-none pr-10 relative">
                <option>Popularity</option>
                <option>Newest</option>
                <option>A-Z</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {filteredStations.map(station => (
              <StationCard key={station.id} station={station} />
            ))}
          </div>

          {/* Pagination */}
          <div className="mt-8 flex justify-center">
            <nav className="flex items-center gap-2">
              <button className="size-10 flex items-center justify-center rounded-lg border border-border-dark hover:bg-border-dark transition-colors">
                <span className="material-symbols-outlined">chevron_left</span>
              </button>
              {[1, 2, 3, '...', 8].map((page, i) => (
                <button 
                  key={i}
                  className={`size-10 flex items-center justify-center rounded-lg border border-border-dark transition-colors ${page === 1 ? 'bg-primary border-primary text-white font-bold' : 'hover:bg-border-dark'}`}
                >
                  {page}
                </button>
              ))}
              <button className="size-10 flex items-center justify-center rounded-lg border border-border-dark hover:bg-border-dark transition-colors">
                <span className="material-symbols-outlined">chevron_right</span>
              </button>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrowsePage;
