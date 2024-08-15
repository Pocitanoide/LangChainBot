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
const Flujo = addKeyword(['Hola', 'Aloh'])
.addAnswer(
    {}
,
    async (ctx, {flowDynamic}) => {
      await flowDynamic("Esta es la respuesta del bot")c
    }
)
```

Tambien se puede encadenar acciones
```
const Flujo = addKeyword(['Hola', 'Aloh']) //! Acá recibe las palabras claves con las que se va a desencadenar una acción/es y/o respuesta/s
.addAnswer( "Hola, soy un bot",  //! Recibe un string o un array de estos.
    {capture:true} /// aca
,
    async (ctx, {flowDynamic}) => {
      ///*Logica*
      await flowDynamic("Flow Dynamic es otro metodo para enviar mensajes")c
    }
)
.addAnswer(
  "Esto se ejecutara una ves terminado la logica de la callback anterior Se termine",
  {capture:true},
  async (ctx, {}) => {
    //*Logica*
  }
)
```
```
const Flujo = addKeyword(EVENTS.ACTION).addAction() //! Necesario para poder ser trigereado por goToFlow();
```

```
const Flujo = addKeyword(EVENTS.DOCUMENT) //! const localPath = await provider.saveFile(ctx, {path:'...'})
.addAction(async (ctx, { provider }) => {
    const localPath = await provider.saveFile(ctx, {path:'...'})}//Para guardar el archivo
    //*Logica Con el Archivo*
    ) 
```


```
const Flujo = addKeyword(EVENTS.LOCATION).addAction(async (ctx) => {
  const LatitudDeLaUbicacion = ctx.message.locationMessage.degreesLatitude;
  const LongitudDeLaUbicacion = ctx.message.locationMessage.degreesLongitude;
  //*Logica*
}) 
```


```
const Flujo = addKeyword(EVENTS.MEDIA).addAction(async (ctx) => {
  const localPath = await provider.saveFile(ctx, {path:'...'})
  //*Logica*
}) 
```

```
const Flujo = addKeyword(EVENTS.VOICE_NOTE).addAction(async (ctx) => {
  const localPath = await provider.saveFile(ctx, {path:'...'}) //Para guardar el audio
  //*Logica*
}) 
```

```
const Flujo = addKeyword(EVENTS.WELCOME).addAction() //Este flujo se va a triggerear cuando el cuerpo del mensaje no corresponda con ninguna otra Keyword de otro flujo
```


## LangChain

LangChain te permite herramientas para trabajar con LLM

## Chains

Permite encadenar prompts (Pueden recibir el resultado de los prompts previos, y a su vez, pasar el resultado del prompt a otro prompt)

```
const prompt = ChatPromptTemplate.fromTemplate("Escribe para mi un cuento de {genero}");

Una ChatPromptTemplate, es una plantilla del prompt que se le va a pasar al modelo, entre {} se coloca la variable que se le quiere pasar al modelo

const chain = prompt.pipe(modelo).pipe(new StringOutputParser());
```

### Modelo
```
export const Gemini= new ChatVertexAI({

    apiKey:process.env.GOOGLE_API_KEY,
    model:"gemini-1.5-flash",
    temperature:0.5 //* Que tanto puede "imaginar" modelo
  }
); 
//! Con esto ya funcionaria con Gemini, aunque tiene mas opciones
```

```
export const ChatGPT = new ChatOpenAI(
    {   
        apiKey:process.env.OPEN_IA_API_KEY,
        model:"chat",
        temperature:0.5 ,//* Que tanto puede "imaginar" modelo
    }
); //! Colocando el modelo, ya funcionaria, aunque tiene mas opciones
```