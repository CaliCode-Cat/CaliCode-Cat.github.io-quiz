'use strict';
(function () {
  window.utils = {
    shuffleArray: function (list) {
      for (let i = list.length - 1; i > 0; i--) {
        const randomNum = Math.floor(Math.random() * (i + 1));
        const randomElement = list[randomNum];
        list[randomNum] = list[i];
        list[i] = randomElement;
      }
      return list;
    },
  };
})();
