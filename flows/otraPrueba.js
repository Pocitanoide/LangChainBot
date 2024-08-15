import "dotenv/config"
import { EVENTS } from "@builderbot/bot"

import z from "zod"
import { createAIFlow } from "@builderbot-plugins/langchain"


export const welcomeee = createAIFlow
    .setKeyword(EVENTS.WELCOME)
    .setAIModel({ modelName: 'gemini',
        args:{
            modelName:"gemini-1.5-flash",
        apikey:process.env.GOOGLE_API_KEY,
    temperature:0.7,} })
    .setZodSchema(
        z.object({
            name: z.string().nullable().describe('The name of the person the user is asking about'),
            age: z.number().nullable().describe('The age of the person the user is asking about')
        })
    )
    .create({
        afterEnd(flow) {
            return flow.addAction((_, { state }) => {
                console.log(state.get('aiAnswer'))
            })
        }
    })


