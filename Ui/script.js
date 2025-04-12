// Add click handler for language selector
document.querySelector('.language-selector').addEventListener('click', function(e) {
    e.stopPropagation();
    this.querySelector('.language-dropdown').style.display = 
        this.querySelector('.language-dropdown').style.display === 'block' ? 'none' : 'block';
});

// Close dropdown when clicking outside
document.addEventListener('click', function() {
    document.querySelector('.language-dropdown').style.display = 'none';
});

 // Show/hide back to top button
 window.onscroll = function() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("backToTop").style.display = "block";
    } else {
        document.getElementById("backToTop").style.display = "none";
    }
};

// Scroll to top function
document.getElementById("backToTop").onclick = function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};