$(document).ready(()=> {

    setNavLinkActive();
    autoCollapse();

    $("#btn-view-work").on("click", function(event) {
        event.preventDefault();
        scrollPage("#about");
    });

    $(".nav-item").on("click", function(event) {
        event.preventDefault();
        $(".nav-item").removeClass("active");
        $(this).addClass("active");
        scrollPage($(this).children(".nav-link").attr("href"));
    });

    $(".btn-learn-more").on("click", function(event) {
        const project = projects[$(this).data("project")];
        displayProjectModal(project);
    });
    
    $(window).on("scroll", function() {
        setNavLinkActive();
    });

});

// When loading on small screens, clicking nav-link automatically collapses dropdown
function autoCollapse() {
    if($(window).width() < 992) {
        $(".nav-link").attr("data-toggle", "collapse");
        $(".nav-link").attr("data-target", ".navbar-collapse");
    }
}

// Animate scroll to section on page
function scrollPage(href) {
    $('html, body').animate({
        scrollTop: $(href).offset().top
    }, 300);
}

// Detect current section on page and set its nav link to active
function setNavLinkActive() {
    $("section").each(function() {
        if($(window).scrollTop() >= $(this).offset().top) {
            const id = $(this).attr("id");
            $(".nav-item").removeClass('active');
            $("a[href=\"#" + id + "\"]").parent().addClass("active");
        }
    });
}

function displayProjectModal(project) {
    $("#learn-more-title").text(project.title);
    $("#learn-more-subtitle").text(project.subtitle);
    $("#learn-more-description").text(project.description);
    $("#link-repo").attr("href", project.repoLink);
    if(project.liveLink) {
        $("#link-live").removeClass("d-none");
        $("#link-live").attr("href", project.liveLink);
    }
    else {
        $("#link-live").addClass("d-none");
    }

    $("#modal-learn-more").modal("show");
}

const projects = {
    unit4Game: {
        title: "Unit-4-Game",
        subtitle: "How much snow?",
        description: "Test your memory and math skills by getting your amount of snow equal to random amount of snow.",
        repoLink: "https://github.com/TerrellPayne/unit-4-game",
        liveLink: "https://terrellpayne.github.io/unit-4-game/"
    },
    clickyGame: {
        title: "Clicky Game",
        subtitle: "A fun exiting game built using Reactjs",
        description: "Test your memory by not clicking on the same character more than once. See how high you can get your highscore.",
        repoLink: "https://github.com/TerrellPayne/clicky-game",
        liveLink: " https://terrellpayne.github.io/clicky-game/"
    },
    captionThis: {
        title: "Caption This",
        subtitle: "A fun social media type application built using Reactjs",
        description: "Get creative and add captions to pictures that you choose, the most recent added caption will appear.",
        repoLink: "https://github.com/jenmaz12/caption-this",
        liveLink: "https://caption--this.herokuapp.com/"
    },
    firefighterHelper: {
        title: "Firefighter Helper",
        subtitle: "A management application for firefighters",
        description: "A management application to manage the number of certifications each firefighter has and the amount of equipment each firehouse holds and utilize.",
        repoLink: "https://github.com/nyopko/SecondGroupProject",
        liveLink: "https://firefightersfriend.herokuapp.com/"
        
    },
    
}
    