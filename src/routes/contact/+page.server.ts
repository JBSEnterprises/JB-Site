import { fail } from '@sveltejs/kit';
import type { Actions } from './$types';

export const actions = {
    default: async ({ request, platform }) => {
        const formData = await request.formData()

        // Handle Turnstile logic
        const turnstileURL = 'https://challenges.cloudflare.com/turnstile/v0/siteverify';
        const token = formData.get('cf-turnstile-response');
        const ip = request.headers.get('CF-Connecting-IP');

        const result = await fetch(turnstileURL, {
            body: JSON.stringify({
              secret: platform?.env.TURNSTILEKEY,
              response: token,
              remoteip: ip
            }),
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            }
        });

        const outcome = await result.json()
        
        // Ignore the error
        if(!outcome.success) {
            return { success: false, turnstilefail: true }
        }

        const webhook = "https://discord.com/api/webhooks/1304880809156673588/CO_5a19l_uoK5sJkcXahKlug1xol46Skm8cNaGje6hY1cbWNtEUdI1oAJH_-xXY1FKzN"
        const email = formData.get("email")
        const name = formData.get("name")
        const subject = formData.get("subject")
        const body = formData.get("content")
        
        if(body?.toString().length! >= 1024 || email?.toString().length! >= 256 || subject?.toString().length! >= 256 || name?.toString().length! >= 256) {
                return fail(400, { body, email, name, subject })
        }

        const content = {
            content: "<@270756167570030592>",
            embeds: [
                {
                    title: "New Contact form",
                    color: 4975390,
                    fields: [
                        {
                            name: "Name",
                            value: name,
                            inline: true,
                        },
                        {
                            name: "E-Mail",
                            value: email,
                            inline: true
                        },
                        {
                            name: "Subject",
                            value: subject,
                            inline: false
                        },
                        {
                            name: "Body",
                            value: body,
                            inline: false
                        }
                    ],
                    timestamp: new Date()
                }
            ]
        }
        
        const f = await fetch(webhook, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(content)
        })

        return { success: true }
    }
} satisfies Actions;