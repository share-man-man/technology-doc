# V3 新特性
> 基于 proxy 和 reflect 实现

<font size=4 color=red></font>

## 1. 动态参数

```html
<input :[inutProp]="url" /> <button :[eventName]="doSomething">测试按钮</button>
```

```js
data(){
        return {
            inutProp:'value' , // 可以是href、name、id等
            eventName:'input' // 可以是change、click等
        }
    }
```

## 2. 多事件处理

```html
<button @click="addOne(), log()">
  点击按钮
</button>
```
```js
export default {
    data(){
        return {
            total:0;
        }
    },
    methods(){
        addOne(){
            this.total++
        },
        log(){
            console.log(`点击了${this.total}次`)
        }
    }
}
```

## 3. 按键修饰符
