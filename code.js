//string to be returned
let message = "";

function process() {
    //phone number
    let phoneFirst = document.getElementById("phoneFirstPart").value;
    let phoneSecond = document.getElementById("phoneSecondPart").value;
    let phoneThird = document.getElementById("phoneThirdPart").value;
    //condition checkboxes
    let highBlood = document.getElementById("highBloodPressure").checked;
    let diabetes = document.getElementById("diabetes").checked;
    let glaucoma = document.getElementById("glaucoma").checked;
    let asthma = document.getElementById("asthma").checked;
    let none_condition = document.getElementById("none-condition").checked;
    //time period
    let period = radio("period");
    //id 
    let first_four = document.getElementById("first-four").value;
    let second_four = document.getElementById("second-four").value;

    if(Number(phoneFirst) && Number(phoneSecond) && Number(phoneThird)) {
        if(phoneFirst.length != 3 || phoneSecond.length != 3 || phoneThird.length != 4) {
            message += "Invalid phone number\n";
        }
    } else {
        message += "Invalid phone number\n";
    }
    if(!period) {
        message += "No time period selected\n";
    }
    if(highBlood || diabetes || glaucoma || asthma || none_condition) {
        if(none_condition && (highBlood || diabetes || glaucoma || asthma)) {
            message += "Invalid conditions selected\n"
        }
    } else {
        message += "No conditions selected\n";
    }
    if(first_four.length == 4 && second_four.length == 4) {
        if(first_four[0] !== "A" || second_four[0] !== "B") {
            message += "Invalid study id\n";
        } else {
            let first_rest = Number(first_four.substring(1));
            let second_rest = Number(second_four.substring(1));
            if(Number.isNaN(first_rest) || Number.isNaN(second_rest)) {
                message += "Invalid study id\n";
            }
        }
    } else {
        message += "Invalid study id\n";
    }
}

function radio(name) {
    let category = document.getElementsByName(name);
    for(let i = 0; i < category.length; i++) {
        if(category[i].checked) {
            return category[i].value;
        }
    }
    return "";
}

function displayMessage() {
    let bool = false;
    process();
    if(message) {
        alert(message);
        message = "";
    } else {
        if (confirm("Do you want to submit the form data?")) {
            bool = true;
        }
    }
    return bool;
}



