import { c as create_ssr_component, a as subscribe, e as escape } from "../../../../chunks/ssr.js";
import { F as FilmStore } from "../../../../chunks/film-store.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_FilmStore;
  $$unsubscribe_FilmStore = subscribe(FilmStore, (value) => value);
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$unsubscribe_FilmStore();
  return `<div class="row mt-4">${`<p>No film was found with ID ${escape(data.id)}</p>`}</div>`;
});
export {
  Page as default
};
