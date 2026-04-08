import { ReactNode } from 'react';

export function Nl2br({ text }: { text: string }): ReactNode {
  return text.split('\n').map((line, i, arr) => (
    <span key={i}>
      {line}
      {i < arr.length - 1 && <br />}
    </span>
  ));
}
