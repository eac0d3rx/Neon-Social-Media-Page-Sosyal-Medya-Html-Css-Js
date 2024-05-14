function showPopup(link) {
  var popup = document.getElementById("socialMediaPopup");
  var linkElement = document.getElementById("socialMediaLink");
  linkElement.innerHTML = '<a href="' + link + '" style="color: white; text-decoration: none;">' + link + '</a>';
  popup.style.display = "block";
  setTimeout(function() {
    popup.style.display = "none";
  }, 3000);
}

function updateTime() {
  var currentDate = new Date();
  var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  var formattedDate = currentDate.toLocaleDateString('en-US', options);
  document.getElementById('currentDate').innerText = formattedDate;

  var hours = currentDate.getHours();
  var minutes = currentDate.getMinutes();
  var seconds = currentDate.getSeconds();
  var ampm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12;
  hours = hours ? hours : 12;
  minutes = minutes < 10 ? '0' + minutes : minutes;
  seconds = seconds < 10 ? '0' + seconds : seconds;
  var formattedTime = hours + ':' + minutes + ':' + seconds + ' ' + ampm;
  document.getElementById('currentTime').innerText = formattedTime;
}

updateTime();
setInterval(updateTime, 1000);
