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
  name: "WhyUs",
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
        _push2(`<section class="why-choose-section" id="why"${_scopeId}><div class="container"${_scopeId}><div class="section-header"${_scopeId}><h2${_scopeId}>Why Choose Pro Bill Solutions?</h2><p${_scopeId}>We deliver results that matter to your practice</p></div><div class="features-grid"${_scopeId}><div class="feature-item"${_scopeId}><div class="feature-icon"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_font_awesome_icon, {
          icon: ["fas", "hospital"],
          style: { "color": "#ffffff" }
        }, null, _parent2, _scopeId));
        _push2(`</div><h3${_scopeId}>All Specialties Welcome</h3><p${_scopeId}>From cardiology to chiropractic, family medicine to dermatology—we understand the unique billing nuances of every specialty.</p></div><div class="feature-item"${_scopeId}><div class="feature-icon"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_font_awesome_icon, {
          icon: ["fas", "circle-check"],
          style: { "color": "#ffffff" }
        }, null, _parent2, _scopeId));
        _push2(`</div><h3${_scopeId}>Compliance You Can Trust</h3><p${_scopeId}>We stay up-to-date with HIPAA, CMS, and payer regulations so you don&#39;t have to.</p></div><div class="feature-item"${_scopeId}><div class="feature-icon"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_font_awesome_icon, {
          icon: ["fas", "handshake"],
          style: { "color": "#ffffff" }
        }, null, _parent2, _scopeId));
        _push2(`</div><h3${_scopeId}>Personalized Support</h3><p${_scopeId}>You&#39;ll never be just another account. Our dedicated team knows your practice and is always just a call or message away.</p></div><div class="feature-item"${_scopeId}><div class="feature-icon"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_font_awesome_icon, {
          icon: ["fas", "cloud"],
          style: { "color": "#ffffff" }
        }, null, _parent2, _scopeId));
        _push2(`</div><h3${_scopeId}>Advanced Technology</h3><p${_scopeId}>We use secure, cloud-based platforms that integrate smoothly with your existing systems for fast, accurate billing.</p></div><div class="feature-item"${_scopeId}><div class="feature-icon"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_font_awesome_icon, {
          icon: ["fas", "chart-line"],
          style: { "color": "#ffffff" }
        }, null, _parent2, _scopeId));
        _push2(`</div><h3${_scopeId}>Proven Results</h3><p${_scopeId}>We help providers increase collections, shorten payment cycles, and reduce claim rejections—consistently.</p></div></div></div></section><section class="cta-section"${_scopeId}><div class="container"${_scopeId}><div class="cta-content"${_scopeId}><h2${_scopeId}>Ready to Streamline Your Revenue Cycle?</h2><p${_scopeId}>Join countless healthcare providers who trust Pro Bill Solutions with their medical billing needs. Let us help you focus on what you do best—caring for your patients.</p><button class="btn-cta"${_scopeId}>Start Your Partnership Today</button></div></div></section>`);
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
            class: "why-choose-section",
            id: "why"
          }, [
            createVNode("div", { class: "container" }, [
              createVNode("div", { class: "section-header" }, [
                createVNode("h2", null, "Why Choose Pro Bill Solutions?"),
                createVNode("p", null, "We deliver results that matter to your practice")
              ]),
              createVNode("div", { class: "features-grid" }, [
                createVNode("div", { class: "feature-item" }, [
                  createVNode("div", { class: "feature-icon" }, [
                    createVNode(_component_font_awesome_icon, {
                      icon: ["fas", "hospital"],
                      style: { "color": "#ffffff" }
                    })
                  ]),
                  createVNode("h3", null, "All Specialties Welcome"),
                  createVNode("p", null, "From cardiology to chiropractic, family medicine to dermatology—we understand the unique billing nuances of every specialty.")
                ]),
                createVNode("div", { class: "feature-item" }, [
                  createVNode("div", { class: "feature-icon" }, [
                    createVNode(_component_font_awesome_icon, {
                      icon: ["fas", "circle-check"],
                      style: { "color": "#ffffff" }
                    })
                  ]),
                  createVNode("h3", null, "Compliance You Can Trust"),
                  createVNode("p", null, "We stay up-to-date with HIPAA, CMS, and payer regulations so you don't have to.")
                ]),
                createVNode("div", { class: "feature-item" }, [
                  createVNode("div", { class: "feature-icon" }, [
                    createVNode(_component_font_awesome_icon, {
                      icon: ["fas", "handshake"],
                      style: { "color": "#ffffff" }
                    })
                  ]),
                  createVNode("h3", null, "Personalized Support"),
                  createVNode("p", null, "You'll never be just another account. Our dedicated team knows your practice and is always just a call or message away.")
                ]),
                createVNode("div", { class: "feature-item" }, [
                  createVNode("div", { class: "feature-icon" }, [
                    createVNode(_component_font_awesome_icon, {
                      icon: ["fas", "cloud"],
                      style: { "color": "#ffffff" }
                    })
                  ]),
                  createVNode("h3", null, "Advanced Technology"),
                  createVNode("p", null, "We use secure, cloud-based platforms that integrate smoothly with your existing systems for fast, accurate billing.")
                ]),
                createVNode("div", { class: "feature-item" }, [
                  createVNode("div", { class: "feature-icon" }, [
                    createVNode(_component_font_awesome_icon, {
                      icon: ["fas", "chart-line"],
                      style: { "color": "#ffffff" }
                    })
                  ]),
                  createVNode("h3", null, "Proven Results"),
                  createVNode("p", null, "We help providers increase collections, shorten payment cycles, and reduce claim rejections—consistently.")
                ])
              ])
            ])
          ]),
          createVNode("section", { class: "cta-section" }, [
            createVNode("div", { class: "container" }, [
              createVNode("div", { class: "cta-content" }, [
                createVNode("h2", null, "Ready to Streamline Your Revenue Cycle?"),
                createVNode("p", null, "Join countless healthcare providers who trust Pro Bill Solutions with their medical billing needs. Let us help you focus on what you do best—caring for your patients."),
                createVNode("button", {
                  class: "btn-cta",
                  onClick: _ctx.scrollToContact
                }, "Start Your Partnership Today", 8, ["onClick"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/WhyUs.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const WhyUs = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  WhyUs as default
};
