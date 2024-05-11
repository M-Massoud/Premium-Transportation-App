<template>
  <nav class="flex bg-black mx-auto container">
    <div class="py-4 max-lg:flex max-lg:space-x-4 max-lg:p-4">
      <div class="drawer lg:hidden z-[120]">
        <input id="my-drawer" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content">
          <!-- Page content here -->
          <label for="my-drawer" class="">
            <img class="fill-white" src="/icons/menu.svg" alt="menu-icon" />
          </label>
        </div>
        <div class="drawer-side drawer">
          <label
            for="my-drawer"
            aria-label="close sidebar"
            class="drawer-overlay"
          ></label>
          <ul
            class="flex items-center menu p-4 w-72 min-h-full bg-base-200 text-base-content"
          >
            <RouterLink
              before
              class="text-white font-normal my-1"
              v-for="route in navbarRoutes"
              :to="route.path"
              :key="route.name"
            >
              {{ route.name }}
            </RouterLink>
          </ul>
        </div>
      </div>

      <img color="white" src="/images/cabrio-logo.png" alt="cabrio-logo" />
    </div>
    <div class="hidden lg:flex space-x-10 ml-24 py-4">
      <RouterLink
        before
        class="text-white font-normal"
        active-class="font-semibold after:content-[''] after:w-1.5 after:h-1.5 after:bg-white after:rounded after:block after:mx-auto after:mt-1.5"
        v-for="route in navbarRoutes"
        :to="route.path"
        :key="route.name"
      >
        {{ route.name }}
      </RouterLink>
    </div>
    <!-- user details -->
    <div
      class="hidden text-white ml-auto lg:flex space-x-5 divide-x divide-white divide-opacity-30"
    >
      <div class="text-right py-4">
        <h4 class="text-xs font-normal">Balance</h4>
        <p class="font-semibold">50.600.0 SAR</p>
      </div>
      <div class="text-right pl-5 py-4 flex items-center">
        <div class="flex space-x-3">
          <img src="/images/Khuzimah.png" alt="cabrio-logo" />
          <div>
            <h4 class="text-base">Khuzimah A.</h4>
            <p class="text-xs text-left font-light">Cabrio Co.</p>
          </div>
        </div>
        <div class="dropdown dropdown-end ml-24">
          <div tabindex="0" role="button" class="">
            <img src="/icons/arrow-down.svg" />
          </div>
          <ul
            tabindex="0"
            class="dropdown-content mt-10 -mr-6 z-[1] menu p-3 shadow bg-white rounded-lg w-60"
          >
            <RouterLink class="text-black flex py-3" to="">
              <img src="/icons/setting.svg" class="mr-3" />
              <li class="font-medium">Profile Settings</li>
            </RouterLink>
            <hr />
            <RouterLink class="text-black flex py-3" to="">
              <img src="/icons/translate.svg" class="mr-3" />
              <li class="font-medium">العربية</li>
            </RouterLink>
            <button
              class="mt-2 py-2 rounded-md border-2 border-black text-black font-bold"
            >
              Logout
            </button>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { navbarRoutes } from '../router';
</script>
