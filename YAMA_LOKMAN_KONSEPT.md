# YAMA Lokman Konsept Belgesi

## Proje Tanımı

**YAMA Lokman**, sağlık okuryazarlığını artırmak, kullanıcının kendi bedenini daha iyi anlamasına yardımcı olmak ve doktora hazırlık sürecini düzenlemek amacıyla tasarlanan web tabanlı bir bilgi yoldaşıdır.

Uygulama doktorun yerine geçmez. Teşhis koymaz, tedavi önermez, ilaç tavsiyesi vermez.

## Temel İlke

> Teşhis koymaz; anlamaya yardım eder.

## Ana Motto

> Bedenini tanı. Bilgini artır. Gerektiğinde hekime danış.

## Ana Amaç

YAMA Lokman’ın amacı, kullanıcının sağlıkla ilgili bilgileri daha düzenli ve bilinçli biçimde anlamasına yardımcı olmaktır.

Uygulama özellikle şu alanlara odaklanır:

1. Anamnez / sağlık öyküsü oluşturma
2. Beden sistemlerini tanıma
3. Tahlil değerlerini genel bilgi düzeyinde anlama
4. Belirtileri panik yapmadan değerlendirme
5. Doktora gitmeden önce bilgileri düzenleme
6. Acil uyarı işaretlerini fark etme
7. Sağlıkla ilgili yanlış bilinenleri düzeltme

## Uygulamanın Yapmadıkları

YAMA Lokman:

- Teşhis koymaz.
- Tedavi planı önermez.
- İlaç başlatmaz veya bıraktırmaz.
- İlaç dozu önermez.
- Doktor kararının yerine geçmez.
- Acil durumda beklemeyi önermez.
- Tek bir tahlil değerinden kesin sonuç çıkarmaz.

## Uygulamanın Yaptıkları

YAMA Lokman:

- Sağlık bilgilerini sadeleştirir.
- Kullanıcıya bedenini tanıtır.
- Anamnez oluşturmasına yardım eder.
- Tahlil değerlerinin genel anlamını açıklar.
- Belirti ve bağlam arasındaki ilişkiyi düşünmeye yardım eder.
- Doktora sorulacak soruları düzenler.
- Acil uyarı işaretlerini hatırlatır.
- Kullanıcıyı gerektiğinde hekime veya acil sağlık hizmetlerine yönlendirir.

## İlk Modüller

### 1. Sağlık Öyküm / Anamnez

Uygulamanın merkezinde anamnez bölümü yer alır.

Kullanıcı şu bilgileri adım adım girebilir:

- Ana şikâyet
- Başlangıç zamanı
- Şikâyetin nasıl geliştiği
- Zaman çizelgesi
- Eşlik eden belirtiler
- Önceden bilinen hastalıklar
- Kullanılan ilaçlar ve takviyeler
- Son olaylar: yolculuk, enfeksiyon, düşme, susuz kalma, ilaç değişikliği vb.
- Hasta yakını gözlemi
- Doktora sunulacak düzenli özet

Anamnez sonunda uygulama kullanıcının verdiği bilgileri düzenli bir metne dönüştürür:

**Doktora Sunulacak Sağlık Öyküsü**

Bu metin teşhis veya tedavi önermez; yalnızca bilgileri düzenler.

### 2. Beden Atlası

Beden sistemlerini sade şekilde açıklar:

- Kalp ve damar sistemi
- Beyin ve sinir sistemi
- Akciğerler
- Böbrekler
- Karaciğer
- Sindirim sistemi
- Kan ve bağışıklık sistemi
- Hormon sistemi
- Kas, kemik ve eklemler
- Su, tuz ve elektrolit dengesi

### 3. Tahlil Değerlerini Anla

Başlangıçta şu değerler için bilgi kartları hazırlanır:

- Sodyum
- Potasyum
- Kreatinin
- Üre
- CRP
- Hemoglobin
- Lökosit
- Trombosit
- Glukoz
- HbA1c
- AST
- ALT
- GGT
- TSH
- Troponin
- D-dimer
- INR
- APTT
- Ferritin
- B12
- D vitamini

### 4. Belirtiyi Anla

Başlangıç belirtileri:

- Baş dönmesi
- Çarpıntı
- Nefes darlığı
- Göğüs ağrısı
- Bacaklarda şişlik
- Ateş
- Halsizlik
- Bulantı
- Uyuşma
- Baş ağrısı

### 5. Doktora Hazırlan

Kullanıcı için sade bir kontrol listesi oluşturur:

- Şikâyetim ne?
- Ne zaman başladı?
- Hangi belirtiler eşlik ediyor?
- Kullandığım ilaçlar neler?
- Bilinen hastalıklarım neler?
- Son tahlillerim neler?
- Doktora sorularım neler?

### 6. Acil Uyarı İşaretleri

Genel bilgi düzeyinde acil yardım gerektirebilecek durumları anlatır:

- Şiddetli göğüs ağrısı
- Nefes darlığı
- Bilinç bulanıklığı
- Felç belirtileri
- Şiddetli alerjik reaksiyon
- Kontrol edilemeyen kanama
- Nöbet
- Bayılma
- Ciddi travma

### 7. Yanlış Bilinenler

Sağlıkla ilgili yaygın yanlış inanışları düzeltir:

- “Tek bir tahlil değeri her şeyi gösterir.”
- “Bitkisel olan her şey zararsızdır.”
- “Tansiyon sadece stresle ilgilidir.”
- “Vitamin fazla alınırsa daha iyi olur.”
- “İlaç iyi gelince bırakılabilir.”
- “Ağrı yoksa ciddi sorun yoktur.”

### 8. Sağlık Notlarım

Kullanıcı ileride şu bilgileri kaydedebilir:

- Tansiyon
- Nabız
- Ateş
- Kilo
- Kan şekeri
- Belirti notları
- Doktor görüşmesi notları
- İlaç listesi

## İlk Teknik Hedef

İlk sürüm sade bir web demo olacaktır.

Başlangıç dosyaları:

```text
index.html
style.css
script.js
README.md
YAMA_LOKMAN_KONSEPT.md
ROADMAP.md
CHANGELOG.md
