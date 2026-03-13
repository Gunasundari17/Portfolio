document.addEventListener('DOMContentLoaded', () => {


    // Audio Player Logic
    const audio = document.getElementById('mainAudio');
    const playerBar = document.getElementById('audioPlayerBar');
    const playBtns = document.querySelectorAll('.play-btn');
    const ctrlPlayBtn = document.getElementById('ctrlPlay');
    const ctrlPlayIcon = ctrlPlayBtn.querySelector('i');
    
    // Player UI elements
    const playerTitle = document.getElementById('playerTitle');
    const progressBar = document.querySelector('.progress-bar');
    const progress = document.getElementById('progress');
    const currentTimeEl = document.getElementById('currentTime');
    const totalTimeEl = document.getElementById('totalTime');
    const volumeSlider = document.getElementById('volumeSlider');
    const closePlayerBtn = document.getElementById('closePlayer');

    let currentItem = null;

    // Format time (seconds to M:SS)
    const formatTime = (time) => {
        if (isNaN(time)) return "0:00";
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes}:${seconds.toString().padStart(2, '0')}`;
    };

    // Initialize audio metadata
    audio.addEventListener('loadedmetadata', () => {
        totalTimeEl.textContent = formatTime(audio.duration);
    });

    // Play/Pause function
    const togglePlay = () => {
        if (audio.paused) {
            audio.play();
            ctrlPlayIcon.classList.replace('bx-play', 'bx-pause');
            if (currentItem) {
                const itemPlayIcon = currentItem.querySelector('.play-btn i');
                itemPlayIcon.classList.replace('bx-play', 'bx-pause');
                currentItem.classList.add('playing');
            }
        } else {
            audio.pause();
            ctrlPlayIcon.classList.replace('bx-pause', 'bx-play');
            if (currentItem) {
                const itemPlayIcon = currentItem.querySelector('.play-btn i');
                itemPlayIcon.classList.replace('bx-pause', 'bx-play');
                currentItem.classList.remove('playing');
            }
        }
    };

    const setupPlayButton = (btn) => {
        btn.addEventListener('click', (e) => {
            const item = e.target.closest('.demo-item');
            const audioSrc = item.getAttribute('data-src');
            const title = item.querySelector('.demo-title').textContent;

            // If clicking the currently playing item
            if (currentItem === item) {
                togglePlay();
                return;
            }

            // Reset previous item UI
            if (currentItem) {
                const prevIcon = currentItem.querySelector('.play-btn i');
                prevIcon.classList.replace('bx-pause', 'bx-play');
                currentItem.classList.remove('playing');
            }

            // Setup new item
            currentItem = item;
            audio.src = audioSrc;
            playerTitle.textContent = title;
            
            // Show player bar
            playerBar.classList.remove('hidden');

            // Play
            audio.play();
            const currentIcon = currentItem.querySelector('.play-btn i');
            currentIcon.classList.replace('bx-play', 'bx-pause');
            ctrlPlayIcon.classList.replace('bx-play', 'bx-pause');
            currentItem.classList.add('playing');
        });
    };

    // Handle individual demo play buttons
    playBtns.forEach(btn => {
        setupPlayButton(btn);
    });

    // Handle main control play/pause
    ctrlPlayBtn.addEventListener('click', togglePlay);

    // Update progress bar as audio plays
    audio.addEventListener('timeupdate', () => {
        const { currentTime, duration } = audio;
        const progressPercent = (currentTime / duration) * 100;
        progress.style.width = `${progressPercent}%`;
        currentTimeEl.textContent = formatTime(currentTime);
    });

    // Click on progress bar to seek
    progressBar.addEventListener('click', (e) => {
        const width = progressBar.clientWidth;
        const clickX = e.offsetX;
        const duration = audio.duration;
        audio.currentTime = (clickX / width) * duration;
    });

    // Handle audio end
    audio.addEventListener('ended', () => {
        ctrlPlayIcon.classList.replace('bx-pause', 'bx-play');
        if (currentItem) {
            const itemPlayIcon = currentItem.querySelector('.play-btn i');
            itemPlayIcon.classList.replace('bx-pause', 'bx-play');
            currentItem.classList.remove('playing');
        }
        progress.style.width = '0%';
        currentTimeEl.textContent = '0:00';
    });

    // Volume control
    volumeSlider.addEventListener('input', (e) => {
        audio.volume = e.target.value;
    });

    // Close player
    closePlayerBtn.addEventListener('click', () => {
        audio.pause();
        playerBar.classList.add('hidden');
        if (currentItem) {
            const itemPlayIcon = currentItem.querySelector('.play-btn i');
            itemPlayIcon.classList.replace('bx-pause', 'bx-play');
            currentItem.classList.remove('playing');
            currentItem = null;
        }
    });



    // Share Button Mock
    const shareBtn = document.getElementById('shareBtn');
    if(shareBtn) {
        shareBtn.addEventListener('click', () => {
            navigator.clipboard.writeText(window.location.href).then(() => {
                alert('Portfolio link copied to clipboard!');
            });
        });
    }
});
