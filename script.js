function revealMessage() {
  const password = document.getElementById("password").value.trim();
  const message = document.getElementById("message");
  
  // Using "manasvi" as the password - change this to your desired password
  if (password.toLowerCase() === "manasvi") {
    message.classList.remove("hidden");
    document.getElementById("password").style.borderColor = "#ff69b4";
  } else {
    message.classList.add("hidden");
    document.getElementById("password").style.borderColor = "#ff0000";
    setTimeout(() => {
      document.getElementById("password").style.borderColor = "#ff69b4";
    }, 1000);
  }
}

// Add event listener for Enter key
document.getElementById("password").addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    revealMessage();
  }
});

document.addEventListener('DOMContentLoaded', () => {
  // Intersection Observer for scroll animations
  const timeline = document.querySelectorAll('.container');
  
  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.2 // Trigger when 20% of the element is visible
  };
  
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate');
        
        // Optional: Stop observing after animation
        observer.unobserve(entry.target);
      }
    });
  }, options);
  
  // Observe all timeline containers
  timeline.forEach(item => {
    observer.observe(item);
  });
  
  // Add hover effect for timeline dots
  timeline.forEach(item => {
    item.addEventListener('mouseenter', () => {
      const dot = item.querySelector('::after');
      if (dot) {
        dot.style.transform = 'translateY(-50%) scale(1.2)';
      }
    });
    
    item.addEventListener('mouseleave', () => {
      const dot = item.querySelector('::after');
      if (dot) {
        dot.style.transform = 'translateY(-50%) scale(1)';
      }
    });
  });
});


