import { u as useSprite } from './useSprite-CrKgGXHr.mjs';
import { defineComponent, ref, withAsyncContext, watch, mergeProps, useSSRContext } from 'file:///Users/dmitrij/Documents/GitHub/landing-fullfilment/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderAttr } from 'file:///Users/dmitrij/Documents/GitHub/landing-fullfilment/node_modules/vue/server-renderer/index.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "svg-icon",
  __ssrInlineRender: true,
  props: {
    name: {
      type: String,
      required: true
    },
    title: {
      type: String,
      default: null
    },
    desc: {
      type: String,
      default: null
    },
    viewBox: {
      type: String,
      default: null,
      validator(value) {
        return value.split(" ").every((v) => {
          return !isNaN(parseInt(v));
        });
      }
    }
  },
  async setup(__props) {
    let __temp, __restore;
    const props = __props;
    const icon = ref({
      url: "",
      class: ""
    });
    icon.value = ([__temp, __restore] = withAsyncContext(() => useSprite(props.name)), __temp = await __temp, __restore(), __temp);
    watch(() => props.name, async (name) => {
      icon.value = await useSprite(name);
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<svg${ssrRenderAttrs(mergeProps({
        viewBox: __props.viewBox,
        class: icon.value.class
      }, _attrs))}>`);
      if (__props.title) {
        _push(`<title>${ssrInterpolate(__props.title)}</title>`);
      } else {
        _push(`<!---->`);
      }
      if (__props.desc) {
        _push(`<desc>${ssrInterpolate(__props.desc)}</desc>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<use${ssrRenderAttr("href", icon.value.url)}></use></svg>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxtjs/svg-sprite/dist/runtime/components/svg-icon.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=svg-icon-CIyZi82G.mjs.map
