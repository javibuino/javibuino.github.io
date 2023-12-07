document.addEventListener("DOMContentLoaded", function () {
  const keyboard = document.getElementById("keyboard");
  const waveTypeSelect = document.getElementById("waveType");
  const volumeSlider = document.getElementById("volume");
  const audioContext = new (window.AudioContext || window.webkitAudioContext)();

  const octave = 1;
  const whiteKeys = ["C", "D", "E", "F", "G", "A", "B"];
  const blackKeys = ["C#", "D#", "F#", "G#", "A#"];

  whiteKeys.forEach(note => createKey("white", note, octave));
  blackKeys.forEach(note => createKey("black", note, octave));

  function createKey(type, note, octave) {
    const key = document.createElement("div");
    key.className = `key ${type}`;
    key.dataset.note = `${note}${octave}`;
    key.addEventListener("mousedown", () => playSound(key.dataset.note));
    keyboard.appendChild(key);
  }

  function playSound(note) {
    const oscillator = audioContext.createOscillator();
    oscillator.type = waveTypeSelect.value;
    oscillator.frequency.setValueAtTime(noteToFrequency(note), audioContext.currentTime);
    
    const gainNode = audioContext.createGain();
    gainNode.connect(audioContext.destination);
    oscillator.connect(gainNode);

    gainNode.gain.setValueAtTime(volumeSlider.value / 100, audioContext.currentTime);

    oscillator.start();
    gainNode.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + 1);

    oscillator.stop(audioContext.currentTime + 1);
  }

  function noteToFrequency(note) {
    const A4 = 440;
    const semitoneRatio = 2 ** (1 / 12);
    const distanceFromA4 = whiteKeys.indexOf(note[0]) + (note[1] - 4) * 7;
    return A4 * (semitoneRatio ** distanceFromA4);
  }

  waveTypeSelect.addEventListener("change", () => {
    // Implementar lógica para cambiar el tipo de onda del sintetizador.
  });

  volumeSlider.addEventListener("input", () => {
    // Implementar lógica para ajustar el volumen del sintetizador.
  });
});
