import { defineNuxtRouteMiddleware } from '#imports';
import '~/utils/polyfill';

export default defineNuxtRouteMiddleware(async (to, from) => {
  // console.log('auth.global.ts', to, from);
});
