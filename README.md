# VueBlog
# Basit Blog Uygulaması

Bu proje, Vue.js ve Node.js kullanılarak oluşturulmuş basit bir blog uygulamasıdır. Uygulama, bir frontend (blog-ui) ve bir backend (blog-api) olmak üzere iki bileşenden oluşmaktadır.

## Nasıl Başlatılır ve Kullanılır?

### Gereksinimler

- Docker ve Docker Compose kurulu olmalıdır.

### Kurulum

1. Proje dosyalarını bilgisayarınıza klonlayin:


2. Ana dizine gidin ve Docker Compose ile projeyi başlatın:

    ```bash
    cd my-projects
    docker-compose up --build
    ```

3. Tarayıcınızda `http://localhost:8080` adresine giderek blog uygulamasını görüntüleyebilirsiniz.

## Kullanım

### Frontend (blog-ui)

- Ana sayfada "Fetch Posts" butonuna tıklayarak mevcut gönderileri listeleyebilirsiniz.
- "Create a Post" formunu kullanarak yeni bir gönderi oluşturabilirsiniz.

### Backend (blog-api)

- Backend, MongoDB veritabanı kullanarak çalışır ve HTTP isteklerini dinler.
- `/api/posts` endpoint'i ile mevcut gönderileri getirebilir ve yeni gönderiler oluşturabilirsiniz.

## Sorun Giderme

- **Değişiklikler Yansımıyor:** Docker Compose'u doğru şekilde başlattığınızdan ve portların çakışmadığından emin olun. Tarayıcı önbelleğini temizleyip, sayfayı yenileyin.
- **Bağlantı Problemleri:** Docker konteynerlerinin çalıştığından emin olun. `docker-compose ps` komutu ile konteynerlerin durumunu kontrol edebilirsiniz.

Proje hakkında daha fazla bilgiye ihtiyacınız varsa veya sorularınız varsa, lütfen bana ulaşın.
