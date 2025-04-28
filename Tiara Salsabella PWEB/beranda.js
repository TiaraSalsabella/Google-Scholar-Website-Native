document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menuToggle');
    const sidebar = document.getElementById('sidebar');
    
    menuToggle.addEventListener('click', function() {
        if (window.innerWidth <= 768) {
            sidebar.classList.toggle('sidebar-open');
        } else {
            sidebar.classList.toggle('sidebar-collapsed');
            
            const sidebarContent = document.querySelector('.sidebar-content');
            if (sidebar.classList.contains('sidebar-collapsed')) {
                sidebarContent.style.display = 'none';
            } else {
                setTimeout(() => {
                    sidebarContent.style.display = 'block';
                }, 150);
            }
        }
    });

    document.addEventListener('click', function(event) {
        if (window.innerWidth <= 768 && 
            !sidebar.contains(event.target) && 
            !menuToggle.contains(event.target) &&
            sidebar.classList.contains('sidebar-open')) {
            sidebar.classList.remove('sidebar-open');
        }
    });
    
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            sidebar.classList.remove('sidebar-open');
        } else {
            sidebar.classList.remove('sidebar-collapsed');
            document.querySelector('.sidebar-content').style.display = 'block';
        }
    });
    
    const searchBox = document.querySelector('.search-box');
    const searchInput = document.querySelector('.search-input');
    
    searchBox.addEventListener('click', function() {
        searchInput.focus();
    });
    
    const searchButton = document.querySelector('.search-button');
    
    searchButton.addEventListener('click', function() {
        performSearch();
    });
    
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            performSearch();
        }
    });
    
    function performSearch() {
        const query = searchInput.value.trim();
        if (query) {
            // seharusnya memakai query
            alert('Searching for: ' + query);
            // window.location.href = 'https://scholar.google.com/scholar?q=' + encodeURIComponent(query);
        }
    }
});