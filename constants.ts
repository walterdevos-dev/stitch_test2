
import { Station } from './types';

export const MOCK_STATIONS: Station[] = [
  {
    id: '1',
    name: 'Neon FM 88.5',
    genre: 'Electronic',
    subGenre: 'Synthwave',
    location: 'Miami, FL',
    description: 'Broadcasting live from the heart of downtown, Neon FM is your premier destination for the best in synthwave, retrowave, and electronic music.',
    bitrate: '320kbps',
    listeners: '12.4k',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuATQ8zM5LhESVuDnJClGPfTSBPeqSEbfLqOvDeHmf19JojPCe9sbozLYDa0qkAsZpNTnlKUaIrJN9yMNt-VlguUsO9x6P8szq7WRzjG5SwdXK3jfGzaDyazsJPXBFWctUjZXnjCry1RCAy-MDfFdOJUSj_j33_0AzytX1Sk59vJ1SCCM8kS5AOkYB46War0LaBGFxu4c9KzPj170CCa7nxrBpvNHgT9O3Q4zmlx74u91jTBlX-xnB9753ey59IpvzVEzbValArxTiU',
    tags: ['Synthwave', 'Retrowave', 'Electronic', '80s'],
    socials: { twitter: 'neonfm', instagram: 'neonfm_official' }
  },
  {
    id: '2',
    name: 'Blue Note Radio',
    genre: 'Jazz',
    subGenre: 'Blues',
    location: 'New York, NY',
    description: 'The soul of jazz, 24/7. From classic bebop to modern fusion.',
    bitrate: '320kbps',
    listeners: '5.2k',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCxMGQgjQjgq2cdK5NOgGTYfBeCG5G59miQUV7EadNNP-PV_N6hE-r3F74voPWnnVaCBAMWj91EMTrcuN7Jp44ZoH45tqUBFiZxZvX_uKrk5fluDVLASmAppskx6qgz5qbImU1u5wIN2_5srmGj5dtg4dFQC8YY7uEEI6X3Wlmidd4_PESRs8C249CEiOLC-TGMoWtkHUVhqscZxYuerF5X1ylCCmTbtQtZH92uD7ZhlmOcK0Drwd0Tk1WHHtgzORSj484m3UHLi1I',
    tags: ['Jazz', 'Blues', 'Classic'],
  },
  {
    id: '3',
    name: 'Global News 24/7',
    genre: 'News',
    subGenre: 'Talk',
    location: 'London, UK',
    description: 'Stay informed with breaking news from around the world.',
    bitrate: '128kbps',
    listeners: '64k',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC5e0ZoOBrPlil65cyY7auOmHFz4gHr53aYQROP_L4mcvTI1Itu8oOn_NkUQ1DKW_yjH5D2KXBtnClCxJVSVLSfO0BHwKAFDleTNlsm0kLR_zLxi-sNzdPyRlxntHZfR3-rsggBQKUNMA8vhBwI0XMX7UoIMhfGcl8KiXgKCM1DTmtCcgrRDjAJDnftxpfFWZuCbE7jJ5QSS4AvBaFRJVmzUyj0vJKC5_J9Nw8qn6XrBond0Q8YJbWsWmI-Z57ENzvt18whr27oBnk',
    tags: ['News', 'Talk', 'Politics'],
  },
  {
    id: '4',
    name: 'Hard Rock Café Radio',
    genre: 'Rock',
    subGenre: 'Metal',
    location: 'Los Angeles, CA',
    description: 'Legends never die. All your favorite rock anthems in one place.',
    bitrate: '192kbps',
    listeners: '8.9k',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAJYPUQpEADpXgm7N_5B47bxozJLm7myCrIVADrzOoXHwmrfAUwGeoLZX31RBLa6ke_1EdpSqKyDwl3vvCVIOXVcBUzUZaQZaw2uq55DvLgIGnWEmbIEzuLkkl1B-E8jn1qpKuK_NdcKIiYCxocfvjxB2wvbF9eK8M_4GyogJ5tgQcNMZyyi_IICub95Ouo3KF4NiBXdi5-fNLRH-Ip4UXybB3Mow6xHrTk_M09_dTcM9CSjapbWlyhJTIC5IJxbkcgmDfY1A99ZjA',
    tags: ['Rock', 'Metal', 'Alternative'],
  }
];

export const GENRES = ['Pop', 'Rock', 'Electronic', 'Jazz', 'Classical', 'Hip Hop', 'News'];
