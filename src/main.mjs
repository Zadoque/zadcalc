import { createRequire } from 'module';
const require = createRequire(import.meta.url);

const mathResolver = require('./main.js');

export default mathResolver;
