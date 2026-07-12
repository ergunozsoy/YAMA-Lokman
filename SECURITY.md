# Güvenlik Politikası / Security Policy

## Desteklenen sürüm

Bu proje sürekli geliştirme modelindedir; yalnızca `main` dalının güncel hâli
desteklenir.

## Güvenlik açığı bildirme

Bir güvenlik açığı bulduysanız lütfen **herkese açık issue açmayın**.
Bunun yerine GitHub'ın gizli bildirim kanalını kullanın:

**Security sekmesi → Report a vulnerability** (Private vulnerability reporting)

Bu mümkün değilse repo sahibine GitHub profili üzerinden ulaşın.

Bildirimler en geç 14 gün içinde değerlendirilir. Doğrulanan açıklar
giderildikten sonra dilerseniz adınız teşekkür bölümünde anılır.

## Kapsam

Bu uygulama sunucusuz çalışır ve kullanıcı hesabı/parola saklamaz. Ancak
kullanıcılar anamnez gibi **sağlığa dair kişisel bilgiler** girebildiği için
şunlar özellikle bildirime değerdir: girilen sağlık verisinin tarayıcı dışına
sızmasına yol açabilecek her türlü açık, XSS ve benzeri enjeksiyon açıkları,
bağımlılık zafiyetleri, yapılandırma hataları.
