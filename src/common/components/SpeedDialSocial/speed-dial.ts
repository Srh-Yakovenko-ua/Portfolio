import { keyframes } from '@mui/system'

const pulse = keyframes`
  0% {
    transform: scale(0.95);
    box-shadow: 0 0 0 0 rgba(255, 82, 82, 0.7);
  }

  70% {
    transform: scale(1);
    box-shadow: 0 0 0 10px rgba(255, 82, 82, 0);
  }

  100% {
    transform: scale(0.95);
    box-shadow: 0 0 0 0 rgba(255, 82, 82, 0);
  }
`
export const speedDial = {
  position: 'fixed',
  bottom: 15,
  right: 15,
  zIndex: 1,
  '& .MuiSpeedDial-actions': {
    gap: '12px',
  },
  '& .MuiSpeedDial-fab': {
    animation: `${pulse} 2s infinite`,
    background: '#EB274B',
    padding: '10px',
    '&:hover': {
      background: '#EB274B',
      padding: '10px',
    },
  },
}
