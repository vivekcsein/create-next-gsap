import * as React from "react";

import { Button as ShadcnButton } from "@/components/ui/shadcn/button";

type ButtonProps = React.ComponentProps<typeof ShadcnButton>;

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <ShadcnButton ref={ref} className={className} {...props}>
        {children}
      </ShadcnButton>
    );
  },
);

Button.displayName = "Button";

export default Button;
