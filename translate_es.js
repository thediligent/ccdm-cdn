function setCookie(cname, cvalue, exdays) {
    var expires;
    if (exdays === 0) {
        expires = '';
    } else {
        var d = new Date();
        d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
        expires = "expires=" + d.toGMTString();
    }
    var domain = (typeof domain === "undefined") ? '' : "; domain="+domain;
    document.cookie = cname + "=" + cvalue + "; " + expires + "path=" + path + domain;
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i].trim();
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

//Google provides this function
function googleTranslateElementInit() {
    new google.translate.TranslateElement({
        pageLanguage: 'es',
        includedLanguages: 'en',
        layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
       autoDisplay: false
    },'google_translate_element');
}

//Using jQuery
jQuery(document).ready(function() {
    jQuery(document).on('click','#esp-toggle', function() {
        setCookie('googtrans', '/es/en', 0, '.miraaesthetic.com');
        setCookie('googtrans', '', 0, '/');
        location.reload();
    });

    jQuery(document).on('click', '#eng-toggle', function() {
        setCookie('googtrans', '', 0, '/', '.miraaesthetic.com');
        setCookie('googtrans', '', 0, '/');
        location.reload();
    });

    var googTrans = getCookie('googtrans');
});
