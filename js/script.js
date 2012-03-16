/* Author: altryne - alexw.me
*/

var services_obj = {
    "facebook":{
        "profile_pic":"http://www.facebook.com/editprofile.php",
        "bio":"http://www.facebook.com/editprofile.php",
        "delete":"",
        "apps":"http://www.facebook.com/settings/?tab=applications",
        "email_settings":"http://www.facebook.com/settings?tab=notifications&section=Facebook&t",
        "privacy":"http://www.facebook.com/settings/?tab=privacy",
        "design":"http://www.facebook.com/editprofile.php",
        "username":"https://www.facebook.com/settings?tab=account&t",
        "mobile":"https://www.facebook.com/settings?tab=mobile",
        "accounts":"https://www.facebook.com/settings?tab=account&t",
        "email":"https://www.facebook.com/settings?tab=account&t",
        "pass":"https://www.facebook.com/settings?tab=account&t",
        "recover":"https://www.facebook.com/recover.php"
    },
    "twitter":{
        "profile_pic":"https://twitter.com/settings/profile",
        "bio":"https://twitter.com/settings/profile",
        "delete":"https://twitter.com/settings/account",
        "apps":"https://twitter.com/settings/applications",
        "email_settings":"https://twitter.com/settings/notifications",
        "privacy":"",
        "design":"https://twitter.com/settings/design",
        "username":"https://twitter.com/settings/account",
        "mobile":"https://twitter.com/settings/devices",
        "accounts":"https://twitter.com/settings/profile",
        "email":"https://twitter.com/settings/account",
        "pass":"https://twitter.com/settings/password",
        "recover":""
    },
    "pinterest":{
        "profile_pic":"https://pinterest.com/settings/",
        "bio":"https://pinterest.com/settings/",
        "delete":"https://pinterest.com/settings/",
        "apps":"",
        "email_settings":"https://pinterest.com/prefs/",
        "privacy":"",
        "design":"",
        "username":"https://pinterest.com/settings/",
        "mobile":"",
        "accounts":"https://pinterest.com/settings/",
        "email":"https://pinterest.com/settings/",
        "pass":"https://pinterest.com/settings/",
        "recover":"https://pinterest.com/login/?next=%2F"
    },
    "tumblr":{
        "profile_pic":"",
        "bio":"",
        "delete":"",
        "apps":"https://www.tumblr.com/preferences",
        "email_settings":"https://www.tumblr.com/preferences",
        "privacy":"",
        "design":"http://www.tumblr.com/customize",
        "username":"",
        "mobile":"",
        "accounts":"https://www.tumblr.com/preferences",
        "email":"https://www.tumblr.com/preferences",
        "pass":"https://www.tumblr.com/preferences",
        "recover":"https://www.tumblr.com/forgot_password"
    },
    "youtube":{
        "profile_pic":"http://www.youtube.com/account?feature=mhee",
        "bio":"http://www.youtube.com/account_profile",
        "delete":"http://www.youtube.com/account_manage",
        "apps":"http://www.youtube.com/account_sharing",
        "email_settings":"http://www.youtube.com/account_notifications",
        "privacy":"http://www.youtube.com/account_privacy",
        "design":"http://www.youtube.com/channel_editor?action_editor=1&editor_tab=branding",
        "username":"",
        "mobile":"http://www.youtube.com/account_mobile_setup",
        "accounts":"http://www.youtube.com/account_sharing",
        "email":"",
        "pass":"https://accounts.google.com/b/0/EditPasswd",
        "recover":"http://www.youtube.com/account_recovery"
    },
    "foursquare":{
        "profile_pic":"https://foursquare.com/settings/",
        "bio":"",
        "delete":"https://foursquare.com/delete_me",
        "apps":"https://foursquare.com/login?continue=%2Fsettings%2Fconnections",
        "email_settings":"https://foursquare.com/settings/",
        "privacy":"https://foursquare.com/settings/privacy",
        "design":"",
        "username":"",
        "mobile":"",
        "accounts":"https://foursquare.com/settings/sharing",
        "email":"",
        "pass":"https://foursquare.com/settings/",
        "recover":"https://foursquare.com/change_password"
    },
    "linkedin":{
        "profile_pic":"http://www.linkedin.com/profile/edit-picture-info?goback=%2Enas_*1_*1_*1&trk=nprofile-edit-picture-info",
        "bio":"http://www.linkedin.com/profile/edit?goback=%2Enas_*1_*1_*1",
        "delete":"https://www.linkedin.com/secure/settings?closemyaccountstart=&goback=%2Enas_*1_*1_*1",
        "apps":"https://www.linkedin.com/secure/settings?userAgree=&goback=.aas",
        "email_settings":"https://www.linkedin.com/uas/login?session_redirect=https%3A%2F%2Fwww%2Elinkedin%2Ecom%2Fsettings%2F%3Ftrk%3Dhb_acc",
        "privacy":"https://www.linkedin.com/settings/?trk=hb_acc",
        "design":"",
        "username":"",
        "mobile":"",
        "accounts":"",
        "email":"",
        "pass":"",
        "recover":"http://www.linkedin.com/passwordReset"
    },
    "google":{
        "profile_pic":"",
        "bio":"",
        "delete":"",
        "apps":"",
        "email_settings":"https://www.google.com/settings/plus",
        "privacy":"https://www.google.com/settings/privacy",
        "design":"",
        "username":"",
        "mobile":"",
        "accounts":"https://www.google.com/settings/plus",
        "email":"",
        "pass":"",
        "recover":""
    },
    "meetup":{
        "profile_pic":"http://www.meetup.com/account/",
        "bio":"http://www.meetup.com/account/bio/",
        "delete":"http://www.meetup.com/account/remove/",
        "apps":"http://www.meetup.com/account/oauth_apps/",
        "email_settings":"http://www.meetup.com/account/comm/",
        "privacy":"",
        "design":"",
        "username":"",
        "mobile":"",
        "accounts":"",
        "email":"http://www.meetup.com/account/email/",
        "pass":"https://secure.meetup.com/account/password",
        "recover":"http://www.meetup.com/account/forgot/"
    },
    "stumbleupon":{
        "profile_pic":"https://www.stumbleupon.com/settings/picture",
        "bio":"https://www.stumbleupon.com/settings/profile",
        "delete":"",
        "apps":"",
        "email_settings":"https://www.stumbleupon.com/settings/privacy-emails",
        "privacy":"https://www.stumbleupon.com/settings/privacy-emails",
        "design":"",
        "username":"https://www.stumbleupon.com/settings/profile",
        "mobile":"https://www.stumbleupon.com/settings/profile",
        "accounts":"https://www.stumbleupon.com/settings/connections",
        "email":"",
        "pass":"https://www.stumbleupon.com/settings/password",
        "recover":"http://www.stumbleupon.com/reset-password"
    },
    "path":{
        "profile_pic":"https://path.com/settings",
        "bio":"",
        "delete":"",
        "apps":"",
        "email_settings":"https://path.com/settings",
        "privacy":"",
        "design":"",
        "username":"",
        "mobile":"",
        "accounts":"",
        "email":"",
        "pass":"",
        "recover":"https://path.com/forgot-password"
    },
    "instagram":{
        "profile_pic":"",
        "bio":"",
        "delete":"",
        "apps":"https://instagr.am/accounts/login/?next=/oauth/manage_access",
        "email_settings":"",
        "privacy":"",
        "design":"",
        "username":"",
        "mobile":"",
        "accounts":"",
        "email":"",
        "pass":"",
        "recover":"https://instagr.am/accounts/password/reset/"
    },
    "flickr":{
        "profile_pic":"http://www.flickr.com/iconbuilder/?from=personal",
        "bio":"",
        "delete":"http://www.flickr.com/profile_delete.gne",
        "apps":"http://www.flickr.com/services/auth/list.gne?from=extend",
        "email_settings":"http://www.flickr.com/account/email/",
        "privacy":"http://www.flickr.com/account/privacy/",
        "design":"",
        "username":"http://www.flickr.com/account/prefs/screenname/?from=personal",
        "mobile":"",
        "accounts":"http://www.flickr.com/account/sharing/",
        "email":"http://www.flickr.com/account/email/",
        "pass":"",
        "recover":""
    }
}
var cur_service = 'facebook';
var cur_setting = 'profile_pic';
var disqus_shortname = 'blisscontrol';

window.fbAsyncInit = function() {
  FB.init({appId: '<APPID>', status: true, cookie: true, xfbml: true});
};
(function() {
  var e = document.createElement('script');
  e.type = 'text/javascript';
  e.src = document.location.protocol +
     '//connect.facebook.net/en_US/all.js';;
  e.async = true;
  document.getElementById('fb-root').appendChild(e);
}());

$('document').ready(function(){


    //init
//    var state = History.getState();
    generate_url();
    getShareButtons();
    // Bind to StateChange Event
//    History.Adapter.bind(window,'statechange',function(){
//        var State = History.getState();
//    });


    $('body').on('click',function(e){
        if(!$(e.target).is('#setting,#settings,#service,#services,.text')){
            $('#settings,#services').hide();
        }
    })

    $('#setting').on('click',function(){
      $('#settings').toggle();
      $('#services').hide();
    });

    $('#service').on('click',function(){
      $('#services').toggle();
      $('#settings').hide();
    });

    $('#settings').on('click','li',function(){
        var setting = $(this).data('id');
        $('#settings,#services').hide();
        generate_url(setting, cur_service);

    });

    $('#services').on('click','li',function(){
        var service = $(this).data('id');
        generate_url(cur_setting, service);
    });
});

getShareButtons = function(){
    $.getScript('http://platform.twitter.com/widgets.js',function(){
        console.log('linkedin loaded');
    });
    $.getScript('http://platform.linkedin.com/in.js',function(){
        console.log('linkedin loaded');
    });
    $.getScript('https://apis.google.com/js/plusone.js',function(){
        console.log('google plus');
    });
    $.getScript('//platform.stumbleupon.com/1/widgets.js',function(){
        console.log('stumbleupon');
    });
    $.getScript('http://' + disqus_shortname + '.disqus.com/embed.js',function(){
        console.log('discuss');
    });

}

generate_url = function(setting,service){
    var service = cur_service = service || cur_service;
    var setting = cur_setting = setting || cur_setting;

    if(!services_obj[service]){ return };

    $('#setting').attr('class',setting).find('.text').html($('#'+setting)[0].innerText);
    $('#service').attr('class',service).find('.text').html($('#'+service)[0].innerText);
    $('#settings,#services').hide();

    if(services_obj[service][setting] != ""){
        $('#action').removeClass('no_cont');
        url = services_obj[service][setting];
        $('#go').attr('href', url);
        $('#link').attr('href',url).html(url);
    }else{
        $('#tmpl_action').html($('#setting .text')[0].innerText + ' in ' + $("#service .text")[0].innerText);
        $('#action').addClass('no_cont');
    }
//    History.pushState([service,setting], null, "/"+setting+"/"+service);
}
