import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'
import { Suspense, type FC } from 'react'
import { Header } from '@/components'
import { AppShell } from '@/ui/AppShell'

export const PublicLayout: FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <AppShell>
      <AppShell.Header>
        <Header />
      </AppShell.Header>

      <AppShell.Main>
        {children}

        <footer></footer>

        <Suspense>
          <TanStackRouterDevtools />
        </Suspense>
      </AppShell.Main>
    </AppShell>
  )
}
