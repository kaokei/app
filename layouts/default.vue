<template>
  <div class="drawer">
    <input id="navbar-drawer" type="checkbox" class="drawer-toggle" />
    <div class="drawer-content flex flex-col">
      <!-- Navbar -->
      <div class="navbar w-full shadow-sm">
        <div class="flex-none lg:hidden">
          <label
            for="navbar-drawer"
            aria-label="open sidebar"
            class="btn btn-square btn-ghost"
          >
            <i-local-bar3 class="size-6 stroke-current" />
          </label>
        </div>
        <NuxtLink class="btn btn-ghost" to="/">
          <i-local-logo class="size-8" />
          <span>kaokei</span>
        </NuxtLink>
        <div class="ml-auto hidden flex-none lg:block">
          <ul class="menu menu-horizontal p-0">
            <!-- Navbar menu content here -->
            <li>
              <NuxtLink class="btn btn-ghost" to="/repl">REPL</NuxtLink>
            </li>
            <li>
              <NuxtLink class="btn btn-ghost" to="/gzip">GZIP</NuxtLink>
            </li>
            <li>
              <NuxtLink class="btn btn-ghost" to="/urlcode">URL编解码</NuxtLink>
            </li>
            <li>
              <NuxtLink class="btn btn-ghost" to="/base64code"
                >Base64编解码</NuxtLink
              >
            </li>
            <li>
              <NuxtLink class="btn btn-ghost" to="/jsonlint"
                >JSON格式化</NuxtLink
              >
            </li>
            <li>
              <NuxtLink class="btn btn-ghost" to="/jslint">JS格式化</NuxtLink>
            </li>
            <li>
              <NuxtLink class="btn btn-ghost" to="/csslint">CSS格式化</NuxtLink>
            </li>
          </ul>
        </div>
      </div>
      <!-- Page content here -->
      <div><slot></slot></div>
    </div>
    <div class="drawer-side">
      <label
        for="navbar-drawer"
        aria-label="close sidebar"
        class="drawer-overlay"
      ></label>
      <ul class="menu min-h-full w-80 bg-white p-4">
        <!-- Sidebar content here -->
        <li>
          <NuxtLink class="btn btn-ghost justify-start" to="/repl"
            >REPL</NuxtLink
          >
        </li>
        <li>
          <NuxtLink class="btn btn-ghost justify-start" to="/gzip"
            >GZIP</NuxtLink
          >
        </li>
        <li>
          <NuxtLink class="btn btn-ghost justify-start" to="/urlcode"
            >URL编解码</NuxtLink
          >
        </li>
        <li>
          <NuxtLink class="btn btn-ghost justify-start" to="/base64code"
            >Base64编解码</NuxtLink
          >
        </li>
        <li>
          <NuxtLink class="btn btn-ghost justify-start" to="/jsonlint"
            >JSON格式化</NuxtLink
          >
        </li>
        <li>
          <NuxtLink class="btn btn-ghost justify-start" to="/jslint"
            >JS格式化</NuxtLink
          >
        </li>
        <li>
          <NuxtLink class="btn btn-ghost justify-start" to="/csslint"
            >CSS格式化</NuxtLink
          >
        </li>
      </ul>
    </div>
  </div>
</template>
