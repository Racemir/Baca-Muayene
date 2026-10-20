function districtList(city, limit = 4) {
  return city.districts.slice(0, limit).join(', ');
}

const CITY_EXTRAS = {
  istanbul: {
    intro:
      'İstanbul’da baca raporu, İGDAŞ gaz açımı ve abonelik revizyonlarında en çok istenen belgelerden biridir. Anadolu ve Avrupa yakasında kombi, merkezi kazan, kaskad ve ticari mutfak bacalarında sızdırmazlık testi ile uygunluk raporu düzenliyoruz.',
    typical:
      'Kadıköy, Üsküdar, Beşiktaş, Şişli, Bakırköy, Başakşehir, Ümraniye, Pendik ve Esenyurt başta olmak üzere tüm ilçelerde aynı gün veya ertesi iş günü saha planlıyoruz. Site yönetimleri ve yeni teslim dairelerde gaz açım raporunu sıkça hazırlıyoruz.',
    process:
      'İGDAŞ baca raporu için randevuda adres, cihaz tipi (kombi / kazan / jeneratör) ve baca çıkış bilgisi yeterlidir. Saha ekibi dijital manometre ile sızdırmazlık ölçer, görsel kontrol yapar ve gaz dağıtımının istediği formatta raporu teslim eder.',
  },
  ankara: {
    intro:
      'Ankara’da Başkentgaz şartnamesine uygun baca raporu; yeni binaların gaz arzı, kazan dairesi periyodik kontrolü ve iskan öncesi uygunluk muayenesinde talep edilir. Çankaya, Keçiören, Yenimahalle, Mamak ve Etimesgut’ta düzenli saha çalışıyoruz.',
    typical:
      'Başkent koridorundaki yüksek katlı konutlar, kamu binaları ve organize sanayi kazan dairelerinde TS EN 13384 esaslı kesit / çekiş değerlendirmesi ile sızdırmazlık testini birlikte yürütüyoruz.',
    process:
      'Başkentgaz gaz açımı için sızdırmazlık testi raporu ve montaj uygunluk notu hazırlanır. Randevu sonrası ölçüm çıktısı ve fotoğraflı tespitler aynı süreçte teslim edilir.',
  },
  izmir: {
    intro:
      'İzmir’de İzmirgaz (İzmir Doğalgaz) aboneliklerinde baca sızdırmazlık testi, özellikle kaskad kazan ve sahil hattındaki rüzgâr yüküne maruz bacalarda kritiktir. Konak, Karşıyaka, Bornova, Buca, Çiğli ve Aliağa’da hizmet veriyoruz.',
    typical:
      'Aliağa ve Atatürk Organize civarındaki endüstriyel bacalar ile Bornova–Buca konut stoğunda periyodik kamera kontrolü ve gaz açım raporu sık talep edilir.',
    process:
      'İzmirgaz süreçlerinde saha ölçümü, EN 1443 basınç sınıfı doğrulaması ve raporun dağıtımın istediği evrak setine işlenmesi aynı randevuda planlanır.',
  },
  bursa: {
    intro:
      'Bursa’da Bursagaz onaylı baca raporu; Osmangazi, Nilüfer, Yıldırım ve İnegöl’deki konut siteleri ile tekstil / otomotiv tesislerinin kazan dairelerinde istenir.',
    typical:
      'Nilüfer ve İnegöl’de yeni teslim projelerde gaz açımı, Osmangazi’de ise mevcut merkezi sistemlerin yıllık kontrolü öne çıkar.',
    process:
      'Bursagaz gaz açım dosyası için sızdırmazlık testi ve görsel uygunluk raporu hazırlanır; ihtiyaç halinde robotik kamera görüntüleri eklenir.',
  },
  antalya: {
    intro:
      'Antalya’da Enerya Antalya Gaz kapsamında otel, restoran ve yazlık sitelerin bacaları hem sezon öncesi hem gaz açımında denetlenir. Muratpaşa, Kepez, Konyaaltı, Alanya ve Manavgat’ta saha ekibimiz bulunur.',
    typical:
      'Turizm tesislerinde mutfak ve kazan bacalarının sızdırmazlığı ile periyodik kamera tarama, sezon açılışında yoğunlaşır.',
    process:
      'Randevuda tesis tipi belirtilirse otel / avm / konut ayrımına göre test basıncı ve rapor içeriği Enerya şartnamesine göre kurgulanır.',
  },
  kocaeli: {
    intro:
      'Kocaeli’de İZGAZ şartnamesine uygun baca raporu; İzmit, Gebze, Dilovası ve Körfez’deki sanayi bacaları ile Çayırova–Darıca konutlarında istenir.',
    typical:
      'Gebze OSB ve Dilovası hatlarında endüstriyel baca sızdırmazlık testi, İzmit merkezde ise site kazan daireleri öne çıkar.',
    process:
      'İZGAZ gaz açımı ve işyeri ruhsatı için ölçüm raporu, fotoğraf ve varsa kamera kaydı tek dosyada teslim edilir.',
  },
  gaziantep: {
    intro:
      'Gaziantep’te GAZDAŞ Gaziantep aboneliklerinde baca raporu; Şahinbey, Şehitkamil ve Nizip’teki konut ile imalat tesislerinde gaz açımı ve periyodik kontrol için hazırlanır.',
    typical:
      'Organize sanayi kazan daireleri ve yüksek kapasiteli mutfak bacalarında sızdırmazlık sınıfı doğrulaması sık yapılır.',
    process:
      'GAZDAŞ sürecinde saha ölçümü sonrası resmi rapor, dağıtımın evrak kontrolüne uygun şekilde düzenlenir.',
  },
  konya: {
    intro:
      'Konya’da Enerya Konya Gaz kapsamında Selçuklu, Meram ve Karatay’daki konutlar ile Ereğli–Akşehir hattındaki tesislerde baca raporu ve sızdırmazlık testi yapılır.',
    typical:
      'Merkezi ısıtmalı siteler ve tarımsal / gıda tesislerinin kazan bacaları periyodik kontrol listesinde öne çıkar.',
    process:
      'Gaz açım randevusunda cihaz bilgisi alınır; sızdırmazlık testi ve uygunluk raporu Enerya evrak setine işlenir.',
  },
  adana: {
    intro:
      'Adana’da Aksa Doğalgaz aboneliklerinde Seyhan, Çukurova, Yüreğir ve Ceyhan’da baca raporu; hem konut gaz açımı hem sanayi kazan daireleri için düzenlenir.',
    typical:
      'Sıcak iklimde yoğuşmalı cihaz ve çatı tipi bacalarda sızdırmazlık ve çekiş kontrolü birlikte istenir.',
    process:
      'Aksa gaz açımı için saha ölçümü ve rapor aynı gün veya ertesi iş günü teslim planına alınır.',
  },
  kayseri: {
    intro:
      'Kayseri’de Kayserigaz aboneliklerinde Melikgazi, Kocasinan ve Talas’taki konut siteleri ile sanayi bacalarında sızdırmazlık testi yapılır.',
    typical:
      'Organize sanayi kazan dairelerinde periyodik kamera kontrolü ve gaz açım raporu birlikte talep edilir.',
    process:
      'Kayserigaz dosyası için dijital manometre çıktısı ve görsel tespit raporu hazırlanır.',
  },
  mersin: {
    intro:
      'Mersin’de Aksa Doğalgaz kapsamında Toroslar, Yenişehir, Mezitli ve Tarsus’ta liman–sanayi bacaları ile konut kombileri için baca raporu hazırlanır.',
    typical:
      'Tarsus ve Akdeniz ilçesinde ticari mutfak bacası, Mezitli–Yenişehir’de site kazan daireleri yoğunluk gösterir.',
    process:
      'Gaz açım randevusunda adres ve cihaz tipi alınır; sızdırmazlık testi raporla tamamlanır.',
  },
  samsun: {
    intro:
      'Samsun’da SAMGAZ aboneliklerinde İlkadım, Atakum, Bafra ve Çarşamba’da baca raporu; Karadeniz ikliminde kurum birikimi ve çekiş sorunları için periyodik kontrolle birlikte verilir.',
    typical:
      'Sahil hattı rüzgâr yükü ve nem, baca bağlantılarının sızdırmazlığını daha sık test ettirir.',
    process:
      'SAMGAZ gaz açımı için saha ölçümü ve uygunluk raporu planlanan randevuda teslim edilir.',
  },
  eskisehir: {
    intro:
      'Eskişehir’de ESGAZ kapsamında Odunpazarı ve Tepebaşı’ndaki konutlar ile üniversite–sanayi kazan dairelerinde baca raporu düzenlenir.',
    typical:
      'Merkezi sistem sitelerde yıllık kontrol, yeni teslim projelerde gaz açım sızdırmazlık testi öne çıkar.',
    process:
      'ESGAZ evrakına uygun sızdırmazlık ve görsel kontrol raporu saha sonrası iletilir.',
  },
  tekirdag: {
    intro:
      'Tekirdağ’da GAZDAŞ Trakya kapsamında Çorlu, Çerkezköy, Kapaklı ve Süleymanpaşa’da sanayi bacaları ile konut kazan daireleri için baca raporu hazırlanır.',
    typical:
      'Ergene havzası OSB’lerinde endüstriyel sızdırmazlık testi, Çorlu–Çerkezköy’de site gaz açımı yoğundur.',
    process:
      'GAZDAŞ Trakya gaz açımı için ölçüm raporu ve fotoğraflı tespit aynı dosyada sunulur.',
  },
  diyarbakir: {
    intro:
      'Diyarbakır’da Diyargaz aboneliklerinde Bağlar, Kayapınar ve Yenişehir’de konut ve ticari baca raporu; gaz açımı ve periyodik kontrol için düzenlenir.',
    typical:
      'Yeni yerleşimlerde kombi bacası, merkezi sistem binalarda kazan dairesi sızdırmazlığı talep edilir.',
    process:
      'Diyargaz sürecine uygun saha testi ve rapor randevu gününde tamamlanır.',
  },
};

export function getCityCopy(city) {
  const extra = CITY_EXTRAS[city.slug];
  const districts = districtList(city);
  return {
    intro:
      extra?.intro ||
      `${city.name} ilinde ${city.gasCompany} abonelik ve gaz açım süreçlerinde baca raporu ile sızdırmazlık testi hazırlıyoruz. ${districts} başta olmak üzere ${city.region} Bölgesi’ndeki ilçelerde konut, işyeri ve kazan dairelerinde saha ölçümü yapılır.`,
    typical:
      extra?.typical ||
      `${city.name}’de en sık talep; yeni abonelik gaz açımı, mevcut bacanın periyodik kontrolü ve ${city.gasCompany} evrakına uygun resmi rapordur. ${districts} ve diğer ilçelerde aynı prosedür uygulanır.`,
    process:
      extra?.process ||
      `${city.name} baca raporu için telefon veya WhatsApp’tan adres ve cihaz tipi yeterlidir. Ekip sızdırmazlık testini kalibre cihazla yapar; uygun bulunan tesislerde ${city.gasCompany} süreçlerine uygun rapor teslim edilir.`,
  };
}
