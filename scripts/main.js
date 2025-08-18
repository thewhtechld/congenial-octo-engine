const icons = document.querySelectorAll(".icon");
let index = 0;

function updateStack() {
  icons.forEach((icon, i) => {
    icon.className = "icon"; // reset
  });

  // cycle through positions dynamically
  icons[index % icons.length].classList.add("front");
  icons[(index + 1) % icons.length].classList.add("second");
  icons[(index + 2) % icons.length].classList.add("third");

  index = (index + 1) % icons.length;
}

// initial setup
updateStack();
setInterval(updateStack, 2000); // every 2s shuffle
