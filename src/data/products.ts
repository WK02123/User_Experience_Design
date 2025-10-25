// Import product images
import ps5Console from '@/assets/ps5-console.jpg';
import ps5Digital from '@/assets/ps5-digital.jpg';
import accessController from '@/assets/access-controller.jpg';
import hdCamera from '@/assets/hd-camera.jpg';
import mediaRemote from '@/assets/media-remote.jpg';
import dualsenseCharging from '@/assets/dualsense-charging.jpg';
import pulseEliteHeadset from '@/assets/pulse-elite-headset.jpg';
import pulseExploreEarbuds from '@/assets/pulse-explore-earbuds.jpg';
import ps4Pro from '@/assets/ps4-pro.jpg';
import ps4Slim from '@/assets/ps4-slim.jpg';
import backButtonAttachment from '@/assets/back-button-attachment.jpg';
import ipegaQuadCharging from '@/assets/ipega-quad-charging.jpg';
import sparkfoxPs4Charging from '@/assets/sparkfox-ps4-charging.jpg';
import iplayChargingDock from '@/assets/iplay-charging-dock.jpg';
import dobeChargingDock from '@/assets/dobe-charging-dock.jpg';
import verticalStandWhite from '@/assets/vertical-stand-white.jpg';
import switchOledMarioRed from '@/assets/switch-oled-mario-red.jpg';
import switchOledNeon from '@/assets/switch-oled-neon.jpg';
import sparkfoxSwitchCharging from '@/assets/sparkfox-switch-charging.jpg';

export interface Product {
  id: string;
  title: string;
  name?: string;
  description: string;
  price: string;
  image: string;
  tag?: string;
  category: 'ps5' | 'ps4' | 'nintendo' | 'game';
  type: 'console' | 'accessory' | 'game';
}

export const products: Product[] = [
  // PlayStation 5 Consoles
  {
    id: 'playstation-5-console',
    title: 'PlayStation 5 Console',
    description: 'Experience lightning-fast loading with an ultra-high speed SSD, deeper immersion with support for haptic feedback.',
    price: 'RM 2499',
    image: ps5Console,
    tag: 'POPULAR',
    category: 'ps5',
    type: 'console'
  },
  {
    id: 'playstation-5-digital-edition',
    title: 'PlayStation 5 Digital Edition',
    description: 'All-digital PS5 console with Ultra-High Speed SSD and integrated I/O for a streamlined gaming experience.',
    price: 'RM 2169',
    image: ps5Digital,
    tag: 'DIGITAL',
    category: 'ps5',
    type: 'console'
  },
  // PlayStation 5 Accessories
  {
    id: 'access-controller',
    title: 'Access Controller',
    description: 'Introducing the Access controller for PS5, a customisable and adaptive controller kit to make gaming more accessible to disabled gamers.',
    price: 'RM 2169',
    image: accessController,
    category: 'ps5',
    type: 'accessory'
  },
  {
    id: 'hd-camera',
    title: 'HD Camera',
    description: 'Quickly create a recording or a broadcast of yourself and your gameplay',
    price: 'RM 2169',
    image: hdCamera,
    category: 'ps5',
    type: 'accessory'
  },
  {
    id: 'media-remote-control',
    title: 'Media Remote Control',
    description: 'Quickly navigate media with built-in play/pause, fast forward and fast reverse buttons. Seamless console compatibility',
    price: 'RM 2169',
    image: mediaRemote,
    category: 'ps5',
    type: 'accessory'
  },
  {
    id: 'dualsense-charging-station',
    title: 'DualSense Charging Station',
    description: 'Charge up to two DualSense wireless controllers simultaneously without having to connect them to your PlayStation 5 console.',
    price: 'RM 2169',
    image: dualsenseCharging,
    category: 'ps5',
    type: 'accessory'
  },
  {
    id: 'pulse-elite-wireless-headset',
    title: 'Pulse Elite Wireless Headset',
    description: 'Enjoy lifelike gaming audio in a comfortable headset design equipped with a retractable microphone and built-in long-life battery.',
    price: 'RM 2169',
    image: pulseEliteHeadset,
    category: 'ps5',
    type: 'accessory'
  },
  {
    id: 'pulse-explore-wireless-earbuds',
    title: 'Pulse Explore Wireless Earbuds',
    description: 'Enjoy lifelike gaming audio wherever play takes you with a portable design equipped with hidden microphones and a companion charging case.',
    price: 'RM 2169',
    image: pulseExploreEarbuds,
    category: 'ps5',
    type: 'accessory'
  },
  // PlayStation 4 Consoles
  {
    id: 'playstation-4-pro',
    title: 'PlayStation 4 Pro',
    description: 'Experience gaming in breathtaking 4K quality with enhanced graphics and improved performance.',
    price: 'RM 1599',
    image: ps4Pro,
    tag: '4K GAMING',
    category: 'ps4',
    type: 'console'
  },
  {
    id: 'playstation-4-slim',
    title: 'PlayStation 4 Slim',
    description: 'Compact design with all the power of PS4 in a sleek, slimmer package for modern living spaces.',
    price: 'RM 1299',
    image: ps4Slim,
    tag: 'COMPACT',
    category: 'ps4',
    type: 'console'
  },
  // PlayStation 4 Accessories
  {
    id: 'controller-back-button-attachment',
    title: 'Controller Back Button Attachment',
    description: 'Introducing the Access controller for PS4, a customisable and adaptive controller kit to make gaming more accessible to disabled gamers.',
    price: 'RM 2169',
    image: backButtonAttachment,
    category: 'ps4',
    type: 'accessory'
  },
  {
    id: 'ipega-controller-ps-move-quad-charging-station',
    title: 'IPEGA Controller & PS Move QUAD Charging Station',
    description: 'Quickly create a recording or a broadcast of yourself and your gameplay',
    price: 'RM 2169',
    image: ipegaQuadCharging,
    category: 'ps4',
    type: 'accessory'
  },
  {
    id: 'sparkfox-dual-controller-charging-station-ps4',
    title: 'Sparkfox Dual Controller Charging Station',
    description: 'Quickly navigate media with built-in play/pause, fast forward and fast reverse buttons. Seamless console compatibility',
    price: 'RM 2169',
    image: sparkfoxPs4Charging,
    category: 'ps4',
    type: 'accessory'
  },
  {
    id: 'iplay-controller-charging-dock',
    title: 'IPLAY Controller Charging Dock',
    description: 'Charge up to two DualSense wireless controllers simultaneously without having to connect them to your PlayStation 5 console.',
    price: 'RM 2169',
    image: iplayChargingDock,
    category: 'ps4',
    type: 'accessory'
  },
  {
    id: 'dobe-controller-dual-charging-dock',
    title: 'DOBE Controller Dual Charging Dock',
    description: 'Enjoy lifelike gaming audio in a comfortable headset design equipped with a retractable microphone and built-in long-life battery.',
    price: 'RM 2169',
    image: dobeChargingDock,
    category: 'ps4',
    type: 'accessory'
  },
  {
    id: 'sony-vertical-stand-white',
    title: 'Sony Vertical Stand (White)',
    description: 'Enjoy lifelike gaming audio wherever play takes you with a portable design equipped with hidden microphones and a companion charging case.',
    price: 'RM 2169',
    image: verticalStandWhite,
    category: 'ps4',
    type: 'accessory'
  },
  // Nintendo Switch Consoles
  {
    id: 'nintendo-switch-oled-console-mario-red',
    title: 'Nintendo Switch OLED Console Mario Red',
    name: 'Nintendo Switch OLED Console Mario Red',
    description: 'Experience gaming in breathtaking 4K quality with enhanced graphics and improved performance',
    price: 'RM 1699',
    image: switchOledMarioRed,
    category: 'nintendo',
    type: 'console'
  },
  {
    id: 'nintendo-switch-oled-console-neon',
    title: 'Nintendo Switch OLED Console Neon',
    name: 'Nintendo Switch OLED Console Neon',
    description: 'Compact design with all the power in a sleek, slimmer package for modern living spaces.',
    price: 'RM 1999',
    image: switchOledNeon,
    category: 'nintendo',
    type: 'console'
  },
  // Nintendo Switch Accessories
  {
    id: 'sparkfox-dual-controller-charging-station-nintendo',
    title: 'Sparkfox Dual Controller Charging Station',
    name: 'Sparkfox Dual Controller Charging Station',
    description: 'Quickly navigate media with built-in play/pause, fast forward and fast reverse buttons. Seamless console compatibility',
    price: 'RM 599',
    image: sparkfoxSwitchCharging,
    category: 'nintendo',
    type: 'accessory'
  },
];

export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};

export const getProductsByCategory = (category: 'ps5' | 'ps4' | 'nintendo' | 'game'): Product[] => {
  return products.filter(product => product.category === category);
};

export const getProductsByType = (category: 'ps5' | 'ps4' | 'nintendo' | 'game', type: 'console' | 'accessory' | 'game'): Product[] => {
  return products.filter(product => product.category === category && product.type === type);
};
