import { Avatar as BaseAvatar } from "@base-ui/react";
import { useMemo } from "react";
import { cn } from "tailwind-variants";

import { AvatarContext } from "./avatar.context";
import { type AvatarVariants, avatarVariants } from "./avatar.variants";
import { useAvatar } from "./use-avatar";

interface AvatarProps extends AvatarVariants, BaseAvatar.Root.Props {}

const Avatar = ({ className, size, ...props }: AvatarProps) => {
	const slots = useMemo(() => avatarVariants({ size }), [size]);

	return (
		<AvatarContext.Provider value={{ slots }}>
			<BaseAvatar.Root className={cn(className, slots.root())} {...props} />
		</AvatarContext.Provider>
	);
};

interface AvatarImageProps extends BaseAvatar.Image.Props {}

const AvatarImage = ({ className, ...props }: AvatarImageProps) => {
	const { slots } = useAvatar();

	return (
		<BaseAvatar.Image className={cn(className, slots.image())} {...props} />
	);
};

interface AvatarFallbackProps extends BaseAvatar.Fallback.Props {}

const AvatarFallback = ({ className, ...props }: AvatarFallbackProps) => {
	const { slots } = useAvatar();

	return (
		<BaseAvatar.Fallback
			className={cn(className, slots.fallback())}
			{...props}
		/>
	);
};

Avatar.Fallback = AvatarFallback;
Avatar.Image = AvatarImage;
Avatar.Root = Avatar;

export default Avatar;
