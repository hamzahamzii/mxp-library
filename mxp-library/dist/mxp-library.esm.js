import { pushScopeId, popScopeId, openBlock, createBlock, createVNode, renderSlot, withScopeId } from 'vue';

var script$2 = {
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

const _withId$1 = /*#__PURE__*/withScopeId("data-v-d14b6a88");

pushScopeId("data-v-d14b6a88");

const _hoisted_1$2 = {
  id: "btn-component",
  class: "color default-style"
};

popScopeId();

const render$2 = /*#__PURE__*/_withId$1((_ctx, _cache, $props, $setup, $data, $options) => {
  return openBlock(), createBlock("div", null, [createVNode("button", _hoisted_1$2, [renderSlot(_ctx.$slots, "default")])]);
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

var css_248z$1 = "\n.color[data-v-d14b6a88] {\n  background: color;\n}\n.default-style[data-v-d14b6a88] {\n  margin: 1rem;\n  padding-inline: 1rem;\n  padding-block: 0.5rem;\n  border-radius: 0.3rem;\n  border: 1px solid transparent;\n  box-shadow: 0 1px 10px 1.5px grey;\n  cursor: pointer;\n}\n";
styleInject(css_248z$1);

script$2.render = render$2;
script$2.__scopeId = "data-v-d14b6a88";

var script$1 = {
  name: "mxpInput",
  props: {
    msg: String,
    color: String,
    light: Boolean
  },

  mounted() {
    let btn = document.getElementById("input-component");
    btn.style.backgroundColor = this.color ? this.color : "";
    btn.style.color = this.light ? "white" : "black";
  }

};

const _withId = /*#__PURE__*/withScopeId("data-v-c8fc64fc");

pushScopeId("data-v-c8fc64fc");

const _hoisted_1$1 = /*#__PURE__*/createVNode("button", {
  type: "text",
  id: "input-component",
  class: "color default-style"
}, null, -1);

popScopeId();

const render$1 = /*#__PURE__*/_withId((_ctx, _cache, $props, $setup, $data, $options) => {
  return openBlock(), createBlock("div", null, [_hoisted_1$1]);
});

var css_248z = "\n.color[data-v-c8fc64fc] {\n  background: color;\n}\n.default-style[data-v-c8fc64fc] {\n  margin: 1rem;\n  padding-inline: 1rem;\n  padding-block: 0.5rem;\n  border-radius: 0.3rem;\n  border: 1px solid black;\n  box-shadow: 0 1px 10px 1.5px grey;\n  cursor: pointer;\n}\n";
styleInject(css_248z);

script$1.render = render$1;
script$1.__scopeId = "data-v-c8fc64fc";

var script = {
  name: "mxpCard"
};

const _hoisted_1 = {
  class: "flex"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("div", _hoisted_1, [renderSlot(_ctx.$slots, "default")]);
}

script.render = render;

/* eslint-disable import/prefer-default-export */

var components = /*#__PURE__*/Object.freeze({
  __proto__: null,
  mxpButton: script$2,
  mxpInput: script$1,
  mxpCard: script
});

// Import vue components

const install = function installMxpLibrary(app) {
  Object.entries(components).forEach(([componentName, component]) => {
    app.component(componentName, component);
  });
}; // Create module definition for Vue.use()

export default install;
export { script$2 as mxpButton, script as mxpCard, script$1 as mxpInput };
