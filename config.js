// Portfolio Configuration
// Update these values to customize your portfolio

const portfolioConfig = {
    // Personal Information
    personal: {
        name: "Raghu Kishore Vempati",
        title: "Director of Engineering Innovation",
        email: "raghu.vempati@gmail.com", // Update with your actual email
        location: "Hyderabad, Telangana, IN"
    },
    
    // Social Media Links
    social: {
        email: {
            url: "mailto:raghu.vempati@gmail.com",
            icon: "fas fa-envelope", // Font Awesome envelope
            label: "Email"
        },
        linkedin: {
            url: "https://linkedin.com/in/raghuvempati",
            icon: "fab fa-linkedin", // Font Awesome LinkedIn
            label: "LinkedIn"
        },
        github: {
            url: "https://github.com/raghuvempati",
            icon: "fab fa-github", // Font Awesome GitHub
            label: "GitHub"
        },
        x: {
            url: "https://x.com/raghuvempati",
            icon: "fab fa-x-twitter", // Font Awesome X (Twitter)
            label: "X"
        }
    },
    
    // Optional: Add more social platforms
    additionalSocial: {
        // medium: {
        //     url: "https://medium.com/@yourhandle",
        //     icon: "✍️",
        //     label: "Medium"
        // },
        // youtube: {
        //     url: "https://youtube.com/@yourchannel",
        //     icon: "📺",
        //     label: "YouTube"
        // }
    },

    experience: [
        {
            company: "Capgemini Engineering",
            logo: "assets/capgemini-logo.svg", // Place SVG/PNG in assets/
            period: "Jan 2015 – Current",
            role: "Director of Engineering Innovation"
        },
        {
            company: "Microsoft",
            logo: "assets/microsoft-logo.svg",
            period: "May 2013 – Dec 2014",
            role: "Development Lead"
        },
        {
            company: "Infosys",
            logo: "assets/infosys-logo.svg",
            period: "Oct 2004 – May 2013",
            role: "Technology Architect"
        }
    ],
    
    // Contact preferences
    contact: {
        preferredMethod: "email", // email, linkedin, etc.
        showLocation: true,
        showAvailability: true,
        availabilityText: "Open to new opportunities"
    }
};