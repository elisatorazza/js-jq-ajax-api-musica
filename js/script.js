$(document).ready(function() {

  $.ajax(
  {
    "url": "https://flynn.boolean.careers/exercises/api/array/music",
    "method": "GET",
    "success": function (data, stato) {
      var oggettoAlbum = data["response"];
      render(oggettoAlbum);
    },
    "error": function (richiesta, stato, errori) {
      alert();
    }
    }
  );

  function render(oggettoAlbum) {
    var source =$("#entry-template").html();
    var template = Handlebars.compile(source);

    for (var i=0; i<oggettoAlbum.length; i++){
      var context = oggettoAlbum[i];
      var html = template(context);
      $(".cds-container").append(html);
    }
  };

   $(".genre").change(function(){
     var selectGenre = $(this).val();
     console.log(selectGenre);
     if (selectGenre == "All") {
      $(".cd").show();
     } else {
      $(".cd").addClass("none");
      $(".cd[data-genere = '"+selectGenre+"']").removeClass("none");
    }
  });

  function selectGenre(value, key) {

  }
});
