import { defineAsyncComponent, defineModel, mergeProps, withCtx, createVNode, withDirectives, vModelText, useSSRContext } from 'file:///Users/dmitrij/Documents/GitHub/landing-fullfilment/node_modules/vue/index.mjs';
import { _ as __nuxt_component_1$1 } from './index-lyhsUrZg.mjs';
import emailjs from 'file:///Users/dmitrij/Documents/GitHub/landing-fullfilment/node_modules/emailjs-com/cjs/index.js';
import { ssrRenderComponent, ssrRenderAttr } from 'file:///Users/dmitrij/Documents/GitHub/landing-fullfilment/node_modules/vue/server-renderer/index.mjs';
import { _ as _export_sfc } from './server.mjs';
import '../_/renderer.mjs';
import 'file:///Users/dmitrij/Documents/GitHub/landing-fullfilment/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file:///Users/dmitrij/Documents/GitHub/landing-fullfilment/node_modules/h3/dist/index.mjs';
import 'file:///Users/dmitrij/Documents/GitHub/landing-fullfilment/node_modules/devalue/index.js';
import 'file:///Users/dmitrij/Documents/GitHub/landing-fullfilment/node_modules/ufo/dist/index.mjs';
import 'file:///Users/dmitrij/Documents/GitHub/landing-fullfilment/node_modules/@unhead/ssr/dist/index.mjs';
import '../runtime.mjs';
import 'file:///Users/dmitrij/Documents/GitHub/landing-fullfilment/node_modules/ofetch/dist/node.mjs';
import 'file:///Users/dmitrij/Documents/GitHub/landing-fullfilment/node_modules/destr/dist/index.mjs';
import 'file:///Users/dmitrij/Documents/GitHub/landing-fullfilment/node_modules/unenv/runtime/fetch/index.mjs';
import 'file:///Users/dmitrij/Documents/GitHub/landing-fullfilment/node_modules/hookable/dist/index.mjs';
import 'file:///Users/dmitrij/Documents/GitHub/landing-fullfilment/node_modules/klona/dist/index.mjs';
import 'file:///Users/dmitrij/Documents/GitHub/landing-fullfilment/node_modules/scule/dist/index.mjs';
import 'file:///Users/dmitrij/Documents/GitHub/landing-fullfilment/node_modules/defu/dist/defu.mjs';
import 'file:///Users/dmitrij/Documents/GitHub/landing-fullfilment/node_modules/ohash/dist/index.mjs';
import 'file:///Users/dmitrij/Documents/GitHub/landing-fullfilment/node_modules/unstorage/dist/index.mjs';
import 'file:///Users/dmitrij/Documents/GitHub/landing-fullfilment/node_modules/unstorage/drivers/fs.mjs';
import 'file:///Users/dmitrij/Documents/GitHub/landing-fullfilment/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file:///Users/dmitrij/Documents/GitHub/landing-fullfilment/node_modules/unstorage/drivers/lru-cache.mjs';
import 'file:///Users/dmitrij/Documents/GitHub/landing-fullfilment/node_modules/radix3/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file:///Users/dmitrij/Documents/GitHub/landing-fullfilment/node_modules/pathe/dist/index.mjs';
import 'file:///Users/dmitrij/Documents/GitHub/landing-fullfilment/node_modules/unhead/dist/index.mjs';
import 'file:///Users/dmitrij/Documents/GitHub/landing-fullfilment/node_modules/@unhead/shared/dist/index.mjs';
import 'file:///Users/dmitrij/Documents/GitHub/landing-fullfilment/node_modules/swiper/swiper-vue.mjs';
import 'file:///Users/dmitrij/Documents/GitHub/landing-fullfilment/node_modules/swiper/modules/index.mjs';
import 'file:///Users/dmitrij/Documents/GitHub/landing-fullfilment/node_modules/@vue/shared/dist/shared.cjs.prod.js';
import 'file:///Users/dmitrij/Documents/GitHub/landing-fullfilment/node_modules/lodash-unified/import.js';
import 'file:///Users/dmitrij/Documents/GitHub/landing-fullfilment/node_modules/unctx/dist/index.mjs';
import 'file:///Users/dmitrij/Documents/GitHub/landing-fullfilment/node_modules/vue-router/dist/vue-router.node.mjs';

const __nuxt_component_0_lazy = defineAsyncComponent(() => import('./Base-BDlhsWVK.mjs').then((c) => c.default || c));
defineModel();
const _sfc_main = {
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
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_LazyViewPopupBase = __nuxt_component_0_lazy;
  const _component_UiButton = __nuxt_component_1$1;
  _push(ssrRenderComponent(_component_LazyViewPopupBase, mergeProps({
    modelValue: _ctx.dialogVisible,
    "onUpdate:modelValue": ($event) => _ctx.dialogVisible = $event,
    title: "\u041E\u0431\u0440\u0430\u0442\u043D\u0430\u044F \u0441\u0432\u044F\u0437\u044C"
  }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<form class="popup-base__form" data-v-3a4e62eb${_scopeId}><input class="popup-base__form-control" type="text" name="name"${ssrRenderAttr("value", $data.name)} placeholder="\u0412\u0430\u0448\u0435 \u0438\u043C\u044F" data-v-3a4e62eb${_scopeId}><input class="popup-base__form-control" type="text" name="number"${ssrRenderAttr("value", $data.number)} placeholder="\u0412\u0430\u0448 \u043D\u043E\u043C\u0435\u0440" data-v-3a4e62eb${_scopeId}><input class="popup-base__form-control" type="email" name="email"${ssrRenderAttr("value", $data.email)} placeholder="\u0412\u0430\u0448\u0430 \u043F\u043E\u0447\u0442\u0430" data-v-3a4e62eb${_scopeId}><input class="popup-base__form-control" type="text" name="message"${ssrRenderAttr("value", $data.message)} placeholder="\u0412\u0430\u0448 \u0432\u043E\u043F\u0440\u043E\u0441" data-v-3a4e62eb${_scopeId}>`);
        _push2(ssrRenderComponent(_component_UiButton, {
          class: "popup-base__form-submit",
          text: "\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C",
          onClick: $options.sendEmail
        }, null, _parent2, _scopeId));
        _push2(`</form>`);
      } else {
        return [
          createVNode("form", {
            class: "popup-base__form",
            ref: "form"
          }, [
            withDirectives(createVNode("input", {
              class: "popup-base__form-control",
              type: "text",
              name: "name",
              "onUpdate:modelValue": ($event) => $data.name = $event,
              placeholder: "\u0412\u0430\u0448\u0435 \u0438\u043C\u044F"
            }, null, 8, ["onUpdate:modelValue"]), [
              [vModelText, $data.name]
            ]),
            withDirectives(createVNode("input", {
              class: "popup-base__form-control",
              type: "text",
              name: "number",
              "onUpdate:modelValue": ($event) => $data.number = $event,
              placeholder: "\u0412\u0430\u0448 \u043D\u043E\u043C\u0435\u0440"
            }, null, 8, ["onUpdate:modelValue"]), [
              [vModelText, $data.number]
            ]),
            withDirectives(createVNode("input", {
              class: "popup-base__form-control",
              type: "email",
              name: "email",
              "onUpdate:modelValue": ($event) => $data.email = $event,
              placeholder: "\u0412\u0430\u0448\u0430 \u043F\u043E\u0447\u0442\u0430"
            }, null, 8, ["onUpdate:modelValue"]), [
              [vModelText, $data.email]
            ]),
            withDirectives(createVNode("input", {
              class: "popup-base__form-control",
              type: "text",
              name: "message",
              "onUpdate:modelValue": ($event) => $data.message = $event,
              placeholder: "\u0412\u0430\u0448 \u0432\u043E\u043F\u0440\u043E\u0441"
            }, null, 8, ["onUpdate:modelValue"]), [
              [vModelText, $data.message]
            ]),
            createVNode(_component_UiButton, {
              class: "popup-base__form-submit",
              text: "\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C",
              onClick: $options.sendEmail
            }, null, 8, ["onClick"])
          ], 512)
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/view/Popup/Feedback.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Feedback = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-3a4e62eb"]]);

export { Feedback as default };
//# sourceMappingURL=Feedback-Dv-1hPW0.mjs.map
