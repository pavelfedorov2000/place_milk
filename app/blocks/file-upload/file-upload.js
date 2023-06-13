app.fileUpload = {
    name: 'fileUpload',
    description: 'your script description',
    init() {
        const uploadBlock = document.querySelector('.upload-block');

        if (!uploadBlock) return;

        const fileInput = uploadBlock.querySelector('input[type="file"]');
        const fileUpload = fileInput.closest('label').nextElementSibling;
        const progressBar = fileUpload.querySelector('.file-upload__bar');
        const statusText = fileUpload.querySelector('.file-upload__progress-text');

        if (!fileInput) return;

        fileInput.addEventListener('change', function() {
            const fileUploadFileText = fileUpload.querySelector('.file-upload__file');
            const fileName = this.files[0].name;

            fileUpload.classList.remove('hidden');
            fileUploadFileText.textContent = fileName;
        });

        uploadBlock.addEventListener('submit', function (event) {
            event.preventDefault();

            const fileToUpload = fileInput.files[0];
            const formSent = new FormData();
            const xhr = new XMLHttpRequest();
          
            if (fileInput.files.length > 0) {
                formSent.append('uploadForm_File', fileToUpload);
          
                // собираем запрос и подписываемся на событие progress
                xhr.upload.addEventListener('progress', progressHandler, false);
                xhr.addEventListener('load', loadHandler, false);
                xhr.open('POST', 'upload_processing.php');
                xhr.send(formSent);
            } else {
                console.log('Сначала выберите файл');
            }
            return false;
        });

        function progressHandler(event) {
            // считаем размер загруженного и процент от полного размера
            const percentLoaded = Math.round((event.loaded / event.total) * 100);
          
            progressBar.style.width = `${percentLoaded}%`;
            statusText.textContent = `Загружено ${percentLoaded}%`;
        }
          
        function loadHandler(event) {
            statusText.textContent = event.target.responseText;
            progressBar.style.width = '0%';
        }
    },
};
