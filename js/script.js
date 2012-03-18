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
        "profile_pic":"https://plus.google.com/u/0/me/about/edit/d",
        "bio":"https://plus.google.com/u/0/me/about/edit/d",
        "delete":"https://www.google.com/accounts/b/0/DeleteAccount",
        "apps":"https://profiles.google.com/connectedaccounts?authuser=0",
        "email_settings":"https://www.google.com/settings/plus",
        "privacy":"https://www.google.com/settings/privacy",
        "design":"",
        "username":"https://accounts.google.com/b/0/EditUserInfo",
        "mobile":"",
        "accounts":"https://www.google.com/settings/plus",
        "email":"https://www.google.com/accounts/b/0/EditUserInfo",
        "pass":"https://www.google.com/accounts/b/0/EditPasswd",
        "recover":"https://www.google.com/accounts/recovery"
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
        "bio":"https://path.com/settings",
        "delete":"https://path.com/settings",
        "apps":"",
        "email_settings":"https://path.com/settings",
        "privacy":"",
        "design":"https://path.com/settings",
        "username":"",
        "mobile":"",
        "accounts":"https://path.com/settings",
        "email":"",
        "pass":"https://path.com/settings",
        "recover":"https://path.com/forgot-password"
    },
    "instagram":{
        "profile_pic":"",
        "bio":"https://instagr.am/accounts/edit/",
        "delete":"",
        "apps":"https://instagr.am/accounts/login/?next=/oauth/manage_access",
        "email_settings":"",
        "privacy":"",
        "design":"",
        "username":"",
        "mobile":"",
        "accounts":"",
        "email":"https://instagr.am/accounts/edit/",
        "pass":"https://instagr.am/accounts/password/change/",
        "recover":"https://instagr.am/accounts/password/reset/"
    },
    "flickr":{
        "profile_pic":"http://www.flickr.com/iconbuilder/?from=personal",
        "bio":"http://www.flickr.com/profile_edit.gne?from=personal",
        "delete":"http://www.flickr.com/profile_delete.gne",
        "apps":"http://www.flickr.com/services/auth/list.gne?from=extend",
        "email_settings":"http://www.flickr.com/account/email/",
        "privacy":"http://www.flickr.com/account/privacy/",
        "design":"http://www.flickr.com/account/prefs/layout/",
        "username":"http://www.flickr.com/account/prefs/screenname/?from=personal",
        "mobile":"",
        "accounts":"http://www.flickr.com/account/sharing/",
        "email":"http://www.flickr.com/account/email/",
        "pass":"",
        "recover":"https://edit.yahoo.com/forgotroot"
    }
}
var cur_service = 'twitter';
var cur_setting = 'profile_pic';
var disqus_shortname = 'blisscontrol';
var _gaq = _gaq || [];

window.fbAsyncInit = function() {
    FB.init({appId: '<APPID>', status: true, cookie: true, xfbml: true});
    if (FB.Event && FB.Event.subscribe) {
        FB.Event.subscribe('edge.create',function(targetUrl) {
                _gaq.push(['_trackSocial', 'Facebook', 'like']);
            }
        );
        FB.Event.subscribe('edge.remove', function(targetUrl) {
          _gaq.push(['_trackSocial', 'Facebook', 'unlike']);
        });
        FB.Event.subscribe('message.send', function(targetUrl) {
          _gaq.push(['_trackSocial', 'Facebook', 'send']);
        });
    }
};

(function() {
  var e = document.createElement('script');
  e.type = 'text/javascript';
  e.src = document.location.protocol +
     '//connect.facebook.net/en_US/all.js';
  e.async = true;
  document.getElementById('fb-root').appendChild(e);
}());

(function() {
  var e = document.createElement('script');
  e.type = 'text/javascript';
  e.src = document.location.protocol +
     '//connect.facebook.net/en_US/all.js';
  e.async = true;
  document.getElementById('fb-root').appendChild(e);
}());

plusone_vote = function(obj){
    if(obj.state == 'on'){
    _gaq.push(['_trackSocial', 'Google', '+1']);
    }
    if(obj.state == 'off'){
    _gaq.push(['_trackSocial', 'Google', '-1']);
    }
}
window.onload = function(){
    getShareButtons();
}
$('document').ready(function(){
    //init
//    var state = History.getState();
    generate_url();

    //stupid stumbleupon won't load on window.load
    $.cachedScript('//platform.stumbleupon.com/1/widgets.js').done(function(){
//            console.log('stumbleupon');
    });


    $('body').on('click',function(e){
        if(!$(e.target).is('#setting,#settings,#service,#services,.text,.help,.arr6')){
            $('#settings,#services').hide();
        }
    });

    $('#link,#go').on('click',function(){
        _gaq.push(['_trackEvent', 'Click', cur_service, cur_setting]);
    });
    $('#settings').on('click','li',function(){
        var setting = $(this).data('id');
        $('#settings,#services').hide();
        generate_url(setting, cur_service);
    });

    $('#services').on('click','li',function(){
        var service = $(this).data('id');
        $('#settings,#services').hide();
        generate_url(cur_setting, service);
    });

    $('#setting').on('click',function(e){
      $('#settings').toggle();
      $('#services').hide();
    });

    $('#service').on('click',function(e){
      $('#services').toggle();
      $('#settings').hide();
    });


});

getShareButtons = function(){
    $.cachedScript('http://platform.twitter.com/widgets.js').done(function(){
        twttr.events.bind('tweet', function(){
            _gaq.push(['_trackSocial', 'twitter', 'tweet']);
        });
    });
    $.cachedScript('http://platform.linkedin.com/in.js').done(function(obj){
//        console.log('linkedin loaded',obj,this);
    });
    $.cachedScript('https://apis.google.com/js/plusone.js').done(function(){
//        console.log('google plus');
    });

    $.cachedScript('http://' + disqus_shortname + '.disqus.com/embed.js').done(function(){
//        console.log('discuss');
    });

}

generate_url = function(setting,service){
    var service = cur_service = service || cur_service;
    var setting = cur_setting = setting || cur_setting;


    if(!services_obj[service]){ return };

    $('#setting').attr('class',setting).find('.text').html($('#'+setting).text());
    $('#service').attr('class',service).find('.text').html($('#'+service).text());
    $('#settings,#services').hide();

    if(services_obj[service][setting] != ""){
        $('#action').removeClass('no_cont');
        url = services_obj[service][setting];
        $('#go').attr('href', url);
        $('#link').attr('href',url).html(url);
    }else{
        $('#tmpl_action').html($('#setting .text').text() + ' in ' + $("#service .text").text());
        $('#action').addClass('no_cont');
    }
//    History.pushState([service,setting], null, "/"+setting+"/"+service);
}
