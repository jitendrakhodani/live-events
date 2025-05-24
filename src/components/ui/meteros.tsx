
import { cn } from "@/lib/utils";
import { motion } from "motion/react";


export const Meteors = ({
  number,
  className,
}: {
  number?: number;
  className?: string;
}) => {
  const meteors = new Array(number || 20).fill(true);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {meteors.map((el, idx) => {
        const meteorCount = number || 20;
        // Calculate position to evenly distribute meteors across container width
        const position = idx * (1400 / meteorCount) - 400; // Spread across 800px range, centered

        return (
          <span
            key={"meteor" + idx}
            className={cn(
              "absolute h-0.5 w-0.5 rotate-[90deg] rounded-[9999px] bg-[#261f87] shadow-[0_0_0_1px_#ffffff10]",
              "before:absolute before:top-1/2 before:h-[1px] before:w-[100px] before:-translate-y-[90%] before:transform before:bg-gradient-to-r before:from-[#928ce4] before:to-transparent before:content-['']",
              className,
            )}
            style={{
              top: "-40px",
              left: position + "px",
              animation: "meteor 15s linear infinite",
              animationDelay: Math.random() * 2 + "s",
              animationDuration: Math.floor(Math.random() * (10 - 5) + 5) + "s",
            }}
          ></span>
        );
      })}
    </motion.div>
  );
};
