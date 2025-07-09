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
      lastQuestionType: null
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
      lastQuestionType: null
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
      schedule: ['jadwal', 'durasi', 'waktu', 'schedule', 'kapan']
    };
    
    const processedInput = preprocessText(userInput);
    
    let detectedTopic = null;
    
    Object.entries(topics).forEach(([topic, keywords]) => {
      keywords.forEach(keyword => {
        if (processedInput.includes(keyword)) {
          detectedTopic = topic;
          if (!newContext.mentionedTopics.includes(topic)) {
            newContext.mentionedTopics.push(topic);
          }
        }
      });
    });
    
    if (detectedTopic) {
      newContext.currentTopic = detectedTopic;
    }
    
    // Deteksi tipe pertanyaan
    if (processedInput.includes('apa') || 
        processedInput.includes('apakah') || 
        processedInput.includes('what')) {
      newContext.lastQuestionType = 'what';
    } else if (processedInput.includes('bagaimana') || 
               processedInput.includes('how')) {
      newContext.lastQuestionType = 'how';
    } else if (processedInput.includes('kenapa') || 
               processedInput.includes('mengapa') || 
               processedInput.includes('why')) {
      newContext.lastQuestionType = 'why';
    } else if (processedInput.includes('kapan') || 
               processedInput.includes('when')) {
      newContext.lastQuestionType = 'when';
    } else if (processedInput.includes('dimana') || 
               processedInput.includes('where')) {
      newContext.lastQuestionType = 'where';
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
      ]
    };
    
    let bestMatch = null;
    let highestSimilarity = 0;
    
    // Cari kecocokan terbaik dari dataset
    for (const data of nlpDataset) {
      const similarity = calculateSimilarity(userInput, data.keywords);
      
      // Beri bobot lebih jika ada kesesuaian dengan konteks
      let contextBonus = 0;
      if (context.currentTopic) {
        if (context.currentTopic === 'programming' && 
            (data.keywords.includes('pemrograman') || data.keywords.includes('coding') || 
             data.keywords.includes('javascript') || data.keywords.includes('python') || data.keywords.includes('java'))) {
          contextBonus += 1;
        } else if (context.currentTopic === 'dataScience' && 
                  (data.keywords.includes('data') || data.keywords.includes('machine learning') || 
                   data.keywords.includes('ai') || data.keywords.includes('analytics'))) {
          contextBonus += 1;
        } else if (context.currentTopic === 'design' && 
                  (data.keywords.includes('ui') || data.keywords.includes('ux') || 
                   data.keywords.includes('design'))) {
          contextBonus += 1;
        } else if (context.currentTopic === 'pricing' && 
                  (data.keywords.includes('biaya') || data.keywords.includes('harga'))) {
          contextBonus += 1;
        } else if (context.currentTopic === 'schedule' && 
                  (data.keywords.includes('jadwal') || data.keywords.includes('waktu'))) {
          contextBonus += 1;
        }
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
      const sentiment = context.sentiment || 'neutral';
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
    } else if (context.mentionedTopics.length > 0) {
      // Jika tidak ada topik saat ini, tapi ada topik yang pernah dibahas
      return "Ada hal lain yang ingin Anda ketahui tentang program di TeraLab?";
    } else {
      // Default follow-up questions
      const questions = [
        "Bidang teknologi apa yang paling Anda minati?",
        "Apakah Anda mencari kursus untuk pengembangan karir atau hobi?",
        "Apa tujuan utama Anda dalam mengikuti kursus di TeraLab?",
        "Ada pertanyaan lain yang ingin Anda tanyakan tentang TeraLab?"
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
