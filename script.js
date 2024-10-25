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

        const skillSection = document.getElementById("skills");
        const sectionPosition = skillSection.getBoundingClientRect().top; // Get position relative to the viewport
    
        if (sectionPosition < window.innerHeight && sectionPosition >= 0) {
            skillProgress(); // Call the animation function when section is in view
            window.removeEventListener('scroll', arguments.callee); // Remove event listener after first scroll
        }
    });

    let skillAnimated = false;
    skillProgress();
    function skillProgress(){
        const bars = document.querySelectorAll('.myProgress');

        if (skillAnimated) {
            return; 
        }

        bars.forEach(bar => {
            const percentage = bar.getAttribute('data-percentage'); // Get target percentage
            const myBar = bar.querySelector('.myBar'); // Get the inner bar
    
            let width = 0; // Start width
            const interval = setInterval(() => {
                if (width >= percentage) {
                    clearInterval(interval); // Stop when the target is reached
                } else {
                    width++;
                    myBar.style.width = width + '%'; // Update the width
                }
            }, 20); // Adjust speed as needed
        });

        skillAnimated = true;
    }
    
});