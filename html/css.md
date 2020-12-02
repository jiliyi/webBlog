- css 权重，优先级大小排序：括号里写具体的权重值
!important（Infinity）>行间样式（1000）>id（100）>class/属性/伪类（10）>标
签/伪元素（1）>通配符（0）
（1）!important 写在 css 代码后，Infinity 意思是正无穷。
（2）这里的值是 256 进制！
（3）同级标签谁在后以谁为准。

- 真题思考：用css实现直角三角形
- 思路：将一个矩形盒子的宽高设为0，它的四条边会平分矩形，形成三个三角形，再取将相邻两三角就是直角三角形了。

```css
div {
 width: 0;
 height: 0;
 border: 200px solid #000;
 border-top-color: transparent;
 border-right-color: transparent;
}
```

- margin 塌陷 bug：垂直方向的 margin 父子元素是结合在一起的，取最大的一个值，
就是父级元素包裹了一个子元素，你给父级元素加了一个 margin-top 值，给子元素也
加了一个 margin-top 值，但是你会发现，当子元素的值小于父元素的值时，子元素的
值不起作用，当子元素的值大于父元素的值时，子元素会和父元素一起动。弥补办法：
给父元素加一个顶棚：border-left：1px solid red；这是一个土方法，开发的时
候不能用，真正解决这个问题的办法就是给父级元素触发 BFC（BFC 后期会讲），方法：
（1）position：absolute；
（2）display：inline-block；
（3）float：left/right；
（4）overflow：hidden；（溢出部分隐藏）
以上四种方法都能触发 BFC，但也会引发新的问题，在开发的时候，因情况而定，哪个
伪元素、包裹浮动元素、浮动应用、导航栏实例
17
合适用哪个

- 解决包裹浮动元素的方法：
给子元素设置了浮动之后，父元素如果没有设置宽度，父元素就不会显示。以下方法可以解决。
1 把父级元素后边的伪元素调用出来 content=“”；，然后转为块级元素，再清除浮
动。比如：

```css
div::after {
 content: "";
 display: block;
 clear: both;
}
```

2 给父级元素触发 bfc
注意：凡是设置了 float：left/right 或者 position：absolute 的元素内部会自动把
他转化为行级块元素（inline-block）。

文字溢出容器处理
（1）单行文本：三件套：white-space：nowrap；（禁止换行），overflow：hidden；
（溢出部分隐藏），text-overflow：ellipsis；（文字打点）(当文字的宽度小于容器
的宽度时，没有变化，当文字的宽度大于容器的宽度时就打点显示)
（2）多行文本只做截断，不做打点（打点是手写上去的），先让行高和容器的高成比
显示（比如容器 40px，line-height 是 20px，你也就只能放两行，所以得把数字算好），
然后溢出部分隐藏处理。

阿里笔试题：使用语义化的 HTML 标签及 css 完成以下布局：
{最多两行 20px #333，顶部对齐图片，底部间距 8px}
{12px #666 行高 1.2}使用语义化的标签完成以下布局，考虑模块化和扩展性。容器默
认宽度 320px，右侧。
![节点](./timu.jpg)