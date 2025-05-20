import type { ContainerProps } from "@mantine/core";

import {

  Container as MantineContainer,
} from "@mantine/core";

import classes from "./style.module.css";

export function Container({ classNames, fluid, ...props }: ContainerProps) {
  return (
    <MantineContainer
      {...props}
      fluid={fluid || true}
      classNames={{ ...classes, ...classNames }}
    />
  );
}
