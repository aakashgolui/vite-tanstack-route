import type { TextInputProps } from "@mantine/core";

import {
  TextInput as MantineTextInput,

} from "@mantine/core";

export function TextInput(props: TextInputProps) {
  return <MantineTextInput {...props} />;
}
