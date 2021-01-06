# 外部改变

## 1.动态参数

组件的<font color="red">事件</font>和<font color="red">参数（props,slot,指令）</font>可以动态绑定

<iframe height="560" style="width: 100%;" scrolling="no" title="动态参数" src="https://codepen.io/shuxiaoman/embed/MWjQrEM?height=560&theme-id=light&default-tab=js,result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/shuxiaoman/pen/MWjQrEM'>动态参数</a> by GrainFull
  (<a href='https://codepen.io/shuxiaoman'>@shuxiaoman</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

## 2.多 v-model 绑定

一个组件支持<font color="red">多个属性</font>进行双向绑定

<iframe height="265" style="width: 100%;" scrolling="no" title="Multiple v-models" src="https://codepen.io/team/Vue/embed/GRoPPrM?height=265&theme-id=light&default-tab=html,result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/team/Vue/pen/GRoPPrM'>Multiple v-models</a> by Vue
  (<a href='https://codepen.io/Vue'>@Vue</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

## 3.自定义修饰符

可自定义<font color="green">v-model</font>修饰符功能（比如输入框异步加载选项功能）

```html
<click-button v-model:title.daxie="title" />
```

```js
export default {
  props: {
    titleModifiers: {
      default: () => ({
        daxie: false,
      }),
    },
  },
  methods: {
    onInput(e: any) {
      let value = e?.target?.value;
      if (this.titleModifiers?.daxie) {
        value = `${value[0].toUpperCase()}${value.slice(1)}`;
      }
      this.$emit("update:title", value);
    },
  },
};
```

## 4.Teleport

通过<font color="green">&lt;Teleport&gt;&lt;/Teleport&gt;</font> 将组件挂载到指定节点

<iframe height="435" style="width: 100%;" scrolling="no" title="Vue 3 Teleport" src="https://codepen.io/team/Vue/embed/gOPNvjR?height=435&theme-id=light&default-tab=js,result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/team/Vue/pen/gOPNvjR'>Vue 3 Teleport</a> by Vue
  (<a href='https://codepen.io/Vue'>@Vue</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

## 5.Reactive API（响应式 API）

> reactive、ref、toRef(toRefs)

reactive:传入对象，返回响应式对象；
ref:传入基础类型的值，返回响应式 ref 对象，通过.value 访问值
还有 isReactive、isProxy、readonly 等

<iframe height="1055" style="width: 100%;" scrolling="no" title="reactive" src="https://codepen.io/shuxiaoman/embed/xxEjvjv?height=1055&theme-id=light&default-tab=js,result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/shuxiaoman/pen/xxEjvjv'>reactive</a> by GrainFull
  (<a href='https://codepen.io/shuxiaoman'>@shuxiaoman</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

## 6.Composition API（组合式 API）

`setup`

- 使用模版时，返回对象

```js
export default {
  setup() {
    const readersNumber = ref(0);
    const book = reactive({ title: "Vue 3 Guide" });

    // expose to template
    return {
      readersNumber,
      book,
    };
  },
};
```

- 不使用模版时，返回渲染函数或 jsx

```js
export default {
  setup() {
    const readersNumber = ref(0);
    const book = reactive({ title: "Vue 3 Guide" });
    // Please note that we need to explicitly expose ref value here
    return () => h("div", [readersNumber.value, book.title]);
  },
};
```

`生命周期钩子函数映射`

- ~~`beforeCreate`~~ -> use `setup()`
- ~~`created`~~ -> use `setup()`
- `beforeMount` -> `onBeforeMount`
- `mounted` -> `onMounted`
- `beforeUpdate` -> `onBeforeUpdate`
- `updated` -> `onUpdated`
- `beforeUnmount` -> `onBeforeUnmount`
- `unmounted` -> `onUnmounted`
- `errorCaptured` -> `onErrorCaptured`
- `renderTracked` -> `onRenderTracked`
- `renderTriggered` -> `onRenderTriggered`
