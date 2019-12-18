import * as data from './meetups.json';

function MeetupTemplate(data: any, index: number) {
  return {
    type: 'bubble',
    hero: {
      type: 'image',
      url: data.meetups[index].hero_image_url,
      size: 'full',
      aspectRatio: '20:13',
    },
    body: {
      type: 'box',
      layout: 'vertical',
      contents: [
        {
          type: 'text',
          text: data.meetups[index].title,
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
                  text: data.meetups[index].address,
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
                  text: data.meetups[index].speaker,
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
            uri: data.meetups[index].kktix_link,
          },
        },
      ],
    },
  };
}

async function NewMeetupInfo(context: any) {
  context.sendFlex('這是最近的一次機器人小聚！', MeetupTemplate(data, 0));
}

async function MeetupHistory(context: any) {
  let contents: any = [];

  for (let index in data.meetups) {
    let meetup_bubble = MeetupTemplate(data, Number(index));
    contents.push(meetup_bubble);
  }

  let carousel: any = {
    type: 'carousel',
    contents: contents,
  };

  context.sendFlex('這是最近的幾次小聚', carousel);
}

module.exports = {
  NewMeetupInfo,
  MeetupHistory,
};
