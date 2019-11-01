'use strict';

(function () {

  var Url = {
    DOWNLOAD: 'https://js.dump.academy/code-and-magick/data',
    UPLOAD: 'https://js.dump.academy/code-and-magick'
  };

  window.load = function (onLoad, onError) {
    var xhr = new XMLHttpRequest();
    xhr.responseType = 'json';

    xhr.addEventListener('load', function () {
      if (xhr.status === 200) {
        onLoad(xhr.response);
      } else {
        onError('Статус ответа: ' + xhr.status + ' ' + xhr.statusText);
      }
    });

    xhr.addEventListener('error', function () {
      onError('Произошла ошибка соединения');
    });

    return xhr;
  };

  var loadData = function (onLoad, onError) {
    var xhr = window.load(onLoad, onError);

    xhr.open('GET', Url.DOWNLOAD);
    xhr.send();
  };

  var saveData = function (data, onLoad, onError) {
    var xhr = window.load(onLoad, onError);

    xhr.open('POST', Url.UPLOAD);
    xhr.send(data);
  };

  window.backend = {
    load: loadData,
    save: saveData
  };

})();
