

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/films/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.871a5310.js","_app/immutable/chunks/scheduler.63274e7e.js","_app/immutable/chunks/index.d7c298af.js"];
export const stylesheets = [];
export const fonts = [];
