

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.6549c5bc.js","_app/immutable/chunks/scheduler.63274e7e.js","_app/immutable/chunks/index.d7c298af.js"];
export const stylesheets = [];
export const fonts = [];
