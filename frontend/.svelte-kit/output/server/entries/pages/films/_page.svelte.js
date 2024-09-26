import { c as create_ssr_component, a as subscribe, b as each, d as add_attribute, e as escape } from "../../../chunks/ssr.js";
import { F as FilmStore } from "../../../chunks/film-store.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $FilmStore, $$unsubscribe_FilmStore;
  $$unsubscribe_FilmStore = subscribe(FilmStore, (value) => $FilmStore = value);
  $$unsubscribe_FilmStore();
  return `<div><h2 class="my-4" data-svelte-h="svelte-hafeum">Film List</h2> <div class="my-4 row">${each($FilmStore, (film) => {
    return `<div class="col-12 col-sm-6 col-md-4"><div class="card w-100 h-100"><img class="card-img-top" style="height: 300px; object-fit: cover"${add_attribute("src", film.image, 0)} alt="Film"> <div class="card-body d-flex flex-column justify-content-between gap-4"><div><h5 class="card-title">${escape(film.name)}</h5> <p class="card-text">Directed by ${escape(film.director)}</p></div> <div><a href="${"/films/" + escape(film.id, true)}" class="btn btn-primary">View</a></div> </div></div> </div>`;
  })}</div></div>`;
});
export {
  Page as default
};
