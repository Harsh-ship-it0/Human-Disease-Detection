function analyze() {

    const name = document.getElementById("name").value;
    const checkboxes = document.querySelectorAll(
        'input[type="checkbox"]:checked'
    );

    if (name === "" || checkboxes.length === 0) {
        alert("Please enter name and select symptoms.");
        return;
    }

    let symptoms = [];
    checkboxes.forEach(cb => symptoms.push(cb.value));

    let disease = "Common Cold";
    let confidence = Math.floor(Math.random() * 15) + 80;

    if (symptoms.includes("fever") && symptoms.includes("cough")) {
        disease = "Flu";
    }

    if (
        symptoms.includes("chest_pain") &&
        symptoms.includes("breathlessness")
    ) {
        disease = "Pneumonia";
    }

    if (
        symptoms.includes("headache") &&
        symptoms.includes("vomiting")
    ) {
        disease = "Migraine";
    }

    document.getElementById("resultCard").style.display = "block";

    document.getElementById("disease").innerText =
        "Predicted Disease: " + disease;

    document.getElementById("confidenceText").innerText =
        "Confidence Level: " + confidence + "%";

    document.getElementById("confidenceFill").style.width =
        confidence + "%";
}