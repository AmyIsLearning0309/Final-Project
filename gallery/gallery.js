//All written by GPT
const windowWidth = window.innerWidth;
const windowHeight = window.innerHeight;
const logos = []; // To store image data

// Array of images and their corresponding links
const images = [
  {
    src: "https://cdn.myportfolio.com/07675f5e-2094-4851-9fce-7fdcb31dee4d/934ebb0c-e320-4372-8faf-402108c4361b_rw_1200.png?h=eb6da6ddaf324df53ed6b01faae2a03e",
    link: "https://amyai.myportfolio.com/work"
  },
  {
    src: "../image/Group 32.svg",
    link: "../Final.html"
  },
  {
    src: "https://cdn.myportfolio.com/07675f5e-2094-4851-9fce-7fdcb31dee4d/4983ebe1-bc7d-4c6d-b626-3cca4aecb85e.png?h=2a057a7346ecc20f0349937fded3f917",
    link: "https://amyai.myportfolio.com/electric-pipa"
  },
  {
    src: "https://cdn.myportfolio.com/07675f5e-2094-4851-9fce-7fdcb31dee4d/40a4b7fc-3fe8-48d4-9f1d-4f36ddf43e47_rw_1200.png?h=013249d5904b19c5766873f0fefbdcdf",
    link: "https://amyai.myportfolio.com/carpenter-bee"
  },
  {
    src: "https://cdn.myportfolio.com/07675f5e-2094-4851-9fce-7fdcb31dee4d/73a852fb-58e8-4a82-a611-7271ea88bfda.png?h=ba35b74b26ad400c72f29ecef6889e7b",
    link: "https://amyai.myportfolio.com/body-is-fragile"
  },
  {
    src: "https://cdn.myportfolio.com/07675f5e-2094-4851-9fce-7fdcb31dee4d/8d23d4b3-aaf1-45f3-8b96-8159ae2efb5f_rw_1200.png?h=df53f83767f5a0187831bd89eec8f266",
    link: "https://amyai.myportfolio.com/capsule-of-time"
  },
  {
    src: "https://cdn.myportfolio.com/07675f5e-2094-4851-9fce-7fdcb31dee4d/575715d3-736b-4a45-b485-40be3f683d27_rw_1200.png?h=f046af302b4199c93476dee997f9ae4f",
    link: "https://amyai.myportfolio.com/spatial-dynamic"
  },
  {
    src: "https://cdn.myportfolio.com/07675f5e-2094-4851-9fce-7fdcb31dee4d/7dd9d463-add0-466a-9587-839cde0b0f0a_rw_1200.png?h=666b546f08dff847a90645aed808f721",
    link: "https://amyai.myportfolio.com/metal"
  },
  {
    src: "https://cdn.myportfolio.com/07675f5e-2094-4851-9fce-7fdcb31dee4d/5f0890ae-f44b-40ca-937f-d8209d6625b6_rw_1200.png?h=91e6076bbcd0a4888c808c8c738e00b5",
    link: "https://amyai.myportfolio.com/biomimicry-container-1"
  },
  {
    src: "https://cdn.myportfolio.com/07675f5e-2094-4851-9fce-7fdcb31dee4d/6385a34a-0247-4289-8acd-496c46907dfe_rw_1200.png?h=88f29ea890e22e55e208fea28a50c878",
    link: "https://amyai.myportfolio.com/biomimicry-container"
  },

  
];

// Desired image size
const imageWidth = 180; // Width of images in pixels
const imageHeight = 180; // Height of images in pixels

// Function to create a bouncing image
function createBouncingImage(imageData) {
  const img = document.createElement('img');
  img.src = imageData.src;
  img.className = 'bouncing-image';

  // Set image size dynamically
  img.style.width = `${imageWidth}px`;
  img.style.height = `${imageHeight}px`;

  // Wrap image in a clickable <a> tag
  const link = document.createElement('a');
  link.href = imageData.link;
  if (imageData.link != "../") {
    link.target = '_blank';
  }
  link.appendChild(img);

  document.body.appendChild(link);

  // Random initial position and velocity
  const imageObject = {
    element: link,
    posX: Math.random() * (windowWidth - imageWidth),
    posY: Math.random() * (windowHeight - imageHeight),
    velocityX: (Math.random() * 4 + 2) * (Math.random() < 0.5 ? 1 : -1),
    velocityY: (Math.random() * 4 + 2) * (Math.random() < 0.5 ? 1 : -1),
  };

  logos.push(imageObject);
}

// Create bouncing images for each item in the images array
images.forEach(createBouncingImage);

// Function to update positions of all bouncing images
function updatePositions() {
  logos.forEach(logo => {
    // Update position
    logo.posX += logo.velocityX;
    logo.posY += logo.velocityY;

    // Check for collisions with edges and reverse direction if necessary
    if (logo.posX <= 0 || logo.posX + imageWidth >= windowWidth) {
      logo.velocityX *= -1;
    }
    if (logo.posY <= 0 || logo.posY + imageHeight >= windowHeight) {
      logo.velocityY *= -1;
    }

    // Apply new position
    logo.element.style.left = logo.posX + 'px';
    logo.element.style.top = logo.posY + 'px';
    logo.element.style.position = 'absolute';
  });
}

// Animation loop
function animate() {
  updatePositions();
  requestAnimationFrame(animate);
}

// Start animation
animate();