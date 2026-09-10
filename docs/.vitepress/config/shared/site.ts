import type { HeadConfig } from "vitepress";
import { VITE_BASE_URL } from "./context";

export const head: HeadConfig[] = [
    ["link", { rel: "shortcut icon", href: `${VITE_BASE_URL}logo.svg` }],
    ["link", { rel: "icon", href: `${VITE_BASE_URL}logo.svg`, type: "image/svg+xml" }],
    ["link", { rel: "preconnect", href: "https://fonts.googleapis.com" }],
    ["link", { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "" }],
    ["link", {
        href: "https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@400;700&display=swap",
        rel: "stylesheet",
    }],
    ["meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no,shrink-to-fit=no",
    }],
    ["meta", {
        name: "keywords",
        content: "计组 6 件套、C 语言、数据结构、计算机组成原理、操作系统、计算机网络、设计模式",
    }],
    ["meta", { charset: "UTF-8" }],
];

export const siteConfig = {
    rewrites: { "zh/:rest*": ":rest*" },
    ignoreDeadLinks: [/^\/mise(?:\.html)?$/],
    metaChunk: true,
    lang: "zh-CN",
    title: "为知笔记",
    titleTemplate: "计算机基础知识体系",
    description: "计组 6 件套，系统整理 C 语言、数据结构、计算机组成原理、操作系统、计算机网络与设计模式",
    head,
    appearance: true,
    base: VITE_BASE_URL,
    lastUpdated: true,
    sitemap: { hostname: `https://coa6.weiweixu.cn${VITE_BASE_URL}` },
};

