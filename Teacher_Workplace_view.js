const submitBtn = document.getElementById('submit-button');
const clearBtn = document.getElementById('clear-button');
const fileNameEl = document.getElementById('file-name');
const secondaryNav = document.querySelector('.secondary-nav');
const dropzone = document.querySelector('.input-file-container');
const logoutBtn = document.getElementById('btn-logout');
var teacher_name = localStorage.getItem('teacher_name');

var results;



function dropHandler(event) {
    

    const selectedFile = event.dataTransfer.files[0];
    Papa.parse(selectedFile, {
        skipEmptyLines: true,
        complete: function(result){
            //read every file then insert it to a array
            displayTable(result.data);
            var csv = Papa.unparse(result.data);
    Papa.parse(csv,{
        header: true,
        complete: function(result){
            results=result;
        }
    })
              
        }

    });

   // Truncate file name
   let fileName = selectedFile.name;
   const maxCharacter = 16;
   fileNameEl.textContent = fileName.length >= maxCharacter ? fileName.substring(0, maxCharacter) + "..." : fileName;

   // Remove dropzone
   dropzone.style.display = 'none';

   // Show secondary navigation
   secondaryNav.style.display = 'flex';
   adjustPaddingTop();
   // prevent the default behavior of opening the file as a link
   event.preventDefault(); 
}

function dragOverHandler(event) {
    // prevent the default behavior of opening the file as a link
    event.preventDefault();
}

// Handle file submission
const fileInput = document.getElementById('input-file');
fileInput.addEventListener('change', (event) => {
    // Parse CSV
    const selectedFile = event.target.files[0];
    Papa.parse(selectedFile, {
        skipEmptyLines: true,
        complete: function(result){
            //read every file then insert it to a array
            
            displayTable(result.data);
            savedata();  
        }
    });

    // Truncate file name
    let fileName = selectedFile.name;
    let maxCharacter = 16;
    fileNameEl.textContent = fileName.length >= maxCharacter ? fileName.substring(0, maxCharacter) + "..." : fileName;

    // Remove dropzone
    dropzone.style.display = 'none';

    // Show secondary navigation
    secondaryNav.style.display = 'flex';

    adjustPaddingTop();
});

function savedata(){
    Papa.parse(document.getElementById('input-file').files[0],
        {
            //ignore header
            header: true,
            //skip empty row
            skipEmptyLines: true,
            complete: function(result){
            results=result;
                
            }
            
  
            }); 
        }
        function dropdata(data){
            Papa.parse(document.getElementById('input-file').files[0],
                {
                    //ignore header
                    header: true,
                    //skip empty row
                    skipEmptyLines: true,
                    complete: function(result){
                    results=result;
                        
                    }
                    
          
                    }); 
                }

// Handle rendering table
const tableContainer = document.querySelector('.table-sub-container');
function displayTable(data) {
    // Create table
    const table = document.createElement('table');

    // Create header row
    const headerRow = table.insertRow(0);
    for (const header of data[0]) {
        const th = document.createElement('th');
        th.textContent = header;
        headerRow.appendChild(th);
    }

    // Create data rows
    for (let i = 1; i < data.length; i++) {
        const rowData = data[i];
        const row = table.insertRow(i);

        for (const value of rowData) {
            const cell = row.insertCell();
            cell.textContent = value;
        }
    }

    clearTable();
    tableContainer.appendChild(table);
}

// Handle Clear
clearBtn.addEventListener('click', () => {
    fileInput.value = null;
    fileNameEl.textContent = '';
    clearTable();

    // Show dropzone again
    dropzone.style.display = '';

    // Hide secondary navigation bar again
    secondaryNav.style.display = '';
})

// Handle clear table
function clearTable() {
    const tableContainer = document.querySelector('.table-sub-container');
    while (tableContainer.firstChild) {
        tableContainer.removeChild(tableContainer.firstChild);
    }
}

// Handle logout
logoutBtn.addEventListener('click', () => {
    window.open("index.html");
    window.close();
})

// Adjust 'main' padding dynamically
function adjustPaddingTop() {
    const headerHeight = document.querySelector('header').offsetHeight;
    document.querySelector('main').style.paddingTop = `${headerHeight}px`;
}
adjustPaddingTop();
window.addEventListener('resize', adjustPaddingTop);

// Handle highlight selected table rows 
let selectedRow = null;
document.querySelector('.table-sub-container').addEventListener('click', event => {
    if (event.target.tagName === 'TD') {
        const clickedRow = event.target.parentNode;
        if (clickedRow !== selectedRow) {
            if (selectedRow) {
                selectedRow.classList.remove('selected-row');
            }
            clickedRow.classList.add('selected-row');
            selectedRow = clickedRow;
        }
    }
});

let viewqr = document.getElementById("viewQR");
let closeqr = document.getElementById("closeqr");
let qrcode = document.getElementById("qrcode");
let imageqr = document.getElementById("displayQR");
let tname = document.getElementById("tname");
let Ccode = document.getElementById("course-code");

function generateVerifCode() {
    const uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '0123456789';
    //const specialCharacters = '!#*_';

        //put all characters in one variable (except special character)
    const allCharacters = uppercaseLetters + numbers +lowercaseLetters;
    let randomVerifCode = '';

    // Include at least one uppercase letter, one number, and one special character
    randomVerifCode += uppercaseLetters[Math.floor(Math.random() * uppercaseLetters.length)];
    randomVerifCode += numbers[Math.floor(Math.random() * numbers.length)];
    randomVerifCode += lowercaseLetters[Math.floor(Math.random() * lowercaseLetters.length)];

    // Complete the rest of the password with random characters
    for (let i = 1; i <= 5; i++) {
        randomVerifCode += allCharacters[Math.floor(Math.random() * allCharacters.length)];
    }
    return randomVerifCode;
    }

function ViewQr(){
    if (Ccode.value===""){
        document.getElementById('pop-up-message').innerHTML="Please enter course code first!";
        document.getElementById('pop-up-message').style.textAlign = "center";
        myPopup.classList.add("show");
    }else{
        let generateQR = generateVerifCode() +","+Ccode.value+","+generateVerifCode()+tname.value
        imageqr.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + generateQR;
    }
    
}

viewqr.addEventListener('click', ViewQr);
qrcode.addEventListener('click', function(){
    document.getElementById("qrcon").style="display:block";
    tname.value = teacher_name;
    tname.readOnly=true;
});
closeqr.addEventListener('click',function(){
    document.getElementById("qrcon").style="display:none";
    imageqr.src="";
    Ccode.value="";
})
/*
var selectElement = document.getElementById("select-coursecode");
var newOption = document.createElement("option");
newOption.text = "OLPHYE001"; // Set the display text for the new option
newOption.value = "OLPHYE001"; // Set the value for the new option
selectElement.add(newOption); // Add the option to the select element
*/
