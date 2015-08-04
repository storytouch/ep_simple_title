exports.postAceInit = function(hook, context) {
  var title = getParam("title");
  if (title) {
    window.document.title = unescape(title);
  }
};

function getParam(sname){
  var params = location.search.substr(location.search.indexOf("?")+1);
  var sval = "";
  params = params.split("&");
  // split param and value into individual pieces
  for (var i=0; i<params.length; i++)
  {
    temp = params[i].split("=");
    if ( [temp[0]] == sname ) { sval = temp[1]; }
  }
  return sval;
}
