# 第一章：计算机组成原理

## 1.1 计算机系统

* 计算机（Computer），俗称`"电脑"`，是一种能够接收和存储信息，并按照存储在其内部的程序对海量的数据进行自动、高速的处理，然后将处理结果输出的现代化智能电子设备。
* 计算机有很多形式，如：台式电脑、笔记本电脑、智能手机、平板电脑等，还有生产环境中提供重要业务支撑的各种服务器。

![](./assets/1.jpg)

* 一个完整的`计算机系统`由`硬件（Hardware）系统`和`软件（Software）系统`两大部分组成，即：

![](./assets/2.png)

## 1.2 冯·诺依曼体系结构

* `冯·诺依曼`是一位多才多艺的科学家，他在数学、物理学、计算机科学、经济学等领域都有杰出的贡献。

![](./assets/3.jpg)

* `冯·诺依曼`的主要成就：
  - 在计算机科学领域的最著名贡献是提出了`冯·诺依曼`体系结构（1946 年），这是`现代计算机设计的基础`。
  - 促进了计算机的可编程性和通用性，使得计算机能够执行各种复杂的任务。
  - 对核武器设计、自动化控制系统、人工智能等领域的发展产生了重要影响。
  - ……

> [!IMPORTANT]
>
> `冯·诺依曼体系结构`是现代计算机（量子计算机除外）设计的`基础`。

* `冯·诺依曼`体系结构的理论要点如下：

  - ① **存储程序**：`程序指令`和`数据`都存储在计算机的内存中，这使得程序可以在运行时修改。

  - ② **二进制逻辑**：所有`数据`和`指令`都以`二进制`形式表示。

  - ③ **顺序执行**：指令按照它们在内存中的顺序执行，但可以有条件地改变执行顺序。

  - ④ **五大部件**：计算机由`运算器`、`控制器`、`存储器`、`输入设备`和`输出设备`组成。

  - ⑤ **指令结构**：指令由操作码和地址码组成，操作码指示要执行的操作，地址码指示操作数的位置。

  - ⑥ **中心化控制**：计算机的控制单元（CPU）负责解释和执行指令，控制数据流。


![](./assets/4.png)

> [!NOTE]
>
> 上述的组件协同工作，构成了一个完整的计算机系统：
>
> * **运算器**和**控制器**通常被集成在一起，组成中央处理器（CPU），负责数据处理和指令执行。
> * **存储器**保存数据和程序，是计算机运作的基础。
> * **输入设备**和**输出设备**负责与外界的交互，确保用户能够输入信息并接收计算机的处理结果。

## 1.3 各种硬件处理速度和性能优化

* 计算机的性能短板：如果 CPU 有每秒处理 1000 个服务请求的能力，各种总线的负载能力能达到 500 个， 但网卡只能接受 200个请求，而硬盘只能负担 150 个的话，那这台服务器得处理能力只能是 150 个请求/ 秒，有 85% 的处理器计算能力浪费了，在计算机系统当中，`硬盘`的读写速率已经成为影响系统性能进一 步提高的瓶颈。

![img](./assets/5.jpg)

* 计算机的各个设备部件的延迟从高到低的排列，依次是机械硬盘（HDD）、固态硬盘（SSD）、内存、CPU 。

![img](./assets/6.png)

* 从上图中，我们可以知道，CPU 是最快的，一个时钟周期是 0.3 ns ，内存访问需要 120 ns ，固态硬盘访问需要 50-150 us，传统的硬盘访问需要 1-10 ms，而网络访问是最慢，需要 40 ms 以上。
* 时间的单位换算如下：

```txt
1 秒 = 1000 毫秒，即 1 s = 1000 ms。
1 毫秒 = 1000 微妙，即 1 ms = 1000 us 。
1 微妙 = 1000 纳秒，即 1 us = 1000 ns。
```

* 按照上图，将计算机世界的时间和人类世界的时间进行对比，即：

```txt
如果 CPU 的时钟周期按照 1 秒计算，
那么，内存访问就需要 6 分钟；
那么，固态硬盘就需要 2-6 天；
那么，传统硬盘就需要 1-12 个月；
那么，网络访问就需要 4 年以上。
```

* 所以，对于 CPU 来说，这个世界真的是太慢了！！！
* 其实，中国古代中的文人，通常以`蜉蝣`来表示时间的短暂（和其他生物的寿命比），也是类似的道理，即：

```txt
鹤寿千岁，以极其游，蜉蝣朝生而暮死，尽其乐，盖其旦暮为期，远不过三日尔。
	                                        --- 出自 西汉淮南王刘安《淮南子》
```

```txt
寄蜉蝣于天地，渺沧海之一粟。 哀吾生之须臾，羡长江之无穷。 
挟飞仙以遨游，抱明月而长终。 知不可乎骤得，托遗响于悲风。
	                                        --- 出自 苏轼《赤壁赋》
```

>[!NOTE]
>
>对于`蜉蝣`来说，从早到晚就是一生；而对于我们`人类`而言，却仅仅只是一天。

* 存储器的层次结构（CPU 中也有存储器，即：寄存器、高速缓存 L1、L2 和 L3），如下所示：

![img](./assets/7.png)

>[!NOTE]
>
>上图以层次化的方式，展示了价格信息，揭示了一个真理，即：天下没有免费的午餐（千万不要相信别人会有发财的机会和你共享，人都是自私的，你算个啥？为什么要找你？）
>
>- ① 存储器越往上速度越快，但是价格越来越贵， 越往下速度越慢，但是价格越来越便宜。
>- ② 正是由于计算机各个部件的速度不同，容量不同，价格不同，导致了计算机系统/编程中的各种问题以及相应的解决方案

## 1.4 计算机软件

### 1.4.1 操作系统的来源

* 在上古时期，硬件资源不够丰富，计算机设计的也非常简陋。那个时候，很多应用程序都是直接跑在硬件上的，即：一个计算机只能跑一个应用程序。

![](./assets/8.png)

* 随着技术的发展，硬件越来越丰富，功能也越来越强大，性能也越来越好。这种情况下，如果一台计算机只能跑一个程序，实在是太浪费了。而且，底层硬件不断丰富，应用程序需要对接的硬件也将越来越多，如果每个应用程序都这么干，不显示工作很重复吗？于是，操作系统应运而生了。

![](./assets/9.png)

- 操作系统的功能：
  - 硬件驱动。
  - 进程管理。
  - 内存管理。
  - 网络管理。
  - 安全管理。
  - 文件管理。

* 那么，操作系统的作用，就是这样的，即：
  * 对下，管理计算机的硬件资源。
  * 对上，提供使用计算机资源的操作方式，有：
    * `系统调用`：是一套已经写好的代码接口，应用程序通过调用这些接口来请求操作系统执行特定的硬件操作。它们直接与硬件交互，提供底层功能支持，如：文件操作、进程管理、内存管理等。`开发者`通过系统调用可以实现对底层资源的直接控制，确保程序能够高效、安全地运行。
    * `终端命令`：是一种文本命令接口，通过命令行输入各种指令来控制操作系统和软件的行为。终端命令可以执行文件操作、系统配置、网络管理等各种任务。主要针对`开发人员`和`高级用户`，他们通过命令行可以快速、精确地完成各种操作，提高工作效率。
    * `图形用户界面`（GUI）是通过图形元素（如：窗口、图标、按钮等）与用户进行交互的界面。供直观、易用的操作方式，使用户能够通过鼠标点击、拖拽等简单操作完成复杂任务。主要面向`普通用户`，降低了计算机操作的门槛，提高了用户体验和工作效率。

![](./assets/10.png)

### 1.4.2 用户态和内核态

* 在现代操作系统中，`用户态（User Mode）`和`内核态（Kernel Mode）`是两种不同的执行模式，它们对系统资源的访问权限有着本质的区别。这种区分是为了提供一个稳定和安全的运行环境，防止用户程序直接操作硬件设备和关键的系统资源，从而可能引起系统的不稳定或安全问题。

![](./assets/11.png)

- 核态（Kernel Mode） VS 用户态（User Mode）：

| 类型   | 内核态（Kernel Mode）                                        | 用户态（User Mode）                                          |
| :----- | :----------------------------------------------------------- | :----------------------------------------------------------- |
| 权限   | 内核态是操作系统代码运行的模式，拥有访问系统全部资源和执行硬件操作的`最高权限`。在这种模式下，操作系统的核心部分可以直接访问内存、硬件设备控制、管理文件系统和网络通信等。 | 用户态是普通应用程序运行的模式，具有`较低`的系统资源访问权限。在用户态，程序不能直接执行硬件操作，必须通过操作系统提供的接口（即系统调用）来请求服务。 |
| 安全性 | 由于内核态具有如此高的权限，因此只有可信的、经过严格审查的操作系统核心组件才被允许在此模式下运行。这样可以保护系统不被恶意软件破坏。 | 用户态为系统提供了一层保护，确保用户程序不能直接访问关键的系统资源，防止系统崩溃和数据泄露。 |
| 功能   | 内核态提供了`系统调用`的接口，允许用户态程序安全地请求使用操作系统提供的服务，比如：文件操作、网络通信、内存管理等。 | 用户态保证了操作系统的稳定性和安全性，同时也使得多个程序可以在相互隔离的环境中同时运行，避免相互干扰。 |

> [!NOTE]
>
> - ① 操作系统通过用户态和内核态的分离，实现了对系统资源的保护和控制。
> - ② 当用户程序需要进行文件读写、网络通信或其他需要操作系统介入的操作时，会发生从用户态到内核态的切换。这通过系统调用（System Call）实现，系统调用是用户程序与操作系统内核通信的桥梁。
> - ③ 执行完毕后，系统从内核态返回用户态，继续执行用户程序。
> - ④ 用户态和内核态的这种分离设计是现代操作系统中实现安全、稳定运行的关键机制之一。



* 示例：

```java
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;

public class Demo {
    public static void writeFile(String filePath, String content) {
        Path path = Paths.get(filePath);
        try {
            Files.write(path, content.getBytes());
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
    public static void main(String[] args){
        int a = 10;                                 // 用户态
        int b = 20;                                 // 用户态
        int c = a + b;                              // 用户态
        string filePath = "c:/demo.txt";            // 用户态
        string txt = a + b + c;                     // 用户态
        
        writeFile(filePath, a);                     // 从用户态切换到内核态完成文件写入
        
        System.out.println(a);                      // 从内核态切换回用户态
        System.out.println(b);                      // 用户态
        System.out.println(c);                      // 用户态
    }
}
```

### 1.4.3 ISA、ABI 和 API

- ISA 、ABI 和 API 的参考模型如下：

![](./assets/12.jpg)

* 在底层，硬件模型以指令集架构 （ISA） 表示，该架构定义了处理器、寄存器、存储器和中断管理的指令集。ISA 是硬件和软件之间的接口，对于操作系统 （OS） 开发人员 （System ISA） 和直接管理底层硬件的应用程序 （User ISA） 的开发人员来说非常重要。

> [!NOTE]
>
> - ① ISA 是计算机体系结构中定义的一组指令，它规定了处理器能够执行的操作。ISA 包括指令的编码、寄存器的使用、内存访问模式等。不同的处理器可能有不同的 ISA，例如：x86、ARM、MIPS 等。
> - ② 在设计一个新的操作系统时，开发者需要确保操作系统能够支持特定的 ISA ，以便在特定的硬件上运行。例如：如果操作系统旨在运行在 ARM 架构的处理器上，那么它必须能够理解和执行 ARM ISA 定义的指令集。

- 应用程序二进制接口 （ABI） 将`操作系统层`与由操作系统管理的`应用程序`和`库`分开。ABI 涵盖了低级数据类型、对齐方式和调用约定等详细信息，并定义了可执行程序的格式。系统调用在此级别定义。此接口允许应用程序和库在实现相同 ABI 的操作系统之间移植。

> [!NOTE]
>
> - ① ABI 是指在二进制级别上，应用程序与操作系统、库或应用程序的不同部分之间的接口。它定义了数据类型的大小、布局、对齐方式，以及函数调用的约定（如参数如何传递、返回值如何处理等）。ABI 确保了编译后的二进制文件能够在特定的操作系统和硬件平台上正确地运行。
> - ② 在 windows 上的应用程序的运行格式是：`PE`（portable executable）格式、`.dll` （dynamic link library）格式和 `.lib` 格式；而在 Linux 上的应用程序的运行格式是：`ELF`（executable and linking format）格式、`.so` （shared object）格式和 `.a` 格式。
> - ③ 在 Linux 中可以通过 `file /bin/ls` 命令查看指定可执行应用程序的 ABI 格式；从而也可以论证，在 Windows 上可以运行的程序，在 Linux 上运行不了。
> - ④ 当开发者在 Linux 系统上编写 C 语言程序，并使用特定的编译器（如：GCC）编译时，编译器会遵循 Linux 平台的 ABI 规范来生成二进制文件。这样，生成的可执行文件就可以在任何遵循相同 ABI 规范的 Linux 系统上运行。
> - ⑤ 如果一个应用程序需要跨平台（操作系统）运行，就需要使用`一套代码，多平台编译`的方式（针对 C 或 C++ 等），即：相同的源代码，在不同平台（操作系统）上使用特定平台的编译器（如：GCC）来分别编译成符合自己平台的 ABI 规范的二进制文件。

- 最高级别的抽象由应用程序编程接口 （API） 表示，它将`应用程序`连接到`库`或`底层操作系统`。

> [!NOTE]
>
> - ① API 是一组预定义的函数、协议和工具，用于构建软件和应用程序。API 允许不同的软件系统相互交互，它定义了软件组件之间如何相互通信。API 可以是库、框架、协议或服务。
> - ② 在 Web 开发中，开发者可能会使用 JavaScript 的 Fetch API 来与服务器进行通信，获取数据或提交表单。这个 API 提供了一种标准化的方式来发送 HTTP 请求和处理响应，而不需要开发者关心底层的网络协议细节。

### 1.4.4 系统调用（System Call）和函数库（Library Call）

* 在现代操作系统中，应用程序都不能直接作用于硬件，而是运行在操作系统之上。

![](./assets/13.png)

- 并且，在上文的图示中，我们也会看到`系统调用（System Call）`和`函数库（Library Call）`的身影，如下：

![](./assets/14.png)

![](./assets/15.png)



* 其实，`系统调用（System Call）`和`函数库（Library Call）`的区别如下：

| 类型     | 系统调用（System Call）                                      | 函数库（Library Call）                                       |
| :------- | :----------------------------------------------------------- | :----------------------------------------------------------- |
| 定义     | 系统调用是操作系统提供给程序员的一组接口，这些接口允许用户空间的程序请求操作系统内核提供的服务，比如文件操作、进程控制、通信和内存管理等。 | 函数库调用是指使用高级语言编写的一组预先编译好的函数，这些函数实现了一些常用的功能，比如：字符串处理、数学计算等。程序员可以在自己的程序中直接调用这些函数，而无需重新实现它们。 |
| 权限     | 执行系统调用时，会从用户态切换到内核态。这是因为系统调用涉及到访问受保护的系统资源，这些操作必须由操作系统控制以确保系统的稳定性和安全性。 | 函数库调用通常在用户态执行，不涉及到用户态与内核态之间的切换。它们直接使用操作系统通过系统调用提供的服务，或者完全在用户空间内完成计算，不需要操作系统介入。 |
| 性能开销 | 由于涉及到用户态与内核态之间的切换，系统调用的执行成本相对较高。因此，频繁的系统调用可能会影响程序的性能。 | 相对于系统调用，函数库调用的性能开销较小。因为它们通常不涉及到模式切换，且执行的操作多在用户空间完成。 |
| 示例     | open()，read()，write()，fork()，exec() 等 UNIX/Linux 系统调用。 | C 标准库中的 printf() 等函数；数学库中的 sin()，cos() 等函数。 |

> [!NOTE]
>
> - ① **执行层级**：系统调用直接与操作系统内核交互，执行更底层的操作；而函数库调用运行在用户空间，通常使用系统调用来实现其功能。
> - ② **性能开销**：系统调用由于涉及到用户态与内核态的切换，性能开销相对较大；函数库调用则因为主要在用户态执行，性能开销较小。
> - ③ **使用目的**：系统调用提供了访问操作系统资源和服务的能力；函数库调用则提供了方便、高效执行常见任务的手段。



# 第二章：初识计算机语言

## 2.1 计算机语言是什么？

* `人类语言`是人和人之间用于沟通的一种方式，例如：中国人和中国人之间使用普通话沟通，而中国人和美国人交流，则可以使用英语。
* `计算机编程语言`是人和计算机交流的方式。人们可以使用`编程语言`对计算机下达`命令（指令）`，让计算机完成人们需要的功能。

> [!NOTE]
>
> 计算机语言有很多种，如：C、C++、Java、Go、JavaScript、Python、Scala 等。

## 2.2 为什么要学习计算机语言？

* 编程语言到底是什么？编程语言就是由文字和符号组成的，如：

```c
#include <stdio.h> // 这是编译预处理指令

int main() { // 定义主函数

    printf("你好，世界！！！"); // 输出所指定的一行信息

    return 0;  // 函数执行完毕时返回函数值0
}
```

* 编程语言就是用于控制计算机，让其完成我们需要的功能。而我们学习编程语言，其实就是学习这些文字和符号编写的规则。
* 因为 CPU 只能识别二进制的指令，而我们`编写`的程序叫做`源代码`，是人类能看懂；但是，计算机却不能识别。那么，我们就需要让计算机能识别我们编写的源程序，就需要将我们编写的源代码交给编译器程序，其会帮助我们将所编写的源代码转换为计算机能够识别的二进制指令。

> [!NOTE]
>
> 编译器就是运行在操作系统之上的程序，其作用就是用来将程序员编写的源代码转换为计算机能够识别的二进制指令。

* 如果我们用 Java 语言编写了程序（源代码），那么编写的程序也是不能直接运行的，需要通过 Java 语言的编译器将 Java 程序编译为计算机能够识别的二进制指令。
* 如果我们用 Python 语言编写了程序（源代码），那么编写的程序也是不能直接运行的，需要通过 Python 语言的编译器将 Python 程序编译为计算机能够识别的二进制指令。
* ……
* 总而言之，无论我们学习任何一门编程语言，想要将程序运行起来，都必须做如下的两件事情：
  * ① 学习该语言的文字和符号编写的规则，即：`语法规则`。
  * ② 需要在操作系统上安装对应编程语言的`编译器`程序，将源程序编译为计算机能够识别的二进制指令。

## 2.3 计算机语言简史

### 2.3.1 机器语言（相当于人类的石器时代）

* 1946 年 2 月 14 日，世界上第一台计算机 `ENIAC` 诞生，使用的是最原始的`穿透卡片`。

![](./assets/16.png)

* 这种卡片使用的是用`二进制代码`表示的语言，和人类语言差别极大，这种语言就称为`机器语言`，如：

```txt
0000,0000,000000010000 代表 LOAD A, 16
0000,0001,000000000001 代表 LOAD B, 1
0001,0001,000000010000 代表 STORE B, 16
```

* 这种语言本质上是计算机能识别的`唯一语言`，人类很难理解；换言之，当时的程序员 99.9% 都是异类！！！

> [!IMPORTANT]
>
> 不同类型（CPU 架构，如：x86_64、arm 等）的处理器有不同的机器语言指令集，指令集架构（ISA）决定了机器语言的具体形式；换言之，机器语言与特定硬件架构紧密相关，机器语言程序几乎没有可移植性。

### 2.3.2 汇编语言（相当于人类的青铜&铁器时代）

* `汇编语言`使用`助记符`（如：MOV、ADD、SUB）代替二进制操作码，使程序更易于人类编写和理解；因此，`汇编语言`也被称为`符号语言`。

![](./assets/17.png)

* 汇编语言的`优点`是能编写`高效率`的程序；但是，`缺点`和机器语言没什么不同，汇编语言同样`依赖于具体的计算机架构（面向机器）`，程序不具备跨平台的可移植性。

> [!NOTE]
>
> 汇编语言，目前仍然应用于工业电子编程领域、软件的加密解密、计算机病毒分析等。

### 2.3.3 高级语言（相当于人类的信息时代）

* `高级语言`是一种`接近于人们使用习惯`的程序设计语言。`它允许程序员使用接近日常英语的指令来编写程序`，程序中的符号和算式也和`日常使用的数学公式`差不多，接近于自然语言和数学语言，容易被人们掌握。

![](./assets/18.png)

* 高级语言`独立于计算机硬件`，有一定的通用性；计算机不能直接识别和执行用高级语言编写的程序，需要使用`编译器`或`解释器`转换为机器语言，才能被计算机识别和执行。

![](./assets/19.png)

> [!NOTE]
>
> 普遍使用的高级编程语言，有：C、C++、Java、Python、C#、JavaScript、Go、SQL 等。

### 2.3.4 总结

* 编写语言的对比，如下所示：

| 类别         | 特征                               | 优点                                             | 缺点                                                         | 示例                |
| :----------- | :--------------------------------- | :----------------------------------------------- | :----------------------------------------------------------- | :------------------ |
| **机器语言** | 直接由计算机执行的二进制代码       | 执行速度快                                       | 编写困难，可读性差，与具体硬件强绑定                         | 二进制代码          |
| **汇编语言** | 用助记符代替二进制代码的低级语言   | 相对机器语言更易编写和理解，允许直接控制硬件资源 | 依然需要了解硬件，不够抽象，与具体硬件或平台相关             | MOV，ADD 等助记符   |
| **高级语言** | 接近人类语言，提供了更高层次的抽象 | 易于编写和维护，可移植性好，支持多种编程范式     | 需要通过编译器或解释器转换为机器语言，可能存在一定的性能损失 | C，Java， Python 等 |

> [!NOTE]
>
> - ① 这三种编程语言类型从低级到高级提供了不同层次的抽象，以满足不同的编程需求和场景。
> - ② 随着计算机科学的发展，高级语言因其强大的表达能力、良好的可移植性和易用性，成为了日常软件开发的主流选择。



# 第三章：初识 C 语言

## 3.1 C 语言的由来

* 1969 年，美国贝尔实验室的`肯·汤姆森`（Ken Thompson）和`丹尼斯·里奇`（Dennis Ritchie）一起开发了 Unix 操作系统。Unix 最初是使用`汇编语言`编写的，依赖于计算机硬件。为了程序的`可读性`和`可移植性`，它们决定使用高级语言重写。但是。当时的高级语言无法满足他们的要求，`肯·汤姆森`就在 BCPL 语言的基础上发明了 `B` 语言。
* 1972 年，`丹尼斯·里奇`（Dennis Ritchie）在 `B` 语言的基础上重新设计了一种新的语言，这种新语言取代了 `B` 语言，即 `C` 语言。

![](./assets/20.png)

* 1973 年，`整个 Unix 系统都使用 C 语言重写`。

> [!NOTE]
>
> C 语言最初是作为 Unix 系统的开发工具而发明的。

* 此后，这种语言快速流传，广泛用于各种操作系统和系统软件的开发，如：Unix、MS-DOS、Microsoft Windows 以及 Linux 等。

![](./assets/21.png)

* 1988 年，美国国家标准协会（ANSI）正式将 `C 语言标准化`，标志着 C 语言开始稳定和规范化。

## 3.2 为什么要学习 C 语言？

* ① `C 语言具有可移植好、跨平台的特点`：用 C 语言编写的代码可以在不同的操作系统和硬件平台上编译和运行。

> [!NOTE]
>
> C 语言的最原始的设计目的，就是为了将 Unix 操作系统移植到其他的计算机架构上，这使得它从一开始就非常注重可移植性。

* ② `C 语言在许多领域应用广泛`。
  * `操作系统`：C 广泛用于开发操作系统，如：Unix、Linux 和 Windows。
  * `嵌入式系统`：C 是一种用于开发嵌入式系统（如：微控制器、微处理器和其它电子设备）的流程语言。
  * `系统软件`：C 用于开发设备驱动程序、编译器和汇编器等系统软件。
  * `网络`：C 语言广泛用于开发网络应用程序，例如：Web 服务器、网络协议和网络驱动程序。
  * `数据库系统`：C 用于开发数据库系统，例如：Oracle、MySQL 和 PostgreSQL 。
  * `游戏`：由于 C 能够处理低级硬件交互，因此经常用于开发计算机游戏。
  * `人工智能`：C 用于开发人工智能和机器学习的应用程序，例如：神经网络和深度学习算法。
  * `科学应用`：C 用于开发科学应用程序，例如：仿真软件和数值分析工具。
  * `金融应用`：C 用于开发股票市场分析和交易系统等金融应用。
* ③ C 语言能够直接对硬件进行操作、管理内存以及和操作系统对话，这使得它是一种非常接近底层的语言，非常适合`写需要和硬件交互、有极高性能要求`的程序。
* ④ `学习 C 语言有助于快速上手其他编程语言`，如：C++（原先是 C 语言的一个扩展，在 C 语言的基础上嫁接了面向对象编程思想）、C#、Java 等，这些语言都继承或深受 C 语言的影响和启发。
* ⑤ C 语言长盛不衰。`C 语言至今，依然是最广泛使用、最流行的编程语言之一`，包括很多大学将 C 语言作为计算机教学的入门语言，拥有庞大而活跃的用户社区，这意味着有许多资源和库可供开发人员使用。

## 3.3 计算机语言排行榜

* [TIOBE](https://www.tiobe.com/tiobe-index/) 是一个流行编程语言排行，每月更新。排名权重基于世界范围内工程师数量，Google、Bing、Yahoo! 、Wikipedia、Amazon、Youtube 和百度这些主流的搜索引擎，也将作为排名权重的参考指标。

![](./assets/22.png)

* 计算机语言走势图：

![](./assets/23.png)

## 3.4 C 语言的版本选择

* 随着微型计算机的日益普及，出现了许多 C 语言版本（标准）。

  * 版本 1（K＆R C）：K&R C 指的是 C 语言的原始版本。1978年，C 语言的发明者布莱恩·柯林（Brian `K`ernighan）和丹尼斯·里奇（Dennis `R`itchie）合写了一本著名的教材《C 编程语言》（The C programming language）。

  >[!NOTE]
  >
  >由于 C 语言还没有成文的语法标准，这本书就成了公认标准，以两位作者的姓氏首字母作为版本简称 “K&R C”。

  * 版本 2（ANSI C，又称 C89 或 C90）：C 语言的原始版本非常简单，对很多情况的描述非常模糊，加上 C 语法依然在快速发展，要求将 C 语言标准化的呼声越来越高。1989 年，美国国家标准协会（ANSI）制定了一套 C 语言标准，并于次年被国际标准化组织（ISO）通过。它被称为 “ANSI C”，也可以按照发布年份，称为 “C89 或 C90”。

  * 版本 3（C99）：C 语言标准的第一次`大型修订`，发生在 1999 年，增加了许多语言特性，比如：双斜杠（ // ）的注释语法，可变长度数组、灵活的数组成员、复数、内联函数和指定的初始值设定项，这个版本称为 C99，`是目前最流行的 C 版本`。
  * 版本 4（C11）：2011 年，标准化组织再一次对 C 语言进行修订，增加了_Generic、static_assert 和原子类型限定符。这个版本称为 C11。

  > [!NOTE]
  >
  > 需要强调的是，修订标准的原因并不是因为原标准不能用，而是需要跟进新的技术。

  * 版本 5（C17）：C11 标准在 2017 年进行了修补，但发布是在 2018 年。新版本只是解决了 C11 的一些缺陷，没有引入任何新功能。这个版本称为 C17。
  * 版本 6（C23）：2023 年发布，计划进一步增强安全性，消除实现定义的行为，引入模块化语言概念等新特性，使 C 语言在安全和可靠性方面有重大提高。
  * ……

* 需要注意的是，C 语言的标准并没有强制性的约束，只是个说明文档而已。不同的编译器产商，对 C 语言的标准有不同的实现，甚至会出现某些 C 语言的标准在这个编译器下实现了；但是，在另外的编辑器下却没有实现，导致编译程序错误的现象。常见的 C/C++ 编译器如下：
  * Borland C++ 宝蓝公司。
  * Intel C++ 英特尔编译器。
  * MSVC 微软公司。
  * g++ 编译器（GCC，编译套件）, Linux 操作系统。

> [!IMPORTANT]
>
> GCC 编译套件对标准的支持是最好的；所以，在实际项目开发中，我们首先会选用 GCC 编译套件来进行开发。

## 3.5 C 语言的优缺点

* C 语言的优点：
  * ① 高效：C 语言生成的代码非常高效，执行速度快，这使得其非常适合用于操作系统、嵌入式系统等需要高性能的场景。
  * ② 灵活性和低级控制：C 语言允许直接操作内存和硬件，可以进行位操作、指针运算等底层编程，非常适合开发需要直接硬件控制的应用。
  * ③ 广泛的硬件和平台支持：C 语言几乎可以在所有的计算机平台上运行，从微处理器到超级计算机，几乎所有的硬件平台都支持 C 语言。 
  * ④ 标准库丰富：C 语言有一个标准库（C Standard Library），提供了大量常用的函数，涵盖了文件操作、字符串处理、内存管理等多种功能。
  * ⑤ 语言简洁：语法规则相对简单，没有过多的复杂特性，使得语言本身比较容易学习和掌握。
* C 语言的缺点：
  * ① 缺乏高级特性：和现代编程语言相对，C 语言缺乏一些高级特性，如：面向对象编程、垃圾回收机制等，这使得某些类型的应用程序开发可能会更加复杂。
  * ② 安全性问题：C 语言允许直接操作内存，可能会导致缓冲区溢出、空指针引用等安全漏洞。如果不小心处理，容易产生难以调试的错误和安全隐患。
  * ③ 手动管理内存：C 语言需要程序员手动管理内存，即：分配内存和释放内存，这增加了内存泄露和悬空指针等问题的风险。
  * ④ 错误调试困难：由于 C 语言的底层操作特点，调试和排查错误可能比较困难，尤其是在处理复杂指针和内存操作的时候。
  * ⑤ 标准库有限：虽然 C 语言的标准库涵盖了很多基本功能，但相比现代编程语言的标准库，功能相对有限，尤其是在网络编程、多线程编程等方面。

* 总而言之，C 语言的高效性和灵活性使其在系统级编程和嵌入式系统中占据重要地位，但其缺乏高级特性和内存管理上的挑战也使得开发过程可能更加复杂和容易出错。对于需要高性能和底层控制的应用，C 语言依然是不可替代的选择。



# 第四章：C 语言入门（Hello World，⭐）

## 4.1 环境的安装和配置

### 4.1.1 概述

* 要开发 C/C++ 程序，需要安装 C/C++ 编译器，目前有两种主流实现，即：
  * GCC（GNU Compiler Collection）：全平台实现，即支持 Windows、MacOS、Linux 等。
  * MSVC（Microsoft Visual C++）：只支持 Windows 系统。

* GCC 在 Windows 上的版本有很多，如：[MinGW-w64](https://www.mingw-w64.org/)、[Gygwin](https://cygwin.com/)、[MSYS2](https://www.msys2.org/)。它们之间的区别，如下所示：

| 特性         | MinGW-w64                     | Cygwin                                | MSYS2                                                 |
| ------------ | ----------------------------- | ------------------------------------- | ----------------------------------------------------- |
| **简介**     | Minimalist GNU for Windows    | POSIX 兼容环境和工具集                | 结合了 MinGW 和 Cygwin 的工具集                       |
| **编译器**   | 提供 GCC 编译器               | 提供 POSIX 兼容环境，包含大量工具     | 提供 MinGW-w64 工具链和 Cygwin 环境                   |
| **生成文件** | Windows 原生可执行文件        | POSIX 兼容的可执行文件                | 可以生成 Windows 原生可执行文件或 POSIX 文件          |
| **依赖**     | 无需额外依赖                  | 依赖 Cygwin DLL                       | 根据使用工具链决定（MinGW-w64 无依赖，Cygwin 有依赖） |
| **工具和库** | 基本的编译工具                | 丰富的 Unix 工具和库                  | 丰富的工具和库，强大的包管理系统                      |
| **性能**     | 性能较好                      | 可能较低，因为通过兼容层调用系统      | 取决于使用的工具链（MinGW-w64 性能较好）              |
| **复杂度**   | 简单易用                      | 设置和使用相对复杂                    | 较为灵活，复杂度介于 MinGW-w64 和 Cygwin 之间         |
| **适用场景** | 开发 Windows 原生应用         | 运行和开发 Unix 程序                  | 混合使用 Unix 工具和开发 Windows 原生应用             |
| **优点**     | 轻量级，直接生成 Windows 应用 | 完整的 POSIX 兼容环境，丰富的工具     | 灵活的环境，强大的包管理系统                          |
| **缺点**     | 工具和库较少                  | 生成文件依赖 Cygwin DLL，性能可能较低 | 环境较大，占用更多空间，复杂性比 MinGW-w64 高         |

> [!NOTE]
>
> * ① MinGW-w64 、Cygwin 以及 MSYS2 任选其一安装即可。
> * ② 目前的 Win10 和 Win11 版本支持 WSL2 （Windows Sub Linux 2 ，即 Windows 的子系统 Linux），可以实现在 Windows 系统上安装一个 Linux ，然后再运行 Linux 中的 GCC 工具链。

### 4.1.2 MinGW-w64 的安装和配置

#### 4.1.2.1 安装

* 下载到本地：略。

> [!NOTE]
>
> 下载地址在[这里](https://github.com/niXman/mingw-builds-binaries/releases/download/13.2.0-rt_v11-rev1/x86_64-13.2.0-release-posix-seh-ucrt-rt_v11-rev1.7z)。

![](./assets/24.png)

* 解压到指定的目录，即：

![](./assets/25.png)

> [!NOTE]
>
> 本人的解压目录是：`D:\develop\mingw64` 。

#### 4.1.2.2 配置 path 环境变量 

* 配置环境变量，以便任意目录都可以执行 gcc 命令，即：

![](./assets/26.png)

![](./assets/27.png)

![](./assets/28.png)

![](./assets/29.png)

![](./assets/30.png)

> [!NOTE]
>
> 因为，本人安装 MinGW-w64 的目录是 `D:\develop\mingw64`，所以配置 path 环境变量就需要 `D:\develop\mingw64\bin`。

![](./assets/31.png)

* 测试是否安装成功：

```shell
gcc --version
```

![](./assets/32.gif)

### 4.1.3 Cygwin 的安装和配置

#### 4.1.3.1 安装

* 下载到本地：略。

> [!NOTE]
>
> 下载地址在[这里](https://www.cygwin.com/install.html)。

![](./assets/33.png)

* 点击安装：

![](./assets/34.png)

![](./assets/35.png)

![](./assets/36.png)

![](./assets/37.png)

![](./assets/38.png)

![](./assets/39.png)

![](./assets/40.png)

![](./assets/41.png)

> [!NOTE]
>
> 默认是最小化安装，没有 GCC，需要选择 gcc-core、gcc-g++、make、gdb、binutils 。

![](./assets/42.png)

![](./assets/43.png)

![](./assets/44.png)

![](./assets/45.png)

![](./assets/46.png)

![](./assets/47.png)

![](./assets/48.png)

![](./assets/49.png)

![](./assets/50.png)

#### 4.1.3.2 配置 path 环境变量 

* 和 `3.1.2.2 配置 path 环境变量` 步骤相同：略。

### 4.1.4 MSYS2（推荐）

#### 4.1.4.1 安装

* 下载到本地：略。

> [!NOTE]
>
> 下载地址在[这里](https://www.msys2.org/)。

![](./assets/51.png)

* 点击安装：

![](./assets/52.png)

![](./assets/53.png)

![](./assets/54.png)

![](./assets/55.png)

![](./assets/56.png)

* 出现命令终端：

![](./assets/57.png)

* 替换清华镜像源（可选）：

```shell
sed -i "s#https\?://mirror.msys2.org/#https://mirrors.tuna.tsinghua.edu.cn/msys2/#g" /etc/pacman.d/mirrorlist*
```

![](./assets/58.gif)

* 安装 gcc 等相关开发包：

```shell
pacman -Syu --noconfirm # 更新包管理器
```

```shell
pacman -Sy base-devel --noconfirm # 安装开发工具包
```

```shell
pacman -Sy mingw-w64-x86_64-toolchain --noconfirm # 安装开发 gcc 相关工具链
```

![](./assets/59.gif)

#### 4.1.4.2 配置 path 环境变量 

* 和 `3.1.2.2 配置 path 环境变量` 步骤相同：略。

## 4.2 IDE 的安装和配置

### 4.2.1 CLion 

#### 4.2.1.1 概述

* [CLion](https://www.jetbrains.com/clion/) 是一款由 JetBrains 推出的跨平台 C/C++ 集成开发环境（IDE），它具有智能编辑器、CMake 构建支持、调试器、单元测试、代码分析等功能，可以极大提高 C/C++ 开发效率。

#### 4.2.1.2 安装

* 鼠标双击，进入安装：

![](./assets/60.png)

* 下一步：

![](./assets/61.png)

* 下一步：

![](./assets/62.png)

* 下一步：

![](./assets/63.png)

* 安装：

![](./assets/64.png)

* 安装完成：

![](./assets/65.png)

#### 4.2.1.3 配置

* 打开 CLion ：

![](./assets/66.png)

* 安装中文插件（可选）：

![](./assets/67.png)

![](./assets/68.png)

* 配置新 UI ：

![](./assets/69.png)

![](./assets/70.png)

* 新 UI 配置自定义字体（可选）：

![](./assets/71.png)

* 配置`自动保存`功能：

![](./assets/72.png)

* 配置`文件编码` 为 UTF-8：

![](./assets/73.png)

* 配置`控制台编码`为 UTF-8：

![](./assets/74.png)

* 配置`显示方法分隔符`功能：

![](./assets/75.png)

* 配置`编辑器`的字体（可选）：

![](./assets/76.png)

* 检测 GCC 工具链是否安装成功：

![](./assets/77.png)

### 4.2.2 VS Code

#### 4.2.2.1 概述

* [Visual Studio Code (VS Code)](https://code.visualstudio.com/) 是一个免费的开源代码编辑器，适用于 Windows、MacOS 和 Linux 平台。它支持语法高亮、智能代码补全（IntelliSense）、内置调试工具和Git集成。用户可以通过扩展来添加更多功能，如：支持新的编程语言、主题和调试工具。VS Code 还支持在微软 Azure 上进行部署和托管，适用于各种编程语言和框架。

> [!NOTE]
>
> Visual Studio Code 需要安装对应的插件，才能运行 C/C++ 代码。

#### 4.2.2.2 安装

* 鼠标双击，进入安装：

![](./assets/78.png)

* 同意协议：

![](./assets/79.png)

* 下一步：

![](./assets/80.png)

* 下一步：

![](./assets/81.png)

* 下一步：

![](./assets/82.png)

* 安装：

![](./assets/83.png)

* 安装过程：

![](./assets/84.png)

* 安装完成：

![](./assets/85.png)

#### 4.2.2.3 配置

* 安装`中文`插件：

![](./assets/86.png)

![](./assets/87.png)

* 安装 `C/C++` 插件：

![](./assets/88.png)

![](./assets/89.png)

### 4.2.3 Microsoft Visual Studio

#### 4.2.3.1 概述

* [Visual Studio](https://visualstudio.microsoft.com/)（简称 VS）是由微软公司发布的集成开发环境。它包括了整个软件生命周期中所需要的大部分工具，如：UML工具、代码管控工具、集成开发环境（IDE）等。

* Visual Studio 支持 C/C++、C#、F#、VB 等多种程序语言的开发和测试，可以用于生成Web应用程序，也可以生成桌面应用程序，功能十分强大，但下载和安装很可能耗时数小时，还可能会塞满磁盘。

* Visual Studio 2022 有三种版本：社区版(免费，不支持企业使用)，专业版(第一年 1199 美元/ 799 美元续订)和企业版(第一年 5999 美元/ 2569 美元续订)。企业版拥有面向架构师的功能、高级调试和测试，这些功能是另两种 SKU 所没有的。

* Visual Studio 旨在成为世界上最好的 IDE（集成开发环境），目前最新版本为 Visual Studio 2022。

#### 4.2.3.2 安装

* 鼠标双击，进入安装：

![](./assets/90.png)

* 继续：

![](./assets/91.png)

* 等待：

![](./assets/92.png)

* 工作负荷（使用 C++ 的桌面开发）：

![](./assets/93.png)

* 单个组件：

![](./assets/94.png)

* 语言包：

![](./assets/95.png)

* 安装位置（修改默认的安装位置）：

![](./assets/96.png)

* 如果不是第一次安装，可能会出现`共享组件、工具和 SDK`不可以修改，即：

![](./assets/97.png)

* 此时，就需要打开`注册表编辑器`，将如下图中的除了第一个选项，全部删除，然后关闭再重新安装，即：

![](./assets/98.png)

* 开始安装：

![](./assets/99.png)

* 安装中：

![](./assets/100.png)

* 安装完成，然后关闭：

![](./assets/101.png)

#### 4.2.3.3 配置

* 在开始菜单处，启动 VS ：

![](./assets/102.png)

* 登录或跳过该选项（有微软账号就注册，没有就暂时跳过）：

![](./assets/103.png)

* 继续：

![](./assets/104.png)

* 注册 VS ：

![](./assets/105.png)

* 填写注册码：

> [!NOTE]
>
> * ① Pro 版本：`TD244-P4NB7-YQ6XK-Y8MMM-YWV2J`
> * ② Enterprise 版本：`VHF9H-NXBBB-638P6-6JHCY-88JWH`

![](./assets/106.png)

![](./assets/107.png)

## 4.3 HelloWorld

### 4.3.1 手动版

* ① 新建一个 `HelloWorld.c` 的文件：

![](./assets/108.png)

* ② 通过`记事本`等软件打开该文件，输入如下的代码，并保存：

```c
#include <stdio.h>

int main(){
    printf("Hello World");
    return 0;
}
```

![](./assets/109.gif)

* ③ 通过 `gcc` 命令编译该文件：

```shell
gcc HelloWorld.c -o HelloWorld.exe
```

![](./assets/110.gif)

* ④ 执行：

```shell
./HelloWorld.exe
```

![](./assets/111.gif)

### 4.3.2 VS Code 版

* ① 新建一个`空`文件夹（目录），用于存放代码：

![](./assets/112.png)

* ② 通过 `vscode` 打开该目录：

![](./assets/113.gif)

* ③ 在 `vscode` 中新建 `HelloWorld.c` 文件：

![](./assets/114.gif)

* ④ 设置 VSCode 中 C/C++ 的代码格式为行尾风格（可选）：

![](./assets/115.png)

![](./assets/116.png)

* ⑤ 编写如下的代码，并保存：

```c
#include <stdio.h>

int main(){
    printf("Hello World");
    return 0;
}
```

![](./assets/117.gif)

* ⑥ 通过 `gcc` 命令编译该文件：

```shell
gcc HelloWorld.c -o HelloWorld.exe
```

![](./assets/118.gif)

* ⑦ 执行：

```shell
./HelloWorld.exe
```

![](./assets/119.gif)

* ⑧ 安装 Code Runner 插件（步骤略），实现右键直接编译执行（可选）：

![](./assets/120.gif)

### 4.3.3 VS 版

* ① 新建空项目：

![](./assets/121.png)

![](./assets/122.png)

![](./assets/123.png)

![](./assets/124.png)

* ② 打开`解决方案资源管理器`：

![](./assets/125.png)

![](./assets/126.png)

* ③ 新建 `HelloWorld.c` 文件：

![](./assets/127.gif)

* ④ 编写如下代码，并保存：

```c
#include <stdio.h>

int main(){
    printf("Hello World");
    return 0;
}
```

![](./assets/128.gif)

* ⑤ 编译和执行：

![](./assets/129.gif)

### 4.3.4 CLion

* ① 新建空项目：

![](./assets/130.png)

![](./assets/131.png)

![](./assets/132.png)

* ② 编写如下代码，并保存：

```c
#include <stdio.h>

int main(){
    printf("Hello World");
    return 0;
}
```

![](./assets/133.gif)

* ③ 编译和运行：

![](./assets/134.gif)

* ④ 默认情况下，一个项目只能有一个 c 源文件包含 main 函数，但是 CLion 可以有多个，如下：

![](./assets/135.gif)

* ⑤ 如果之后，有中文乱码问题，那么请做如下步骤：

![](./assets/136.png)

![](./assets/137.gif)

> [!NOTE]
>
> 内容如下所示：
>
> ```txt
> -Dfile.encoding=UTF-8
> -Dconsole.encoding=UTF-8
> ```



# 第五章：注释

## 5.1 概述

* 编程语言中，`注释`是一种`特殊`的文本，它不会被编译器执行，而仅用于代码的解释和文档说明。

>[!NOTE]
>
>* ① 注释是一个程序员必须有具有的良好编程习惯。
>* ② 在实际开发中，程序员可以将自己的思路通过`注释`整理出来，然后再用`代码`去实现。

## 5.2 单行注释

* C 语言中的单行注释的格式，如下所示：

```c
// 单行注释
```

> [!NOTE]
>
> 在 CLion 中的快捷键是 `Ctrl + /` 。



* 示例：

```c
#include <stdio.h> // 这是编译预处理指令

int main() { // 定义主函数

    printf("你好，世界！！！"); // 输出所指定的一行信息

    return 0;  // 函数执行完毕时返回函数值0
}
```

## 5.3 多行注释

* C 语言中的多行注释的格式，如下所示：

```c
/*
  这是第一行注释
  这是第二行注释
  这是第三行注释
*/
```

>[!NOTE]
>
>* ① 多行注释不能嵌套使用！！！
>* ② 在 CLion 中的快捷键是 `Ctrl + Alt + /` 。 



* 示例：

```c
#include <stdio.h> 

int main() { 
	
    /*
       printf(1);
       printf(2);
    */
    printf("你好，世界！！！"); 

    return 0;  
}
```



# 第六章：HelloWorld 的规范（⭐）

## 6.1 规范的代码风格

### 6.1.1 正确的缩进和空白

* ① 使用一次 `tab` 操作，实现缩进，默认整体向右边移动；如果使用 `shift + tab` 则整体向左移动。
* ② 运算符两边习惯各加一个空格，如：`2 + 4 = 6`。

> [!NOTE]
>
> 各种 IDE 都有格式化的快捷键，如：CLion 的格式化快捷键是 `Ctrl + Alt + L` 。



* 示例：

```c
#include <stdio.h>

int main() {

    int a = 1;
    int b = 2;
    int c = a + b;

    printf("c = %d", c);

    return 0;
}
```

### 6.1.2 代码风格

* 在 C 语言中，有两种代码风格：`行尾风格`和`次行风格`。

>[!NOTE]
>
>看个人爱好，任选一种即可，本人喜欢`行尾分格`！！！



* 示例：行尾风格

```c
int main(){                                      
    if(a > b) {
		return a;
	} else {
		return b;
	}  
  	return 0;                   
}  
```



* 示例：次行风格

```c
int main()
{                                      
    if(a > b) 
	{
		return a;
	} 
	else 
	{
		return b;
	}  
  	return 0;                   
} 
```

## 6.2 代码细节剖析

### 6.2.1 main() 函数

* 在 C 语言中，一个程序或工程可以定义很多函数，但是有且只有一个 main() 函数，作为程序执行的入口，并且在 main() 函数结尾结束整个程序的运行，即：

```c
int main(){
    return 0;
}
```

* 如果 main() 函数是空括号，即表示 main() 函数不接收任何参数。
* 在 main() 函数之前的 `int` 称为关键字，代表数据类型是`整型`，它是 main() 函数的返回值的类型，即在执行 main() 函数之后一定会得到一个整数类型的值，即函数值。

> [!NOTE]
>
> * ① 在 C 语言中，人们约定，如果 `return 0`，就表示 main() 函数终止运行，且运行成功；如果返回其它非零整数，则表示运行失败。
> * ② 默认情况下，如果 main() 函数中省略 `return 0` ，则编译器会自动加上；但是，为了保持统一的代码风格，不建议省略。

### 6.2.2 函数体

* ① 一对花括号 `{}` 定义了函数的主体，所有函数都必须以大括号开头和结尾，成对出现。
* ② C 程序中的函数体指的是作为该函数一部分的语句。它可以是任何操作，比如：搜索、排序、打印等。
* ③ 每一个执行语句后面都会有一个英文分号`;`作为语句结束的标志。
* ④ 一行内可写几条语句，一条语句也可写在几行上。

### 6.2.3 printf() 函数

* printf() 函数的格式，如下所示：

```c
printf (const char *__format, ...)
```

* printf() 函数是产生格式化输出的函数，作用是将参数文本输出到屏幕，f 表示 format（格式化），表示可以指定输出文本的格式，即：

```c
printf ("Hello World"); // 将字符串输出到控制台，行尾不换行
```

* 如果想让光标移动到下一行的开头，可以在输出文本的结尾，可以添加一个换行符 `\n`，即：

```c
printf("Hello World\n");
```

### 6.2.4 标准库和头文件

#### 6.2.4.1 概述

* printf() 函数是在标准库的头文件 `stdio.h` 中定义的，要想在程序中使用这个函数，必须在源文件的头部引入该头文件，即：

```c
#include <stdio.h>
```

#### 6.2.4.2 标准库（Standard Library）

* C 语言的`标准库`是由一组函数组成，这些函数提供了许多常用的操作和功能，如：输入输出、字符串处理、内存管理、数学计算等。标准库中的函数由编译器提供，遵循 ANSI C 标准（如：C89/C90、C99、C11等）。
* 换言之，C 语言的`标准库`就是包含函数的实际代码，这些代码在编译的时候被链接到我们的程序中，无需手动包含。C 语言的`标准库`提供了可重用的函数实现，使得程序员不必编写常用的功能。

> [!NOTE]
>
> 实际的 printf() 函数的实现代码通常位于标准库的实现文件中，如：在 Linux 中的标准库`libc.so.6` 就包含了 printf() 函数的实现。

#### 6.2.4.3 头文件（Header Files）

* `头文件`是包含函数声明、宏定义、数据类型定义等内容的文件。头文件的作用是为源代码提供必要的声明和定义，以便编译器能够正确解析和链接函数调用。头文件通常以`.h`作为文件扩展名。
* 换言之，头文件包含函数声明、宏定义和数据类型定义，但不包含函数的实现。头文件告知编译器如何使用标准库中的函数和定义，确保编译时的正确性。头文件需要在源代码文件中使用`#include`指令显式包含，如：`#include <stdio.h>`。

* 常见的 C 语言头文件及其功能和常用函数、宏等，如下所示：

| 头文件        | 功能说明                                                   | 常用函数和宏                                                 |
| ------------- | ---------------------------------------------------------- | ------------------------------------------------------------ |
| **stdio.h**   | 标准输入输出库                                             | `printf`， `scanf`， `fprintf`，`fscanf`，`fopen`， `fclose`，`fgets`， `fputs` |
| **stdlib.h**  | 标准库，提供内存分配、程序控制、类型转换、随机数生成等功能 | `malloc`， `free`， `exit`， `atoi`， `atof`，`rand`，`srand` |
| **string.h**  | 字符串处理库                                               | `strlen`， `strcpy`， `strncpy`， `strcat`， `strcmp`，`strstr`， `memset`， `memcpy` |
| **math.h**    | 数学库                                                     | `sin`， `cos`， `tan`， `exp`， `log`， `sqrt`， `pow`       |
| **time.h**    | 时间和日期库                                               | `time`， `clock`， `difftime`， `mktime`， `strftime`， `localtime`，`gmtime` |
| **ctype.h**   | 字符处理库                                                 | `isalnum`， `isalpha`， `isdigit`， `islower`， `isupper`， `tolower`， `toupper` |
| **stdbool.h** | 布尔类型库                                                 | `bool`， `true`， `false`                                    |
| **assert.h**  | 断言库                                                     | `assert`                                                     |

#### 6.2.4.4 预处理命令

* `#include` 命令的作用是将指定文件的内容插入到包含该命令的源文件中。这通常用于包含头文件，以便使用头文件中声明的函数、宏和数据类型。
* 语法：

```c
// 用于包含标准库头文件或系统头文件。
// 编译器将在系统的标准头文件目录中查找文件。
#include <filename> 
```

```c
// 用于包含用户自定义的头文件。
// 编译器首先在当前目录中查找文件，如果未找到，再在标准头文件目录中查找。
#include "filename"
```



# 第七章：CLion 高级配置（⭐）

## 7.1 安装和配置 WSL2

### 7.1.1 概述

* WSL 2，全称为 Windows Subsystem for Linux 2，是微软提供的一种技术，允许用户在 Windows 操作系统上运行 Linux 内核。WSL 2  是 WSL 的升级版，它引入了一个真正的 Linux 内核来代替 WSL 1 中使用的兼容层，从而提供更高的性能和更广泛的系统调用支持。
* 其架构图，如下所示：

![](./assets/138.png)

* WSL2 的功能，如下所示：
  * ① **真实的Linux内核**：WSL 2 使用了微软开发的轻量级虚拟机，它包含了一个完整的 Linux 内核。这意味着 WSL 2 能够运行更多的 Linux 应用程序，并且支持更多的系统调用。
  * ② **文件系统性能提升**：WSL 2 的文件系统性能比 WSL 1 有显著提升。对于 I/O 密集型的操作，如：编译代码或数据库操作，WSL 2 能够提供更快的速度。
  * ③ **兼容性增强**：由于使用了真实的 Linux 内核，WSL 2 对 Linux 应用程序的兼容性大幅提高。许多在 WSL 1上不能运行或需要调整的应用程序，可以在 WSL 2上直接运行。
  * ④ **网络功能改进**：WSL 2 提供了更好的网络集成，能够更容易地与 Windows 上的其他网络资源进行交互。
  * ⑤ **资源使用优化**：WSL 2 使用轻量级虚拟机，比传统的虚拟机占用更少的资源，同时提供了类似的隔离和安全性。

* WSL 的用途，如下所示：
  * ① **开发环境**：WSL 2 为开发者提供了一个原生的Linux开发环境，而无需离开 Windows 。这对于需要在 Linux 上开发、测试或运行应用程序的开发者非常有帮助。
  * ② **学习和实验**：用户可以使用 WSL 2 在Windows上学习和实验 Linux 命令行工具和应用程序，而无需设置双重引导系统或安装虚拟机。
  * ③ **多平台开发**：对于跨平台开发者来说，WSL 2 允许他们在一个操作系统上同时进行 Windows 和 Linux 平台的开发和测试，提高工作效率。
  * ④ **运行 Linux 工具和应用程序**：WSL 2 支持在 Windows 上直接运行各种 Linux 工具和应用程序，如：Docker、数据库、编程语言环境等。

### 7.1.2 WSL2 的安装

* ① BIOS 或 UEFI 中，开启虚拟化：步骤略。

![](./assets/139.png)

* ② 查看是否开启了虚拟化：

![](./assets/140.png)

* ③ 启用适用于 Linux 的 Windows 子系统：

```powershell
dism.exe /online /enable-feature /featurename:Microsoft-Windows-Subsystem-Linux /all /norestart
```

> [!IMPORTANT]
>
> 以管理员身份打开 PowerShell 并运行，执行完上述命令之后，如果提示需要重启计算机，那就重启计算机。



![](./assets/141.gif)

* ④ 启用虚拟机功能：

```powershell
dism.exe /online /enable-feature /featurename:VirtualMachinePlatform /all /norestart
```

> [!IMPORTANT]
>
> 以管理员身份打开 PowerShell 并运行，执行完上述命令之后，如果提示需要重启计算机，那就重启计算机。

![](./assets/142.gif)

* ⑤ 更新 Linux 内核包：

```powershell
wsl --update
```

> [!NOTE]
>
> wsl2 的最新 Linux 内核包托管在 GitHub 上，某些国家可能会污染 Github 相关的域名，那么就需要手动下载，然后安装即可，下载地址在[这里](https://wslstorestorage.blob.core.windows.net/wslblob/wsl_update_x64.msi)。

![](./assets/143.gif)

* ⑥ 将 wsl2 设置为默认版本：

```powershell
wsl --set-default-version 2
```

![](./assets/144.gif)

* ⑦ 查看官方在线支持的 Linux 版本：

```powershell
wsl --list --online
```

![](./assets/145.gif)

* ⑧ 安装指定版本的 Linux ：

```powershell
wsl --install Ubuntu-24.04
```

> [!NOTE]
>
> 官方支持的 Linux 版本，托管在 Github 上，某些国家可能会污染 Github 的域名；此时，要么走科学上网，要么在 `Microsoft Store` 中搜索并安装。

![](./assets/146.gif)

* ⑨ 在 Microsoft Store 中搜索并安装（可选）：

![](./assets/147.png)

* ⑩ 查询本地安装的 Linux 版本：

```powershell
wsl --list
```

![](./assets/148.gif)

### 7.1.3 配置 WSL2

* 本人的安装的是 AlmaLinux9 ，所以需要执行如下命令，以便安装 cmake 相关工具链：

```shell
sudo dnf update -y # 更新包管理器 
sudo dnf groupinstall "Development Tools" -y # 安装开发工具包
sudo dnf install gcc gcc-c++ -y # 安装GCC相关工具链
sudo dnf install cmake -y # 安装 cmake
sudo dnf install make -y # 安装 make
sudo dnf install gdb -y # 安装 gdb
```

![](./assets/149.gif)

* 可以通过 CLion 测试是否安装成功：

![](./assets/150.gif)

### 7.1.4 配置 WSL2

* 本人的安装的是 Ubuntu 24.04，所以需要执行如下命令，以便安装 cmake 相关工具链：

```shell
sudo apt update && sudo apt upgrade -y # 更新包管理器
sudo apt install build-essential -y # 安装开发工具包
sudo apt install gcc g++ -y # 安装 GCC 相关工具链
sudo apt install cmake -y # 安装 cmake
sudo apt install gdb -y # 安装 gdb
```

![](./assets/151.gif)

* 可以通过 CLion 测试是否安装成功：

> [!NOTE]
>
> 默认仓库中的 GDB  的版本会很高，CLion 会不支持，那么就需要手动下载源码，自行编译，本次不再演示！！！

![](./assets/152.gif)

## 7.2 切换 CLion 中的 cmake 的工具链

* 可以在 CLoin 中切换 cmake 的工具链，以便支持不同平台的 cmake ，即：

![](./assets/153.gif)

## 7.3 修改 CMakeLists.txt 文件

* 前文也提到了，在一个 C 语言项目中，只能有一个 main() 函数；但是，我们可以修改 `CMakeLists.txt` 文件的内容，以便其支持在一个 C 语言项目中，可以有多个包含 main() 函数的文件，如下所示：

![](./assets/154.png)

* `CMakeLists.txt` 的内容，如下所示：

```txt
cmake_minimum_required(VERSION 3.10)

# 项目名称和版本号
project(c-study VERSION 1.0 LANGUAGES C)

# 设置 C 标准
set(CMAKE_C_STANDARD 23)
set(CMAKE_C_STANDARD_REQUIRED True)

# 辅助函数，用于递归查找所有源文件
function(collect_sources result dir)
    file(GLOB_RECURSE new_sources "${dir}/*.c")
    set(${result} ${${result}} ${new_sources} PARENT_SCOPE)
endfunction()

# 查找顶层 include 目录（如果存在）
if (EXISTS "${CMAKE_SOURCE_DIR}/include")
    include_directories(${CMAKE_SOURCE_DIR}/include)
endif ()

# 查找所有源文件
set(SOURCES)
collect_sources(SOURCES ${CMAKE_SOURCE_DIR})

# 用于存储已经处理过的可执行文件名，防止重复
set(EXECUTABLE_NAMES)

# 创建可执行文件
foreach (SOURCE ${SOURCES})
    # 获取文件的相对路径
    file(RELATIVE_PATH REL_PATH ${CMAKE_SOURCE_DIR} ${SOURCE})
    # 将路径中的斜杠替换为下划线，生成唯一的可执行文件名
    string(REPLACE "/" "_" EXECUTABLE_NAME ${REL_PATH})
    string(REPLACE "\\" "_" EXECUTABLE_NAME ${EXECUTABLE_NAME})
    string(REPLACE "." "_" EXECUTABLE_NAME ${EXECUTABLE_NAME})

    # 处理与 CMakeLists.txt 文件同名的问题
    if (${EXECUTABLE_NAME} STREQUAL "CMakeLists_txt")
        set(EXECUTABLE_NAME "${EXECUTABLE_NAME}_exec")
    endif ()

    # 检查是否已经创建过同名的可执行文件
    if (NOT EXECUTABLE_NAME IN_LIST EXECUTABLE_NAMES)
        list(APPEND EXECUTABLE_NAMES ${EXECUTABLE_NAME})

        # 创建可执行文件
        add_executable(${EXECUTABLE_NAME} ${SOURCE})

        # 查找源文件所在的目录，并添加为包含目录（头文件可能在同一目录下）
        get_filename_component(DIR ${SOURCE} DIRECTORY)
        target_include_directories(${EXECUTABLE_NAME} PRIVATE ${DIR})

        # 检查并添加子目录中的 include 目录（如果存在）
        if (EXISTS "${DIR}/include")
            target_include_directories(${EXECUTABLE_NAME} PRIVATE ${DIR}/include)
        endif ()

        # 检查并添加 module 目录中的所有 C 文件（如果存在）
        if (EXISTS "${DIR}/module")
            file(GLOB_RECURSE MODULE_SOURCES "${DIR}/module/*.c")
            target_sources(${EXECUTABLE_NAME} PRIVATE ${MODULE_SOURCES})
        endif ()
    endif ()
endforeach ()
```

## 7.4 配置 .clang-format 文件

* 配置 `.clang-format` 格式化文件，以便写代码的时候，可以自动保存并格式化 C 程序代码，如下所示：

![](./assets/155.png)

* `.clang-format` 的内容，如下所示：

```txt
BasedOnStyle: Google
IndentWidth: 4
UseTab: Never
ColumnLimit: 0

# 控制大括号的位置
BreakBeforeBraces: Attach

# 控制空行的使用
EmptyLineBeforeAccessModifier: Never
KeepEmptyLinesAtTheStartOfBlocks: true

# 控制短函数、短 if 语句和循环的格式
AllowShortFunctionsOnASingleLine: Empty
AllowShortIfStatementsOnASingleLine: false
AllowShortLoopsOnASingleLine: false

# 控制其他格式选项
AlignConsecutiveAssignments: true
AlignConsecutiveDeclarations: true

# 控制注释的格式化
ReflowComments: true

# 控制包含指令的格式化
IncludeBlocks: Regroup
SortIncludes: CaseInsensitive

SpaceBeforeParens: ControlStatements
SpacesInParentheses: false
SpacesInAngles: false
SpacesInContainerLiterals: false
SpacesInCStyleCastParentheses: false
```

* CLion 中配置`保存`的时候`自动格式化`，即：

![](./assets/156.gif)

## 7.5 配置 .gitignore 文件

* 需要在项目中，配置 `.gitignore` 文件，以便在提交代码到 Git 仓库的时候，忽略某些文件或目录，如下所示：

![](./assets/157.png)

* `.gitignore` 文件的内容，如下所示：

```txt
.vscode
.idea
cmake-build-*
build
```

## 7.6 演示

* 我们可以在项目中，临时创建或复制一个文件，看上述配置是否生效，即：

> [!NOTE]
>
> 如果是复制并粘贴一个文件到项目中，请点击`重新加载 CMake 项目`！！！

![](./assets/158.gif)



# 第八章：C 语言的编译过程（⭐）

## 8.1 概述

* C 程序的编译过程，如下所示：

![](./assets/159.png)

* 过程 ① ：编写（编辑）源代码，即：编写 C 语言源程序代码，并以文件的形式存储在磁盘中。

> [!IMPORTANT]
>
> 源程序需要以 `.c` 作为扩展名。

* 过程 ② ：编译，即：将 C 语言源程序转换为`目标程序（或目标文件）`。如果程序没有错误，没有任何提示，就会生成一个扩展名为 `.obj`或 `.o` 的二进制文件。C 语言中的每条可执行语句经过编译之后，最终都会转换为二进制的机器指令。

> [!IMPORTANT]
>
> * ① 其实，`编译阶段`包含了`预处理`、`编译`和`汇编`。
>
> * ② `预处理`是编译过程的第一个阶段。在这个阶段，预处理器处理源代码中的指令（例如：`#include`、`#define`等），主要任务包括：
>
>   * **头文件包含**：将头文件的内容插入到源文件中。例如：`#include <stdio.h>`会被替换为`stdio.h`文件的内容。
>   * **宏展开**：替换宏定义。例如：`#define PI 3.14`会将代码中的`PI`替换为`3.14`。
>   * **条件编译**：根据条件指令（如：`#ifdef`、`#ifndef`）有选择地编译代码。
>
>   * **删除代码中的注释，但是不会进行语法检查**。
>
>   * 预处理完成后，生成一个扩展名为`.i`的中间文件。
>
> * ③ `编译`是将预处理后的源代码转换为汇编代码的过程。在这个阶段，编译器会检查代码的语法和语义，将其转换为目标机器的汇编语言，生成一个扩展名为`.s`的汇编文件。
>
> * ④ `汇编`是将汇编代码转换为机器代码（也称为目标代码或目标文件）的过程。在这个阶段，汇编器将汇编指令转换为二进制机器指令，生成一个扩展名为`.o`或 `.obj`的目标文件。

* 过程 ③ ：链接（连接），即：将编译形成的目标文件 `*.obj` 或 `*.o`和库函数以及其他目录文件`链接`，形成一个统一的二进制文件 `*.exe`。

>[!IMPORTANT]
>
>* 为什么需要链接库文件？
>* 因为我们的 C 程序会使用 C 程序库中的内容，如：`<stdio.h>` 中的 `printf()` 函数，这些函数不是程序员自己写的，而是 C 程序库中提供的，因此需要链接。其实，在链接过程中，还会加入启动代码，这个启动代码（和系统相关，Linux 下主要有 crt0.c、crti.c 等，它们设置堆栈后，再调用 main() 函数）负责初始化程序运行时的环境。

* 过程 ④ ：执行，即：有了可执行的 `*.exe`文件，我们就可以在控制台上执行运行此 `*.exe` 文件。

> [!IMPORTANT]
>
> 如果`修改`了源代码，还需要重新`编译`、`链接`，并生成新的 `*.exe`文件，再执行，方能生效。

## 8.2 GCC 编译器的介绍

* 编辑器，如：vim 、vscode 等，是指我们用它来编写源程序的（编辑代码），而我们写的代码语句，电脑是不懂的，我们需要把它转成电脑能懂的语句，编译器就是这样的转化工具。换言之，我们用编辑器编写程序，由编译器编译后才可以运行！
* 编译器是将易于编写、阅读和维护的高级计算机语言翻译为计算机能解读、运行的低级机器语言的程序。
* gcc（GNU Compiler Collection，GNU 编译器套件），是由 GNU 开发的编程语言编译器。gcc 原本作为 GNU 操作系统的官方编译器，现已被大多数类 Unix 操作系统（如：Linux、BSD、Mac OS X 等）采纳为标准的编译器，gcc 同样适用于微软的 Windows 。
* gcc 最初用于编译 C 语言，随着项目的发展， gcc 已经成为了能够编译 C、C++、Java、Ada、fortran、Object C、Object C++、Go 语言的编译器大家族。

## 8.3 通过 gcc 直接生成可执行文件

* 示例：进行预处理、编译、汇编和链接

```shell
gcc HelloWorld.c -o HelloWorld.exe
```

![](./assets/160.gif)

## 8.4 通过 gcc 分步编译

### 8.3.1 概述

* 预处理命令：

```shell
gcc -E 源文件.c -o 源文件.i # 通常以 .i 结尾表示这个文件是一个中间状态
```

* 编译（预处理和编译）命令：

```shell
gcc -S 源文件.i -o 源文件.s # 在 Linux 中，通常以 .s 结尾；在 Windows 中，通常以 .asm 结尾
```

* 汇编（预处理、编译和汇编）命令：

```shell
gcc -c 源文件.s -o 源文件.o # 在 Linux 中，通常以 .o 结尾；在 Windows 中，通常以 .obj 结尾
```

* 链接（预处理、编译、汇编和链接）命令：

```shell
gcc 源文件.o -o 源文件.exe # 在 Linux 中，通常以 .out 结尾；在 Windows 中，通常以 .exe 结尾
```

### 8.4.2 应用示例

* 示例：只进行预处理

```shell
gcc -E HelloWorld.c -o HelloWorld.i
```

![](./assets/161.gif)



* 示例：只进行预处理和编译

```shell
gcc -S HelloWorld.i -o HelloWorld.s
```

![](./assets/162.gif)



* 示例：只进行预处理、编译和汇编

```shell
gcc -c HelloWorld.s -o HelloWorld.o
```

![](./assets/163.gif)



* 示例：进行预处理、编译、汇编和链接

```shell
gcc HelloWorld.o -o HelloWorld.exe
```

![](./assets/164.gif)



# 第九章：附录

## 9.1 WSL2 代理问题

* 在安装和配置 WSL2 之后，可能会出现如下的提示，即：

![](./assets/166.png)

* 那么，只需要修改 `%USERPROFILE%\.wslconfig`文件，内容如下：

```txt
[wsl2]
networkingMode=mirrored
dnsTunneling=true
firewall=true
autoProxy=true

[experimental]
# requires dnsTunneling but are also OPTIONAL
bestEffortDnsParsing=true
useWindowsDnsCache=true
```

![](./assets/167.png)

* 在命令行中，执行如下的命令：

```shell
wsl --shutdown
```

![](./assets/168.gif)

* 此时，再打开终端，就没有这种提示了：

![](./assets/169.png)


