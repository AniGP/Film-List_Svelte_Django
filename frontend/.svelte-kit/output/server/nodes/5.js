import * as universal from '../entries/pages/films/_id_/_page.js';

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/films/_id_/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/films/[id]/+page.js";
export const imports = ["_app/immutable/nodes/5.3c47f7c1.js","_app/immutable/chunks/scheduler.63274e7e.js","_app/immutable/chunks/index.d7c298af.js","_app/immutable/chunks/film-store.75b5ca4c.js","_app/immutable/chunks/index.35a173b3.js"];
export const stylesheets = [];
export const fonts = [];
