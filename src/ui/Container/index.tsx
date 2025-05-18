import {
  Container as MantineContainer,
  type ContainerProps,
} from "@mantine/core"

import classes from "./style.module.css"

export const Container = ({ classNames, fluid, ...props }: ContainerProps) => (
  <MantineContainer
    {...props}
    fluid={fluid || true}
    classNames={{ ...classes, ...classNames }}
  />
)
