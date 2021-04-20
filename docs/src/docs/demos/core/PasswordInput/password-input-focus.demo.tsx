import React from 'react';
import { PasswordInput } from '@mantine/core';
import { useMantineTheme } from '@mantine/theme';
import CodeDemo from '../../../../components/CodeDemo/CodeDemo';

const code = `import React from 'react';
import { Password } from '@mantine/core';

export function PasswordDemo() {
  return (
    <>
      <PasswordInput
        label="Focus will be on button"
        placeholder="Focus will be on button"
      />
      
      <PasswordInput
        focusInputOnToggle
        label="Focus will move to input"
        placeholder="Focus will move to input"
      />
    </>
  );
}`;

export function PasswordFocusDemo() {
  const theme = useMantineTheme();
  return (
    <CodeDemo
      code={code}
      demoBackground={theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white}
      language="tsx"
    >
      <div style={{ width: 360, margin: 'auto' }}>
        <PasswordInput label="Focus will be on button" placeholder="Focus will be on button" />

        <PasswordInput
          focusInputOnToggle
          label="Focus will move to input"
          placeholder="Focus will move to input"
          style={{ marginTop: 15 }}
        />
      </div>
    </CodeDemo>
  );
}
