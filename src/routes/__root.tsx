import { MantineProvider } from "@mantine/core";
import { createRootRoute, Outlet } from "@tanstack/react-router";

import { PublicLayout } from "@/layouts";

import "@mantine/core/styles.css";

import { theme } from "@/theme";

export const Route = createRootRoute({
  component: () => (
    <MantineProvider theme={theme}>
      <PublicLayout>
        <Outlet />
      </PublicLayout>
    </MantineProvider>
  ),
});
