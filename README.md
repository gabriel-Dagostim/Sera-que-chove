# Sera-que-chove

## Descrição

Bem-vindo ao **Sera-que-chove**! Este site permite que você veja o clima atual de qualquer cidade em tempo real. Insira o nome da cidade desejada e descubra as condições climáticas, além de visualizar a bandeira nacional do país da cidade consultada.

## Funcionalidades

- Exibição das condições climáticas atuais de uma cidade.
- Campo de texto para o usuário inserir o nome da cidade.
- Exibição da bandeira nacional do país da cidade.
- Feedback imediato sobre a informação climática consultada.

## Tecnologias Utilizadas

- **Frontend:** HTML, JavaScript
- **API:** [OpenWeatherMap](https://openweathermap.org/api)
- **API de Bandeiras Nacionais**: Para exibir a bandeira do país da cidade consultada.

## Como Executar

1. Clone este repositório para o seu ambiente local:
    ```sh
    git clone https://github.com/gabriel-Dagostim/Sera-que-chove.git
    ```
2. Navegue até o diretório do projeto:
    ```sh
    cd Sera-que-chove
    ```
3. Abra o arquivo `index.html` no seu navegador preferido.

## Configuração da API

Para usar a API da OpenWeatherMap, você precisará de uma chave de API. Substitua o valor de `YOUR_API_KEY` no arquivo `script.js` com sua chave da API:

```javascript
const apiKey = 'YOUR_API_KEY';