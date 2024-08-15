<p align="center">
  Ejemplo de BuilderBot + LangChainJs
</p>

## Introduccion

Para el bot de whatsapp voy a implementar [BuilderBot](https://www.builderbot.app/en). Es un framework facil y versatil
Te da la oportunidad de cambiar de API de WhatsApp con solo cambiar una variable y sin tener que aprender como funciona.

Para el backend de la inteligencia Artificial voy a implementar [LangChain](https://js.langchain.com/v0.2/docs/introduction/). Otro Framework que trabaja con LLM, esta bastante bueno y la documentacion esta bien completa
## Instalacion

```
git clone https://github.com/Pocitanoide/LangChainBot.git
cd LangchainBot
npm i
```
## BuilderBot

Normalmente un flujo conversacional de BuilderBot se ve asi>\:
```
const Saludar = addKeyword(['Hola', 'Aloh'])
.addAnswer(
    {}
,
    async (ctx, {flowDynamic}) => {
      await flowDynamic()
    }
)
```