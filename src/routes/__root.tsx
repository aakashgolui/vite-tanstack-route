import { MantineProvider } from "@mantine/core";
import { NavigationProgress, nprogress } from "@mantine/nprogress";
import { createRootRoute, Outlet, useRouter } from "@tanstack/react-router";
import { useEffect } from "react";

import { PublicLayout } from "@/layouts";

import "@mantine/core/styles.css";
import "@mantine/nprogress/styles.css";

import { theme } from "@/theme";

function RootComponent() {
  const router = useRouter();

  useEffect(() => {
    const unsubStart = router.subscribe("onBeforeLoad", () => nprogress.start());
    const unsubEnd = router.subscribe("onLoad", () => nprogress.complete());

    return () => {
      unsubStart();
      unsubEnd();
    };
  }, [router]);

  return (
    <MantineProvider theme={theme}>
      <NavigationProgress />
      <PublicLayout>
        <Outlet />
      </PublicLayout>
    </MantineProvider>
  );
}

export const Route = createRootRoute({
  component: RootComponent,
});
