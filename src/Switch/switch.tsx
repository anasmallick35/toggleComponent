import * as React from "react";
import * as SwitchPrimitive from "@radix-ui/react-switch";
import clsx from "clsx";
import "../index.css";

export interface SwitchProps
  extends React.ComponentPropsWithoutRef<typeof SwitchPrimitive.Root> {
  isSelected?: boolean;
  defaultSelected?: boolean;
  isDisabled?: boolean;
  isReadOnly?: boolean;
  size?: "sm" | "md";
  label?: string;
  description?: string;
  onValueChange?: (selected: boolean) => void;
  thumbClassName?: string;
}


const sizeStyles = {
    sm: {
        root: "w-[28px] h-[14px] rounded-[12px] p-[2px] relative",
        thumb: "w-[10px] h-[10px] left-[2px] data-[state=checked]:translate-x-[12px]",
      },      
    md: {
        root: "w-[44px] h-[24px] rounded-[12px] p-[2px] relative",
        thumb: "w-[20px] h-[20px] left-[2px] data-[state=checked]:translate-x-[20px]",
      },
      
  };
  

export const Switch = React.forwardRef<HTMLButtonElement, SwitchProps>(
  (
    {
      isSelected,
      defaultSelected,
      isDisabled,
      isReadOnly,
      size = "md",
      label,
      description,
      onValueChange,
      className,
      thumbClassName,
      ...props
    },
    ref
  ) => {
    const styles = sizeStyles[size];

    return (
      <label className="inline-flex items-start gap-3 cursor-pointer font-['Roboto']">
        <SwitchPrimitive.Root
          ref={ref}
          checked={isSelected}
          defaultChecked={defaultSelected}
          disabled={isDisabled || isReadOnly}
          onCheckedChange={(val) => {
            if (!isReadOnly) onValueChange?.(val);
          }}
          {...props}
          data-disabled={isDisabled || undefined}
          data-readonly={isReadOnly || undefined}
          className={clsx(
            "group relative shrink-0 transition-colors duration-200 outline-none focus-visible:outline-none",
            styles.root,
       
            "bg-[#E4E4E7] data-[state=checked]:bg-[#1D4ED8]",
         
            "hover:bg-[#D4D4D8] data-[state=checked]:hover:bg-[#1E40AF]",
           
            "focus-visible:shadow-[0_0_0_4px_#1D4ED8,0_0_0_2px_#FFFFFF]",
       
            isDisabled && "opacity-50 cursor-not-allowed",
            isReadOnly && "cursor-not-allowed",
            className
          )}
        >
          <SwitchPrimitive.Thumb
            className={clsx(
              "pointer-events-none rounded-full bg-white transition-transform duration-200 shadow-[0px_1px_2px_0px_#0A0D120F,0px_1px_3px_0px_#0A0D121A]",
              "absolute top-1/2 -translate-y-1/2",
              styles.thumb,
              thumbClassName
            )}
          />
        </SwitchPrimitive.Root>

        {(label || description) && (
          <div className="flex flex-col">
            {label && (
              <span className="w-[92px] h-[20px] text-[#3F3F46] text-[14px] leading-[20px]">
                {label}
              </span>
            )}
            {description && (
              <span className="w-[308px] h-[20px] text-[#52525B] text-[14px]  leading-[20px]">
                {description}
              </span>
            )}
          </div>
        )}
      </label>
    );
  }
);

Switch.displayName = "Switch";
