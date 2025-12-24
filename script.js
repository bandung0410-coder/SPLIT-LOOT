function calculateDungeonLoot() {
  const dungeons = document.querySelectorAll('.dungeon');
  let grandTotal = 0;
  let output = "";

  dungeons.forEach((d, i) => {
    let dungeonTotal = 0;
    const chests = d.querySelectorAll('.chest');
    

    chests.forEach(c => {
      const qty = Number(c.querySelector('.qty').value);
      const val = Number(c.querySelector('.value').value);
      dungeonTotal += qty * val;
    });

    grandTotal += dungeonTotal;
    output += `<div><strong>Dungeon ${i + 1}:</strong> ${dungeonTotal.toLocaleString()} Silver</div>`;
  });

  document.getElementById('totalSilver').value = grandTotal;
  document.getElementById('dungeonResult').innerHTML =
    output + `<div><strong>Total AVA Loot:</strong> ${grandTotal.toLocaleString()} Silver</div>`;
}

function addPlayer() {
  const div = document.createElement('div');
  div.className = 'player';
  div.innerHTML = `
    <input placeholder="Nama Player">
    <select>
      <option value="1">DPS</option>
      <option value="1.2">Tank</option>
      <option value="1.2">Healer</option>
      <option value="1.1">Scout</option>
    </select>
  `;
  document.getElementById('players').appendChild(div);
}

function splitLoot() {
  const total = Number(document.getElementById('totalSilver').value);
  const tax = Number(document.getElementById('tax').value);
  const players = document.querySelectorAll('.player');

  const afterTax = total - (total * tax / 100);
  let weightSum = 0;
  players.forEach(p => weightSum += Number(p.children[1].value));

  let result = "";
  players.forEach(p => {
    const name = p.children[0].value || "Unknown";
    const w = Number(p.children[1].value);
    const share = Math.floor((w / weightSum) * afterTax);
    result += `<div>${name} → ${share.toLocaleString()} Silver</div>`;
  });

  document.getElementById('splitResult').innerHTML = result;
}
function addChest(button) {
  const dungeon = button.closest('.dungeon');
  const list = dungeon.querySelector('.chest-list');

  const div = document.createElement('div');
  div.className = 'chest gold';
  div.innerHTML = `
    <span>🟡 Gold Chest</span>
    <input type="number" class="qty" placeholder="Jumlah Chest">
    <input type="number" class="value" placeholder="Silver / Chest">
  `;

  list.appendChild(div);
}
function calculateDungeonLoot() {
  const dungeons = document.querySelectorAll('.dungeon');
  let grandTotal = 0;
  let html = "";

  dungeons.forEach((d, i) => {
    let dungeonTotal = 0;
    const chests = d.querySelectorAll('.chest');

    chests.forEach(c => {
      const qty = Number(c.querySelector('.qty').value);
      const val = Number(c.querySelector('.value').value);
      dungeonTotal += qty * val;
    });

    grandTotal += dungeonTotal;
    html += `<div><strong>Dungeon ${i + 1}:</strong> ${dungeonTotal.toLocaleString()} Silver</div>`;
  });

  document.getElementById('totalSilver').value = grandTotal;
  document.getElementById('dungeonResult').innerHTML =
    html + `<div><strong>Total AVA Loot:</strong> ${grandTotal.toLocaleString()} Silver</div>`;
}
let dungeonCount = 1;

function addDungeon() {
  dungeonCount++;

  const container = document.getElementById('dungeonContainer');

  const div = document.createElement('div');
  div.className = 'dungeon';
  div.innerHTML = `
    <h3>Dungeon ${dungeonCount}</h3>

    <div class="chest-list">
      <div class="chest gold">
        <span>🟡 Gold Chest</span>
        <input type="number" class="qty" placeholder="Jumlah Chest">
        <input type="number" class="value" placeholder="Silver / Chest">
      </div>
    </div>

    <button onclick="addChest(this)">+ Tambah Chest</button>
  `;

  container.appendChild(div);
}
function calculateDungeonLoot() {
  const dungeons = document.querySelectorAll('.dungeon');
  let grandTotal = 0;
  let html = "";

  dungeons.forEach((d, i) => {
    let dungeonTotal = 0;
    const chests = d.querySelectorAll('.chest');

    chests.forEach(c => {
      const qty = Number(c.querySelector('.qty').value);
      const val = Number(c.querySelector('.value').value);
      dungeonTotal += qty * val;
    });

    grandTotal += dungeonTotal;
    html += `
      <div>
        <strong>Dungeon ${i + 1}:</strong>
        ${dungeonTotal.toLocaleString()} Silver
      </div>
    `;
  });

  document.getElementById('totalSilver').value = grandTotal;
  document.getElementById('dungeonResult').innerHTML =
    html + `<div><strong>Total AVA Loot:</strong> ${grandTotal.toLocaleString()} Silver</div>`;
}

