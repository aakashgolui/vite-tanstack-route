import {
  
  Container as MantineContainer
} from "@mantine/core"
import classes from "./style.module.css"
import type {ContainerProps} from "@mantine/core";


export const Container = ({ classNames, fluid, ...props }: ContainerProps) => (
  <MantineContainer
    {...props}
    fluid={fluid || true}
    classNames={{ ...classes, ...classNames }}
  />
)
