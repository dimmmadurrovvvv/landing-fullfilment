import { defineAsyncComponent, defineModel, mergeProps, withCtx, createVNode, withDirectives, vModelText, useSSRContext } from "vue";
import { _ as __nuxt_component_1 } from "./index-lyhsUrZg.js";
import emailjs from "emailjs-com";
import { ssrRenderComponent, ssrRenderAttr } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
import "#internal/nuxt/paths";
import "swiper/vue";
import "swiper/modules";
import "./entry-styles-2.mjs-CoOWa3Bn.js";
import "@vue/shared";
import "lodash-unified";
import "ofetch";
import "hookable";
import "unctx";
import "h3";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "ufo";
import "radix3";
import "defu";
import "klona";
import "devalue";
const __nuxt_component_0_lazy = defineAsyncComponent(() => import("./Base-BDlhsWVK.js").then((c) => c.default || c));
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
  const _component_UiButton = __nuxt_component_1;
  _push(ssrRenderComponent(_component_LazyViewPopupBase, mergeProps({
    modelValue: _ctx.dialogVisible,
    "onUpdate:modelValue": ($event) => _ctx.dialogVisible = $event,
    title: "Обратная связь"
  }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<form class="popup-base__form" data-v-3a4e62eb${_scopeId}><input class="popup-base__form-control" type="text" name="name"${ssrRenderAttr("value", $data.name)} placeholder="Ваше имя" data-v-3a4e62eb${_scopeId}><input class="popup-base__form-control" type="text" name="number"${ssrRenderAttr("value", $data.number)} placeholder="Ваш номер" data-v-3a4e62eb${_scopeId}><input class="popup-base__form-control" type="email" name="email"${ssrRenderAttr("value", $data.email)} placeholder="Ваша почта" data-v-3a4e62eb${_scopeId}><input class="popup-base__form-control" type="text" name="message"${ssrRenderAttr("value", $data.message)} placeholder="Ваш вопрос" data-v-3a4e62eb${_scopeId}>`);
        _push2(ssrRenderComponent(_component_UiButton, {
          class: "popup-base__form-submit",
          text: "Отправить",
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
              placeholder: "Ваше имя"
            }, null, 8, ["onUpdate:modelValue"]), [
              [vModelText, $data.name]
            ]),
            withDirectives(createVNode("input", {
              class: "popup-base__form-control",
              type: "text",
              name: "number",
              "onUpdate:modelValue": ($event) => $data.number = $event,
              placeholder: "Ваш номер"
            }, null, 8, ["onUpdate:modelValue"]), [
              [vModelText, $data.number]
            ]),
            withDirectives(createVNode("input", {
              class: "popup-base__form-control",
              type: "email",
              name: "email",
              "onUpdate:modelValue": ($event) => $data.email = $event,
              placeholder: "Ваша почта"
            }, null, 8, ["onUpdate:modelValue"]), [
              [vModelText, $data.email]
            ]),
            withDirectives(createVNode("input", {
              class: "popup-base__form-control",
              type: "text",
              name: "message",
              "onUpdate:modelValue": ($event) => $data.message = $event,
              placeholder: "Ваш вопрос"
            }, null, 8, ["onUpdate:modelValue"]), [
              [vModelText, $data.message]
            ]),
            createVNode(_component_UiButton, {
              class: "popup-base__form-submit",
              text: "Отправить",
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
export {
  Feedback as default
};
//# sourceMappingURL=Feedback-Dv-1hPW0.js.map
