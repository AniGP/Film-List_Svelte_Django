

export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/films/add/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/6.5a312b6d.js","_app/immutable/chunks/scheduler.63274e7e.js","_app/immutable/chunks/index.d7c298af.js","_app/immutable/chunks/film-store.75b5ca4c.js","_app/immutable/chunks/index.35a173b3.js","_app/immutable/chunks/singletons.fe9d2f3b.js"];
export const stylesheets = [];
export const fonts = [];
