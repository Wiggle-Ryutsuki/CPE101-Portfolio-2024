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
    const animationDuration = 1000; // Duration in milliseconds for the animation
    
    function skillProgress() {
        // Select all progress bars
        const skills = document.querySelectorAll('.myProgress');
    
        // Iterate over each skill
        skills.forEach(skill => {
            const bar = skill.querySelector('.myBar');
            const percentage = parseInt(skill.getAttribute('data-percentage')); // Get the data-percentage attribute as an integer
            let currentWidth = 0; // Start from 0%
            
            // Calculate the interval speed based on desired duration
            const intervalTime = 10; // Update interval in milliseconds
            const increment = percentage / (animationDuration / intervalTime); // Calculate the increment
    
            // Create an interval to animate the progress
            const interval = setInterval(() => {
                if (currentWidth < percentage) {
                    currentWidth += increment; // Increase currentWidth by increment
                    bar.style.width = Math.min(currentWidth, percentage) + '%'; // Set the width, ensuring it doesn't exceed the target percentage
                } else {
                    clearInterval(interval); // Clear the interval when the target is reached
                }
            }, intervalTime);
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