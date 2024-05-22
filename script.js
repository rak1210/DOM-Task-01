var div = document.createElement("div");
div.className = "formContainer"
var form = document.createElement("form");
form.className = "myForm"

div.append(form);

function label_create(tagname, attrname, attrvalue, content) {
    var label_ele = document.createElement(tagname);
    label_ele.setAttribute(attrname, attrvalue);
    label_ele.innerHTML = content;
    return label_ele;
}
function break_create() {
    var break_create = document.createElement("br");
    return break_create;
}
function input_create(inputtag, attrname, attrvalue, attrname1, attrvalue1, attrname2, attrvalue2) {
    var input_ele = document.createElement(inputtag);
    input_ele.setAttribute(attrname, attrvalue);
    input_ele.setAttribute(attrname1, attrvalue1);
    input_ele.setAttribute(attrname2, attrvalue2);
    return input_ele;
}


var firstname = label_create("label", "for", "firstname", "Firstname:");
var first_br = break_create();
var input_first = input_create('input', "type", "firstname", "id", "firstname", "placeholder", "firstname");
var first_brr = break_create();

var lastname = label_create("label", "for", "lastname", "Lastname:");
var last_br = break_create();
var input_last = input_create("input", "type", "lastname", "id", "lastname", "placeholder", "lastname");
var last_brr = break_create();

var address_1 = label_create("label", "for", "address", "Address Line:");
var address1_br = break_create();
var input_address1 = input_create("input", "type", "address", "id", "address", "placeholder", "Address Line");
var address1_brr = break_create();

var address_2 = label_create("label", "for", "email", "Email:");
var address2_br = break_create();
var input_address2 = input_create("input", "type", "email", "id", "email", "placeholder", "Email");
var address2_brr = break_create();

var pin = label_create("label", "for", "pin", "PIN code:");
var pin_br = break_create();
var input_pin = input_create("input", "type", "pin", "id", "pin", "placeholder", "PIN code");
var pin_brr = break_create();

var male_ele = document.createElement("label");
male_ele.setAttribute("for", "male");
male_ele.innerHTML = "Male";

var male_input = document.createElement("input");
male_input.setAttribute("type", "radio");
male_input.setAttribute("name", "gender");
male_input.setAttribute("id", "male");

var gender_ele = document.createElement("div");
gender_ele.innerHTML = "Gender:"

var male_ele = document.createElement("label");
male_ele.setAttribute("for", "male");
male_ele.innerHTML = "Male";

var male_input = document.createElement("input");
male_input.setAttribute("type", "radio");
male_input.setAttribute("name", "gender");
male_input.setAttribute("id", "male");

var female_ele = document.createElement("label");
female_ele.setAttribute("for", "female");
female_ele.innerHTML = "Female";

var female_input = document.createElement("input");
female_input.setAttribute("type", "radio");
female_input.setAttribute("name", "gender");
female_input.setAttribute("id", "female");

var food_ele = document.createElement("div");
food_ele.setAttribute("class", "food");
food_ele.innerHTML = "Choice of food:(must choose at least 2 out of 5 potions)"

var checkbox_nf = document.createElement("input");
checkbox_nf.setAttribute("type", "checkbox");
var nf_br = break_create();
var checkbox_sf = document.createElement("input");
checkbox_sf.setAttribute("type", "checkbox");
var sf_br = break_create();
var checkbox_chi = document.createElement("input");
checkbox_chi.setAttribute("type", "checkbox");
var chi_br = break_create();
var checkbox_jap = document.createElement("input");
checkbox_jap.setAttribute("type", "checkbox");
var jap_br = break_create();
var checkbox_sea = document.createElement("input");
checkbox_sea.setAttribute("type", "checkbox");
var sea_br = break_create();

var nf = document.createElement("span");
nf.innerHTML = "North Indian";
var sf = document.createElement("span");
sf.innerHTML = "South Indian";
var chi = document.createElement("span");
chi.innerHTML = "Chinese";
var jap = document.createElement("span");
jap.innerHTML = "Japanese";
var sea = document.createElement("span");
sea.innerHTML = "Sea Food";

var state_ele = label_create("label", "for", "state", "State:");
var state_br = break_create();
var input_state = input_create("input", "type", "state", "id", "state", "placeholder", "state");
var state_brr = break_create();

var country_ele = label_create("label", "for", "country", "Country:");
var country_br = break_create();
var input_country = input_create("input", "type", "country", "id", "country", "placeholder", "country");
var country_brr = break_create();

var button_tag = document.createElement("button");
button_tag.setAttribute("type", "button");
button_tag.setAttribute("id", "submit");
button_tag.innerHTML = "Submit"

form.append(firstname, first_brr, input_first, first_br, lastname, last_br, input_last, last_brr, address_1, address1_br, input_address1, address1_brr,
    address_2, address2_br, input_address2, address2_brr, pin, pin_br, input_pin, pin_brr, gender_ele, male_input, male_ele, female_input, female_ele, food_ele, checkbox_nf, nf_br, nf, nf_br,
    checkbox_sf, sf, sf_br, checkbox_chi, chi, chi_br, checkbox_jap, jap, jap_br, checkbox_sea, sea, sea_br, state_ele, state_br, input_state, state_brr,
    country_ele, country_br, input_country, country_brr, button_tag)

document.body.append(div);


var div1 = document.createElement("div");
div1.className = "tableContainer";
var table = document.createElement(table);
table.className = "myTable";
div1.append(table);

function create_tr() {
    var tr_ele = document.createElement("tr");
    return tr_ele;
}
function create_th(tagname, classname, value, content) {
    var th_ele = document.createElement(tagname);
    th_ele.setAttribute(classname, value);
    th_ele.innerHTML = content;
    return th_ele;
}
function create_td(tagname, content) {
    var td_ele = document.createElement(tagname);
    td_ele.innerHTML = content;
    return td_ele;
}



var thead = document.createElement("thead");
thead.className = "thead-dark";

var tbody =  document.createElement("tbody");

var thead_tr = create_tr();
var th1 = create_th("th", "scope", "col", "Firstname");
var th2 = create_th("th", "scope", "col", "Lastname");
var th3 = create_th("th", "scope", "col", "Address");
var th4 = create_th("th", "scope", "col", "Email");
var th5 = create_th("th", "scope", "col", "Pincode");
var th6 = create_th("th", "scope", "col", "Gender");
var th7 = create_th("th", "scope", "col", "Food");
var th8 = create_th("th", "scope", "col", "State");
var th9 = create_th("th", "scope", "col", "Country");


thead_tr.append(th1, th2, th3, th4, th5, th6, th7, th8, th9);
thead.append(thead_tr);
table.append(thead);
document.body.append(div1)


document.getElementById('submit').addEventListener('click', function () {
    var form_data = new FormData(document.getElementsByClassName('myTable'));
    var foods = [];
    form_data.getAll('food').forEach(food => foods.push(food));
    var new_row = document.createElement("tr");

    new_row.innerHTML = `
    <td>${form_data.get("firstname")}</td>
    <td>${form_data.get("lastname")}</td>
    <td>${form_data.get("address")}</td>
    <td>${form_data.get("email")}</td>
    <td>${form_data.get("pin")}</td>
    <td>${form_data.get("gender")}</td>
    <td>${foods.join(",")}</td>
    <td>${form_data.get("state")}</td>
    <td>${form_data.get("country")}</td>
    `;
    document.querySelector(".myTable tbody").appendChild(new_row);
    document.getElementsByClassName("myForm").reset();
    form_data.append("new_row")
    document.body.append("form_data");
});

