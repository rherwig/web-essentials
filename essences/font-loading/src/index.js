import './main.css';

import loadFonts from './font-loader';

loadFonts().catch((err) => console.warn(`Failed to load fonts: ${err.message}`));
