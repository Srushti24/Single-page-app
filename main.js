

function myFunction() {
console.log("hello world");
var x=document.getElementById("myInput");
console.log(x.value);
var script = document.createElement('script');
var linksrc = "https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=43df48bc648679de7c0b64a0a763ae05&tags="+x.value;
linksrc = linksrc+"&safe_search=1&per_page=25&page=1&format=json";

script.src = linksrc
console.log(linksrc);
document.querySelector('head').appendChild(script);

}


function jsonFlickrApi(rsp) {
 window.rsp = rsp;
    var s = "";
    s = "total number is: " + rsp.photos.photo.length + "<br/>";
    var count=0;
    while(count<rsp.photos.photo.length)
{
     var i=count+5;
        s="";
      while(count<rsp.photos.photo.length && count<i) 
   {
      photo = rsp.photos.photo[count];
       t_url = "http://farm" + photo.farm + ".static.flickr.com/" + 
        photo.server + "/" + photo.id + "_" + photo.secret + "_"+ "t.jpg";
      p_url = "http://www.flickr.com/photos/" + photo.owner + "/" + photo.id;
      s +=  '<a href="' + p_url + '">' + '<img alt="'+ photo.title + 
        '" src="' + t_url + '"/>' + '</a>';
   count++;
    }

   if(count>=0 && count<=5)
     document.getElementById("outputDiv").innerHTML = s;

if(count>5 && count<=10)
     document.getElementById("outputDiv2").innerHTML = s;

if(count>10 && count<=15)
     document.getElementById("outputDiv3").innerHTML = s;

if(count>15 && count<=20)
     document.getElementById("outputDiv4").innerHTML = s;

if(count>20 && count<=25)
     document.getElementById("outputDiv5").innerHTML = s;

   

}

}
