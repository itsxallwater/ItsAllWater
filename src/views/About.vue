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
    </section>

    <!-- Top wave -->
    <div class="bg-white" style="line-height: 0; overflow: hidden;">
      <svg viewBox="0 0 1440 120" xmlns="http://www.w3.org/2000/svg" class="block w-full">
        <path fill="#0a1628" fill-opacity="0.12" d="M0,0 C240,80 480,12 720,68 C960,95 1200,20 1440,0 L1440,0 L0,0 Z"/>
        <path fill="#0a1628" fill-opacity="0.35" d="M0,0 C360,55 720,10 1080,52 C1260,65 1380,28 1440,0 L1440,0 L0,0 Z"/>
        <path fill="#0a1628" d="M0,0 C240,28 480,4 720,22 C960,40 1200,6 1440,0 L1440,0 L0,0 Z"/>
      </svg>
    </div>

    <!-- Content -->
    <section class="bg-white py-12">
      <div class="container mx-auto px-6 max-w-4xl">

        <!-- Intro -->
        <p class="text-gray-600 text-lg leading-relaxed mb-10">
          Hello! I'm <strong class="text-gray-900">Mike Wright</strong> and this is It's All Water, LLC — my one-person freelance software development, AI consulting, and IT practice, based out of Phoenix, AZ.
        </p>

        <!-- Currently -->
        <div class="mb-12">
          <div class="inline-block mb-5">
            <div class="flex items-center gap-3 mb-1.5">
              <svg class="w-6 h-6 fill-current text-brand-cyan flex-shrink-0" viewBox="0 0 24 24"><path d="M10 16v-1H3.01L3 19c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-4h-7v1h-4zm10-9h-4.01V5l-2-2h-4l-2 2v2H4c-1.1 0-2 .9-2 2v3c0 1.11.89 2 2 2h6v-2h4v2h6c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2zm-6 0h-4V5h4v2z"/></svg>
              <h2 class="text-2xl font-bold text-gray-900">Currently</h2>
            </div>
            <div class="h-1 bg-brand-cyan rounded"></div>
          </div>
          <p class="text-gray-600 leading-relaxed mb-5">
            I joined
            <a href="https://www.zumasys.com" target="_blank" rel="noopener" class="text-brand-cyan font-semibold hover:underline">Zumasys</a>
            in late 2018, where I now serve as
            <strong class="text-gray-900">Chief Technology Officer</strong>.
            The work has gone through two distinct chapters — and both have been genuinely defining.
          </p>

          <div class="border-l-2 border-blue-100 pl-5 space-y-5 mb-6">
            <div>
              <p class="text-xs font-bold uppercase tracking-widest text-brand-cyan mb-1">2018 – 2021</p>
              <p class="text-gray-600 leading-relaxed">
                The early years centered on modernizing the MultiValue ecosystem — specifically
                <strong class="text-gray-800">OpenQM</strong>, <strong class="text-gray-800">jBASE</strong>,
                <strong class="text-gray-800">MVConnect</strong>, and <strong class="text-gray-800">AccuTerm</strong>.
                That work culminated in the sale of those product lines to
                <a href="https://www.rocketsoftware.com" target="_blank" rel="noopener" class="text-brand-cyan font-semibold hover:underline">Rocket Software</a>
                in 2021 — a meaningful milestone for the MV community and for the team.
              </p>
            </div>
            <div>
              <p class="text-xs font-bold uppercase tracking-widest text-brand-cyan mb-1">2021 – Present</p>
              <p class="text-gray-600 leading-relaxed">
                Since the pivot, we've focused entirely on
                <a href="https://www.zumasys.com/rover/" target="_blank" rel="noopener" class="text-brand-cyan font-semibold hover:underline">Rover ERP</a>
                — a manufacturing-focused platform with 30+ years of history. Over the past five years, Rover has transformed from a legacy system into a modern, cloud-ready web application compatible with multiple ERP back ends. In the last two years the team has gone all-in on an
                <strong class="text-gray-800">AI-first development model</strong>, which culminated recently in the launch of
                <strong class="text-gray-800">Rover AI</strong>. Day-to-day, we're heavy users of
                <strong class="text-gray-800">GitHub Copilot</strong> across the engineering org.
              </p>
            </div>
          </div>

          <p class="text-gray-600 leading-relaxed mb-8">
            I'm also a passionate open source contributor — most notably as a maintainer of the
            <a href="https://github.com/mvextensions/mvbasic" target="_blank" rel="noopener" class="text-brand-cyan font-semibold hover:underline">MV Basic VS Code extension</a>,
            which brings modern tooling to the PickBASIC ecosystem. Every now and then I take on contract work, increasingly focused on AI integration, LLM-powered tooling, and agent-based workflows.
          </p>

          <h3 class="text-sm font-bold uppercase tracking-widest text-gray-500 mb-5">Current Tech Stack</h3>
          <div class="space-y-4">
            <div v-for="group in currentItemsByCategory" :key="group.category">
              <p class="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">{{ group.category }}</p>
              <div class="flex flex-wrap gap-2">
                <a
                  v-for="item in group.items"
                  :key="item.label"
                  :href="item.url"
                  target="_blank"
                  rel="noopener"
                  class="inline-flex items-center gap-1.5 bg-blue-50 hover:bg-brand-cyan hover:text-white text-brand-navy border border-blue-100 hover:border-brand-cyan px-4 py-1.5 rounded-full text-sm font-semibold transition-all"
                >
                  <img v-if="item.icon" :src="item.icon" :alt="''" class="w-4 h-4 flex-shrink-0" @error="$event.target.style.display='none'" />
                  {{ item.label }}
                </a>
              </div>
            </div>
          </div>
        </div>

        <!-- Past life -->
        <div class="mb-12">
          <div class="inline-block mb-5">
            <div class="flex items-center gap-3 mb-1.5">
              <svg class="w-6 h-6 fill-current text-brand-cyan flex-shrink-0" viewBox="0 0 24 24"><path d="M13 3a9 9 0 00-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42A8.954 8.954 0 0013 21a9 9 0 000-18zm-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8H12z"/></svg>
              <h2 class="text-2xl font-bold text-gray-900">Past Life</h2>
            </div>
            <div class="h-1 bg-brand-cyan rounded"></div>
          </div>
          <p class="text-gray-600 leading-relaxed mb-4">
            Prior to Zumasys I spent thirteen years at
            <a href="https://www.equiant.com" target="_blank" rel="noopener" class="text-brand-cyan font-semibold hover:underline">Equiant Financial Services</a>,
            a timeshare servicing company in Scottsdale. I started as a Programmer/Analyst Intern and left as Vice President of IT. That journey shaped a lot of who I am as a technologist. Along the way I gained deep experience with PCI DSS Level 1 compliance, HIPAA, and SSAE-18 audits — and worked across a range of stacks:
          </p>

          <div class="flex flex-wrap gap-2 mb-6">
            <a
              v-for="item in historyItems"
              :key="item.label"
              :href="item.url"
              target="_blank"
              rel="noopener"
              class="inline-flex items-center gap-1.5 bg-gray-50 hover:bg-gray-100 text-gray-600 border border-gray-200 hover:border-gray-300 px-4 py-1.5 rounded-full text-sm font-semibold transition-all"
            >
              <img v-if="item.icon" :src="item.icon" :alt="''" class="w-4 h-4 flex-shrink-0" @error="$event.target.style.display='none'" />
              {{ item.label }}
            </a>
          </div>

          <p class="text-gray-600 leading-relaxed">
            That smaller-company environment let me chart my own course, take real ownership, and grow fast. I'm extremely grateful for those opportunities.
          </p>
        </div>

        <!-- Personal -->
        <div class="mb-8">
          <div class="inline-block mb-5">
            <div class="flex items-center gap-3 mb-1.5">
              <svg class="w-6 h-6 fill-current text-brand-cyan flex-shrink-0" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
              <h2 class="text-2xl font-bold text-gray-900">Outside of Work</h2>
            </div>
            <div class="h-1 bg-brand-cyan rounded"></div>
          </div>
          <p class="text-gray-600 leading-relaxed mb-4">
            I'm a husband and father, a huge sports fan (Phoenix teams + Arizona State), a runner, a cyclist, and a regular at the Phoenix food and brewery scene. When I'm not at a game or out on a ride, you'll almost certainly find me at a keyboard.
          </p>
          <p class="text-gray-600 leading-relaxed">
            Side projects have become a playground for things I don't always get to touch at work: building UIs in <strong class="text-gray-800">Vue.js</strong> with <strong class="text-gray-800">Vite</strong>, writing backends in <strong class="text-gray-800">Go</strong>, containerizing everything in <strong class="text-gray-800">Docker</strong>, and using <strong class="text-gray-800">Claude</strong> as a genuine thinking and building partner. You can read more about all of it at my blog,
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
      currentItemsByCategory: [
        {
          category: "AI & Tooling",
          items: [
            { url: "https://github.com/features/copilot", label: "GitHub Copilot", icon: "https://cdn.simpleicons.org/githubcopilot/04b0f2" },
            { url: "https://www.anthropic.com/", label: "Claude API", icon: "https://cdn.simpleicons.org/anthropic/04b0f2" },
            { url: "https://azure.microsoft.com/en-us/products/ai-services/", label: "Azure AI", icon: "https://cdn.simpleicons.org/microsoftazure" },
          ],
        },
        {
          category: "Frontend",
          items: [
            { url: "https://vuejs.org/", label: "Vue.js", icon: "https://cdn.simpleicons.org/vuedotjs" },
            { url: "https://vuepress.vuejs.org/", label: "VuePress", icon: "https://cdn.simpleicons.org/vuedotjs" },
            { url: "https://vitejs.dev/", label: "Vite", icon: "https://cdn.simpleicons.org/vite" },
            { url: "https://www.typescriptlang.org/", label: "TypeScript", icon: "https://cdn.simpleicons.org/typescript" },
            { url: "https://www.javascript.com/", label: "JavaScript", icon: "https://cdn.simpleicons.org/javascript" },
            { url: "https://developer.mozilla.org/en-US/docs/Web/CSS", label: "CSS", icon: "https://cdn.simpleicons.org/css3" },
          ],
        },
        {
          category: "Backend & Platform",
          items: [
            { url: "https://docs.microsoft.com/en-us/dotnet/core/", label: "ASP.NET Core", icon: "https://cdn.simpleicons.org/dotnet" },
            { url: "https://docs.microsoft.com/en-us/dotnet/csharp/", label: "C#", icon: "https://cdn.simpleicons.org/csharp" },
            { url: "https://www.pickmultivalue.com/", label: "PickBASIC" },
            { url: "https://www.jbase.com/", label: "jBASE" },
            { url: "https://www.openqm.com/", label: "OpenQM" },
            { url: "https://www.rocketsoftware.com/products/rocket-d3", label: "D3" },
            { url: "https://www.rocketsoftware.com/products/rocket-universe-0", label: "UniVerse" },
          ],
        },
        {
          category: "Infrastructure",
          items: [
            { url: "https://azure.microsoft.com/en-us/", label: "Azure", icon: "https://cdn.simpleicons.org/microsoftazure" },
            { url: "https://git-scm.com/", label: "Git", icon: "https://cdn.simpleicons.org/git" },
            { url: "https://code.visualstudio.com/", label: "VS Code", icon: "https://cdn.simpleicons.org/visualstudiocode" },
          ],
        },
      ],
      historyItems: [
        { url: "https://www.pickmultivalue.com/", label: "PickBASIC" },
        { url: "https://www.rocketsoftware.com/products/rocket-d3", label: "D3" },
        { url: "https://www.adobe.com/products/coldfusion-family.html", label: "ColdFusion" },
        { url: "https://www.microsoft.com/en-us/sql-server", label: "Microsoft SQL", icon: "https://cdn.simpleicons.org/microsoftsqlserver" },
        { url: "https://dotnet.microsoft.com/apps/aspnet/web-forms", label: "ASP.NET WebForms", icon: "https://cdn.simpleicons.org/dotnet" },
        { url: "https://docs.microsoft.com/en-us/dotnet/csharp/", label: "C#", icon: "https://cdn.simpleicons.org/csharp" },
        { url: "https://azure.microsoft.com/en-us/", label: "Azure", icon: "https://cdn.simpleicons.org/microsoftazure" },
      ],
    };
  },
};
</script>
