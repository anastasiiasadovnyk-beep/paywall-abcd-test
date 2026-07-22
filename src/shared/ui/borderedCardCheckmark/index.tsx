import type { ComponentProps, FC } from 'react';
import { cn } from '@universe-forma/ui-pes';

import { CheckIcon } from '../icons';

interface IBorderedCardCheckmarkProps extends ComponentProps<'div'> {
  isSelected: boolean;
  iconPlacement?: 'left-top' | 'right-top';
}

/**
 * Selectable card with a primary outline and a corner checkmark tab —
 * the selection pattern used by PDFLeader plan cards.
 */
export const BorderedCardCheckmark: FC<IBorderedCardCheckmarkProps> = ({
  isSelected,
  children,
  iconPlacement = 'left-top',
  className,
  ...restProps
}) => {
  return (
    <div
      data-selected={isSelected}
      className={cn(
        'flex group py-6 px-4 gap-2 items-center self-stretch bg-common-white rounded-3 cursor-pointer relative m-0.5',
        {
          'outline-2 outline-[color:var(--color-divider)]': !isSelected,
          'outline-4 outline-primary': isSelected,
        },
        className
      )}
      {...restProps}
    >
      {isSelected && (
        <div
          className={cn('absolute flex justify-center items-center size-10 bg-primary', {
            'top-[-2px] left-[-2px] rounded-tl-3 rounded-br-3': iconPlacement === 'left-top',
            'top-[-2px] right-[-2px] rounded-tr-3 rounded-bl-3': iconPlacement === 'right-top',
          })}
        >
          <CheckIcon className="size-4 fill-primary-contrast-text" />
        </div>
      )}
      {children}
    </div>
  );
};
