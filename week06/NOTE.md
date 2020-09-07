学习笔记

### 盒
HTML代码中可以书写开始标签，结束标签，和自封闭标签
一对起止标签，表示一个元素
DOM树中存储的是元素和其他类型的节点(Node)
CSS选择器选中的是元素
CSS选择器选中的元素，在排版时可能产生多个盒
排版和渲染的基本单位是盒

### 盒模型
content - padding - border - margin
box-sizing : content-box / border-box

### CSS排版
#### 正常流排版
    收集盒进行
    计算盒在行中的排布
    计算行的排布
#### Flex排版
    收集盒进行
    计算盒在主轴方向的排布
    计算盒在交叉轴方向的排布

    分行
        根据主轴尺寸，把元素分进行
        若设置了no-wrap,则强行分配进第一行
    计算主轴方向
        找出所有Flex元素
        把主轴方向的剩余尺寸按比例分配给这些元素
        若剩余空间为负数，所有flex元素为0，等比压缩剩余元素
    计算交叉轴方向
        根据每一行中最大元素尺寸计算行高
        根据行高flex-align和item-align，确定元素具体位置

### Animation 
    使用keyframes定义动画的关键帧
    animation属性使用关键帧
    @keyframes定义
    animation 使用

    @keyframes 可以使用 from to ,也可以使用 百分比

    组成部分
        animation-name: 时间曲线
        animation-duration: 动画时长
        animation-timing-function: 动画的时间曲线
        animation-delay: 动画开始前的延迟
        animation-iteration-count: 动画的播放次数
        animation-direction: 动画方向

    Transition
        transition-property: 要变换的属性
        transition-duration: 便函的时长
        transition-timing-function: 时间曲线
        transition-delay: 延迟

### HSL 和 HSV 
        