function toggleDetails(id) {
    const details = document.getElementById(id);
    if (details.style.display === "block") {
        details.style.display = "none";
    } else {
        details.style.display = "block";
    }
}

function nextStep(step) {
    document.querySelectorAll('.step').forEach(function(element) {
        element.style.display = 'none';
    });
    document.getElementById('step' + step).style.display = 'block';
}
