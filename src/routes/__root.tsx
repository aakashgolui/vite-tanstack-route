import { MantineProvider } from '@mantine/core'
import { Outlet, createRootRoute } from '@tanstack/react-router'
import { PublicLayout } from '@/layouts'

import '@mantine/core/styles.css'

export const Route = createRootRoute({
  component: () => (
    <MantineProvider>
      <PublicLayout>
        <Outlet />
      </PublicLayout>
    </MantineProvider>
  ),
})
