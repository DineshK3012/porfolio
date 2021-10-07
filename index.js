// console.log("Welcome to Js");

//active navigation on scroll
window.addEventListener('scroll', event => {
    let navlink = document.querySelectorAll('nav ul li a');
    let fromTop = window.scrollY;
    // console.log(fromTop);

    navlink.forEach(link => {
        let section = document.querySelector(link.hash);
        // console.log(section);

        if (section.offsetTop - 60 <= fromTop && section.offsetTop + section.offsetHeight > fromTop) {
            link.classList.add('activeA');
        } else {
            link.classList.remove('activeA');
        }
    });

});

//shows a message to user when he/she submit the form
let messageform = document.getElementById('MessageForm');
messageform.addEventListener('submit', () => {
    let place = document.getElementById('sendMsg');
    place.innerHTML = `
                    <div class="alert alert-success alert-dismissible fade show" role="alert">
                        <strong>Success!</strong> Your message have been sent successfully.
                        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                    </div>
                    `;
    setTimeout(() => {
        place.innerHTML = '';
    }, 5000);

});

//function to display the Sliding cart 
function showSkillsPopup() {
    var skillsPopup = document.getElementById('skills-popup');
    skillsPopup.classList.toggle("skills-popup-toggle");
}

//function for preloader
$(window).on('load', function () {
    $('#loader').fadeOut(2000);
    $('.content').fadeIn(2000);
});
