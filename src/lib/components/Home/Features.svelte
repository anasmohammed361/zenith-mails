<script lang="ts">
  import Container from "./Container.svelte";
</script>

<div class=" pb-20" id="features">
  <Container>
    <div class="md:w-2/3 lg:w-1/2">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
        class="w-6 h-6 text-secondary">
        <path fill-rule="evenodd"
          d="M9 4.5a.75.75 0 01.721.544l.813 2.846a3.75 3.75 0 002.576 2.576l2.846.813a.75.75 0 010 1.442l-2.846.813a3.75 3.75 0 00-2.576 2.576l-.813 2.846a.75.75 0 01-1.442 0l-.813-2.846a3.75 3.75 0 00-2.576-2.576l-2.846-.813a.75.75 0 010-1.442l2.846-.813A3.75 3.75 0 007.466 7.89l.813-2.846A.75.75 0 019 4.5zM18 1.5a.75.75 0 01.728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 010 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 01-1.456 0l-.258-1.036a2.625 2.625 0 00-1.91-1.91l-1.036-.258a.75.75 0 010-1.456l1.036-.258a2.625 2.625 0 001.91-1.91l.258-1.036A.75.75 0 0118 1.5zM16.5 15a.75.75 0 01.712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 010 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 01-1.422 0l-.395-1.183a1.5 1.5 0 00-.948-.948l-1.183-.395a.75.75 0 010-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0116.5 15z"
          clip-rule="evenodd" />
      </svg>

      <h2 class="mt-8 mb-5 text-2xl font-bold text-gray-700 dark:text-white md:text-4xl">
        Transform your email experience with Zenith Mails.
      </h2>
      <p class="text-gray-600 dark:text-gray-300 text-lg">The open-source email automation tool with analytics. Send
        personalized emails, automate campaigns, and track performance with ease.</p>
    </div>
    <div
      class="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      <!-- First feature -->
      <div class="group relative bg-white dark:bg-gray-800 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10 rounded-3xl p-8 ">
        <div class="space-y-2">
          <h5 class="text-xl font-semibold text-gray-700 dark:text-white transition ">
            Personalized Email Campaigns
          </h5>
          <p class="text-gray-600 dark:text-gray-300">
            Craft personalized email campaigns tailored to your audience's preferences and
            behaviors. Utilize dynamic content and segmentation to deliver targeted messages that
            drive engagement and conversions.
          </p>
        </div>
        <a href="#" class="flex items-center justify-end ">
          
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
            class="w-5 h-5 -translate-x-4 text-2xl opacity-0 transition duration-300 group-hover:translate-x-0 group-hover:opacity-100">
            <path fill-rule="evenodd"
              d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z"
              clip-rule="evenodd" />
          </svg>
        </a>
      </div>

      <!-- Second feature -->
      <div class="group relative bg-white dark:bg-gray-800 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10 rounded-3xl p-8">
        <div class="space-y-2">
          <h5 class="text-xl font-semibold text-gray-700 dark:text-white transition ">
            Automated Campaigns
          </h5>
          <p class="text-gray-600 dark:text-gray-300">
            Set up automated email campaigns to nurture leads, onboard users, or re-engage
            customers. Save time and increase conversions by delivering the right message at the
            right time.
          </p>
        </div>
        <a href="#" class="flex items-center justify-end ">
          
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
            class="w-5 h-5 -translate-x-4 text-2xl opacity-0 transition duration-300 group-hover:translate-x-0 group-hover:opacity-100">
            <path fill-rule="evenodd"
              d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z"
              clip-rule="evenodd" />
          </svg>
        </a>
      </div>

      <!-- Third feature -->
      <div class="group relative  bg-muted dark:bg-gray-800 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10 rounded-3xl p-8">
        <div class="space-y-2">
          <h5 class="text-xl font-semibold text-gray-700 dark:text-white transition ">
            Advanced Analytics
          </h5>
          <p class="text-gray-600 dark:text-gray-300">
            Gain insights into your email performance with comprehensive analytics. Track open rates,
            click-through rates, conversion rates, and more to optimize your campaigns and maximize
            ROI.
          </p>
        </div>
        <a href="#" class="flex items-center justify-end ">
          
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
            class="w-5 h-5 -translate-x-4 text-2xl opacity-0 transition duration-300 group-hover:translate-x-0 group-hover:opacity-100">
            <path fill-rule="evenodd"
              d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z"
              clip-rule="evenodd" />
          </svg>
        </a>
      </div>

      <!-- Fourth feature -->
      <iv class="group relative bg-muted dark:bg-gray-800 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10 rounded-3xl p-8">
        <div class="space-y-2">
          <h5 class="text-xl font-semibold text-gray-700 dark:text-white transition ">
            Customizable Templates
          </h5>
          <p class="text-gray-600 dark:text-gray-300">
            Choose from a library of customizable email templates or design your own. Create
            eye-catching emails that reflect your brand identity and resonate with your audience.
          </p>
        </div>
        <a href="#" class="flex items-center justify-between group-hover:text-secondary">
          <span class="text-sm">Read more</span>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
            class="w-5 h-5 -translate-x-4 text-2xl opacity-0 transition duration-300 group-hover:translate-x-0 group-hover:opacity-100">
            <path fill-rule="evenodd"
              d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z"
              clip-rule="evenodd" />
          </svg>
        </a>
      </iv>
    </div>
  </Container>
</div>