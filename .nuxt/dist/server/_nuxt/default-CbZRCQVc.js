import { _ as __nuxt_component_0$2 } from "./nuxt-link-P6SDANQl.js";
import { mergeProps, withCtx, createVNode, useSSRContext, defineComponent, createTextVNode, toDisplayString, ref, computed, withAsyncContext, watch, unref } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderList, ssrInterpolate } from "vue/server-renderer";
import { publicAssetsURL } from "#internal/nuxt/paths";
import { _ as _export_sfc } from "../server.mjs";
import { _ as __nuxt_component_0$3 } from "./page-BGym7m62.js";
import { u as useSprite } from "./useSprite-CrKgGXHr.js";
import "ufo";
import "ofetch";
import "hookable";
import "unctx";
import "h3";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "radix3";
import "defu";
import "klona";
import "devalue";
const _imports_0 = publicAssetsURL("/images/static/logo.png");
const _sfc_main$4 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0$2;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "logo" }, _attrs))} data-v-7bfff655>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    class: "logo__link",
    to: "/"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img class="logo__image"${ssrRenderAttr("src", _imports_0)} alt="Логотип компании" data-v-7bfff655${_scopeId}>`);
      } else {
        return [
          createVNode("img", {
            class: "logo__image",
            src: _imports_0,
            alt: "Логотип компании"
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/layout/Logo/index.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_0$1 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-7bfff655"]]);
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const headerLinks = [
      { text: "О нас", path: "#" },
      { text: "Наш склад", path: "#" },
      { text: "Наши услуги", path: "#" },
      { text: "Наши цены", path: "#" },
      { text: "FAQ", path: "#" },
      { text: "Связь с нами", path: "#" }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_LayoutLogo = __nuxt_component_0$1;
      const _component_NuxtLink = __nuxt_component_0$2;
      _push(`<header${ssrRenderAttrs(mergeProps({ class: "header" }, _attrs))} data-v-8e6e7b80><div class="header__inner" data-v-8e6e7b80><div class="header__col" data-v-8e6e7b80><div class="header__logo" data-v-8e6e7b80>`);
      _push(ssrRenderComponent(_component_LayoutLogo, null, null, _parent));
      _push(`</div></div><div class="header__col" data-v-8e6e7b80><nav class="header__nav" data-v-8e6e7b80><ul class="header__nav-links" data-v-8e6e7b80><!--[-->`);
      ssrRenderList(headerLinks, (link, idx) => {
        _push(`<li class="header__nav-links-item" data-v-8e6e7b80>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          class: "header__nav-links-item-link",
          to: link.path
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(link.text)}`);
            } else {
              return [
                createTextVNode(toDisplayString(link.text), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</li>`);
      });
      _push(`<!--]--></ul></nav></div><div class="header__col" data-v-8e6e7b80><div class="header__meta" data-v-8e6e7b80><a class="header__meta-tel" href="tel:+74959999999" data-v-8e6e7b80> +7 495 999-99-99 </a></div></div><ul class="header__row header__nav-links" data-v-8e6e7b80><!--[-->`);
      ssrRenderList(headerLinks, (link, idx) => {
        _push(`<li class="header__nav-links-item" data-v-8e6e7b80>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: link.path,
          class: "header__nav-links-item-link"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(link.text)}`);
            } else {
              return [
                createTextVNode(toDisplayString(link.text), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</li>`);
      });
      _push(`<!--]--><li data-v-8e6e7b80><a class="header__nav-links-item-link" href="tel:+74959999999" data-v-8e6e7b80> +7 495 999-99-99 </a></li></ul><div class="icon-menu" data-v-8e6e7b80><span data-v-8e6e7b80></span></div></div></header>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/layout/Header/index.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-8e6e7b80"]]);
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "Icon",
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
    size: {
      type: String,
      default: "medium"
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
    const iconSizeClass = computed(() => `icon--${props.size}`);
    icon.value = ([__temp, __restore] = withAsyncContext(() => useSprite(props.name)), __temp = await __temp, __restore(), __temp);
    watch(() => props.name, async (name) => {
      icon.value = await useSprite(name);
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<svg${ssrRenderAttrs(mergeProps({
        viewBox: __props.viewBox,
        class: [icon.value.class, unref(iconSizeClass)]
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
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/Icon.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const links = [
      { text: "О нас", path: "#" },
      { text: "Наш склад", path: "#" },
      { text: "Наши услуги", path: "#" },
      { text: "Наши цены", path: "#" },
      { text: "FAQ", path: "#" },
      { text: "Связь с нами", path: "#" }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_LayoutLogo = __nuxt_component_0$1;
      const _component_NuxtLink = __nuxt_component_0$2;
      const _component_UiIcon = _sfc_main$2;
      _push(`<footer${ssrRenderAttrs(mergeProps({ class: "footer" }, _attrs))} data-v-7585e816><div class="footer__row" data-v-7585e816><div class="footer__logo" data-v-7585e816>`);
      _push(ssrRenderComponent(_component_LayoutLogo, null, null, _parent));
      _push(`</div></div><div class="footer__row" data-v-7585e816><ul class="footer__links" data-v-7585e816><!--[-->`);
      ssrRenderList(links, (link) => {
        _push(`<li class="footer__links-item" data-v-7585e816>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          class: "footer__link",
          to: "/"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(link.text)}`);
            } else {
              return [
                createTextVNode(toDisplayString(link.text), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</li>`);
      });
      _push(`<!--]--></ul><div class="footer__socials" data-v-7585e816><button class="footer__socials-button" data-v-7585e816>`);
      _push(ssrRenderComponent(_component_UiIcon, { name: "vk" }, null, _parent));
      _push(`</button><button class="footer__socials-button" data-v-7585e816>`);
      _push(ssrRenderComponent(_component_UiIcon, { name: "youtube" }, null, _parent));
      _push(`</button></div><p class="footer__copyright" data-v-7585e816>© Order Care 2024</p></div></footer>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/layout/Footer/index.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-7585e816"]]);
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_LayoutHeader = __nuxt_component_0;
  const _component_NuxtPage = __nuxt_component_0$3;
  const _component_LayoutFooter = __nuxt_component_2;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "layout" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_LayoutHeader, { class: "layout__header" }, null, _parent));
  _push(`<div class="layout__page">`);
  _push(ssrRenderComponent(_component_NuxtPage, null, null, _parent));
  _push(`</div>`);
  _push(ssrRenderComponent(_component_LayoutFooter, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _default = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  _default as default
};
//# sourceMappingURL=default-CbZRCQVc.js.map
