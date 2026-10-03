<script>
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    const subject = "Portfolio Contact - " + name;

    const body =
        "Name: " + name + "%0D%0A" +
        "Phone: " + phone + "%0D%0A" +
        "Email: " + email + "%0D%0A%0D%0A" +
        "Message:%0D%0A" + message;

    window.location.href =
        "mailto:kshitijapatil4648@gmail.com" +
        "?subject=" + encodeURIComponent(subject) +
        "&body=" + body;
});
</script>
