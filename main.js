var names = [];

function submit() {


    for (var j = 1; j <= 4; j++) {
        var n = document.getElementById("name_of_the_student_" + j).value;
        names.push(n);
    }
    var display_name_with_comma = [];
    for (var k = 0; k < 4; k++) {
        display_name_with_comma.push("<h4>NAME - " + names[k] + "</h4>");

    }
    document.getElementById("display_name_with_commas").innerHTML = display_name_with_comma;
    var array = display_name_with_comma.join(" ");
    document.getElementById("display_name_without_commas").innerHTML = array;
    document.getElementById("submit_button").style.display = "none";
    document.getElementById("sort_button").style.display = "inline-block";
}

function sorting() {
    names.sort();
    names = names.join(" ");
    document.getElementById("display_name_without_commas").innerHTML = names;

}