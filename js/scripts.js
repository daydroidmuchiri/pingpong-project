var pPong = [];

function pingpong(num) {
  for (var x = 1; x <= num; x++) {

    if (x % 3 == 0) {
      pPong.push('ping');

    } else if (x % 5 == 0) {
      pPong.push('pong');

    } else if ((x % 5 == 0) && (x % 3 == 0)) {
      pPong.push('pingpong');

    } else {
      pPong.push(x);
    }

  };
