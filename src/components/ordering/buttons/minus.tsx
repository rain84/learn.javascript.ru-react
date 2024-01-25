import { MinusCircledIcon } from '@radix-ui/react-icons'
import { Button, type TProps } from './button'

export const Minus = (props: Omit<TProps, 'Icon'>) => (
  <Button {...props} Icon={MinusCircledIcon} />
)
