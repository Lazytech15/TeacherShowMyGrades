var _0x42f5f4=_0x421c;function _0x421c(_0x209bec,_0x17176a){var _0x422261=_0x4e39();return _0x421c=function(_0x1d812d,_0x4cfbc2){_0x1d812d=_0x1d812d-0x109;var _0x4da6d7=_0x422261[_0x1d812d];return _0x4da6d7;},_0x421c(_0x209bec,_0x17176a);}(function(_0x398474,_0x453bdf){var _0x4ec32c=_0x421c,_0x2c7af5=_0x398474();while(!![]){try{var _0x10b7ac=parseInt(_0x4ec32c(0x13d))/0x1+parseInt(_0x4ec32c(0x11b))/0x2+-parseInt(_0x4ec32c(0x125))/0x3*(parseInt(_0x4ec32c(0x11a))/0x4)+parseInt(_0x4ec32c(0x13a))/0x5+parseInt(_0x4ec32c(0x110))/0x6*(-parseInt(_0x4ec32c(0x130))/0x7)+-parseInt(_0x4ec32c(0x11d))/0x8+parseInt(_0x4ec32c(0x13b))/0x9;if(_0x10b7ac===_0x453bdf)break;else _0x2c7af5['push'](_0x2c7af5['shift']());}catch(_0x510413){_0x2c7af5['push'](_0x2c7af5['shift']());}}}(_0x4e39,0x315d0));var _0x4cfbc2=(function(){var _0x35e23e=!![];return function(_0x3a9270,_0x57841d){var _0x56bdfc=_0x35e23e?function(){if(_0x57841d){var _0xe41182=_0x57841d['apply'](_0x3a9270,arguments);return _0x57841d=null,_0xe41182;}}:function(){};return _0x35e23e=![],_0x56bdfc;};}()),_0x1d812d=_0x4cfbc2(this,function(){var _0x265f07=_0x421c,_0x907393=function(){var _0x5b8130=_0x421c,_0x5da36e;try{_0x5da36e=Function(_0x5b8130(0x129)+'{}.constructor(\x22return\x20this\x22)(\x20)'+');')();}catch(_0x43ea02){_0x5da36e=window;}return _0x5da36e;},_0x2cef8a=_0x907393(),_0x2524c6=_0x2cef8a[_0x265f07(0x12c)]=_0x2cef8a[_0x265f07(0x12c)]||{},_0x4ca58a=[_0x265f07(0x13c),_0x265f07(0x12b),_0x265f07(0x117),_0x265f07(0x109),_0x265f07(0x127),_0x265f07(0x10a),_0x265f07(0x138)];for(var _0xecde18=0x0;_0xecde18<_0x4ca58a[_0x265f07(0x116)];_0xecde18++){var _0x20bfda=_0x4cfbc2[_0x265f07(0x123)][_0x265f07(0x11c)][_0x265f07(0x126)](_0x4cfbc2),_0x2d74b4=_0x4ca58a[_0xecde18],_0x465f27=_0x2524c6[_0x2d74b4]||_0x20bfda;_0x20bfda['__proto__']=_0x4cfbc2['bind'](_0x4cfbc2),_0x20bfda[_0x265f07(0x10e)]=_0x465f27[_0x265f07(0x10e)][_0x265f07(0x126)](_0x465f27),_0x2524c6[_0x2d74b4]=_0x20bfda;}});_0x1d812d();import{initializeApp}from'https://www.gstatic.com/firebasejs/10.5.2/firebase-app.js';const firebaseConfig={'apiKey':_0x42f5f4(0x121),'authDomain':_0x42f5f4(0x10b),'projectId':_0x42f5f4(0x12e),'storageBucket':_0x42f5f4(0x133),'messagingSenderId':_0x42f5f4(0x131),'appId':_0x42f5f4(0x10d)},app=initializeApp(firebaseConfig);import{getFirestore,doc,getDoc,collection,addDoc,setDoc,updateDoc,deleteDoc,deleteField}from'https://www.gstatic.com/firebasejs/10.5.2/firebase-firestore.js';const db=getFirestore();var teacher_id=document[_0x42f5f4(0x137)](_0x42f5f4(0x11f)),first_name=document[_0x42f5f4(0x137)](_0x42f5f4(0x112)),middle_initial=document['getElementById'](_0x42f5f4(0x124)),last_name=document['getElementById'](_0x42f5f4(0x10c)),pass=document['getElementById'](_0x42f5f4(0x139)),register_button=document[_0x42f5f4(0x137)](_0x42f5f4(0x13f));async function SaveRegistrationFrom(){var _0x3ae4ca=_0x42f5f4;if(teacher_id['value']==''||pass['value']==''||first_name[_0x3ae4ca(0x134)]==''||last_name['value']=='')document['getElementById'](_0x3ae4ca(0x118))[_0x3ae4ca(0x114)]=_0x3ae4ca(0x128),document[_0x3ae4ca(0x137)](_0x3ae4ca(0x118))[_0x3ae4ca(0x120)]['textAlign']='center',myPopup[_0x3ae4ca(0x10f)][_0x3ae4ca(0x135)](_0x3ae4ca(0x13e));else{var _0x5a4e36=doc(db,_0x3ae4ca(0x12f),teacher_id[_0x3ae4ca(0x134)]);const _0x31cdad=await getDoc(_0x5a4e36);if(_0x31cdad[_0x3ae4ca(0x122)]())document[_0x3ae4ca(0x137)](_0x3ae4ca(0x118))[_0x3ae4ca(0x114)]=_0x3ae4ca(0x11e),document['getElementById']('pop-up-message')[_0x3ae4ca(0x120)][_0x3ae4ca(0x113)]='center',myPopup[_0x3ae4ca(0x10f)][_0x3ae4ca(0x135)](_0x3ae4ca(0x13e)),teacher_id[_0x3ae4ca(0x134)]='',first_name['value']='',middle_initial[_0x3ae4ca(0x134)]='',last_name['value']='',pass[_0x3ae4ca(0x134)]='';else{var _0x5a4e36=doc(db,'TEACHER_LIST',teacher_id[_0x3ae4ca(0x134)]);setDoc(_0x5a4e36,{'TeacherID':teacher_id[_0x3ae4ca(0x134)],'TeacherName':first_name[_0x3ae4ca(0x134)]+'\x20'+middle_initial[_0x3ae4ca(0x134)]+'\x20'+last_name['value'],'password':pass[_0x3ae4ca(0x134)]}),document['getElementById'](_0x3ae4ca(0x12d))['style']='display:\x20none',document[_0x3ae4ca(0x137)](_0x3ae4ca(0x118))[_0x3ae4ca(0x114)]=_0x3ae4ca(0x111),document[_0x3ae4ca(0x137)](_0x3ae4ca(0x118))['style'][_0x3ae4ca(0x113)]=_0x3ae4ca(0x132),myPopup[_0x3ae4ca(0x10f)][_0x3ae4ca(0x135)](_0x3ae4ca(0x13e)),teacher_id[_0x3ae4ca(0x134)]='',first_name['value']='',middle_initial[_0x3ae4ca(0x134)]='',last_name[_0x3ae4ca(0x134)]='',pass[_0x3ae4ca(0x134)]='';}}}function _0x4e39(){var _0x3843d9=['length','info','pop-up-message','target','153968JOBUxn','444608fpbfBH','prototype','3117512morXLR','Teacher\x20ID\x20already\x20exist!','teacher_id','style','AIzaSyByH0pNuEoNXna4Dj61C2QxIX-AfmFAnq0','exists','constructor','middle_initial','15HhbxFn','bind','exception','Please\x20Fill\x20up\x20all\x20the\x20requirements','return\x20(function()\x20','addEventListener','warn','console','pop-up-top','antipolo-hackathon-project','TEACHER_LIST','57435czcbHc','88056856756','center','antipolo-hackathon-project.appspot.com','value','add','click','getElementById','trace','password','532435uhnMDd','702513zouVhf','log','385698nBvopK','show','register_button','error','table','antipolo-hackathon-project.firebaseapp.com','last_name','1:88056856756:web:9597da80bb7239996bd7e1','toString','classList','6JdyZjC','Congrats!,\x20Registration\x20Succesfully!','first_name','textAlign','innerHTML','remove'];_0x4e39=function(){return _0x3843d9;};return _0x4e39();}register_button['addEventListener']('click',SaveRegistrationFrom),closePopup[_0x42f5f4(0x12a)](_0x42f5f4(0x136),function(){var _0xa96d7e=_0x42f5f4;myPopup[_0xa96d7e(0x10f)][_0xa96d7e(0x115)]('show');}),window[_0x42f5f4(0x12a)](_0x42f5f4(0x136),function(_0x27f9bd){var _0x12cade=_0x42f5f4;_0x27f9bd[_0x12cade(0x119)]==myPopup&&myPopup[_0x12cade(0x10f)]['remove'](_0x12cade(0x13e));});
