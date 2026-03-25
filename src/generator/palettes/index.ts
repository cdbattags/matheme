import {defaultPalette} from './default';
import {darkerPalette} from './darker';
import {lighterPalette} from './lighter';
import {oceanPalette} from './ocean';
import {palenightPalette} from './palenight';
import {deepforestPalette} from './deepforest';
import {midnightPalette} from './midnight';
import {rosewoodPalette} from './rosewood';
import {RawPalette} from '../types';

export const palettes: Record<string, RawPalette> = {
  default: defaultPalette,
  darker: darkerPalette,
  lighter: lighterPalette,
  ocean: oceanPalette,
  palenight: palenightPalette,
  deepforest: deepforestPalette,
  midnight: midnightPalette,
  rosewood: rosewoodPalette,
};

export {defaultPalette, darkerPalette, lighterPalette, oceanPalette, palenightPalette, deepforestPalette, midnightPalette, rosewoodPalette};
