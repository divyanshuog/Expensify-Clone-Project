document.addEventListener('DOMContentLoaded', () => {
    const uploadArea = document.getElementById('uploadArea');
    const fileInput = document.getElementById('fileInput');
    const uploadBtn = document.getElementById('uploadBtn');
    const resetBtn = document.getElementById('resetBtn');
    const previewArea = document.getElementById('previewArea');
    const imagePreview = document.getElementById('imagePreview');
    const uploadPlaceholder = document.querySelector('.upload-placeholder');
    const scanningOverlay = document.getElementById('scanningOverlay');
    const scanResult = document.getElementById('scanResult');

    // Drag and Drop functionality
    ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
        uploadArea.addEventListener(eventName, preventDefaults, false);
    });

    function preventDefaults(e) {
        e.preventDefault();
        e.stopPropagation();
    }

    ['dragenter', 'dragover'].forEach(eventName => {
        uploadArea.addEventListener(eventName, highlight, false);
    });

    ['dragleave', 'drop'].forEach(eventName => {
        uploadArea.addEventListener(eventName, unhighlight, false);
    });

    function highlight(e) {
        uploadArea.classList.add('dragover');
    }

    function unhighlight(e) {
        uploadArea.classList.remove('dragover');
    }

    uploadArea.addEventListener('drop', handleDrop, false);

    function handleDrop(e) {
        const dt = e.dataTransfer;
        const files = dt.files;
        handleFiles(files);
    }

    // Click to upload
    uploadBtn.addEventListener('click', () => {
        fileInput.click();
    });

    uploadArea.addEventListener('click', () => {
        if (uploadPlaceholder.style.display !== 'none') {
            fileInput.click();
        }
    });

    fileInput.addEventListener('change', function () {
        handleFiles(this.files);
    });

    resetBtn.addEventListener('click', () => {
        resetScan();
    });

    function handleFiles(files) {
        if (files.length > 0) {
            const file = files[0];
            if (file.type.startsWith('image/')) {
                const reader = new FileReader();
                reader.onload = (e) => {
                    imagePreview.src = e.target.result;
                    startScanning();
                }
                reader.readAsDataURL(file);
            }
        }
    }

    function startScanning() {
        uploadPlaceholder.style.display = 'none';
        previewArea.classList.remove('hidden');
        scanningOverlay.classList.remove('hidden');
        uploadBtn.style.display = 'none';

        // Simulate scanning delay
        setTimeout(() => {
            scanningOverlay.classList.add('hidden');
            showResults();
        }, 3000);
    }

    function showResults() {
        scanResult.classList.remove('hidden');
        resetBtn.style.display = 'inline-block';

        // Simulated results
        document.getElementById('merchantName').textContent = 'Starbucks Coffee';
        document.getElementById('receiptDate').textContent = new Date().toLocaleDateString();
        document.getElementById('receiptTotal').textContent = '$14.50';
    }

    function resetScan() {
        fileInput.value = '';
        imagePreview.src = '';
        previewArea.classList.add('hidden');
        uploadPlaceholder.style.display = 'flex';
        scanResult.classList.add('hidden');
        resetBtn.style.display = 'none';
        uploadBtn.style.display = 'inline-block';
    }
});
