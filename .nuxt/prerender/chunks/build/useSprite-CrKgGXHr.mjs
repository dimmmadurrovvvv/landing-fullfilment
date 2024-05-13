const sprites = {
  "icons": () => import('./icons-DI-MLJmM.mjs').then((r) => r.default || r)
};
const spriteClass = "";
const spriteClassPrefix = "";
const defaultSprite = "icons";
function generateName(name) {
  return name.toLowerCase().replace(/\.svg$/, "").replace(/[^a-z0-9-:]/g, "-").replace(/:/g, "--");
}
const useSprite = async (name) => {
  let [sprite, icon] = name.split("/");
  if (!icon) {
    icon = sprite;
    sprite = defaultSprite;
  }
  const spriteFile = sprites[sprite] ? await sprites[sprite]() : "";
  return {
    sprite,
    icon,
    url: spriteFile + `#${generateName(icon)}`,
    class: `${spriteClass} ${spriteClassPrefix}${sprite}`
  };
};

export { useSprite as u };
//# sourceMappingURL=useSprite-CrKgGXHr.mjs.map
