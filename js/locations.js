// =============================================
// TÜRKİYE İL / İLÇE / MAHALLE VERİLERİ
// =============================================
// Yeni mahalle eklemek için ilgili ilçenin dizisine ekleme yapın.
// =============================================

const turkeyLocations = {
    "Adana": {
        "Seyhan": ["Reşatbey Mah.", "Kurtuluş Mah.", "Denizli Mah.", "Gürselpaşa Mah.", "Ulucami Mah."],
        "Yüreğir": ["Kışla Mah.", "Köprülü Mah.", "Levent Mah."],
        "Çukurova": ["Beyazevler Mah.", "Güzelyalı Mah.", "Toros Mah."],
        "Sarıçam": ["Sofulu Mah.", "Sapanbağları Mah."],
        "Ceyhan": ["Büyükmangıt Mah.", "İnönü Mah."],
        "Kozan": ["Tufanpaşa Mah.", "Cumhuriyet Mah."]
    },
    "Adıyaman": {
        "Merkez": ["Altınşehir Mah.", "Bahçelievler Mah."],
        "Kahta": ["Yeni Mah.", "Cumhuriyet Mah."],
        "Besni": ["Atatürk Mah.", "Yeni Mah."]
    },
    "Afyonkarahisar": {
        "Merkez": ["Cumhuriyet Mah.", "Erenler Mah."],
        "Sandıklı": ["Hisarardı Mah."],
        "Bolvadin": ["Cumhuriyet Mah."]
    },
    "Ağrı": {
        "Merkez": ["Cumhuriyet Mah.", "Yeni Mah."],
        "Doğubayazıt": ["Emniyet Mah."],
        "Patnos": ["Cumhuriyet Mah."]
    },
    "Aksaray": {
        "Merkez": ["Zafer Mah.", "Nevi Mah."],
        "Sultanhanı": ["Selime Mah."]
    },
    "Amasya": {
        "Merkez": ["Dere Mah.", "Helkıs Mah."],
        "Merzifon": ["Sofular Mah."]
    },
    "Ankara": {
        "Çankaya": ["Kızılay Mah.", "Bahçelievler Mah.", "Ayrancı Mah.", "Çayyolu Mah.", "Ümitköy Mah.", "Dikmen Mah.", "Balgat Mah.", "Emek Mah.", "Cevizlidere Mah."],
        "Keçiören": ["Etlik Mah.", "Ovacık Mah.", "Kuşcağız Mah.", "Bağlum Mah.", "Kalaba Mah."],
        "Mamak": ["Abidinpaşa Mah.", "Şahintepe Mah.", "Boğaziçi Mah."],
        "Yenimahalle": ["Batıkent Mah.", "Demetevler Mah.", "Ostim Mah.", "Macunköy Mah."],
        "Etimesgut": ["Eryaman Mah.", "Elvankent Mah.", "Bağlıca Mah."],
        "Sincan": ["Fatih Mah.", "Tandoğan Mah.", "Osmaniye Mah."],
        "Altındağ": ["Ulus Mah.", "Hamamönü Mah.", "Samanpazarı Mah."],
        "Pursaklar": ["Merkez Mah.", "Saray Mah."],
        "Gölbaşı": ["Şehit Cevdet Özdemir Mah.", "İncek Mah."],
        "Polatlı": ["Zafer Mah.", "Cumhuriyet Mah."]
    },
    "Antalya": {
        "Muratpaşa": ["Lara Mah.", "Konyaaltı Mah.", "Şirinyalı Mah.", "Güzeloba Mah.", "Fener Mah."],
        "Konyaaltı": ["Liman Mah.", "Hurma Mah.", "Sarısu Mah.", "Uncalı Mah."],
        "Kepez": ["Şafak Mah.", "Varsak Mah.", "Santral Mah."],
        "Aksu": ["Kumköy Mah.", "Altıntaş Mah."],
        "Alanya": ["Saray Mah.", "Oba Mah.", "Tosmur Mah.", "Kestel Mah."],
        "Manavgat": ["Yukarı Mah.", "Side Mah."],
        "Kaş": ["Andifli Mah.", "Çukurbağ Mah."],
        "Kemer": ["Merkez Mah.", "Arslanbucak Mah."]
    },
    "Ardahan": {
        "Merkez": ["Karagöl Mah.", "İnönü Mah."],
        "Göle": ["Cumhuriyet Mah."]
    },
    "Artvin": {
        "Merkez": ["Çarşı Mah.", "Balcıoğlu Mah."],
        "Hopa": ["Sundura Mah."]
    },
    "Aydın": {
        "Efeler": ["Cumhuriyet Mah.", "Güzelhisar Mah.", "Meşrutiyet Mah."],
        "Nazilli": ["Zafer Mah.", "Yıldıztepe Mah."],
        "Kuşadası": ["Türkmen Mah.", "Camiatik Mah."],
        "Söke": ["Kemalpaşa Mah.", "Fevzipaşa Mah."]
    },
    "Balıkesir": {
        "Altıeylül": ["Bahçelievler Mah.", "Atatürk Mah."],
        "Karesi": ["Eski Kuyumcular Mah.", "Hasan Basri Çantay Mah."],
        "Bandırma": ["Cumhuriyet Mah.", "600 Evler Mah."],
        "Edremit": ["Gazicelal Mah.", "Altınkum Mah."],
        "Ayvalık": ["Sakarya Mah.", "Fevzipaşa Mah."]
    },
    "Bartın": {
        "Merkez": ["Kemerköprü Mah.", "Demirciler Mah."],
        "Amasra": ["Kum Mah."]
    },
    "Batman": {
        "Merkez": ["Yenimahalle", "Bahçelievler Mah."],
        "Kozluk": ["Cumhuriyet Mah."],
        "Sason": ["Yeni Mah."]
    },
    "Bayburt": {
        "Merkez": ["Tuzcuzade Mah.", "Şingah Mah."]
    },
    "Bilecik": {
        "Merkez": ["İstiklal Mah.", "Bahçelievler Mah."],
        "Bolu": ["Tabaklar Mah."],
        "Söğüt": ["Cumhuriyet Mah."]
    },
    "Bingöl": {
        "Merkez": ["Kültür Mah.", "Saray Mah."],
        "Genç": ["Yeni Mah."]
    },
    "Bitlis": {
        "Merkez": ["Hüsrevpaşa Mah.", "Taş Mah."],
        "Tatvan": ["Cumhuriyet Mah."],
        "Ahlat": ["Erkizan Mah."]
    },
    "Bolu": {
        "Merkez": ["Büyükcami Mah.", "Tabaklar Mah.", "İzzet Baysal Mah."],
        "Mudurnu": ["Çarşı Mah."],
        "Göynük": ["Çarşı Mah."]
    },
    "Burdur": {
        "Merkez": ["Bahçelievler Mah.", "Özgür Mah."],
        "Bucak": ["Cumhuriyet Mah."]
    },
    "Bursa": {
        "Osmangazi": ["Heykel Mah.", "Çekirge Mah.", "Kükürtlü Mah.", "Demirtaş Mah."],
        "Nilüfer": ["Beşevler Mah.", "FSM Mah.", "Görükle Mah.", "İhsaniye Mah.", "Özlüce Mah."],
        "Yıldırım": ["Erikli Mah.", "Millet Mah.", "Namazgah Mah."],
        "Mudanya": ["İstiklal Mah.", "Ömerbey Mah."],
        "Gemlik": ["Hamidiye Mah.", "Dr. Ziya Kaya Mah."],
        "İnegöl": ["Kemalpaşa Mah.", "Sinanbey Mah."],
        "Gürsu": ["Zafer Mah."]
    },
    "Çanakkale": {
        "Merkez": ["Cevatpaşa Mah.", "Esenler Mah."],
        "Biga": ["İstiklal Mah."],
        "Çan": ["Cumhuriyet Mah."],
        "Gelibolu": ["Yazıcızade Mah."]
    },
    "Çankırı": {
        "Merkez": ["Cumhuriyet Mah.", "Buğday Pazarı Mah."]
    },
    "Çorum": {
        "Merkez": ["Bahçelievler Mah.", "Gazi Mah.", "Üçtutlar Mah."],
        "Sungurlu": ["Sunguroğlu Mah."],
        "Osmancık": ["Koyunbaba Mah."]
    },
    "Denizli": {
        "Merkezefendi": ["Altıntop Mah.", "Sümer Mah.", "Sevindik Mah."],
        "Pamukkale": ["Akkonak Mah.", "Cankurtaran Mah.", "Cumhuriyet Mah."],
        "Çivril": ["İstiklal Mah."]
    },
    "Diyarbakır": {
        "Bağlar": ["Bağcılar Mah.", "Cumhuriyet Mah."],
        "Kayapınar": ["Barış Mah.", "Peyas Mah.", "Huzurevleri Mah."],
        "Yenişehir": ["Ofis Mah.", "Şehitlik Mah."],
        "Sur": ["Melikahmet Mah.", "Cevatpaşa Mah."],
        "Ergani": ["Cumhuriyet Mah."]
    },
    "Düzce": {
        "Merkez": ["Cedidiye Mah.", "Aziziye Mah.", "Azmimilli Mah."],
        "Akçakoca": ["Cumhuriyet Mah."]
    },
    "Edirne": {
        "Merkez": ["Sabuni Mah.", "Yıldırım Mah.", "Meydan Mah."],
        "Keşan": ["Cumhuriyet Mah."],
        "Uzunköprü": ["Muradiye Mah."]
    },
    "Elazığ": {
        "Merkez": ["Sürsürü Mah.", "Aksaray Mah.", "Ataşehir Mah."],
        "Kovancılar": ["Cumhuriyet Mah."]
    },
    "Erzincan": {
        "Merkez": ["Bahçelievler Mah.", "İnönü Mah."],
        "Üzümlü": ["Cumhuriyet Mah."]
    },
    "Erzurum": {
        "Yakutiye": ["Lalapaşa Mah.", "Muratpaşa Mah.", "Cumhuriyet Mah."],
        "Palandöken": ["Yenişehir Mah.", "Yıldızkent Mah."],
        "Aziziye": ["Gezköy Mah."],
        "Oltu": ["Cumhuriyet Mah."],
        "Horasan": ["Yeni Mah."]
    },
    "Eskişehir": {
        "Odunpazarı": ["Büyükdere Mah.", "Akarbaşı Mah.", "71 Evler Mah.", "Batıkent Mah."],
        "Tepebaşı": ["Hoşnudiye Mah.", "Şirintepe Mah.", "Emek Mah.", "Çamlıca Mah."],
        "Sivrihisar": ["Cumhuriyet Mah."]
    },
    "Gaziantep": {
        "Şahinbey": ["Kolejtepe Mah.", "Bey Mah.", "Mücahitler Mah.", "İbrahimli Mah."],
        "Şehitkamil": ["İncilipınar Mah.", "Karataş Mah.", "Güvenevler Mah."],
        "Nizip": ["Cumhuriyet Mah."],
        "İslahiye": ["Fevzipaşa Mah."]
    },
    "Giresun": {
        "Merkez": ["Çıtlakkale Mah.", "Teyyaredüzü Mah."],
        "Bulancak": ["Eski Mah."]
    },
    "Gümüşhane": {
        "Merkez": ["Bağlarbaşı Mah.", "Cumhuriyet Mah."]
    },
    "Hakkari": {
        "Merkez": ["Bağlar Mah.", "Keklikpınar Mah."],
        "Yüksekova": ["Cumhuriyet Mah."]
    },
    "Hatay": {
        "Antakya": ["Haraparası Mah.", "Saray Mah.", "Cumhuriyet Mah."],
        "İskenderun": ["Çay Mah.", "Barbaros Mah."],
        "Defne": ["Sümerler Mah.", "Dursunlu Mah."],
        "Dörtyol": ["Yeşilköy Mah."]
    },
    "Iğdır": {
        "Merkez": ["Topçular Mah.", "Baharlı Mah."],
        "Tuzluca": ["Cumhuriyet Mah."]
    },
    "Isparta": {
        "Merkez": ["Pirimehmet Mah.", "Bahçelievler Mah.", "Modernevler Mah."],
        "Eğirdir": ["Yazla Mah."]
    },
    "İstanbul": {
        "Kadıköy": ["Caferağa Mah.", "Fenerbahçe Mah.", "Moda Mah.", "Osmanağa Mah.", "Acıbadem Mah.", "Koşuyolu Mah.", "Göztepe Mah.", "Bostancı Mah."],
        "Beşiktaş": ["Levent Mah.", "Etiler Mah.", "Bebek Mah.", "Ortaköy Mah.", "Sinanpaşa Mah."],
        "Şişli": ["Mecidiyeköy Mah.", "Nişantaşı Mah.", "Bomonti Mah.", "Esentepe Mah.", "Fulya Mah."],
        "Beyoğlu": ["Cihangir Mah.", "Galata Mah.", "Taksim Mah.", "Asmalımescit Mah."],
        "Fatih": ["Sultanahmet Mah.", "Laleli Mah.", "Aksaray Mah.", "Vatan Mah.", "Çapa Mah."],
        "Üsküdar": ["Çengelköy Mah.", "Kuzguncuk Mah.", "Beylerbeyi Mah.", "Ünalan Mah.", "Altunizade Mah."],
        "Bakırköy": ["Florya Mah.", "Yeşilköy Mah.", "Ataköy Mah.", "Zuhuratbaba Mah."],
        "Ataşehir": ["İçerenköy Mah.", "Küçükbakkalköy Mah.", "Ataşehir Mah.", "Yeni Çamlıca Mah."],
        "Maltepe": ["Altıntepe Mah.", "Cevizli Mah.", "Bağlarbaşı Mah.", "Küçükyalı Mah."],
        "Kartal": ["Kordonboyu Mah.", "Yakacık Mah.", "Soğanlık Mah."],
        "Pendik": ["Kaynarca Mah.", "Yenişehir Mah.", "Esenyalı Mah.", "Kurtköy Mah."],
        "Tuzla": ["Postane Mah.", "Mimar Sinan Mah.", "Aydınlı Mah."],
        "Sarıyer": ["Maslak Mah.", "İstinye Mah.", "Tarabya Mah.", "Emirgan Mah."],
        "Beylikdüzü": ["Adnan Kahveci Mah.", "Barış Mah.", "Yakuplu Mah."],
        "Esenyurt": ["Kıraç Mah.", "Fatih Mah.", "Ardıçlı Mah.", "Saadetdere Mah."],
        "Başakşehir": ["Başak Mah.", "Bahçeşehir Mah.", "Kayabaşı Mah."],
        "Avcılar": ["Cihangir Mah.", "Merkez Mah.", "Denizköşkler Mah."],
        "Küçükçekmece": ["Cennet Mah.", "Atakent Mah.", "Halkalı Mah."],
        "Bağcılar": ["Kirazlı Mah.", "Güneşli Mah.", "Mahmutbey Mah."],
        "Bahçelievler": ["Bahçelievler Mah.", "Soğanlı Mah.", "Şirinevler Mah."],
        "Sultangazi": ["50. Yıl Mah.", "Cebeci Mah."],
        "Gaziosmanpaşa": ["Merkez Mah.", "Karlıtepe Mah."],
        "Eyüpsultan": ["Göktürk Mah.", "Kemerburgaz Mah.", "İslambey Mah."],
        "Kağıthane": ["Çağlayan Mah.", "Seyrantepe Mah.", "Hamidiye Mah."],
        "Zeytinburnu": ["Kazlıçeşme Mah.", "Beştelsiz Mah."],
        "Güngören": ["Merkez Mah.", "Tozkoparan Mah."],
        "Esenler": ["Oruçreis Mah.", "Menderes Mah."],
        "Bayrampaşa": ["Yıldırım Mah.", "İsmetpaşa Mah."],
        "Arnavutköy": ["Anadolu Mah.", "Hadımköy Mah."],
        "Çatalca": ["Kaleiçi Mah.", "Ferhatpaşa Mah."],
        "Silivri": ["Piri Mehmet Paşa Mah.", "Alibey Mah."],
        "Büyükçekmece": ["Cumhuriyet Mah.", "Mimaroba Mah."],
        "Çekmeköy": ["Mehmet Akif Mah.", "Merkez Mah."],
        "Sancaktepe": ["Sarıgazi Mah.", "Yenidoğan Mah."],
        "Sultanbeyli": ["Battalgazi Mah.", "Fatih Mah."],
        "Ümraniye": ["Atatürk Mah.", "İstiklal Mah.", "Çakmak Mah.", "Hekimbaşı Mah."],
        "Beykoz": ["Çubuklu Mah.", "Anadoluhisarı Mah.", "Kavacık Mah."],
        "Adalar": ["Büyükada Mah.", "Heybeliada Mah.", "Burgazada Mah."]
    },
    "İzmir": {
        "Konak": ["Alsancak Mah.", "Basmane Mah.", "Güzelyalı Mah.", "Göztepe Mah."],
        "Karşıyaka": ["Bostanlı Mah.", "Çarşı Mah.", "Mavişehir Mah.", "Nergiz Mah."],
        "Bornova": ["Erzene Mah.", "Kazımdirik Mah.", "Evka-3 Mah.", "Doğanlar Mah."],
        "Buca": ["Şirinyer Mah.", "Kuruçeşme Mah.", "Çamlıkule Mah."],
        "Bayraklı": ["Bayraklı Mah.", "Manavkuyu Mah.", "Adalet Mah."],
        "Çiğli": ["Ataşehir Mah.", "Evka-5 Mah."],
        "Gaziemir": ["Atıfbey Mah.", "Gazi Mah."],
        "Narlıdere": ["Çatalkaya Mah.", "Huzur Mah."],
        "Balçova": ["Bahçelerarası Mah.", "Onur Mah."],
        "Karabağlar": ["Cennetçeşme Mah.", "Günaltay Mah.", "Limontepe Mah."],
        "Torbalı": ["Ayrancılar Mah.", "Tepeköy Mah."],
        "Menemen": ["Kasımpaşa Mah.", "Seyrek Mah."],
        "Kemalpaşa": ["Mehmet Akif Ersoy Mah."],
        "Bergama": ["Zafer Mah.", "Cumhuriyet Mah."],
        "Çeşme": ["Cumhuriyet Mah.", "Dalyan Mah."],
        "Seferihisar": ["Sığacık Mah.", "Camikebir Mah."],
        "Urla": ["İskele Mah.", "Zeytinalanı Mah."],
        "Aliağa": ["Cumhuriyet Mah.", "Atatürk Mah."]
    },
    "Kahramanmaraş": {
        "Onikişubat": ["İsmetpaşa Mah.", "Hacı Bayram Veli Mah.", "Yörükselim Mah."],
        "Dulkadiroğlu": ["Şazibey Mah.", "Namık Kemal Mah."],
        "Elbistan": ["Cumhuriyet Mah."],
        "Türkoğlu": ["Beyoğlu Mah."]
    },
    "Karabük": {
        "Merkez": ["Bayır Mah.", "Hürriyet Mah."],
        "Safranbolu": ["Çeşme Mah.", "Bağlarbaşı Mah."]
    },
    "Karaman": {
        "Merkez": ["İsmetpaşa Mah.", "Tahsin Ünal Mah."],
        "Ermenek": ["Cumhuriyet Mah."]
    },
    "Kars": {
        "Merkez": ["Cumhuriyet Mah.", "Yenişehir Mah."],
        "Sarıkamış": ["Alparslan Mah."]
    },
    "Kastamonu": {
        "Merkez": ["Kuzeykent Mah.", "İsfendiyar Mah."],
        "Tosya": ["Dilküşah Mah."]
    },
    "Kayseri": {
        "Melikgazi": ["Kılıçarslan Mah.", "Esentepe Mah.", "Hunat Mah.", "Battalgazi Mah."],
        "Kocasinan": ["Yenidoğan Mah.", "Erkilet Mah.", "Mithatpaşa Mah."],
        "Talas": ["Mevlana Mah.", "Harman Mah."],
        "Develi": ["Cumhuriyet Mah."],
        "İncesu": ["Hürriyet Mah."]
    },
    "Kırıkkale": {
        "Merkez": ["Fabrikalar Mah.", "Güzeltepe Mah.", "Ovacık Mah."]
    },
    "Kırklareli": {
        "Merkez": ["Karacaibrahim Mah.", "Yayla Mah."],
        "Lüleburgaz": ["Cumhuriyet Mah."]
    },
    "Kırşehir": {
        "Merkez": ["Medrese Mah.", "Aşıkpaşa Mah."]
    },
    "Kilis": {
        "Merkez": ["Şıh Mah.", "Cami-i Kebir Mah."]
    },
    "Kocaeli": {
        "İzmit": ["Yahyakaptan Mah.", "Yenişehir Mah.", "Kemalpaşa Mah.", "Kozluk Mah."],
        "Gebze": ["Sultan Orhan Mah.", "Güzeller Mah.", "Osman Yılmaz Mah."],
        "Darıca": ["Osmangazi Mah.", "Nene Hatun Mah."],
        "Çayırova": ["Şekerpınar Mah.", "Emek Mah."],
        "Derince": ["Çenedağ Mah.", "Sırrıpaşa Mah."],
        "Gölcük": ["İhsaniye Mah."],
        "Körfez": ["Yarımca Mah."],
        "Kartepe": ["Uzunçiftlik Mah.", "Köseköy Mah."],
        "Başiskele": ["Yeniköy Mah."]
    },
    "Konya": {
        "Selçuklu": ["Bosna Hersek Mah.", "Yazır Mah.", "Sille Mah.", "Musalla Bağları Mah."],
        "Meram": ["Yeniyol Mah.", "Karadiğin Mah.", "Havzan Mah."],
        "Karatay": ["Fevzi Çakmak Mah.", "Akçeşme Mah.", "Aziziye Mah."],
        "Ereğli": ["Barbaros Mah.", "Cumhuriyet Mah."],
        "Akşehir": ["Altınekin Mah."]
    },
    "Kütahya": {
        "Merkez": ["Alipaşa Mah.", "Lala Hüseyin Paşa Mah."],
        "Tavşanlı": ["Cumhuriyet Mah."]
    },
    "Malatya": {
        "Battalgazi": ["Çöşnük Mah.", "Uçbağlar Mah.", "İskender Mah."],
        "Yeşilyurt": ["Çilesiz Mah.", "Topsöğüt Mah.", "İnönü Mah."],
        "Doğanşehir": ["Cumhuriyet Mah."],
        "Akçadağ": ["Kılıçdere Mah."]
    },
    "Manisa": {
        "Şehzadeler": ["Ankara Mah.", "Lalapaşa Mah.", "Atatürk Mah."],
        "Yunusemre": ["Laleli Mah.", "Uncubozköy Mah."],
        "Akhisar": ["Atatürk Mah.", "Cumhuriyet Mah."],
        "Turgutlu": ["Cumhuriyet Mah.", "Atatürk Mah."],
        "Salihli": ["Cumhuriyet Mah."]
    },
    "Mardin": {
        "Artuklu": ["Cumhuriyet Mah.", "Nur Mah.", "Savurkapı Mah."],
        "Kızıltepe": ["Tepebaş Mah.", "21 Mart Mah."],
        "Midyat": ["Cumhuriyet Mah."],
        "Nusaybin": ["Mızraklı Mah."]
    },
    "Mersin": {
        "Yenişehir": ["Bahçelievler Mah.", "Çankaya Mah.", "Forum Mah.", "Limonluk Mah."],
        "Toroslar": ["Arpaçsakarlar Mah.", "Yalınayak Mah."],
        "Akdeniz": ["Nusratiye Mah.", "Çankaya Mah."],
        "Mezitli": ["Viranşehir Mah.", "Davultepe Mah.", "Kuyuluk Mah."],
        "Tarsus": ["Şehitmustafa Mah.", "Eski Ömerli Mah."],
        "Erdemli": ["Akdeniz Mah."],
        "Silifke": ["Saray Mah."]
    },
    "Muğla": {
        "Menteşe": ["Emirbeyazıt Mah.", "Orhaniye Mah."],
        "Bodrum": ["Çarşı Mah.", "Eskiçeşme Mah.", "Kumbahçe Mah."],
        "Fethiye": ["Cumhuriyet Mah.", "Paspatur Mah.", "Çalış Mah."],
        "Marmaris": ["Kemeraltı Mah.", "Çıldır Mah."],
        "Milas": ["Burgaz Mah."],
        "Dalaman": ["Cumhuriyet Mah."],
        "Datça": ["İskele Mah."],
        "Köyceğiz": ["Cumhuriyet Mah."]
    },
    "Muş": {
        "Merkez": ["Atatürk Mah.", "Cumhuriyet Mah."],
        "Malazgirt": ["Cumhuriyet Mah."]
    },
    "Nevşehir": {
        "Merkez": ["Yeni Mah.", "Ragıp Üner Mah."],
        "Ürgüp": ["Cumhuriyet Mah.", "Temenni Mah."],
        "Avanos": ["Cumhuriyet Mah."],
        "Göreme": ["Müze Mah."]
    },
    "Niğde": {
        "Merkez": ["Yenice Mah.", "Dışarı Mah."],
        "Bor": ["Bahçelievler Mah."]
    },
    "Ordu": {
        "Altınordu": ["Akyazı Mah.", "Düz Mah.", "Şahincili Mah."],
        "Ünye": ["Cumhuriyet Mah."],
        "Fatsa": ["Saray Mah."]
    },
    "Osmaniye": {
        "Merkez": ["Raufbey Mah.", "Alibeyli Mah."],
        "Kadirli": ["Savrun Mah."]
    },
    "Rize": {
        "Merkez": ["Piriçelebi Mah.", "Müftü Mah."],
        "Çamlıhemşin": ["Merkez Mah."],
        "Ardeşen": ["Cumhuriyet Mah."]
    },
    "Sakarya": {
        "Adapazarı": ["Cumhuriyet Mah.", "Ozanlar Mah.", "Yenidoğan Mah."],
        "Serdivan": ["Bahçelievler Mah.", "Beşköprü Mah."],
        "Erenler": ["Erenler Mah."],
        "Arifiye": ["Hanlı Mah."],
        "Sapanca": ["Rüstempaşa Mah."],
        "Hendek": ["Uzunçarşı Mah."]
    },
    "Samsun": {
        "Atakum": ["Kurupelit Mah.", "Yeni Mah.", "Balaç Mah."],
        "İlkadım": ["Kale Mah.", "Derebahçe Mah.", "Cumhuriyet Mah."],
        "Canik": ["Atatürk Mah.", "Osmangazi Mah."],
        "Tekkeköy": ["Cumhuriyet Mah."],
        "Bafra": ["Cumhuriyet Mah."],
        "Çarşamba": ["Orta Mah."],
        "Terme": ["Cumhuriyet Mah."]
    },
    "Şanlıurfa": {
        "Eyyübiye": ["Atatürk Mah.", "Süleymaniye Mah."],
        "Haliliye": ["Paşabağı Mah.", "Akbayır Mah.", "Devteşti Mah."],
        "Karaköprü": ["Doğukent Mah.", "Seyrantepe Mah."],
        "Siverek": ["Cumhuriyet Mah."],
        "Viranşehir": ["Cumhuriyet Mah."]
    },
    "Şırnak": {
        "Merkez": ["Cumhuriyet Mah.", "Bahçelievler Mah."],
        "Cizre": ["Nur Mah.", "Sur Mah."],
        "Silopi": ["Cudi Mah."]
    },
    "Siirt": {
        "Merkez": ["Bahçelievler Mah.", "Kooperatif Mah."],
        "Kurtalan": ["Cumhuriyet Mah."]
    },
    "Sinop": {
        "Merkez": ["Ada Mah.", "Gelincik Mah."],
        "Boyabat": ["Gazi Mah."]
    },
    "Sivas": {
        "Merkez": ["Kale Mah.", "Paşabey Mah.", "Karşıyaka Mah."],
        "Suşehri": ["Cumhuriyet Mah."],
        "Zara": ["Cumhuriyet Mah."]
    },
    "Tekirdağ": {
        "Süleymanpaşa": ["Hürriyet Mah.", "Gündoğdu Mah.", "Yavuz Mah."],
        "Çorlu": ["Cemaliye Mah.", "Zafer Mah.", "Reşadiye Mah."],
        "Çerkezköy": ["Fatih Mah.", "G.O.P. Mah."],
        "Kapaklı": ["Cumhuriyet Mah."],
        "Malkara": ["Cumhuriyet Mah."]
    },
    "Tokat": {
        "Merkez": ["Gazi Osman Paşa Mah.", "Behzat Mah."],
        "Erbaa": ["Cumhuriyet Mah."],
        "Turhal": ["Yeni Mah."]
    },
    "Trabzon": {
        "Ortahisar": ["İskenderpaşa Mah.", "Kemerkaya Mah.", "Pazarkapı Mah.", "Boztepe Mah."],
        "Akçaabat": ["Orta Mah.", "Dürbinar Mah."],
        "Yomra": ["Özdil Mah."],
        "Araklı": ["Kemaliye Mah."],
        "Of": ["Cumhuriyet Mah."],
        "Sürmene": ["Çarşıbaşı Mah."]
    },
    "Tunceli": {
        "Merkez": ["Cumhuriyet Mah.", "Moğultay Mah."]
    },
    "Uşak": {
        "Merkez": ["Cumhuriyet Mah.", "İslice Mah.", "Durak Mah."],
        "Banaz": ["Cumhuriyet Mah."]
    },
    "Van": {
        "İpekyolu": ["Cumhuriyet Mah.", "Hafıziye Mah.", "Alipaşa Mah."],
        "Tuşba": ["Kalecik Mah.", "Beyüzümü Mah."],
        "Edremit": ["Şabaniye Mah."],
        "Erciş": ["Cumhuriyet Mah."]
    },
    "Yalova": {
        "Merkez": ["Süleymanbey Mah.", "Bahçelievler Mah.", "İsmetpaşa Mah."],
        "Çınarcık": ["Harmanlar Mah."],
        "Altınova": ["Cumhuriyet Mah."]
    },
    "Yozgat": {
        "Merkez": ["Medrese Mah.", "Lise Mah."],
        "Sorgun": ["Agahefendi Mah."],
        "Yerköy": ["Cumhuriyet Mah."]
    },
    "Zonguldak": {
        "Merkez": ["Bahçelievler Mah.", "Meşrutiyet Mah."],
        "Ereğli": ["Müftü Mah.", "Kışla Mah."],
        "Çaycuma": ["Saltukova Mah."],
        "Devrek": ["Cumhuriyet Mah."]
    }
};
