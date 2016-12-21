function cors(){
  var createCORSRequest = function(method, url) {
    var xhr = new XMLHttpRequest();
    if ("withCredentials" in xhr) {
      // Most browsers.
      xhr.open(method, url, true);
    } else if (typeof XDomainRequest != "undefined") {
      // IE8 & IE9
      xhr = new XDomainRequest();
      xhr.open(method, url);
    } else {
      // CORS not supported.
      xhr = null;
    }
    return xhr;
  };

  var url = 'https://academic-dev1.cloud.thingworx.com/Thingworx/Things/testingCORS/Properties/test';
  var method = 'GET';
  var xhr = createCORSRequest(method, url);

  xhr.onload = function() {
    // Success code goes here.
  };

  xhr.onerror = function() {
    // Error code goes here.
  };

  xhr.setRequestHeader('appKey', '29506e99-bca6-4522-b60e-55bd891716f7');
  xhr.send();
}