function UpdateClock() {
  var date = new Date();
  var hh = date.getHours();
  var mm = date.getMinutes();
  var ss = date.getSeconds();
  let dnum=date.getDate();
    var yy = date.getFullYear();
  var mon = date.getMonth();
  var dd = date.getDay();
  am_pm = "PM";
  if (hh > 12) {
    hh -= 12;
    am_pm = "PM";
  }
  if (hh == 0) {
    hr = 12;
    am_pm = "AM";
  }

    hh = hh < 10 ? "0" + hh : hh;
    mm = mm < 10 ? "0" + mm : mm;
    ss = ss < 10 ? "0" + ss : ss;

  var months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  var weeks = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  var ids = ["dd", "mon", "dnum","yy", "hh", "mm", "ss", "AP"];
  var values = [weeks[dd], months[mon],dnum, yy, hh, mm, ss, am_pm];
  for (var i = 0; i < ids.length; i++)
    document.getElementById(ids[i]).firstChild.nodeValue = values[i];
}
function initClock() {
  UpdateClock();
  window.setInterval("UpdateClock()", 1);
}
