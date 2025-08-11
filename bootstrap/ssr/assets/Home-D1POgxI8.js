import { ref, resolveComponent, useSSRContext, onMounted, unref, withCtx, createVNode, toDisplayString } from "vue";
import { ssrRenderStyle, ssrRenderComponent, ssrRenderAttr, ssrInterpolate } from "vue/server-renderer";
import { g as ge } from "../ssr.js";
import { _ as _export_sfc, N as Navbar } from "./Navbar-BXfAFAmu.js";
import "@vue/server-renderer";
import "@inertiajs/core";
import "es-toolkit";
import "es-toolkit/compat";
import "@inertiajs/core/server";
import "qs";
import "@fortawesome/fontawesome-svg-core";
import "@fortawesome/vue-fontawesome";
import "@fortawesome/free-solid-svg-icons";
import "@fortawesome/free-brands-svg-icons";
import "axios";
const _sfc_main$1 = {
  __name: "FooterAlt",
  __ssrInlineRender: true,
  props: {
    seo: Object
  },
  setup(__props) {
    const form = ref({
      email: ""
    });
    const currentYear = ref((/* @__PURE__ */ new Date()).getFullYear());
    return (_ctx, _push, _parent, _attrs) => {
      const _component_font_awesome_icon = resolveComponent("font-awesome-icon");
      _push(`<!--[--><footer class="bg-shape-primary text-custom-blue py-5" data-v-b555e782><div class="container px-4" data-v-b555e782><div class="row" data-v-b555e782><div class="col-md-4 mb-4 mb-md-0" data-v-b555e782><img src="/assets/images/logo/phs_logo_black_hor@2x.png" alt="Logo" class="w-60 mb-3" data-v-b555e782><p class="text-custom-blue" data-v-b555e782>Billing made simple for every specialty</p></div><div class="col-md-4 mb-4 mb-md-0" data-v-b555e782><h5 class="mb-3 fw-bold" data-v-b555e782>Contact Us</h5><ul class="list-unstyled" data-v-b555e782><li class="d-flex align-items-center mb-2" data-v-b555e782><div class="text-custom-blue p-2 d-flex align-items-center justify-content-center me-2" style="${ssrRenderStyle({ "width": "40px", "height": "40px" })}" data-v-b555e782><i class="fas fa-map-marker-alt" data-v-b555e782></i></div><span data-v-b555e782>Johannesburg</span></li><li class="d-flex align-items-center mb-2" data-v-b555e782><div class="text-custom-blue p-2 d-flex align-items-center justify-content-center me-2" style="${ssrRenderStyle({ "width": "40px", "height": "40px" })}" data-v-b555e782><i class="fas fa-phone" data-v-b555e782></i></div><span data-v-b555e782><a class="text-custom-blue" href="tel:+27634923419" data-v-b555e782>0634923419 | 0679358660</a></span></li><li class="d-flex align-items-center" data-v-b555e782><div class="text-custom-blue p-2 d-flex align-items-center justify-content-center me-2" style="${ssrRenderStyle({ "width": "40px", "height": "40px" })}" data-v-b555e782><i class="fas fa-envelope" data-v-b555e782></i></div><span data-v-b555e782><a class="text-custom-blue" href="mailto:info@probillsolutions.co.za" data-v-b555e782>info@probillsolutions.co.za</a></span></li></ul></div><div class="col-md-4" data-v-b555e782><h5 class="mb-3 fw-bold" data-v-b555e782>Find us on social media</h5><div class="d-flex gap-2" data-v-b555e782><a href="https://web.facebook.com" class="text-custom-blue p-2 d-flex align-items-center justify-content-center" style="${ssrRenderStyle({ "width": "40px", "height": "40px" })}" data-v-b555e782>`);
      _push(ssrRenderComponent(_component_font_awesome_icon, { icon: ["fab", "facebook"] }, null, _parent));
      _push(`</a><a href="https://www.instagram.com" class="text-custom-blue p-2 d-flex align-items-center justify-content-center" style="${ssrRenderStyle({ "width": "40px", "height": "40px" })}" data-v-b555e782>`);
      _push(ssrRenderComponent(_component_font_awesome_icon, { icon: ["fab", "instagram"] }, null, _parent));
      _push(`</a><a href="https://www.youtube.com" class="text-custom-blue p-2 d-flex align-items-center justify-content-center" style="${ssrRenderStyle({ "width": "40px", "height": "40px" })}" data-v-b555e782>`);
      _push(ssrRenderComponent(_component_font_awesome_icon, { icon: ["fab", "youtube"] }, null, _parent));
      _push(`</a><a href="https://www.tiktok.com" class="text-custom-blue p-2 d-flex align-items-center justify-content-center" style="${ssrRenderStyle({ "width": "40px", "height": "40px" })}" data-v-b555e782>`);
      _push(ssrRenderComponent(_component_font_awesome_icon, { icon: ["fab", "tiktok"] }, null, _parent));
      _push(`</a></div><div class="mt-3 fw-bold" data-v-b555e782> Subscribe to our newsletter</div><form data-v-b555e782><div class="input-group mb-3 mt-2" data-v-b555e782><input type="email"${ssrRenderAttr("value", form.value.email)} class="form-control" placeholder="Enter your email" data-v-b555e782><button class="btn btn-primary" type="submit" data-v-b555e782>Subscribe</button></div></form></div></div></div></footer><div class="bg-white text-black text-center py-3" data-v-b555e782><p class="mb-0" data-v-b555e782>Pro Health Solutions © ${ssrInterpolate(currentYear.value)}. All rights reserved.</p></div><!--]-->`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/Home/FooterAlt.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const FooterAlt = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-b555e782"]]);
const _sfc_main = {
  __name: "Home",
  __ssrInlineRender: true,
  props: {
    seo: Object,
    structuredData: String
  },
  setup(__props) {
    const props = __props;
    ref({
      name: "",
      email: "",
      practice: "",
      specialty: "",
      message: ""
    });
    onMounted(() => {
      if (props.structuredData) {
        const script = document.createElement("script");
        script.type = "application/ld+json";
        script.textContent = props.structuredData;
        document.head.appendChild(script);
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(Navbar, { seo: __props.seo }, null, _parent));
      _push(ssrRenderComponent(unref(ge), null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<title${_scopeId}>${ssrInterpolate(__props.seo.title)}</title><meta name="description"${ssrRenderAttr("content", __props.seo.description)}${_scopeId}><meta name="keywords"${ssrRenderAttr("content", __props.seo.keywords)}${_scopeId}><link rel="canonical"${ssrRenderAttr("href", __props.seo.canonical_url)}${_scopeId}><meta property="og:title"${ssrRenderAttr("content", __props.seo.og_title)}${_scopeId}><meta property="og:description"${ssrRenderAttr("content", __props.seo.og_description)}${_scopeId}><meta property="og:image"${ssrRenderAttr("content", __props.seo.og_image)}${_scopeId}><meta property="og:url"${ssrRenderAttr("content", __props.seo.og_url)}${_scopeId}><meta property="og:type" content="website"${_scopeId}><meta property="og:site_name" content="Pro Bill Solutions"${_scopeId}><meta name="twitter:card"${ssrRenderAttr("content", __props.seo.twitter_card)}${_scopeId}><meta name="twitter:title"${ssrRenderAttr("content", __props.seo.og_title)}${_scopeId}><meta name="twitter:description"${ssrRenderAttr("content", __props.seo.og_description)}${_scopeId}><meta name="twitter:image"${ssrRenderAttr("content", __props.seo.og_image)}${_scopeId}><meta name="robots" content="index, follow"${_scopeId}><meta name="viewport" content="width=device-width, initial-scale=1.0"${_scopeId}><meta name="theme-color" content="#1b3169"${_scopeId}>`);
          } else {
            return [
              createVNode("title", null, toDisplayString(__props.seo.title), 1),
              createVNode("meta", {
                name: "description",
                content: __props.seo.description
              }, null, 8, ["content"]),
              createVNode("meta", {
                name: "keywords",
                content: __props.seo.keywords
              }, null, 8, ["content"]),
              createVNode("link", {
                rel: "canonical",
                href: __props.seo.canonical_url
              }, null, 8, ["href"]),
              createVNode("meta", {
                property: "og:title",
                content: __props.seo.og_title
              }, null, 8, ["content"]),
              createVNode("meta", {
                property: "og:description",
                content: __props.seo.og_description
              }, null, 8, ["content"]),
              createVNode("meta", {
                property: "og:image",
                content: __props.seo.og_image
              }, null, 8, ["content"]),
              createVNode("meta", {
                property: "og:url",
                content: __props.seo.og_url
              }, null, 8, ["content"]),
              createVNode("meta", {
                property: "og:type",
                content: "website"
              }),
              createVNode("meta", {
                property: "og:site_name",
                content: "Pro Bill Solutions"
              }),
              createVNode("meta", {
                name: "twitter:card",
                content: __props.seo.twitter_card
              }, null, 8, ["content"]),
              createVNode("meta", {
                name: "twitter:title",
                content: __props.seo.og_title
              }, null, 8, ["content"]),
              createVNode("meta", {
                name: "twitter:description",
                content: __props.seo.og_description
              }, null, 8, ["content"]),
              createVNode("meta", {
                name: "twitter:image",
                content: __props.seo.og_image
              }, null, 8, ["content"]),
              createVNode("meta", {
                name: "robots",
                content: "index, follow"
              }),
              createVNode("meta", {
                name: "viewport",
                content: "width=device-width, initial-scale=1.0"
              }),
              createVNode("meta", {
                name: "theme-color",
                content: "#1b3169"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<section class="hero-section banner-image"><div class="hero-container"><div class="hero-content"><h1 class="hero-title"> Streamline Your <span class="highlight">Medical Billing</span><br>Focus on Your Patients </h1><p class="hero-description"> At Pro Bill Solutions, we deliver efficient, accurate, and fully compliant medical billing services tailored to healthcare providers of all specialties. Let us handle your revenue cycle so you can focus on what matters most. </p><div class="hero-buttons"><button class="btn-primary">Get Started Today</button><button class="btn-secondary">Our Services</button></div></div><div class="hero-visual"><img src="/assets/images/logo/calculator-stethoscope-medicine-bottles-white-background.jpg" alt="Hero Image" class="rounded"></div></div></section>`);
      _push(ssrRenderComponent(FooterAlt, { seo: __props.seo }, null, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Home.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
