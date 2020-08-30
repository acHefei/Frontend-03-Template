## 学习笔记
### 知识体系的骨架(权威，完备性线索)
    1.语法作为第一部了解的入口
### CSS2.1 语法
    1. https://www.w3.org/TR/CSS21/grammar.html#q25.0
    2. https://www.w3.org/TR/css-syntax-3
### css 
    1. at-rules
        1.1 @charset : https://www.w3.org/TR/css-syntax-3/
        1.2 @import :https://www.w3.org/TR/css-cascade-4/
        1.3 @media :https://www.w3.org/TR/css3-conditional/
        1.4 @page : https://www.w3.org/TR/css-page-3/
        1.5 @counter-style :https://www.w3.org/TR/css-counter-styles-3 
        1.6 @keyframes :https://www.w3.org/TR/css-animations-1/
        1.7 @fontface :https://www.w3.org/TR/css-fonts-3/
        1.8 @supports :https://www.w3.org/TR/css3-conditional/
        1.9 @namespace :https://www.w3.org/TR/css-namespaces-3/
    2. rule    
        1.1 Selector
            1.1.1 selector_group
            1.1.2 selector (>, <sp>, +, ~) 
            1.1.3 simple_selector (type, *, ., #, [], :, ::, :not())
        1.2 Declaration
            1.2.1 Key (variables, properties)
            1.2.2 Value (calc, number, length, ...)
### css规则
    1. Selector
        1.1 https://www.w3.org/TR/selectors-3/
        1.2 https://www.w3.org/TR/selectors-4/
    2. Key
        1.1 Properties
        1.2 Variables: https://www.w3.org/TR/css-variables/
    3. Value
        1.1 https://www.w3.org/TR/css-values-4/

### css 选择器
    1. 简单选择器
        1.1 *
        1.2 div svg|a
        1.3 .cls
        1.4 #id
        1.5 [attr=value]
        1.6 :hover
        1.7 ::before
    2. 复合选择器
        2.1 <简单选择器> <简单选择器> <简单选择器>
        2.2 * 或者 div 必须写在最前面  伪类 伪元素写在最后面
    3. 复杂选择器
        3.1 <复合选择器> <sp> <复合选择器>
        3.2 <复合选择器> " > " <复合选择器>
        3.3 <复合选择器> " ~ " <复合选择器>
        3.4 <复合选择器> " + " <复合选择器>
        3.5 <复合选择器> " || " <复合选择器>
### 伪类
    1. 链接/行为
        1.1 :any-link (匹配所有的超链接)
        1.2 :link :visited （link 匹配的是还没有访问过的超链接，visited 已经访问过的超链接 , link + visited = any-link , 使用这2个后 就没法更改此元素 除了文字颜色 以为的属性 - 为安全考虑）
        1.3 :hover
        1.4 :active
        1.5 :focus
        1.6 :target
    2. 树结构
        2.1 :empty
        2.2 :nth-child()
        2.3 :nth-last-child()
        2.4 :first-child :last-child :only-child
    3. 逻辑型
        3.1 :not伪类
        3.2 :where :has
    (不应该出现过于复杂的伪类选择器)    
### 伪元素
    1. ::before
    2. ::after
    3. ::first-line
    4. ::first-letter

    (::before，::after - 写了 content 属性，就像一个真正的DOM 元素一样，可以去生成盒，参与后续的排版和渲染，可指定 border,background 等。 可理解为 伪元素就是通过选择器向界面上添加了一个不存在的元素)
    (::first-line - 选中第一行，::first-letter - 选中第一个字母  原本已经存在了 content)

    可用属性
    first-line: font系列
                color系列
                background系列
                word-spacing
                letter-spacing
                text-decoration
                text-transform
                line-height
    first-letter: font系列
                  color系列
                  background系列
                  word-spacing
                  letter-spacing
                  text-decoration
                  text-transform
                  line-height      
                  float
                  vertical-align
                  盒模型系列: margin,padding,border

