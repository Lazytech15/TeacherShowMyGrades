const _0x139d8d=_0x5bc6;(function(_0x4b7e23,_0x4f9cb0){const _0x4d3268=_0x5bc6,_0x38cb45=_0x4b7e23();while(!![]){try{const _0x23616c=-parseInt(_0x4d3268(0x7e))/0x1+-parseInt(_0x4d3268(0x94))/0x2*(-parseInt(_0x4d3268(0x7c))/0x3)+-parseInt(_0x4d3268(0x6f))/0x4+parseInt(_0x4d3268(0x74))/0x5*(-parseInt(_0x4d3268(0x8d))/0x6)+parseInt(_0x4d3268(0x93))/0x7+parseInt(_0x4d3268(0x91))/0x8*(-parseInt(_0x4d3268(0x8a))/0x9)+parseInt(_0x4d3268(0x7b))/0xa;if(_0x23616c===_0x4f9cb0)break;else _0x38cb45['push'](_0x38cb45['shift']());}catch(_0x1c9ac7){_0x38cb45['push'](_0x38cb45['shift']());}}}(_0x3426,0x74528));function _0x5bc6(_0x5db47a,_0x46d0a3){const _0x3426c8=_0x3426();return _0x5bc6=function(_0x5bc6b8,_0x35bdaf){_0x5bc6b8=_0x5bc6b8-0x6b;let _0x1b3d46=_0x3426c8[_0x5bc6b8];return _0x1b3d46;},_0x5bc6(_0x5db47a,_0x46d0a3);}import{initializeApp}from'https://www.gstatic.com/firebasejs/10.5.2/firebase-app.js';const firebaseConfig={'apiKey':_0x139d8d(0x90),'authDomain':_0x139d8d(0x8f),'projectId':'antipolo-hackathon-project','storageBucket':_0x139d8d(0x84),'messagingSenderId':'88056856756','appId':_0x139d8d(0x7f)},app=initializeApp(firebaseConfig);import{getFirestore,doc,getDoc,collection,addDoc,setDoc,updateDoc,deleteDoc,deleteField}from'https://www.gstatic.com/firebasejs/10.5.2/firebase-firestore.js';const db=getFirestore(),uname=document['getElementById'](_0x139d8d(0x86)),upass=document[_0x139d8d(0x88)]('password'),logbtn=document[_0x139d8d(0x88)]('teacher_btn');try{async function GetaDocument(){const _0xe3b0f6=_0x139d8d;if(uname[_0xe3b0f6(0x6d)]==_0xe3b0f6(0x79)&&upass[_0xe3b0f6(0x6d)]==_0xe3b0f6(0x73))window[_0xe3b0f6(0x87)]('admin_ui.html'),window[_0xe3b0f6(0x87)]('',_0xe3b0f6(0x95))[_0xe3b0f6(0x76)]();else{if(uname[_0xe3b0f6(0x6d)]==''||upass[_0xe3b0f6(0x6d)]=='')document[_0xe3b0f6(0x88)]('pop-up-message')[_0xe3b0f6(0x71)]=_0xe3b0f6(0x81),document[_0xe3b0f6(0x88)](_0xe3b0f6(0x6c))[_0xe3b0f6(0x75)][_0xe3b0f6(0x8e)]='center',myPopup[_0xe3b0f6(0x77)][_0xe3b0f6(0x72)](_0xe3b0f6(0x70));else{var _0x2f78e5=doc(db,_0xe3b0f6(0x8c),uname[_0xe3b0f6(0x6d)]);const _0x262853=await getDoc(_0x2f78e5);if(_0x262853['exists']()){var _0x52f78b=_0x262853['data']()[_0xe3b0f6(0x80)];if(_0x52f78b==upass[_0xe3b0f6(0x6d)]){var _0x585254=_0x262853[_0xe3b0f6(0x82)]()[_0xe3b0f6(0x6e)],_0x44a8c0=_0x262853[_0xe3b0f6(0x82)]()['TeacherID'];localStorage[_0xe3b0f6(0x8b)](_0xe3b0f6(0x6b),_0x585254),localStorage[_0xe3b0f6(0x8b)]('teacher_id',_0x44a8c0),window[_0xe3b0f6(0x87)](_0xe3b0f6(0x7d)),window[_0xe3b0f6(0x87)]('',_0xe3b0f6(0x95))[_0xe3b0f6(0x76)]();}else document[_0xe3b0f6(0x88)](_0xe3b0f6(0x6c))['innerHTML']=_0xe3b0f6(0x83),document['getElementById']('pop-up-message')[_0xe3b0f6(0x75)]['textAlign']=_0xe3b0f6(0x89),myPopup[_0xe3b0f6(0x77)]['add'](_0xe3b0f6(0x70)),upass[_0xe3b0f6(0x6d)]='';}else document[_0xe3b0f6(0x88)](_0xe3b0f6(0x6c))[_0xe3b0f6(0x71)]=_0xe3b0f6(0x92),document[_0xe3b0f6(0x88)](_0xe3b0f6(0x6c))[_0xe3b0f6(0x75)]['textAlign']='center',myPopup['classList'][_0xe3b0f6(0x72)](_0xe3b0f6(0x70)),uname[_0xe3b0f6(0x6d)]='',upass['value']='';}}}logbtn[_0x139d8d(0x85)]('click',GetaDocument);}catch(_0x19dc19){console[_0x139d8d(0x78)](_0x19dc19);}closePopup[_0x139d8d(0x85)](_0x139d8d(0x96),function(){const _0x2fbc9f=_0x139d8d;myPopup['classList'][_0x2fbc9f(0x7a)](_0x2fbc9f(0x70));}),window[_0x139d8d(0x85)](_0x139d8d(0x96),function(_0x43f898){const _0x118515=_0x139d8d;_0x43f898['target']==myPopup&&myPopup[_0x118515(0x77)][_0x118515(0x7a)]('show');});function _0x3426(){const _0x4f614f=['click','teacher_name','pop-up-message','value','TeacherName','2712796fWtVsg','show','innerHTML','add','jmNkETms,LMVpwlO','20070SOlYFj','style','close','classList','log','antipoloteamadmingYoDpiGEBc','remove','10767620xvFzNu','3IQiOty','Teacher_Workplace.html','602734cEDIkU','1:88056856756:web:9597da80bb7239996bd7e1','password','Please\x20fill\x20up\x20first!','data','Please\x20check\x20your\x20password','antipolo-hackathon-project.appspot.com','addEventListener','teacher_id','open','getElementById','center','3555uqicUX','setItem','TEACHER_LIST','294TpKgnB','textAlign','antipolo-hackathon-project.firebaseapp.com','AIzaSyByH0pNuEoNXna4Dj61C2QxIX-AfmFAnq0','6608DleCPb','Teacher\x20ID\x20and\x20Password\x20doesn\x27t\x20exist!','6250048rXLLil','621438oencYX','_self'];_0x3426=function(){return _0x4f614f;};return _0x3426();}
