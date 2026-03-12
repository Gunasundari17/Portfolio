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

    // Modal Logic (Simulated Upload)
    const uploadBtn = document.getElementById('uploadDemoBtn');
    const uploadModal = document.getElementById('uploadModal');
    const closeUploadBtn = document.getElementById('closeUpload');

    if(uploadBtn && uploadModal && closeUploadBtn) {
        uploadBtn.addEventListener('click', () => {
            uploadModal.classList.remove('hidden');
        });

        closeUploadBtn.addEventListener('click', () => {
            uploadModal.classList.add('hidden');
        });

        // Close on outside click
        uploadModal.addEventListener('click', (e) => {
            if (e.target === uploadModal) {
                uploadModal.classList.add('hidden');
            }
        });

        // Implement actual upload logic
        const browseBtn = document.getElementById('browseBtn');
        const demoFile = document.getElementById('demoFile');
        const fileNameHint = document.getElementById('fileNameHint');
        const saveDemoBtn = document.getElementById('saveDemoBtn');
        const demoTitleInput = document.getElementById('demoTitle');
        const demoProject = document.getElementById('demoProject');
        const uploadArea = document.getElementById('uploadArea');
        const demoList = document.querySelector('.demo-list');

        browseBtn.addEventListener('click', () => {
            demoFile.click();
        });

        uploadArea.addEventListener('click', (e) => {
            if (e.target !== browseBtn && e.target !== demoFile) {
                demoFile.click();
            }
        });

        demoFile.addEventListener('change', () => {
            if (demoFile.files.length > 0) {
                fileNameHint.textContent = `Selected: ${demoFile.files[0].name}`;
                fileNameHint.style.color = 'var(--primary)';
            } else {
                fileNameHint.textContent = 'Supported formats: MP3, WAV (Max 50MB)';
                fileNameHint.style.color = 'var(--text-muted)';
            }
        });

        saveDemoBtn.addEventListener('click', () => {
            if (demoFile.files.length === 0) {
                alert('Please select an audio file first.');
                return;
            }

            const title = demoTitleInput.value.trim() || 'New Demo';
            const project = demoProject.value;
            const file = demoFile.files[0];
            const fileUrl = URL.createObjectURL(file);

            // Create new DOM element
            const newDemo = document.createElement('div');
            newDemo.className = 'demo-item';
            newDemo.setAttribute('data-src', fileUrl);

            newDemo.innerHTML = `
                <button class="play-btn"><i class='bx bx-play'></i></button>
                <div class="demo-info">
                    <h3 class="demo-title">${title}</h3>
                </div>
                <div class="demo-meta">
                    <span class="demo-duration">Loaded...</span>
                </div>
                <button class="download-btn" aria-label="Download"><i class='bx bx-download'></i></button>
            `;

            // Setup audio metadata load to get duration
            const tempAudio = new Audio(fileUrl);
            tempAudio.addEventListener('loadedmetadata', () => {
                const durationEl = newDemo.querySelector('.demo-duration');
                if (durationEl) {
                    durationEl.textContent = formatTime(tempAudio.duration);
                }
            });

            // Prepend to list
            demoList.prepend(newDemo);

            // Attach listeners
            const newPlayBtn = newDemo.querySelector('.play-btn');
            setupPlayButton(newPlayBtn);

            // Trigger animation
            newDemo.style.opacity = '0';
            setTimeout(() => newDemo.style.opacity = '1', 50);

            // Clean up and close modal
            demoFile.value = '';
            demoTitleInput.value = '';
            fileNameHint.textContent = 'Supported formats: MP3, WAV (Max 50MB)';
            fileNameHint.style.color = 'var(--text-muted)';
            uploadModal.classList.add('hidden');
        });
    }

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
