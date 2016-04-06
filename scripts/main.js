(function () {
  var monuments = [
    {
      nazwa: 'Bazylika Mariacka',
      typ: 'kościół',
      adres: {
        street: 'Reja',
        number: 4,
        position: {
          lat: 54.349985,
          lng: 18.653242
        }
      },
      about: 'krótki opis',
      image: 'jakies zdjecie',
      WHstatus: true,
      ID: 'xxxx'

    },
    {
      nazwa: 'Muzeum II Wojny Światowej',
      typ: 'muzeum',
      adres: {
        street: 'Mickiewicza',
        number: 4,
        position: {
          lat: 54.349718,
          lng: 18.648417
        }
      },
      about: 'krótki opis',
      image: 'jakies zdjecie',
      WHstatus: true,
      ID: 'xxxx'

    },
    {
      nazwa: 'Pomnik Obrońców Wybrzeża',
      typ: 'pomnik',
      adres: {
        street: 'Reja',
        number: 4,
        position: {
          lat: 54.406786,
          lng: 18.667375
        }
      },
      about: 'krótki opis',
      image: 'jakies zdjecie',
      WHstatus: true,
      ID: 'xxxx'

    },
    {
      nazwa: 'Kościół Świętej Trójcy',
      typ: 'kościół',
      adres: {
        street: 'Szymborskiej',
        number: 4,
        position: {
          lat: 54.346514,
          lng: 18.646837
        }
      },
      about: 'krótki opis',
      image: 'jakies zdjecie',
      WHstatus: false,
      ID: 'xxxx'

    },
    {
      nazwa: 'Pomnik Poległych Stoczniowców 1970',
      typ: 'pomnik',
      adres: {
        street: 'Reja',
        number: 4,
        position: {
          lat: 54.360548,
          lng: 18.649052
        }
      },
      about: 'krótki opis',
      image: 'jakies zdjecie',
      WHstatus: false,
      ID: 'xxxx'

    },
    {
      nazwa: 'Europejskie Centrum Solidarności',
      typ: 'muzeum',
      adres: {
        street: 'Mickiewicza',
        number: 4,
        position: {
          lat: 54.361258,
          lng: 18.649480
        }
      },
      about: 'krótki opis',
      image: 'jakies zdjecie',
      WHstatus: false,
      ID: 'xxxx'

    },
    {
      nazwa: 'Kościół św. Katarzyny',
      typ: 'kościół',
      adres: {
        street: 'Reja',
        number: 4,
        position: {
          lat: 54.354138,
          lng: 18.651482
        }
      },
      about: 'krótki opis',
      image: 'jakies zdjecie',
      WHstatus: true,
      ID: 'xxxx'

    },
    {
      nazwa: 'Pomnik Marszałka Józefa Piłsudskiego',
      typ: 'pomnik',
      adres: {
        street: 'Reja',
        number: 4,
        position: {
          lat: 54.386421,
          lng: 18.591431
        }
      },
      about: 'krótki opis',
      image: 'jakies zdjecie',
      WHstatus: false,
      ID: 'xxxx'

    },
    {
      nazwa: 'Narodowe Muzeum Morskie w Gdańsku',
      typ: 'muzeum',
      adres: {
        street: 'Reja',
        number: 4,
        position: {
          lat: 54.350901,
          lng: 18.659051
        }
      },
      about: 'krótki opis',
      image: 'jakies zdjecie',
      WHstatus: true,
      ID: 'xxxx'

    },
    {
      nazwa: 'Klasztor Ojców Dominikanów',
      typ: 'kościół',
      adres: {
        street: 'Mickiewicza',
        number: 2,
        position: {
          lat: 54.352126,
          lng: 18.651477
        }
      },
      about: 'krótki opis',
      image: 'jakies zdjecie',
      WHstatus: false,
      ID: 'xxxx'

    }
  ];

  angular.module('Workshop', ['uiGmapgoogle-maps', 'ui.bootstrap'])
      .controller('mainController', mainController)
      .controller('DropdownCtrl', DropdownCtrl);

  function mainController($scope) {
    $scope.map = {
      center: {
        latitude: 54.379208,
        longitude: 18.653333
      },
      zoom: 12,
      bounds: {}
    };
    $scope.options = {
      scrollwheel: true
    };

    dupa = monuments.map(function (item, index) {

      return {
        nazwa: item.name,
        typ: item.typ,
        adres: {
          street: item.adres.street,
          number: item.adres.number,
          position: {
            latitude: item.adres.position.lat,
            longitude: item.adres.position.lng
          }

        },
        about: item.about,
        image: item.image,
        WHstatus: item.WHstatus,
        id: index


      }

    });

    var createRandomMarker = function(i, bounds, idKey) {
      var lat_min = bounds.southwest.latitude,
          lat_range = bounds.northeast.latitude - lat_min,
          lng_min = bounds.southwest.longitude,
          lng_range = bounds.northeast.longitude - lng_min;

      if (idKey == null) {
        idKey = "id";
      }

      var latitude = lat_min + (Math.random() * lat_range);
      var longitude = lng_min + (Math.random() * lng_range);
      var ret = {
        latitude: latitude,
        longitude: longitude,
        title: 'm' + i
      };
      ret[idKey] = i;
      return ret;

    };
    $scope.randomMarkers = [];
    // Get the bounds from the map once it's loaded
    $scope.$watch(function() {
      return $scope.map.bounds;
    }, function(nv, ov) {
      // Only need to regenerate once
      if (!ov.southwest && nv.southwest) {
        var markers = [];
        for (var i = 0; i < 50; i++) {
          markers.push(createRandomMarker(i, $scope.map.bounds))
        }

        $scope.randomMarkers = dupa;
        debugger;
      }
    }, true);








  }





  function DropdownCtrl($scope, $log) {
    $scope.items = [
      'The first choice!',
      'And another choice for you.',
      'but wait! A third!'
    ];

    $scope.status = {
      isopen: false
    };

    $scope.toggled = function(open) {
      $log.log('Dropdown is now: ', open);
    };

    $scope.toggleDropdown = function($event) {
      $event.preventDefault();
      $event.stopPropagation();
      $scope.status.isopen = !$scope.status.isopen;
    };

    $scope.appendToEl = angular.element(document.querySelector('#dropdown-long-content'));
    $scope.type = type;
    function type (typ){
      clearMarkers();
      if(typ === 'wszystkie'){
        return callback(monuments)
      }
      var kategorie = [];
      monuments.forEach( function (value, index) {
        monuments[index].typ === typ ? kategorie.push(monuments[index]): false
      });
      callback(kategorie);
      console.log(kategorie)

    }
  }




})();