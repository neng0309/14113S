// ฟังก์ชันเริ่มต้นแอปพลิเคชัน
function initApp() {
  const roomId = generateRoomId();
  const roomDisplay = document.getElementById('room');
  const controlsDisplay = document.getElementById('controls');
  const playlistDisplay = document.getElementById('playlist');
  
  // แสดงหมายเลขห้อง
  roomDisplay.innerHTML = `<p>หมายเลขห้อง: ${roomId}</p>`;
  
  // แสดงฟอร์มสำหรับเพิ่มเพลง
  controlsDisplay.innerHTML = `
    <form id="addSongForm">
      <input type="text" id="songInput" placeholder="URL เพลง">
      <button type="submit">เพิ่มเพลง</button>
    </form>
  `;

  const addSongForm = document.getElementById('addSongForm');
  const songInput = document.getElementById('songInput');
  
  // เมื่อกดปุ่มเพิ่มเพลง
  addSongForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const songUrl = songInput.value.trim();
    if (songUrl !== '') {
      // เพิ่มเพลงลงในรายการเพลง
      addSongToPlaylist(songUrl);
      songInput.value = '';
    }
  });

  // เชื่อมต่อกับห้อง
  joinRoom(roomId);
}

// สร้างฟังก์ชันสำหรับสร้างหมายเลขห้องสุ่ม
function generateRoomId() {
  // สร้างหมายเลขสุ่มที่มีความยาว 6 ตัวอักษร
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let roomId = '';
  for (let i = 0; i < 6; i++) {
    roomId += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return roomId;
}

// ฟังก์ชันเชื่อมต่อกับห้อง
function joinRoom(roomId) {
  // แสดงรายการเพลงจากห้อง
  // เรียกข้อมูลจากฐานข้อมูลหรือ API ที่เก็บรายการเพลงของห้องด้วยรหัสห้อง
}

// ฟังก์ชันเพิ่มเพลงลงในรายการเพลง
function addSongToPlaylist(songUrl) {
  const playlistDisplay = document.getElementById('playlist');
  const listItem = document.createElement('li');
  listItem.textContent = songUrl;
  playlistDisplay.appendChild(listItem);
}

// เรียกใช้ฟังก์ชันเมื่อเริ่มต้นแอปพลิเคชัน
initApp();
