import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-app.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyByH0pNuEoNXna4Dj61C2QxIX-AfmFAnq0",
  authDomain: "antipolo-hackathon-project.firebaseapp.com",
  projectId: "antipolo-hackathon-project",
  storageBucket: "antipolo-hackathon-project.appspot.com",
  messagingSenderId: "88056856756",
  appId: "1:88056856756:web:9597da80bb7239996bd7e1"
};

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  import {
    getFirestore, doc, getDoc, collection, addDoc, setDoc, updateDoc, deleteDoc, deleteField
  }
  from "https://www.gstatic.com/firebasejs/10.5.2/firebase-firestore.js";
  
  const db = getFirestore();

  var teacher_id = document.getElementById('teacher_id');
  var first_name = document.getElementById('first_name');
  var middle_initial = document.getElementById('middle_initial');
  var last_name = document.getElementById('last_name');
  var pass = document.getElementById('password');
  var register_button = document.getElementById('register_button');

async function SaveRegistrationFrom(){
    
        
              //If teacherID still not in database create as new user
            if(teacher_id.value=="" || pass.value=="" || first_name.value=="" || last_name.value==""){
                document.getElementById('pop-up-message').innerHTML="Please Fill up all the requirements";
                    document.getElementById('pop-up-message').style.textAlign = "center";
                    myPopup.classList.add("show");
            }else{
                var ref = doc(db, "TEACHER_LIST", teacher_id.value);
                const docsnap = await getDoc(ref);
                if(docsnap.exists()){ 
                      //If teacherID already in database
                    document.getElementById('pop-up-message').innerHTML="Teacher ID already exist!";
                    document.getElementById('pop-up-message').style.textAlign = "center";
                    myPopup.classList.add("show");
                    teacher_id.value="";
                    first_name.value="";
                    middle_initial.value="";
                    last_name.value="";
                    pass.value="";
                    }
            
                else{
                var ref = doc(db, "TEACHER_LIST",teacher_id.value);
                    setDoc( 
                    ref, {
                    TeacherID : teacher_id.value,
                    TeacherName : first_name.value + " " + middle_initial.value +" "+ last_name.value,
                    password : pass.value
                    })
                    document.getElementById('pop-up-message').innerHTML="Congrats!, Registration Succesfully!";
                    document.getElementById('pop-up-message').style.textAlign = "center";
                    myPopup.classList.add("show"); 
                    teacher_id.value="";
                    first_name.value="";
                    middle_initial.value="";
                    last_name.value="";
                    pass.value="";
            }
            
        }
    }
    register_button.addEventListener('click', SaveRegistrationFrom);
    closePopup.addEventListener("click", function () {
        myPopup.classList.remove("show");
    });
    window.addEventListener("click", function (event) {
    if (event.target == myPopup) {
        myPopup.classList.remove("show");
    }
    });