/* ==========================================================================
   VERİ: TÜRKİYE 81 İL LİSTESİ VE BÖLGESEL HİZMET DETAYLARI (CITIESDATA.JS)
   Açıklama: Türkiye'nin 81 ilinin plaka kodu, adı, URL slug'ı, coğrafi bölgesi,
   yetkili gaz dağıtım kuruluşu ve öne çıkan ilçeleri.
   ========================================================================== */

export const CITIES_DATA = [
  { id: 1, plate: '01', name: 'Adana', slug: 'adana', region: 'Akdeniz', gasCompany: 'Aksa Doğalgaz', districts: ['Seyhan', 'Yüreğir', 'Çukurova', 'Sarıçam', 'Ceyhan', 'Kozan'] },
  { id: 2, plate: '02', name: 'Adıyaman', slug: 'adiyaman', region: 'Güneydoğu Anadolu', gasCompany: 'Aksa Doğalgaz', districts: ['Merkez', 'Kahta', 'Besni', 'Gölbaşı'] },
  { id: 3, plate: '03', name: 'Afyonkarahisar', slug: 'afyonkarahisar', region: 'Ege', gasCompany: 'Aksa Doğalgaz', districts: ['Merkez', 'Sandıklı', 'Dinar', 'Bolvadin', 'Emirdağ'] },
  { id: 4, plate: '04', name: 'Ağrı', slug: 'agri', region: 'Doğu Anadolu', gasCompany: 'Aksa Doğalgaz', districts: ['Merkez', 'Patnos', 'Doğubayazıt', 'Diyadin'] },
  { id: 5, plate: '05', name: 'Amasya', slug: 'amasya', region: 'Karadeniz', gasCompany: 'Aksa Doğalgaz', districts: ['Merkez', 'Merzifon', 'Suluova', 'Taşova'] },
  { id: 6, plate: '06', name: 'Ankara', slug: 'ankara', region: 'İç Anadolu', gasCompany: 'Başkentgaz', districts: ['Çankaya', 'Keçiören', 'Yenimahalle', 'Mamak', 'Etimesgut', 'Sincan', 'Altındağ', 'Kahramankazan', 'Gölbaşı', 'Polatlı'] },
  { id: 7, plate: '07', name: 'Antalya', slug: 'antalya', region: 'Akdeniz', gasCompany: 'Enerya Antalya Gaz', districts: ['Muratpaşa', 'Kepez', 'Konyaaltı', 'Alanya', 'Manavgat', 'Serik', 'Döşemealtı', 'Kemer'] },
  { id: 8, plate: '08', name: 'Artvin', slug: 'artvin', region: 'Karadeniz', gasCompany: 'Aksa Doğalgaz', districts: ['Merkez', 'Hopa', 'Borçka', 'Arhavi', 'Yusufeli'] },
  { id: 9, plate: '09', name: 'Aydın', slug: 'aydin', region: 'Ege', gasCompany: 'Enerya Aydın Gaz', districts: ['Efeler', 'Nazilli', 'Söke', 'Kuşadası', 'Didim', 'İncirliova'] },
  { id: 10, plate: '10', name: 'Balıkesir', slug: 'balikesir', region: 'Marmara', gasCompany: 'Aksa Balıkesir Gaz', districts: ['Karesi', 'Altıeylül', 'Bandırma', 'Edremit', 'Ayvalık', 'Burhaniye', 'Gönen'] },
  { id: 11, plate: '11', name: 'Bilecik', slug: 'bilecik', region: 'Marmara', gasCompany: 'Aksa Doğalgaz', districts: ['Merkez', 'Bozüyük', 'Osmaneli', 'Söğüt'] },
  { id: 12, plate: '12', name: 'Bingöl', slug: 'bingol', region: 'Doğu Anadolu', gasCompany: 'Doğugaz', districts: ['Merkez', 'Genç', 'Solhan', 'Karlıova'] },
  { id: 13, plate: '13', name: 'Bitlis', slug: 'bitlis', region: 'Doğu Anadolu', gasCompany: 'Doğugaz', districts: ['Merkez', 'Tatvan', 'Ahlat', 'Güroymak'] },
  { id: 14, plate: '14', name: 'Bolu', slug: 'bolu', region: 'Karadeniz', gasCompany: 'Aksa Doğalgaz', districts: ['Merkez', 'Gerede', 'Mengen', 'Göynük'] },
  { id: 15, plate: '15', name: 'Burdur', slug: 'burdur', region: 'Akdeniz', gasCompany: 'Torosgaz', districts: ['Merkez', 'Bucak', 'Gölhisar', 'Yeşilova'] },
  { id: 16, plate: '16', name: 'Bursa', slug: 'bursa', region: 'Marmara', gasCompany: 'Bursagaz', districts: ['Osmangazi', 'Yıldırım', 'Nilüfer', 'İnegöl', 'Gemlik', 'Mustafakemalpaşa', 'Mudanya', 'Gürsu'] },
  { id: 17, plate: '17', name: 'Çanakkale', slug: 'canakkale', region: 'Marmara', gasCompany: 'Aksa Doğalgaz', districts: ['Merkez', 'Biga', 'Çan', 'Gelibolu', 'Ayvacık', 'Yenice'] },
  { id: 18, plate: '18', name: 'Çankırı', slug: 'cankiri', region: 'İç Anadolu', gasCompany: 'Kargaz', districts: ['Merkez', 'Ilgaz', 'Çerkeş', 'Kurşunlu'] },
  { id: 19, plate: '19', name: 'Çorum', slug: 'corum', region: 'Karadeniz', gasCompany: 'Çorumgaz', districts: ['Merkez', 'Sungurlu', 'Osmancık', 'Alaca', 'İskilip'] },
  { id: 20, plate: '20', name: 'Denizli', slug: 'denizli', region: 'Ege', gasCompany: 'Enerya Denizli Gaz', districts: ['Pamukkale', 'Merkezefendi', 'Çivril', 'Acıpayam', 'Tavas', 'Sarayköy'] },
  { id: 21, plate: '21', name: 'Diyarbakır', slug: 'diyarbakir', region: 'Güneydoğu Anadolu', gasCompany: 'Diyargaz', districts: ['Bağlar', 'Kayapınar', 'Yenişehir', 'Sur', 'Ergani', 'Bismil', 'Silvan'] },
  { id: 22, plate: '22', name: 'Edirne', slug: 'edirne', region: 'Marmara', gasCompany: 'Zorlu Doğal Gaz (Gazdaş)', districts: ['Merkez', 'Keşan', 'Uzunköprü', 'İpsala', 'Havsa'] },
  { id: 23, plate: '23', name: 'Elazığ', slug: 'elazig', region: 'Doğu Anadolu', gasCompany: 'Aksa Elazığ Gaz', districts: ['Merkez', 'Kovancılar', 'Karakoçan', 'Palu', 'Baskil'] },
  { id: 24, plate: '24', name: 'Erzincan', slug: 'erzincan', region: 'Doğu Anadolu', gasCompany: 'Enerya Erzincan Gaz', districts: ['Merkez', 'Üzümlü', 'Refahiye', 'Tercan', 'İliç'] },
  { id: 25, plate: '25', name: 'Erzurum', slug: 'erzurum', region: 'Doğu Anadolu', gasCompany: 'Palandöken Doğalgaz', districts: ['Yakutiye', 'Palandöken', 'Aziziye', 'Oltu', 'Horasan', 'Pasinler'] },
  { id: 26, plate: '26', name: 'Eskişehir', slug: 'eskisehir', region: 'İç Anadolu', gasCompany: 'ESGAZ', districts: ['Odunpazarı', 'Tepebaşı', 'Sivrihisar', 'Çifteler', 'Seyitgazi'] },
  { id: 27, plate: '27', name: 'Gaziantep', slug: 'gaziantep', region: 'Güneydoğu Anadolu', gasCompany: 'GAZDAŞ Gaziantep', districts: ['Şahinbey', 'Şehitkamil', 'Nizip', 'İslahiye', 'Nurdağı', 'Oğuzeli'] },
  { id: 28, plate: '28', name: 'Giresun', slug: 'giresun', region: 'Karadeniz', gasCompany: 'Aksa Doğalgaz', districts: ['Merkez', 'Bulancak', 'Espiye', 'Görele', 'Tirebolu'] },
  { id: 29, plate: '29', name: 'Gümüşhane', slug: 'gumushane', region: 'Karadeniz', gasCompany: 'Aksa Doğalgaz', districts: ['Merkez', 'Kelkit', 'Şiran', 'Torul', 'Kürtün'] },
  { id: 30, plate: '30', name: 'Hakkari', slug: 'hakkari', region: 'Doğu Anadolu', gasCompany: 'Doğugaz', districts: ['Merkez', 'Yüksekova', 'Şemdinli', 'Çukurca'] },
  { id: 31, plate: '31', name: 'Hatay', slug: 'hatay', region: 'Akdeniz', gasCompany: 'Aksa Hatay Gaz', districts: ['Antakya', 'İskenderun', 'Defne', 'Dörtyol', 'Kırıkhan', 'Reyhanlı', 'Samandağ'] },
  { id: 32, plate: '32', name: 'Isparta', slug: 'isparta', region: 'Akdeniz', gasCompany: 'Torosgaz', districts: ['Merkez', 'Yalvaç', 'Eğirdir', 'Şarkikaraağaç', 'Gelendost'] },
  { id: 33, plate: '33', name: 'Mersin', slug: 'mersin', region: 'Akdeniz', gasCompany: 'Aksa Doğalgaz', districts: ['Toroslar', 'Akdeniz', 'Yenişehir', 'Mezitli', 'Tarsus', 'Erdemli', 'Silifke', 'Anamur'] },
  { id: 34, plate: '34', name: 'İstanbul', slug: 'istanbul', region: 'Marmara', gasCompany: 'İGDAŞ', districts: ['Kadıköy', 'Beşiktaş', 'Üsküdar', 'Bakırköy', 'Şişli', 'Başakşehir', 'Ümraniye', 'Pendik', 'Kartal', 'Esenyurt'] },
  { id: 35, plate: '35', name: 'İzmir', slug: 'izmir', region: 'Ege', gasCompany: 'İzmir Doğalgaz (İzmirgaz)', districts: ['Konak', 'Karşıyaka', 'Bornova', 'Buca', 'Çiğli', 'Bayraklı', 'Torbalı', 'Menemen', 'Gaziemir', 'Aliağa'] },
  { id: 36, plate: '36', name: 'Kars', slug: 'kars', region: 'Doğu Anadolu', gasCompany: 'Kars Doğalgaz', districts: ['Merkez', 'Kağızman', 'Sarıkamış', 'Selim', 'Digor'] },
  { id: 37, plate: '37', name: 'Kastamonu', slug: 'kastamonu', region: 'Karadeniz', gasCompany: 'Kargaz', districts: ['Merkez', 'Tosya', 'Taşköprü', 'Cide', 'İnebolu'] },
  { id: 38, plate: '38', name: 'Kayseri', slug: 'kayseri', region: 'İç Anadolu', gasCompany: 'Kayserigaz', districts: ['Melikgazi', 'Kocasinan', 'Talas', 'Develi', 'Yahyalı', 'Bünyan', 'İncesu'] },
  { id: 39, plate: '39', name: 'Kırklareli', slug: 'kirklareli', region: 'Marmara', gasCompany: 'Zorlu Doğal Gaz (Gazdaş)', districts: ['Merkez', 'Lüleburgaz', 'Babaeski', 'Vize', 'Pınarhisar'] },
  { id: 40, plate: '40', name: 'Kırşehir', slug: 'kirsehir', region: 'İç Anadolu', gasCompany: 'Kırşehir Doğalgaz', districts: ['Merkez', 'Kaman', 'Mucur', 'Çiçekdağı'] },
  { id: 41, plate: '41', name: 'Kocaeli', slug: 'kocaeli', region: 'Marmara', gasCompany: 'İZGAZ', districts: ['İzmit', 'Gebze', 'Darıca', 'Körfez', 'Gölcük', 'Derince', 'Çayırova', 'Kartepe', 'Başiskele'] },
  { id: 42, plate: '42', name: 'Konya', slug: 'konya', region: 'İç Anadolu', gasCompany: 'Enerya Konya Gaz', districts: ['Selçuklu', 'Meram', 'Karatay', 'Ereğli', 'Akşehir', 'Beyşehir', 'Çumra', 'Seydişehir'] },
  { id: 43, plate: '43', name: 'Kütahya', slug: 'kutahya', region: 'Ege', gasCompany: 'Çinigaz', districts: ['Merkez', 'Tavşanlı', 'Simav', 'Gediz', 'Emet'] },
  { id: 44, plate: '44', name: 'Malatya', slug: 'malatya', region: 'Doğu Anadolu', gasCompany: 'Aksa Malatya Gaz', districts: ['Battalgazi', 'Yeşilyurt', 'Doğanşehir', 'Akçadağ', 'Darende'] },
  { id: 45, plate: '45', name: 'Manisa', slug: 'manisa', region: 'Ege', gasCompany: 'Aksa Manisa Gaz', districts: ['Yunusemre', 'Şehzadeler', 'Akhisar', 'Turgutlu', 'Salihli', 'Soma', 'Alaşehir'] },
  { id: 46, plate: '46', name: 'Kahramanmaraş', slug: 'kahramanmaras', region: 'Akdeniz', gasCompany: 'Armadaş', districts: ['Onikişubat', 'Dulkadiroğlu', 'Elbistan', 'Afşin', 'Türkoğlu', 'Pazarcık'] },
  { id: 47, plate: '47', name: 'Mardin', slug: 'mardin', region: 'Güneydoğu Anadolu', gasCompany: 'Akmercan Doğalgaz', districts: ['Artuklu', 'Kızıltepe', 'Midyat', 'Nusaybin', 'Derik'] },
  { id: 48, plate: '48', name: 'Muğla', slug: 'mugla', region: 'Ege', gasCompany: 'Akmercan Muğla Gaz', districts: ['Menteşe', 'Bodrum', 'Fethiye', 'Milas', 'Marmaris', 'Ortaca', 'Yatağan', 'Dalaman'] },
  { id: 49, plate: '49', name: 'Muş', slug: 'mus', region: 'Doğu Anadolu', gasCompany: 'Doğugaz', districts: ['Merkez', 'Bulanık', 'Malazgirt', 'Varto', 'Hasköy'] },
  { id: 50, plate: '50', name: 'Nevşehir', slug: 'nevsehir', region: 'İç Anadolu', gasCompany: 'Kapadokyagaz', districts: ['Merkez', 'Ürgüp', 'Avanos', 'Gülşehir', 'Derinkuyu'] },
  { id: 51, plate: '51', name: 'Niğde', slug: 'nigde', region: 'İç Anadolu', gasCompany: 'Enerya Niğde Gaz', districts: ['Merkez', 'Bor', 'Çiftlik', 'Ulukışla'] },
  { id: 52, plate: '52', name: 'Ordu', slug: 'ordu', region: 'Karadeniz', gasCompany: 'Aksa Karadeniz Gaz', districts: ['Altınordu', 'Ünye', 'Fatsa', 'Gölköy', 'Korgan', 'Kumru'] },
  { id: 53, plate: '53', name: 'Rize', slug: 'rize', region: 'Karadeniz', gasCompany: 'Aksa Karadeniz Gaz', districts: ['Merkez', 'Çayeli', 'Ardeşen', 'Pazar', 'Fındıklı'] },
  { id: 54, plate: '54', name: 'Sakarya', slug: 'sakarya', region: 'Marmara', gasCompany: 'AGDAŞ', districts: ['Adapazarı', 'Serdivan', 'Akyazı', 'Erenler', 'Hendek', 'Karasu', 'Geyve', 'Arifiye'] },
  { id: 55, plate: '55', name: 'Samsun', slug: 'samsun', region: 'Karadeniz', gasCompany: 'SAMGAZ', districts: ['İlkadım', 'Atakum', 'Bafra', 'Çarşamba', 'Canik', 'Vezirköprü', 'Terme', 'Havza'] },
  { id: 56, plate: '56', name: 'Siirt', slug: 'siirt', region: 'Güneydoğu Anadolu', gasCompany: 'Aksa Siirt Gaz', districts: ['Merkez', 'Kurtalan', 'Pervari', 'Baykan'] },
  { id: 57, plate: '57', name: 'Sinop', slug: 'sinop', region: 'Karadeniz', gasCompany: 'Akmercan Sinop Gaz', districts: ['Merkez', 'Boyabat', 'Gerze', 'Ayancık', 'Durağan'] },
  { id: 58, plate: '58', name: 'Sivas', slug: 'sivas', region: 'İç Anadolu', gasCompany: 'Aksa Sivas Gaz', districts: ['Merkez', 'Şarkışla', 'Yıldızeli', 'Suşehri', 'Zara', 'Gemerek'] },
  { id: 59, plate: '59', name: 'Tekirdağ', slug: 'tekirdag', region: 'Marmara', gasCompany: 'GAZDAŞ Trakya', districts: ['Süleymanpaşa', 'Çorlu', 'Çerkezköy', 'Kapaklı', 'Ergene', 'Malkara', 'Saray'] },
  { id: 60, plate: '60', name: 'Tokat', slug: 'tokat', region: 'Karadeniz', gasCompany: 'Aksa Tokat Gaz', districts: ['Merkez', 'Erbaa', 'Turhal', 'Niksar', 'Zile', 'Reşadiye'] },
  { id: 61, plate: '61', name: 'Trabzon', slug: 'trabzon', region: 'Karadeniz', gasCompany: 'Aksa Karadeniz Gaz', districts: ['Ortahisar', 'Akçaabat', 'Araklı', 'Of', 'Yomra', 'Vakfıkebir', 'Sürmene'] },
  { id: 62, plate: '62', name: 'Tunceli', slug: 'tunceli', region: 'Doğu Anadolu', gasCompany: 'Doğugaz', districts: ['Merkez', 'Pertek', 'Mazgirt', 'Çemişgezek', 'Hozat'] },
  { id: 63, plate: '63', name: 'Şanlıurfa', slug: 'sanliurfa', region: 'Güneydoğu Anadolu', gasCompany: 'Aksa Şanlıurfa Gaz', districts: ['Haliliye', 'Eyyübiye', 'Karaköprü', 'Siverek', 'Viranşehir', 'Birecik', 'Suruç'] },
  { id: 64, plate: '64', name: 'Uşak', slug: 'usak', region: 'Ege', gasCompany: 'Udaş Doğalgaz', districts: ['Merkez', 'Banaz', 'Eşme', 'Sivaslı'] },
  { id: 65, plate: '65', name: 'Van', slug: 'van', region: 'Doğu Anadolu', gasCompany: 'Aksa Van Gaz', districts: ['İpekyolu', 'Tuşba', 'Edremit', 'Erciş', 'Özalp', 'Başkale'] },
  { id: 66, plate: '66', name: 'Yozgat', slug: 'yozgat', region: 'İç Anadolu', gasCompany: 'Sürmeligaz', districts: ['Merkez', 'Sorgun', 'Akdağmadeni', 'Yerköy', 'Boğazlıyan'] },
  { id: 67, plate: '67', name: 'Zonguldak', slug: 'zonguldak', region: 'Karadeniz', gasCompany: 'Akmercan Batıkar Gaz', districts: ['Merkez', 'Karadeniz Ereğli', 'Çaycuma', 'Devrek', 'Kozlu', 'Kilimli'] },
  { id: 68, plate: '68', name: 'Aksaray', slug: 'aksaray', region: 'İç Anadolu', gasCompany: 'Enerya Aksaray Gaz', districts: ['Merkez', 'Ortaköy', 'Eskil', 'Gülağaç'] },
  { id: 69, plate: '69', name: 'Bayburt', slug: 'bayburt', region: 'Karadeniz', gasCompany: 'Aksa Doğalgaz', districts: ['Merkez', 'Demirözü', 'Aydıntepe'] },
  { id: 70, plate: '70', name: 'Karaman', slug: 'karaman', region: 'İç Anadolu', gasCompany: 'Enerya Karaman Gaz', districts: ['Merkez', 'Ermenek', 'Sarıveliler'] },
  { id: 71, plate: '71', name: 'Kırıkkale', slug: 'kirikkale', region: 'İç Anadolu', gasCompany: 'Kırıkkale Doğalgaz', districts: ['Merkez', 'Yahşihan', 'Keskin', 'Delice'] },
  { id: 72, plate: '72', name: 'Batman', slug: 'batman', region: 'Güneydoğu Anadolu', gasCompany: 'Fernas Doğalgaz', districts: ['Merkez', 'Kozluk', 'Sason', 'Beşiri', 'Gercüş'] },
  { id: 73, plate: '73', name: 'Şırnak', slug: 'sirnak', region: 'Güneydoğu Anadolu', gasCompany: 'Aksa Doğalgaz', districts: ['Merkez', 'Cizre', 'Silopi', 'İdil', 'Uludere'] },
  { id: 74, plate: '74', name: 'Bartın', slug: 'bartin', region: 'Karadeniz', gasCompany: 'Akmercan Batıkar Gaz', districts: ['Merkez', 'Amasra', 'Ulus', 'Kurucaşile'] },
  { id: 75, plate: '75', name: 'Ardahan', slug: 'ardahan', region: 'Doğu Anadolu', gasCompany: 'Kars Doğalgaz', districts: ['Merkez', 'Göle', 'Çıldır', 'Hanak'] },
  { id: 76, plate: '76', name: 'Iğdır', slug: 'igdir', region: 'Doğu Anadolu', gasCompany: 'Aksa Doğalgaz', districts: ['Merkez', 'Tuzluca', 'Aralık', 'Karakoyunlu'] },
  { id: 77, plate: '77', name: 'Yalova', slug: 'yalova', region: 'Marmara', gasCompany: 'Armagaz', districts: ['Merkez', 'Çiftlikköy', 'Çınarcık', 'Altınova', 'Armutlu'] },
  { id: 78, plate: '78', name: 'Karabük', slug: 'karabuk', region: 'Karadeniz', gasCompany: 'Kargaz', districts: ['Merkez', 'Safranbolu', 'Yenice', 'Eskipazar'] },
  { id: 79, plate: '79', name: 'Kilis', slug: 'kilis', region: 'Güneydoğu Anadolu', gasCompany: 'GAZDAŞ', districts: ['Merkez', 'Musabeyli', 'Elbeyli', 'Polateli'] },
  { id: 80, plate: '80', name: 'Osmaniye', slug: 'osmaniye', region: 'Akdeniz', gasCompany: 'Aksa Doğalgaz', districts: ['Merkez', 'Kadirli', 'Düziçi', 'Bahçe'] },
  { id: 81, plate: '81', name: 'Düzce', slug: 'duzce', region: 'Karadeniz', gasCompany: 'DERGAZ (Aksa Düzce)', districts: ['Merkez', 'Akçakoca', 'Kaynaşlı', 'Gölyaka', 'Çilimli', 'Yığılca'] },
];

export const REGIONS_LIST = [
  'Tümü',
  'Marmara',
  'İç Anadolu',
  'Ege',
  'Akdeniz',
  'Karadeniz',
  'Güneydoğu Anadolu',
  'Doğu Anadolu',
];

/**
 * Slug ile il bulucu
 */
export function getCityBySlug(slug) {
  if (!slug) return null;
  const normalized = slug.toLowerCase().trim();
  return CITIES_DATA.find((c) => c.slug === normalized) || null;
}

/**
 * İsme göre veya plakaya göre arama
 */
export function searchCities(query, regionFilter = 'Tümü') {
  let list = CITIES_DATA;
  if (regionFilter && regionFilter !== 'Tümü') {
    list = list.filter((c) => c.region === regionFilter);
  }
  if (!query || !query.trim()) {
    return list;
  }
  const cleanQuery = query.toLocaleLowerCase('tr').trim();
  return list.filter((c) => 
    c.name.toLocaleLowerCase('tr').includes(cleanQuery) ||
    c.plate.includes(cleanQuery) ||
    c.slug.includes(cleanQuery)
  );
}
