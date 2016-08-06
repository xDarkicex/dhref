(function($)){
  $.fn.highLighter = function(){
    this.click(function(e){
      var obj = $(e.target.parentNode);
      if(obj.data('href')) window.document.location = obj.data('href');
      if(obj.data('href-new')) window.open(obj.data('href-new'));
    });
    return this;
  };
}(jquery));
