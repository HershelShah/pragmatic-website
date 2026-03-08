// Product data for search and listings
// Add new products here as they become available

export interface Product {
  id: string;
  name: string;
  title: string;
  category: string;
  categorySlug: string;
  description: string;
  image: string;
  url: string;
  badge?: string;
  specs: Record<string, string>;
  keywords: string[];
  available: boolean;
  showInGrid?: boolean; // false = only searchable, not shown in product grids
}

export interface Category {
  name: string;
  slug: string;
  description: string;
  badge?: string;
}

export const categories: Category[] = [
  {
    name: 'Laser Projectors',
    slug: 'laser-projectors',
    description: 'Professional-grade laser projectors for digital signage and large venue applications.',
    badge: 'Pragmatic Signage'
  },
  {
    name: 'Medical Displays',
    slug: 'medical-displays',
    description: 'DICOM calibrated medical and dental imaging monitors for healthcare facilities.',
    badge: 'Pragmatic Healthcare'
  },
  {
    name: 'Line Array Speakers',
    slug: 'line-array-speakers',
    description: 'Compact high-performance line array speakers with Defined Acoustical Coverage.',
    badge: 'PHA Series'
  },
  {
    name: 'Amplifiers',
    slug: 'amplifiers',
    description: 'Professional audio amplifiers from compact HideAway designs to multi-channel audiophile solutions.',
    badge: 'Pragmatic Audio'
  },
  {
    name: 'PA Systems',
    slug: 'pa-systems',
    description: 'Complete portable and fixed-install PA systems with line array speakers, subwoofers, and mixer/amplifiers.',
    badge: 'Pragmatic Audio'
  },
  {
    name: 'Streaming Audio',
    slug: 'streaming-audio',
    description: 'Network audio streamers and multi-zone amplifiers with Spotify, AirPlay, and internet radio support.',
    badge: 'Pragmatic Audio'
  },
  {
    name: 'Tuners',
    slug: 'tuners',
    description: 'Professional HDTV and FM/TV/CATV tuners for digital signage and AV integration.',
    badge: 'Pragmatic'
  },
  {
    name: 'Ceiling Tile Speakers',
    slug: 'ceiling-tile-speakers',
    description: 'Drop-in ceiling tile speakers with wide dispersion, directional sound, and sound masking options.',
    badge: 'Pragmatic Audio'
  },
  {
    name: 'In-Ceiling Speakers',
    slug: 'in-ceiling-speakers',
    description: 'High-performance rimless in-ceiling speakers with Kevlar and polypropylene drivers.',
    badge: 'Pragmatic Audio'
  },
  {
    name: 'Pendant Speakers',
    slug: 'pendant-speakers',
    description: 'Wide dispersion pendant speakers for open ceiling commercial environments.',
    badge: 'Pragmatic Audio'
  }
];

export const products: Product[] = [
  {
    id: 'plp-hd63',
    name: 'PLP-HD63',
    title: 'PLP-HD63 Laser Projector',
    category: 'Laser Projectors',
    categorySlug: 'laser-projectors',
    description: 'Professional 6300 lumen WUXGA laser projector designed for digital signage. Features 20,000 hour lifespan, 24/7 operation capability.',
    image: '/images/products/laser-projectors/plp-hd63/plp-hd63-front.webp',
    url: '/products/laser-projectors/plp-hd63',
    badge: 'Pragmatic Signage',
    specs: {
      brightness: '6300 ANSI lumens',
      resolution: 'WUXGA (1920x1200)',
      lifespan: '20,000 hours',
      technology: '3-LCD'
    },
    keywords: [
      'laser', 'projector', 'digital signage', 'WUXGA', '6300 lumens',
      '3-LCD', 'HDBaseT', 'signage', 'display', 'video',
      'hospital', 'retail', 'hotel', 'mall', 'museum', 'corporate'
    ],
    available: true,
    showInGrid: true
  },
  {
    id: 'pvp-72a',
    name: 'PVP-72A',
    title: 'PVP-72A Laser Projector with Android',
    category: 'Laser Projectors',
    categorySlug: 'laser-projectors',
    description: 'Smart 7200 lumen WUXGA laser projector with built-in Android OS. WiFi, Bluetooth, 20,000 hour lifespan.',
    image: '/images/products/laser-projectors/pvp-72a/pvp-72a-front.webp',
    url: '/products/laser-projectors/pvp-72a',
    badge: 'Pragmatic Signage',
    specs: {
      brightness: '7200 lumens',
      resolution: 'WUXGA (1920x1200)',
      lifespan: '20,000 hours',
      os: 'Android Built-in'
    },
    keywords: [
      'laser', 'projector', 'digital signage', 'WUXGA', '7200 lumens',
      'DLP', 'android', 'smart', 'wifi', 'bluetooth', 'wireless',
      'signage', 'display', 'video', 'standalone'
    ],
    available: true,
    showInGrid: true
  },
  {
    id: 'pim-21b',
    name: 'PIM-21B',
    title: 'PIM-21B Medical Imaging Monitor',
    category: 'Medical Displays',
    categorySlug: 'medical-displays',
    description: '21.5" DICOM calibrated medical/dental imaging monitor. Full HD 1920x1080, 3-year warranty.',
    image: '/images/products/medical-displays/pim-21b/pim-21b-front.webp',
    url: '/products/medical-displays/pim-21b',
    badge: 'Pragmatic Healthcare',
    specs: {
      size: '21.5"',
      resolution: '1920 x 1080',
      calibration: 'DICOM',
      warranty: '3 years'
    },
    keywords: [
      'medical', 'monitor', 'display', 'DICOM', 'dental', 'imaging',
      'x-ray', 'radiology', 'healthcare', 'hospital', 'clinic',
      'LED', 'LCD', 'diagnostic'
    ],
    available: true,
    showInGrid: true
  },
  {
    id: 'pha-4',
    name: 'PHA-4',
    title: 'PHA-4 Line Array Speaker',
    category: 'Line Array Speakers',
    categorySlug: 'line-array-speakers',
    description: 'Compact 9" line array speaker with 48W max power. 2" x 2" footprint with DAC technology.',
    image: '/images/products/line-array-speakers/pha-series.webp',
    url: '/products/line-array-speakers',
    badge: 'PHA Series',
    specs: {
      power: '48W max',
      sensitivity: '83dB @ 1W/1m',
      dimensions: '9" x 2" x 2"'
    },
    keywords: [
      'speaker', 'line array', 'audio', 'PA', 'sound', 'compact',
      'DAC', 'directional', 'commercial', 'retail', 'hospitality'
    ],
    available: true,
    showInGrid: false
  },
  {
    id: 'pha-8',
    name: 'PHA-8',
    title: 'PHA-8 Line Array Speaker',
    category: 'Line Array Speakers',
    categorySlug: 'line-array-speakers',
    description: '18.5" line array speaker with 96W max power. High sensitivity 87dB for medium coverage.',
    image: '/images/products/line-array-speakers/pha-series.webp',
    url: '/products/line-array-speakers',
    badge: 'PHA Series',
    specs: {
      power: '96W max',
      sensitivity: '87dB @ 1W/1m',
      dimensions: '18.5" x 2" x 2"'
    },
    keywords: [
      'speaker', 'line array', 'audio', 'PA', 'sound',
      'DAC', 'directional', 'commercial', 'conference', 'worship'
    ],
    available: true,
    showInGrid: false
  },
  {
    id: 'pha-184',
    name: 'PHA-184',
    title: 'PHA-184 Line Array Speaker',
    category: 'Line Array Speakers',
    categorySlug: 'line-array-speakers',
    description: '18" line array speaker with 48W max power. Dual-ported design with 360° sound dispersion for home theater and digital signage.',
    image: '/images/products/line-array-speakers/pha-series.webp',
    url: '/products/line-array-speakers',
    badge: 'PHA Series',
    specs: {
      power: '48W max',
      sensitivity: '84dB @ 1W/1m',
      dimensions: '18" x 2" x 2"'
    },
    keywords: [
      'speaker', 'line array', 'audio', 'PA', 'sound',
      'DAC', 'directional', 'home theater', 'digital signage', 'plasma', 'LCD'
    ],
    available: true,
    showInGrid: false
  },
  {
    id: 'pha-16',
    name: 'PHA-16',
    title: 'PHA-16 Line Array Speaker',
    category: 'Line Array Speakers',
    categorySlug: 'line-array-speakers',
    description: '25" line array speaker with 192W max power. Available in black, white, or silver.',
    image: '/images/products/line-array-speakers/pha-series.webp',
    url: '/products/line-array-speakers',
    badge: 'PHA Series',
    specs: {
      power: '192W max',
      sensitivity: '94dB @ 1W/1m',
      dimensions: '25" x 2" x 2"'
    },
    keywords: [
      'speaker', 'line array', 'audio', 'PA', 'sound', 'high power',
      'DAC', 'directional', 'stadium', 'arena', 'theater'
    ],
    available: true,
    showInGrid: false
  },
  {
    id: 'pha-25',
    name: 'PHA-25',
    title: 'PHA-25 Line Array Speaker',
    category: 'Line Array Speakers',
    categorySlug: 'line-array-speakers',
    description: '42" line array speaker with 288W max power. Large venue coverage.',
    image: '/images/products/line-array-speakers/pha-series.webp',
    url: '/products/line-array-speakers',
    badge: 'PHA Series',
    specs: {
      power: '288W max',
      sensitivity: '96dB @ 1W/1m',
      dimensions: '42" x 2" x 2"'
    },
    keywords: [
      'speaker', 'line array', 'audio', 'PA', 'sound', 'high power',
      'DAC', 'directional', 'stadium', 'arena', 'large venue'
    ],
    available: true,
    showInGrid: false
  },
  {
    id: 'pha-264',
    name: 'PHA-264',
    title: 'PHA-264 Line Array Speaker',
    category: 'Line Array Speakers',
    categorySlug: 'line-array-speakers',
    description: '26" line array speaker with 48W max power. Efficient design for extended coverage.',
    image: '/images/products/line-array-speakers/pha-series.webp',
    url: '/products/line-array-speakers',
    badge: 'PHA Series',
    specs: {
      power: '48W max',
      sensitivity: '84dB @ 1W/1m',
      dimensions: '26" x 2" x 2"'
    },
    keywords: [
      'speaker', 'line array', 'audio', 'PA', 'sound',
      'DAC', 'directional', 'transport', 'station', 'airport'
    ],
    available: true,
    showInGrid: false
  },
  {
    id: 'pha-5125',
    name: 'PHA-5125',
    title: 'PHA-5125 Line Array Speaker',
    category: 'Line Array Speakers',
    categorySlug: 'line-array-speakers',
    description: '51" line array speaker with 288W max power. Maximum coverage for large installations.',
    image: '/images/products/line-array-speakers/pha-series.webp',
    url: '/products/line-array-speakers',
    badge: 'PHA Series',
    specs: {
      power: '288W max',
      sensitivity: '94dB @ 1W/1m',
      dimensions: '51" x 2" x 2"'
    },
    keywords: [
      'speaker', 'line array', 'audio', 'PA', 'sound', 'high power',
      'DAC', 'directional', 'stadium', 'arena', 'large venue', 'sports'
    ],
    available: true,
    showInGrid: false
  },
  // Amplifiers
  {
    id: 'mba-120',
    name: 'MBA-120',
    title: 'MBA-120 HideAway Mono-block Amplifier',
    category: 'Amplifiers',
    categorySlug: 'amplifiers',
    description: 'Compact 20W mono-block amplifier with 45dB gain. 12V DC powered, ideal for digital signage and kiosks.',
    image: '/images/products/amplifiers/mba-120.webp',
    url: '/products/amplifiers/mba-120',
    badge: 'Pragmatic Audio',
    specs: {
      power: '20W continuous',
      channels: '1 (Mono)',
      snr: '>90 dB',
      dimensions: '3.45" x 1.5" x 4.2"'
    },
    keywords: [
      'amplifier', 'mono', 'compact', 'hideaway', 'digital signage',
      'kiosk', '12V', 'DC', 'audio', 'commercial', 'small'
    ],
    available: true,
    showInGrid: true
  },
  {
    id: 'saa-212',
    name: 'SAA-212',
    title: 'SAA-212 HideAway Stereo Amplifier',
    category: 'Amplifiers',
    categorySlug: 'amplifiers',
    description: 'Compact 2x12W stereo amplifier with phoenix terminals. UL/CE certified, 3-year warranty.',
    image: '/images/products/amplifiers/saa-212.webp',
    url: '/products/amplifiers/saa-212',
    badge: 'Pragmatic Audio',
    specs: {
      power: '12W per channel',
      channels: '2 (Stereo)',
      frequency: '20Hz - 20kHz',
      dimensions: '3.3" x 3.45" x 1.5"'
    },
    keywords: [
      'amplifier', 'stereo', 'compact', 'hideaway', 'flat panel',
      'projector', 'conference room', '12V', 'DC', 'audio', 'UL', 'CE'
    ],
    available: true,
    showInGrid: true
  },
  {
    id: 'mca-1248',
    name: 'MCA-1248',
    title: 'MCA-1248 12-Channel Audiophile Amplifier',
    category: 'Amplifiers',
    categorySlug: 'amplifiers',
    description: '12-channel audiophile amplifier with 48W per channel. >100dB SNR, no heat sink required.',
    image: '/images/products/amplifiers/mca-1248.webp',
    url: '/products/amplifiers/mca-1248',
    badge: 'Pragmatic Audio',
    specs: {
      power: '48W per channel',
      channels: '12',
      snr: '>100 dB',
      dimensions: '17" x 4" x 10.5"'
    },
    keywords: [
      'amplifier', 'multi-channel', '12-channel', 'audiophile', 'multi-room',
      'whole-home', 'bi-amplified', 'rack mount', 'high-fidelity', 'audio'
    ],
    available: true,
    showInGrid: true
  },
  // PA Systems
  {
    id: 'pas-5125',
    name: 'PAS-5125-S8M4',
    title: 'PAS-5125 Complete PA System',
    category: 'PA Systems',
    categorySlug: 'pa-systems',
    description: 'Complete PA system with PHA-5125 line array (240W), PSUB-81 subwoofer, and PMA-4 mixer/amplifier.',
    image: '/images/products/pa-systems/pas-5125.webp',
    url: '/products/pa-systems/pas-5125',
    badge: 'Pragmatic Audio',
    specs: {
      speaker: 'PHA-5125 (240W)',
      subwoofer: '8" active',
      mixer: '4-channel',
      battery: '12+ hours optional'
    },
    keywords: [
      'PA system', 'public address', 'portable', 'line array', 'subwoofer',
      'mixer', 'gymnasium', 'sports', 'fitness', 'conference', 'outdoor'
    ],
    available: true,
    showInGrid: true
  },
  {
    id: 'pas-8',
    name: 'PAS-8-S8M4',
    title: 'PAS-8 Compact PA System',
    category: 'PA Systems',
    categorySlug: 'pa-systems',
    description: 'Compact portable PA system with PHA-8 line array (75W), PSUB-81 subwoofer, and PMA-4 mixer. Includes carrying bag.',
    image: '/images/products/pa-systems/pas-8.webp',
    url: '/products/pa-systems/pas-8',
    badge: 'Pragmatic Audio',
    specs: {
      speaker: 'PHA-8 (75W)',
      subwoofer: '8" active',
      mixer: '4-channel',
      weight: '7.5 lbs'
    },
    keywords: [
      'PA system', 'portable', 'compact', 'line array', 'subwoofer',
      'mixer', 'classroom', 'conference', 'DJ', 'singer', 'performer'
    ],
    available: true,
    showInGrid: true
  },
  {
    id: 'pma-4',
    name: 'PMA-4',
    title: 'PMA-4 4-Channel Mixer/Amplifier',
    category: 'PA Systems',
    categorySlug: 'pa-systems',
    description: '4-channel active microphone mixer with built-in 24W digital amplifier. Optional 12+ hour battery.',
    image: '/images/products/pa-systems/pma-4.webp',
    url: '/products/pa-systems/pma-4',
    badge: 'Pragmatic Audio',
    specs: {
      channels: '3 mic + 1 line',
      amplifier: '24W',
      frequency: '20Hz - 20kHz',
      dimensions: '10" x 5" x 2"'
    },
    keywords: [
      'mixer', 'amplifier', 'microphone', 'preamp', 'portable',
      'PA', 'battery', 'conference', 'classroom', 'presentation'
    ],
    available: true,
    showInGrid: true
  },
  // Streaming Audio
  {
    id: 'mza-450wb',
    name: 'MZA-450WB',
    title: 'MZA-450WB 4-Zone Network Audio Amplifier',
    category: 'Streaming Audio',
    categorySlug: 'streaming-audio',
    description: '4-zone network audio amplifier with Spotify, AirPlay, DLNA. 50W/ch @ 8Ω, built-in Ethernet switch.',
    image: '/images/products/streaming-audio/mza-450wb.webp',
    url: '/products/streaming-audio/mza-450wb',
    badge: 'Pragmatic Audio',
    specs: {
      zones: '4 zones',
      power: '50W/ch @ 8Ω',
      streaming: 'Spotify, AirPlay, DLNA',
      formFactor: '2U rack mount'
    },
    keywords: [
      'streaming', 'network audio', 'multi-zone', 'multi-room', 'Spotify',
      'AirPlay', 'DLNA', 'amplifier', 'whole-home', 'Ethernet'
    ],
    available: true,
    showInGrid: true
  },
  {
    id: 'iws-225wb',
    name: 'IWS-225WB',
    title: 'IWS-225WB In-Wall Network Streamer',
    category: 'Streaming Audio',
    categorySlug: 'streaming-audio',
    description: 'In-wall network audio streamer with 2x25W amplifier. Spotify, AirPlay, Bluetooth support.',
    image: '/images/products/streaming-audio/iws-225wb.webp',
    url: '/products/streaming-audio/iws-225wb',
    badge: 'Pragmatic Audio',
    specs: {
      power: '2x25W',
      streaming: 'Spotify, AirPlay, BT',
      mounting: 'In-wall',
      control: 'App controlled'
    },
    keywords: [
      'streaming', 'in-wall', 'network audio', 'Spotify', 'AirPlay',
      'Bluetooth', 'amplifier', 'smart home', 'keypad'
    ],
    available: true,
    showInGrid: true
  },
  {
    id: 'psub-102wb',
    name: 'PSUB-10.2WB',
    title: 'PSUB-10.2WB Wireless Subwoofer',
    category: 'Streaming Audio',
    categorySlug: 'streaming-audio',
    description: '10" wireless subwoofer with network streaming. Spotify, AirPlay, Bluetooth. 200W amplifier.',
    image: '/images/products/streaming-audio/psub-102wb.webp',
    url: '/products/streaming-audio/psub-102wb',
    badge: 'Pragmatic Audio',
    specs: {
      driver: '10" woofer',
      power: '200W amplifier',
      streaming: 'Spotify, AirPlay, BT',
      wireless: 'WiFi + Bluetooth'
    },
    keywords: [
      'subwoofer', 'wireless', 'streaming', 'Spotify', 'AirPlay',
      'Bluetooth', 'bass', 'home theater', 'network audio'
    ],
    available: true,
    showInGrid: true
  },
  // Tuners
  {
    id: 'tunr-d',
    name: 'TUNR-D',
    title: 'TUNR-D Professional HDTV Tuner',
    category: 'Tuners',
    categorySlug: 'tuners',
    description: 'Professional ATSC/Clear-QAM/NTSC/CATV tuner with HDMI, component, and composite outputs. RS-232 control.',
    image: '/images/products/tuners/tunr-d.webp',
    url: '/products/tuners/tunr-d',
    badge: 'Pragmatic',
    specs: {
      formats: 'ATSC, Clear-QAM, NTSC, CATV',
      resolution: '1080i/720p/480p/480i',
      outputs: 'HDMI, RGBHV, Composite',
      control: 'RS-232C, IR'
    },
    keywords: [
      'tuner', 'HDTV', 'ATSC', 'Clear-QAM', 'NTSC', 'CATV', 'cable',
      'antenna', 'digital signage', 'hotel', 'hospital', 'RS-232'
    ],
    available: true,
    showInGrid: true
  },
  {
    id: 'tunrf-1',
    name: 'TUNRF-1',
    title: 'TUNRF-1 Mini FM/TV/CATV Tuner',
    category: 'Tuners',
    categorySlug: 'tuners',
    description: 'Compact FM/TV/CATV tuner for VHF, UHF, CATV channels, and FM radio. Ideal for kiosks and digital signage.',
    image: '/images/products/tuners/tunrf-1.webp',
    url: '/products/tuners/tunrf-1',
    badge: 'Pragmatic',
    specs: {
      vhf: 'Ch 2-13',
      uhf: 'Ch 14-69',
      catv: 'Ch 1-125',
      fm: '88-108 MHz'
    },
    keywords: [
      'tuner', 'FM', 'TV', 'CATV', 'VHF', 'UHF', 'radio', 'compact',
      'kiosk', 'digital signage', 'mini'
    ],
    available: true,
    showInGrid: true
  },
  // Ceiling Tile Speakers
  {
    id: 'pts-234wd',
    name: 'PTS-234WD',
    title: 'PTS-234WD Wide Dispersion Tile Speaker',
    category: 'Ceiling Tile Speakers',
    categorySlug: 'ceiling-tile-speakers',
    description: '2x2 ceiling tile speaker with wide dispersion. 30W, 86dB sensitivity, full-range 20Hz-20kHz.',
    image: '/images/products/ceiling-tile-speakers/pts-234wd.webp',
    url: '/products/ceiling-tile-speakers/pts-234wd',
    badge: 'Pragmatic Audio',
    specs: {
      power: '30W',
      sensitivity: '86dB @ 1W/1m',
      frequency: '20Hz-20kHz',
      dimensions: '24" x 24" x 3"'
    },
    keywords: [
      'ceiling tile', 'speaker', 'wide dispersion', 'drop-in', '2x2',
      'background music', 'retail', 'hospitality', 'commercial'
    ],
    available: true,
    showInGrid: true
  },
  {
    id: 'pts-4077f',
    name: 'PTS-4077F',
    title: 'PTS-4077F Directional Tile Speaker',
    category: 'Ceiling Tile Speakers',
    categorySlug: 'ceiling-tile-speakers',
    description: '2x2 directional ceiling tile speaker with DAC technology. 96dB sensitivity, Cat5 plug-and-play.',
    image: '/images/products/ceiling-tile-speakers/pts-4077f.webp',
    url: '/products/ceiling-tile-speakers/pts-4077f',
    badge: 'Pragmatic Audio',
    specs: {
      sensitivity: '>96dB @ 1W/1m',
      frequency: '200Hz-10kHz',
      connection: 'Cat5 plug-and-play',
      dimensions: '24" x 24" x 3"'
    },
    keywords: [
      'ceiling tile', 'speaker', 'directional', 'DAC', 'focused sound',
      'digital signage', 'museum', 'exhibit', 'kiosk', 'retail'
    ],
    available: true,
    showInGrid: true
  },
  {
    id: 'pts-smbgm1',
    name: 'PTS-SMBGM1',
    title: 'PTS-SMBGM1 Sound Masking Tile Speaker',
    category: 'Ceiling Tile Speakers',
    categorySlug: 'ceiling-tile-speakers',
    description: '2x2 tile speaker with sound masking and background music. 400-600 sq ft coverage, UL/CSA/CE.',
    image: '/images/products/ceiling-tile-speakers/pts-smbgm1.webp',
    url: '/products/ceiling-tile-speakers/pts-smbgm1',
    badge: 'Pragmatic Audio',
    specs: {
      coverage: '400-600 sq ft',
      frequency: '20Hz-20kHz',
      features: 'Sound masking + BGM',
      certifications: 'UL/CSA/CE/NFPA'
    },
    keywords: [
      'ceiling tile', 'speaker', 'sound masking', 'background music', 'privacy',
      'office', 'healthcare', 'open office', 'HIPAA', 'noise masking'
    ],
    available: true,
    showInGrid: true
  },
  // In-Ceiling Speakers
  {
    id: 'pic-651-kt',
    name: 'PIC-651-KT',
    title: 'PIC-651-KT 6" Kevlar In-Ceiling Speaker',
    category: 'In-Ceiling Speakers',
    categorySlug: 'in-ceiling-speakers',
    description: '6" Kevlar woofer, 1" titanium tweeter. 60W RMS, 90dB sensitivity. Rimless thin-bezel design.',
    image: '/images/products/in-ceiling-speakers/pic-651-kt.webp',
    url: '/products/in-ceiling-speakers/pic-651-kt',
    badge: 'Pragmatic Audio',
    specs: {
      woofer: '6" Kevlar',
      power: '60W RMS',
      sensitivity: '90dB @ 1W/1m',
      frequency: '50Hz-20kHz'
    },
    keywords: [
      'in-ceiling', 'speaker', 'Kevlar', 'titanium', 'rimless', 'architectural',
      'home theater', 'whole-home audio', 'residential', 'commercial'
    ],
    available: true,
    showInGrid: true
  },
  {
    id: 'pic-651-kte',
    name: 'PIC-651-KTE',
    title: 'PIC-651-KTE 6" Kevlar In-Ceiling Speaker with Enclosure',
    category: 'In-Ceiling Speakers',
    categorySlug: 'in-ceiling-speakers',
    description: '6" Kevlar woofer with ABS back-can enclosure. 50W RMS, 105dB max output. For new construction.',
    image: '/images/products/in-ceiling-speakers/pic-651-kte.webp',
    url: '/products/in-ceiling-speakers/pic-651-kte',
    badge: 'Pragmatic Audio',
    specs: {
      woofer: '6" Kevlar',
      power: '50W RMS',
      maxOutput: '105dB @ 1m',
      enclosure: 'ABS Back-can'
    },
    keywords: [
      'in-ceiling', 'speaker', 'Kevlar', 'enclosure', 'back-can', 'new construction',
      'home theater', 'residential', 'commercial'
    ],
    available: true,
    showInGrid: true
  },
  {
    id: 'pic-651-ps',
    name: 'PIC-651-PS',
    title: 'PIC-651-PS 6.5" Polypropylene In-Ceiling Speaker',
    category: 'In-Ceiling Speakers',
    categorySlug: 'in-ceiling-speakers',
    description: '6.5" polypropylene woofer, fluid-cooled tweeter. 100W RMS, 92dB sensitivity. High-performance.',
    image: '/images/products/in-ceiling-speakers/pic-651-ps.webp',
    url: '/products/in-ceiling-speakers/pic-651-ps',
    badge: 'Pragmatic Audio',
    specs: {
      woofer: '6.5" Polypropylene',
      power: '100W RMS',
      sensitivity: '92dB @ 1W/1m',
      frequency: '50Hz-20kHz'
    },
    keywords: [
      'in-ceiling', 'speaker', 'polypropylene', 'fluid-cooled', 'high-power',
      'home theater', 'whole-home audio', 'residential'
    ],
    available: true,
    showInGrid: true
  },
  {
    id: 'pic-81-kt',
    name: 'PIC-81-KT',
    title: 'PIC-81-KT 8" Kevlar In-Ceiling Speaker',
    category: 'In-Ceiling Speakers',
    categorySlug: 'in-ceiling-speakers',
    description: '8" Kevlar woofer, 1" titanium tweeter. 80W RMS, 105dB max output. Extended bass response.',
    image: '/images/products/in-ceiling-speakers/pic-81-kt.webp',
    url: '/products/in-ceiling-speakers/pic-81-kt',
    badge: 'Pragmatic Audio',
    specs: {
      woofer: '8" Kevlar',
      power: '80W RMS',
      maxOutput: '105dB @ 1m',
      frequency: '50Hz-20kHz'
    },
    keywords: [
      'in-ceiling', 'speaker', 'Kevlar', '8-inch', 'large', 'bass',
      'home theater', 'whole-home audio', 'residential', 'commercial'
    ],
    available: true,
    showInGrid: true
  },
  // Pendant Speakers
  {
    id: 'pps-24rwd',
    name: 'PPS-24RWD',
    title: 'PPS-24RWD Wide Dispersion Pendant Speaker',
    category: 'Pendant Speakers',
    categorySlug: 'pendant-speakers',
    description: '24" wide dispersion pendant speaker. 30W, 87dB sensitivity, full-range 20Hz-20kHz. For open ceilings.',
    image: '/images/products/pendant-speakers/pps-24rwd.webp',
    url: '/products/pendant-speakers/pps-24rwd',
    badge: 'Pragmatic Audio',
    specs: {
      power: '30W max',
      sensitivity: '87dB @ 1W/1m',
      frequency: '20Hz-20kHz',
      dimensions: '24" round x 3"'
    },
    keywords: [
      'pendant', 'speaker', 'wide dispersion', 'open ceiling', 'commercial',
      'hotel', 'restaurant', 'retail', 'fitness', 'shopping mall'
    ],
    available: true,
    showInGrid: true
  }
];

// Helper function to search products
export function searchProducts(query: string): Product[] {
  if (!query.trim()) {
    return products.filter(p => p.available);
  }

  const searchTerms = query.toLowerCase().split(/\s+/);

  return products.filter(product => {
    if (!product.available) return false;

    const searchableText = [
      product.name,
      product.title,
      product.category,
      product.description,
      ...product.keywords,
      ...Object.values(product.specs)
    ].join(' ').toLowerCase();

    return searchTerms.every(term => searchableText.includes(term));
  });
}
