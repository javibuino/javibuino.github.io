document.addEventListener('DOMContentLoaded', function () {
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();

    const keys = document.querySelectorAll('.key');
    const playButton = document.getElementById('play-button');

    playButton.addEventListener('click', function () {
        keys.forEach(key => {
            key.addEventListener('click', function () {
                const note = this.getAttribute('data-note');
                playSound(note);
            });
        });
    });

    function playSound(note) {
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();

        oscillator.type = 'sine'; // Change the waveform as needed

        // Connect the oscillator to the gain node
        oscillator.connect(gainNode);

        // Connect the gain node to the audio context's destination (speakers)
        gainNode.connect(audioContext.destination);

        // Set initial parameter values
        oscillator.frequency.value = getFrequency(note);

        // Adjust gain with envelope
        const attackTime = 0.1;
        const releaseTime = 0.1;

        gainNode.gain.setValueAtTime(0, audioContext.currentTime);
        gainNode.gain.linearRampToValueAtTime(1, audioContext.currentTime + attackTime);
        gainNode.gain.linearRampToValueAtTime(0, audioContext.currentTime + attackTime + releaseTime);

        // Start and stop the oscillator
        oscillator.start();
        oscillator.stop(audioContext.currentTime + attackTime + releaseTime);
    }

    function getFrequency(note) {
        const notes = {
            'C': 261.63,
            'C#': 277.18,
            'D': 293.66,
            'D#': 311.13,
            'E': 329.63,
            'F': 349.23,
            'F#': 369.99,
            'G': 392.00,
            'G#': 415.30,
            'A': 440.00,
            'A#': 466.16,
            'B': 493.88,
        };

        return notes[note] || 0;
    }
});
