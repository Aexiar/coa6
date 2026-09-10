<script setup lang="ts">
import { ArrowRight, Binary, Braces, CircuitBoard, Cpu, House, MemoryStick, Network, Workflow } from '@lucide/vue'
import { withBase } from 'vitepress'

const topics = [
  { number: '01', icon: Braces, title: '编程与算法基础', en: 'FOUNDATION', description: '从 C 语言到数据结构，建立清晰的程序设计与问题求解能力。', tags: ['C 语言', '数据结构'], color: 'blue', link: '/01.C 语言/01.初级阶段/01.C 语言入门' },
  { number: '02', icon: Cpu, title: '理解计算机系统', en: 'SYSTEMS', description: '串联硬件组成与操作系统，理解程序如何真正运行。', tags: ['组成原理', '操作系统'], color: 'violet', link: '/03.计算机组成原理/01.计算机系统概述' },
  { number: '03', icon: Network, title: '连接与工程实践', en: 'ENGINEERING', description: '沿协议栈理解网络，并用设计模式组织可靠、清晰的代码。', tags: ['计算机网络', '设计模式'], color: 'cyan', link: '/05.计算机网络/01.计算机网络概述' },
]

const nodes = [
  { icon: Binary, title: '数据与算法', detail: 'C · Data Structure', position: 'code' },
  { icon: MemoryStick, title: '存储系统', detail: 'Memory · I/O', position: 'memory' },
  { icon: Workflow, title: '操作系统', detail: 'Process · File', position: 'system' },
  { icon: Network, title: '网络与设计', detail: 'Network · Pattern', position: 'network' },
]

const paths = [
  'M110 96 H174 Q198 96 198 120 V161 Q198 175 218 175 H250',
  'M110 256 H174 Q198 256 198 232 V203 Q198 189 218 189 H250',
  'M310 175 H345 Q370 175 370 151 V120 Q370 96 394 96 H450',
  'M310 189 H345 Q370 189 370 213 V232 Q370 256 394 256 H450',
]
</script>

<template>
  <div class="coa-home">
    <section class="coa-hero" aria-labelledby="coa-title">
      <div class="coa-intro">
        <p class="coa-eyebrow"><i /> 在这里，连接代码与计算机系统</p>
        <h1 id="coa-title">走进计算机基础的世界<br><span>从代码，看见系统。</span></h1>
        <p class="coa-description">从第一行 C 代码，到 CPU、操作系统与网络。<br>系统梳理六门核心课程背后的原理与联系。</p>
        <div class="coa-actions">
          <a class="coa-secondary" :href="withBase('/')"><House :size="17" />首页</a>
          <a class="coa-primary" :href="withBase('/guide')">开启学习之旅<ArrowRight :size="17" /></a>
        </div>
        <div class="coa-notes"><span>体系清晰</span><span>原理驱动</span><span>持续实践</span></div>
      </div>

      <div class="coa-visual" role="img" aria-label="计算机知识体系：以 CPU 为核心，连接数据、存储、操作系统与网络。">
        <div class="visual-label"><span><i /> THE SYSTEM JOURNEY</span><span>从代码到系统</span></div>
        <div class="coa-orbit orbit-one" /><div class="coa-orbit orbit-two" />
        <svg class="coa-connectors" viewBox="0 0 560 350" fill="none" aria-hidden="true">
          <g v-for="(path, index) in paths" :key="path"><path :d="path" /><path class="coa-flow" :d="path" pathLength="100" :style="{ animationDelay: `${index * -.8}s` }" /></g>
        </svg>
        <div v-for="node in nodes" :key="node.position" class="coa-node" :class="node.position">
          <component :is="node.icon" :size="24" :stroke-width="1.6" /><strong>{{ node.title }}</strong><small>{{ node.detail }}</small>
        </div>
        <div class="coa-core"><Cpu :size="40" :stroke-width="1.4" /><strong>CPU</strong><small>运算 · 控制 · 协同</small></div>
        <div class="visual-caption"><CircuitBoard :size="14" /> 让每一层抽象，都能追溯到底层</div>
      </div>
    </section>

    <div class="coa-stack"><span>构建你的系统视野</span><div><b>C</b><i /><b>DSA</b><i /><b>CO</b><i /><b>OS</b><i /><b>CN</b><i /><b>DP</b></div><span>六门核心 · 一套体系</span></div>

    <section class="coa-learning" aria-labelledby="learning-title">
      <div class="learning-heading"><div><p>LEARN · CONNECT · UNDERSTAND</p><h2 id="learning-title">每一层理解，都让系统全貌更清晰</h2></div><span>循序渐进，构建计算机基础知识体系</span></div>
      <div class="coa-topics">
        <a v-for="topic in topics" :key="topic.number" class="coa-topic" :class="topic.color" :href="withBase(topic.link)">
          <div class="topic-top"><div class="topic-icon"><component :is="topic.icon" :size="23" :stroke-width="1.7" /></div><span>{{ topic.number }} / {{ topic.en }}</span></div>
          <h3>{{ topic.title }}</h3><p>{{ topic.description }}</p><div class="topic-tags"><span v-for="tag in topic.tags" :key="tag">{{ tag }}</span></div>
        </a>
      </div>
    </section>
    <p class="coa-closing"><span />理解原理，也理解系统为何如此运转<span /></p>
  </div>
</template>

<style scoped>
.coa-home { --coa-text:#263852; --coa-muted:#718098; --coa-primary:#347f9d; --coa-secondary:#4e72e7; --coa-line:#dce5f1; --coa-surface:rgb(255 255 255 / 78%); max-width:1200px; margin:0 auto; padding:37.12px 32px 16px; color:var(--coa-text); line-height:1.5; }
.coa-hero { display:grid; grid-template-columns:1fr 1fr; align-items:center; gap:48px; padding:8px 0 28px; }.coa-eyebrow { display:flex; align-items:center; gap:10px; margin:0 0 10px; color:var(--coa-primary); font-size:12px; letter-spacing:2px; }.coa-eyebrow i,.visual-label i { display:inline-block; width:6px; height:6px; border-radius:50%; background:#5487e8; box-shadow:0 0 0 4px rgb(84 135 232 / 12%); }
.coa-intro h1 { margin:0; padding:0; border:0; text-align:left; font-size:clamp(30px,3vw,40px); line-height:1.3; letter-spacing:0; font-weight:750; }.coa-intro h1::after{display:none}.coa-intro h1 span { background:linear-gradient(105deg,#2f819e,#4b71ea 78%); background-clip:text; color:transparent; }.coa-description { margin:10px 0 14px; color:var(--coa-muted); font-size:15px; line-height:1.6; }
.coa-actions { display:flex; flex-wrap:wrap; gap:12px; }.coa-actions a { display:inline-flex; align-items:center; justify-content:center; gap:12px; padding:10px 18px; border-radius:8px; font-size:13px; line-height:24px; font-weight:600; transition:transform .2s,box-shadow .2s; }.coa-actions a:hover{transform:translateY(-2px);box-shadow:0 6px 16px rgb(62 112 207 / 18%)}.coa-primary{background:linear-gradient(110deg,#347f99,#4773e8);color:#fff}.coa-secondary{border:1px solid #b9cbea;background:rgb(53 127 157 / 6%);color:var(--coa-primary)}.coa-notes{display:flex;gap:22px;margin-top:12px;color:var(--coa-muted);font-size:11px}.coa-notes span::before{content:'•';margin-right:7px;color:#9cb4d7}
.coa-visual{position:relative;width:100%;aspect-ratio:560/350;background-image:radial-gradient(rgb(72 112 190 / 15%) .8px,transparent .8px);background-size:18px 18px}.visual-label{position:absolute;inset:0 0 auto;display:flex;justify-content:space-between;color:var(--coa-muted);font-size:9px;letter-spacing:1.8px}.visual-label i{margin-right:9px}.visual-label>span:last-child{letter-spacing:0}.coa-connectors{position:absolute;inset:0;width:100%;height:100%;stroke:#afc1df;stroke-width:1.2}.coa-orbit{position:absolute;top:52%;left:50%;aspect-ratio:1;transform:translate(-50%,-50%);border:1px solid rgb(70 111 190 / 11%);border-radius:50%}.orbit-one{width:44%}.orbit-two{width:60%}
.coa-node{position:absolute;display:flex;width:23%;height:25%;flex-direction:column;align-items:center;justify-content:center;gap:6px;border:1px solid #b8c9e6;border-radius:8px;background:var(--coa-surface);color:#397b9f}.coa-node strong{color:var(--coa-text);font-size:12px}.coa-node small{color:var(--coa-muted);font-size:9px}.code{left:2%;top:15%}.memory{left:2%;bottom:14%;border-color:#a9ced9;color:#2b839c}.system{right:2%;top:15%;border-color:#bdc7ed;color:#4e70e2}.network{right:2%;bottom:14%;border-color:#c9bee7;color:#7658bc}.coa-core{position:absolute;top:52%;left:50%;display:flex;width:24%;height:37%;transform:translate(-50%,-50%);flex-direction:column;align-items:center;justify-content:center;gap:10px;border:1px solid #9fb9e6;border-radius:8px;background:linear-gradient(140deg,#eaf3fb,#e8edff);box-shadow:0 0 0 7px rgb(255 255 255 / 42%),0 12px 35px rgb(62 111 199 / 13%);color:#3f69bd}.coa-core strong{font-size:20px;letter-spacing:4px;font-weight:500}.coa-core small{font-size:9px;letter-spacing:1px}.visual-caption{position:absolute;bottom:0;display:flex;width:100%;align-items:center;justify-content:center;gap:7px;color:var(--coa-muted);font-size:10px}
.coa-stack{display:flex;align-items:center;justify-content:space-between;gap:20px;padding:12px 0;border-block:1px solid var(--coa-line);color:var(--coa-muted);font-size:11px}.coa-stack>div{display:flex;align-items:center;gap:25px}.coa-stack b{font-size:16px;font-weight:600;line-height:24px}.coa-stack i{width:3px;height:3px;border-radius:50%;background:#aab4db}.coa-learning{padding-top:28px}.learning-heading{display:flex;align-items:flex-end;justify-content:space-between;gap:16px;margin-bottom:18px}.learning-heading p{margin:0 0 8px;color:var(--coa-primary);font-size:9px;letter-spacing:2px}.learning-heading h2{margin:0;padding:0;border:0;font-size:20px;font-weight:650;line-height:1.5;letter-spacing:0}.learning-heading>span{color:var(--coa-muted);font-size:11px}
.coa-topics{display:grid;grid-template-columns:repeat(3,1fr);gap:18px}.coa-topic{--topic:#347f9d;--border:#b4d0dd;--tint:rgb(52 127 157 / 8%);position:relative;overflow:hidden;padding:20px;border:1px solid var(--border);border-radius:8px;background:var(--coa-surface);color:var(--coa-text)}.coa-topic::before{position:absolute;top:0;right:18px;left:18px;height:2px;content:'';background:linear-gradient(90deg,var(--topic),transparent);opacity:.65}.violet{--topic:#5275e4;--border:#bdcaed;--tint:rgb(82 117 228 / 8%)}.cyan{--topic:#755abc;--border:#cbbfe5;--tint:rgb(117 90 188 / 8%)}.topic-top{display:flex;align-items:center;gap:12px;color:var(--topic)}.topic-top>span{font-size:9px;line-height:24px;letter-spacing:1px}.topic-icon{padding:7px;border-radius:8px;background:var(--tint)}.coa-topic h3{margin:8px 0 5px;font-size:17px;font-weight:650}.coa-topic p{margin:0;color:var(--coa-muted);font-size:11px;line-height:1.7;white-space:nowrap}.topic-tags{display:flex;gap:7px;margin-top:10px}.topic-tags span{padding:2px 8px;border-radius:4px;background:var(--tint);color:var(--topic);font-size:10px;line-height:16px}.coa-closing{display:flex;align-items:center;justify-content:center;gap:14px;margin:24px 0 0;color:var(--coa-muted);font-size:11px}.coa-closing span{width:24px;height:1px;background:var(--coa-line)}
.coa-flow{stroke:var(--coa-primary);stroke-width:2;stroke-linecap:round;stroke-dasharray:5 95;animation:coa-flow 4s linear infinite}.coa-core::before{position:absolute;inset:-8px;content:'';border:1px solid rgb(62 111 199 / 30%);border-radius:12px;animation:coa-pulse 4s ease-out infinite;pointer-events:none}.coa-core>svg{animation:coa-float 5s ease-in-out infinite}@keyframes coa-flow{to{stroke-dashoffset:-100}}@keyframes coa-pulse{0%{transform:scale(1);opacity:.65}85%,100%{transform:scale(1.25);opacity:0}}@keyframes coa-float{50%{transform:translateY(-4px)}}
:global(.is-home-page .Layout:has(.coa-home)){background-image:radial-gradient(ellipse at 72% 18%,rgb(203 209 255 / 25%),transparent 46%),linear-gradient(150deg,rgb(232 243 252 / 78%),transparent 58%),linear-gradient(215deg,rgb(237 241 255 / 48%),transparent 58%);background-size:auto}:global(.VPHome:has(.coa-home)){margin-bottom:0}:global(.Layout:has(.coa-home) .VPFooter){padding:16px 24px}:global(.dark .coa-home){--coa-text:#eef3fa;--coa-muted:#b5c0cf;--coa-primary:#75b9d0;--coa-line:#3a4659;--coa-surface:rgb(28 36 48 / 84%)}:global(.dark .coa-core){border-color:#5c78ac;background:linear-gradient(140deg,#243b50,#293866);color:#91b6ee}
@media (min-width:961px) and (max-height:900px){.coa-home{padding-top:16px;padding-bottom:12px}.coa-hero{padding-bottom:16px}.coa-visual{max-width:408px;justify-self:end}.coa-intro h1{font-size:32px}.coa-eyebrow{margin-bottom:8px}.coa-description{margin:12px 0;line-height:1.7}.coa-actions a{padding:10px 16px}.coa-notes{margin-top:8px}.coa-learning{padding-top:16px}.learning-heading{margin-bottom:12px}.learning-heading h2{font-size:18px}.learning-heading p{margin-bottom:5px}.coa-topic{padding:16px}.coa-topic h3{margin-top:10px;margin-bottom:6px}.coa-topic p{margin-bottom:10px}.coa-closing{margin-top:18px}:global(.Layout:has(.coa-home) .VPFooter){padding:12px 24px}}
@media (max-width:700px){.coa-home{padding:30px 24px 18px}.coa-hero{grid-template-columns:1fr;gap:34px;padding-bottom:28px}.coa-intro{text-align:center}.coa-eyebrow,.coa-actions,.coa-notes{justify-content:center}.coa-intro h1{text-align:center;font-size:clamp(27px,7vw,38px)}.coa-description{font-size:13px;line-height:1.8}.coa-visual{max-width:520px;margin:auto}.coa-stack{flex-direction:column;gap:10px}.coa-stack>span:last-child,.learning-heading>span{display:none}.coa-stack>div{gap:12px}.coa-stack b{font-size:12px}.coa-topics{grid-template-columns:1fr;gap:14px}.coa-topic p{white-space:normal}.coa-node{gap:4px}.coa-node>svg{width:19px}.coa-node strong{font-size:10px}.coa-node small,.coa-core small{font-size:7px}.coa-core{gap:4px}.coa-core>svg{width:28px}.coa-core strong{font-size:16px;letter-spacing:2px}}
@media (prefers-reduced-motion:reduce){.coa-flow,.coa-core::before,.coa-core>svg{animation:none}.coa-flow,.coa-core::before{opacity:0}}
</style>
