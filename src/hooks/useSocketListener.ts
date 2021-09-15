import { SOCKET_URL } from 'constants/common';
import { useEffect } from 'react';
import { io } from 'socket.io-client';
import { CotationWSData } from 'useCases';

const socket = io(SOCKET_URL, {
  forceNew: true,
  transports: ['websocket'],
});

export const useSocketListener = (
  event: string,
  callback: (data: CotationWSData[]) => void,
) => {
  useEffect(() => {
    socket.on(event, callback);
  }, [event, callback]);
};
