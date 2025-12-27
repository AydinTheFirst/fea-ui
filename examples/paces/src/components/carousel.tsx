import { cn } from "@fea-ui/react";
import {
	type MotionValue,
	motion,
	useScroll,
	useTransform,
} from "framer-motion";
import { useRef } from "react";

interface StickyScrollCarouselProps extends React.ComponentProps<"section"> {
	images: string[][];
	heightMultiplier?: number; // opsiyonel
}

function RowScroller({
	row,
	rowIndex,
	scrollYProgress,
}: {
	row: string[];
	rowIndex: number;
	scrollYProgress: MotionValue<number>;
}) {
	const isRightToLeft = rowIndex % 2 === 0;
	const x = useTransform(
		scrollYProgress,
		[0, 1],
		isRightToLeft ? ["40%", "-40%"] : ["-40%", "40%"],
	);

	return (
		<motion.div className="flex gap-6 px-10" style={{ x }}>
			{row.map((img) => (
				<img
					alt="I"
					className="h-50 w-75 shrink-0 rounded-xl object-cover"
					key={img}
					src={img}
				/>
			))}
		</motion.div>
	);
}

export function StickyScrollCarousel({
	images,
	heightMultiplier = 3,
	className,
	...props
}: StickyScrollCarouselProps) {
	const sectionRef = useRef<HTMLDivElement>(null);

	const { scrollYProgress } = useScroll({
		offset: ["start start", "end end"],
		target: sectionRef,
	});

	return (
		<section
			className={cn("relative", className)}
			ref={sectionRef}
			style={{ height: `${heightMultiplier * 100}vh` }}
			{...props}
		>
			<div className="sticky top-0 flex h-screen flex-col justify-center gap-12 overflow-hidden">
				{images.map((row, rowIndex) => (
					<RowScroller
						key={row.join("|") || String(rowIndex)}
						row={row}
						rowIndex={rowIndex}
						scrollYProgress={scrollYProgress}
					/>
				))}
			</div>
		</section>
	);
}
