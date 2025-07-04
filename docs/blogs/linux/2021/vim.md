---
title: vim 快速入门
date: 2021-08-21
tags:
 - 运维linux
categories:
 - Linux
---

# vim翻半页

首次进入默认（normal模式）

dd:删除当前行

5dd:删除从当前行开始的5行（ndd）

d相当于剪切

p复制

gg跳到起始行

7gg跳到第7行

G跳到结束行

shift+4（即$）跳到行末

0跳到行首



v:视图模式，可以选中删除

V:行级模式，按行选中删除

i输入模式：esc退出

I：输入模式进入行首：

o:在下面新建空行

O:在上面新建空行

末行模式，必须从normal模式进：

:set nu设置行号

:set nonu取消设置行号

20gg:跳到20行

/bind:查找bind，n下一个，N上一个



' > 尖括号是缩进

w 是跳单词

v 模式 选中

将当前行移动到下一行 :m+1



## vim翻半页

- ctr-d：向后翻半页 
- ctr-u：向前翻半页

## vim整整页

- ctr+f：向后翻整页 forward
- ctr+b：向前翻整页 back

# vim跳转

## vim跳首行

- g+g
- :1
  第二种方式需要输入：
  先按shift+:
  再输入1

## vim跳尾行

- shift+g
- :$
  第二种方式需要输入：
  先按shift+:
  再输入$

# 文本的查找与替换



```c
/string   正向查找
?string   反向查找

设置高亮显示
    :set hls
    *按键将当前光标处的单词高亮显示，使用n浏览下一个查找高亮的结果
:s/old/new   将当前行的第一个字符串old替换为new
:s/old/new/g   将当前行的所有字符串old替换为new
:90s/old/new/g  将指定行的所有字符串old替换为new
:90,93s/old/new/g  将指定范围的行的所有字符串old替换为new
:%s/old/new/g   将文本中所有的字符串old替换为new
:%s/old/new/gc  依次替换每个字符串关键字
:%s/^struct/int/g   将所有以struct开头的字符串替换为int
```

# vscode vim

先解决 vim 切换中英文的问题

https://github.com/daipeihust/im-select#installation

```json
za: 折叠当前行
zM: 折叠所有代码
zR: 展开所有代码
zc: 折叠当前选中的代码块
zO: 展开当前折叠的代码块
```



空格 + k 可以显示变量名

空格 + i 切换 bool



za 是折叠



文件树

r 重命名

c 复制

p 粘贴

d 删除

o 收起/关闭 打开



w 跳单词 



]d 下一处错误

[d sh  上一出错误

ctrl + k 查看变量

sapce + c + a 触发快速修复

sapce + i 切换 bool

# 

# 知乎 vim 的基本配置

## 一些基本配置

对应视频教程：

[VS Code 学 Vim （1）- 介绍和normal模式移动技巧](https://www.zhihu.com/zvideo/1435277601602924544)

[VS Code 学 Vim （2）- Insert模式的移动技巧](https://www.zhihu.com/zvideo/1435646393200996352)

[VS Code 学 Vim （3）- normal模式的编辑技巧](https://www.zhihu.com/zvideo/1437831784768114688)



:information_source: VS Code Vim 不是 Vim。不过他模拟了绝大部分的Vim操作。
但是也会出现很多支持不太好的功能，比如宏、Vim script等等。但是，就我个人的使用Code
的Vim模拟器已经满足我的需求了。更加复杂的功能，还是需要 code 的命令支持：Cmd+Shift+p.

### 中文输入法的梦魇

如何解决VSCode Vim中文输入法切换问题？ - Daniel的回答 - 知乎
https://www.zhihu.com/question/303850876/answer/540324790

### 按键绑定



```plain
jj -> ESC
enter -> :
caps lock -> ctrl
```

## 基础

Vim常用的有三种模式，但是不能孤立的用，要结合起来用。
Vim的规则非常简单，但是组合起来非常强大，提供了一套文本编辑的“高级”语言。

Vim语言的基本语法：动词 + 「数量、介词」 + 名词Vim语言充满了名词做动词的情况。

Vim的精髓在于重复，.

### 模式

三种基本模式：

- Normal，用来移动和编辑
- Insert，用来输入
- Visual/Selection，用来选择编辑块



```plain
Esc                Insert -> Normal
i/I/o/O/c/a/A      Normal -> Insert
v / V              Normal -> Visual
```

### 移动

### Normal Mode

基本操作：



```plain
hjkl         ⬆️ ⬇️  
w/b/e      按照单词移动
{ }        按照段落移动
%          在闭合的括号之间移动
gg         回到文档最上端
G          回到文档最低端
0          回到行首
$          回到行尾
```

加入数量：



```plain
1j         向下移动1行
8j         向下移动8行
```

移动到某一行：

- :12<Enter> 移动到12行
- 12gg 移动到12行

搜索移动：

这是非常高效移动方式：j

- fa: 向右移动到下一个a
- ta: 向右移动到下一个a的前一个字符
- Fa: 向左移动到下一个a
- Ta: 向左移动到下一个a的前一个字符

另外，可以直接按 \ 进入搜索模式，去寻找目标单词或字母。

### Insert Mode

插入模式就是其他编辑的模式，用来输入信息。但是在插入模式，我们也可以直接移动光标、删除。
这进一步增加了Vim的灵活性，也就是说对于很局部化的操作，我们可以在插入模式下进行移动。

在插入模式下，Vim的光标移动遵循了一半 Bash shell 的快捷键。

def cls():
...



```plain
Ctrl+p     up
Ctrl+n     down
Ctrl+b     left
Ctrl+f     right
Ctrl+a     到行首
Ctrl+e     到行位
Ctrl+h     delete 1 
Ctrl+w     delete back 1 word
Ctrl+u     delete back to start of line
```

### Visual Mode

选择模式下的移动与正常模式的完全一致的。

:point_right:**纵向编辑** :point_left: 神器

ctrl+v

### 页面展示

窗口移动



```plain
zz         把光标置于屏幕中间
ctrl + e   向上移动屏幕
ctrl + y   向下移动屏幕
```

折叠、展开代码块



```plain
zc        关闭代码块
zo        打开代码块
za        打开、关闭代码块
```

### 编辑

这就是Vim强大的地方：编辑。

Vim中的动词：



```plain
d
c
y
p
x
>
<
u
Ctrl - r
.
```

名词，这些东西在Vim中成为 Text Object，推荐使用他们进行操作，这是一种高于hjkl移动的抽象。



```plain
w       词（可以做动词）
p       段落（可以做动词）
jk      行 （可以做动词）
各种括号、引号等等
s       句子
```

介词



```plain
i     表示里面
a     表示外面
```

## 常用操作

- 格式化代码：==
- 注释代码：gc{c,j,k}
- 切换tab：gt{tab的数字}
- 回退：u
- 重做：Ctrl+r

## 高级主题

### 寄存器

### 标记

## 插件

### 对应快捷键记忆

```bash
y: yank（复制）
p: put（粘贴）
d: delete（删除）
c: change（修改）
v: visual（可视模式）
w: word（单词）
b: back（向后）
e: end（结尾）
f: find（查找）

r: replace（替换）
s: substitute（替代）
a: append（追加）
i: insert（插入）
o: open（打开）
x: delete（删除一个字符）
G: go to line（跳转到指定行）
n: next（下一个）
m: mark（标记）

I: insert at beginning of line（在行首插入）
A: append at end of line（在行尾追加）
o: open a new line below（在下方插入新行）
O: open a new line above（在上方插入新行）
u: undo（撤销）
Ctrl-R: redo（重做）
:: command-line mode（命令行模式）
.: repeat last command（重复上一次命令
```

# vim 快速入门

有一个段子。

> 如何快速学会游泳？
> 
> 只需要三步，骗到河边，踢下水，用竹竿戳远点。

那如何快速学会 vim 呢？

> 默认编辑器设为 vim，删掉其他一切编辑器，明天上线。

以下是能够在 **零配置零插件** 下快速使用 vim 的一系列步骤，只需要多加练习，便能快速熟练使用 vim。 **无他，唯手熟尔。**

<!--more-->

## 快速移动

**快速移动是 vim 的重中之重，比一切插件都要重要**。也是下编辑和修改的基础。

+ **上(k)下(j)左(h)右(l)** 移动，需要注意，禁止使用上下左右箭头
    如果需要移动数行，可以在操作前加数字。如 `10j` 代表往下移动十行。 **通过数字与操作结合，这是 vim 的思想。**

+ 减少上一步的左右移动，效率太低，使用 `b, B, w, W` 代替
    `b` 指 back a word，退回一个单词。`w` 指 forward a word，前进一个单词。
    `B` 指 back a WORD，退回一个大单词。`w` 指 forward a WORD，前进一个大单词。

    > 其中，word 以及 WORD 的区别，以一个示例说明。 hello.world 有三个 word ('hello', '.', 'world')，却只有一个 WORD。

+ 使用 `f, F, t, T` 进行更为精细的左右移动控制
    `f` 指 find a character，快速移动到下一个字符的位置，`F` 指向前查找。结合 `b, w` 实现快速左右移动。
    `t` 指 tail a character，快速移动到下一个字符位置的前一个字符，`T` 指向前查找。

+ 使用 `0, $` 进行行首行尾移动

+ 使用 `%` 快速移动到配对字符
    如从左括号快速移动到右括号，左引号快速移动到右引号，在编码中最为常用！

+ 使用 `<Ctrl-d>，<Ctrl-u>` 进行大范围上下移动
    `<Ctrl-d>` 往下移动半页，`<Ctrl-u>` 往上移动半页。

    > 也可以使用 `<Ctrl-f>, <Ctrl-b>` 进行整页移动。

+ 使用 `gg, G` 进行首行尾行移动

+ `:128` 表示快速定位到 128 行，目前只在 debug 中使用

+ `zz` 快速定位当前光标至当前屏幕中间，`zb` 定位当前光标至屏尾，`zt` 定位当前光标至屏首

+ `*` 定位当前光标下的单词，并指向下一个，`#` 指向上一个

+ `gd` 在编码中常用，定位当前变量的申明位置，`gf` 定位到当前路径所指向的文件。
  
+ 最后如果你发祥定位错了，可以使用 `<Ctrl>-o` 回到光标的上一位置

## 编辑

vim 的编辑在 `Insert Mode`，以上的快速移动是在 `Normal Mode`。编辑文本需要首先进入 `Insert Mode`。

`i, I, a, A, o, O` 进入 `Insert Mode`。

`i` 指 insert text，在该光标前进行编辑，`I` 指在行首进行编辑。
`a` 指 append text，在该光标后进行编辑，`A` 指在行尾进行编辑。
`o` 指 append text，在该光标后一行进行编辑，`O` 指在光标前一行进行编辑。

个人习惯，`i, A, o, O` 用的多一些，`I, a` 基本不用。

`Esc` 以及 `<Ctrl-[>` 都可以退出 `Insert Mode`。

个人习惯使用 `<Ctrl-[>`，一来 `Esc` 过远，二来在一些编辑器中 `Esc` 容易与其它热键冲突。

## 修改

删除也可以在 `Insert Mode` 使用 `delete` 键进行手动删除，不过效率太低，建议一般在 `Normal Mode` 进行删除，刚进入 vim 的状态便是 `Normal Mode`。

+ 使用 `x(dl)` 删除特定字符
    可以结合 `x` 以及上述所讲的快速移动，删掉光标下的特定字符

    在括号里标注 `l`，意指 `x` 为 `dl` 的简写。

    **`d` 指 `delete`，表示删除，是所有修改操作的基础。`dl` 由 `d` 和 `l` 两个操作组成，代表删掉光标右侧的字符，同理，`dh` 代表删掉光标左侧的字符，这是所有删除的基本形式，也是 vim 的核心思想。**

+ 使用 `daw` 删除特定单词

    `daw` 指 `delete a word`，表示删除特定单词。同样也可以使用 `db, dw` 来删除单词。

+ 使用 `dt, df` 加特定字符，删掉字符前的文本

+ 使用 `di(, da(` 删除特定符号内的文本，如删除括号，引号中的文本

    `di(` 指 `delete in (`，不会删掉括号。`da(` 指 `delete a (`，会连同括号一同删掉。同理还有 `di'`，`di"` 等，在编码中最为常用！

+ 使用 `D (d$)` 删除掉该字符以后的所有文本

+ 使用 `dd` 删掉整行

+ **把以上操作的所有 d 替换为 c，表示删除后进入编辑模式**

    `c` 指 `change`，表示删除，如 `d` 一样，是 vim 的基本动词

+ 使用 `r` 加特定字符，表示使用特定字符代替原有字符

## 文件以及多窗口

+ 使用 `:Ex (Explore)` 浏览目录

    定位到文件所在行，回车进入指定文件

+ 使用 `:ls` 列出缓冲列表

    缓冲列表中保存最近使用文件，行头有标号

+ 使用 `:bn` 进入最近使用文件

    `bn` 指 `buffer next`，进入缓冲列表的下个缓冲，即最近一次使用文件

+ 使用 `:b[N]` 进入缓冲列表中标号为 N 的文件

    `b 10` 指 `buffer 10`，进入缓冲列表，即最近一次使用文件

+ 使用 `:sbn, :vbn` 在新窗口打开最近使用文件

    `s` 指 `split`，水平方向。
    `v` 指 `vertical`，垂直方向。

+ 使用 `:on(ly)` 只保留当前窗口

## 基本操作

基本操作指查找，替换，撤销，重做，复制，粘贴，保存等

+ `/{pattern}` 查找
    `/` 后加需要查找的词或者正则表达式进行查询，`n` 向下查询，`N` 向上查询。

+ `:s/aa/bb/g` 替换
    `s` 指 `substitute` 的缩写，替换，`g` 代表全局替换。

+ `u` 撤销
    `u` 指 `undo` 的缩写，撤销。可与数字结合进行多次撤销。

+ `<Ctrl-r>` 重做

+ `yy` 复制整行
    `y` 指 `yank`，复制。使 `y` 与快速移动结合起来，可以使用多种情况的复制，如复制括号中内容，复制引号中内容。

    复制时，会把当前内容置入寄存器，使用 `:reg` 查看寄存器列表。

+ `p` 粘贴
    `p` 指 `paste`，粘贴。

+ `"*y` 复制内容至系统剪切板

    `:reg` 会列出寄存器列表，`"*` 寄存器代表系统剪切板()，所以以上就是把内容放到系统剪切板。

    如果寄存器列表中没有该寄存器，则 vim 不支持系统剪切板，也可以使用命令 `vim --version | grep clipboard`。

+ `"*p` 粘贴系统剪切板中内容

## 配置

关于配置，推荐一下 [amix/vimrc](https://github.com/amix/vimrc) ，在 github 上超过一万四千颗星。

另外，再推荐下我的配置 [shfshanyue/vim-config](https://github.com/shfshanyue/vim-config)，其中有一些插件，如 `emmet` 和 `typescript` 非常适合前端开发。

<hr/>
