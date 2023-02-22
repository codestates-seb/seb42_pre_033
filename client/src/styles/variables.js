import { css } from 'styled-components';

const variables = css`
  :root {
    --font-size-xss: 12px;
    --line-hieght-xss: 16px;
    --letter-spacing-xss: -0.005em;

    --font-size-xs: 13px;
    --line-hieght-xs: 20px;
    --letter-spacing-xs: -0.01em;

    --font-size-sm: 14px;
    --line-hieght-sm: 24px;
    --letter-spacing-sm: -0.01em;

    --font-size-md: 16px;
    --line-hieght-md: 24px;
    --letter-spacing-md: -0.01em;

    --font-size-lg: 18px;
    --line-hieght-lg: 28px;
    --letter-spacing-lg: -0.02em;

    --font-size-xl: 24px;
    --line-hieght-xl: 34px;
    --letter-spacing-xl: -0.01em;
    --orange-400: hsl(27, 90%, 55%);
    --white: hsl(0, 0%, 100%);
    --black: hsl(210, 8%, 5%);
    --orange: hsl(27, 90%, 55%);
    --yellow: hsl(47, 83%, 91%);
    --green: hsl(140, 40%, 55%);
    --blue: hsl(206, 100%, 40%);
    --powder: hsl(205, 46%, 92%);
    --red: hsl(358, 62%, 52%);
    --black-025: hsl(210, 8%, 97.5%);
    --black-050: hsl(210, 8%, 95%);
    --black-075: hsl(210, 8%, 90%);
    --black-100: hsl(210, 8%, 85%);
    --black-150: hsl(210, 8%, 80%);
    --black-200: hsl(210, 8%, 75%);
    --black-300: hsl(210, 8%, 65%);
    --black-350: hsl(210, 8%, 60%);
    --black-400: hsl(210, 8%, 55%);
    --black-500: hsl(210, 8%, 45%);
    --black-600: hsl(210, 8%, 35%);
    --black-700: hsl(210, 8%, 25%);
    --black-750: hsl(210, 8%, 20%);
    --black-800: hsl(210, 8%, 15%);
    --black-900: hsl(210, 8%, 5%);
    --orange-050: hsl(27, 100%, 97%);
    --orange-100: hsl(27, 95%, 90%);
    --orange-200: hsl(27, 90%, 83%);
    --orange-300: hsl(27, 90%, 70%);
    --orange-400: hsl(27, 90%, 55%);
    --orange-500: hsl(27, 90%, 50%);
    --orange-600: hsl(27, 90%, 45%);
    --orange-700: hsl(27, 90%, 39%);
    --orange-800: hsl(27, 87%, 35%);
    --orange-900: hsl(27, 80%, 30%);
    --green-025: hsl(140, 42%, 95%);
    --green-050: hsl(140, 40%, 90%);
    --green-100: hsl(140, 40%, 85%);
    --green-200: hsl(140, 40%, 75%);
    --green-300: hsl(140, 40%, 65%);
    --green-400: hsl(140, 40%, 55%);
    --green-500: hsl(140, 40%, 47%);
    --green-600: hsl(140, 40%, 40%);
    --green-700: hsl(140, 41%, 31%);
    --green-800: hsl(140, 40%, 27%);
    --green-900: hsl(140, 40%, 20%);
    --blue-050: hsl(206, 100%, 97%);
    --blue-100: hsl(206, 96%, 90%);
    --blue-200: hsl(206, 93%, 83.5%);
    --blue-300: hsl(206, 90%, 69.5%);
    --blue-400: hsl(206, 85%, 57.5%);
    --blue-500: hsl(206, 100%, 52%);
    --blue-600: hsl(206, 100%, 40%);
    --blue-700: hsl(209, 100%, 37.5%);
    --blue-800: hsl(209, 100%, 32%);
    --blue-900: hsl(209, 100%, 26%);
    --powder-050: hsl(205, 47%, 97%);
    --powder-100: hsl(205, 46%, 92%);
    --powder-200: hsl(205, 53%, 88%);
    --powder-300: hsl(205, 57%, 81%);
    --powder-400: hsl(205, 56%, 76%);
    --powder-500: hsl(205, 41%, 63%);
    --powder-600: hsl(205, 36%, 53%);
    --powder-700: hsl(205, 47%, 42%);
    --powder-800: hsl(205, 46%, 32%);
    --powder-900: hsl(205, 46%, 22%);

    --white: hsl(0, 0%, 100%);
    --black: hsl(210, 8%, 5%);
    --orange: hsl(27, 90%, 55%);
    --yellow: hsl(47, 83%, 91%);
    --green: hsl(140, 40%, 55%);
    --blue: hsl(206, 100%, 40%);

    --yellow-050: hsl(47, 87%, 94%);
    --yellow-100: hsl(47, 83%, 91%);
    --yellow-200: hsl(47, 65%, 84%);
    --yellow-300: hsl(47, 69%, 69%);
    --yellow-400: hsl(47, 79%, 58%);
    --yellow-500: hsl(47, 73%, 50%);
    --yellow-600: hsl(47, 76%, 46%);
    --yellow-700: hsl(47, 79%, 40%);
    --yellow-800: hsl(47, 82%, 34%);
    --yellow-900: hsl(47, 84%, 28%);

    --red-025: hsl(358, 80%, 98%);
    --red-050: hsl(358, 75%, 97%);
    --red-100: hsl(358, 76%, 90%);
    --red-200: hsl(358, 74%, 83%);
    --red-300: hsl(358, 70%, 70%);
    --red-400: hsl(358, 68%, 59%);
    --red-500: hsl(358, 62%, 52%);
    --red-600: hsl(358, 62%, 47%);
    --red-700: hsl(358, 64%, 41%);
    --red-800: hsl(358, 64%, 35%);
    --red-900: hsl(358, 67%, 29%);

    --fc-light: hsl(210, 8%, 45%);
    --fc-dark: hsl(210, 8%, 5%);
  }
`;

export default variables;
