
  (function(n,t,a,e,co){var i="aptrinsic";n[i]=n[i]||function(){
      (n[i].q=n[i].q||[]).push(arguments)},n[i].p=e;n[i].c=co;
    var r=t.createElement("script");r.async=!0,r.src=a+"?a="+e;
    var c=t.getElementsByTagName("script")[0];c.parentNode.insertBefore(r,c)
  })(window,document,"https://web-sdk.aptrinsic.com/api/aptrinsic.js","AP-3JBWPZMJAMBI-2");

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