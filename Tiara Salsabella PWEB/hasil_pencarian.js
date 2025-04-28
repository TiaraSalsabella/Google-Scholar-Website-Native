document.addEventListener('DOMContentLoaded', function() {

    const menuButton = document.querySelector('.menu-button');
    if (menuButton) {
        menuButton.addEventListener('click', function() {
            console.log('Menu button clicked');
            // seharusnya menampilkan side menu
        });
    }
    
    const profileButton = document.querySelector('.profile-button');
    if (profileButton) {
        profileButton.addEventListener('click', function() {
            console.log('Profile button clicked');
            // seharusnya menampilkan profil dropdown
        });
    }
    
    const addNameLink = document.getElementById('add-name-link');
    if (addNameLink) {
        addNameLink.addEventListener('click', function(e) {
            e.preventDefault();
            
            const existingFields = document.querySelectorAll('.additional-name');
            if (existingFields.length < 3) {

                const nameField = document.createElement('div');
                nameField.className = 'form-group additional-name';
                
                const input = document.createElement('input');
                input.type = 'text';
                input.className = 'form-input';
                input.placeholder = 'Nama alternatif';
                
                const removeButton = document.createElement('button');
                removeButton.type = 'button';
                removeButton.className = 'remove-name';
                removeButton.textContent = '×';
                removeButton.addEventListener('click', function() {
                    nameField.remove();
                    
                    if (document.querySelectorAll('.additional-name').length < 3) {
                        addNameLink.style.display = 'inline';
                    }
                });
                
                nameField.appendChild(input);
                nameField.appendChild(removeButton);
                
                addNameLink.parentNode.insertBefore(nameField, addNameLink.nextSibling);
                
                if (document.querySelectorAll('.additional-name').length >= 3) {
                    addNameLink.style.display = 'none';
                }
            }
        });
    }
    
    // Form submission handler
    const form = document.querySelector('.profile-form');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            console.log('Form submitted');
            // untuk submit profil
            
            const formData = {
                name: document.getElementById('name').value,
                additionalNames: Array.from(document.querySelectorAll('.additional-name input')).map(input => input.value),
                affiliation: document.getElementById('affiliation').value,
                email: document.getElementById('email').value,
                interests: document.getElementById('interests').value,
                homepage: document.getElementById('homepage').value
            };
            
            console.log('Form data:', formData);
            
            alert('Form would be submitted with the entered data');
        });
    }
});