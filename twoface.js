var TwoFace = {
  currentFace: null,
  faces: {},
  show: function(faceName) {
    if (this.currentFace != null) {
      $('.face.face-' + this.currentFace.name).hide();
    }
    
    this.currentFace = this.faces[faceName];
    $('.face.face-' + this.currentFace.name).show();
    this.currentFace.onShow();
  },
  define: function(name, object) {
    object.name = name;
    
    this.faces[object.name] = object;
    $(document).ready(function() {
      $('.face.face-' + object.name).hide();
      object.setup(); 
    });
  }
};