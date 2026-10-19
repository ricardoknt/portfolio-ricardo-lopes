# Portfólio de Ricardo Lopes

Portfólio estático de Ricardo Lopes, estudante de Desenvolvimento de Sistemas no IFB. Os seis projetos, suas prévias e seus resumos estão em `dist/`. O Radar Editorial tem uma página de demonstração independente em `dist/radar-editorial.html`, com conteúdo fictício e sem integração com o painel original.

## GitHub Pages

O workflow em `.github/workflows/pages.yml` publica `dist/` em cada envio para `main`. O repositório precisa ter GitHub Pages configurado com **GitHub Actions** como fonte de publicação.

O site usa caminhos relativos para CSS, JavaScript e imagens, funcionando tanto em um endereço `usuario.github.io/repositorio/` quanto em uma raiz própria.

## Prévia local

Sirva a pasta `dist/` com um servidor HTTP estático, por exemplo:

```sh
python -m http.server 4173 --directory dist
```

Abra `http://localhost:4173/`.
