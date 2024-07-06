import { defineStore } from 'pinia';
import { breakpointsTailwind, useBreakpoints, useWindowSize } from '@vueuse/core';
import type { RouteRecordRaw } from 'vue-router';
import { UsageChain } from '@/enums/common.enum';
import { namadaRoutes } from '@/router/modules/namada.routes';
import { FALL_BACK_MENU_ICON } from '@/constants/common.constant';
import { persistenceRoutes } from '@/router/modules/persistence.routes';
import { celestiaRoutes } from '@/router/modules/celestia.routes';
import { sideRoutes } from '@/router/modules/side.routes';
import { routerRoutes } from '@/router/modules/router.routes';

export const useApplicationStore = defineStore('application-store', () => {
  const route = useRoute();
  const breakpoints = useBreakpoints(breakpointsTailwind);
  const windowSize = useWindowSize();
  const menus = ref<AppMenuItem[]>([]);
  const currentChain = computed(() => findCurrentChain(route?.name?.toString() || ''));
  const appDrawerWidth = computed(() => (windowSize.width.value > breakpointsTailwind.md) ? '70rem' : 'full');

  function findCurrentChain(routeName: string) {
    const isNamada = namadaRoutes.find(i => i.name === routeName);
    if (isNamada)
      return UsageChain.NAMADA;

    const isPersistence = persistenceRoutes.find(i => i.name === routeName);
    if (isPersistence)
      return UsageChain.PERSISTENCE;

    const isCelestia = celestiaRoutes.find(i => i.name === routeName);
    if (isCelestia)
      return UsageChain.CELESTIA;

    const isRouter = routerRoutes.find(i => i.name === routeName);
    if (isRouter)
      return UsageChain.ROUTER;

    return UsageChain.SIDE;
  };

  function generateAppRouterMenus() {
    let routesVal: RouteRecordRaw[] = [];

    switch (currentChain.value) {
      case UsageChain.NAMADA:
        routesVal = namadaRoutes;
        break;
      case UsageChain.PERSISTENCE:
        routesVal = persistenceRoutes;
        break;
      case UsageChain.CELESTIA:
        routesVal = celestiaRoutes;
        break;
      case UsageChain.SIDE:
        routesVal = sideRoutes;
        break;
      case UsageChain.ROUTER:
        routesVal = routerRoutes;
        break;
      default:
        break;
    }

    menus.value = routesVal.map(i => ({
      keyName: i?.name?.toString() ?? '',
      title: i?.meta?.title?.toString() ?? 'NAMED',
      icon: i?.meta?.icon?.toString() ?? FALL_BACK_MENU_ICON,
    }));
  };

  watchEffect(() => {
    currentChain.value && generateAppRouterMenus();
  });

  return {
    currentChain,
    appBreakpoints: readonly(breakpoints),
    appDrawerWidth,
    appMenus: readonly(menus),
    generateAppRouterMenus,
  };
});
