<template>
  <div>
    <!--Hero-->
    <div
      class="container px-3 mb-16 mx-auto flex flex-wrap flex-col md:flex-row items-center"
    >
      <!--Left Col-->
      <div class="w-full md:w-3/5 items-center">
        <img class="lg:w-4/5 w-3/5 m-auto z-50" src="../assets/logo.png" />
      </div>
      <!--Right Col-->
      <div
        class="flex flex-col w-full md:w-2/5 justify-center items-start text-left"
      >
        <h1
          class="my-4 text-4xl lg:text-5xl font-bold leading-tight w-full lg:w-auto"
        >
          My Story
        </h1>
        <p class="leading-normal text-2xl mb-6">
          Hello! My name is Mike Wright and this is It's All Water, LLC. I'm a
          one-person shop offering freelance software development and IT
          consulting based out of Phoenix, AZ.
        </p>
      </div>
    </div>
    <TransitionTop />
    <div class="p-3 mx-auto bg-white leading-normal text-2xl">
      <h2
        class="font-bold my-4 text-xl lg:text-2xl leading-tight w-full lg:w-auto"
      >
        Currently
      </h2>
      <p class="mb-4 text-sm lg:text-base">
        Professionally, I have been at
        <a
          href="https://www.zumasys.com"
          target="_blank"
          rel="noopener"
          alt="Zumasys"
          >Zumasys</a
        >
        since late 2018. While my journey there began as a Senior Software
        Developer, by January of 2020 I stepped into the role of Director of
        Technology. My work with Zumasys primarily consists of directing the
        Product Support, Internal Development and Internal Helpdesk/IT groups. I
        also co-chair Product Development and am a general open source
        evangelist for the organization (I am super passionate about the
        <a
          href="https://github.com/mvextensions/mvbasic"
          target="_blank"
          rel="noopener"
          alt="MV Basic"
          >MV Basic</a
        >
        VS Code extension). Every now and then I'm known to help in executing on
        contract development work for clients across a variety of domains and
        technical stacks, including but not limited to:
      </p>
      <div
        class="flex flex-wrap mb-4 leading-normal text-sm lg:text-base text-left lg:text-center"
      >
        <div class="w-full md:w-1/6 md:h-12" v-for="item in currentItems">
          <ProfileItem :item="item" :hideAlt="false" />
        </div>
      </div>
      <h2
        class="font-bold my-4 text-xl lg:text-2xl leading-tight w-full lg:w-auto"
      >
        Past Life
      </h2>
      <p class="mb-4 text-sm lg:text-base">
        Prior to joining Zumasys I spent the first thirteen years of my career
        (re: my whole career) at
        <a
          href="https://www.equiant.com"
          rel="noopener"
          target="_blank"
          alt="Equiant Financial Services"
          >Equiant Financial Services</a
        >, a timeshare servicing company based in Scottsdale. My journey there
        began as a Programmer/Analyst Intern and ended as Vice President of IT!
        Though I no longer work there, I'm extremely appreciative of the
        opportunities that were provided to me. My experience there allowed me
        to grow as a developer across several technology stacks:
      </p>
      <div
        class="flex flex-wrap mb-4 leading-normal text-sm lg:text-base text-left lg:text-center"
      >
        <div class="w-full md:w-1/6 md:h-12" v-for="item in historyItems">
          <ProfileItem :item="item" :hideAlt="false" />
        </div>
      </div>
      <p class="mb-4 text-sm lg:text-base">
        Not only did I gain valuable technology experience, I also became
        familiar with Office 365 for Enterprise, Microsoft Azure, PCI DSS
        Compliance (Level 1), HIPAA Compliance and SSAE-18 audits. Due to the
        fact it was a smaller company, I was able to chart my own course and
        take a strong sense of ownership and pride in my work.
      </p>
      <p class="mb-4 text-sm lg:text-base">
        Outside of providing freelance software development and IT consulting,
        I'm a husband to an amazing woman and father to an equally amazing son.
        I'm also a huge sports fan, supporting all of the local professional
        teams plus Arizona State. When I'm not hanging with the family or
        watching games, you're likely to find me coding, running, cycling or
        enjoying the great culinary and brewery scenes of Phoenix! If you're
        reading this wanting more, you'll find my blog at
        <a
          href="https://www.mwright.dev/"
          rel="noopener"
          target="_blank"
          alt="Blog"
          >mwright.dev</a
        >.
      </p>
      <span class="md:text-sm italic"
        >Icons thanks to
        <a
          href="https://icones.netlify.app/"
          rel="noopener"
          target="_blank"
          alt="Icones"
          >Icones</a
        >!</span
      >
    </div>
  </div>
</template>

<script>
import TransitionTop from "../components/TransitionTop.vue";
import ProfileItem from "../components/ProfileItem.vue";

export default {
  name: "About",
  components: {
    TransitionTop,
    ProfileItem,
  },
  data() {
    return {
      currentItems: [
        { url: "https://vuejs.org/", icon: "i cib:vue-js", alt: "Vue.js" },
        {
          url: "https://www.javascript.com/",
          icon: "i simple-icons:javascript",
          alt: "JavaScript",
        },
        {
          url: "https://www.typescriptlang.org/",
          icon: "i simple-icons:typescript",
          alt: "TypeScript",
        },
        {
          url: "https://www.pickmultivalue.com/",
          icon: "i bx:bx-code-block",
          alt: "PickBASIC",
        },
        {
          url: "https://www.jbase.com/",
          icon: "i si-glyph:database",
          alt: "jBASE",
        },
        {
          url: "https://www.openqm.com/",
          icon: "i si-glyph:database",
          alt: "OpenQM",
        },
        {
          url: "https://www.rocketsoftware.com/products/rocket-d3",
          icon: "i si-glyph:database",
          alt: "D3",
        },
        {
          url: "https://www.rocketsoftware.com/products/rocket-universe-0",
          icon: "i si-glyph:database",
          alt: "UniVerse",
        },
        {
          url: "https://docs.microsoft.com/en-us/dotnet/core/",
          icon: "i simple-icons:dot-net",
          alt: "ASP.NET Core",
        },
        {
          url: "https://docs.microsoft.com/en-us/dotnet/csharp/",
          icon: "i mdi:language-csharp",
          alt: "C#",
        },
        {
          url: "https://www.java.com/en/",
          icon: "i simple-icons:java",
          alt: "Java",
        },
        {
          url: "https://azure.microsoft.com/en-us/",
          icon: "i simple-icons:microsoftazure",
          alt: "Azure",
        },
        {
          url: "https://azure.microsoft.com/en-us/services/functions/",
          icon: "i simple-icons:azurefunctions",
          alt: "Azure Functions",
        },
        {
          url: "https://www.docker.com",
          icon: "i simple-icons:docker",
          alt: "Docker",
        },
        {
          url: "https://www.mongodb.com/",
          icon: "i simple-icons:mongodb",
          alt: "mongoDB",
        },
        { url: "https://git-scm.com/", icon: "i simple-icons:git", alt: "Git" },
        {
          url: "https://code.visualstudio.com/",
          icon: "i simple-icons:visualstudiocode",
          alt: "Visual Studio Code",
        },
      ],
      historyItems: [
        {
          url: "https://www.pickmultivalue.com/",
          icon: "i bx:bx-code-block",
          alt: "PickBASIC",
        },
        {
          url: "https://www.rocketsoftware.com/products/rocket-d3",
          icon: "i si-glyph:database",
          alt: "D3",
        },
        {
          url: "https://www.adobe.com/products/coldfusion-family.html",
          icon: "i bx:bx-code-block",
          alt: "ColdFusion",
        },
        {
          url: "https://www.microsoft.com/en-us/sql-server",
          icon: "i carbon:sql",
          alt: "Microsoft SQL (T-SQL, SSIS, SSRS)",
        },
        {
          url: "https://dotnet.microsoft.com/apps/aspnet/web-forms",
          icon: "i simple-icons:dot-net",
          alt: "ASP.NET WebForms",
        },
        {
          url: "https://docs.microsoft.com/en-us/dotnet/csharp/",
          icon: "i mdi:language-csharp",
          alt: "C#",
        },
        {
          url: "https://azure.microsoft.com/en-us/",
          icon: "i simple-icons:microsoftazure",
          alt: "Azure",
        },
      ],
    };
  },
};
</script>
