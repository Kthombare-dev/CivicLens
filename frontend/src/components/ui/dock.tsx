import * as React from "react";
import { cn } from "@/lib/utils";

interface DockProps extends React.HTMLAttributes<HTMLDivElement> {
  iconSize?: number;
  iconMagnification?: number;
  iconDistance?: number;
  direction?: "top" | "bottom" | "middle";
  disableMagnification?: boolean;
}

interface DockIconProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: number;
  magnification?: number;
  distance?: number;
  mouseX?: number;
  mouseY?: number;
}

const Dock = React.forwardRef<HTMLDivElement, DockProps>(
  (
    {
      className,
      children,
      iconSize = 40,
      iconMagnification = 60,
      iconDistance = 140,
      direction = "top",
      disableMagnification = false,
      ...props
    },
    ref
  ) => {
    const [mouseX, setMouseX] = React.useState<number | null>(null);
    const [mouseY, setMouseY] = React.useState<number | null>(null);
    const dockRef = React.useRef<HTMLDivElement>(null);

    React.useEffect(() => {
      if (disableMagnification) return;

      const handleMouseMove = (e: MouseEvent) => {
        if (dockRef.current) {
          const rect = dockRef.current.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          setMouseX(x);
          setMouseY(y);
        }
      };

      const handleMouseLeave = () => {
        setMouseX(null);
        setMouseY(null);
      };

      const dock = dockRef.current;
      if (dock) {
        dock.addEventListener("mousemove", handleMouseMove);
        dock.addEventListener("mouseleave", handleMouseLeave);
      }

      return () => {
        if (dock) {
          dock.removeEventListener("mousemove", handleMouseMove);
          dock.removeEventListener("mouseleave", handleMouseLeave);
        }
      };
    }, [disableMagnification]);

    return (
      <div
        ref={(node) => {
          if (typeof ref === "function") {
            ref(node);
          } else if (ref) {
            (ref as React.MutableRefObject<HTMLDivElement | null>).current = node;
          }
          dockRef.current = node;
        }}
        data-dock-container
        className={cn(
          "flex items-center justify-center gap-2 px-4 py-3",
          direction === "top" && "rounded-b-2xl",
          direction === "bottom" && "rounded-t-2xl",
          direction === "middle" && "rounded-2xl",
          className
        )}
        {...props}
      >
        {React.Children.map(children, (child) => {
          if (React.isValidElement<DockIconProps>(child)) {
            return React.cloneElement(child, {
              size: iconSize,
              magnification: iconMagnification,
              distance: iconDistance,
              mouseX: mouseX ?? undefined,
              mouseY: mouseY ?? undefined,
            });
          }
          return child;
        })}
      </div>
    );
  }
);
Dock.displayName = "Dock";

const DockIcon = React.forwardRef<HTMLDivElement, DockIconProps>(
  (
    {
      className,
      children,
      size = 40,
      magnification = 60,
      distance = 140,
      mouseX,
      mouseY,
      ...props
    },
    ref
  ) => {
    const iconRef = React.useRef<HTMLDivElement>(null);
    const [scale, setScale] = React.useState(1);

    React.useEffect(() => {
      if (mouseX === undefined || mouseY === undefined || !iconRef.current) {
        setScale(1);
        return;
      }

      // Get the dock container to get relative positions
      const dockContainer = iconRef.current.closest('[data-dock-container]') as HTMLElement;
      if (!dockContainer) return;
      
      const dockRect = dockContainer.getBoundingClientRect();
      const iconRect = iconRef.current.getBoundingClientRect();
      
      // Calculate icon center relative to dock container
      const iconCenterX = iconRect.left + iconRect.width / 2 - dockRect.left;
      const iconCenterY = iconRect.top + iconRect.height / 2 - dockRect.top;

      const distanceFromCursor = Math.sqrt(
        Math.pow(mouseX - iconCenterX, 2) +
        Math.pow(mouseY - iconCenterY, 2)
      );

      if (distanceFromCursor < distance) {
        const scaleValue = 1 + (magnification / 100) * (1 - distanceFromCursor / distance);
        setScale(Math.min(scaleValue, 1 + magnification / 100));
      } else {
        setScale(1);
      }
    }, [mouseX, mouseY, distance, magnification]);

    return (
      <div
        ref={(node) => {
          if (typeof ref === "function") {
            ref(node);
          } else if (ref) {
            (ref as React.MutableRefObject<HTMLDivElement | null>).current = node;
          }
          iconRef.current = node;
        }}
        className={cn(
          "flex items-center justify-center transition-transform duration-200 ease-out cursor-pointer",
          className
        )}
        style={{
          transform: `scale(${scale})`,
          width: `${size}px`,
          height: `${size}px`,
          transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
        }}
        {...props}
      >
        {children}
      </div>
    );
  }
);
DockIcon.displayName = "DockIcon";

export { Dock, DockIcon };

