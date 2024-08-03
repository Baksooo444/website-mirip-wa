var audio = new Audio("assets/sentmessage.mp3");
var contactString =
  "<div class='social'> <a target='_blank' href='tel:+6285361381638'> <div class='socialItem' id='call'><img class='socialItemI' src='images/phone.svg'/><label class='number'>+6285361381638</label></div> </a> <a href='mailto:bakcode.kosong@gmail.com'> <div class='socialItem'><img class='socialItemI' src='images/gmail.svg' alt=''></div> </a> <a target='_blank' href='https://github.com/Baksooo444'> <div class='socialItem'><img class='socialItemI' src='images/github.svg' alt=''></div> </a> <a target='_blank' href='https://wa.me/6285361381638'> <div class='socialItem'><img class='socialItemI' src='images/whatsapp.svg' alt=''></div> </a> <a target='_blank' href='https://t.me/'> <div class='socialItem'><img class='socialItemI' src='images/telegram.svg' alt=''></div> </a> <a target='_blank' href='https://instagram.com/erajeaef'> <div class='socialItem'><img class='socialItemI' src='images/instagram.svg' alt=''> </div> </a> <a href='https://www.linkedin.com/in/fajaramdhan/' target='_blank' rel='noopener noreferrer'> <div class='socialItem'><img class='socialItemI' src='images/linkedin.svg' alt=''></div> </a> </div>";
var resumeString =
  "<img src='images/resumeThumbnail.png' class='resumeThumbnail'><div class='downloadSpace'><div class='pdfname'><img src='images/pdf.png'><label>Fajar Ramadhan.pdf</label></div><a href='assets/Fajar Ramadhan.pdf' download='Fajar_Ramadhan.pdf'><img class='download' src='images/downloadIcon.svg'></a></div>";
var addressString =
  "<div class='mapview'><iframe src='https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1707.461733589353!2d99.36084147456911!3d3.1972727189897223!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sid!2sid!4v1722666661421!5m2!1sid!2sid' class='map'></iframe></div><label class='add'><address>Gg. Proyek<br>Perdagangan II<br>Bandar, Kab.Simalungun, Sumatra Utara, Indonesia 21184</address>";
function startFunction() {
  setLastSeen();
  waitAndResponce("intro");
}

function setLastSeen() {
  var date = new Date();
  var lastSeen = document.getElementById("lastseen");
  lastSeen.innerText =
    "last seen today at " + date.getHours() + ":" + date.getMinutes();
}

function closeFullDP() {
  var x = document.getElementById("fullScreenDP");
  if (x.style.display === "flex") {
    x.style.display = "none";
  } else {
    x.style.display = "flex";
  }
}

function openFullScreenDP() {
  var x = document.getElementById("fullScreenDP");
  if (x.style.display === "flex") {
    x.style.display = "none";
  } else {
    x.style.display = "flex";
  }
}

function isEnter(event) {
  if (event.keyCode == 13) {
    sendMsg();
  }
}

function sendMsg() {
  var input = document.getElementById("inputMSG");
  var ti = input.value;
  if (input.value == "") {
    return;
  }
  var date = new Date();
  var myLI = document.createElement("li");
  var myDiv = document.createElement("div");
  var greendiv = document.createElement("div");
  var dateLabel = document.createElement("label");
  dateLabel.innerText = date.getHours() + ":" + date.getMinutes();
  myDiv.setAttribute("class", "sent");
  greendiv.setAttribute("class", "green");
  dateLabel.setAttribute("class", "dateLabel");
  greendiv.innerText = input.value;
  myDiv.appendChild(greendiv);
  myLI.appendChild(myDiv);
  greendiv.appendChild(dateLabel);
  document.getElementById("listUL").appendChild(myLI);
  var s = document.getElementById("chatting");
  s.scrollTop = s.scrollHeight;
  setTimeout(function () {
    waitAndResponce(ti);
  }, 1500);
  input.value = "";
  playSound();
}

function waitAndResponce(inputText) {
  var lastSeen = document.getElementById("lastseen");
  lastSeen.innerText = "typing...";
  switch (inputText.toLowerCase().trim()) {
    case "intro":
      setTimeout(() => {
        sendTextMessage(
          "Hallo Pengunjung 👋🏻,<br><br>Nama saya adalah <span class='bold'><a class='alink'>Fajar Ramadhan</a>.</span><br><br>Saya seorang Web Developer yang sedang berkuliah di <span class='bold'>Universitas yang berada di Indonesia 👨🏻‍💻📚</span><br><br>Saya sangat ingin mendengar tentang peluang karir potensial, jadi saya akan senang untuk ngobrol tentang lowongan pekerjaan di bidang teknik.<br><br>Ketik <span class='bold'>'fajar'</span> untuk mengetahui lebih banyak tentang saya.<br>"
        );
      }, 2000);
      break;
    case "fajar":
      sendTextMessage(
        "<span class='sk'>Ketik Pilihan dibawah untuk mendapatkan apa yang ingin Anda ketahui tentang saya...<br>Pilihan :<br><span class='bold'>'skill'</span> - untuk mengetahui keahlianku<br><span class='bold'>'resume'</span> - untuk mendapatkan resume saya<br><span class='bold'>'pendidikan'</span> - untuk mendapatkan detail pendidikan saya<br><span class='bold'>'alamat'</span> - untuk mendapatkan alamatku<br><span class='bold'>'kontak'</span> - untuk mendapatkan cara untuk terhubung dengan saya<br><span class='bold'>'proyek'</span> - untuk mendapatkan detail proyek saya<br><span class='bold'>'clear'</span> - untuk menjernihkan percakapan<br><span class='bold'>'tentang'</span> - untuk mengetahui tentang situs ini</span>"
      );
      break;
    case "resume":
      sendTextMessage(resumeString);
      break;
    case "skill":
      sendTextMessage(
        "<span class='sk'>Saat ini saya sedang mengejar gelar Ilmu Komputer di bidang Teknik Ilmu Komputer.<br><br>Saya dapat dengan nyaman menulis kode dalam bahasa berikut :<br><span class='bold'>Java<br>C++<br>C<br>PHP<br>Kotlin<br>Dart<br>Python<br>CSS<br>HTML</span><br><br>Saya sudah berpengalaman dengan Frameworks berikut :<span class='bold'><br>Android<br>Flutter<br>ReactJs<br>GTK</span><br><br>Aku menggunakan <span class='bold'>Windows 11</span> Daily Driver saya Sebuah Laptop MSI<br>OS:Windows<br>DE:Gnome(Lebih sering) Kde(sering)<br>Favourite IDE:VSCode</span>"
      );
      break;

    case "pendidikan":
      sendTextMessage(
        "Saat ini saya sedang mengejar gelar Ilmu Komputer di bidang Teknik Ilmu Komputer.<br>Masuk Tahun : 2023<br><br>Saya lulusan SMA SETIABUDI ABADI PERBAUNGAN<br>Pada Tahun:2021<br>Nilai Rata Rata:88.76%<br><br>Dan Saya juga lulusan SMP Taman Ilmu Perlanaan<br>Pada Tahun:2018"
      );
      break;

    case "alamat":
      sendTextMessage(addressString);
      break;
    case "clear":
      clearChat();
      break;
    case "tentang":
      sendTextMessage(
        "🛠️💻 Website portofolio ini dibuat menggunakan HTML, CSS and JavaScript from SCRATCH!<br><br>👨🏻‍💻 Designed dan Developed by <a class='alink' target='_blank' href='https://instagram.com/erajeaef/'><span class='bold'>Fajar Ramadhan</a> dengan Kegabutannya.</span>"
      );
      break;
    case "kontak":
      sendTextMessage(contactString);
      break;
    case "proyek":
      sendTextMessage(
        "Anda ingin memeriksa proyek saya? Kemudian masuk saja ke Website Saya.<br><br><div class='social'><a target='_blank' href='https://fajarmdhan.online'> <div class='socialItem'><img class='socialItemI' src='images/github.svg' alt=''></div> </a></div>"
      );
      break;
    case "new":
      sendTextMessage(addressString);
      break;
    default:
      setTimeout(() => {
        sendTextMessage(
          "Hey Ketikanmu Mungkin salah...😢<br>Ketik 'fajar' untuk melihat beberapa pilihan tersedia."
        );
      }, 2000);
      break;
  }
}

function clearChat() {
  document.getElementById("listUL").innerHTML = "";
  waitAndResponce("intro");
}

function sendTextMessage(textToSend) {
  setTimeout(setLastSeen, 1000);
  var date = new Date();
  var myLI = document.createElement("li");
  var myDiv = document.createElement("div");
  var greendiv = document.createElement("div");
  var dateLabel = document.createElement("label");
  dateLabel.setAttribute("id", "sentlabel");
  dateLabel.id = "sentlabel";
  dateLabel.innerText = date.getHours() + ":" + date.getMinutes();
  myDiv.setAttribute("class", "received");
  greendiv.setAttribute("class", "grey");
  greendiv.innerHTML = textToSend;
  myDiv.appendChild(greendiv);
  myLI.appendChild(myDiv);
  greendiv.appendChild(dateLabel);
  document.getElementById("listUL").appendChild(myLI);
  var s = document.getElementById("chatting");
  s.scrollTop = s.scrollHeight;
  playSound();
}

function sendResponse() {
  setTimeout(setLastSeen, 1000);
  var date = new Date();
  var myLI = document.createElement("li");
  var myDiv = document.createElement("div");
  var greendiv = document.createElement("div");
  var dateLabel = document.createElement("label");
  dateLabel.innerText = date.getHours() + ":" + date.getMinutes();
  myDiv.setAttribute("class", "received");
  greendiv.setAttribute("class", "grey");
  dateLabel.setAttribute("class", "dateLabel");
  greendiv.innerText =
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. ";
  myDiv.appendChild(greendiv);
  myLI.appendChild(myDiv);
  greendiv.appendChild(dateLabel);
  document.getElementById("listUL").appendChild(myLI);
  var s = document.getElementById("chatting");
  s.scrollTop = s.scrollHeight;
  playSound();
}

function playSound() {
  audio.play();
}
