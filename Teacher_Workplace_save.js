const _0x299f07=_0x5002;(function(_0x22324a,_0x5b4f43){const _0x16d1f1=_0x5002,_0x367802=_0x22324a();while(!![]){try{const _0x3af9fe=-parseInt(_0x16d1f1(0x1ee))/0x1*(parseInt(_0x16d1f1(0x226))/0x2)+-parseInt(_0x16d1f1(0x217))/0x3*(parseInt(_0x16d1f1(0x203))/0x4)+parseInt(_0x16d1f1(0x215))/0x5+parseInt(_0x16d1f1(0x21e))/0x6*(-parseInt(_0x16d1f1(0x222))/0x7)+-parseInt(_0x16d1f1(0x216))/0x8+-parseInt(_0x16d1f1(0x1ff))/0x9*(parseInt(_0x16d1f1(0x1e2))/0xa)+parseInt(_0x16d1f1(0x213))/0xb;if(_0x3af9fe===_0x5b4f43)break;else _0x367802['push'](_0x367802['shift']());}catch(_0x4c9f30){_0x367802['push'](_0x367802['shift']());}}}(_0x2673,0x8d8fd));import{initializeApp}from'https://www.gstatic.com/firebasejs/10.5.2/firebase-app.js';const firebaseConfig={'apiKey':_0x299f07(0x1fc),'authDomain':_0x299f07(0x1eb),'projectId':'antipolo-hackathon-project','storageBucket':_0x299f07(0x1d6),'messagingSenderId':'88056856756','appId':_0x299f07(0x1e5)},app=initializeApp(firebaseConfig);import{getFirestore,doc,getDoc,setDoc,serverTimestamp}from'https://www.gstatic.com/firebasejs/10.5.2/firebase-firestore.js';const db=getFirestore();var Email={'send':function(_0x156f5a){return new Promise(function(_0x19a4f8,_0x43567f){const _0x58fed7=_0x5002;_0x156f5a[_0x58fed7(0x20d)]=Math[_0x58fed7(0x1fb)](0xf4240*Math['random']()+0x1),_0x156f5a['Action']='Send';var _0x18b4f2=JSON[_0x58fed7(0x1de)](_0x156f5a);Email[_0x58fed7(0x224)](_0x58fed7(0x1fd),_0x18b4f2,function(_0x9a9087){_0x19a4f8(_0x9a9087);});});},'ajaxPost':function(_0x9003e9,_0x38a986,_0x4eac99){const _0x314f90=_0x299f07;var _0x404529=Email[_0x314f90(0x223)](_0x314f90(0x20e),_0x9003e9);_0x404529[_0x314f90(0x214)](_0x314f90(0x20a),'application/x-www-form-urlencoded'),_0x404529[_0x314f90(0x209)]=function(){const _0x3fc41f=_0x314f90;var _0x4442d3=_0x404529[_0x3fc41f(0x21a)];null!=_0x4eac99&&_0x4eac99(_0x4442d3);},_0x404529[_0x314f90(0x206)](_0x38a986);},'ajax':function(_0x46b19f,_0x4c35e5){const _0x56e404=_0x299f07;var _0x50c1ac=Email[_0x56e404(0x223)](_0x56e404(0x1f4),_0x46b19f);_0x50c1ac[_0x56e404(0x209)]=function(){var _0x55af7d=_0x50c1ac['responseText'];null!=_0x4c35e5&&_0x4c35e5(_0x55af7d);},_0x50c1ac[_0x56e404(0x206)]();},'createCORSRequest':function(_0x4ae93a,_0x23caad){const _0x34a5a6=_0x299f07;var _0x5b1e66=new XMLHttpRequest();return'withCredentials'in _0x5b1e66?_0x5b1e66['open'](_0x4ae93a,_0x23caad,!0x0):'undefined'!=typeof XDomainRequest?(_0x5b1e66=new XDomainRequest())[_0x34a5a6(0x20f)](_0x4ae93a,_0x23caad):_0x5b1e66=null,_0x5b1e66;}};const teacher_id=localStorage[_0x299f07(0x1ea)](_0x299f07(0x204)),teacher_name=localStorage[_0x299f07(0x1ea)]('teacher_name');function _0x5002(_0x1839bb,_0x5e8290){const _0x26731e=_0x2673();return _0x5002=function(_0x500251,_0x4b0fb6){_0x500251=_0x500251-0x1d6;let _0x27b41f=_0x26731e[_0x500251];return _0x27b41f;},_0x5002(_0x1839bb,_0x5e8290);}let codecontainer=[],subjectsData=[],pass,email,allsubs=[],imageqr=document[_0x299f07(0x219)](_0x299f07(0x1f6)),tname=document[_0x299f07(0x219)](_0x299f07(0x1ed)),selectCourscode=document[_0x299f07(0x219)](_0x299f07(0x1d8)),viewQR=document[_0x299f07(0x219)](_0x299f07(0x1fa)),dragName=document[_0x299f07(0x219)](_0x299f07(0x20c)),fileName;const input=document['querySelector'](_0x299f07(0x1d7));input[_0x299f07(0x1e3)]=_0x25c4d8=>{const _0x3fd8d4=_0x299f07,[_0x5682f6]=_0x25c4d8[_0x3fd8d4(0x1f9)][_0x3fd8d4(0x1f1)];fileName=_0x5682f6['name'],console[_0x3fd8d4(0x1fe)](fileName);},document[_0x299f07(0x219)](_0x299f07(0x208))['addEventListener'](_0x299f07(0x201),()=>{const _0x4ed5e4=_0x299f07;fileName=dragName['innerHTML'],codecontainer['push'](results[_0x4ed5e4(0x218)][0x0][_0x4ed5e4(0x200)]),codecontainer=[...new Set(codecontainer)];if(results&&Array['isArray'](results[_0x4ed5e4(0x218)])){let _0x50decd=results[_0x4ed5e4(0x218)][0x0]?results['data'][0x0][_0x4ed5e4(0x200)]:null,_0x242387=results['data'][_0x4ed5e4(0x21f)](_0x2c3fe8=>_0x2c3fe8[_0x4ed5e4(0x200)]);for(let _0x354a4f=0x1;_0x354a4f<_0x242387[_0x4ed5e4(0x220)];_0x354a4f++){if(_0x242387[_0x354a4f]!==_0x50decd)document[_0x4ed5e4(0x219)](_0x4ed5e4(0x1f5))[_0x4ed5e4(0x1e9)]=_0x4ed5e4(0x1f3),document['getElementById'](_0x4ed5e4(0x1da))[_0x4ed5e4(0x211)]=_0x4ed5e4(0x1f2),document[_0x4ed5e4(0x219)](_0x4ed5e4(0x1da))[_0x4ed5e4(0x1e9)]['textAlign']='center',myPopup['classList'][_0x4ed5e4(0x202)]('show'),cleanUp();else{var _0x2741a6=doc(db,_0x4ed5e4(0x1e8),fileName);setDoc(_0x2741a6,{'Alldata':results,'Teacher_Name':teacher_name,'Teacher_ID':teacher_id,'File_Name':fileName,'Email_Address':email,'Status':_0x4ed5e4(0x225),'createdAt':serverTimestamp()});const _0x8f1c37=subjectsData[_0x4ed5e4(0x221)]()[_0x4ed5e4(0x212)]((_0x1f1abb,_0x3771d9,_0x4af052)=>{return _0x4af052['indexOf'](_0x1f1abb)===_0x3771d9;});var _0x2741a6=doc(db,_0x4ed5e4(0x1ef),teacher_id);setDoc(_0x2741a6,{'TeacherID':teacher_id,'TeacherName':teacher_name,'password':pass,'Email_Address':email,'subjects':_0x8f1c37}),document[_0x4ed5e4(0x219)](_0x4ed5e4(0x1f5))[_0x4ed5e4(0x1e9)]=_0x4ed5e4(0x1f3),document[_0x4ed5e4(0x219)](_0x4ed5e4(0x1da))[_0x4ed5e4(0x211)]=_0x4ed5e4(0x210),document[_0x4ed5e4(0x219)](_0x4ed5e4(0x1da))['style']['textAlign']=_0x4ed5e4(0x1e0),myPopup[_0x4ed5e4(0x1e6)][_0x4ed5e4(0x202)]('show'),cleanUp();}}}else console[_0x4ed5e4(0x1fe)](_0x4ed5e4(0x20b));});async function transferData(){const _0x1bb0c3=_0x299f07,_0x1e3988=doc(db,_0x1bb0c3(0x1ef),teacher_id),_0x28150c=await getDoc(_0x1e3988);if(_0x28150c[_0x1bb0c3(0x21d)]()){tname[_0x1bb0c3(0x1dc)]=_0x28150c[_0x1bb0c3(0x218)]()[_0x1bb0c3(0x21b)],email=_0x28150c['data']()['Email_Address'],allsubs['push'](_0x28150c[_0x1bb0c3(0x218)]()[_0x1bb0c3(0x1d9)]),allsubs[_0x1bb0c3(0x1dd)](_0x297107=>{const _0x2a696d=_0x1bb0c3;subjectsData=[_0x297107,codecontainer];const _0x4f64fc=subjectsData[_0x2a696d(0x221)]()[_0x2a696d(0x212)]((_0x27e933,_0x12de72,_0x5a9fad)=>{return _0x5a9fad['indexOf'](_0x27e933)===_0x12de72;});}),pass=_0x28150c[_0x1bb0c3(0x218)]()['password'],allsubs=_0x28150c[_0x1bb0c3(0x218)]()[_0x1bb0c3(0x1d9)];const _0x822c95=document[_0x1bb0c3(0x219)](_0x1bb0c3(0x1d8));for(let _0x3b4656=0x0;_0x3b4656<allsubs[_0x1bb0c3(0x220)];_0x3b4656++){const _0x50a7f9=document[_0x1bb0c3(0x205)](_0x1bb0c3(0x1f7));_0x50a7f9[_0x1bb0c3(0x1e1)]=allsubs[_0x3b4656],_0x50a7f9['value']=allsubs[_0x3b4656],_0x822c95[_0x1bb0c3(0x202)](_0x50a7f9);}}}viewQR['addEventListener'](_0x299f07(0x201),function(){const _0x57e833=_0x299f07;let _0x13223=generateVerifCode()+','+selectCourscode[_0x57e833(0x1dc)]+','+generateVerifCode()+tname[_0x57e833(0x1dc)];imageqr[_0x57e833(0x1df)]=_0x57e833(0x1f0)+_0x13223;}),window[_0x299f07(0x209)]=transferData;function generateVerifCode(){const _0x8bfc86=_0x299f07,_0x4ecb63=_0x8bfc86(0x1e7),_0x389210=_0x8bfc86(0x1db),_0x5c71ef='0123456789',_0x2b186c=_0x4ecb63+_0x5c71ef+_0x389210;let _0x58928f='';_0x58928f+=_0x4ecb63[Math[_0x8bfc86(0x1fb)](Math['random']()*_0x4ecb63[_0x8bfc86(0x220)])],_0x58928f+=_0x5c71ef[Math['floor'](Math[_0x8bfc86(0x21c)]()*_0x5c71ef[_0x8bfc86(0x220)])],_0x58928f+=_0x389210[Math[_0x8bfc86(0x1fb)](Math['random']()*_0x389210[_0x8bfc86(0x220)])];for(let _0x4dfe68=0x1;_0x4dfe68<=0x5;_0x4dfe68++){_0x58928f+=_0x2b186c[Math[_0x8bfc86(0x1fb)](Math[_0x8bfc86(0x21c)]()*_0x2b186c[_0x8bfc86(0x220)])];}return _0x58928f;}closePopup['addEventListener']('click',function(){const _0x1166b9=_0x299f07;myPopup['classList'][_0x1166b9(0x207)](_0x1166b9(0x1e4));}),window[_0x299f07(0x1ec)](_0x299f07(0x201),function(_0xa19f45){const _0x296239=_0x299f07;_0xa19f45[_0x296239(0x1f9)]==myPopup&&myPopup[_0x296239(0x1e6)]['remove'](_0x296239(0x1e4));});function cleanUp(){const _0x2da459=_0x299f07;fileInput['value']=null,fileNameEl['textContent']='',clearTable(),dropzone[_0x2da459(0x1e9)][_0x2da459(0x1f8)]='',secondaryNav['style'][_0x2da459(0x1f8)]='';}function _0x2673(){const _0x2e5b9b=['open','Data\x20uploaded\x20succesfully,\x20Please\x20be\x20informed\x20that\x20the\x20data\x20will\x20not\x20be\x20automatically\x20distribute,\x20it\x20will\x20go\x20to\x20in\x20academic\x20approval\x20section,\x20Thank\x20you!','innerHTML','filter','21543643YQJCqq','setRequestHeader','5227750ryLQop','2828864kcuCxn','1265346ONtpAz','data','getElementById','responseText','TeacherName','random','exists','6ZobTHB','map','length','flat','4581269uoqTxF','createCORSRequest','ajaxPost','PENDING','85946AJjZdh','antipolo-hackathon-project.appspot.com','#input-file','select-coursecode','subjects','pop-up-message','abcdefghijklmnopqrstuvwxyz','value','forEach','stringify','src','center','text','50AWmHay','onchange','show','1:88056856756:web:9597da80bb7239996bd7e1','classList','ABCDEFGHIJKLMNOPQRSTUVWXYZ','PENDING-STUD-DATA','style','getItem','antipolo-hackathon-project.firebaseapp.com','addEventListener','tname','23oyxvEh','TEACHER_LIST','https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=','files','Its\x20seems\x20that\x20their\x20is\x20among\x20us\x20in\x20COURSE_CODE,\x20Please\x20Check\x20it\x20thank\x20you','display:\x20none','GET','pop-up-top','displayQR','option','display','target','viewQR','floor','AIzaSyByH0pNuEoNXna4Dj61C2QxIX-AfmFAnq0','https://smtpjs.com/v3/smtpjs.aspx?','log','10782ILHExz','COURSE_CODE','click','add','4iMfnFv','teacher_id','createElement','send','remove','submit-button','onload','Content-type','results\x20or\x20results.data\x20is\x20undefined\x20or\x20not\x20an\x20array','file-name','nocache','POST'];_0x2673=function(){return _0x2e5b9b;};return _0x2673();}
