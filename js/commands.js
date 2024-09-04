var linkedin = "https://www.linkedin.com/in/sidali-djeghbal/";
var github = "https://github.com/Sidali-Djeghbal/";
var email = 'mailto:sidalidjeghbal@gmail.com';
var download = "https://bit.ly/Udemiha"

const overlay = document.createElement('div');


// Create a video element
const video = document.createElement('video');
video.src = 'video/Trailer.mp4';
video.type = 'video/mp4';
video.autoplay = true;
video.loop = false;
video.muted = true;
video.controls = false;

overlay.appendChild(video);

video.addEventListener('play', () => {
  // Request full-screen mode
  video.requestFullscreen();
  video.controls = false;

});
video.addEventListener('ended', () => {
  document.exitFullscreen();
  overlay.remove(); // remove the overlay when the video ends
});



whois = [
  "<br>",
  " Hey, I'm Sidali !",
  "I'm a Computer Science student and web devloper with a passion for creating engaging websites like this one.",
  "Please note that I'm using this website as an open-source project, which was developed by another developer.",
  "UDEMIHA is a program that helps you auto-enroll in Udemy courses using coupons, and the best part is that it's 100% legal!",
  "To use UDEMIHA, you should know that it utilizes third-party cookies to log in to your Udemy account.",
  "You can also customize your course preferences, such as languages and topics, by editing the settings.json file.",
  "I'd love your help in improving this project! If you encounter any errors, report them to me so I can fix them and make the project even better.",
  "<br>"
];


help = [
  "<br>",
  '<span class="command">Play</span>           Play demo',
  '<span class="command">Download</span>       try UDEMIHA beta',
  '<span class="command">Qr</span>       Scan UDEMIHA QR Code',
  '<span class="command">whois</span>          What is this ? who is us ?',
  '<span class="command">banner</span>         Display the header',
  '<span class="command">history</span>        View command history',
  '<span class="command">clear</span>          Clear terminal',
  '<span class="command">email</span>          Send me an email',
  '<span class="command">Github</span>         View my Github profile',
  '<span class="command">LinkedIn</span>       Contact me on linkedIn',
  '<span class="command">help</span>           You already know what this does',
  "<br>",
];

banner = [

  '<div class="violet">                                                   ',
  '      ██╗   ██╗ ██████═╗ ███████╗ ███╗   ███╗ ██╗ ██╗  ██╗  ╔████╗     ',
  '      ██║   ██║ ██   ██║ ██╔════╝ ████╗ ████║   ║ ██║  ██║ ██╔══██╗    ',
  '      ██║   ██║ ██   ██║ █████╗   ██╔████╔██║ ██║ ███████║ ███████║    ',
  '      ██║   ██║ ██   ██║ ██╔══╝   ██║╚██╔╝██║ ██║ ██╔══██║ ██╔══██║    ',
  '      ╚██████╔╝ ███████║ ███████╗ ██║ ╚═╝ ██║ ██║ ██║  ██║ ██║  ██║    ',
  '       ╚═════╝  ╚══════╝ ╚══════╝ ╚═╝     ╚═╝ ╚═╝ ╚═╝  ╚═╝ ╚═╝  ╚═╝    ',
  '             by Sidali ~ Enjoy free courses && learn without limits.   ',
  '  </div>                                                               ',
  "<span class=\"color2\">For a list of available commands, type</span> <span class=\"command\">'help'</span><span class=\"color2\">.</span>",
];


qr = [
  '<div class="violet">                                                   ',
  '  █████████████████████████████████████  ',
  '  ██ ▄▄▄▄▄ █ ▀ █ ▄▀▀ █▀▀▄█▀▄ █ ▄▄▄▄▄ ██  ',
  '  ██ █   █ █▄  ▄ ▄  ▀▄▀█▄▄▄ ▄█ █   █ ██  ',
  '  ██ █▄▄▄█ █▀▀ ▄▀▄▄█▀   ████▄█ █▄▄▄█ ██  ',
  '  ██▄▄▄▄▄▄▄█ ▀ █▄█▄▀▄█ ▀▄▀▄█ █▄▄▄▄▄▄▄██  ',
  '  ████  ▄▀▄█▄▀█▄▀  ▀█▄█ █▄▄██  ▄██   ██  ',
  '  ██▀██   ▄ ▄▄  ▀ ▄▄█▀▀ ▀█▄▀ ▀▄▄█▄  ███  ',
  '  ██▄█▀█▀▀▄ ▀  ▀ ▄▀█▄  ▀█▄▄▀▄█▀▄▀ ██▀██  ',
  '  ██ ▀▀▄ ▀▄ ▀ ▀▀█  ▄██▀▀█▀ █▀▄▀▄ ▀█▄▀██  ',
  '  ██▄▄ █ ▄▄▄▄ ▀█  ▄█  ▄ ▀██ ▀▄▀█▄█▄█▄██  ',
  '  ██▀▄▄ █ ▄█ ▀▄▄▀ ▄▀▀▄█▄▀▀ ▀▀▀█  ▀ ▀▀██  ',
  '  ██▀██▄▄█▄█▄▄▀▄█▀█▀█ ▄▀ ▀▀█▄▀██▄▄▀ ▄██  ',
  '  ██ ███ █▄▀ ██████  █  ▄▀▀ ▄██▄▄▀▀▄▀██  ',
  '  ██▄███▄▄▄█ ▀▄▄ ▄▀ ▄▀▀▄ ▀▄  ▄▄▄ ██▀▀██  ',
  '  ██ ▄▄▄▄▄ ███▀ ▄ ▄██  ▄▄ ▀▀ █▄█ ▀  ▀██  ',
  '  ██ █   █ █  ▄  ▄▄▄▄  ▀▀▄▀█  ▄▄ ▄  ▄██  ',
  '  ██ █▄▄▄█ █▄▀▀▀ ▀▀▀█▀▄▄██▄▄█  ▀█▄ ████  ',
  '  ██▄▄▄▄▄▄▄██▄▄█▄▄█▄███▄█▄▄▄▄█▄██▄▄▄███  ',
  '  ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀  ',
  '  <span class="color2">Scan this QR code to download UDEMIHA</span>',
  '  </div>                                                               ',
];


