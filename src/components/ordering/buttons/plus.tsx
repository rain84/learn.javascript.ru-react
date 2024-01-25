import { PlusCircledIcon } from '@radix-ui/react-icons'
import { Button, type TProps } from './button'

export const Plus = (props: Omit<TProps, 'Icon'>) => (
  <Button {...props} Icon={PlusCircledIcon} />
)
