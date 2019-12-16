import * as data from "./meetups.json";

async function NewMeetupInfo(context: any) {
    context.sendFlex('這是最近的一次機器人小聚！', {
        type: 'bubble',
        hero: {
            type: 'image',
            url: 'https://scdn.line-apps.com/n/channel_devcenter/img/fx/01_1_cafe.png',
            size: 'full',
            aspectRatio: '20:13',
        },
        body: {
            type: 'box',
            layout: 'vertical',
            contents: [
                {
                    type: 'text',
                    text: data['meetups'][0]['title'],
                    weight: 'bold',
                    size: 'md',
                },
                {
                    type: 'box',
                    layout: 'vertical',
                    margin: 'lg',
                    contents: [
                        {
                            type: 'box',
                            layout: 'baseline',
                            contents: [
                                {
                                type: 'text',
                                text: '地點',
                                color: '#aaaaaa',
                                size: 'sm',
                                flex: 1,
                                },
                                {
                                type: 'text',
                                text: data['meetups'][0]['address'],
                                wrap: true,
                                color: '#666666',
                                size: 'sm',
                                flex: 5,
                                },
                            ],
                        },
                        {
                            type: 'box',
                            layout: 'baseline',
                            contents: [
                                {
                                type: 'text',
                                text: '講者',
                                color: '#aaaaaa',
                                size: 'sm',
                                flex: 1,
                                },
                                {
                                type: 'text',
                                text: data['meetups'][0]['speaker'],
                                wrap: true,
                                color: '#666666',
                                size: 'sm',
                                flex: 5,
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        footer: {
            type: 'box',
            layout: 'vertical',
            contents: [
                {
                type: 'button',
                action: {
                    type: 'uri',
                    label: '報名資訊',
                    uri: data['meetups'][0]['kktix_link'],
                },
                },
            ],
        },
    });
}

async function MeetupHistory(context: any) {
    var contents: any = [];

    for(var index in data['meetups']) {
        var meetup_bubble = {
            type: 'bubble',
            hero: {
                type: 'image',
                url: 'https://scdn.line-apps.com/n/channel_devcenter/img/fx/01_1_cafe.png',
                size: 'full',
                aspectRatio: '20:13',
            },
            body: {
                type: 'box',
                layout: 'vertical',
                contents: [
                    {
                        type: 'text',
                        text: data['meetups'][index]['title'],
                        weight: 'bold',
                        size: 'md',
                    },
                    {
                        type: 'box',
                        layout: 'vertical',
                        margin: 'lg',
                        contents: [
                            {
                                type: 'box',
                                layout: 'baseline',
                                contents: [
                                    {
                                    type: 'text',
                                    text: '地點',
                                    color: '#aaaaaa',
                                    size: 'sm',
                                    flex: 1,
                                    },
                                    {
                                    type: 'text',
                                    text: data['meetups'][index]['address'],
                                    wrap: true,
                                    color: '#666666',
                                    size: 'sm',
                                    flex: 5,
                                    },
                                ],
                            },
                            {
                                type: 'box',
                                layout: 'baseline',
                                contents: [
                                    {
                                    type: 'text',
                                    text: '講者',
                                    color: '#aaaaaa',
                                    size: 'sm',
                                    flex: 1,
                                    },
                                    {
                                    type: 'text',
                                    text: data['meetups'][index]['speaker'],
                                    wrap: true,
                                    color: '#666666',
                                    size: 'sm',
                                    flex: 5,
                                    },
                                ],
                            },
                        ],
                    },
                ],
            },
            footer: {
                type: 'box',
                layout: 'vertical',
                contents: [
                    {
                    type: 'button',
                    action: {
                        type: 'uri',
                        label: '報名資訊',
                        uri: data['meetups'][index]['kktix_link'],
                    },
                    },
                ],
            },
        };
        contents.push(meetup_bubble);
     }
    
    var carousel: any = {
        "type": "carousel",
        "contents": contents
    }

    context.sendFlex('這是最近的幾次小聚', carousel)
}

module.exports = {
    NewMeetupInfo,
    MeetupHistory,
};