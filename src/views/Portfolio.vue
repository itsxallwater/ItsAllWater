<template>
  <div>
    <!-- Page header -->
    <section class="page-header-gradient relative pt-20">
      <div class="container mx-auto px-6 py-16 text-white text-center">
        <p class="text-brand-light uppercase tracking-widest text-sm font-semibold mb-3">
          Projects &amp; Profiles
        </p>
        <h1 class="text-4xl lg:text-5xl font-black mb-4">My Work</h1>
        <p class="text-blue-100 text-lg max-w-xl mx-auto">
          A handful of things I've built, shipped, or contributed to.
        </p>
      </div>
      <!-- Wave -->
      <div class="page-wave">
        <svg viewBox="0 0 1440 60" xmlns="http://www.w3.org/2000/svg" class="block w-full h-12 lg:h-16">
          <path fill="white" fill-opacity="0.4" d="M0,30 C360,60 720,0 1080,30 C1260,45 1380,35 1440,32 L1440,60 L0,60 Z" />
          <path fill="white" d="M0,48 C480,16 960,60 1440,32 L1440,60 L0,60 Z" />
        </svg>
      </div>
    </section>

    <!-- Projects -->
    <section class="bg-white py-16">
      <div class="container mx-auto px-6">
        <h2 class="text-2xl font-bold text-gray-900 mb-1">Featured Projects</h2>
        <div class="w-12 h-1 bg-brand-cyan rounded mb-8"></div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div
            v-for="project in projects"
            :key="project.name"
            class="bg-white rounded-2xl border border-gray-100 shadow-md card-hover flex flex-col overflow-hidden"
          >
            <!-- Color accent top bar -->
            <div class="h-1.5 bg-gradient-to-r from-brand-cyan to-brand-mid"></div>

            <div class="p-6 flex flex-col flex-1">
              <!-- Header -->
              <div class="flex items-start justify-between mb-3">
                <div>
                  <span class="text-xs font-bold uppercase tracking-widest text-brand-cyan mb-1 block">{{ project.type }}</span>
                  <h3 class="text-xl font-bold text-gray-900">{{ project.name }}</h3>
                </div>
                <div v-if="project.stars" class="flex items-center gap-1 text-gray-400 text-sm ml-3 shrink-0">
                  <svg class="w-4 h-4 fill-current text-yellow-400" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                  <span>{{ project.stars }}</span>
                </div>
              </div>

              <!-- Description -->
              <p class="text-gray-600 text-sm leading-relaxed flex-1 mb-5">{{ project.description }}</p>

              <!-- Tags -->
              <div class="flex flex-wrap gap-2 mb-5">
                <span
                  v-for="tag in project.tags"
                  :key="tag"
                  class="bg-blue-50 text-brand-navy text-xs font-semibold px-3 py-1 rounded-full"
                >{{ tag }}</span>
              </div>

              <!-- Links -->
              <div class="flex gap-3 mt-auto">
                <a
                  v-if="project.live"
                  :href="project.live"
                  target="_blank"
                  rel="noopener"
                  class="btn-gradient text-white text-sm font-bold px-4 py-2 rounded-lg"
                >Live Site ↗</a>
                <a
                  v-if="project.github"
                  :href="project.github"
                  target="_blank"
                  rel="noopener"
                  class="flex items-center gap-1.5 border border-gray-200 hover:border-brand-cyan hover:text-brand-cyan text-gray-600 text-sm font-semibold px-4 py-2 rounded-lg transition-colors"
                >
                  <svg class="w-4 h-4 fill-current" viewBox="0 0 16 16"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/></svg>
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Profiles -->
    <section class="bg-gray-50 py-16">
      <div class="container mx-auto px-6">
        <h2 class="text-2xl font-bold text-gray-900 mb-1">Find Me Online</h2>
        <div class="w-12 h-1 bg-brand-cyan rounded mb-8"></div>

        <div class="flex flex-wrap gap-4">
          <a
            href="./resume.pdf"
            target="_blank"
            rel="noopener"
            class="flex items-center gap-3 bg-white border border-gray-200 hover:border-brand-cyan hover:text-brand-cyan text-gray-700 px-6 py-3 rounded-xl shadow-sm font-semibold transition-all hover:shadow-md"
          >
            <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zm-1 7V3.5L18.5 9H13zm-2 8H7v-2h4v2zm4-4H7v-2h8v2zm0-4H7V7h8v2z"/></svg>
            Resume
          </a>
          <a
            href="https://www.linkedin.com/in/michaelscottwright/"
            target="_blank"
            rel="noopener"
            class="flex items-center gap-3 bg-white border border-gray-200 hover:border-brand-cyan hover:text-brand-cyan text-gray-700 px-6 py-3 rounded-xl shadow-sm font-semibold transition-all hover:shadow-md"
          >
            <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            LinkedIn
          </a>
          <a
            href="https://github.com/itsxallwater"
            target="_blank"
            rel="noopener"
            class="flex items-center gap-3 bg-white border border-gray-200 hover:border-brand-cyan hover:text-brand-cyan text-gray-700 px-6 py-3 rounded-xl shadow-sm font-semibold transition-all hover:shadow-md"
          >
            <svg class="w-5 h-5 fill-current" viewBox="0 0 16 16"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/></svg>
            GitHub
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "Portfolio",
  data() {
    return {
      projects: [
        {
          name: "Working Mahj",
          type: "Website",
          description: "Website for my wife and sister-in-law's Phoenix-area business offering mahjong lessons to working professionals. Clean, approachable, and built with care.",
          tags: ["Vue.js", "CSS"],
          live: "https://mahj.work",
          github: "https://github.com/itsxallwater/working-mahj",
          stars: null,
        },
        {
          name: "Zumasys Docs",
          type: "Open Source / Work",
          description: "VuePress-powered product documentation platform for Zumasys, covering Rover ERP, SmartSuite, and more. Built and deployed to Azure Storage via GitHub Actions.",
          tags: ["VuePress", "JavaScript", "Azure"],
          live: null,
          github: "https://github.com/zumasys/docs",
          stars: 7,
        },
        {
          name: "MV Basic for VS Code",
          type: "Open Source Extension",
          description: "Visual Studio Code extension bringing syntax highlighting, IntelliSense, code formatting, and more to PickBASIC and MultiValue database development. Widely adopted across the MV ecosystem.",
          tags: ["TypeScript", "VS Code", "PickBASIC"],
          live: null,
          github: "https://github.com/mvextensions/mvbasic",
          stars: 35,
        },
      ],
    };
  },
};
</script>
