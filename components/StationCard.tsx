
import React from 'react';
import { Link } from 'react-router-dom';
import { Station } from '../types';

interface StationCardProps {
  station: Station;
}

const StationCard: React.FC<StationCardProps> = ({ station }) => {
  return (
    <div className="group flex flex-col overflow-hidden rounded-xl border border-border-dark bg-surface-dark shadow-sm transition-all hover:-translate-y-1 hover:border-primary">
      <div className="relative aspect-video w-full overflow-hidden">
        <img 
          src={station.imageUrl} 
          alt={station.name} 
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/20" />
        <button className="absolute bottom-3 right-3 flex size-10 items-center justify-center rounded-full bg-primary text-white shadow-lg transition-all opacity-0 group-hover:opacity-100 hover:scale-105 active:scale-95">
          <span className="material-symbols-outlined !text-[24px]">play_arrow</span>
        </button>
      </div>
      <div className="flex flex-1 flex-col p-4">
        <div>
          <h3 className="text-lg font-bold text-white group-hover:text-primary transition-colors">{station.name}</h3>
          <p className="text-sm text-[#92a4c9]">{station.subGenre || station.genre} • {station.location}</p>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {station.tags.slice(0, 2).map((tag) => (
            <span key={tag} className="inline-flex items-center rounded bg-border-dark px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
              {tag}
            </span>
          ))}
        </div>
        <div className="mt-4 pt-4 border-t border-border-dark flex justify-between items-center">
          <div className="flex items-center gap-1 text-xs font-medium text-[#92a4c9]">
            <span className="material-symbols-outlined !text-[16px]">signal_cellular_alt</span>
            {station.bitrate}
          </div>
          <Link 
            to={`/station/${station.id}`} 
            className="text-sm font-bold text-primary hover:underline"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default StationCard;
