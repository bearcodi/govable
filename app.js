(function($){
    $(function () {
        $('#lucky').on('click', function (e) {
            $('#search').val('punk');
        });
        
        $('#agency').on('click', 'a', function(e){
            e.preventDefault();
            console.log(this);
        });
  });
}(jQuery));
