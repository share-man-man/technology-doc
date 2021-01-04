# V3 新特性

> 基于 proxy 和 reflect 实现

<font size=4 color=red></font>

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

## 4.插槽

作用域插槽 <font color="green">v-slot</font> 可使用 <font color="green">es6</font> 的解构

```html
<todo-list v-slot="{ item: todo }">
  <i class="fas fa-check"></i>
  <span class="green">{{ todo }}</span>
</todo-list>
```

## 5.Teleport

将组件挂载到指定节点
