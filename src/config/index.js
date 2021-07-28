const config = {
  ipfs: {
    preload: {
      enabled: false
    },
    config: {
      Addresses: {
        Swarm: [
          '/dns4/signal.gordic5.com/tcp/443/wss/p2p-webrtc-star/',
          '/dns6/signal.gordic5.com/tcp/443/wss/p2p-webrtc-star/'
        ]
      }
    }
  }
}

export default config
