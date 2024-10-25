document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const headerOffset = document.querySelector('header').offsetHeight;
            const targetElement = document.querySelector(this.getAttribute('href'));
            const elementPosition = targetElement.getBoundingClientRect().top + window.scrollY; 
            const offsetPosition = elementPosition - headerOffset; // Adjust for header height

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        });
    });

    window.addEventListener('scroll', () => {
        const header = document.querySelector('header');
        if (window.scrollY > 0) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        
    });

    let hasScrolled = false; // Boolean variable to track if the section has been scrolled into view

    function skillProgress() {
        // Select all progress bars
        const skills = document.querySelectorAll('.myProgress');

        // Iterate over each skill and set the width based on data-percentage
        skills.forEach(skill => {
            const bar = skill.querySelector('.myBar');
            const percentage = skill.getAttribute('data-percentage'); // Get the data-percentage attribute
            bar.style.width = percentage + '%'; // Set the width to the percentage
        });
    }

    window.addEventListener('scroll', () => {
        const skillsSection = document.getElementById('skills');
        const sectionTop = skillsSection.getBoundingClientRect().top; // Get the position of the section

        // Check if the section is in view and if it hasn't been scrolled into yet
        if (sectionTop < window.innerHeight && !hasScrolled) {
            hasScrolled = true; // Set the variable to true so the animation doesn't run again
            skillProgress(); // Call the function to start the progress
        }
    });
    
});