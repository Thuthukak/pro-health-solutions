import { L as Layout } from "./HomeLayout-DUv_iCYh.js";
import { resolveComponent, mergeProps, withCtx, createVNode, createBlock, toDisplayString, openBlock, Fragment, renderList, computed, useSSRContext } from "vue";
import { g as ge } from "../ssr.js";
import { ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrRenderList } from "vue/server-renderer";
import { _ as _export_sfc } from "./Navbar-BXfAFAmu.js";
import "./Footer-BvSyP4rA.js";
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
const _sfc_main = {
  name: "Services",
  components: { Layout, Head: ge },
  props: {
    seo: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    const structuredDataJson = computed(() => {
      return JSON.stringify(props.structuredData);
    });
    return {
      structuredDataJson
    };
  },
  data() {
    return {
      currentYear: (/* @__PURE__ */ new Date()).getFullYear()
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Layout = resolveComponent("Layout");
  const _component_Head = resolveComponent("Head");
  const _component_font_awesome_icon = resolveComponent("font-awesome-icon");
  _push(ssrRenderComponent(_component_Layout, mergeProps({ seo: $props.seo }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_Head, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<title${_scopeId2}>${ssrInterpolate($props.seo.title)}</title><meta name="description"${ssrRenderAttr("content", $props.seo.description)}${_scopeId2}><meta name="keywords"${ssrRenderAttr("content", $props.seo.keywords)}${_scopeId2}><link rel="canonical"${ssrRenderAttr("href", $props.seo.canonical_url)}${_scopeId2}><meta property="og:title"${ssrRenderAttr("content", $props.seo.og_title)}${_scopeId2}><meta property="og:description"${ssrRenderAttr("content", $props.seo.og_description)}${_scopeId2}><meta property="og:image"${ssrRenderAttr("content", $props.seo.og_image)}${_scopeId2}><meta property="og:url"${ssrRenderAttr("content", $props.seo.og_url)}${_scopeId2}><meta property="og:type"${ssrRenderAttr("content", $props.seo.og_type)}${_scopeId2}><meta property="og:site_name"${ssrRenderAttr("content", $props.seo.og_site_name)}${_scopeId2}><meta name="twitter:card"${ssrRenderAttr("content", $props.seo.twitter_card)}${_scopeId2}><meta name="twitter:title"${ssrRenderAttr("content", $props.seo.twitter_title)}${_scopeId2}><meta name="twitter:description"${ssrRenderAttr("content", $props.seo.twitter_description)}${_scopeId2}><meta name="twitter:image"${ssrRenderAttr("content", $props.seo.twitter_image)}${_scopeId2}><meta name="robots"${ssrRenderAttr("content", $props.seo.robots)}${_scopeId2}><meta name="author"${ssrRenderAttr("content", $props.seo.author)}${_scopeId2}><meta name="viewport" content="width=device-width, initial-scale=1.0"${_scopeId2}><meta name="theme-color"${ssrRenderAttr("content", $props.seo.theme_color)}${_scopeId2}><meta name="msapplication-TileColor"${ssrRenderAttr("content", $props.seo.msapplication_TileColor)}${_scopeId2}><meta name="apple-mobile-web-app-capable"${ssrRenderAttr("content", $props.seo.apple_mobile_web_app_capable)}${_scopeId2}><meta name="apple-mobile-web-app-status-bar-style"${ssrRenderAttr("content", $props.seo.apple_mobile_web_app_status_bar_style)}${_scopeId2}><meta name="geo.region"${ssrRenderAttr("content", $props.seo.geo_region)}${_scopeId2}><meta name="geo.placename"${ssrRenderAttr("content", $props.seo.geo_placename)}${_scopeId2}><meta name="geo.position"${ssrRenderAttr("content", $props.seo.geo_position)}${_scopeId2}><meta name="ICBM"${ssrRenderAttr("content", $props.seo.ICBM)}${_scopeId2}><meta name="last-modified"${ssrRenderAttr("content", $props.seo.last_modified)}${_scopeId2}><meta property="article:published_time"${ssrRenderAttr("content", $props.seo.published_time)}${_scopeId2}><meta property="article:modified_time"${ssrRenderAttr("content", $props.seo.modified_time)}${_scopeId2}><!--[-->`);
              ssrRenderList($props.seo.preload_images, (image) => {
                _push3(`<link rel="preload"${ssrRenderAttr("href", image)} as="image"${_scopeId2}>`);
              });
              _push3(`<!--]-->`);
            } else {
              return [
                createVNode("title", null, toDisplayString($props.seo.title), 1),
                createVNode("meta", {
                  name: "description",
                  content: $props.seo.description
                }, null, 8, ["content"]),
                createVNode("meta", {
                  name: "keywords",
                  content: $props.seo.keywords
                }, null, 8, ["content"]),
                createVNode("link", {
                  rel: "canonical",
                  href: $props.seo.canonical_url
                }, null, 8, ["href"]),
                createVNode("meta", {
                  property: "og:title",
                  content: $props.seo.og_title
                }, null, 8, ["content"]),
                createVNode("meta", {
                  property: "og:description",
                  content: $props.seo.og_description
                }, null, 8, ["content"]),
                createVNode("meta", {
                  property: "og:image",
                  content: $props.seo.og_image
                }, null, 8, ["content"]),
                createVNode("meta", {
                  property: "og:url",
                  content: $props.seo.og_url
                }, null, 8, ["content"]),
                createVNode("meta", {
                  property: "og:type",
                  content: $props.seo.og_type
                }, null, 8, ["content"]),
                createVNode("meta", {
                  property: "og:site_name",
                  content: $props.seo.og_site_name
                }, null, 8, ["content"]),
                createVNode("meta", {
                  name: "twitter:card",
                  content: $props.seo.twitter_card
                }, null, 8, ["content"]),
                createVNode("meta", {
                  name: "twitter:title",
                  content: $props.seo.twitter_title
                }, null, 8, ["content"]),
                createVNode("meta", {
                  name: "twitter:description",
                  content: $props.seo.twitter_description
                }, null, 8, ["content"]),
                createVNode("meta", {
                  name: "twitter:image",
                  content: $props.seo.twitter_image
                }, null, 8, ["content"]),
                createVNode("meta", {
                  name: "robots",
                  content: $props.seo.robots
                }, null, 8, ["content"]),
                createVNode("meta", {
                  name: "author",
                  content: $props.seo.author
                }, null, 8, ["content"]),
                createVNode("meta", {
                  name: "viewport",
                  content: "width=device-width, initial-scale=1.0"
                }),
                createVNode("meta", {
                  name: "theme-color",
                  content: $props.seo.theme_color
                }, null, 8, ["content"]),
                createVNode("meta", {
                  name: "msapplication-TileColor",
                  content: $props.seo.msapplication_TileColor
                }, null, 8, ["content"]),
                createVNode("meta", {
                  name: "apple-mobile-web-app-capable",
                  content: $props.seo.apple_mobile_web_app_capable
                }, null, 8, ["content"]),
                createVNode("meta", {
                  name: "apple-mobile-web-app-status-bar-style",
                  content: $props.seo.apple_mobile_web_app_status_bar_style
                }, null, 8, ["content"]),
                createVNode("meta", {
                  name: "geo.region",
                  content: $props.seo.geo_region
                }, null, 8, ["content"]),
                createVNode("meta", {
                  name: "geo.placename",
                  content: $props.seo.geo_placename
                }, null, 8, ["content"]),
                createVNode("meta", {
                  name: "geo.position",
                  content: $props.seo.geo_position
                }, null, 8, ["content"]),
                createVNode("meta", {
                  name: "ICBM",
                  content: $props.seo.ICBM
                }, null, 8, ["content"]),
                createVNode("meta", {
                  name: "last-modified",
                  content: $props.seo.last_modified
                }, null, 8, ["content"]),
                createVNode("meta", {
                  property: "article:published_time",
                  content: $props.seo.published_time
                }, null, 8, ["content"]),
                createVNode("meta", {
                  property: "article:modified_time",
                  content: $props.seo.modified_time
                }, null, 8, ["content"]),
                (openBlock(true), createBlock(Fragment, null, renderList($props.seo.preload_images, (image) => {
                  return openBlock(), createBlock("link", {
                    key: image,
                    rel: "preload",
                    href: image,
                    as: "image"
                  }, null, 8, ["href"]);
                }), 128))
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`<section class="services-section" id="services"${_scopeId}><div class="container"${_scopeId}><div class="section-header"${_scopeId}><h2${_scopeId}>Our Comprehensive Services</h2><p${_scopeId}>End-to-end medical billing and revenue cycle management solutions</p></div><div class="services-grid"${_scopeId}><div class="service-card"${_scopeId}><div class="service-icon"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_font_awesome_icon, {
          icon: ["fas", "receipt"],
          style: { "color": "#1b3169" }
        }, null, _parent2, _scopeId));
        _push2(`</div><h3${_scopeId}>Medical Billing &amp; Coding</h3><p${_scopeId}>Accurate CPT, ICD-10, and HCPCS coding to ensure maximum reimbursement and compliance with payer requirements.</p></div><div class="service-card"${_scopeId}><div class="service-icon"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_font_awesome_icon, {
          icon: ["fas", "inbox"],
          style: { "color": "#1b3169" }
        }, null, _parent2, _scopeId));
        _push2(`</div><h3${_scopeId}>Claims Submission &amp; Follow-Up</h3><p${_scopeId}>We handle all aspects of claims processing, including electronic submission, tracking, and follow-up to minimize rejections and delays.</p></div><div class="service-card"${_scopeId}><div class="service-icon"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_font_awesome_icon, {
          icon: ["fas", "credit-card"],
          style: { "color": "#1b3169" }
        }, null, _parent2, _scopeId));
        _push2(`</div><h3${_scopeId}>Payment Posting &amp; Reconciliation</h3><p${_scopeId}>Our team ensures all payments are posted accurately and reconciled against claims to keep your accounts balanced and transparent.</p></div><div class="service-card"${_scopeId}><div class="service-icon"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_font_awesome_icon, {
          icon: ["fas", "arrows-rotate"],
          style: { "color": "#1b3169" }
        }, null, _parent2, _scopeId));
        _push2(`</div><h3${_scopeId}>Rejection Management &amp; Appeals</h3><p${_scopeId}>We identify the root cause of rejections and aggressively pursue appeals to recover lost revenue.</p></div><div class="service-card"${_scopeId}><div class="service-icon"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_font_awesome_icon, {
          icon: ["fas", "users"],
          style: { "color": "#1b3169" }
        }, null, _parent2, _scopeId));
        _push2(`</div><h3${_scopeId}>Patient Billing &amp; Support</h3><p${_scopeId}>We offer clear, compassionate patient statements and support for any billing questions—reducing confusion and improving satisfaction.</p></div><div class="service-card"${_scopeId}><div class="service-icon"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_font_awesome_icon, {
          icon: ["fas", "chart-column"],
          style: { "color": "#1b3169" }
        }, null, _parent2, _scopeId));
        _push2(`</div><h3${_scopeId}>Customized Reporting &amp; Analytics</h3><p${_scopeId}>Gain insights into your financial performance with real-time, customized reports tailored to your practice&#39;s goals.</p></div></div></div></section>`);
      } else {
        return [
          createVNode(_component_Head, null, {
            default: withCtx(() => [
              createVNode("title", null, toDisplayString($props.seo.title), 1),
              createVNode("meta", {
                name: "description",
                content: $props.seo.description
              }, null, 8, ["content"]),
              createVNode("meta", {
                name: "keywords",
                content: $props.seo.keywords
              }, null, 8, ["content"]),
              createVNode("link", {
                rel: "canonical",
                href: $props.seo.canonical_url
              }, null, 8, ["href"]),
              createVNode("meta", {
                property: "og:title",
                content: $props.seo.og_title
              }, null, 8, ["content"]),
              createVNode("meta", {
                property: "og:description",
                content: $props.seo.og_description
              }, null, 8, ["content"]),
              createVNode("meta", {
                property: "og:image",
                content: $props.seo.og_image
              }, null, 8, ["content"]),
              createVNode("meta", {
                property: "og:url",
                content: $props.seo.og_url
              }, null, 8, ["content"]),
              createVNode("meta", {
                property: "og:type",
                content: $props.seo.og_type
              }, null, 8, ["content"]),
              createVNode("meta", {
                property: "og:site_name",
                content: $props.seo.og_site_name
              }, null, 8, ["content"]),
              createVNode("meta", {
                name: "twitter:card",
                content: $props.seo.twitter_card
              }, null, 8, ["content"]),
              createVNode("meta", {
                name: "twitter:title",
                content: $props.seo.twitter_title
              }, null, 8, ["content"]),
              createVNode("meta", {
                name: "twitter:description",
                content: $props.seo.twitter_description
              }, null, 8, ["content"]),
              createVNode("meta", {
                name: "twitter:image",
                content: $props.seo.twitter_image
              }, null, 8, ["content"]),
              createVNode("meta", {
                name: "robots",
                content: $props.seo.robots
              }, null, 8, ["content"]),
              createVNode("meta", {
                name: "author",
                content: $props.seo.author
              }, null, 8, ["content"]),
              createVNode("meta", {
                name: "viewport",
                content: "width=device-width, initial-scale=1.0"
              }),
              createVNode("meta", {
                name: "theme-color",
                content: $props.seo.theme_color
              }, null, 8, ["content"]),
              createVNode("meta", {
                name: "msapplication-TileColor",
                content: $props.seo.msapplication_TileColor
              }, null, 8, ["content"]),
              createVNode("meta", {
                name: "apple-mobile-web-app-capable",
                content: $props.seo.apple_mobile_web_app_capable
              }, null, 8, ["content"]),
              createVNode("meta", {
                name: "apple-mobile-web-app-status-bar-style",
                content: $props.seo.apple_mobile_web_app_status_bar_style
              }, null, 8, ["content"]),
              createVNode("meta", {
                name: "geo.region",
                content: $props.seo.geo_region
              }, null, 8, ["content"]),
              createVNode("meta", {
                name: "geo.placename",
                content: $props.seo.geo_placename
              }, null, 8, ["content"]),
              createVNode("meta", {
                name: "geo.position",
                content: $props.seo.geo_position
              }, null, 8, ["content"]),
              createVNode("meta", {
                name: "ICBM",
                content: $props.seo.ICBM
              }, null, 8, ["content"]),
              createVNode("meta", {
                name: "last-modified",
                content: $props.seo.last_modified
              }, null, 8, ["content"]),
              createVNode("meta", {
                property: "article:published_time",
                content: $props.seo.published_time
              }, null, 8, ["content"]),
              createVNode("meta", {
                property: "article:modified_time",
                content: $props.seo.modified_time
              }, null, 8, ["content"]),
              (openBlock(true), createBlock(Fragment, null, renderList($props.seo.preload_images, (image) => {
                return openBlock(), createBlock("link", {
                  key: image,
                  rel: "preload",
                  href: image,
                  as: "image"
                }, null, 8, ["href"]);
              }), 128))
            ]),
            _: 1
          }),
          createVNode("section", {
            class: "services-section",
            id: "services"
          }, [
            createVNode("div", { class: "container" }, [
              createVNode("div", { class: "section-header" }, [
                createVNode("h2", null, "Our Comprehensive Services"),
                createVNode("p", null, "End-to-end medical billing and revenue cycle management solutions")
              ]),
              createVNode("div", { class: "services-grid" }, [
                createVNode("div", { class: "service-card" }, [
                  createVNode("div", { class: "service-icon" }, [
                    createVNode(_component_font_awesome_icon, {
                      icon: ["fas", "receipt"],
                      style: { "color": "#1b3169" }
                    })
                  ]),
                  createVNode("h3", null, "Medical Billing & Coding"),
                  createVNode("p", null, "Accurate CPT, ICD-10, and HCPCS coding to ensure maximum reimbursement and compliance with payer requirements.")
                ]),
                createVNode("div", { class: "service-card" }, [
                  createVNode("div", { class: "service-icon" }, [
                    createVNode(_component_font_awesome_icon, {
                      icon: ["fas", "inbox"],
                      style: { "color": "#1b3169" }
                    })
                  ]),
                  createVNode("h3", null, "Claims Submission & Follow-Up"),
                  createVNode("p", null, "We handle all aspects of claims processing, including electronic submission, tracking, and follow-up to minimize rejections and delays.")
                ]),
                createVNode("div", { class: "service-card" }, [
                  createVNode("div", { class: "service-icon" }, [
                    createVNode(_component_font_awesome_icon, {
                      icon: ["fas", "credit-card"],
                      style: { "color": "#1b3169" }
                    })
                  ]),
                  createVNode("h3", null, "Payment Posting & Reconciliation"),
                  createVNode("p", null, "Our team ensures all payments are posted accurately and reconciled against claims to keep your accounts balanced and transparent.")
                ]),
                createVNode("div", { class: "service-card" }, [
                  createVNode("div", { class: "service-icon" }, [
                    createVNode(_component_font_awesome_icon, {
                      icon: ["fas", "arrows-rotate"],
                      style: { "color": "#1b3169" }
                    })
                  ]),
                  createVNode("h3", null, "Rejection Management & Appeals"),
                  createVNode("p", null, "We identify the root cause of rejections and aggressively pursue appeals to recover lost revenue.")
                ]),
                createVNode("div", { class: "service-card" }, [
                  createVNode("div", { class: "service-icon" }, [
                    createVNode(_component_font_awesome_icon, {
                      icon: ["fas", "users"],
                      style: { "color": "#1b3169" }
                    })
                  ]),
                  createVNode("h3", null, "Patient Billing & Support"),
                  createVNode("p", null, "We offer clear, compassionate patient statements and support for any billing questions—reducing confusion and improving satisfaction.")
                ]),
                createVNode("div", { class: "service-card" }, [
                  createVNode("div", { class: "service-icon" }, [
                    createVNode(_component_font_awesome_icon, {
                      icon: ["fas", "chart-column"],
                      style: { "color": "#1b3169" }
                    })
                  ]),
                  createVNode("h3", null, "Customized Reporting & Analytics"),
                  createVNode("p", null, "Gain insights into your financial performance with real-time, customized reports tailored to your practice's goals.")
                ])
              ])
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Services.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Services = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  Services as default
};
