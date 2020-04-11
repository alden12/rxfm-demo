import { input, attributes } from 'rxfm';

export const attributesDemo = () => input().pipe(
  attributes({
    type: 'text',
    value: 'A text input!',
  }),
);
