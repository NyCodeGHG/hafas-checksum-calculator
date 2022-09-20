import { createStyles } from '@mantine/core';

export function createContextualStyles(light: string, dark: string) {
  return createStyles((theme) => ({
    contextual: {
      fill: theme.colorScheme === 'dark' ? light : dark,
    }
  }));
}
