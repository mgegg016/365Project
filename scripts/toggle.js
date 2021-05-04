function toggle(job) {
  var G = document.getElementById("Google");
  var F = document.getElementById("Facebook");
  var T = document.getElementById("Turbo");
  var O = document.getElementById("Oreilly");
  
  G.style.display = "none"
  F.style.display = "none"
  T.style.display = "none"
  O.style.display = "none"

  if (job.value == "Google") {
      G.style.display = "block";
    }
  else if (job.value == "Facebook") {
      F.style.display = "block";
    }
  else if (job.value == "Turbo Inc.") {
      T.style.display = "block";
    }
  else if (job.value == "O'Reilly Auto Parts") {
    O.style.display = "block";
  }
}