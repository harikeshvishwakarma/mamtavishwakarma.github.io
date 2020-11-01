// change dynamic percentage

function changeDynamic() {
  let html = document.querySelector('.change_1');
  let width_1 = 1;
  let timeInterval_1 = setInterval(testHtml, 20);

  function testHtml() {
    if (width_1 >= 90) {
      clearInterval(timeInterval_1);
    } else {
      width_1++;
      html.style.width = width_1 + '%';
      html.innerHTML = width_1 + '%';
    }
  }

  let css = document.querySelector('.change_2');
  let width_2 = 1;
  let timeInterval_2 = setInterval(testCss, 20);

  function testCss() {
    if (width_1 >= 80) {
      clearInterval(timeInterval_2);
    } else {
      width_2++;
      css.style.width = width_2 + '%';
      css.innerHTML = width_2 + '%';
    }
  }

  let javascript = document.querySelector('.change_3');
  let width_3 = 1;
  let timeInterval_3 = setInterval(testJavascript, 20);

  function testJavascript() {
    if (width_3 >= 65) {
      clearInterval(timeInterval_3);
    } else {
      width_3++;
      javascript.style.width = width_3 + '%';
      javascript.innerHTML = width_3 + '%';
    }
  }

  let json = document.querySelector('.change_4');
  let width_4 = 1;
  let timeInterval_4 = setInterval(testJson, 20);

  function testJson() {
    if (width_4 >= 95) {
      clearInterval(timeInterval_4);
    } else {
      width_4++;
      json.style.width = width_4 + '%';
      json.innerHTML = width_4 + '%';
    }
  }

  let mongodb = document.querySelector('.change_5');
  let width_5 = 1;
  let timeInterval_5 = setInterval(testMongodb, 20);

  function testMongodb() {
    if (width_5 >= 40) {
      clearInterval(timeInterval_5);
    } else {
      width_5++;
      mongodb.style.width = width_5 + '%';
      mongodb.innerHTML = width_5 + '%';
    }
  }

  let nodejs = document.querySelector('.change_6');
  let width_6 = 1;
  let timeInterval_6 = setInterval(testNodejs, 20);

  function testNodejs() {
    if (width_6 >= 30) {
      clearInterval(timeInterval_6);
    } else {
      width_6++;
      nodejs.style.width = width_6 + '%';
      nodejs.innerHTML = width_6 + '%';
    }
  }

  let expressjs = document.querySelector('.change_7');
  let width_7 = 1;
  let timeInterval_7 = setInterval(testExpressjs, 20);

  function testExpressjs() {
    if (width_7 >= 20) {
      clearInterval(timeInterval_7);
    } else {
      width_7++;
      expressjs.style.width = width_7 + '%';
      expressjs.innerHTML = width_7 + '%';
    }
  }
  let photoshop = document.querySelector('.change_8');
  let width_8 = 1;
  let timeInterval_8 = setInterval(testPhotoshop, 20);

  function testPhotoshop() {
    if (width_8 >= 30) {
      clearInterval(timeInterval_8);
    } else {
      width_8++;
      photoshop.style.width = width_8 + '%';
      photoshop.innerHTML = width_8 + '%';
    }
  }

}

// setTimeout(changeDynamic, 1000)

// three line script
function threeLine() {
  document.querySelector('.three-line').classList.toggle('change');
  document.querySelector('.mobile').classList.toggle('mobile-toggle');
  // document.querySelector('#wrapper').classList.toggle('lesssharp');
}


// what i am achive animation

// function whatAchive() {
//   let wa = document.querySelector('.what-achive');
// }

// let cd = setTimeout(changeDynamic, 2000);
// let ccd = clearInterval(cd);




