import { pushScopeId, popScopeId, openBlock, createBlock, createVNode, renderSlot, withScopeId } from 'vue';

var script = {
  name: "mxpButton",
  props: {
    msg: String,
    color: String,
    light: Boolean
  },

  mounted() {
    let btn = document.getElementById("btn-component");
    btn.style.backgroundColor = this.color ? this.color : "";
    btn.style.color = this.light ? "white" : "black";
  }

};

const _withId = /*#__PURE__*/withScopeId("data-v-0ea572d2");

pushScopeId("data-v-0ea572d2");

const _hoisted_1 = {
  id: "btn-component",
  class: "color default-style"
};

popScopeId();

const render = /*#__PURE__*/_withId((_ctx, _cache, $props, $setup, $data, $options) => {
  return openBlock(), createBlock("div", null, [createVNode("button", _hoisted_1, [renderSlot(_ctx.$slots, "default")])]);
});

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = "\n.color[data-v-0ea572d2] {\n  background: color;\n}\n.default-style[data-v-0ea572d2] {\n  margin: 1rem;\n  padding-inline: 1rem;\n  padding-block: 0.5rem;\n  border-radius: 0.3rem;\n  border: 1px solid transparent;\n  box-shadow: 0 1px 10px 1.5px grey;\n  cursor: pointer;\n}\n";
styleInject(css_248z);

script.render = render;
script.__scopeId = "data-v-0ea572d2";

/* eslint-disable import/prefer-default-export */

var components = /*#__PURE__*/Object.freeze({
  __proto__: null,
  mxpButton: script
});

// Import vue components

const install = function installMxpLibrary(app) {
  Object.entries(components).forEach(([componentName, component]) => {
    app.component(componentName, component);
  });
}; // Create module definition for Vue.use()

export default install;
export { script as mxpButton };
