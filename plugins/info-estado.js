import{generateWAMessageFromContent}from'@whiskeysockets/baileys';import _0x16aa3a from'os';import _0x455ada from'util';import _0x2dcee1 from'human-readable';import _0x2a1d3e from'@whiskeysockets/baileys';import _0x183fec from'fs';import{performance}from'perf_hooks';const handler=async(_0x53b730,{conn:_0x1b3b7e,usedPrefix:_0x158a69})=>{const _0x32c06c=process['uptime']()*0x3e8,_0x4903d6=clockString(_0x32c06c),_0x288025=Object['values'](global['db']['data']['users'])['filter'](_0x12b0ba=>_0x12b0ba['registered']==!![])['length'],_0x57a749=Object['keys'](global['db']['data']['users'])['length'],_0x4686f0=Object['entries'](_0x1b3b7e['chats'])['filter'](([_0x24866d,_0x40e028])=>_0x24866d&&_0x40e028['isChats']),_0x496ee5=_0x4686f0['filter'](([_0x3dcd4f])=>_0x3dcd4f['endsWith']('@g.us')),_0x524652=_0x4686f0['filter'](([_0x17dc73])=>_0x17dc73['endsWith']('@g.us')),_0x8103d5=process['memoryUsage'](),{restrict:_0xddd990,antiCall:_0x269edd,antiprivado:_0x2c4105,modejadibot:_0x10aae2}=global['db']['data']['settings'][_0x1b3b7e['user']['jid']]||{},{autoread:_0x22d218,gconly:_0x29d08f,pconly:_0x596c47,self:_0x135a2c}=global['opts']||{},_0x3f8b3a=performance['now'](),_0x4a416a=performance['now'](),_0x861375=(_0x4a416a-_0x3f8b3a)['toFixed'](0x7),_0x1d2f7e='ʜᴀᴅᴇs\x20ʙᴏᴛ\x20ᴏᴍᴇɢᴀ',_0x28045d=('┌──⊰𝕀ℕ𝔽𝕆\x20-\x20𝔼𝕊𝕋𝔸𝔻𝕆\x20\x0a│⋊*Creador.:*\x20OFC-YOVANI\x0a│⋊*WA:*\x20+51992621601\x0a│⋊*Ping:*\x20'+_0x861375+'\x0a│⋊*Uptime:*\x20'+_0x4903d6+'\x0a│⋊*Prefijo:*\x20'+_0x158a69+'\x0a│⋊*Modo:*\x20'+(_0x135a2c?'privado':'público')+'\x0a│⋊*Usuarios\x20regs.:*\x20'+_0x288025+'\x0a│⋊*Usuarios\x20totales:*\x20'+_0x57a749+'\x0a│⋊*Tipo\x20de\x20bot:*\x20'+((_0x1b3b7e['user']['jid']==global['conn']['user']['jid']?'':'Sub-bot\x20de:\x0a│⋊+'+global['conn']['user']['jid']['split']`@`[0x0])||'No\x20es\x20sub-bot')+'\x0a│⋊*Chats\x20privados:*\x20'+(_0x4686f0['length']-_0x524652['length'])+'\x0a│⋊*Grupos:*\x20'+_0x524652['length']+'\x0a│⋊*Chats\x20totales:*\x20'+_0x4686f0['length']+'\x0a│⋊*Autoread:*\x20'+(_0x22d218?'activo':'desactivado')+'\x0a│⋊*Restrict:*\x20'+(_0xddd990?'activo':'desactivado')+'\x0a│⋊*PCOnly:*\x20'+(_0x596c47?'activado':'desactivado')+'\x0a│⋊*GPOnly:*\x20'+(_0x29d08f?'activado':'desactivado')+'\x0a│⋊*AntiPrivado:*\x20'+(_0x2c4105?'activado':'desactivado')+'\x0a│⋊*AntiLlamada:*\x20'+(_0x269edd?'activado':'desactivado')+'\x0a│⋊*ModeJadiBot:*\x20'+(_0x10aae2?'activado':'desactivado')+'\x0a└──────────⊰')['trim'](),_0x2c6721=['pdf','zip','vnd.openxmlformats-officedocument.presentationml.presentation','vnd.openxmlformats-officedocument.spreadsheetml.sheet','vnd.openxmlformats-officedocument.wordprocessingml.document'],_0x16ef28=_0x2c6721[Math['floor'](Math['random']()*_0x2c6721['length'])],_0x9d4776={'document':{'url':'https://github.com/OFC-YOVANI/HADES-BOT-OMEGA.git'},'mimetype':'application/'+_0x16ef28,'fileName':'Documento','fileLength':0x5af3107a3fff,'pageCount':0xc8,'contextInfo':{'forwardingScore':0xc8,'isForwarded':!![],'externalAdReply':{'mediaUrl':'https://github.com/OFC-YOVANI/HADES-BOT-OMEGA.git','mediaType':0x2,'previewType':'pdf','title':'ʜᴀᴅᴇs\x20ʙᴏᴛ\x20ᴏᴍᴇɢᴀ','body':'Repositorio\x20-\x20GitHub','thumbnail':imagen1,'sourceUrl':'https://github.com/OFC-YOVANI/HADES-BOT-OMEGA.git'}},'caption':_0x28045d,'footer':_0x1d2f7e,'headerType':0x6};_0x1b3b7e['sendMessage'](_0x53b730['chat'],_0x9d4776,{'quoted':_0x53b730});};handler['command']=/^(Estado|estado)$/i,handler['register']=!![];export default handler;function clockString(_0x265600){const _0x3c4943=Math['floor'](_0x265600/0x36ee80),_0x3f757a=Math['floor'](_0x265600/0xea60)%0x3c,_0x22c5c6=Math['floor'](_0x265600/0x3e8)%0x3c;return console['log']({'ms':_0x265600,'h':_0x3c4943,'m':_0x3f757a,'s':_0x22c5c6}),[_0x3c4943,_0x3f757a,_0x22c5c6]['map'](_0x2a170a=>_0x2a170a['toString']()['padStart'](0x2,0x0))['join'](':');}