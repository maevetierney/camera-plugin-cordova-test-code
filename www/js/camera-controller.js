
exampleApp.controller('ExampleController', function($scope, $cordovaCamera) {

  $scope.takePicture = function() {
    var options = {
      quality: 50,
      destinationType: Camera.DestinationType.DATA_URL,
      sourceType: Camera.PictureSourceType.CAMERA,
      allowEdit: true,
      encodingType: Camera.EncodingType.JPEG,
      targetWidth: 100,
      targetHeight: 100,
      popoverOptions: CameraPopoverOptions,
      saveToPhotoAlbum: false,
	  correctOrientation:true
    };

    $cordovaCamera.getPicture(options).then(function(imageData) {
      var image = document.getElementById('myImage');
      image.src = "data:image/jpeg;base64," + imageData;
      function displayImage(imgUri) {
        var elem = document.getElementById('imageFile');
        elem.src = imgUri;
      }
      displayImage(image);
      //save photo to the page
    }, function(err) {
      // error
    });

  };

});
