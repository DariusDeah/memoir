import { defaultButton } from '../../default.styles';

const button = {
  color: 'bg-gray-200 text',
  size: `w-full  tracking-wide${defaultButton.size}`,
  space: 'px-4 py-2',
  animation: 'transition-colors duration-200 transform',
  pseudoEffects: defaultButton.pseudoEffects
};
const input = {
  color: 'text-gray-700 bg-white border',
  size: 'w-full rounded-md ',
  space: 'px-4 py-2',
  pseudoEffects: 'dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300',
  layout: 'block',
  animation: '',
};
const label = {
  color: 'text-gray-600',
  size: 'text-sm font-medium',
  space: 'mb-2',
  pseudoEffects: '',
  layout: 'block',
  animation: '',
};
export const AuthStyles = {
  button: `
  ${button.color}
   ${button.size}
    ${button.animation}
     ${button.pseudoEffects} 
     ${button.space}
     `,
  input: `${input.color} ${input.size} ${input.animation} ${input.pseudoEffects} ${input.space} ${input.layout}`,
  label: `
  ${label.color}
   ${label.size} 
   ${label.animation}
   ${label.pseudoEffects}
    ${label.space}
     ${label.layout}
     `
};
