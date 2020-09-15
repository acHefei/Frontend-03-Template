学习笔记

HTML的定义： XML 和 SGML

XML
XML 指的是可扩展标记语言：eXtensible Markup Language。
XML 是一种很像HTML的标记语言。
XML 的设计宗旨是传输数据，而不是显示数据。
XML 标签没有被预定义。您需要自行定义标签。
XML 被设计为具有自我描述性。
XML 是 W3C 的推荐标准
HTML
HTML 指的是超文本标记语言: HyperText Markup Language。
HTML 不是一种编程语言，而是一种标记语言。标记语言是一套标记标签 (markup tag)。
HTML 使用标记标签来描述网页。
HTML 文档包含了HTML 标签及文本内容。
HTML文档也叫做 web 页面。
HTML5
HTML5 是下一代 HTML 标准。
HTML , HTML 4.01的上一个版本诞生于 1999 年。自从那以后，Web 世界已经经历了巨变。
HTML5 仍处于完善之中。然而，大部分现代浏览器已经具备了某些 HTML5 支持。
HTML中合法元素写法一共有6种

Element: 
Text: text
Comment:
DocumentType:
ProcessingInstruction:
CDATA:
字符引用

&#161--¡
&amp--&
&lt------<
&quot--->

浏览器API | DOM API

导航类操作

parentNode
childNodes
firstChild
lastChild
nextSibling
previousSibling
parentElement
children
firstElementChild
lastElementChild
nextElementSibling
previousElementSibling

修改操作

appendChild
insertBefore
removeChild
replaceChild

高级操作

compareDocumentPosition：比较节点前后关系
contains： 一个是否包含另一个
isEqualNode： 是否完全相同
isSameNode：是否同一个，可以使用 === 代替
cloneNode：复制，传true为深度

Range API

基本

var range = new Range()
range.setStart(element, 9)
range.setEnd(element, 4)
var range = document.getSelection().getRangeAt(0)
选择

range.setStartBefore
range.setEndBefore
range.setStartAfter
range.setEndAfter
range.selectNode
range.selectNodeContent

删除，添加

var fragment = range.extractContents()
range.insetNode(document.createTextNod('aa'))

CSSOM

Rules
document.styleSheets[0].cssRules
document.styleSheets[0].insertRule("p{color:pink;}", 0)
document.styleSheets[0].removeRule(0)