

// salut mr diallo ,j'ai ajouter ce scritp pour faire une recherche au niveau du table  
  //ce script me permmet de filter et de faire la recherche des appartement disponible dans le table .j'utilise jquery
     
  $(document).ready(function(){
    $("#rechercheI").on("keyup", function() {
      var value = $(this).val().toLowerCase();
      $("#rechercheC tr").filter(function() {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
      });
    });
  });

