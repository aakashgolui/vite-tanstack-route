import { AppShell as MantineAppShell } from '@mantine/core'
import type { AppShellProps } from '@mantine/core'

export const AppShell = (props: AppShellProps) => <MantineAppShell {...props} />

AppShell.Main = MantineAppShell.Main
AppShell.Header = MantineAppShell.Header
