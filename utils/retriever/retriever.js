import { SupabaseVectorStore } from "@langchain/community/vectorstores/supabase";
import { VertexAIEmbeddings } from "@langchain/google-vertexai";
import { createClient } from "@supabase/supabase-js";


const embeddings= new VertexAIEmbeddings({
    apiKey:process.env.GOOGLE_API_KEY,
    //? model
})
export const sbApiKey= process.env.SUPABASE_API_KEY; //todo Colocar api key
//! Esto es de la base de datos Vectorial
export const sbUrl= process.env.SUPABASE_URL_LC_CHATBOT; //todo Colocar api key
//! Esto es de la base de datos Vectorial
export const client = createClient(sbUrl, sbApiKey)
//! Esto es de la base de datos Vectorial

const vectorStores= new SupabaseVectorStore(embeddings,
    {   client:client,
        tableName: "documents",
        queryName: "match_documents",
    }
)

export const retriever= vectorStores.asRetriever()












