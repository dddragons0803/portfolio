let words = document.querySelectorAll(".word");
words.forEach((word)=>{
    let letters = word.textContent.split("")
    word.textContent=""
    letters.forEach((letter)=>{
        let span = document.createElement("span")
        span.textContent=letter
        span.className="letter"
        word.append(span)
    })
})

let currentWordIndex=0;
let maxWordIndex=words.length-1;
words[currentWordIndex].style.opacity="1";

let changeText =()=>{
    let currentWord=words[currentWordIndex];
    let nextWord= currentWordIndex===maxWordIndex ? words[0] : words[currentWordIndex+1]
}
// Select all elements with the "smooth-scroll" class
const smoothScrollLinks = document.querySelectorAll('.smooth-scroll');

// Add a click event listener to each link
smoothScrollLinks.forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        
        // Get the target element's ID from the link's href
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        // Calculate the target position, including any header height
        const headerHeight = document.querySelector('header').offsetHeight;
        const targetPosition = targetElement.offsetTop - headerHeight;

        // Scroll to the target position with smooth behavior
        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    });
});
