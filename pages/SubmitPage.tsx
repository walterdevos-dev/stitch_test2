
import React, { useState } from 'react';
import { GENRES } from '../constants';
import { generateStationDescription } from '../services/geminiService';

const SubmitPage: React.FC = () => {
  const [name, setName] = useState('');
  const [genre, setGenre] = useState('');
  const [description, setDescription] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerateAI = async () => {
    if (!name || !genre) {
      alert("Please provide a name and genre first.");
      return;
    }
    setIsGenerating(true);
    const desc = await generateStationDescription(name, genre);
    setDescription(desc);
    setIsGenerating(false);
  };

  return (
    <div className="px-4 md:px-20 lg:px-40 flex flex-1 justify-center py-12">
      <div className="max-w-[960px] flex-1 flex flex-col gap-10">
        <div className="flex flex-col gap-3">
          <h1 className="text-white text-4xl font-black tracking-tight">Submit Your Station</h1>
          <p className="text-[#92a4c9] text-lg max-w-2xl">
            Join our global directory. Complete the profile below to share your sound with the world.
          </p>
        </div>

        <div className="rounded-2xl border border-border-dark bg-surface-dark p-6 flex flex-col md:flex-row items-center gap-6 shadow-xl">
          <div className="size-12 rounded-xl bg-primary/20 flex items-center justify-center text-primary shrink-0">
            <span className="material-symbols-outlined !text-[28px]">info</span>
          </div>
          <div className="flex-1">
            <h4 className="text-white font-bold text-base mb-1">Submission Guidelines</h4>
            <p className="text-[#92a4c9] text-sm">
              Ensure your stream URL is active and uses HTTPS. Submissions are reviewed within 48 hours for quality assurance.
            </p>
          </div>
          <button className="text-sm font-bold text-primary hover:text-white transition-colors whitespace-nowrap">
            Read Policies →
          </button>
        </div>

        <form className="flex flex-col gap-8">
          <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label className="text-sm font-bold text-white">Station Name</label>
              <input 
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="h-12 rounded-xl bg-[#192233] border border-border-dark text-white px-4 focus:ring-2 ring-primary transition-all placeholder:text-[#92a4c9]/40"
                placeholder="e.g. Smooth Jazz FM"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-bold text-white">Primary Genre</label>
              <select 
                value={genre}
                onChange={(e) => setGenre(e.target.value)}
                className="h-12 rounded-xl bg-[#192233] border border-border-dark text-white px-4 focus:ring-2 ring-primary appearance-none cursor-pointer"
              >
                <option value="">Select a genre</option>
                {GENRES.map(g => <option key={g} value={g}>{g}</option>)}
              </select>
            </div>
            <div className="md:col-span-2 flex flex-col gap-2">
              <div className="flex justify-between items-center">
                <label className="text-sm font-bold text-white">Description</label>
                <button 
                  type="button"
                  onClick={handleGenerateAI}
                  disabled={isGenerating}
                  className="text-xs font-bold text-primary flex items-center gap-1 hover:text-white disabled:opacity-50"
                >
                  <span className="material-symbols-outlined !text-[16px]">auto_awesome</span>
                  {isGenerating ? 'Generating...' : 'AI Generate Description'}
                </button>
              </div>
              <textarea 
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="min-h-[140px] rounded-xl bg-[#192233] border border-border-dark text-white p-4 focus:ring-2 ring-primary transition-all resize-none"
                placeholder="Tell listeners what makes your station unique..."
              />
            </div>
          </section>

          <hr className="border-border-dark" />

          <section className="flex flex-col gap-6">
            <h3 className="text-xl font-bold text-white">Technical Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold text-white">Streaming URL (HTTPS)</label>
                <div className="relative">
                  <input className="w-full h-12 rounded-xl bg-[#192233] border border-border-dark text-white px-4 pr-24 focus:ring-2 ring-primary" placeholder="https://stream.example.com/live" />
                  <button type="button" className="absolute right-2 top-2 bottom-2 bg-border-dark hover:bg-[#324467] text-xs font-bold px-4 rounded-lg">Test</button>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold text-white">Station Website</label>
                <input className="h-12 rounded-xl bg-[#192233] border border-border-dark text-white px-4 focus:ring-2 ring-primary" placeholder="https://www.mystation.com" />
              </div>
            </div>
          </section>

          <hr className="border-border-dark" />

          <section className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="flex flex-col gap-3">
              <label className="text-sm font-bold text-white">Station Logo</label>
              <div className="group flex flex-col items-center justify-center h-[240px] rounded-2xl border-2 border-dashed border-border-dark bg-[#161d2a] hover:bg-border-dark transition-all cursor-pointer">
                <span className="material-symbols-outlined !text-[48px] text-[#92a4c9] mb-4">cloud_upload</span>
                <p className="text-white font-bold">Click to upload</p>
                <p className="text-xs text-[#92a4c9]">Min. 500x500px SVG/PNG</p>
                <input type="file" className="hidden" />
              </div>
            </div>
            <div className="lg:col-span-2 flex flex-col gap-6">
              <h3 className="text-xl font-bold text-white">Social Presence</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold text-white">Contact Email</label>
                  <div className="flex h-12 rounded-xl border border-border-dark bg-[#192233] items-center px-4 gap-3">
                    <span className="material-symbols-outlined text-[#92a4c9]">mail</span>
                    <input className="flex-1 bg-transparent border-none text-white focus:ring-0 p-0" placeholder="support@radio.com" />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold text-white">Twitter Handle</label>
                  <div className="flex h-12 rounded-xl border border-border-dark bg-[#192233] items-center px-4 gap-3">
                    <span className="text-[#92a4c9] font-bold">@</span>
                    <input className="flex-1 bg-transparent border-none text-white focus:ring-0 p-0" placeholder="username" />
                  </div>
                </div>
              </div>
            </div>
          </section>

          <div className="flex items-center justify-end gap-4 pt-10 border-t border-border-dark">
            <button className="h-12 px-8 rounded-xl font-bold text-white hover:bg-border-dark transition-all">Save Draft</button>
            <button className="h-12 px-10 rounded-xl bg-primary hover:bg-primary/90 text-white font-bold shadow-lg shadow-primary/20 flex items-center gap-2">
              Submit Station
              <span className="material-symbols-outlined !text-[18px]">send</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SubmitPage;
