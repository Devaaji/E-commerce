import type { ReactElement } from 'react';

import { Box, Flex, IconButton } from '@chakra-ui/react';

type IconButtonWithBadgeProps = {
  icon: ReactElement;
  badge: any;
  label: string;
};

const IconButtonWithBadge = ({
  icon,
  badge,
  label,
}: IconButtonWithBadgeProps) => {
  return (
    <Box position="relative">
      <IconButton
        variant="ghost"
        fontSize="xl"
        icon={icon}
        rounded="full"
        aria-label={label}
      />
      <Flex
        as="span"
        bg="vocasia-main"
        color="white"
        fontSize="xx-small"
        rounded="full"
        w="4"
        h="4"
        justifyContent="center"
        alignItems="center"
        position="absolute"
        top="4px"
        right="4px"
        pointerEvents="none"
        zIndex="docked"
      >
        {badge}
      </Flex>
    </Box>
  );
};

export default IconButtonWithBadge;
