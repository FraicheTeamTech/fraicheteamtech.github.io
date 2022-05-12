const client = new Ably.Realtime('wVMKoQ.eYXG7w:vsDp6yDrZswedhKn9kICLaaLXhQEeVgQz4rMkMM5Gwk');

client.connection.on('connected', () => {
  console.log('connected');
});

client.connection.on('failed', () => {
  console.error('connect failed');
});

const buff2str = (buff) => new TextDecoder('utf-8').decode(buff);

const pings = {};
const latches = {};
const relays = {};

client.channels.get('lock/ping').subscribe((msg) => {
  const lock_id = buff2str(msg.data);
  console.log('[lock/ping]', lock_id); //, msg);

  if (!pings[lock_id]) {
    console.log(`new lock_id, subscribing to "lock/${lock_id}/latch" and "lock/${lock_id}/relay"`);
    client.channels.get(`lock/${lock_id}/latch`).subscribe((msg) => {
      const state = buff2str(msg.data);
      console.log(`[lock/${lock_id}/latch]`, state); //, msg);
      latches[lock_id] = state;
    });

    relays[lock_id] = client.channels.get(`lock/${lock_id}/relay`);
  }

  pings[lock_id] = msg.timestamp;
});

const panels = document.querySelector('.panels');

setInterval(() => {
  Object.keys(pings).forEach((lock_id) => {
    let panel = panels.querySelector(`.panel[data-lock-id="${lock_id}"]`);

    if (!panel) {
      panel = document.createElement('div');
      panel.className = 'panel';
      panel.setAttribute('data-lock-id', lock_id);
      panel.innerHTML = `
        <h1>LOCK ${lock_id}</h1>
        <p>Last health ping: <code data-lock-id="${lock_id}" data-ping-timestamp></code></p>
        <p>Current latch state: <code data-lock-id="${lock_id}" data-latch-state>OPENED</code></p>
        <p>
            Set lock state:
            <button data-lock-id="${lock_id}" data-set-relay-state="LOCK">LOCK</button>
            <button data-lock-id="${lock_id}" data-set-relay-state="UNLOCK">UNLOCK</button>
        </p>
        <p>
            Run burn-in cycle: <button data-lock-id="${lock_id}" data-start-burn-in>START</button>
        </p>
      `;

      panels.appendChild(panel);

      panels.querySelectorAll(`.panel[data-lock-id="${lock_id}"] button[data-set-relay-state]`).forEach((button) => {
        button.addEventListener('click', (e) => {
          relays[lock_id].publish('', e.target.dataset.setRelayState);
        });
      });

      panels
        .querySelector(`.panel[data-lock-id="${lock_id}"] button[data-start-burn-in]`)
        .addEventListener('click', (e) => {
          setInterval(() => {
            relays[lock_id].publish('', 'UNLOCK');
          }, 5100);
        });
    }

    panels.querySelector(`[data-lock-id="${lock_id}"][data-ping-timestamp]`).innerText = pings[lock_id];
    panels.querySelector(`[data-lock-id="${lock_id}"][data-latch-state]`).innerText = latches[lock_id] || 'UNKNOWN';
  });
}, 250);
