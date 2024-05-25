import { writable } from "svelte/store";
import { formSchema } from "../../routes/(dashboard)/app/schema";
import { z } from "zod";
type FormSchema = z.infer<typeof formSchema>
function createAppStore() {
    const { set,update,subscribe } = writable<FormSchema>({
        provider: 'google',
        contentType: 'text',
        content: '',
        fromAddress: '',
        fromName: '',
        toAddresses: [],
        subject: '',
        smtpPassword: '',
        smtpUserName: '',
        attachments: [],
        smtpHost: '',
        smtpPort: 587,
        ssl: true
    });
    
    return {
        subscribe,
        set,
        update
    };
}

export const appStore = createAppStore();