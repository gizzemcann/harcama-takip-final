
#  Expense Tracker - Kişisel Bütçe Yönetim Sistemi

Bu proje, **Web Geliştirme** eğitimi çerçevesinde, modern web teknolojileri ve mühendislik prensipleri kullanılarak geliştirilmiş bir bütçe yönetim uygulamasıdır. Kullanıcıların gelir ve giderlerini anlık olarak takip etmelerini, bakiye durumlarını analiz etmelerini ve verilerini güvenli bir şekilde saklamalarını sağlar.

##  Proje Hakkında
Eğitim yönergesinde belirtilen tüm teknik gereksinimleri karşılayan bu uygulama; **React Router v7** altyapısı üzerine inşa edilmiş, **TypeScript** ile tip güvenliği sağlanmış ve **Tailwind CSS** ile modern bir kullanıcı arayüzüne kavuşturulmuştur.

### Temel Özellikler (CRUD İşlemleri)
- **Ekleme (Create):** Harcama veya gelir kalemlerini tutar, kategori ve işlem tipi bazında sisteme kaydetme.
- **Listeleme (Read):** Kaydedilen tüm işlemlerin dinamik olarak Dashboard üzerinde görüntülenmesi.
- **Güncelleme (Update):** İşlem tutarları üzerinde dinamik güncellemeler (örn: %10 artış fonksiyonu).
- **Silme (Delete):** Hatalı veya güncelliğini yitirmiş kayıtların sistemden tek tıkla kaldırılması.
- **Veri Kalıcılığı:** `LocalStorage` entegrasyonu sayesinde sayfa yenilense dahi verilerin korunması.

##  Teknik Mimari ve Klasör Yapısı
Proje, modülerlik ve sürdürülebilirlik ilkeleri doğrultusunda şu klasör yapısına ayrılmıştır:

- **`/app/components`**: Tekrar kullanılabilir arayüz bileşenleri (Header, StatCard vb.).
- **`/app/pages`**: Uygulamanın ana sayfa mantığının ve state yönetiminin bulunduğu alan.
- **`/app/interfaces`**: `Expense` veri modelinin TypeScript interface tanımlamaları.
- **`/app/routes`**: Sayfa yönlendirme ve ana giriş noktası.

##  Tasarım ve Stil
- **Framework:** React Router v7 (Remix Core)
- **Styling:** Tailwind CSS (Responsive Tasarım)
- **Language:** TypeScript

## Ekran Görüntüsü
<img width="806" height="906" alt="image" src="https://github.com/user-attachments/assets/77d9822a-3646-4db9-b9fd-0e09039db315" />

## Canlı Uygulama & Kod Erişimi
- **GitHub Repo:** https://github.com/gizzemcann/harcama-takip-final
- **Canlı Link (Vercel):** harcama-takip-final.vercel.app

##  Kurulum (Yerel Geliştirme)
Projeyi kendi bilgisayarınızda çalıştırmak için:

1. Depoyu klonlayın: `git clone <repo-url>`
2. Bağımlılıkları yükleyin: `npm install`
3. Uygulamayı başlatın: `npm run dev`





