import { defineComponent, openBlock, createElementBlock, createElementVNode, warn, getCurrentInstance, inject, ref, computed, unref, mergeProps, renderSlot, watch, provide, normalizeClass, createBlock, Transition, toHandlers, withCtx, withKeys, withModifiers, createTextVNode, toDisplayString, createVNode, withDirectives, vShow, useSSRContext, defineAsyncComponent, Fragment, renderList, createCommentVNode } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderAttr, ssrRenderList, ssrRenderClass, ssrRenderStyle } from "vue/server-renderer";
import { c as useIdInjection, _ as _export_sfc$1 } from "../server.mjs";
import { publicAssetsURL } from "#internal/nuxt/paths";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation } from "swiper/modules";
import "./entry-styles-2.mjs-CoOWa3Bn.js";
import emailjs from "emailjs-com";
import { isString, isObject, hasOwn, NOOP, isArray } from "@vue/shared";
import { fromPairs, castArray } from "lodash-unified";
const isUndefined = (val) => val === void 0;
const isNumber = (val) => typeof val === "number";
const isStringNumber = (val) => {
  if (!isString(val)) {
    return false;
  }
  return !Number.isNaN(Number(val));
};
class ElementPlusError extends Error {
  constructor(m) {
    super(m);
    this.name = "ElementPlusError";
  }
}
function debugWarn(scope, message) {
  if (process.env.NODE_ENV !== "production") {
    const error = isString(scope) ? new ElementPlusError(`[${scope}] ${message}`) : scope;
    console.warn(error);
  }
}
const SCOPE = "utils/dom/style";
function addUnit(value, defaultUnit = "px") {
  if (!value)
    return "";
  if (isNumber(value) || isStringNumber(value)) {
    return `${value}${defaultUnit}`;
  } else if (isString(value)) {
    return value;
  }
  debugWarn(SCOPE, "binding value must be a string or number");
}
/*! Element Plus Icons Vue v2.3.1 */
var arrow_right_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  name: "ArrowRight",
  __name: "arrow-right",
  setup(__props) {
    return (_ctx, _cache) => (openBlock(), createElementBlock("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      createElementVNode("path", {
        fill: "currentColor",
        d: "M340.864 149.312a30.592 30.592 0 0 0 0 42.752L652.736 512 340.864 831.872a30.592 30.592 0 0 0 0 42.752 29.12 29.12 0 0 0 41.728 0L714.24 534.336a32 32 0 0 0 0-44.672L382.592 149.376a29.12 29.12 0 0 0-41.728 0z"
      })
    ]));
  }
});
var arrow_right_default = arrow_right_vue_vue_type_script_setup_true_lang_default;
const epPropKey = "__epPropKey";
const definePropType = (val) => val;
const isEpProp = (val) => isObject(val) && !!val[epPropKey];
const buildProp = (prop, key) => {
  if (!isObject(prop) || isEpProp(prop))
    return prop;
  const { values, required, default: defaultValue, type, validator } = prop;
  const _validator = values || validator ? (val) => {
    let valid = false;
    let allowedValues = [];
    if (values) {
      allowedValues = Array.from(values);
      if (hasOwn(prop, "default")) {
        allowedValues.push(defaultValue);
      }
      valid || (valid = allowedValues.includes(val));
    }
    if (validator)
      valid || (valid = validator(val));
    if (!valid && allowedValues.length > 0) {
      const allowValuesText = [...new Set(allowedValues)].map((value) => JSON.stringify(value)).join(", ");
      warn(`Invalid prop: validation failed${key ? ` for prop "${key}"` : ""}. Expected one of [${allowValuesText}], got value ${JSON.stringify(val)}.`);
    }
    return valid;
  } : void 0;
  const epProp = {
    type,
    required: !!required,
    validator: _validator,
    [epPropKey]: true
  };
  if (hasOwn(prop, "default"))
    epProp.default = defaultValue;
  return epProp;
};
const buildProps = (props) => fromPairs(Object.entries(props).map(([key, option]) => [
  key,
  buildProp(option, key)
]));
const withInstall = (main, extra) => {
  main.install = (app) => {
    for (const comp of [main, ...Object.values(extra != null ? extra : {})]) {
      app.component(comp.name, comp);
    }
  };
  if (extra) {
    for (const [key, comp] of Object.entries(extra)) {
      main[key] = comp;
    }
  }
  return main;
};
const withNoopInstall = (component) => {
  component.install = NOOP;
  return component;
};
const UPDATE_MODEL_EVENT = "update:modelValue";
const CHANGE_EVENT = "change";
const mutable = (val) => val;
const defaultNamespace = "el";
const statePrefix = "is-";
const _bem = (namespace, block, blockSuffix, element, modifier) => {
  let cls = `${namespace}-${block}`;
  if (blockSuffix) {
    cls += `-${blockSuffix}`;
  }
  if (element) {
    cls += `__${element}`;
  }
  if (modifier) {
    cls += `--${modifier}`;
  }
  return cls;
};
const namespaceContextKey = Symbol("namespaceContextKey");
const useGetDerivedNamespace = (namespaceOverrides) => {
  const derivedNamespace = getCurrentInstance() ? inject(namespaceContextKey, ref(defaultNamespace)) : ref(defaultNamespace);
  const namespace = computed(() => {
    return unref(derivedNamespace) || defaultNamespace;
  });
  return namespace;
};
const useNamespace = (block, namespaceOverrides) => {
  const namespace = useGetDerivedNamespace();
  const b = (blockSuffix = "") => _bem(namespace.value, block, blockSuffix, "", "");
  const e = (element) => element ? _bem(namespace.value, block, "", element, "") : "";
  const m = (modifier) => modifier ? _bem(namespace.value, block, "", "", modifier) : "";
  const be = (blockSuffix, element) => blockSuffix && element ? _bem(namespace.value, block, blockSuffix, element, "") : "";
  const em = (element, modifier) => element && modifier ? _bem(namespace.value, block, "", element, modifier) : "";
  const bm = (blockSuffix, modifier) => blockSuffix && modifier ? _bem(namespace.value, block, blockSuffix, "", modifier) : "";
  const bem = (blockSuffix, element, modifier) => blockSuffix && element && modifier ? _bem(namespace.value, block, blockSuffix, element, modifier) : "";
  const is = (name, ...args) => {
    const state = args.length >= 1 ? args[0] : true;
    return name && state ? `${statePrefix}${name}` : "";
  };
  const cssVar = (object) => {
    const styles = {};
    for (const key in object) {
      if (object[key]) {
        styles[`--${namespace.value}-${key}`] = object[key];
      }
    }
    return styles;
  };
  const cssVarBlock = (object) => {
    const styles = {};
    for (const key in object) {
      if (object[key]) {
        styles[`--${namespace.value}-${block}-${key}`] = object[key];
      }
    }
    return styles;
  };
  const cssVarName = (name) => `--${namespace.value}-${name}`;
  const cssVarBlockName = (name) => `--${namespace.value}-${block}-${name}`;
  return {
    namespace,
    b,
    e,
    m,
    be,
    em,
    bm,
    bem,
    is,
    cssVar,
    cssVarName,
    cssVarBlock,
    cssVarBlockName
  };
};
var _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const iconProps = buildProps({
  size: {
    type: definePropType([Number, String])
  },
  color: {
    type: String
  }
});
const __default__$3 = defineComponent({
  name: "ElIcon",
  inheritAttrs: false
});
const _sfc_main$f = /* @__PURE__ */ defineComponent({
  ...__default__$3,
  props: iconProps,
  setup(__props) {
    const props = __props;
    const ns = useNamespace("icon");
    const style = computed(() => {
      const { size, color } = props;
      if (!size && !color)
        return {};
      return {
        fontSize: isUndefined(size) ? void 0 : addUnit(size),
        "--color": color
      };
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("i", mergeProps({
        class: unref(ns).b(),
        style: unref(style)
      }, _ctx.$attrs), [
        renderSlot(_ctx.$slots, "default")
      ], 16);
    };
  }
});
var Icon = /* @__PURE__ */ _export_sfc(_sfc_main$f, [["__file", "icon.vue"]]);
const ElIcon = withInstall(Icon);
const emitChangeFn = (value) => isNumber(value) || isString(value) || isArray(value);
const collapseProps = buildProps({
  accordion: Boolean,
  modelValue: {
    type: definePropType([Array, String, Number]),
    default: () => mutable([])
  }
});
const collapseEmits = {
  [UPDATE_MODEL_EVENT]: emitChangeFn,
  [CHANGE_EVENT]: emitChangeFn
};
const collapseContextKey = Symbol("collapseContextKey");
const useCollapse = (props, emit) => {
  const activeNames = ref(castArray(props.modelValue));
  const setActiveNames = (_activeNames) => {
    activeNames.value = _activeNames;
    const value = props.accordion ? activeNames.value[0] : activeNames.value;
    emit(UPDATE_MODEL_EVENT, value);
    emit(CHANGE_EVENT, value);
  };
  const handleItemClick = (name) => {
    if (props.accordion) {
      setActiveNames([activeNames.value[0] === name ? "" : name]);
    } else {
      const _activeNames = [...activeNames.value];
      const index2 = _activeNames.indexOf(name);
      if (index2 > -1) {
        _activeNames.splice(index2, 1);
      } else {
        _activeNames.push(name);
      }
      setActiveNames(_activeNames);
    }
  };
  watch(() => props.modelValue, () => activeNames.value = castArray(props.modelValue), { deep: true });
  provide(collapseContextKey, {
    activeNames,
    handleItemClick
  });
  return {
    activeNames,
    setActiveNames
  };
};
const useCollapseDOM = () => {
  const ns = useNamespace("collapse");
  const rootKls = computed(() => ns.b());
  return {
    rootKls
  };
};
const __default__$2 = defineComponent({
  name: "ElCollapse"
});
const _sfc_main$e = /* @__PURE__ */ defineComponent({
  ...__default__$2,
  props: collapseProps,
  emits: collapseEmits,
  setup(__props, { expose, emit }) {
    const props = __props;
    const { activeNames, setActiveNames } = useCollapse(props, emit);
    const { rootKls } = useCollapseDOM();
    expose({
      activeNames,
      setActiveNames
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(unref(rootKls))
      }, [
        renderSlot(_ctx.$slots, "default")
      ], 2);
    };
  }
});
var Collapse = /* @__PURE__ */ _export_sfc(_sfc_main$e, [["__file", "collapse.vue"]]);
const __default__$1 = defineComponent({
  name: "ElCollapseTransition"
});
const _sfc_main$d = /* @__PURE__ */ defineComponent({
  ...__default__$1,
  setup(__props) {
    const ns = useNamespace("collapse-transition");
    const reset = (el) => {
      el.style.maxHeight = "";
      el.style.overflow = el.dataset.oldOverflow;
      el.style.paddingTop = el.dataset.oldPaddingTop;
      el.style.paddingBottom = el.dataset.oldPaddingBottom;
    };
    const on = {
      beforeEnter(el) {
        if (!el.dataset)
          el.dataset = {};
        el.dataset.oldPaddingTop = el.style.paddingTop;
        el.dataset.oldPaddingBottom = el.style.paddingBottom;
        if (el.style.height)
          el.dataset.elExistsHeight = el.style.height;
        el.style.maxHeight = 0;
        el.style.paddingTop = 0;
        el.style.paddingBottom = 0;
      },
      enter(el) {
        requestAnimationFrame(() => {
          el.dataset.oldOverflow = el.style.overflow;
          if (el.dataset.elExistsHeight) {
            el.style.maxHeight = el.dataset.elExistsHeight;
          } else if (el.scrollHeight !== 0) {
            el.style.maxHeight = `${el.scrollHeight}px`;
          } else {
            el.style.maxHeight = 0;
          }
          el.style.paddingTop = el.dataset.oldPaddingTop;
          el.style.paddingBottom = el.dataset.oldPaddingBottom;
          el.style.overflow = "hidden";
        });
      },
      afterEnter(el) {
        el.style.maxHeight = "";
        el.style.overflow = el.dataset.oldOverflow;
      },
      enterCancelled(el) {
        reset(el);
      },
      beforeLeave(el) {
        if (!el.dataset)
          el.dataset = {};
        el.dataset.oldPaddingTop = el.style.paddingTop;
        el.dataset.oldPaddingBottom = el.style.paddingBottom;
        el.dataset.oldOverflow = el.style.overflow;
        el.style.maxHeight = `${el.scrollHeight}px`;
        el.style.overflow = "hidden";
      },
      leave(el) {
        if (el.scrollHeight !== 0) {
          el.style.maxHeight = 0;
          el.style.paddingTop = 0;
          el.style.paddingBottom = 0;
        }
      },
      afterLeave(el) {
        reset(el);
      },
      leaveCancelled(el) {
        reset(el);
      }
    };
    return (_ctx, _cache) => {
      return openBlock(), createBlock(Transition, mergeProps({
        name: unref(ns).b()
      }, toHandlers(on)), {
        default: withCtx(() => [
          renderSlot(_ctx.$slots, "default")
        ]),
        _: 3
      }, 16, ["name"]);
    };
  }
});
var CollapseTransition = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["__file", "collapse-transition.vue"]]);
CollapseTransition.install = (app) => {
  app.component(CollapseTransition.name, CollapseTransition);
};
const _CollapseTransition = CollapseTransition;
const collapseItemProps = buildProps({
  title: {
    type: String,
    default: ""
  },
  name: {
    type: definePropType([String, Number]),
    default: void 0
  },
  disabled: Boolean
});
const useCollapseItem = (props) => {
  const collapse = inject(collapseContextKey);
  const { namespace } = useNamespace("collapse");
  const focusing = ref(false);
  const isClick = ref(false);
  const idInjection = useIdInjection();
  const id = computed(() => idInjection.current++);
  const name = computed(() => {
    var _a;
    return (_a = props.name) != null ? _a : `${namespace.value}-id-${idInjection.prefix}-${unref(id)}`;
  });
  const isActive = computed(() => collapse == null ? void 0 : collapse.activeNames.value.includes(unref(name)));
  const handleFocus = () => {
    setTimeout(() => {
      if (!isClick.value) {
        focusing.value = true;
      } else {
        isClick.value = false;
      }
    }, 50);
  };
  const handleHeaderClick = () => {
    if (props.disabled)
      return;
    collapse == null ? void 0 : collapse.handleItemClick(unref(name));
    focusing.value = false;
    isClick.value = true;
  };
  const handleEnterClick = () => {
    collapse == null ? void 0 : collapse.handleItemClick(unref(name));
  };
  return {
    focusing,
    id,
    isActive,
    handleFocus,
    handleHeaderClick,
    handleEnterClick
  };
};
const useCollapseItemDOM = (props, { focusing, isActive, id }) => {
  const ns = useNamespace("collapse");
  const rootKls = computed(() => [
    ns.b("item"),
    ns.is("active", unref(isActive)),
    ns.is("disabled", props.disabled)
  ]);
  const headKls = computed(() => [
    ns.be("item", "header"),
    ns.is("active", unref(isActive)),
    { focusing: unref(focusing) && !props.disabled }
  ]);
  const arrowKls = computed(() => [
    ns.be("item", "arrow"),
    ns.is("active", unref(isActive))
  ]);
  const itemWrapperKls = computed(() => ns.be("item", "wrap"));
  const itemContentKls = computed(() => ns.be("item", "content"));
  const scopedContentId = computed(() => ns.b(`content-${unref(id)}`));
  const scopedHeadId = computed(() => ns.b(`head-${unref(id)}`));
  return {
    arrowKls,
    headKls,
    rootKls,
    itemWrapperKls,
    itemContentKls,
    scopedContentId,
    scopedHeadId
  };
};
const _hoisted_1 = ["id", "aria-expanded", "aria-controls", "aria-describedby", "tabindex"];
const _hoisted_2 = ["id", "aria-hidden", "aria-labelledby"];
const __default__ = defineComponent({
  name: "ElCollapseItem"
});
const _sfc_main$c = /* @__PURE__ */ defineComponent({
  ...__default__,
  props: collapseItemProps,
  setup(__props, { expose }) {
    const props = __props;
    const {
      focusing,
      id,
      isActive,
      handleFocus,
      handleHeaderClick,
      handleEnterClick
    } = useCollapseItem(props);
    const {
      arrowKls,
      headKls,
      rootKls,
      itemWrapperKls,
      itemContentKls,
      scopedContentId,
      scopedHeadId
    } = useCollapseItemDOM(props, { focusing, isActive, id });
    expose({
      isActive
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(unref(rootKls))
      }, [
        createElementVNode("button", {
          id: unref(scopedHeadId),
          class: normalizeClass(unref(headKls)),
          "aria-expanded": unref(isActive),
          "aria-controls": unref(scopedContentId),
          "aria-describedby": unref(scopedContentId),
          tabindex: _ctx.disabled ? -1 : 0,
          type: "button",
          onClick: _cache[0] || (_cache[0] = (...args) => unref(handleHeaderClick) && unref(handleHeaderClick)(...args)),
          onKeydown: _cache[1] || (_cache[1] = withKeys(withModifiers((...args) => unref(handleEnterClick) && unref(handleEnterClick)(...args), ["stop", "prevent"]), ["space", "enter"])),
          onFocus: _cache[2] || (_cache[2] = (...args) => unref(handleFocus) && unref(handleFocus)(...args)),
          onBlur: _cache[3] || (_cache[3] = ($event) => focusing.value = false)
        }, [
          renderSlot(_ctx.$slots, "title", {}, () => [
            createTextVNode(toDisplayString(_ctx.title), 1)
          ]),
          createVNode(unref(ElIcon), {
            class: normalizeClass(unref(arrowKls))
          }, {
            default: withCtx(() => [
              createVNode(unref(arrow_right_default))
            ]),
            _: 1
          }, 8, ["class"])
        ], 42, _hoisted_1),
        createVNode(unref(_CollapseTransition), null, {
          default: withCtx(() => [
            withDirectives(createElementVNode("div", {
              id: unref(scopedContentId),
              role: "region",
              class: normalizeClass(unref(itemWrapperKls)),
              "aria-hidden": !unref(isActive),
              "aria-labelledby": unref(scopedHeadId)
            }, [
              createElementVNode("div", {
                class: normalizeClass(unref(itemContentKls))
              }, [
                renderSlot(_ctx.$slots, "default")
              ], 2)
            ], 10, _hoisted_2), [
              [vShow, unref(isActive)]
            ])
          ]),
          _: 3
        })
      ], 2);
    };
  }
});
var CollapseItem = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["__file", "collapse-item.vue"]]);
const ElCollapse = withInstall(Collapse, {
  CollapseItem
});
const ElCollapseItem = withNoopInstall(CollapseItem);
const _sfc_main$b = /* @__PURE__ */ defineComponent({
  __name: "Button",
  __ssrInlineRender: true,
  props: {
    text: {
      type: String,
      required: false,
      default: null
    },
    theme: {
      type: String,
      required: false,
      default: "primary"
    },
    size: {
      type: String,
      required: false,
      default: "medium"
    }
  },
  setup(__props) {
    const props = __props;
    const buttonClass = computed(() => {
      return [props.theme, props.size];
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<button${ssrRenderAttrs(mergeProps({
        class: ["button", unref(buttonClass)]
      }, _attrs))} data-v-a3566d05><span class="button__text" data-v-a3566d05>${ssrInterpolate(__props.text)}</span></button>`);
    };
  }
});
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/Button.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const __nuxt_component_1$1 = /* @__PURE__ */ _export_sfc$1(_sfc_main$b, [["__scopeId", "data-v-a3566d05"]]);
const _imports_0$6 = publicAssetsURL("/images/static/marketplaces-with-truck.png");
const __nuxt_component_1_lazy$3 = defineAsyncComponent(() => import("./Feedback-Dv-1hPW0.js").then((c) => c.default || c));
const title = "Order care - Ваш фулфилмент полного цикла в Москве";
const _sfc_main$a = /* @__PURE__ */ defineComponent({
  __name: "Introduction",
  __ssrInlineRender: true,
  setup(__props) {
    const showPopup = ref(false);
    const setShow = () => {
      showPopup.value = !showPopup.value;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UiButton = __nuxt_component_1$1;
      const _component_LazyViewPopupFeedback = __nuxt_component_1_lazy$3;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "main-page-introduction" }, _attrs))} data-v-3d439048><div class="main-page-introduction__inner" data-v-3d439048><div class="main-page-introduction__info" data-v-3d439048><h1 class="main-page-introduction__info-title" data-v-3d439048>${ssrInterpolate(title)}</h1><p class="main-page-introduction__info-subtitle" data-v-3d439048> Доставим ваши товары от Китая до маркетплейса </p><div class="main-page-introduction__row" data-v-3d439048>`);
      _push(ssrRenderComponent(_component_UiButton, {
        onClick: setShow,
        text: "Стать клиентом",
        class: "main-page-introduction__info-submit"
      }, null, _parent));
      _push(`<div class="main-page-introduction__image _tablet" data-v-3d439048><img alt="Иллюстрация грузовика" class="main-page-introduction__image-pic"${ssrRenderAttr("src", _imports_0$6)} data-v-3d439048></div></div></div><div class="main-page-introduction__image _mobile" data-v-3d439048><img class="main-page-introduction__image-pic"${ssrRenderAttr("src", _imports_0$6)} alt="Иллюстрация грузовика" data-v-3d439048></div></div>`);
      _push(ssrRenderComponent(_component_LazyViewPopupFeedback, {
        modelValue: showPopup.value,
        "onUpdate:modelValue": ($event) => showPopup.value = $event
      }, null, _parent));
      _push(`</section>`);
    };
  }
});
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/view/page/main/Introduction.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc$1(_sfc_main$a, [["__scopeId", "data-v-3d439048"]]);
const _imports_0$5 = publicAssetsURL("/images/static/steps-in-circle.png");
const _sfc_main$9 = /* @__PURE__ */ defineComponent({
  __name: "Advantages",
  __ssrInlineRender: true,
  setup(__props) {
    const cards = [
      { text: "Забор товара день в день" },
      { text: "График работы - 24/7" },
      { text: "Полное сопровеждение " }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "main-page-advantages" }, _attrs))} data-v-8dd461b3><div class="main-page-advantages__inner" data-v-8dd461b3><ul class="main-page-advantages__list" data-v-8dd461b3><!--[-->`);
      ssrRenderList(cards, (card, idx) => {
        _push(`<li class="main-page-advantages__list-item" data-v-8dd461b3><div class="main-page-advantages__card" data-v-8dd461b3><span class="main-page-advantages__card-step" data-v-8dd461b3>${ssrInterpolate(idx + 1)}</span><p class="main-page-advantages__card-text" data-v-8dd461b3>${ssrInterpolate(card.text)}</p></div></li>`);
      });
      _push(`<!--]--></ul><div class="main-page-advantages__image" data-v-8dd461b3><img class="main-page-advantages__image-pic"${ssrRenderAttr("src", _imports_0$5)} alt="Иллюстрация ступеней" data-v-8dd461b3></div></div></section>`);
    };
  }
});
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/view/page/main/Advantages.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc$1(_sfc_main$9, [["__scopeId", "data-v-8dd461b3"]]);
const _imports_0$4 = publicAssetsURL("/images/static/cv-with-hands.png");
const __nuxt_component_1_lazy$2 = defineAsyncComponent(() => import("./Feedback-Dv-1hPW0.js").then((c) => c.default || c));
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  __name: "About",
  __ssrInlineRender: true,
  setup(__props) {
    const showPopup = ref(false);
    const setShow = () => {
      showPopup.value = !showPopup.value;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UiButton = __nuxt_component_1$1;
      const _component_LazyViewPopupFeedback = __nuxt_component_1_lazy$2;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "main-page-about" }, _attrs))} data-v-3981c556><div class="main-page-about__inner" data-v-3981c556><div class="main-page-about__info" data-v-3981c556><h2 class="main-page-about__info-title" data-v-3981c556>О нас</h2><p class="main-page-about__info-paragraph" data-v-3981c556> Фулфилмент для маркетплейсов Order Care создан специалистами в сфере логистики и онлайн торговли с опытом работы в индустрии маркетплейсов с 2019 года. </p><p class="main-page-about__info-paragraph" data-v-3981c556> Наша команда возьмет работу с торговыми площадками на себя под ключ: от подбора товара и доставки на склады маркетплейсов до полноценного маркетинга и продвижения товара в ТОП. </p><p class="main-page-about__info-paragraph" data-v-3981c556> Нашими клиентами являются и могут стать как начинающие предприниматели, так и крупные производственные компании или дистрибьютеры, заинтересованные в новых каналах продаж своей продукции. </p><div class="main-page-about__row" data-v-3981c556>`);
      _push(ssrRenderComponent(_component_UiButton, {
        onClick: setShow,
        class: "main-page-about__info-detail-button",
        text: "Подробнее"
      }, null, _parent));
      _push(`<div class="main-page-about__image _tablet" data-v-3981c556><img alt="Документ в руках" class="main-page-about__image-pic"${ssrRenderAttr("src", _imports_0$4)} data-v-3981c556></div></div></div><div class="main-page-about__image _mobile" data-v-3981c556><img class="main-page-about__image-pic"${ssrRenderAttr("src", _imports_0$4)} alt="Документ в руках" data-v-3981c556></div></div>`);
      _push(ssrRenderComponent(_component_LazyViewPopupFeedback, {
        modelValue: showPopup.value,
        "onUpdate:modelValue": ($event) => showPopup.value = $event
      }, null, _parent));
      _push(`</section>`);
    };
  }
});
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/view/page/main/About.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc$1(_sfc_main$8, [["__scopeId", "data-v-3981c556"]]);
const _imports_0$3 = publicAssetsURL("/images/static/stock-image.png");
const __nuxt_component_1_lazy$1 = defineAsyncComponent(() => import("./Feedback-Dv-1hPW0.js").then((c) => c.default || c));
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "Stocks",
  __ssrInlineRender: true,
  setup(__props) {
    const showPopup = ref(false);
    const setShow = () => {
      showPopup.value = !showPopup.value;
    };
    const cards = [
      { title: "1 000", mark: "м²", description: "площадь склада" },
      { title: "50+", description: "сотрудников склада" }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UiButton = __nuxt_component_1$1;
      const _component_LazyViewPopupFeedback = __nuxt_component_1_lazy$1;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "main-page-stocks" }, _attrs))} data-v-7a8e91b0><div class="main-page-stocks__meta" data-v-7a8e91b0><h2 class="main-page-stocks__meta-title" data-v-7a8e91b0>Складские помещения</h2><p class="main-page-stocks__meta-subtitle" data-v-7a8e91b0> Мы понимаем, что работа с маркетплейсами требует быстрого и точного выполнения заказов </p></div><div class="main-page-stocks__main" data-v-7a8e91b0><div class="main-page-stocks__content" data-v-7a8e91b0><ul class="main-page-stocks__cards" data-v-7a8e91b0><!--[-->`);
      ssrRenderList(cards, (card) => {
        _push(`<li class="main-page-stocks__cards-item" data-v-7a8e91b0><div class="main-page-stocks__card" data-v-7a8e91b0><h3 class="main-page-stocks__card-title" data-v-7a8e91b0>${ssrInterpolate(card.title)} `);
        if (card.mark) {
          _push(`<span class="main-page-stocks__card-title--mark" data-v-7a8e91b0>${ssrInterpolate(card.mark)}</span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</h3><p class="main-page-stocks__card-description" data-v-7a8e91b0>${ssrInterpolate(card.description)}</p></div></li>`);
      });
      _push(`<!--]--></ul>`);
      _push(ssrRenderComponent(_component_UiButton, {
        onClick: setShow,
        class: "main-page-stocks__details-button _pc",
        text: "Узнать больше",
        theme: "transparent"
      }, null, _parent));
      _push(`</div><div class="main-page-stocks__image" data-v-7a8e91b0><img class="main-page-stocks__image-pic"${ssrRenderAttr("src", _imports_0$3)} alt="Фото склада" data-v-7a8e91b0></div>`);
      _push(ssrRenderComponent(_component_UiButton, {
        onClick: setShow,
        class: "main-page-stocks__details-button _mobile",
        text: "Узнать больше",
        theme: "transparent"
      }, null, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_LazyViewPopupFeedback, {
        modelValue: showPopup.value,
        "onUpdate:modelValue": ($event) => showPopup.value = $event
      }, null, _parent));
      _push(`</section>`);
    };
  }
});
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/view/page/main/Stocks.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc$1(_sfc_main$7, [["__scopeId", "data-v-7a8e91b0"]]);
const __nuxt_component_1_lazy = defineAsyncComponent(() => import("./Base-BDlhsWVK.js").then((c) => c.default || c));
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "Services",
  __ssrInlineRender: true,
  setup(__props) {
    const showPopup = ref(false);
    const modalContent = ref([]);
    const popupTitle = ref("Логистические услуги");
    const cards = [
      {
        title: "Наши услуги",
        description: "Наша компания управляет операционной деятельностью от приёма товара у поставщика и доставки покупателю до клиентской поддержки.",
        image: "/images/static/clipboard-with-checklist.png",
        big: true
      },
      {
        subtitle: "Доставка товара из Китая",
        button: {
          text: "Узнать больше",
          callback: () => {
          }
        },
        modalContent: [
          {
            text: "Анализ рынка",
            price: "Договорная"
          },
          { text: "Подбор по категориям и производителям ", price: "Договорная" },
          { text: "Проверка товара на соответствие", price: "Договорная" },
          { text: "Карго до любой точки мира", price: "Договорная" }
        ]
      },
      {
        subtitle: "Забор и доставка товара",
        button: {
          text: "Узнать больше",
          callback: () => {
          }
        },
        modalContent: [
          {
            text: "Забор товара день в день",
            price: "Договорная"
          },
          { text: "Перевозка товара на наш склад", price: "Договорная" },
          { text: "Обработка товара", price: "Договорная" },
          { text: "Поставка товара на МП или ПВЗ", price: "Договорная" }
        ]
      },
      {
        subtitle: "Обработка товара",
        button: {
          text: "Узнать больше",
          callback: () => {
          }
        },
        modalContent: [
          {
            text: "Приемка товара ( пересчет и проверка на первичный Брак )",
            price: "Договорная"
          },
          { text: "Отрез ниток, переупаковка, биркование ( при необходимости )", price: "Договорная" },
          { text: "Наклейка штрих кодов", price: "Договорная" },
          { text: "Сбор товара в короба, палетирование", price: "Договорная" }
        ]
      },
      {
        subtitle: "Доп услуги",
        button: {
          text: "Узнать больше",
          callback: () => {
          }
        },
        modalContent: [
          {
            text: "Предоставление Менеджера ЛК2",
            price: "Договорная"
          },
          { text: "Инфографика, фото-услуги", price: "Договорная" },
          { text: "Честный знак, самовыкуп, статистика", price: "Договорная" },
          { text: "Предоставление видеосъемки обработки вашего товара ", price: "Договорная" }
        ]
      },
      {
        subtitle: "Хранение товара",
        button: {
          text: "Узнать больше",
          callback: () => {
          }
        },
        modalContent: [
          {
            text: "Первая неделя обработки и хранения",
            price: "Бесплатно"
          },
          { text: "Хранение товара коробки А3", price: "5 рублей в день" },
          { text: "Хранение палет ( до 16 коробок А3 )", price: "от 50 рублей в день" }
        ]
      },
      {
        subtitle: "Фулфилмент под ключ",
        button: {
          text: "Узнать больше",
          callback: () => {
          }
        },
        modalContent: [
          {
            text: "При полном цикле доставки товара из китая и его обработке, предусмотрены персональные скидки. Можем организовать ваш бизнес с минимальныс вашим участием.",
            price: "Договорная"
          }
        ]
      }
    ];
    function onCardButtonClick(callback, title2, idx) {
      modalContent.value = cards[idx].modalContent;
      callback();
      popupTitle.value = title2;
      showPopup.value = true;
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UiButton = __nuxt_component_1$1;
      const _component_LazyViewPopupBase = __nuxt_component_1_lazy;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "main-page-services" }, _attrs))} data-v-f1563e32><ul class="main-page-services__list" data-v-f1563e32><!--[-->`);
      ssrRenderList(cards, (card, idx) => {
        _push(`<li class="${ssrRenderClass([{ big: card == null ? void 0 : card.big }, "main-page-services__list-item"])}" data-v-f1563e32><div class="main-page-services__card" data-v-f1563e32><div class="main-page-services__card-inner" data-v-f1563e32>`);
        if (card == null ? void 0 : card.title) {
          _push(`<h3 class="main-page-services__card-title" data-v-f1563e32>${ssrInterpolate(card.title)}</h3>`);
        } else {
          _push(`<!---->`);
        }
        if (card == null ? void 0 : card.subtitle) {
          _push(`<h4 class="main-page-services__card-subtitle" data-v-f1563e32>${ssrInterpolate(card.subtitle)}</h4>`);
        } else {
          _push(`<!---->`);
        }
        if (card == null ? void 0 : card.description) {
          _push(`<p class="main-page-services__card-description" data-v-f1563e32>${ssrInterpolate(card.description)}</p>`);
        } else {
          _push(`<!---->`);
        }
        if (card.button) {
          _push(ssrRenderComponent(_component_UiButton, {
            class: "main-page-services__card-details-button",
            text: card.button.text,
            theme: "transparent",
            onClick: ($event) => onCardButtonClick(card.button.callback, card.subtitle, idx)
          }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
        if (card.image) {
          _push(`<div class="main-page-services__card-image" data-v-f1563e32><img${ssrRenderAttr("src", card.image)} alt="Иллюстрация карточки" class="main-page-services__card-image-pic" data-v-f1563e32></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></li>`);
      });
      _push(`<!--]--></ul>`);
      _push(ssrRenderComponent(_component_LazyViewPopupBase, {
        modelValue: showPopup.value,
        "onUpdate:modelValue": ($event) => showPopup.value = $event,
        title: popupTitle.value
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a, _b;
          if (_push2) {
            if ((_a = modalContent.value) == null ? void 0 : _a.length) {
              _push2(`<div class="popup-base" data-v-f1563e32${_scopeId}><div class="popup-base__content" data-v-f1563e32${_scopeId}><ul class="popup-base__content-list" data-v-f1563e32${_scopeId}><!--[-->`);
              ssrRenderList(modalContent.value, (item) => {
                _push2(`<li class="popup-base__content-list-item" data-v-f1563e32${_scopeId}><p class="popup-base__content-list-item-text" data-v-f1563e32${_scopeId}>${ssrInterpolate(item == null ? void 0 : item.text)}</p><span class="popup-base__content-list-item-price" data-v-f1563e32${_scopeId}>${ssrInterpolate(item == null ? void 0 : item.price)}</span></li>`);
              });
              _push2(`<!--]--></ul></div><div class="popup-base__footer" style="${ssrRenderStyle({ "display": "none" })}" data-v-f1563e32${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UiButton, {
                class: "popup-base__footer-button",
                text: "Скачать прайс"
              }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_UiButton, {
                class: "popup-base__footer-button",
                text: "Посмотреть прайс",
                theme: "transparent"
              }, null, _parent2, _scopeId));
              _push2(`</div></div>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              ((_b = modalContent.value) == null ? void 0 : _b.length) ? (openBlock(), createBlock("div", {
                key: 0,
                class: "popup-base"
              }, [
                createVNode("div", { class: "popup-base__content" }, [
                  createVNode("ul", { class: "popup-base__content-list" }, [
                    (openBlock(true), createBlock(Fragment, null, renderList(modalContent.value, (item) => {
                      return openBlock(), createBlock("li", {
                        key: item == null ? void 0 : item.text,
                        class: "popup-base__content-list-item"
                      }, [
                        createVNode("p", { class: "popup-base__content-list-item-text" }, toDisplayString(item == null ? void 0 : item.text), 1),
                        createVNode("span", { class: "popup-base__content-list-item-price" }, toDisplayString(item == null ? void 0 : item.price), 1)
                      ]);
                    }), 128))
                  ])
                ]),
                createVNode("div", {
                  class: "popup-base__footer",
                  style: { "display": "none" }
                }, [
                  createVNode(_component_UiButton, {
                    class: "popup-base__footer-button",
                    text: "Скачать прайс"
                  }),
                  createVNode(_component_UiButton, {
                    class: "popup-base__footer-button",
                    text: "Посмотреть прайс",
                    theme: "transparent"
                  })
                ])
              ])) : createCommentVNode("", true)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</section>`);
    };
  }
});
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/view/page/main/Services.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const __nuxt_component_4 = /* @__PURE__ */ _export_sfc$1(_sfc_main$6, [["__scopeId", "data-v-f1563e32"]]);
const _imports_0$2 = publicAssetsURL("/images/static/slogan-pic.png");
const _sfc_main$5 = {};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "main-page-slogan" }, _attrs))} data-v-9e8fa7c7><div class="main-page-slogan__inner" data-v-9e8fa7c7><div class="main-page-slogan__title" data-v-9e8fa7c7><h2 class="main-page-slogan__title-text" data-v-9e8fa7c7> С нами у вас не будет никаких лишних расходов </h2></div><div class="main-page-slogan__image" data-v-9e8fa7c7><img class="main-page-slogan__image-pic"${ssrRenderAttr("src", _imports_0$2)} alt="Иллюстрация слогана" data-v-9e8fa7c7></div></div></section>`);
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/view/page/main/Slogan.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_5 = /* @__PURE__ */ _export_sfc$1(_sfc_main$5, [["ssrRender", _sfc_ssrRender$3], ["__scopeId", "data-v-9e8fa7c7"]]);
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "Pricing",
  __ssrInlineRender: true,
  setup(__props) {
    const cards = [
      {
        title: "Логистические услуги",
        services: [
          {
            name: "Забор товара с рынков Москвы: Южные ворота, Садовод, ТЯК",
            price: "от 2 000 р"
          },
          {
            name: "Забор товара по Москве и МО",
            price: "от 2 000 р"
          }
        ],
        button: {
          text: "Подробнее",
          callback: () => {
          }
        }
      },
      {
        title: "Услуги по работе с товаром",
        services: [
          {
            name: "Пересчет товара",
            price: "от 2 000 р"
          },
          {
            name: "Первичный осмотр на брак ",
            price: "от 2 000 р"
          },
          {
            name: "Сортировка товара",
            price: "от 2 000 р"
          }
        ],
        button: {
          text: "Подробнее",
          callback: () => {
          }
        }
      },
      {
        title: "Упаковка товара",
        services: [
          {
            name: "Все виды упаковки",
            price: "от 4 000 р"
          },
          {
            name: "Раскладка в коробки",
            price: "от 50 р"
          },
          {
            name: "Раскладка в коробки",
            price: "от 50 р"
          }
        ],
        button: {
          text: "Подробнее",
          callback: () => {
          }
        }
      },
      {
        title: "Доп услуги при упаковке",
        services: [
          {
            name: "Проверка на брак - визуально",
            price: "от 5 р"
          },
          {
            name: "Проверка на брак - детально",
            price: "от 15 р"
          },
          {
            name: "Полная проверка товара на брак",
            price: "от 25 р"
          }
        ],
        button: {
          text: "Подробнее",
          callback: () => {
          }
        }
      },
      {
        title: "Доп услуги",
        services: [
          {
            name: "Разгрузка / погрузка коробов",
            price: "от 30 р"
          },
          {
            name: "Формирование короба для поставки",
            price: "от 130 р"
          },
          {
            name: "Короб 60х40х40 см",
            price: "от 100 р"
          }
        ],
        button: {
          text: "Подробнее",
          callback: () => {
          }
        }
      },
      {
        title: "Хранение товара",
        services: [
          {
            name: "Хранение товара во время упаковки",
            price: "Бесплатно"
          },
          {
            name: "Хранение короба 60х40х40 см в сутки",
            price: "от 30 р"
          },
          {
            name: "Хранение товара от 1 короба до 0,5 м3 в сутки",
            price: "от 60 р"
          }
        ],
        button: {
          text: "Подробнее",
          callback: () => {
          }
        }
      },
      {
        title: "Фуллфилмент под ключ",
        services: [
          {
            name: "Продвижение товара",
            price: "По запросу"
          },
          {
            name: "Настройка рекламных кампаний",
            price: "По запросу"
          },
          {
            name: "Самовыкупы и забор товара",
            price: "По запросу"
          }
        ],
        button: {
          text: "Подробнее",
          callback: () => {
          }
        }
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UiButton = __nuxt_component_1$1;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "main-page-pricing" }, _attrs))} data-v-c1bf0c56><header class="main-page-pricing__header" data-v-c1bf0c56><h2 class="main-page-pricing__title" data-v-c1bf0c56>Наши цены</h2><div class="main-page-pricing__buttons" data-v-c1bf0c56><button class="main-page-pricing__button button-prev" data-v-c1bf0c56><svg fill="none" height="20" viewBox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg" data-v-c1bf0c56><path d="M6.72513 9.5484L13.6914 2.9109C13.8076 2.80009 13.962 2.73828 14.1226 2.73828C14.2832 2.73828 14.4376 2.80009 14.5539 2.9109L14.5614 2.9184C14.6179 2.97212 14.6629 3.03678 14.6937 3.10844C14.7245 3.18011 14.7403 3.25728 14.7403 3.33528C14.7403 3.41327 14.7245 3.49044 14.6937 3.56211C14.6629 3.63378 14.6179 3.69843 14.5614 3.75215L8.00138 10.0022L14.5614 16.2497C14.6179 16.3034 14.6629 16.368 14.6937 16.4397C14.7245 16.5114 14.7403 16.5885 14.7403 16.6665C14.7403 16.7445 14.7245 16.8217 14.6937 16.8934C14.6629 16.965 14.6179 17.0297 14.5614 17.0834L14.5539 17.0909C14.4376 17.2017 14.2832 17.2635 14.1226 17.2635C13.962 17.2635 13.8076 17.2017 13.6914 17.0909L6.72513 10.4534C6.66386 10.395 6.61509 10.3248 6.58176 10.247C6.54843 10.1693 6.53125 10.0855 6.53125 10.0009C6.53125 9.91628 6.54843 9.83254 6.58176 9.75476C6.61509 9.67698 6.66386 9.60677 6.72513 9.5484Z" fill="currentColor" data-v-c1bf0c56></path></svg></button><button class="main-page-pricing__button button-next" data-v-c1bf0c56><svg fill="none" height="20" viewBox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg" data-v-c1bf0c56><path d="M13.2749 9.5484L6.30862 2.9109C6.19239 2.80009 6.03796 2.73828 5.87737 2.73828C5.71679 2.73828 5.56236 2.80009 5.44613 2.9109L5.43862 2.9184C5.38208 2.97212 5.33706 3.03678 5.30629 3.10844C5.27552 3.18011 5.25966 3.25728 5.25966 3.33528C5.25966 3.41327 5.27552 3.49044 5.30629 3.56211C5.33706 3.63378 5.38208 3.69843 5.43862 3.75215L11.9986 10.0022L5.43862 16.2497C5.38208 16.3034 5.33706 16.368 5.30629 16.4397C5.27552 16.5114 5.25966 16.5885 5.25966 16.6665C5.25966 16.7445 5.27552 16.8217 5.30629 16.8934C5.33706 16.965 5.38208 17.0297 5.43862 17.0834L5.44613 17.0909C5.56236 17.2017 5.71679 17.2635 5.87737 17.2635C6.03796 17.2635 6.19239 17.2017 6.30862 17.0909L13.2749 10.4534C13.3361 10.395 13.3849 10.3248 13.4182 10.247C13.4516 10.1693 13.4688 10.0855 13.4688 10.0009C13.4688 9.91628 13.4516 9.83254 13.4182 9.75476C13.3849 9.67698 13.3361 9.60677 13.2749 9.5484Z" fill="currentColor" data-v-c1bf0c56></path></svg></button></div></header><ul class="main-page-pricing__list" data-v-c1bf0c56>`);
      _push(ssrRenderComponent(unref(Swiper), {
        breakpoints: {
          "1250": {
            slidesPerView: 4
          },
          "768": {
            slidesPerView: 3
          },
          "520": {
            slidesPerView: 2
          },
          "320": {
            slidesPerView: 1
          }
        },
        modules: [unref(Navigation)],
        navigation: { nextEl: ".button-next", prevEl: ".button-prev" },
        "slides-per-view": 4,
        "space-between": 20
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(cards, (card, idx) => {
              _push2(ssrRenderComponent(unref(SwiperSlide), {
                class: "main-page-pricing__list-item",
                key: idx
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="main-page-pricing__card" data-v-c1bf0c56${_scopeId2}><h4 class="main-page-pricing__card-title" data-v-c1bf0c56${_scopeId2}>${ssrInterpolate(card.title)}</h4><ul class="main-page-pricing__card-services" data-v-c1bf0c56${_scopeId2}><!--[-->`);
                    ssrRenderList(card.services, (service, idx2) => {
                      _push3(`<li class="main-page-pricing__card-service" data-v-c1bf0c56${_scopeId2}><p class="main-page-pricing__card-service-name" data-v-c1bf0c56${_scopeId2}>${ssrInterpolate(service.name)}</p><span class="main-page-pricing__card-service-separator" data-v-c1bf0c56${_scopeId2}></span><p class="main-page-pricing__card-service-price" data-v-c1bf0c56${_scopeId2}>${ssrInterpolate(service.price)}</p></li>`);
                    });
                    _push3(`<!--]--></ul>`);
                    _push3(ssrRenderComponent(_component_UiButton, {
                      text: card.button.text,
                      class: "main-page-pricing__card-button",
                      theme: "transparent",
                      onClick: ($event) => card.button.callback()
                    }, null, _parent3, _scopeId2));
                    _push3(`</div>`);
                  } else {
                    return [
                      createVNode("div", { class: "main-page-pricing__card" }, [
                        createVNode("h4", { class: "main-page-pricing__card-title" }, toDisplayString(card.title), 1),
                        createVNode("ul", { class: "main-page-pricing__card-services" }, [
                          (openBlock(true), createBlock(Fragment, null, renderList(card.services, (service, idx2) => {
                            return openBlock(), createBlock("li", {
                              key: idx2,
                              class: "main-page-pricing__card-service"
                            }, [
                              createVNode("p", { class: "main-page-pricing__card-service-name" }, toDisplayString(service.name), 1),
                              createVNode("span", { class: "main-page-pricing__card-service-separator" }),
                              createVNode("p", { class: "main-page-pricing__card-service-price" }, toDisplayString(service.price), 1)
                            ]);
                          }), 128))
                        ]),
                        createVNode(_component_UiButton, {
                          text: card.button.text,
                          class: "main-page-pricing__card-button",
                          theme: "transparent",
                          onClick: ($event) => card.button.callback()
                        }, null, 8, ["text", "onClick"])
                      ])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(), createBlock(Fragment, null, renderList(cards, (card, idx) => {
                return createVNode(unref(SwiperSlide), {
                  class: "main-page-pricing__list-item",
                  key: idx
                }, {
                  default: withCtx(() => [
                    createVNode("div", { class: "main-page-pricing__card" }, [
                      createVNode("h4", { class: "main-page-pricing__card-title" }, toDisplayString(card.title), 1),
                      createVNode("ul", { class: "main-page-pricing__card-services" }, [
                        (openBlock(true), createBlock(Fragment, null, renderList(card.services, (service, idx2) => {
                          return openBlock(), createBlock("li", {
                            key: idx2,
                            class: "main-page-pricing__card-service"
                          }, [
                            createVNode("p", { class: "main-page-pricing__card-service-name" }, toDisplayString(service.name), 1),
                            createVNode("span", { class: "main-page-pricing__card-service-separator" }),
                            createVNode("p", { class: "main-page-pricing__card-service-price" }, toDisplayString(service.price), 1)
                          ]);
                        }), 128))
                      ]),
                      createVNode(_component_UiButton, {
                        text: card.button.text,
                        class: "main-page-pricing__card-button",
                        theme: "transparent",
                        onClick: ($event) => card.button.callback()
                      }, null, 8, ["text", "onClick"])
                    ])
                  ]),
                  _: 2
                }, 1024);
              }), 64))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</ul></section>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/view/page/main/Pricing.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_6 = /* @__PURE__ */ _export_sfc$1(_sfc_main$4, [["__scopeId", "data-v-c1bf0c56"]]);
const _imports_0$1 = publicAssetsURL("/images/static/chat-clouds.png");
const _sfc_main$3 = {
  name: "ContactUs",
  data() {
    return {
      name: "",
      email: "",
      number: "",
      message: ""
    };
  },
  methods: {
    sendEmail(e) {
      e.preventDefault();
      if (!this.name.length && !this.email.length && !this.message.length && !this.number.length)
        return;
      try {
        emailjs.sendForm(
          "service_fysxkzp",
          "template_67ys5lw",
          this.$refs.form,
          "gjGvAazUCWBuNWXu0",
          {
            name: this.name,
            email: this.email,
            message: this.message,
            number: this.number
          }
        );
      } catch (error) {
        console.log({ error });
      }
      this.name = "";
      this.email = "";
      this.number = "";
      this.message = "";
    }
  }
};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_UiButton = __nuxt_component_1$1;
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "main-page-feedback" }, _attrs))} data-v-1903a257><div class="main-page-feedback__inner" data-v-1903a257><div class="main-page-feedback__image" data-v-1903a257><img class="main-page-feedback__image-pic"${ssrRenderAttr("src", _imports_0$1)} alt="Картинка чатов" data-v-1903a257></div><form class="main-page-feedback__form" data-v-1903a257><h4 class="main-page-feedback__form-title" data-v-1903a257> Получите бесплатную консультацию </h4><input class="main-page-feedback__form-control" type="text" name="name"${ssrRenderAttr("value", $data.name)} placeholder="Ваше имя" data-v-1903a257><input class="main-page-feedback__form-control" type="email" name="email"${ssrRenderAttr("value", $data.email)} placeholder="Ваша почта" data-v-1903a257><input class="main-page-feedback__form-control" type="text" name="number"${ssrRenderAttr("value", $data.number)} placeholder="Ваш номер" data-v-1903a257><input class="main-page-feedback__form-control" type="text" name="message"${ssrRenderAttr("value", $data.message)} placeholder="Ваш вопрос" data-v-1903a257>`);
  _push(ssrRenderComponent(_component_UiButton, {
    class: "main-page-feedback__form-submit",
    text: "Отправить",
    onClick: $options.sendEmail
  }, null, _parent));
  _push(`</form></div></section>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/view/page/main/Concultation.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_7 = /* @__PURE__ */ _export_sfc$1(_sfc_main$3, [["ssrRender", _sfc_ssrRender$2], ["__scopeId", "data-v-1903a257"]]);
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "Faq",
  __ssrInlineRender: true,
  setup(__props) {
    const items = [
      {
        question: "Как начать с вами сотрудничество?",
        answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      },
      {
        question: "С каким минимальным количеством товара\n вы работаете?",
        answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      },
      {
        question: "С каким максимальным количеством товара\n вы работаете?",
        answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ElCollapse = ElCollapse;
      const _component_ElCollapseItem = ElCollapseItem;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "main-page-faq" }, _attrs))} data-v-e8af63c9>`);
      _push(ssrRenderComponent(_component_ElCollapse, { class: "main-page-faq__collapse" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(items, (item, idx) => {
              _push2(ssrRenderComponent(_component_ElCollapseItem, {
                class: "main-page-faq__collapse-item",
                key: idx,
                title: item.question,
                name: item.question
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<p class="main-page-faq__collapse-item-text" data-v-e8af63c9${_scopeId2}>${ssrInterpolate(item.answer)}</p>`);
                  } else {
                    return [
                      createVNode("p", { class: "main-page-faq__collapse-item-text" }, toDisplayString(item.answer), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(), createBlock(Fragment, null, renderList(items, (item, idx) => {
                return createVNode(_component_ElCollapseItem, {
                  class: "main-page-faq__collapse-item",
                  key: idx,
                  title: item.question,
                  name: item.question
                }, {
                  default: withCtx(() => [
                    createVNode("p", { class: "main-page-faq__collapse-item-text" }, toDisplayString(item.answer), 1)
                  ]),
                  _: 2
                }, 1032, ["title", "name"]);
              }), 64))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</section>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/view/page/main/Faq.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_8 = /* @__PURE__ */ _export_sfc$1(_sfc_main$2, [["__scopeId", "data-v-e8af63c9"]]);
const _imports_0 = publicAssetsURL("/images/static/truck-with-checkpoints.png");
const _sfc_main$1 = {
  name: "ContactUs",
  data() {
    return {
      name: "",
      email: "",
      number: "",
      message: ""
    };
  },
  methods: {
    sendEmail(e) {
      e.preventDefault();
      if (!this.name.length && !this.email.length && !this.message.length && !this.number.length)
        return;
      try {
        emailjs.sendForm(
          "service_fysxkzp",
          "template_67ys5lw",
          this.$refs.form,
          "gjGvAazUCWBuNWXu0",
          {
            name: this.name,
            email: this.email,
            message: this.message,
            number: this.number
          }
        );
      } catch (error) {
        console.log({ error });
      }
      this.name = "";
      this.email = "";
      this.number = "";
      this.message = "";
    }
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_UiButton = __nuxt_component_1$1;
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "main-page-consultation" }, _attrs))} data-v-8fad381b><div class="main-page-consultation__inner" data-v-8fad381b><form class="main-page-consultation__form" data-v-8fad381b><h4 class="main-page-consultation__form-title" data-v-8fad381b> Остались еще вопросы? </h4><input class="main-page-consultation__form-control" type="text" name="name"${ssrRenderAttr("value", $data.name)} placeholder="Ваше имя" data-v-8fad381b><input class="main-page-consultation__form-control" type="text" name="number"${ssrRenderAttr("value", $data.number)} placeholder="Ваш номер" data-v-8fad381b><input class="main-page-consultation__form-control" type="email" name="email"${ssrRenderAttr("value", $data.email)} placeholder="Ваша почта" data-v-8fad381b><input class="main-page-consultation__form-control" type="text" name="message"${ssrRenderAttr("value", $data.message)} placeholder="Ваш вопрос" data-v-8fad381b>`);
  _push(ssrRenderComponent(_component_UiButton, {
    class: "main-page-consultation__form-submit",
    text: "Отправить",
    onClick: $options.sendEmail
  }, null, _parent));
  _push(`</form><div class="main-page-consultation__image" data-v-8fad381b><img class="main-page-consultation__image-pic"${ssrRenderAttr("src", _imports_0)} alt="Картинка чатов" data-v-8fad381b></div></div></section>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/view/page/main/Feedback.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_9 = /* @__PURE__ */ _export_sfc$1(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-8fad381b"]]);
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_ViewPageMainIntroduction = __nuxt_component_0;
  const _component_ViewPageMainAdvantages = __nuxt_component_1;
  const _component_ViewPageMainAbout = __nuxt_component_2;
  const _component_ViewPageMainStocks = __nuxt_component_3;
  const _component_ViewPageMainServices = __nuxt_component_4;
  const _component_ViewPageMainSlogan = __nuxt_component_5;
  const _component_ViewPageMainPricing = __nuxt_component_6;
  const _component_ViewPageMainConcultation = __nuxt_component_7;
  const _component_ViewPageMainFaq = __nuxt_component_8;
  const _component_ViewPageMainFeedback = __nuxt_component_9;
  _push(`<main${ssrRenderAttrs(mergeProps({ class: "main-page" }, _attrs))} data-v-d58d8cc3>`);
  _push(ssrRenderComponent(_component_ViewPageMainIntroduction, { class: "main-page__section" }, null, _parent));
  _push(ssrRenderComponent(_component_ViewPageMainAdvantages, { class: "main-page__section main-page__section--advantages" }, null, _parent));
  _push(ssrRenderComponent(_component_ViewPageMainAbout, { class: "main-page__section" }, null, _parent));
  _push(ssrRenderComponent(_component_ViewPageMainStocks, { class: "main-page__section" }, null, _parent));
  _push(ssrRenderComponent(_component_ViewPageMainServices, { class: "main-page__section" }, null, _parent));
  _push(ssrRenderComponent(_component_ViewPageMainSlogan, { class: "main-page__section" }, null, _parent));
  _push(ssrRenderComponent(_component_ViewPageMainPricing, { class: "main-page__section" }, null, _parent));
  _push(ssrRenderComponent(_component_ViewPageMainConcultation, { class: "main-page__section" }, null, _parent));
  _push(ssrRenderComponent(_component_ViewPageMainFaq, { class: "main-page__section" }, null, _parent));
  _push(ssrRenderComponent(_component_ViewPageMainFeedback, { class: "main-page__section" }, null, _parent));
  _push(`</main>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc$1(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-d58d8cc3"]]);
const index$1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: index
});
export {
  __nuxt_component_1$1 as _,
  index$1 as i
};
//# sourceMappingURL=index-lyhsUrZg.js.map
