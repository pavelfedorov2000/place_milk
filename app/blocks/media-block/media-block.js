app.mediaBlock = {
    name: 'mediaBlock',
    description: 'your script description',
    init() {
        let mediaImagesMax = 5;
        const uploadImageInputs = document.querySelectorAll('.media-choose__input');

        if (!uploadImageInputs) return;

        function deleteImage(btn, mediaBlock, uploadImageBlock, mediaImagesMax) {
            const element = btn.closest('.media-image');
            element.remove();

            if (mediaImagesMax === 1) {
                showUploadImageBlock(uploadImageBlock);
            } else {
                checkUploadedImagesLength(mediaBlock, uploadImageBlock, mediaImagesMax);
            }
        }

        function hideUploadImageBlock(uploadImageBlock) {
            uploadImageBlock.classList.add('is-disabled');
        }

        function showUploadImageBlock(uploadImageBlock) {
            uploadImageBlock.classList.remove('is-disabled');
        }

        function checkUploadedImagesLength(mediaBlock, uploadImageBlock) {
            const shownImages = mediaBlock.querySelectorAll('.media-image').length;

            if (shownImages === mediaImagesMax) {
                hideUploadImageBlock(uploadImageBlock);
            } else {
                showUploadImageBlock(uploadImageBlock);
            }
        }

        function displayImages(file, mediaBlock, imgType) {
            const newImageElement = document.createElement('div');
            newImageElement.classList.add('media-image');
            if (imgType) {
                newImageElement.classList.add(`media-image--${imgType}`);
            }
            let imageString = `
                <img class="media-image__img" src="${URL.createObjectURL(file)}" alt="фото" width="160" height="160">
                <button class="media-image__delete"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_111_164537)"><path d="M9.78342 8.17515L15.6471 2.31125C16.0287 1.92983 16.0287 1.31312 15.6471 0.931697C15.2657 0.550274 14.649 0.550274 14.2676 0.931697L8.40369 6.7956L2.53996 0.931697C2.15836 0.550274 1.54183 0.550274 1.16041 0.931697C0.778806 1.31312 0.778806 1.92983 1.16041 2.31125L7.02413 8.17515L1.16041 14.0391C0.778809 14.4205 0.778809 15.0372 1.16041 15.4186C1.3505 15.6089 1.60043 15.7045 1.85019 15.7045C2.09994 15.7045 2.3497 15.6089 2.53996 15.4186L8.40369 9.55471L14.2676 15.4186C14.4579 15.6089 14.7076 15.7045 14.9574 15.7045C15.2071 15.7045 15.4569 15.6089 15.6471 15.4186C16.0287 15.0372 16.0287 14.4205 15.6471 14.0391L9.78342 8.17515Z" fill="black"/></g><defs><clipPath id="clip0_111_164537"><rect width="16" height="16" fill="white"/></clipPath></defs></svg></button>
            `;
            newImageElement.innerHTML = imageString;
            mediaBlock.prepend(newImageElement);
            imageString = '';
        }

        function showImageFile(input, mediaBlock, uploadImageBlock, mediaImagesMax, imgType) {
            let file = input.files[0];

            console.log(mediaImagesMax);

            displayImages(file, mediaBlock, imgType);

            if (mediaImagesMax === 1) {
                hideUploadImageBlock(uploadImageBlock);
            } else {
                checkUploadedImagesLength(mediaBlock, uploadImageBlock, mediaImagesMax);
            }
        }

        uploadImageInputs.forEach((input) => {
            const uploadImageBlock = input.closest('label');
            const mediaBlock = uploadImageBlock.closest('.media-block');
            const imgType = input.getAttribute('data-image-type');

            if (input.getAttribute('data-single-file') !== null) {
                mediaImagesMax = 1;
            }

            input.addEventListener('change', function () {
                showImageFile(this, mediaBlock, uploadImageBlock, mediaImagesMax, imgType);
            });

            document.addEventListener('click', (event) => {
                const target = event.target;

                if (target.classList.contains('media-image__delete') || (target.closest('button') && target.closest('button').classList.contains('media-image__delete'))) {
                    console.log(target.closest('label'));
                    deleteImage(target, mediaBlock, target.closest('.media-block').querySelector('label'), mediaImagesMax);
                };
            });
        });
    },
};
