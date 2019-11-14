AFRAME.registerComponent('my-event', {
    
    init: function () {
      let btnLeft  = document.querySelector('#btnLeft');
      let btnRight = document.querySelector('#btnRight');
      let model    = document.querySelector('#model');

      
      btnLeft.addEventListener('click', function() {
        model.setAttribute('material', 'color: yellow');
        model.setAttribute('geometry', 'primitive: box');
      });

      btnRight.addEventListener('click', function() {
        model.setAttribute('material', 'color: green');
        model.setAttribute('geometry', 'primitive: sphere');
      });
    }

});
