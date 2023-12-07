document.addEventListener("DOMContentLoaded", function() {
  const keyboard = document.getElementById("keyboard");
  const waveTypeSelect = document.getElementById("waveType");
  const volumeSlider = document.getElementById("volume");

  const octaves = 2;
  const whiteKeys = ["C", "D", "E", "F", "G", "A", "B"];
  const blackKeys = ["C#", "D#", "F#", "G#", "A#"];

  for (let i = 0; i < octaves; i++) {
    whiteKeys.forEach(note => createKey("white", note, i));
    blackKeys.forEach(note => createKey("black", note, i));
  }

  function createKey(type, note, octave) {
    const key = document.createElement("div");
    key.className = `key ${type}`;
    key.dataset.note = `${note}${octave}`;
    key.addEventListener("click", () => playSound(key.dataset.note));
    keyboard.appendChild(key);
  }

  function playSound(note) {
    // Implementar lógica de reproducción de sonido según la nota seleccionada.
    // Puedes usar librerías como Tone.js para simplificar esto.
  }

  waveTypeSelect.addEventListener("change", () => {
    // Implementar lógica para cambiar el tipo de onda del sintetizador.
  });

  volumeSlider.addEventListener("input", () => {
    // Implementar lógica para ajustar el volumen del sintetizador.
  });
});
