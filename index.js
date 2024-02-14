document.addEventListener('DOMContentLoaded', function() {
    const userPhoto = document.getElementById('user-photo');

    userPhoto.addEventListener('mouseover', function() {
        userPhoto.style.transform = 'scale(1.1)';
    });

    userPhoto.addEventListener('mouseout', function() {
        userPhoto.style.transform = 'scale(1)';
    });
});