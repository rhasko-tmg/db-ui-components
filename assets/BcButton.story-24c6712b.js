import { ay as defineComponent, az as openBlock, aA as createElementBlock, aB as normalizeClass, aC as createCommentVNode, aD as renderSlot, aE as createTextVNode, aF as toDisplayString, aG as reactive, aH as resolveComponent, aI as createBlock, aJ as withCtx, aK as logEvent, aL as createVNode } from "./vendor-c7b92822.js";
var BUTTON_TYPE = /* @__PURE__ */ ((BUTTON_TYPE2) => {
  BUTTON_TYPE2["DEFAULT"] = "default";
  BUTTON_TYPE2["OUTLINED"] = "outlined";
  BUTTON_TYPE2["TEXT"] = "text";
  return BUTTON_TYPE2;
})(BUTTON_TYPE || {});
var SIZE_TYPE = /* @__PURE__ */ ((SIZE_TYPE2) => {
  SIZE_TYPE2["SM"] = "sm";
  SIZE_TYPE2["MD"] = "md";
  SIZE_TYPE2["LG"] = "lg";
  return SIZE_TYPE2;
})(SIZE_TYPE || {});
var POSITION_TYPE = /* @__PURE__ */ ((POSITION_TYPE2) => {
  POSITION_TYPE2["LEFT"] = "left";
  POSITION_TYPE2["RIGHT"] = "right";
  return POSITION_TYPE2;
})(POSITION_TYPE || {});
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const COMMON_BUTTON_CLASS_LIST = [
  "px-4",
  "py-2",
  "font-bold",
  "rounded-sm",
  "transition",
  "ease-in-out",
  "duration-300",
  "hover:shadow-lg",
  "flex",
  "flex-row",
  "justify-center",
  "items-center"
];
const BUTTON_SIZE_STYLES = {
  [SIZE_TYPE.SM]: "text-sm",
  [SIZE_TYPE.MD]: "text-base",
  [SIZE_TYPE.LG]: "text-lg"
};
const STYLES_MAP = {
  [BUTTON_TYPE.DEFAULT]: {
    NORMAL: [
      "text-white",
      "bg-primary",
      "hover:bg-primary-darker",
      "focus:bg-primary-dark",
      "active:bg-primary-dark"
    ],
    DISABLED: [
      "bg-silver",
      "text-secondary",
      "hover:shadow-none"
    ]
  },
  [BUTTON_TYPE.OUTLINED]: {
    NORMAL: [
      "bg-white",
      "text-primary",
      "border",
      "border-primary",
      "hover:text-primary-darker",
      "hover:border-primary-darker",
      "focus:text-primary-dark",
      "focus:border-primary-dark",
      "active:text-primary-dark",
      "active:border-primary-dark"
    ],
    DISABLED: [
      "bg-white",
      "text-secondary",
      "border",
      "border-silver",
      "hover:shadow-none"
    ]
  },
  [BUTTON_TYPE.TEXT]: {
    NORMAL: [
      "bg-transparent",
      "text-primary",
      "hover:text-primary-darker",
      "focus:text-primary-dark",
      "active:text-primary-dark",
      "hover:shadow-none"
    ],
    DISABLED: [
      "bg-transparent",
      "text-secondary",
      "hover:shadow-none"
    ]
  }
};
const _sfc_main$1 = defineComponent({
  name: "BcButton",
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    label: {
      type: String,
      default: ""
    },
    type: {
      type: String,
      default: BUTTON_TYPE.DEFAULT
    },
    size: {
      type: String,
      default: SIZE_TYPE.MD
    },
    icon: {
      type: String,
      default: ""
    },
    iconPos: {
      type: String,
      default: "right"
    }
  },
  computed: {
    buttonsClassList() {
      const styles = this.disabled ? STYLES_MAP[this.type].DISABLED || STYLES_MAP[BUTTON_TYPE.DEFAULT].DISABLED : STYLES_MAP[this.type].NORMAL || STYLES_MAP[BUTTON_TYPE.DEFAULT].NORMAL;
      return [...COMMON_BUTTON_CLASS_LIST, BUTTON_SIZE_STYLES[this.size || "MD"], ...styles].join(" ");
    }
  }
});
const _hoisted_1 = ["disabled"];
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("button", {
    class: normalizeClass(_ctx.buttonsClassList),
    disabled: _ctx.disabled
  }, [
    _ctx.icon && _ctx.iconPos === "left" ? (openBlock(), createElementBlock(
      "i",
      {
        key: 0,
        class: normalizeClass(`db-icon db-icon-${_ctx.icon} mr-2 text-lg`)
      },
      null,
      2
      /* CLASS */
    )) : createCommentVNode("v-if", true),
    renderSlot(_ctx.$slots, "default", {}, () => [
      createTextVNode(
        toDisplayString(_ctx.label),
        1
        /* TEXT */
      )
    ]),
    _ctx.icon && _ctx.iconPos === "right" ? (openBlock(), createElementBlock(
      "i",
      {
        key: 1,
        class: normalizeClass(`db-icon db-icon-${_ctx.icon} ml-2 text-lg`)
      },
      null,
      2
      /* CLASS */
    )) : createCommentVNode("v-if", true)
  ], 10, _hoisted_1);
}
_sfc_main$1.__file = "src/components/bc-button/BcButton.vue";
const BcButton = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__file", "/home/runner/work/db-ui-components/db-ui-components/src/components/bc-button/BcButton.vue"]]);
const block0 = (Comp) => {
  Comp.doc = '<h1 id="my-documentation" tabindex="-1">My documentation <a class="header-anchor" href="#my-documentation" aria-hidden="true">#</a></h1>\n';
};
const _sfc_main = {
  __name: "BcButton.story",
  setup(__props, { expose }) {
    expose();
    const sizeOptions = [
      {
        label: "SM",
        value: SIZE_TYPE.SM
      },
      {
        label: "MD",
        value: SIZE_TYPE.MD
      },
      {
        label: "LG",
        value: SIZE_TYPE.LG
      }
    ];
    const iconPositionOptions = [
      {
        label: "Left",
        value: POSITION_TYPE.LEFT
      },
      {
        label: "Right",
        value: POSITION_TYPE.RIGHT
      }
    ];
    const icons = {
      "chevron-down": "chevron-down",
      "chevron-right": "chevron-right",
      "notifications-without-bubble": "notifications-without-bubble"
    };
    const state = reactive({
      disabled: false,
      content: "Hello world",
      size: SIZE_TYPE.MD,
      icon: "",
      iconPosition: POSITION_TYPE.RIGHT
    });
    const __returned__ = { sizeOptions, iconPositionOptions, icons, state, reactive, get logEvent() {
      return logEvent;
    }, BcButton, get BUTTON_TYPE() {
      return BUTTON_TYPE;
    }, get SIZE_TYPE() {
      return SIZE_TYPE;
    }, get POSITION_TYPE() {
      return POSITION_TYPE;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_HstText = resolveComponent("HstText");
  const _component_HstCheckbox = resolveComponent("HstCheckbox");
  const _component_HstButtonGroup = resolveComponent("HstButtonGroup");
  const _component_HstSelect = resolveComponent("HstSelect");
  const _component_Variant = resolveComponent("Variant");
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, { title: "BcButton" }, {
    controls: withCtx(() => [
      createVNode(_component_HstText, {
        modelValue: $setup.state.content,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.state.content = $event),
        title: "Content"
      }, null, 8, ["modelValue"]),
      createVNode(_component_HstCheckbox, {
        modelValue: $setup.state.disabled,
        "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $setup.state.disabled = $event),
        title: "Disabled"
      }, null, 8, ["modelValue"]),
      createVNode(_component_HstButtonGroup, {
        modelValue: $setup.state.size,
        "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $setup.state.size = $event),
        title: "Label",
        options: $setup.sizeOptions
      }, null, 8, ["modelValue"]),
      createVNode(_component_HstSelect, {
        modelValue: $setup.state.icon,
        "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => $setup.state.icon = $event),
        title: "Icon",
        options: $setup.icons
      }, null, 8, ["modelValue"]),
      createVNode(_component_HstButtonGroup, {
        modelValue: $setup.state.iconPosition,
        "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => $setup.state.iconPosition = $event),
        title: "Icon Position",
        options: $setup.iconPositionOptions
      }, null, 8, ["modelValue"])
    ]),
    default: withCtx(() => [
      createVNode(_component_Variant, { title: "Default" }, {
        default: withCtx(() => [
          createVNode($setup["BcButton"], {
            label: $setup.state.content,
            disabled: $setup.state.disabled,
            size: $setup.state.size,
            icon: $setup.state.icon,
            "icon-pos": $setup.state.iconPosition,
            onClick: _cache[5] || (_cache[5] = ($event) => $setup.logEvent("click", $event))
          }, null, 8, ["label", "disabled", "size", "icon", "icon-pos"])
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_Variant, { title: "Outlined" }, {
        default: withCtx(() => [
          createVNode($setup["BcButton"], {
            type: $setup.BUTTON_TYPE.OUTLINED,
            label: $setup.state.content,
            disabled: $setup.state.disabled,
            size: $setup.state.size,
            icon: $setup.state.icon,
            "icon-pos": $setup.state.iconPosition,
            onClick: _cache[6] || (_cache[6] = ($event) => $setup.logEvent("click", $event))
          }, null, 8, ["type", "label", "disabled", "size", "icon", "icon-pos"]),
          createTextVNode("️ ")
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_Variant, { title: "Text" }, {
        default: withCtx(() => [
          createVNode($setup["BcButton"], {
            type: $setup.BUTTON_TYPE.TEXT,
            label: $setup.state.content,
            disabled: $setup.state.disabled,
            size: $setup.state.size,
            icon: $setup.state.icon,
            "icon-pos": $setup.state.iconPosition,
            onClick: _cache[7] || (_cache[7] = ($event) => $setup.logEvent("click", $event))
          }, null, 8, ["type", "label", "disabled", "size", "icon", "icon-pos"])
        ]),
        _: 1
        /* STABLE */
      })
    ]),
    _: 1
    /* STABLE */
  });
}
if (typeof block0 === "function")
  block0(_sfc_main);
_sfc_main.__file = "src/components/bc-button/BcButton.story.vue";
const BcButton_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/runner/work/db-ui-components/db-ui-components/src/components/bc-button/BcButton.story.vue"]]);
export {
  BcButton_story as default
};
