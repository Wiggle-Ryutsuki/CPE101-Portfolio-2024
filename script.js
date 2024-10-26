document.addEventListener('DOMContentLoaded', () => {
    // Scroll to section
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

    // Listener for header to scroll and hover
    window.addEventListener('scroll', () => {
        const header = document.querySelector('header');
        if (window.scrollY > 0) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        
    });

    // Function to animate progress bars
    let hasScrolled = false; // Boolean variable to track if the section has been scrolled into view
    const animationDuration = 1000; // Duration in milliseconds for the animation
    function skillProgress() {
        const skills = document.querySelectorAll('.myProgress');
    
        skills.forEach(skill => {
            const bar = skill.querySelector('.myBar');
            const percentage = parseInt(skill.getAttribute('data-percentage'));
            let currentWidth = 0; 
            
            const intervalTime = 10; 
            const increment = percentage / (animationDuration / intervalTime); 
    
            const interval = setInterval(() => {
                if (currentWidth < percentage) {
                    currentWidth += increment; 
                    bar.style.width = Math.min(currentWidth, percentage) + '%'; 
                } else {
                    clearInterval(interval); 
                }
            }, intervalTime);
        });
    }
    
    // Scroll listener for skills section
    window.addEventListener('scroll', () => {
        const skillsSection = document.getElementById('skills');
        const sectionTop = skillsSection.getBoundingClientRect().top; 
    
        if (sectionTop < window.innerHeight && !hasScrolled) {
            hasScrolled = true; 
            skillProgress();
        }
    });

    // Copies contact
    const phoneContainer = document.getElementById("phone-contact");
    const phoneNumber = document.getElementById("phone-number").innerText;
    const tooltip = document.getElementById("tooltip");

    phoneContainer.addEventListener("click", function() {
        navigator.clipboard.writeText(phoneNumber).then(() => {
            tooltip.classList.add("show");
            setTimeout(() => {
                tooltip.classList.remove("show");
            }, 1500);
        }).catch(err => {
            console.error("Failed to copy: ", err);
        });
    });
    
});