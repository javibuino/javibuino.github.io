document.addEventListener('DOMContentLoaded', function () {
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();

    const lfoSlider = document.getElementById('lfo-slider');
    const envelopeSlider = document.getElementById('envelope-slider');

    // Add sliders for other parameters and get their references

    const playButton = document.getElementById('play-button');

    playButton.addEventListener('click', function () {
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();

        oscillator.type = 'sine'; // Change the waveform as needed

        // Connect the oscillator to the gain node
        oscillator.connect(gainNode);

        // Connect the gain node to the audio context's destination (speakers)
        gainNode.connect(audioContext.destination);

        // Set initial parameter values
        oscillator.frequency.value = 440; // Initial frequency
        oscillator.detune.value = lfoSlider.value * 100; // Adjust detune with LFO

        // Adjust gain with envelope
        const attackTime = 0.1;
        const releaseTime = 0.1;

        gainNode.gain.setValueAtTime(0, audioContext.currentTime);
        gainNode.gain.linearRampToValueAtTime(1, audioContext.currentTime + attackTime);
        gainNode.gain.linearRampToValueAtTime(0, audioContext.currentTime + attackTime + releaseTime);

        // Start and stop the oscillator
        oscillator.start();
        oscillator.stop(audioContext.currentTime + attackTime + releaseTime);
    });
});
