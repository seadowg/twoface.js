var TwoFace = {
  currentFaceElement: null,
  currentFaceObject: null,
  faceObjects: {},
  show: function(faceName) {
    if (this.currentFaceElement != null) {
      this.currentFaceElement.hide();
    }
    
    this.currentFaceElement = $('.face.face-' + faceName);
    this.currentFaceObject = this.faceObjects[faceName];
    
    this.currentFaceElement.show();
    this.currentFaceObject.onShow();
  },
  add: function(name, object) {
    $('.face').hide();
    
    this.faceObjects[name] = object;
    $(document).ready(object.setup);
  }
};