$(document).ready(function() {

  $.ajax(
  {
    "url": "https://flynn.boolean.careers/exercises/api/array/music",
    "method": "GET",
    "success": function (data, stato) {
      console.log(data["response"]);
      var oggettoAlbum = data["response"];

      // var source =$(".entry-template").html();
      // var template = Handlebars.compile(source);

      for (var i=0; i<oggettoAlbum.length; i++){
        console.log(oggettoAlbum[i]);
        var context = oggettoAlbum[i];
        // var html = template(context);
      }

    },
    "error": function (richiesta, stato, errori) {
      alert();
    }
  }
  )



});
