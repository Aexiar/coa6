import { DefaultTheme } from 'vitepress'
import { commonDirectoryName } from '../utils/constant'
export const sidebar: DefaultTheme.Sidebar = {
  '/notes/': [
    {
      text: 'C语言',
      collapsed: true,
      items: [
        { text: 'C 语言入门', link: `/notes/01_c/01_${commonDirectoryName}/` },
        { text: '变量和进制', link: `/notes/01_c/02_${commonDirectoryName}/` },
        { text: '数据类型和运算符', link: `/notes/01_c/03_${commonDirectoryName}/` },
        { text: '流程控制', link: `/notes/01_c/04_${commonDirectoryName}/` },
        { text: '数组', link: `/notes/01_c/05_${commonDirectoryName}/` },
      ]
    },
    {
      text: '数据结构和算法',
      collapsed: true,
      items: [
        { text: '初识 C 语言', link: `/notes/02_dsa/01_${commonDirectoryName}/` },
      ]
    },
    {
      text: '计算机组成原理',
      collapsed: true,
      items: [
        { text: '计算机组成原理前言', link: `/notes/03_coa/03_${commonDirectoryName}/` },
      ]
    },
    {
      text: '操作系统',
      collapsed: true,
      items: [
        { text: '操作系统前言', link: `/notes/04_os/01_${commonDirectoryName}/` },
      ]
    },
    {
      text: '计算机网络',
      collapsed: true,
      items: [
        { text: '计算机网络前言', link: `/notes/05_net/01_${commonDirectoryName}/` },
      ]
    },
    {
      text: '设计模式',
      collapsed: true,
      items: [
        { text: '设计模式前言', link: `/notes/06_design/01_${commonDirectoryName}/` },
      ]
    },
  ],
}

export default sidebar