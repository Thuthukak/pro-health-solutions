import { ref, onMounted, resolveComponent, withCtx, createVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual } from "vue/server-renderer";
import { N as Navbar } from "./Navbar-BXfAFAmu.js";
import { F as Footer } from "./Footer-BvSyP4rA.js";
import "axios";
const _sfc_main = {
  __name: "ContactUs",
  __ssrInlineRender: true,
  props: {
    seo: Object,
    structuredData: String,
    contactInfo: Object
  },
  setup(__props) {
    const props = __props;
    const form = ref({
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
      const _component_Head = resolveComponent("Head");
      const _component_font_awesome_icon = resolveComponent("font-awesome-icon");
      _push(`<!--[-->`);
      _push(ssrRenderComponent(Navbar, { seo: __props.seo }, null, _parent));
      _push(ssrRenderComponent(_component_Head, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a, _b, _c, _d;
          if (_push2) {
            _push2(`<title${_scopeId}>${ssrInterpolate(__props.seo.title)}</title><meta name="description"${ssrRenderAttr("content", __props.seo.description)}${_scopeId}><meta name="keywords"${ssrRenderAttr("content", __props.seo.keywords)}${_scopeId}><meta property="og:type"${ssrRenderAttr("content", __props.seo.og_type)}${_scopeId}><meta property="og:url"${ssrRenderAttr("content", __props.seo.og_url)}${_scopeId}><meta property="og:title"${ssrRenderAttr("content", __props.seo.og_title)}${_scopeId}><meta property="og:description"${ssrRenderAttr("content", __props.seo.og_description)}${_scopeId}><meta property="og:image"${ssrRenderAttr("content", __props.seo.og_image)}${_scopeId}><meta property="og:site_name"${ssrRenderAttr("content", __props.seo.og_site_name)}${_scopeId}><meta property="twitter:card"${ssrRenderAttr("content", __props.seo.twitter_card)}${_scopeId}><meta property="twitter:url"${ssrRenderAttr("content", __props.seo.og_url)}${_scopeId}><meta property="twitter:title"${ssrRenderAttr("content", __props.seo.twitter_title || __props.seo.og_title)}${_scopeId}><meta property="twitter:description"${ssrRenderAttr("content", __props.seo.twitter_description || __props.seo.og_description)}${_scopeId}><meta property="twitter:image"${ssrRenderAttr("content", __props.seo.og_image)}${_scopeId}><meta name="contact:phone"${ssrRenderAttr("content", (_a = __props.contactInfo) == null ? void 0 : _a.phone)}${_scopeId}><meta name="contact:email"${ssrRenderAttr("content", (_b = __props.contactInfo) == null ? void 0 : _b.email)}${_scopeId}><meta name="geo.region" content="ZA-GP"${_scopeId}><meta name="geo.placename" content="Johannesburg"${_scopeId}><meta name="geo.position" content="-26.052120488886704;28.182524335456343"${_scopeId}><meta name="ICBM" content="-26.052120488886704, 28.182524335456343"${_scopeId}><link rel="canonical"${ssrRenderAttr("href", __props.seo.canonical_url)}${_scopeId}>`);
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
              createVNode("meta", {
                property: "og:type",
                content: __props.seo.og_type
              }, null, 8, ["content"]),
              createVNode("meta", {
                property: "og:url",
                content: __props.seo.og_url
              }, null, 8, ["content"]),
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
                property: "og:site_name",
                content: __props.seo.og_site_name
              }, null, 8, ["content"]),
              createVNode("meta", {
                property: "twitter:card",
                content: __props.seo.twitter_card
              }, null, 8, ["content"]),
              createVNode("meta", {
                property: "twitter:url",
                content: __props.seo.og_url
              }, null, 8, ["content"]),
              createVNode("meta", {
                property: "twitter:title",
                content: __props.seo.twitter_title || __props.seo.og_title
              }, null, 8, ["content"]),
              createVNode("meta", {
                property: "twitter:description",
                content: __props.seo.twitter_description || __props.seo.og_description
              }, null, 8, ["content"]),
              createVNode("meta", {
                property: "twitter:image",
                content: __props.seo.og_image
              }, null, 8, ["content"]),
              createVNode("meta", {
                name: "contact:phone",
                content: (_c = __props.contactInfo) == null ? void 0 : _c.phone
              }, null, 8, ["content"]),
              createVNode("meta", {
                name: "contact:email",
                content: (_d = __props.contactInfo) == null ? void 0 : _d.email
              }, null, 8, ["content"]),
              createVNode("meta", {
                name: "geo.region",
                content: "ZA-GP"
              }),
              createVNode("meta", {
                name: "geo.placename",
                content: "Johannesburg"
              }),
              createVNode("meta", {
                name: "geo.position",
                content: "-26.052120488886704;28.182524335456343"
              }),
              createVNode("meta", {
                name: "ICBM",
                content: "-26.052120488886704, 28.182524335456343"
              }),
              createVNode("link", {
                rel: "canonical",
                href: __props.seo.canonical_url
              }, null, 8, ["href"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<section class="contact-section" id="contact"><div class="container"><div class="section-header"><h2>Get in Touch</h2><p>Ready to transform your medical billing? Contact us today for a free consultation.</p></div><div class="contact-grid"><div class="contact-info"><h3>Contact Information</h3><div class="contact-item"><div class="contact-icon">`);
      _push(ssrRenderComponent(_component_font_awesome_icon, {
        icon: ["fas", "envelope"],
        style: { "color": "#1b3169" }
      }, null, _parent));
      _push(`</div><div><h4>Email</h4><p>info@probillsolutions.co.za</p></div></div><div class="contact-item"><div class="contact-icon">`);
      _push(ssrRenderComponent(_component_font_awesome_icon, {
        icon: ["fas", "phone"],
        style: { "color": "#1b3169" }
      }, null, _parent));
      _push(`</div><div><h4>Phone</h4><p>0634923419 | 0679358660</p></div></div><div class="contact-item"><div class="contact-icon">`);
      _push(ssrRenderComponent(_component_font_awesome_icon, {
        icon: ["fas", "clock"],
        style: { "color": "#1b3169" }
      }, null, _parent));
      _push(`</div><div><h4>Business Hours</h4><p>Monday - Friday: 8:00 AM - 6:00 PM</p></div></div></div><div class="contact-form"><form><div class="form-group"><input${ssrRenderAttr("value", form.value.name)} type="text" placeholder="Your Name" required></div><div class="form-group"><input${ssrRenderAttr("value", form.value.email)} type="email" placeholder="Your Email" required></div><div class="form-group"><input${ssrRenderAttr("value", form.value.practice)} type="text" placeholder="Practice Name"></div><div class="form-group"><select required><option value=""${ssrIncludeBooleanAttr(Array.isArray(form.value.specialty) ? ssrLooseContain(form.value.specialty, "") : ssrLooseEqual(form.value.specialty, "")) ? " selected" : ""}>Select Your Specialty</option><option value="cardiology"${ssrIncludeBooleanAttr(Array.isArray(form.value.specialty) ? ssrLooseContain(form.value.specialty, "cardiology") : ssrLooseEqual(form.value.specialty, "cardiology")) ? " selected" : ""}>Cardiology</option><option value="dermatology"${ssrIncludeBooleanAttr(Array.isArray(form.value.specialty) ? ssrLooseContain(form.value.specialty, "dermatology") : ssrLooseEqual(form.value.specialty, "dermatology")) ? " selected" : ""}>Dermatology</option><option value="family-medicine"${ssrIncludeBooleanAttr(Array.isArray(form.value.specialty) ? ssrLooseContain(form.value.specialty, "family-medicine") : ssrLooseEqual(form.value.specialty, "family-medicine")) ? " selected" : ""}>Family Medicine</option><option value="chiropractic"${ssrIncludeBooleanAttr(Array.isArray(form.value.specialty) ? ssrLooseContain(form.value.specialty, "chiropractic") : ssrLooseEqual(form.value.specialty, "chiropractic")) ? " selected" : ""}>Chiropractic</option><option value="other"${ssrIncludeBooleanAttr(Array.isArray(form.value.specialty) ? ssrLooseContain(form.value.specialty, "other") : ssrLooseEqual(form.value.specialty, "other")) ? " selected" : ""}>Other</option></select></div><div class="form-group"><textarea placeholder="Tell us about your billing needs" rows="4">${ssrInterpolate(form.value.message)}</textarea></div><button type="submit" class="btn-submit">Send Message</button></form></div></div></div></section>`);
      _push(ssrRenderComponent(Footer, { seo: __props.seo }, null, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/ContactUs.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
