# 学习笔记
## 学习了HTML的解析，
### paese模块对文件拆分，使用FSM实现HTML分析，如何解析标签，创建元素，处理attributes，最后使用token构建DOM树
### 并使用 npm css ，调用CSS Parser分析CSS规则，（ast 结构很重要，需要仔细看下）
### 创建元素后，立即计算CSS,理论上分析元素时，所有css规则已经收集完毕
### 在computecss函数中，必须知道元素的所以父元素才能判断元素与规则是否匹配，因为首先获取的是’当前元素‘，所以获得与计算父元素匹配的顺序是从内向外
### 选择器要从当前元素向外排列，复杂选择器拆成针对单个元素的选择器，用循环匹配父元素队列
### 根据选择器的类型和元素属性，计算是否与当前元素匹配，一旦选择匹配，就应用选择器到元素上，形成computedStyle
### CSS规则根据specificity和后来优先规则覆盖，specificity是个四元组，越左边权重越高，一个CSS规则的specificity根据包含的简单选择器相加而成
