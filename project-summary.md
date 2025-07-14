
- Projenin amacı?
 Sürekli gelişen ve değişen sosyal medyal diline ayak uydurmak ve 
günlük hayatımızda kullandığımız deyim, ata sözeleri, küfür ve argo tabirleri anlamak aynı zamanda anlatmak için.


- Hedef kitle kimler?
 Çoğunlukla 18-25 yaş arası genç kullanıcılar.


- Projenin ilk aşamasında kullanıcı üye olabilecek, kelime ekleyebilecek, arama yapabilecek ve eklenen kelimelere oy(Up vote / down vote) verebilecek.

- Projenin ileriki aşamalarında:
# Kullanıcılar yazılan kelimenini doğruluğunu ya da başka anlamlarını yapay zeka aracılığıyla kontrol edebilecek.
# Kullancılar belli alanlarda ya da kategorilerde arama yapabilecek.
# Günün kelimesi, ayın/haftanın popüler kelimeleri gibi sekmeler olacak.
# Uygulama belli bir kitleye ulaştıktan sonra kullanıcıların arasından yazarlar seçilecek, her kullanıcı siteyele kelime ekleyemeyecek.


- Kullanılacak teknolojiler:
| Katman          | Teknoloji                           |
|-----------------|-------------------------------------|
| Frontend        | React.js + Tailwind CSS             |
| Backend         | Python + Flask (REST API)           |
| Veritabanı      | PostgreSQL                          |
| Deployment      | Vercel (frontend), Render (backend) |
| Versiyon Kontrol| Git + GitHub                        |
| Test & API      | Postman                             |


- GitHub Repo:

Street Slang/
  ├── frontend/     -> React kodları 
  ├── backend/      -> Flask kodları 
  ├── docs/         -> Diyagramlar, dokümantasyon
  ├── README.md


- Öğrenmem Gerekenler: 

| Alan                            | Açıklama                                                                      | Öğrenme Süresi (tahmini) |
| ------------------------------- | ----------------------------------------------------------------------------- | ------------------------ |
| **Web geliştirme (Full Stack)** | HTML, CSS, JS, React.js, Tailwind + Backend (Django/Flask veya Node.js)       | 3-4 hafta temel          |
| **Veritabanı tasarımı**         | Argo ifadeler, açıklama, örnek, oy sistemi, yorumlar gibi tablolar tasarlamak | 1 hafta                  |
| **Kullanıcı yönetimi**          | Kayıt, login, yetkilendirme vs. (JWT, OAuth)                                  | 1-2 hafta                |
| **Deployment ve Hosting**       | Vercel/Netlify (frontend), Render/Heroku (backend) ya da VPS                  | 1 hafta                  |
| **Temel UI/UX prensipleri**     | Sade, kullanıcı dostu tasarım                                                 | Süreklilik gerektirir    |


- Aşamalar ve Zaman Planı: 

| Hafta | Hedef                       | Detay                                                                                                |
| ----- | --------------------------- | ---------------------------------------------------------------------------------------------------- |
| 1     | Proje Planı & Veri Tasarımı | Kullanıcı tipi, veri modeli, site akışı, temel özellikler belirlensin. (PDF/Miro gibi diyagramlarla) |
| 2     | Frontend'e giriş            | React.js + Tailwind ile basit arayüz oluştur (arama, listeleme)                                      |
| 3     | Backend'e giriş             | Flask veya Django ile API kur, örnek veriyle test                                                    |
| 4     | Frontend-Backend Bağlantısı | Axios ile frontend'den API'ye istek at, listeleme                                                    |
| 5     | Kullanıcı yönetimi          | Kayıt, giriş sistemi, JWT ile token yönetimi                                                         |
| 6     | CRUD işlemleri              | Kullanıcı ekleyebilsin, düzenleyebilsin, oylayabilsin                                                |
| 7     | Deployment                  | Backend + Frontend canlıya al, domain düşün                                                          |
| 8     | Son dokunuşlar & Test       | Hataları düzelt, mobil uyumlu yap, örnek içerik gir                                                  |
