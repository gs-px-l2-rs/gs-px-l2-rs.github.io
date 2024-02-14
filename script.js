//GAINSIGHT PX Product Tag - disabled to use GTM
/*   (function(n,t,a,e,co){var i="aptrinsic";n[i]=n[i]||function(){
      (n[i].q=n[i].q||[]).push(arguments)},n[i].p=e;n[i].c=co;
    var r=t.createElement("script");r.async=!0,r.src=a+"?a="+e;
    var c=t.getElementsByTagName("script")[0];c.parentNode.insertBefore(r,c)
  })(window,document,"https://web-sdk.aptrinsic.com/api/aptrinsic.js","AP-3JBWPZMJAMBI-2",{"iframeModeEnabled":true, "allowCrossDomain":true}); */

//-- Google Tag Manager -->
 (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
  new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
  j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
  'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
  })(window,document,'script','dataLayer','GTM-NJ9LZMBP');

function login() {
    const loginForm = document.getElementById("login-form");
    const uEmail = loginForm.username.value;
    const uPassword = loginForm.password.value;
    const userId = md5(uEmail);
    const acctName = {
        acct1: "Slice Tech",
        acct2: "NazDeck",
        acct3: "Shoomp LLC",
        acct4: "WPL Int"
    }
    const acctId = {
        acct1: "jd84yfh263",
        acct2: "jhdf7597i8",
        acct3: "bct3528fjf",
        acct4: "kfr8395ifn"
    }
    if (uEmail === "pxuser1@example.com" && uPassword === "px") {
        aptrinsic("identify",
        {
        //User Fields
            "id": userId, // Required for logged in app users
            "email": uEmail
        },
        {
        //Account Fields
            "id":acctId.acct1, //Required
            "name":acctName.acct1
        });
        setTimeout(() => { window.location.href="index.html"; }, 1000);
    }
    else if (uEmail === "pxuser2@example.com" && uPassword === "px") {
        aptrinsic("identify",
        {
        //User Fields
            "id": userId, // Required for logged in app users
            "email": uEmail
        },
        {
        //Account Fields
            "id":acctId.acct2, //Required
            "name":acctName.acct2
        });
        setTimeout(() => { window.location.href="index.html"; }, 1000);
    }
    else if (uEmail === "pxuser3@example.com" && uPassword === "px") {
        aptrinsic("identify",
        {
        //User Fields
            "id": userId, // Required for logged in app users
            "email": uEmail
        },
        {
        //Account Fields
            "id":acctId.acct3, //Required
            "name":acctName.acct3
        });
        setTimeout(() => { window.location.href="index.html"; }, 1000);
    }else if (uEmail === "pxuser4@example.com" && uPassword === "px") {
        aptrinsic("identify",
        {
        //User Fields
            "id": userId, // Required for logged in app users
            "email": uEmail
        },
        {
        //Account Fields
            "id":acctId.acct4, //Required
            "name":acctName.acct4
        });
        setTimeout(() => { window.location.href="index.html"; }, 1000);
    } 
    else {
        alert('Invalid username or password');
    }
    document.cookie = 'username='+uEmail+';Domain=.gs-px-l2-rs.github.io; path=/';
}
function showHint(){
    const hint = "pxuser<n>@example.com, px";
    alert(hint);
  }

  function logout() {
    var path = window.location.pathname;
    var page = path.split("/").pop();
    document.cookie = 'username=; Domain=.gs-px-l2-rs.github.io; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    document.cookie = 'account=; Domain=.gs-px-l2-rs.github.io; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    window.aptrinsic('reset');
    counter = 0;
    setTimeout(() => { window.location.href="login.html"; }, 500);
}

function submitProject(){
    var checkedValue = null; 
    var inputElements = document.getElementsByName('project');
    for(var i=0; inputElements[i]; ++i){
          if(inputElements[i].checked){
               checkedValue = inputElements[i].value;
               break;
          }
    }
    if(checkedValue){
        alert("Opening " + checkedValue + "...");
        aptrinsic("track","Open Project",{"projectName":checkedValue});
    }
    else{
        alert("no project selected");
    }
}
function resetProject(){
    window.history.replaceState(null, '', window.location.pathname);
}

function resetProject(){
    alert("project reset");
}

function submitBuild(){
    const buildForm = document.getElementById("build-form");
    const fName = buildForm.fname.value;
    const lName = buildForm.lname.value;
    const fullName = fName.concat(" ", lName);
    const pid = buildForm.pid.value;
    const duedate = buildForm.duedate.value;
    aptrinsic('track','Submit Build Form',{"pid":pid,"name":fullName,"requested due date":duedate});
    alert("Thank you, "+fullName+". We're building project "+pid+". We'll have it ready by "+duedate+".");
}

function runTest() {
    var x = document.getElementById("test-div");
    var y = document.getElementById("deploy-button");
    if (x.style.display === "none") {
      x.style.display = "block";
      setTimeout(() => { x.style.display = "none";y.style.display = "block"; }, 5000);
    } else {
      x.style.display = "none";
    }
  }

  function runDeploy() {
    var x = document.getElementById("test-div");
    if (x.style.display === "none") {
      x.style.display = "block";
      setTimeout(() => { x.style.display = "none"; alert("Congratulations! You're project has been deployed:]")}, 6000);
    } else {
      x.style.display = "none"; 
}}
function goDeploy(){
    window.location.href="deploy.html";   
}
function notifyMe(){
    var x = document.getElementById("notifyMe").checked;
    aptrinsic('set', 'user', {'notifyMe' : x});
    aptrinsic('track', 'notifyMe', {'target state' : x});
}
function sendFeedback(){
    const type=document.getElementById('type').value;
    const subject=document.getElementById('subject').value;
    const message=document.getElementById('description').value;
// alert(type+" "+subject+" "+message);
aptrinsic('send', 'feedback', { 'category':  type,'subject': subject, 'description': message });
}