import { Box } from '../Box';
import { styled } from '../../lib/stitches.config';

export const Flex = styled(Box, {
  display: 'flex',
});

export const FlexCol = styled(Box, {
  flexDirection: 'column',
  display: 'flex',
});
