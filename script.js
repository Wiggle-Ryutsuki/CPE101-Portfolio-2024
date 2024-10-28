document.addEventListener('DOMContentLoaded', () => {

    const themeToggle = document.querySelector('.switch input[type="checkbox"]');

    // Function to switch theme
    function toggleTheme() {
        const isDarkMode = themeToggle.checked; // Check if the checkbox is checked
        document.body.classList.toggle('dark-theme', isDarkMode);
        document.body.classList.toggle('light-theme', !isDarkMode);
    
        // Save the current theme in localStorage
        localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    }
    
    // Load theme from localStorage on page load
    function loadTheme() {
        const savedTheme = localStorage.getItem('theme') || 'light';
        console.log("CHECKED STORAGE");
        if (savedTheme === 'dark') {
            themeToggle.checked = true; // Set the checkbox to checked
            document.body.classList.add('dark-theme');
            console.log("CHANGED TO DARK");
        } else {
            document.body.classList.add('light-theme');
            console.log("CHANGED TO LIGHT");
        }
    }
    
    themeToggle.addEventListener('change', toggleTheme);
    loadTheme();


    const sections = document.querySelectorAll('div[id]');
    const navLinks = document.querySelectorAll('.desktop-header a');
    const header = document.querySelector('.desktop-header');
    const headerOffset = header.offsetHeight;

    window.addEventListener('scroll', () => {
        let currentSectionId = null;

        // Loop through each section to check if it's in view
        sections.forEach((section, index) => {
            const sectionTop = section.getBoundingClientRect().top + window.scrollY;
            const sectionBottom = sectionTop + section.offsetHeight;

            // Check if section is in view with the header offset
            if (window.scrollY >= sectionTop - headerOffset && window.scrollY < sectionBottom - headerOffset) {
                currentSectionId = section.id;
            }
        });

        // Update active link based on the current section in view
        navLinks.forEach(link => {
            if (link.getAttribute('href').substring(1) === currentSectionId) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    });

    


    // Scroll to section
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const headerOffset = document.querySelector('header').offsetHeight;
            const targetElement = document.querySelector(this.getAttribute('href'));
            const elementPosition = targetElement.getBoundingClientRect().top + window.scrollY; 
            const offsetPosition = elementPosition - headerOffset;



            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        });
    });

    // Listener for header to scroll and hover
    const desktopHeader = document.getElementById("")
    window.addEventListener('scroll', () => {
        const header = document.querySelector('header');
        if (window.scrollY > 0) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        
    });

    const menuButton = document.getElementById("menuButton");
    const dropdownMenu = document.getElementById("dropdownMenu");

    // Toggle dropdown on menu button click
    menuButton.addEventListener("click", () => {
        dropdownMenu.classList.toggle("show-menu");
    });

    // Close the dropdown if clicked outside
    window.addEventListener("click", (e) => {
        if (!e.target.closest("#menuButton") && !e.target.closest("#dropdownMenu")) {
            dropdownMenu.classList.remove("show-menu");
        }
    });

    const dropdownItems = dropdownMenu.querySelectorAll("a, button");
    dropdownItems.forEach((item) => {
        item.addEventListener("click", () => {
            dropdownMenu.classList.remove("show-menu");
        });
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

    // Copies phone number
    const phoneContainer = document.getElementById("phone-contact");
    const phoneNumber = document.getElementById("phone-number").innerText;
    const tooltipPhone = document.getElementById("tooltip-phone");
    phoneContainer.addEventListener("click", function() {
        navigator.clipboard.writeText(phoneNumber).then(() => {
            tooltipPhone.classList.add("show");
            setTimeout(() => {
                tooltipPhone.classList.remove("show");
            }, 800);
        }).catch(err => {
            console.error("Failed to copy: ", err);
        });
    });

    // Copies first email
    const emailContainer1 = document.getElementById("email-contact-1");
    const email1 = document.getElementById("email-1").innerText;
    const tooltipEmail1 = document.getElementById("tooltip-email1");
    emailContainer1.addEventListener("click", function() {
        navigator.clipboard.writeText(email1).then(() => {
            tooltipEmail1.classList.add("show");
            setTimeout(() => {
                tooltipEmail1.classList.remove("show");
            }, 800);
        }).catch(err => {
            console.error("Failed to copy: ", err);
        });
    });

    // Copies second email
    const emailContainer2 = document.getElementById("email-contact-2");
    const email2 = document.getElementById("email-2").innerText;
    const tooltipEmail2 = document.getElementById("tooltip-email2");
    emailContainer2.addEventListener("click", function() {
        navigator.clipboard.writeText(email2).then(() => {
            tooltipEmail2.classList.add("show");
            setTimeout(() => {
                tooltipEmail2.classList.remove("show");
            }, 800);
        }).catch(err => {
            console.error("Failed to copy: ", err);
        });
    });





    

});