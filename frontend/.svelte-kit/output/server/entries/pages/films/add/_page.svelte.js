import { c as create_ssr_component, d as add_attribute } from "../../../../chunks/ssr.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let name = "";
  let director = "";
  let description = "";
  return `<div><h2 class="my-4" data-svelte-h="svelte-lvw8k2">Add a Film</h2> ${``} <div class="col-12 col-md-6"><form><div class="mb-3"><input class="form-control" type="text" placeholder="name"${add_attribute("value", name, 0)}></div> <div class="mb-3"><input class="form-control" type="text" placeholder="director"${add_attribute("value", director, 0)}></div> <div class="mb-3"><input class="form-control" type="text" placeholder="description"${add_attribute("value", description, 0)}></div> <div class="mb-3"><input class="form-control" type="file"></div> <button class="btn btn-primary" type="submit" data-svelte-h="svelte-1b10frf">Submit</button></form></div></div>`;
});
export {
  Page as default
};
