var url="";
var prevurl="";

var search = function(site, target){
  var w = encodeURIComponent(form0.word.value);
  localStorage.setItem(   "bsky_a", form0.   bsky_a.value);
  localStorage.setItem("twitter_a", form0.twitter_a.value);
  localStorage.setItem( "twilog_a", form0. twilog_a.value);
  if(site=="all"){
    if(twitter_d.checked)search('twitter','findmine-twitter');
    if( twilog_d.checked)search('twilog' ,'findmine-twilog' );
    if(  nostr_d.checked)search('nostr'  ,'findmine-nostr'  );
    if(   bsky_d.checked)search('bsky'   ,'findmine-bsky'   );
  }else{
    if(site=='nostr'){
      url = "https://nostter.app/search?mine=ok&q=" + w;
    }else if(site=='bsky'){
      var a = encodeURIComponent(form0.bsky_a.value);
      url = "https://bsky.app/search?q=from:" + a + "+" + w;
    }else if(site=='twilog'){
      var a = encodeURIComponent(form0.twilog_a.value);
      url = "https://twilog.togetter.com/" + a + "/search?ao=a&word=" + w;
    }else if(site=='twitter'){
      var a = encodeURIComponent(form0.twitter_a.value);
      url = "https://twitter.com/search?q=from:" + a + "+" + w;
    }
    window.open(url, target);
  }
}
window.onload=function(){
  var p;
  if((p=localStorage.getItem(   "bsky_a"))!==null) form0.   bsky_a.value = p;
  if((p=localStorage.getItem( "twilog_a"))!==null) form0. twilog_a.value = p;
  if((p=localStorage.getItem("twitter_a"))!==null) form0.twitter_a.value = p;
  if((p=localStorage.getItem(  "nostr_d"))!==null) form1.  nostr_d.checked = p==1;
  if((p=localStorage.getItem(   "bsky_d"))!==null) form1.   bsky_d.checked = p==1;
  if((p=localStorage.getItem( "twilog_d"))!==null) form1. twilog_d.checked = p==1;
  if((p=localStorage.getItem("twitter_d"))!==null) form1.twitter_d.checked = p==1;
  if((localStorage.getItem("primary")) =="twitter") twitter_pri.   setAttribute("selected",null);
                                             else   twitter_pri.removeAttribute("selected");
  if((localStorage.getItem("primary")) =="nostr"  )   nostr_pri.   setAttribute("selected",null);
                                             else     nostr_pri.removeAttribute("selected");
  if((localStorage.getItem("primary")) =="twilog" )  twilog_pri.   setAttribute("selected",null);
                                             else    twilog_pri.removeAttribute("selected");
  if((localStorage.getItem("primary")) =="bsky"   )    bsky_pri.   setAttribute("selected",null);
                                             else      bsky_pri.removeAttribute("selected");
  setdisplay();
  document.getElementById("word").focus();
}
var setdisplay=function(){
  var checklist=[ nostr_d , bsky_d , twilog_d , twitter_d ];
  var trlist   =[ nostr_tr, bsky_tr, twilog_tr, twitter_tr];
  var lsqlist  =["nostr_d","bsky_d","twilog_d","twitter_d"];
  for(var i=0;i<trlist.length;i++){
    var check = checklist[i];
    var tr    =    trlist[i];
    var lsq   =   lsqlist[i];
    if(check.checked){
      tr.removeAttribute("style");
      localStorage.setItem(lsq, 1);
    }else{
      tr.setAttribute("style","display:none");
      localStorage.setItem(lsq, 0);
    }
  }
}
var saveprimary=function(){
  localStorage.setItem("primary", form1.primarysel.value);
}
var jumpprimary=function(){
  search(form1.primarysel.value,"_self");
}
/*
// how to clipboard
url=xxxx;
prevurl=url;
if(prevurl!=url){
  history.pushState(null,null,url);
}
*/
