<template>
  <div>
    <!-- Page header -->
    <section class="page-header-gradient relative pt-20">
      <div class="container mx-auto px-6 py-16 text-white text-center">
        <p class="text-brand-light uppercase tracking-widest text-sm font-semibold mb-3">
          Background &amp; Experience
        </p>
        <h1 class="text-4xl lg:text-5xl font-black mb-4">My Story</h1>
        <p class="text-blue-100 text-lg max-w-xl mx-auto">
          One-person shop. Lots of hats. Always learning.
        </p>
      </div>
      <!-- Wave -->
      <div class="page-wave">
        <svg viewBox="0 0 1440 120" xmlns="http://www.w3.org/2000/svg" class="block w-full">
          <path fill="white" fill-opacity="0.12" d="M0,40 C240,100 480,10 720,55 C960,100 1200,20 1440,65 L1440,120 L0,120 Z"/>
          <path fill="white" fill-opacity="0.35" d="M0,68 C360,28 720,100 1080,58 C1260,38 1380,72 1440,78 L1440,120 L0,120 Z"/>
          <path fill="white" d="M0,92 C480,52 960,112 1440,78 L1440,120 L0,120 Z"/>
        </svg>
      </div>
    </section>

    <!-- Content -->
    <section class="bg-white py-12">
      <div class="container mx-auto px-6 max-w-4xl">

        <!-- Intro -->
        <p class="text-gray-600 text-lg leading-relaxed mb-10">
          Hello! I'm <strong class="text-gray-900">Mike Wright</strong> and this is It's All Water, LLC — my one-person freelance software development, AI consulting, and IT practice, based out of Phoenix, AZ.
        </p>

        <!-- Currently -->
        <div class="mb-12">
          <h2 class="text-2xl font-bold text-gray-900 mb-1">Currently</h2>
          <div class="w-12 h-1 bg-brand-cyan rounded mb-5"></div>
          <p class="text-gray-600 leading-relaxed mb-6">
            I've been at
            <a href="https://www.zumasys.com" target="_blank" rel="noopener" class="text-brand-cyan font-semibold hover:underline">Zumasys</a>
            since late 2018, where I now serve as
            <strong class="text-gray-900">Chief Technology Officer</strong>.
            My work spans product strategy, engineering leadership, internal development, and infrastructure. I'm also a passionate open source contributor — most notably as a maintainer of the
            <a href="https://github.com/mvextensions/mvbasic" target="_blank" rel="noopener" class="text-brand-cyan font-semibold hover:underline">MV Basic VS Code extension</a>,
            which brings modern tooling to the MultiValue/PickBASIC ecosystem. Every now and then I take on contract development work across a variety of domains and stacks — increasingly including AI integration, LLM-powered tooling, and agent-based workflows.
          </p>

          <h3 class="text-sm font-bold uppercase tracking-widest text-gray-500 mb-4">Current Tech Stack</h3>
          <div class="flex flex-wrap gap-3 mb-2">
            <a
              v-for="item in currentItems"
              :key="item.label"
              :href="item.url"
              target="_blank"
              rel="noopener"
              class="bg-blue-50 hover:bg-brand-cyan hover:text-white text-brand-navy border border-blue-100 hover:border-brand-cyan px-4 py-2 rounded-full text-sm font-semibold transition-all"
            >{{ item.label }}</a>
          </div>
        </div>

        <!-- Past life -->
        <div class="mb-12">
          <h2 class="text-2xl font-bold text-gray-900 mb-1">Past Life</h2>
          <div class="w-12 h-1 bg-brand-cyan rounded mb-5"></div>
          <p class="text-gray-600 leading-relaxed mb-4">
            Prior to Zumasys I spent thirteen years at
            <a href="https://www.equiant.com" target="_blank" rel="noopener" class="text-brand-cyan font-semibold hover:underline">Equiant Financial Services</a>,
            a timeshare servicing company in Scottsdale. I started as a Programmer/Analyst Intern and left as Vice President of IT. That journey shaped a lot of who I am as a technologist. Along the way I gained deep experience with PCI DSS Level 1 compliance, HIPAA, and SSAE-18 audits — and worked across a range of stacks:
          </p>

          <div class="flex flex-wrap gap-3 mb-6">
            <a
              v-for="item in historyItems"
              :key="item.label"
              :href="item.url"
              target="_blank"
              rel="noopener"
              class="bg-gray-50 hover:bg-gray-200 text-gray-700 border border-gray-200 px-4 py-2 rounded-full text-sm font-semibold transition-all"
            >{{ item.label }}</a>
          </div>

          <p class="text-gray-600 leading-relaxed">
            That smaller-company environment let me chart my own course, take real ownership, and grow fast. I'm extremely grateful for those opportunities.
          </p>
        </div>

        <!-- Personal -->
        <div class="mb-8">
          <h2 class="text-2xl font-bold text-gray-900 mb-1">Outside of Work</h2>
          <div class="w-12 h-1 bg-brand-cyan rounded mb-5"></div>
          <p class="text-gray-600 leading-relaxed">
            I'm a husband and father, a huge sports fan (Phoenix teams + Arizona State), a runner, a cyclist, and a regular at the Phoenix food and brewery scene. When I'm not at a game or out on a ride, you'll probably find me with a keyboard in front of me. You can read more at my blog,
            <a href="https://www.mwright.dev/" target="_blank" rel="noopener" class="text-brand-cyan font-semibold hover:underline">mwright.dev</a>.
          </p>
        </div>

      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "About",
  data() {
    return {
      currentItems: [
        { url: "https://vuejs.org/", label: "Vue.js" },
        { url: "https://vuepress.vuejs.org/", label: "VuePress" },
        { url: "https://www.typescriptlang.org/", label: "TypeScript" },
        { url: "https://www.javascript.com/", label: "JavaScript" },
        { url: "https://developer.mozilla.org/en-US/docs/Web/CSS", label: "CSS" },
        { url: "https://www.pickmultivalue.com/", label: "PickBASIC" },
        { url: "https://www.jbase.com/", label: "jBASE" },
        { url: "https://www.openqm.com/", label: "OpenQM" },
        { url: "https://www.rocketsoftware.com/products/rocket-d3", label: "D3" },
        { url: "https://www.rocketsoftware.com/products/rocket-universe-0", label: "UniVerse" },
        { url: "https://docs.microsoft.com/en-us/dotnet/core/", label: "ASP.NET Core" },
        { url: "https://docs.microsoft.com/en-us/dotnet/csharp/", label: "C#" },
        { url: "https://azure.microsoft.com/en-us/", label: "Azure" },
        { url: "https://git-scm.com/", label: "Git" },
        { url: "https://code.visualstudio.com/", label: "VS Code" },
        { url: "https://www.anthropic.com/", label: "Claude API" },
        { url: "https://azure.microsoft.com/en-us/products/ai-services/", label: "Azure AI" },
      ],
      historyItems: [
        { url: "https://www.pickmultivalue.com/", label: "PickBASIC" },
        { url: "https://www.rocketsoftware.com/products/rocket-d3", label: "D3" },
        { url: "https://www.adobe.com/products/coldfusion-family.html", label: "ColdFusion" },
        { url: "https://www.microsoft.com/en-us/sql-server", label: "Microsoft SQL" },
        { url: "https://dotnet.microsoft.com/apps/aspnet/web-forms", label: "ASP.NET WebForms" },
        { url: "https://docs.microsoft.com/en-us/dotnet/csharp/", label: "C#" },
        { url: "https://azure.microsoft.com/en-us/", label: "Azure" },
      ],
    };
  },
};
</script>
