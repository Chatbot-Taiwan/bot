async function Home(context: any) {

    let carousel: any = {
        type: 'carousel',
        contents: [
            {
                type: 'bubble',
                hero: {
                    type: 'image',
                    url:'https://i.imgur.com/kTwRdX2.png',
                    size: 'full',
                    aspectRatio: '20:13',
                },
                body: {
                    type: 'box',
                    layout: 'vertical',
                    contents: [
                        {
                            type: 'text',
                            margin: 'sm',
                            text: '關於',
                            weight: 'bold',
                            size: 'lg',
                        },
                        {
                            type: 'text',
                            margin: 'sm', 
                            wrap: true,
                            text: 'Chatbot Developers Taiwan 致力於提供一個討論聊天機器人的相關應用的社群。在台北、台中每個月皆有一次的定期 meetup 聚會，每回小聚都會安排講者主題分享、新知討論，環繞在 chatbot 與 AI ，及大家共同關心的話題中。',
                            color: '#777777',
                            size: 'md',
                            flex: 1,
                        },
                    ],
                }
            },
            {
                type: 'bubble',
                hero: {
                    type: 'image',
                    url:'https://i.imgur.com/EObr7Le.png',
                    size: 'full',
                    aspectRatio: '20:13',
                },
                body: {
                    type: 'box',
                    layout: 'vertical',
                    contents: [
                        {
                            type: 'text',
                            margin: 'sm',
                            text: '小聚資訊',
                            weight: 'bold',
                            size: 'lg',
                        },
                        {
                            type: "button",
                            style: "link",
                            action: {
                                type: "message",
                                label: "最新小聚",
                                text: "最新小聚"
                            }
                        },
                        {
                            type: "button",
                            style: "link",
                            action: {
                                type: "message",
                                label: "歷史小聚",
                                text: "歷史小聚"
                            }
                        }
                    ],
                }
            },
            {
                type: 'bubble',
                hero: {
                    type: 'image',
                    url:'https://i.imgur.com/nGDIJig.png',
                    size: 'full',
                    aspectRatio: '20:13',
                },
                body: {
                    type: 'box',
                    layout: 'vertical',
                    contents: [
                        {
                            type: 'text',
                            margin: 'sm',
                            text: '相關連結',
                            weight: 'bold',
                            size: 'lg',
                        },
                        {
                            type: "button",
                            style: "link",
                            action: {
                                type: "uri",
                                label: "Facebook 社團",
                                uri: "https://www.facebook.com/groups/chatbot.tw/"
                            }
                        },
                        {
                            type: "button",
                            style: "link",
                            action: {
                                type: "uri",
                                label: "HackMD 共筆",
                                uri: "https://hackmd.io/team/chatbot-tw"
                            }
                        },
                        {
                            type: "button",
                            style: "link",
                            action: {
                                type: "uri",
                                label: "我的原始碼",
                                uri: "https://github.com/Chatbot-Taiwan/bot"
                            }
                        }
                    ],
                }
            }

        ]
    };
    

    context.sendFlex('嗨，我們是 Chatbot Developers Taiwan', carousel)
}

module.exports = {
    Home
};