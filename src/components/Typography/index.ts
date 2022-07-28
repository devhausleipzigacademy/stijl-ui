import { styled } from '../../lib/stitches.config';

export const Paragraph = styled('p', {});

export const Text = styled('span', {});

export const VisuallyHidden = styled('p', {
  border: 0,
  clip: 'rect(0 0 0 0)',
  height: 'auto',
  margin: 0,
  overflow: 'hidden',
  padding: '0',
  position: 'absolute',
  width: '1px',
  whiteSpace: 'nowrap',
});
