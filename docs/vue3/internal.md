# 内部改变

## 1.生命周期钩子函数

> v2.x

- beforeCreate
- created
- beforeMount
- mounted
- beforeUpdate
- updated
- beforeDestory
- destoryed

> v3.x

- setup `组合式api（文档上没有，个人觉得应该加进去）`
- beforeCreate
- created
- beforeMount
- mounted
- beforeUpdate
- updated
- beforeUnmount ~~`beforeDestory`~~
- unmounted ~~`destoryed`~~

## 2.基于 proxy 和 reflect 实现

<iframe height="803" style="width: 100%;" scrolling="no" title="XWjYbrv" src="https://codepen.io/shuxiaoman/embed/XWjYbrv?height=803&theme-id=light&default-tab=js,result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/shuxiaoman/pen/XWjYbrv'>XWjYbrv</a> by GrainFull
  (<a href='https://codepen.io/shuxiaoman'>@shuxiaoman</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

## 3.性能提升

- 动态节点标记
  需要响应式数据或事件监听的节点，添加一个patchFlag，使vnode可以迅速找到需要修改的节点
- 静态节点提升
  将静态节点提升到公共变量，增加代码重用性
- 事件缓存
  将响应事件放入内联函数的数组里，避免每次执行都需要重新创建
- treeshaking（树摇）
  动态引入v-model、type="checkbox"、内置组件等模块，删掉多余代码，缩小代码体积

