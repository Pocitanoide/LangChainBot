import { addKeyword, EVENTS } from "@builderbot/bot";

export const MandarUbicacion = addKeyword(EVENTS.ACTION)
.addAction({}, 
    async (ctx, {provider}) => {
        provider.sendLocation(ctx.from,"-31.5480306", "-68.5202805")
            ///remoteJid: string, latitude: any, longitude: any, messages?: any)
    }
)