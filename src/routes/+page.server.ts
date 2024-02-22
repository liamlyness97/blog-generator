import { env } from "$env/dynamic/private";
import type { Actions } from "./$types";

import OpenAI from 'openai'

const openai = new OpenAI({
    apiKey: env.OPENAI_API_KEY,
})

export const actions: Actions = {
    default: async ({request}) => {
        const form = await request.formData()
        const prompt = form.get('prompt')

        const response = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: [
                {
                    'role': 'user',
                    'content': `Write a blog post on ${prompt}. Respond in markdown`
                }
            ],
            temperature: 1,
            max_tokens: 1000,
            top_p: 1,
            frequency_penalty: 0,
            presence_penalty: 0
        })

        return {
            response: response.choices[0].message.content
        }
    }
}