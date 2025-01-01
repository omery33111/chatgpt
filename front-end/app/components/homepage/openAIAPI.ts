export function createWebSocketConnection(url: string): WebSocket {
    const socket = new WebSocket(url);

    socket.onopen = () => {
        console.log('WebSocket connection established');
    };

    socket.onclose = (event) => {
        console.log('WebSocket connection closed', event);
    };

    socket.onerror = (error) => {
        console.error('WebSocket error:', error);
    };

    return socket;
}

export function sendMessage(socket: WebSocket, message: string) {
    if (socket.readyState === WebSocket.OPEN) {
        socket.send(message);
    } else {
        console.error('WebSocket is not open');
    }
}

export function onMessage(socket: WebSocket, callback: (message: string) => void) {
    socket.onmessage = (event) => {
        callback(event.data);
    };
}