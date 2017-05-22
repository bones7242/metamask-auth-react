console.log("loading the 'cookies' helper functions");

module.exports = {
    setCookie: function(cname, cvalue, exdays) {
        console.log("setting cookie:", cname);
        var d = new Date();
        d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
        var expires = "expires="+d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    },
    getCookie: function(cname) {
        console.log("getting cookie: ", cname);
        var name = cname + "=";
        var ca = document.cookie.split(';');
        for(var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    },
    doesCookieExist: function(cname) {
        console.log("checking for cookie: ", cname);
        var name = cname + "=";
        var ca = document.cookie.split(';');
        for(var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return true;
            }
        }
        return false;
    },
    removeCookie: function(cname){
        console.log("removing cookie:", cname);
        this.setCookie(cname,"",-1);
    }
}

