# Hitit Group - Web Başlangıç Şablonu

Bu depo, hızlıca statik bir web sayfası geliştirmeye başlamak için temel iskeleti içerir.

## Yapı

- `index.html`: Ana HTML dosyası
- `assets/css/style.css`: Stil dosyası
- `assets/js/main.js`: JavaScript giriş dosyası
- `assets/img/`: Görseller için klasör (boş tutmak için `.gitkeep` eklendi)

## Geliştirme

Yerel geliştirme için bir statik sunucu kullanmanız önerilir. Bazı seçenekler:

### Visual Studio Code Live Server
- VS Code MarketPlace'ten "Live Server" eklentisini kurun.
- `index.html` üzerinde sağ tıklayıp "Open with Live Server" deyin.

### Python ile (Windows PowerShell)
```powershell
python -m http.server 5500
```
Ardından tarayıcıda `http://localhost:5500/` adresine gidin.

### Node.js (npx serve)
```powershell
npx --yes serve . -l 5500
```

## Özelleştirme
- Renkler ve boyutlar `assets/css/style.css` içindeki `:root` değişkenlerinden ayarlanabilir.
- JavaScript başlangıç kodu `assets/js/main.js` içindedir.

## Lisans
Bu proje örnektir; istediğiniz gibi kullanabilirsiniz.
