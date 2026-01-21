import { defaultTheme } from "@vuepress/theme-default";
import { viteBundler } from "@vuepress/bundler-vite";
import { defineUserConfig } from "vuepress";
import { mobaxtermCrackerPlugin } from 'vuepress-plugin-mobaxterm-cracker';



export default defineUserConfig({
  base: "/",
  lang: "zh-CN",
  title: "MobaXterm Keygen",
  description: "MobaXterm Keygen Online",
  head: [
    ['meta', { name: 'color-scheme', content: 'light' }],
    ['meta', { name: 'theme-color', content: '#ffffff' }],
  ],
  plugins: [
    mobaxtermCrackerPlugin()
  ],

  bundler: viteBundler(),
  theme: defaultTheme({
    navbar: false,
    colorMode: 'light',
    colorModeSwitch: false,
    contributors: false,
    lastUpdated: false,
  }),
});
