import { useEffect, useRef, useState } from "react";
import "../assets/css/Chatbot.css";

// Dataset NLP statis untuk chatbot
const nlpDataset = [
  {
    keywords: ["halo", "hai", "hi", "hello", "selamat"],
    responses: [
      "Halo! Selamat datang di TeraLab. Apa yang bisa saya bantu hari ini?",
      "Hai! Senang bertemu dengan Anda. Ada yang bisa saya bantu?",
      "Selamat datang di TeraLab! Bagaimana saya bisa membantu Anda?"
    ]
  },
  {
    keywords: ["kursus", "belajar", "pembelajaran", "kelas", "course"],
    responses: [
      "TeraLab menawarkan berbagai kursus teknologi seperti pemrograman, data science, AI, dan desain UI/UX. Kursus apa yang Anda minati?",
      "Kami memiliki beragam kursus untuk mengembangkan skill digital Anda. Apakah Anda tertarik dengan pemrograman, data science, atau mungkin UI/UX design?",
      "Di TeraLab tersedia berbagai kelas untuk meningkatkan kemampuan digital. Bidang apa yang ingin Anda dalami?"
    ]
  },
  {
    keywords: ["pemrograman", "coding", "programming", "code", "developer"],
    responses: [
      "TeraLab menawarkan berbagai kursus pemrograman mulai dari dasar hingga advanced. Ada JavaScript, Python, Java, dan banyak lagi. Bahasa pemrograman apa yang ingin Anda pelajari?",
      "Kami memiliki jalur pembelajaran pemrograman lengkap dari basic hingga professional. Tersedia kursus JavaScript, Python, Java, dan lainnya. Apakah Anda sudah memiliki preferensi bahasa?",
      "Untuk pemrograman, kami memiliki kursus yang komprehensif dari level pemula hingga expert. Anda bisa memilih dari JavaScript, Python, Java, dan bahasa lainnya."
    ]
  },
  {
    keywords: ["data", "science", "analisis", "analitik", "big data", "machine learning", "ml"],
    responses: [
      "TeraLab menawarkan jalur pembelajaran data science lengkap. Mulai dari statistik dasar, Python untuk data analysis, machine learning, hingga big data. Bagian mana yang paling Anda minati?",
      "Di bidang data science, kami memiliki kursus statistik, data analysis dengan Python/R, machine learning, dan big data. Apakah Anda baru memulai di bidang ini?",
      "Kami punya track pembelajaran data science mulai dari dasar sampai advanced. Termasuk statistik, Python, machine learning, dan big data. Level apa yang sesuai untuk Anda?"
    ]
  },
  {
    keywords: ["ai", "artificial intelligence", "kecerdasan buatan", "neural network", "deep learning"],
    responses: [
      "TeraLab menawarkan kursus AI dari konsep dasar hingga implementasi. Ada neural networks, deep learning, NLP, dan computer vision. Area spesifik apa yang ingin Anda pelajari?",
      "Untuk AI, kami memiliki berbagai kursus seperti pengenalan AI, neural networks, deep learning, NLP, dan computer vision. Apa Anda sudah memiliki dasar AI sebelumnya?",
      "Di bidang AI, kami menawarkan pembelajaran tentang neural networks, deep learning, NLP, dan computer vision. Level mana yang ingin Anda ikuti?"
    ]
  },
  {
    keywords: ["biaya", "harga", "bayar", "uang", "price", "cost"],
    responses: [
      "Biaya kursus di TeraLab bervariasi mulai dari Rp500.000 hingga Rp5.000.000 tergantung jenis dan durasi kursus. Kami juga menawarkan beasiswa dan cicilan pembayaran. Kursus spesifik apa yang ingin Anda ketahui biayanya?",
      "Harga kursus kami berkisar antara Rp500.000 - Rp5.000.000 tergantung level dan durasinya. Tersedia juga opsi beasiswa dan pembayaran cicilan. Ada kursus tertentu yang ingin Anda tanyakan biayanya?",
      "Untuk biaya, kursus kami mulai dari Rp500.000 sampai Rp5.000.000. Kami juga punya program beasiswa dan cicilan. Kursus apa yang Anda minati?"
    ]
  },
  {
    keywords: ["durasi", "lama", "waktu", "duration", "time"],
    responses: [
      "Durasi kursus di TeraLab bervariasi dari 4 minggu hingga 6 bulan, tergantung jenis kursus dan level pembelajarannya. Ada fleksibilitas jadwal untuk kelas online. Kursus spesifik apa yang ingin Anda ketahui durasinya?",
      "Kursus kami memiliki durasi berbeda-beda, mulai dari 1 bulan hingga 6 bulan tergantung intensitas dan levelnya. Untuk kelas online, jadwalnya lebih fleksibel. Ada kursus tertentu yang ingin Anda tanyakan?",
      "Waktu belajar di TeraLab berkisar antara 1-6 bulan tergantung program yang dipilih. Untuk online learning, jadwalnya sangat fleksibel sesuai kebutuhan Anda."
    ]
  },
  {
    keywords: ["sertifikat", "certificate", "credential", "ijazah"],
    responses: [
      "Ya, TeraLab memberikan sertifikat resmi untuk semua lulusan kursus. Sertifikat kami diakui industri dan dapat ditambahkan ke CV atau LinkedIn Anda.",
      "Semua kursus TeraLab dilengkapi dengan sertifikat kelulusan resmi yang diakui industri. Sangat bagus untuk portofolio karir Anda.",
      "TeraLab menyediakan sertifikat industri untuk semua kursus. Sertifikat ini dapat meningkatkan kredibilitas Anda di dunia kerja."
    ]
  },
  {
    keywords: ["mentor", "instruktur", "pengajar", "teacher", "dosen"],
    responses: [
      "TeraLab memiliki mentor berpengalaman dari berbagai perusahaan teknologi ternama. Mereka adalah praktisi yang ahli di bidangnya dengan pengalaman mengajar yang baik.",
      "Mentor-mentor TeraLab adalah praktisi industri dengan pengalaman minimal 5 tahun di bidangnya. Mereka berasal dari perusahaan teknologi terkemuka.",
      "Kami memiliki instruktur berkualitas dengan latar belakang industri yang kuat. Mereka tidak hanya ahli teknologi tapi juga memiliki passion dalam mengajar."
    ]
  },
  {
    keywords: ["kerja", "karir", "career", "job", "pekerjaan", "lowongan"],
    responses: [
      "TeraLab memiliki program career support seperti career coaching, CV review, interview preparation, dan akses ke jaringan mitra perusahaan untuk membantu Anda mendapatkan pekerjaan setelah lulus.",
      "Kami menyediakan layanan career support berupa career coaching, portofolio review, dan koneksi dengan perusahaan partner untuk membantu karir Anda setelah lulus dari program kami.",
      "TeraLab punya program career assistance yang membantu lulusan mendapatkan pekerjaan melalui career coaching, interview prep, dan networking dengan perusahaan partner."
    ]
  },
  {
    keywords: ["webinar", "workshop", "seminar", "event"],
    responses: [
      "TeraLab secara rutin mengadakan webinar dan workshop gratis tentang berbagai topik teknologi. Silakan cek halaman Events di website kami untuk jadwal terbaru.",
      "Kami mengadakan webinar mingguan dan workshop bulanan tentang trend teknologi terkini. Kunjungi halaman Events kami untuk informasi lengkapnya.",
      "TeraLab rutin menggelar webinar dan workshop dengan pembicara dari industri teknologi. Silakan lihat jadwal di halaman Events website kami."
    ]
  },
  {
    keywords: ["merchandise", "merch", "produk", "barang"],
    responses: [
      "TeraLab menawarkan berbagai merchandise seperti kaos, stiker, notebook, dan lainnya. Kunjungi halaman Merchandise di website kami untuk melihat koleksi lengkapnya.",
      "Kami memiliki merchandise keren seperti t-shirt, tumbler, notebook, dan sticker pack. Silakan cek halaman Merchandise untuk melihat dan membelinya.",
      "TeraLab punya beragam merchandise menarik mulai dari apparel hingga aksesoris. Lihat koleksinya di halaman Merchandise website kami."
    ]
  },
  {
    keywords: ["terima kasih", "thanks", "makasih", "thx"],
    responses: [
      "Sama-sama! Senang bisa membantu. Ada hal lain yang ingin Anda tanyakan?",
      "Dengan senang hati! Jika ada pertanyaan lain, jangan ragu untuk bertanya.",
      "Terima kasih kembali! Saya siap membantu jika Anda memiliki pertanyaan lainnya."
    ]
  },
  {
    keywords: ["javascript", "js", "frontend", "react", "vue", "angular"],
    responses: [
      "TeraLab menawarkan kursus JavaScript lengkap untuk pengembangan frontend dan backend. Kami mengajarkan JavaScript modern, React, Vue, dan Node.js. Apakah Anda tertarik dengan salah satu teknologi ini?",
      "Kursus JavaScript kami mencakup fundamental JS, framework seperti React dan Vue, serta Node.js untuk backend. Kami juga membahas state management dan tools development modern.",
      "Untuk JavaScript, kami memiliki jalur belajar dari dasar hingga advanced, termasuk pengembangan aplikasi dengan React, Vue, atau Node.js. Sudah memiliki pengalaman JavaScript sebelumnya?"
    ]
  },
  {
    keywords: ["python", "django", "flask", "data analysis", "pandas", "numpy"],
    responses: [
      "TeraLab menawarkan kursus Python untuk berbagai kebutuhan: pengembangan web dengan Django/Flask, data analysis dengan Pandas/Numpy, atau machine learning. Area mana yang Anda minati?",
      "Python di TeraLab mencakup pengembangan web (Django/Flask), data science (Pandas/Numpy), dan machine learning (Scikit-learn/TensorFlow). Sudah pernah menggunakan Python sebelumnya?",
      "Kursus Python kami sangat komprehensif, mulai dari basic syntax hingga aplikasi dalam pengembangan web, data science, atau AI/ML. Level pembelajaran mana yang Anda butuhkan?"
    ]
  },
  {
    keywords: ["java", "spring", "android"],
    responses: [
      "TeraLab memiliki kursus Java untuk pengembangan aplikasi enterprise dengan Spring Boot dan mobile development dengan Android. Area mana yang lebih Anda minati?",
      "Kursus Java kami mencakup core Java, pengembangan aplikasi enterprise dengan Spring, dan pengembangan aplikasi Android. Apakah Anda sudah memiliki pengalaman dengan Java?",
      "Di bidang Java, kami menawarkan pembelajaran dari dasar hingga advanced: core Java, Spring framework, dan Android development. Level apa yang sesuai untuk Anda?"
    ]
  },
  {
    keywords: ["ui", "ux", "design", "user interface", "user experience", "figma", "adobe xd"],
    responses: [
      "TeraLab menawarkan kursus UI/UX design yang komprehensif. Mulai dari prinsip design thinking, wireframing, prototyping dengan Figma/Adobe XD, hingga user testing. Apakah Anda tertarik dengan UI atau UX secara spesifik?",
      "Kursus UI/UX kami mencakup design thinking, user research, wireframing, prototyping, dan testing. Anda akan belajar menggunakan tools seperti Figma dan Adobe XD. Sudah pernah mendesign sebelumnya?",
      "Untuk UI/UX design, kami memiliki kurikulum yang mencakup keseluruhan proses design, dari research hingga implementasi. Anda akan mengerjakan proyek nyata dalam portofolio."
    ]
  },
  {
    keywords: ["cloud", "aws", "azure", "google cloud", "gcp", "devops"],
    responses: [
      "TeraLab menawarkan kursus cloud computing dengan fokus pada AWS, Azure, atau Google Cloud. Anda akan belajar tentang arsitektur cloud, deployment, scaling, dan DevOps practices. Platform cloud mana yang Anda minati?",
      "Kursus cloud computing kami mencakup AWS, Azure, dan Google Cloud Platform. Materi meliputi IaaS, PaaS, SaaS, container, serverless, dan DevOps. Sudah pernah bekerja dengan teknologi cloud?",
      "Di bidang cloud, kami mengajarkan fundamental cloud computing, service-service populer di AWS/Azure/GCP, serta best practice DevOps. Kursus ini sangat cocok untuk engineer yang ingin beralih ke cloud."
    ]
  },
  {
    keywords: ["cybersecurity", "security", "hacker", "ethical hacking", "pentest", "penetration testing"],
    responses: [
      "TeraLab menawarkan kursus cybersecurity yang mencakup security fundamentals, network security, ethical hacking, dan penetration testing. Apakah Anda tertarik untuk menjadi security professional?",
      "Kursus cybersecurity kami mengajarkan prinsip-prinsip keamanan, analisis vulnerability, ethical hacking, dan security defense. Anda akan melakukan hands-on practice dalam lab yang aman.",
      "Di bidang cybersecurity, kami memiliki track pembelajaran dari fundamental hingga advanced, termasuk ethical hacking, forensic analysis, dan security hardening. Sudah punya background IT security?"
    ]
  },
  {
    keywords: ["blockchain", "crypto", "web3", "smart contract", "nft"],
    responses: [
      "TeraLab menawarkan kursus blockchain development yang mencakup dasar-dasar blockchain, smart contracts dengan Solidity, dan pengembangan aplikasi Web3. Apakah Anda tertarik dengan bidang ini?",
      "Kursus blockchain kami membahas fundamental blockchain, cryptocurrency, Ethereum, smart contracts dengan Solidity, dan pengembangan DApps. Sudah pernah mengeksplorasi teknologi blockchain?",
      "Di bidang blockchain, kami mengajarkan tentang konsep dasar blockchain, smart contracts, NFTs, dan pengembangan aplikasi terdesentralisasi. Kursus ini cocok untuk developer yang ingin masuk ke Web3."
    ]
  },
  {
    keywords: ["lokasi", "tempat", "alamat", "dimana", "location"],
    responses: [
      "TeraLab memiliki kampus fisik di Jakarta (Sudirman), Bandung (Dago), dan Surabaya (HR Muhammad). Namun kami juga menawarkan kursus online yang bisa diakses dari mana saja. Mana yang lebih nyaman untuk Anda?",
      "Kami memiliki beberapa lokasi kampus di Jakarta, Bandung, dan Surabaya. Semua kursus juga tersedia dalam format online yang interaktif dan fleksibel. Preferensi Anda online atau offline?",
      "TeraLab beroperasi di 3 kota: Jakarta, Bandung, dan Surabaya. Tapi Anda juga bisa mengikuti kursus secara online dengan mentor yang sama berkualitasnya. Bagaimana preferensi belajar Anda?"
    ]
  },
  {
    keywords: ["metode", "belajar", "cara", "learning", "metode pembelajaran", "bootcamp"],
    responses: [
      "TeraLab menggunakan metode pembelajaran project-based yang interaktif. Setiap kursus terdiri dari teori, praktik, project, dan mentoring 1-on-1. Kami juga menawarkan format bootcamp intensif dan part-time.",
      "Metode pembelajaran kami berfokus pada hands-on project dan mastery learning. Kurikulum dirancang bersama praktisi industri dan diperbaharui secara berkala. Ada opsi kelas reguler dan bootcamp intensif.",
      "TeraLab mengadopsi metode project-based learning dengan dukungan mentor berpengalaman. Setiap minggu ada sesi live coding, group discussion, dan 1-on-1 mentoring. Format belajar bisa full-time atau part-time."
    ]
  },
  {
    keywords: ["daftar", "mendaftar", "registrasi", "register", "join", "bergabung", "ikut", "signup", "sign up"],
    responses: [
      "Untuk mendaftar di TeraLab, silakan kunjungi website kami di teralab.id/daftar dan isi formulir pendaftaran. Anda perlu menyiapkan: 1) Data diri lengkap, 2) Alamat email aktif, dan 3) Nomor telepon. Setelah mengisi formulir, tim kami akan menghubungi Anda dalam 1x24 jam untuk langkah selanjutnya.",
      "Pendaftaran di TeraLab sangat mudah! Cukup akses teralab.id/daftar, isi formulir dengan data diri Anda, pilih program yang diminati, dan klik 'Daftar'. Tim kami akan segera menghubungi Anda untuk konsultasi gratis dan penjelasan detail program.",
      "Cara mendaftar di TeraLab: 1) Kunjungi teralab.id/daftar, 2) Isi formulir pendaftaran dengan lengkap, 3) Pilih kursus yang Anda minati, 4) Klik tombol 'Daftar Sekarang', 5) Tunggu konfirmasi via email dalam 24 jam. Jika ada pertanyaan, silakan hubungi CS kami di 0812-3456-7890."
    ]
  },
  {
    keywords: ["tentang", "about", "profil", "profile", "teralab", "sejarah", "history", "latar belakang"],
    responses: [
      "TeraLab adalah platform edukasi teknologi yang didirikan tahun 2021 dengan misi memberikan pendidikan teknologi berkualitas tinggi dan terjangkau. Kami fokus pada pembelajaran berbasis proyek dan mentoring oleh praktisi industri, dengan spesialisasi di bidang pemrograman, data science, AI, dan desain digital.",
      "TeraLab merupakan platform edukasi teknologi yang bekerja sama dengan profesional industri untuk memberikan pembelajaran berbasis praktik. Berdiri sejak 2021, kami telah meluluskan lebih dari 5.000 siswa yang kini berkarir di berbagai perusahaan teknologi terkemuka di Indonesia dan global.",
      "TeraLab adalah institusi pendidikan teknologi yang didirikan oleh sekelompok praktisi IT berpengalaman. Kami berkomitmen menyediakan kurikulum up-to-date yang sesuai kebutuhan industri, dengan fokus pada pengalaman belajar hands-on dan pendampingan oleh mentor berpengalaman."
    ]
  },
  {
    keywords: ["visi", "misi", "vision", "mission", "tujuan", "goal", "purpose"],
    responses: [
      "Visi TeraLab adalah menjadi platform edukasi teknologi terkemuka di Asia Tenggara. Misi kami adalah menyediakan pendidikan teknologi berkualitas, terjangkau, dan relevan dengan kebutuhan industri, serta mempersiapkan talenta digital untuk masa depan.",
      "TeraLab memiliki visi untuk membantu 1 juta talenta digital Indonesia pada tahun 2030. Misi kami adalah menyediakan pendidikan teknologi yang berkualitas dan terjangkau melalui kurikulum komprehensif, instruktur berpengalaman, dan lingkungan belajar supportif.",
      "Visi kami adalah menciptakan ekosistem pembelajaran teknologi yang inklusif dan inovatif. Misi TeraLab adalah mempersiapkan talenta-talenta Indonesia agar siap bersaing di era digital global melalui pendidikan teknologi berkualitas tinggi dan networking dengan industri."
    ]
  },
  {
    keywords: ["syarat", "requirement", "persyaratan", "kriteria", "requirement"],
    responses: [
      "Persyaratan umum untuk mengikuti kursus di TeraLab: 1) Usia minimal 17 tahun, 2) Memiliki laptop dengan spesifikasi minimal Core i3/Ryzen 3, RAM 8GB, 3) Koneksi internet stabil, dan 4) Komitmen untuk mengikuti kelas. Untuk kursus tertentu mungkin ada persyaratan tambahan, seperti pengetahuan dasar pemrograman.",
      "Untuk bergabung dengan TeraLab, Anda memerlukan: 1) Komputer/laptop yang memadai (min. Core i3/Ryzen 3, RAM 8GB), 2) Koneksi internet stabil, 3) Komitmen waktu 10-20 jam/minggu, dan 4) Motivasi belajar yang tinggi. Beberapa kursus advanced memiliki prasyarat pengetahuan dasar tertentu.",
      "Syarat mengikuti program TeraLab cukup sederhana: Anda memerlukan laptop dengan spesifikasi memadai, koneksi internet yang stabil, dan komitmen untuk belajar sesuai jadwal program. Tidak ada persyaratan pendidikan formal tertentu, namun untuk beberapa kursus advanced diperlukan pengetahuan dasar terkait."
    ]
  },
  {
    keywords: ["proses", "alur", "tahapan", "step", "langkah", "cara", "how to", "workflow"],
    responses: [
      "Proses belajar di TeraLab: 1) Pendaftaran dan konsultasi awal, 2) Pembayaran biaya program, 3) Orientasi dan perkenalan, 4) Akses ke materi pembelajaran, 5) Kelas live dan mentoring rutin, 6) Pengerjaan project, 7) Final project dan presentasi, 8) Sertifikasi dan career support. Alur ini dirancang untuk memaksimalkan pengalaman belajar Anda.",
      "Tahapan pembelajaran di TeraLab: Dimulai dari orientasi program, kemudian pembahasan materi fundamental, implementasi dalam mini-project, pendalaman materi advanced, pengerjaan capstone project, dan diakhiri dengan sertifikasi. Sepanjang program, Anda akan didampingi mentor berpengalaman.",
      "Alur belajar di TeraLab dirancang sistematis: 1) Onboarding dan perkenalan, 2) Pembelajaran fundamental, 3) Praktik dan project kecil, 4) Materi lanjutan, 5) Kolaborasi dalam team project, 6) Capstone project, 7) Career preparation, dan 8) Graduation. Di setiap tahap, Anda mendapat bimbingan dari mentor profesional."
    ]
  },
  {
    keywords: ["fasilitas", "facility", "dapat apa", "benefit", "manfaat", "keuntungan", "advantage"],
    responses: [
      "Fasilitas yang Anda dapatkan di TeraLab: 1) Akses lifetime ke materi pembelajaran, 2) Live class dengan instruktur profesional, 3) Sesi mentoring 1-on-1, 4) Project-based learning, 5) Sertifikat industri, 6) Jaringan alumni, 7) Career coaching, dan 8) Kesempatan magang di perusahaan partner kami.",
      "Manfaat mengikuti program TeraLab: Akses ke materi berkualitas tinggi, mentoring oleh praktisi industri, pengalaman project nyata untuk portofolio, networking dengan profesional dan alumni, sertifikasi industri, serta dukungan karir setelah lulus. Semua ini dirancang untuk memastikan kesuksesan karir Anda.",
      "Di TeraLab, Anda akan mendapatkan: Pembelajaran dari instruktur berpengalaman, kurikulum up-to-date sesuai kebutuhan industri, praktik hands-on, project portofolio, sertifikasi, jaringan alumni yang luas, dan career support. Plus, akses seumur hidup ke materi pembelajaran dan update-nya."
    ]
  },
  {
    keywords: ["metode bayar", "pembayaran", "payment", "cicil", "angsuran", "installment", "transfer", "kartu kredit", "credit card"],
    responses: [
      "TeraLab menawarkan beberapa metode pembayaran: 1) Transfer bank, 2) Kartu kredit/debit, 3) Virtual account, 4) E-wallet (OVO, GoPay, DANA), 5) Cicilan 0% hingga 12 bulan dengan kartu kredit tertentu. Kami juga menyediakan opsi cicilan tanpa kartu kredit melalui Kredivo dan Indodana.",
      "Opsi pembayaran di TeraLab sangat fleksibel. Anda dapat membayar secara penuh di awal melalui transfer bank, kartu kredit/debit, atau e-wallet. Tersedia juga opsi cicilan 3, 6, atau 12 bulan melalui kartu kredit atau layanan cicilan tanpa kartu kredit dengan proses approval cepat.",
      "Untuk memudahkan Anda, TeraLab menerima pembayaran melalui: transfer bank, virtual account, kartu kredit (cicilan 0% hingga 12 bulan), dan e-wallet. Kami juga bermitra dengan Kredivo dan Akulaku untuk opsi cicilan tanpa kartu kredit dengan proses yang mudah."
    ]
  },
  {
    keywords: ["diskon", "discount", "potongan", "promo", "voucher", "kupon", "coupon", "beasiswa", "scholarship"],
    responses: [
      "TeraLab sering mengadakan promo dan diskon di periode-periode tertentu seperti awal tahun, hari kemerdekaan, dan akhir tahun. Kami juga memiliki program beasiswa untuk pelajar/mahasiswa berprestasi dan profesional dengan kondisi ekonomi tertentu. Pantau sosial media kami untuk info promo terbaru.",
      "Kami di TeraLab menawarkan berbagai program diskon: Early bird (20% off) untuk pendaftar awal, diskon group (15% untuk 3+ orang), program referral (10% untuk yang mereferensikan dan yang direferensikan), dan beasiswa penuh untuk kandidat berprestasi. Hubungi tim kami untuk informasi terkini.",
      "TeraLab memiliki beberapa program diskon dan beasiswa: 1) Diskon early bird, 2) Diskon grup, 3) Program referal, 4) Beasiswa prestasi, dan 5) Beasiswa inklusi digital. Promo spesial juga diadakan pada momen tertentu seperti ulang tahun TeraLab dan event nasional. Silakan tanyakan pada tim CS kami."
    ]
  },
  {
    keywords: ["alumni", "lulusan", "graduate", "setelah lulus", "after graduation", "success story", "testimoni"],
    responses: [
      "Alumni TeraLab tersebar di berbagai perusahaan teknologi ternama seperti Gojek, Tokopedia, Traveloka, Bukalapak, dan startup-startup potensial. Banyak juga yang berkarir di perusahaan multinasional atau membangun startup mereka sendiri. Success rate penempatan kerja alumni kami mencapai 90% dalam 3 bulan setelah kelulusan.",
      "Alumni TeraLab memiliki track record karir yang mengesankan. Mereka bekerja di perusahaan seperti Gojek, Tokopedia, Dana, LinkAja, Shopee, dan perusahaan teknologi lainnya. Beberapa alumni juga sukses mendirikan startup sendiri dan mendapatkan pendanaan. Network alumni kami sangat kuat dan saling mendukung.",
      "Lulusan TeraLab telah membuktikan kualitasnya di dunia kerja. Mereka menduduki berbagai posisi dari junior hingga senior di perusahaan teknologi terkemuka. Beberapa alumni mendapatkan kenaikan gaji hingga 50-200% setelah lulus. Kami memiliki jaringan alumni aktif yang rutin mengadakan gathering dan knowledge sharing."
    ]
  },
  {
    keywords: ["kontak", "contact", "hubungi", "tanya", "tanyakan", "email", "telp", "telepon", "whatsapp", "wa", "sosmed", "social media"],
    responses: [
      "Anda dapat menghubungi TeraLab melalui: Email: info@teralab.id, WhatsApp: 0812-3456-7890, Telepon: 021-12345678, Instagram/Twitter: @teralab.id, atau melalui form kontak di website kami teralab.id/contact. Tim customer service kami siap melayani setiap hari (Senin-Minggu) dari jam 08.00-20.00 WIB.",
      "Untuk informasi lebih lanjut, silakan hubungi kami melalui: WhatsApp Business: 0812-3456-7890, Email: halo@teralab.id, atau sosial media kami di Instagram, Twitter, dan LinkedIn (@teralab.id). Anda juga bisa mengunjungi kantor kami di Jakarta, Bandung, atau Surabaya (appointment required).",
      "Tim TeraLab siap menjawab pertanyaan Anda melalui berbagai channel: WhatsApp (0812-3456-7890), Email (support@teralab.id), Live Chat di website kami (teralab.id), dan sosial media (Instagram/Facebook/LinkedIn: @teralab.id). Jam operasional customer service kami adalah 08.00-20.00 WIB setiap hari."
    ]
  },
  {
    keywords: ["keunggulan", "advantage", "kelebihan", "excellence", "superior", "unggul", "benefit", "why", "kenapa", "mengapa"],
    responses: [
      "Keunggulan TeraLab dibandingkan platform lain: 1) Kurikulum yang didesain bersama praktisi industri dan selalu up-to-date, 2) Instruktur berpengalaman dari perusahaan teknologi terkemuka, 3) Rasio mentor:siswa 1:5 untuk pembelajaran optimal, 4) Fokus pada project-based learning, dan 5) Program career support yang komprehensif.",
      "TeraLab memiliki beberapa keunggulan: kurikulum yang selalu diperbarui mengikuti tren industri, instruktur yang merupakan praktisi aktif, pendekatan pembelajaran berbasis proyek nyata, kelompok belajar kecil untuk pendampingan intensif, dan jaringan industri yang kuat untuk penempatan kerja alumni.",
      "Mengapa memilih TeraLab? Karena kami menawarkan: 1) Pembelajaran hands-on dengan kasus nyata, 2) Mentor dari perusahaan teknologi terkemuka, 3) Jaringan alumni dan industri yang kuat, 4) Kurikulum yang selalu updated, 5) Support karir yang komprehensif, dan 6) Biaya yang kompetitif dengan opsi pembayaran fleksibel."
    ]
  },
  {
    keywords: ["kurikulum", "curriculum", "silabus", "syllabus", "materi", "material", "konten", "content"],
    responses: [
      "Kurikulum di TeraLab dirancang bersama praktisi industri dan diperbarui setiap 3-6 bulan sesuai perkembangan teknologi terkini. Kami menggunakan pendekatan 'learn by doing' dengan 30% teori dan 70% praktik. Setiap program diakhiri dengan capstone project yang dapat menjadi portofolio Anda.",
      "Silabus TeraLab dikembangkan dengan prinsip Industry-Aligned Learning. Konten pembelajaran mencakup fundamental theory, best practices, hands-on labs, mini projects, dan capstone project. Semua materi dirancang berdasarkan kebutuhan nyata industri dan tren teknologi terkini.",
      "Materi pembelajaran di TeraLab terdiri dari video lessons, e-books, interactive labs, live sessions, dan project-based assignments. Kurikulum kami dirancang komprehensif dari basic hingga advanced dan selalu diperbarui setiap 6 bulan untuk memastikan relevansi dengan kebutuhan industri."
    ]
  },
  {
    keywords: ["online", "offline", "hybrid", "daring", "luring", "remote", "jarak jauh", "tatap muka"],
    responses: [
      "TeraLab menawarkan tiga mode pembelajaran: Online (100% remote learning), Offline (di kampus TeraLab di Jakarta, Bandung, Surabaya), dan Hybrid (kombinasi keduanya). Mode Online menyediakan akses ke semua materi dan mentoring via video conference. Untuk program hybrid, pertemuan offline biasanya dilakukan setiap 2 minggu sekali.",
      "Di TeraLab, Anda dapat memilih metode belajar sesuai preferensi: Full Online (fleksibel, bisa diakses dari mana saja), Full Offline (di kampus TeraLab dengan interaksi langsung), atau Hybrid (kombinasi online dan offline). Semua metode menyediakan akses ke materi yang sama dan kualitas mentoring yang setara.",
      "TeraLab menyediakan opsi belajar online, offline, dan hybrid. Program online bisa diakses dari mana saja dengan jadwal fleksibel. Program offline memberikan pengalaman interaksi langsung di kampus TeraLab. Program hybrid menggabungkan kedua manfaat tersebut. Semua program mendapatkan sertifikat dan career support yang sama."
    ]
  },
  {
    keywords: ["partner", "partnership", "perusahaan", "company", "industry", "kerjasama", "mitra", "kolaborasi", "collaboration"],
    responses: [
      "TeraLab bermitra dengan lebih dari 50 perusahaan teknologi seperti Google, Microsoft, Gojek, Tokopedia, dan Traveloka. Kemitraan ini mencakup pengembangan kurikulum, guest lectures, company visit, proyek kolaboratif, dan recruitment. Alumni TeraLab mendapat akses prioritas untuk rekrutmen di perusahaan-perusahaan partner.",
      "Mitra industri TeraLab mencakup perusahaan teknologi nasional dan multinasional seperti Google, AWS, Microsoft, Gojek, Tokopedia, dan banyak lainnya. Kerjasama ini memungkinkan siswa mengerjakan proyek nyata, mendapatkan mentoring dari praktisi industri, dan mendapat prioritas pada kesempatan kerja di perusahaan-perusahaan tersebut.",
      "TeraLab berkolaborasi dengan berbagai perusahaan teknologi terkemuka untuk memastikan kurikulum selalu relevan dan membuka peluang karir bagi alumni. Partner kami termasuk Google, Tokopedia, Gojek, Traveloka, dan puluhan perusahaan teknologi lainnya yang berkontribusi dalam bentuk mentoring, workshop, dan recruitment program."
    ]
  },
  {
    keywords: ["review", "ulasan", "rating", "testimonial", "feedback", "pendapat", "opinion", "komentar", "comment"],
    responses: [
      "TeraLab mendapat rating 4.8/5 dari lebih dari 1000+ reviews di Google dan platform edukasi. Alumni memuji kualitas kurikulum, kompetensi instruktur, dan efektivitas program career support kami. Beberapa testimonial menyebutkan peningkatan karir signifikan setelah lulus dari program kami.",
      "Ulasan dari alumni TeraLab sangat positif dengan rating rata-rata 4.8/5. Banyak yang menekankan kualitas pembelajaran praktis, mentor yang kompeten, dan networking yang berharga. Lebih dari 90% alumni menyatakan program TeraLab memberikan return on investment yang signifikan untuk karir mereka.",
      "Feedback dari peserta TeraLab konsisten menekankan kualitas kurikulum yang up-to-date, instruktur yang berpengalaman, dan pembelajaran berbasis proyek yang sangat bernilai. Banyak alumni melaporkan kenaikan gaji signifikan atau peningkatan karir dalam 6 bulan setelah menyelesaikan program kami."
    ]
  },
  {
    keywords: ["akreditasi", "accreditation", "sertifikasi", "certification", "diakui", "recognized", "legal"],
    responses: [
      "TeraLab adalah lembaga pendidikan non-formal yang terdaftar di Kementerian Pendidikan dan Kebudayaan Indonesia. Sertifikat kami diakui oleh industri dan banyak perusahaan partner. Beberapa program kami juga memiliki sertifikasi internasional seperti CompTIA, AWS, Google, dan Microsoft.",
      "TeraLab telah mendapatkan akreditasi dari Kementerian Pendidikan dan Kebudayaan sebagai lembaga kursus profesional. Selain itu, kurikulum kami disusun sesuai standar industri dan beberapa program menawarkan sertifikasi internasional dari badan-badan seperti AWS, Google, dan Microsoft.",
      "Program-program di TeraLab telah terakreditasi oleh Direktorat Jenderal Pendidikan Vokasi Kemendikbudristek. Kami juga bermitra dengan lembaga sertifikasi internasional untuk menawarkan sertifikasi tambahan yang diakui secara global dalam beberapa program kami."
    ]
  },
  {
    keywords: ["layanan", "service", "feature", "fitur", "program", "course", "product", "produk"],
    responses: [
      "TeraLab menyediakan beragam program pembelajaran: 1) Bootcamp intensif (2-5 bulan), 2) Kursus reguler (part-time, 3-6 bulan), 3) Workshop singkat (2-5 hari), 4) Corporate training untuk perusahaan, 5) Webinar gratis, dan 6) Program beasiswa. Setiap program dirancang untuk memenuhi kebutuhan belajar yang berbeda-beda.",
      "Layanan yang tersedia di TeraLab meliputi: 1) Program bootcamp full-time untuk career switcher, 2) Kursus part-time untuk professional, 3) Micro-learning untuk skill tertentu, 4) Executive programs untuk leader, 5) Corporate training, 6) Career counseling, dan 7) Hiring events. Semua program didukung oleh platform belajar online kami yang komprehensif.",
      "TeraLab menawarkan berbagai produk edukasi: mulai dari bootcamp intensif, kursus reguler, workshop spesialis, hingga seri webinar. Kami juga memiliki layanan konsultasi karir, job placement assistance, dan program corporate training untuk perusahaan yang ingin meningkatkan kemampuan digital karyawannya."
    ]
  },
  {
    keywords: ["update", "pembaruan", "terbaru", "latest", "new", "baru"],
    responses: [
      "TeraLab terus melakukan pembaruan pada kurikulum dan program kami. Update terbaru termasuk: 1) Penambahan track AI dan Machine Learning, 2) Program Web3 dan Blockchain Development, 3) Kemitraan baru dengan Google dan AWS, dan 4) Platform pembelajaran yang telah diperbarui dengan fitur interaktif. Kunjungi website kami untuk informasi lengkap.",
      "Update terbaru dari TeraLab: 1) Peluncuran program Data Engineering & MLOps, 2) Pembaruan kurikulum UI/UX dengan fokus pada design system, 3) Penambahan 10+ perusahaan partner untuk placement, dan 4) Program mentorship khusus untuk alumni. Semua informasi terbaru dapat dilihat di website dan sosial media kami.",
      "TeraLab baru saja meluncurkan beberapa program baru: 1) AI & Machine Learning Professional Track, 2) DevOps Engineering, 3) Cloud Solutions Architecture, dan 4) Cybersecurity Specialist. Kami juga memperluas jangkauan dengan membuka campus baru di Surabaya dan menambah opsi pembelajaran hybrid."
    ]
  },
  {
    keywords: ["faq", "frequently asked", "pertanyaan umum", "tanya jawab"],
    responses: [
      "Pertanyaan yang sering ditanyakan tentang TeraLab: 1) 'Apakah ada prasyarat untuk mengikuti kursus?' - Tergantung program, beberapa memerlukan pengetahuan dasar, 2) 'Berapa lama durasi program?' - Mulai dari 1 minggu hingga 6 bulan, 3) 'Apakah ada jaminan kerja?' - Kami menyediakan career support komprehensif dengan success rate 90%. Untuk FAQ lengkap, silakan kunjungi teralab.id/faq.",
      "FAQ di TeraLab: 1) Prasyarat program - beberapa program memerlukan basic knowledge, namun tersedia juga program untuk pemula, 2) Jaminan pekerjaan - kami menyediakan career support namun tidak menjamin penempatan, 3) Pembatalan program - refund 100% jika dibatalkan 7 hari sebelum program dimulai. Lihat FAQ lengkap di website kami.",
      "Pertanyaan yang sering diajukan: 1) 'Apakah saya bisa ikut kursus sambil bekerja?' - Ya, tersedia program part-time dan weekend, 2) 'Apakah program online sama efektifnya dengan offline?' - Ya, materi dan mentor sama, dengan tingkat keberhasilan setara, 3) 'Bagaimana jika saya tertinggal?' - Tersedia sesi catch-up dan rekaman kelas. Lihat FAQ lainnya di teralab.id/faq."
    ]
  },
  {
    keywords: ["community", "komunitas", "network", "jaringan", "forum", "grup", "group"],
    responses: [
      "TeraLab memiliki komunitas alumni dan siswa yang aktif dengan lebih dari 5.000 anggota. Komunitas ini berbagi pengetahuan, networking, dan info lowongan kerja melalui forum online, grup Telegram/WhatsApp, dan meet-up reguler. Sebagai siswa TeraLab, Anda otomatis bergabung dengan komunitas ini dan mendapat akses ke resources eksklusif.",
      "Komunitas TeraLab sangat aktif dengan berbagai kegiatan seperti webinar mingguan, tech talk, project collaboration, dan career event. Kami memiliki channel Slack khusus, grup Discord, dan pertemuan offline regular di berbagai kota. Komunitas ini menjadi salah satu nilai tambah besar bagi siswa dan alumni TeraLab.",
      "Jaringan TeraLab terdiri dari siswa, alumni, mentor, dan profesional industri yang saling terhubung. Komunitas ini menjadi tempat berbagi pengetahuan, pengalaman, dan peluang karir. Kami mengadakan community event reguler seperti tech meetup, hackathon, dan career fair yang membuka peluang networking lebih luas."
    ]
  }
];

// Fungsi utilitas untuk preprocessing text
const preprocessText = (text) => {
  return text.toLowerCase()
    .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "")
    .trim();
};

// Fungsi untuk menghitung similarity sederhana (berbasis kata kunci)
const calculateSimilarity = (userInput, keywords) => {
  const processedInput = preprocessText(userInput);
  const inputWords = processedInput.split(" ");
  
  // Hitung berapa kata kunci yang muncul dalam input
  let matchCount = 0;
  for (const keyword of keywords) {
    if (processedInput.includes(keyword)) {
      matchCount++;
    }
  }
  
  // Untuk kata kunci majemuk (frasa)
  for (const keyword of keywords) {
    if (keyword.includes(" ") && processedInput.includes(keyword)) {
      // Beri bobot lebih untuk frasa yang cocok
      matchCount += 2;
    }
  }
  
  return matchCount;
};

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState(() => {
    // Load messages from localStorage on component mount
    const savedMessages = localStorage.getItem('teralab-chat-messages');
    return savedMessages ? JSON.parse(savedMessages) : [
      { text: "Halo! Selamat datang di TeraLab Asisten. Siap membantumu menemukan kursus terbaik yang sesuai dengan minat belajarmu.", sender: "bot" },
      { text: "Jadi, bidang apa yang ingin kamu pelajari?", sender: "bot" },
    ];
  });
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [context, setContext] = useState(() => {
    // Load context from localStorage
    const savedContext = localStorage.getItem('teralab-chat-context');
    return savedContext ? JSON.parse(savedContext) : {
      mentionedTopics: [],
      currentTopic: null,
      sentiment: 'neutral',
      lastQuestionType: null,
      isAboutTeralab: false
    };
  });

  // Save messages and context to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('teralab-chat-messages', JSON.stringify(messages));
    localStorage.setItem('teralab-chat-context', JSON.stringify(context));
  }, [messages, context]);

  // Clear chat history function
  const clearChatHistory = () => {
    const initialMessages = [
      { text: "Halo! Selamat datang di TeraLab Asisten. Siap membantumu menemukan kursus terbaik yang sesuai dengan minat belajarmu.", sender: "bot" },
      { text: "Jadi, bidang apa yang ingin kamu pelajari?", sender: "bot" },
    ];
    setMessages(initialMessages);
    setContext({
      mentionedTopics: [],
      currentTopic: null,
      sentiment: 'neutral',
      lastQuestionType: null,
      isAboutTeralab: false
    });
  };

  const toggleChatbot = () => {
    setIsOpen(!isOpen);
  };

  // Fungsi untuk menganalisis sentimen
  const analyzeSentiment = (text) => {
    const positiveWords = ['bagus', 'suka', 'senang', 'terima kasih', 'baik', 'hebat', 'excellent', 'awesome', 'mantap', 'keren'];
    const negativeWords = ['buruk', 'jelek', 'mahal', 'sulit', 'susah', 'kecewa', 'tidak suka', 'tidak bagus', 'lambat'];
    
    const processedText = preprocessText(text);
    
    let positiveScore = 0;
    let negativeScore = 0;
    
    positiveWords.forEach(word => {
      if (processedText.includes(word)) {
        positiveScore++;
      }
    });
    
    negativeWords.forEach(word => {
      if (processedText.includes(word)) {
        negativeScore++;
      }
    });
    
    if (positiveScore > negativeScore) return 'positive';
    if (negativeScore > positiveScore) return 'negative';
    return 'neutral';
  };

  // Fungsi untuk menganalisis konteks
  const updateContext = (userInput) => {
    const newContext = {...context};
    
    // Analisis sentimen
    newContext.sentiment = analyzeSentiment(userInput);
    
    // Deteksi topik
    const topics = {
      programming: ['javascript', 'python', 'java', 'coding', 'programming'],
      dataScience: ['data', 'science', 'analytics', 'machine learning', 'statistik'],
      design: ['ui', 'ux', 'design', 'figma', 'desain'],
      pricing: ['biaya', 'harga', 'cost', 'uang', 'bayar'],
      schedule: ['jadwal', 'durasi', 'waktu', 'schedule', 'kapan'],
      // Topik tambahan khusus tentang TeraLab
      registration: ['daftar', 'registrasi', 'mendaftar', 'bergabung', 'ikut', 'join', 'signup', 'sign up'],
      about: ['tentang', 'about', 'teralab', 'profile', 'profil', 'sejarah', 'history'],
      requirements: ['syarat', 'kriteria', 'persyaratan', 'requirement'],
      process: ['proses', 'alur', 'tahapan', 'step', 'langkah', 'cara', 'how to'],
      facilities: ['fasilitas', 'facility', 'dapat apa', 'benefit', 'manfaat', 'keuntungan'],
      payment: ['bayar', 'pembayaran', 'payment', 'cicil', 'angsuran', 'transfer'],
      alumni: ['alumni', 'lulusan', 'graduate', 'setelah lulus', 'success story'],
      contact: ['kontak', 'hubungi', 'tanya', 'email', 'telepon', 'whatsapp', 'contact']
    };
    
    const processedInput = preprocessText(userInput);
    
    let detectedTopic = null;
    let highestMatchCount = 0;
    
    // Deteksi kata kunci TeraLab dalam input
    const containsTeralab = processedInput.includes('teralab') || 
                           processedInput.includes('tera lab') || 
                           processedInput.includes('tera-lab');
    
    // Prioritaskan topik berdasarkan jumlah kata kunci yang cocok
    Object.entries(topics).forEach(([topic, keywords]) => {
      let matchCount = 0;
      
      keywords.forEach(keyword => {
        if (processedInput.includes(keyword)) {
          matchCount++;
          // Beri bobot lebih jika ada kata "teralab" dalam input dan keyword
          if (containsTeralab && (keyword.includes('teralab') || topic === 'about')) {
            matchCount += 2;
          }
        }
      });
      
      if (matchCount > 0 && matchCount > highestMatchCount) {
        highestMatchCount = matchCount;
        detectedTopic = topic;
        if (!newContext.mentionedTopics.includes(topic)) {
          newContext.mentionedTopics.push(topic);
        }
      }
    });
    
    if (detectedTopic) {
      newContext.currentTopic = detectedTopic;
    }
    
    // Deteksi pertanyaan spesifik tentang TeraLab
    if (containsTeralab) {
      newContext.isAboutTeralab = true;
    }
    
    // Deteksi tipe pertanyaan
    if (processedInput.includes('apa') || 
        processedInput.includes('apakah') || 
        processedInput.includes('what')) {
      newContext.lastQuestionType = 'what';
    } else if (processedInput.includes('bagaimana') || 
               processedInput.includes('how') ||
               processedInput.includes('cara')) {
      newContext.lastQuestionType = 'how';
    } else if (processedInput.includes('kenapa') || 
               processedInput.includes('mengapa') || 
               processedInput.includes('why')) {
      newContext.lastQuestionType = 'why';
    } else if (processedInput.includes('kapan') || 
               processedInput.includes('when')) {
      newContext.lastQuestionType = 'when';
    } else if (processedInput.includes('dimana') || 
               processedInput.includes('where') ||
               processedInput.includes('lokasi') ||
               processedInput.includes('location')) {
      newContext.lastQuestionType = 'where';
    } else if (processedInput.includes('siapa') ||
               processedInput.includes('who')) {
      newContext.lastQuestionType = 'who';
    }
    
    setContext(newContext);
    return newContext;
  };

  // Save context and generate response
  const handleSendMessage = async () => {
    if (input.trim() === "") return;

    // Add user message to chat
    const userMessage = { text: input, sender: "user" };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    
    // Show typing indicator
    setIsTyping(true);
    
    // Update context based on user input
    const updatedContext = updateContext(input);
    
    // Process the message with NLP and generate response (with a slight delay for realism)
    setTimeout(() => {
      const botResponse = generateResponse(input, updatedContext);
      setMessages((prev) => [...prev, { text: botResponse, sender: "bot" }]);
      setIsTyping(false);
      
      // Follow up question based on context if needed
      if (botResponse && !botResponse.includes("?") && Math.random() > 0.5) {
        setTimeout(() => {
          setIsTyping(true);
          setTimeout(() => {
            const followupQuestion = generateFollowupQuestion(updatedContext);
            if (followupQuestion) {
              setMessages((prev) => [...prev, { text: followupQuestion, sender: "bot" }]);
            }
            setIsTyping(false);
          }, 800);
        }, 1000);
      }
    }, 800);
  };
  
  // Fungsi NLP untuk menghasilkan respons dengan mempertimbangkan konteks
  const generateResponse = (userInput, context) => {
    // Default fallback responses berdasarkan sentiment
    const fallbackResponses = {
      positive: [
        "Senang melihat antusiasme Anda! Namun saya belum punya info spesifik tentang itu. Bagaimana dengan kursus lain yang kami tawarkan?",
        "Terima kasih atas pertanyaannya! Meskipun saya tidak punya jawaban pasti, saya bisa membantu Anda menemukan kursus yang tepat di TeraLab.",
        "Saya senang Anda tertarik! Meskipun saya tidak memiliki detail spesifik untuk itu, mari kita eksplorasi program TeraLab lainnya."
      ],
      neutral: [
        "Maaf, saya tidak mengerti pertanyaan Anda. Bisakah Anda menjelaskan dengan cara lain?",
        "Sepertinya saya belum memiliki informasi untuk pertanyaan itu. Bisa bertanya tentang kursus, biaya, atau program kami?",
        "Saya tidak yakin tentang itu. Mungkin Anda bisa bertanya tentang kursus, mentor, atau program karir kami?"
      ],
      negative: [
        "Saya minta maaf jika ada kesalahpahaman. Mari kita coba pendekatan berbeda. Apa yang sebenarnya Anda cari di TeraLab?",
        "Mohon maaf atas ketidaknyamanannya. Saya ingin membantu Anda mendapatkan informasi yang tepat. Bisa dijelaskan kembali?",
        "Maaf jika saya belum memberikan jawaban yang memuaskan. Mari kita bahas topik lain yang mungkin lebih sesuai dengan kebutuhan Anda."
      ],
      // Fallback spesifik untuk TeraLab
      teralab: [
        "TeraLab adalah platform edukasi teknologi yang fokus pada pembelajaran berbasis proyek dan mentoring oleh praktisi industri. Kami menawarkan kursus di bidang pemrograman, data science, AI, dan desain digital. Apa yang ingin Anda ketahui tentang TeraLab?",
        "TeraLab didirikan untuk memberikan pendidikan teknologi berkualitas tinggi yang langsung dapat diterapkan di dunia kerja. Kami menyediakan berbagai program mulai dari bootcamp intensif hingga kursus part-time. Ada yang spesifik tentang TeraLab yang ingin Anda tanyakan?",
        "TeraLab menyediakan pendidikan teknologi dengan kurikulum yang dikembangkan bersama praktisi industri. Program kami mencakup berbagai bidang teknologi dengan pendekatan hands-on project dan dukungan karir. Bagian mana dari TeraLab yang ingin Anda ketahui lebih lanjut?"
      ]
    };
    
    let bestMatch = null;
    let highestSimilarity = 0;
    
    // Deteksi apakah pertanyaan tentang TeraLab
    const processedInput = preprocessText(userInput);
    const containsTeralab = processedInput.includes('teralab') || 
                           processedInput.includes('tera lab') || 
                           processedInput.includes('tera-lab');
    
    // Deteksi pertanyaan tentang cara daftar/registrasi
    const isAboutRegistration = (
      (processedInput.includes('cara') || 
       processedInput.includes('bagaimana') || 
       processedInput.includes('gimana') || 
       processedInput.includes('how')) &&
      (processedInput.includes('daftar') || 
       processedInput.includes('registrasi') || 
       processedInput.includes('bergabung') || 
       processedInput.includes('join') ||
       processedInput.includes('ikut'))
    );
    
    // Cari kecocokan terbaik dari dataset
    for (const data of nlpDataset) {
      const similarity = calculateSimilarity(userInput, data.keywords);
      
      // Beri bobot lebih jika ada kesesuaian dengan konteks
      let contextBonus = 0;
      
      // Bonus untuk konteks topik
      if (context.currentTopic) {
        // Bonus untuk konteks yang relevan dengan topik
        if ((context.currentTopic === 'programming' && 
            (data.keywords.includes('pemrograman') || data.keywords.includes('coding') || 
             data.keywords.includes('javascript') || data.keywords.includes('python') || data.keywords.includes('java'))) ||
            (context.currentTopic === 'dataScience' && 
            (data.keywords.includes('data') || data.keywords.includes('machine learning') || 
             data.keywords.includes('ai') || data.keywords.includes('analytics'))) ||
            (context.currentTopic === 'design' && 
            (data.keywords.includes('ui') || data.keywords.includes('ux') || 
             data.keywords.includes('design'))) ||
            (context.currentTopic === 'pricing' && 
            (data.keywords.includes('biaya') || data.keywords.includes('harga'))) ||
            (context.currentTopic === 'schedule' && 
            (data.keywords.includes('jadwal') || data.keywords.includes('waktu')))) {
          contextBonus += 1;
        }
        
        // Bonus untuk konteks pendaftaran
        if ((context.currentTopic === 'registration' || isAboutRegistration) && 
            (data.keywords.includes('daftar') || data.keywords.includes('registrasi') || 
             data.keywords.includes('bergabung'))) {
          contextBonus += 3;  // Prioritas tinggi untuk pertanyaan pendaftaran
        }
        
        // Bonus untuk konteks tentang TeraLab
        if ((context.isAboutTeralab || containsTeralab) && 
            (data.keywords.includes('tentang') || data.keywords.includes('about') || 
             data.keywords.includes('teralab'))) {
          contextBonus += 2;
        }
        
        // Bonus untuk pertanyaan proses atau cara
        if (context.lastQuestionType === 'how' && 
            (data.keywords.includes('cara') || data.keywords.includes('proses') || 
             data.keywords.includes('langkah'))) {
          contextBonus += 2;
        }
      }
      
      // Bonus tambahan untuk keyword "daftar"/"registrasi" jika ada pertanyaan cara/bagaimana
      if (isAboutRegistration && 
          (data.keywords.includes('daftar') || data.keywords.includes('registrasi') || 
           data.keywords.includes('bergabung'))) {
        contextBonus += 3;
      }
      
      const totalSimilarity = similarity + contextBonus;
      
      if (totalSimilarity > highestSimilarity) {
        highestSimilarity = totalSimilarity;
        bestMatch = data;
      }
    }
    
    // Threshold minimum untuk kecocokan
    const similarityThreshold = 1;
    
    if (bestMatch && highestSimilarity >= similarityThreshold) {
      // Pilih respons acak dari kategori yang cocok
      const randomIndex = Math.floor(Math.random() * bestMatch.responses.length);
      return bestMatch.responses[randomIndex];
    } else {
      // Jika tidak ada kecocokan yang signifikan, gunakan respons fallback berdasarkan sentiment
      let sentiment = context.sentiment || 'neutral';
      
      // Gunakan fallback khusus TeraLab jika pertanyaan tentang TeraLab
      if (containsTeralab || context.isAboutTeralab) {
        sentiment = 'teralab';
      }
      
      const responses = fallbackResponses[sentiment];
      const randomIndex = Math.floor(Math.random() * responses.length);
      return responses[randomIndex];
    }
  };
  
  // Fungsi untuk membuat pertanyaan lanjutan berdasarkan konteks
  const generateFollowupQuestion = (context) => {
    if (!context) return null;
    
    // Pertanyaan follow-up berdasarkan topik yang sedang dibahas
    if (context.currentTopic === 'programming') {
      const questions = [
        "Apakah Anda lebih tertarik dengan pengembangan frontend atau backend?",
        "Apakah Anda sudah memiliki pengalaman coding sebelumnya?",
        "Bahasa pemrograman apa yang paling Anda minati?"
      ];
      return questions[Math.floor(Math.random() * questions.length)];
    } else if (context.currentTopic === 'dataScience') {
      const questions = [
        "Apakah Anda sudah familiar dengan konsep statistik dan analisis data?",
        "Apakah Anda lebih tertarik dengan machine learning atau data visualization?",
        "Sudah pernah menggunakan Python atau R untuk analisis data?"
      ];
      return questions[Math.floor(Math.random() * questions.length)];
    } else if (context.currentTopic === 'design') {
      const questions = [
        "Apakah Anda lebih fokus pada UI design atau UX research?",
        "Sudah pernah menggunakan tools seperti Figma atau Adobe XD?",
        "Apakah Anda tertarik dengan design thinking dan user research?"
      ];
      return questions[Math.floor(Math.random() * questions.length)];
    } else if (context.currentTopic === 'pricing') {
      const questions = [
        "Apakah Anda mencari opsi pembayaran cicilan?",
        "Apakah Anda tertarik dengan program beasiswa kami?",
        "Budget pembelajaran Anda sekitar berapa untuk kursus ini?"
      ];
      return questions[Math.floor(Math.random() * questions.length)];
    } else if (context.currentTopic === 'schedule') {
      const questions = [
        "Apakah Anda mencari kursus full-time atau part-time?",
        "Kapan Anda berencana untuk memulai belajar?",
        "Berapa jam per minggu yang dapat Anda dedikasikan untuk belajar?"
      ];
      return questions[Math.floor(Math.random() * questions.length)];
    } 
    // Pertanyaan untuk topik tambahan tentang TeraLab
    else if (context.currentTopic === 'registration') {
      const questions = [
        "Kursus atau program apa yang ingin Anda ikuti di TeraLab?",
        "Apakah Anda lebih tertarik dengan program online atau offline?",
        "Kapan Anda berencana untuk memulai kursus di TeraLab?",
        "Sudah melihat halaman pendaftaran di website kami?"
      ];
      return questions[Math.floor(Math.random() * questions.length)];
    } else if (context.currentTopic === 'about') {
      const questions = [
        "Apakah ada informasi spesifik tentang TeraLab yang ingin Anda ketahui?",
        "Apakah Anda tertarik dengan sejarah atau visi misi TeraLab?",
        "Bagaimana Anda mengetahui tentang TeraLab sebelumnya?"
      ];
      return questions[Math.floor(Math.random() * questions.length)];
    } else if (context.currentTopic === 'requirements') {
      const questions = [
        "Kursus atau program apa yang Anda minati di TeraLab?",
        "Apakah Anda sudah memiliki pengalaman sebelumnya di bidang teknologi?",
        "Sudah memiliki perangkat yang memenuhi syarat minimum untuk belajar?"
      ];
      return questions[Math.floor(Math.random() * questions.length)];
    } else if (context.currentTopic === 'process') {
      const questions = [
        "Apakah Anda membutuhkan informasi lebih detail tentang proses pembelajaran di TeraLab?",
        "Metode belajar apa yang lebih Anda minati: online, offline, atau hybrid?",
        "Apakah Anda ingin tahu lebih detail tentang tahapan belajar di TeraLab?"
      ];
      return questions[Math.floor(Math.random() * questions.length)];
    } else if (context.currentTopic === 'facilities') {
      const questions = [
        "Fasilitas apa yang paling Anda prioritaskan dalam memilih lembaga pembelajaran?",
        "Apakah Anda tertarik dengan program mentoring one-on-one yang kami tawarkan?",
        "Apakah Anda ingin tahu lebih detail tentang program career support kami?"
      ];
      return questions[Math.floor(Math.random() * questions.length)];
    } else if (context.currentTopic === 'payment') {
      const questions = [
        "Apakah Anda mencari opsi pembayaran cicilan tanpa kartu kredit?",
        "Apakah Anda tertarik dengan program beasiswa yang kami tawarkan?",
        "Metode pembayaran apa yang paling nyaman untuk Anda?"
      ];
      return questions[Math.floor(Math.random() * questions.length)];
    } else if (context.currentTopic === 'alumni') {
      const questions = [
        "Apakah Anda ingin mendengar testimonial dari alumni kami?",
        "Anda tertarik dengan karir di bidang apa setelah lulus nanti?",
        "Apakah Anda ingin tahu tentang kesuksesan alumni kami di perusahaan tertentu?"
      ];
      return questions[Math.floor(Math.random() * questions.length)];
    } else if (context.currentTopic === 'contact') {
      const questions = [
        "Ada hal spesifik yang ingin Anda tanyakan kepada tim kami?",
        "Apakah Anda ingin kami menghubungi Anda untuk konsultasi gratis?",
        "Metode kontak apa yang paling nyaman untuk Anda? WhatsApp, email, atau telepon?"
      ];
      return questions[Math.floor(Math.random() * questions.length)];
    } else if (context.isAboutTeralab) {
      // Pertanyaan lanjutan khusus tentang TeraLab
      const questions = [
        "Ada informasi spesifik apa tentang TeraLab yang ingin Anda ketahui lebih lanjut?",
        "Apakah Anda tertarik untuk mengetahui program apa saja yang tersedia di TeraLab?",
        "Apakah Anda ingin tahu lebih detail tentang cara mendaftar di TeraLab?",
        "Bidang teknologi apa yang paling Anda minati untuk dipelajari di TeraLab?"
      ];
      return questions[Math.floor(Math.random() * questions.length)];
    } else if (context.mentionedTopics.length > 0) {
      // Jika tidak ada topik saat ini, tapi ada topik yang pernah dibahas
      return "Ada hal lain yang ingin Anda ketahui tentang program di TeraLab?";
    } else {
      // Default follow-up questions
      const questions = [
        "Bidang teknologi apa yang paling Anda minati?",
        "Apakah Anda mencari kursus untuk pengembangan karir atau hobi?",
        "Apa tujuan utama Anda dalam mengikuti kursus di TeraLab?",
        "Apakah Anda ingin mengetahui lebih lanjut tentang TeraLab dan program-programnya?"
      ];
      return questions[Math.floor(Math.random() * questions.length)];
    }
  };

  // Auto scroll ke pesan terbaru
  const messagesEndRef = useRef(null);
  
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Fungsi untuk menangani input keyboard
  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="chatbot-container">
      {/* Chatbot Icon */}
      <button className="chatbot-toggle" onClick={toggleChatbot}>
        💬
      </button>

      {/* Chatbot Popup */}
      {isOpen && (
        <div className="chatbot-popup">
          <div className="chatbot-header">
            <h3>TeraLab Asisten</h3>
            <div className="chatbot-controls">
              <button className="chatbot-clear" title="Hapus History" onClick={clearChatHistory}>
                🗑️
              </button>
              <button className="chatbot-close" onClick={toggleChatbot}>
                ✖
              </button>
            </div>
          </div>
          <div className="chatbot-body">
            {messages.map((message, index) => (
              <div key={index} className={`chatbot-message ${message.sender}`}>
                {message.text}
              </div>
            ))}
            {isTyping && (
              <div className="chatbot-message bot typing">
                <div className="typing-indicator">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
          <div className="chatbot-footer">
            <input
              type="text"
              placeholder="Tulis pesan..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              disabled={isTyping}
            />
            <button onClick={handleSendMessage} disabled={isTyping || input.trim() === ""}>
              {isTyping ? "..." : "➤"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

// Fungsi untuk analisis input yang lebih kompleks (dapat dikembangkan lebih lanjut)
const analyzeIntent = (input) => {
  // Implementasi sederhana entity recognition
  const entities = {
    courses: ["javascript", "python", "java", "react", "node", "machine learning", "data science"],
    prices: ["harga", "biaya", "bayar", "rupiah", "rp", "idr", "uang"],
    duration: ["durasi", "lama", "bulan", "minggu", "jam"]
  };
  
  const processedInput = preprocessText(input);
  const result = { intent: "general", entities: [] };
  
  // Cek entities
  Object.entries(entities).forEach(([type, keywords]) => {
    keywords.forEach(keyword => {
      if (processedInput.includes(keyword)) {
        result.entities.push({ type, value: keyword });
      }
    });
  });
  
  return result;
};

export default Chatbot;
