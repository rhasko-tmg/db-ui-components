import { Y as defineAsyncComponent, _ as __vitePreload, Z as Comp1, $ as createRouter, v as histoireConfig, a0 as createWebHistory, a1 as createWebHashHistory, a2 as markRaw, K as reactive, d as defineComponent, r as ref, a3 as watchEffect, o as openBlock, q as createBlock, a4 as mergeProps, a5 as resolveDynamicComponent, h as createCommentVNode } from "./vendor-c7b92822.js";
const Comp0 = defineAsyncComponent(() => __vitePreload(() => import("./BcButton.story-24c6712b.js"), true ? ["assets/BcButton.story-24c6712b.js","assets/vendor-c7b92822.js"] : void 0));
let files = [
  { "id": "src-components-bc-button-bcbutton-story-vue", "path": ["BcButton"], "filePath": "src/components/bc-button/BcButton.story.vue", "story": { "id": "src-components-bc-button-bcbutton-story-vue", "title": "BcButton", "group": null, "layout": { "type": "single", "iframe": true }, "icon": null, "iconColor": null, "docsOnly": false, "variants": [{ "id": "src-components-bc-button-bcbutton-story-vue-0", "title": "Default", "icon": null, "iconColor": null }, { "id": "src-components-bc-button-bcbutton-story-vue-1", "title": "Outlined", "icon": null, "iconColor": null }, { "id": "src-components-bc-button-bcbutton-story-vue-2", "title": "Text", "icon": null, "iconColor": null }] }, "supportPluginId": "vue3", "index": 0, component: Comp0, source: () => __vitePreload(() => import("./__resolved__virtual_story-source_src-components-bc-button-bcbutton-story-vue-cbb98cf4.js"), true ? [] : void 0) },
  { "id": "tailwind", "path": ["Tailwind"], "filePath": "/home/runner/work/db-ui-components/db-ui-components/node_modules/.histoire/plugins/builtin_tailwind-tokens/Tailwind.story.js", "story": { "id": "tailwind", "title": "Tailwind", "group": "design-system", "layout": { "type": "single", "iframe": false }, "icon": "mdi:tailwind", "docsOnly": false, "variants": [{ "id": "background-color", "title": "Background Color", "icon": "carbon:color-palette" }, { "id": "text-color", "title": "Text Color", "icon": "carbon:text-color" }, { "id": "border-color", "title": "Border Color", "icon": "carbon:color-palette" }, { "id": "padding", "title": "Padding", "icon": "carbon:area" }, { "id": "margin", "title": "Margin", "icon": "carbon:area" }, { "id": "font-size", "title": "Font Size", "icon": "carbon:text-font" }, { "id": "font-weight", "title": "Font Weight", "icon": "carbon:text-font" }, { "id": "font-family", "title": "Font Family", "icon": "carbon:text-font" }, { "id": "letter-spacing", "title": "Letter Spacing", "icon": "carbon:text-font" }, { "id": "line-height", "title": "Line Height", "icon": "carbon:text-font" }, { "id": "drop-shadow", "title": "Drop Shadow", "icon": "carbon:shape-except" }, { "id": "border-radius", "title": "Border Radius", "icon": "carbon:condition-wait-point" }, { "id": "border-width", "title": "Border Width", "icon": "carbon:checkbox" }, { "id": "width", "title": "Width", "icon": "carbon:pan-horizontal" }, { "id": "height", "title": "Height", "icon": "carbon:pan-vertical" }, { "id": "full-config", "title": "Full Config", "icon": "carbon:code" }] }, "supportPluginId": "vanilla", "index": 1, component: Comp1, source: () => __vitePreload(() => import("./__resolved__virtual_story-source_tailwind-7e52563d.js"), true ? [] : void 0) }
];
let tree = [{ "group": true, "id": "design-system", "title": "Design System", "children": [{ "title": "Tailwind", "index": 1 }] }, { "title": "BcButton", "index": 0 }];
const base = "/db-ui-components/";
function createRouterHistory() {
  switch (histoireConfig.routerMode) {
    case "hash":
      return createWebHashHistory(base);
    case "history":
    default:
      return createWebHistory(base);
  }
}
const router = createRouter({
  history: createRouterHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => __vitePreload(() => import("./HomeView.vue-bcbee002.js"), true ? ["assets/HomeView.vue-bcbee002.js","assets/vendor-c7b92822.js"] : void 0)
    },
    {
      path: "/story/:storyId",
      name: "story",
      component: () => __vitePreload(() => import("./StoryView.vue-8dcdb925.js"), true ? ["assets/StoryView.vue-8dcdb925.js","assets/vendor-c7b92822.js","assets/story-deb3d87d.js","assets/MobileOverlay.vue2-4c669306.js","assets/BaseEmpty.vue-520e9be6.js","assets/state-090cd348.js","assets/events-fa9896a6.js"] : void 0)
    }
  ]
});
const copiedFromExistingVariant = [
  "state",
  "slots",
  "source",
  "responsiveDisabled",
  "autoPropsDisabled",
  "setupApp",
  "configReady",
  "previewReady"
];
function mapFile(file, existingFile) {
  let result;
  if (existingFile) {
    result = existingFile;
    for (const key in file) {
      if (key === "story") {
        result.story = {
          ...result.story,
          ...file.story,
          file: markRaw(result),
          variants: file.story.variants.map((v) => mapVariant(v, existingFile.story.variants.find((item) => item.id === v.id)))
        };
      } else if (key !== "component") {
        result[key] = file[key];
      }
    }
  } else {
    result = {
      ...file,
      component: markRaw(file.component),
      story: {
        ...file.story,
        title: file.story.title,
        file: markRaw(file),
        variants: file.story.variants.map((v) => mapVariant(v)),
        slots: () => ({})
      }
    };
  }
  return result;
}
function mapVariant(variant, existingVariant) {
  let result;
  if (existingVariant) {
    result = existingVariant;
    for (const key in variant) {
      if (!copiedFromExistingVariant.includes(key)) {
        result[key] = variant[key];
      }
    }
  } else {
    result = {
      ...variant,
      state: reactive({
        _hPropState: {},
        _hPropDefs: {}
      }),
      setupApp: null,
      slots: () => ({}),
      previewReady: false
    };
  }
  return result;
}
const clientSupportPlugins = {
  "vanilla": () => __vitePreload(() => import("./vendor-c7b92822.js").then((n) => n.aP), true ? [] : void 0),
  "vue3": () => __vitePreload(() => import("./vendor-c7b92822.js").then((n) => n.aQ), true ? [] : void 0)
};
const __default__ = {
  inheritAttrs: false
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...__default__,
  __name: "GenericMountStory",
  props: {
    story: null
  },
  setup(__props) {
    const props = __props;
    const mountComponent = ref(null);
    watchEffect(async () => {
      var _a;
      const clientPlugin = clientSupportPlugins[(_a = props.story.file) == null ? void 0 : _a.supportPluginId];
      if (clientPlugin) {
        const pluginModule = await clientPlugin();
        mountComponent.value = markRaw(pluginModule.MountStory);
      }
    });
    return (_ctx, _cache) => {
      return mountComponent.value ? (openBlock(), createBlock(resolveDynamicComponent(mountComponent.value), mergeProps({
        key: 0,
        class: "histoire-generic-mount-story",
        story: __props.story
      }, _ctx.$attrs), null, 16, ["story"])) : createCommentVNode("", true);
    };
  }
});
export {
  _sfc_main as _,
  base as b,
  clientSupportPlugins as c,
  files as f,
  mapFile as m,
  router as r,
  tree as t
};
